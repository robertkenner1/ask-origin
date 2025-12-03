import { NextRequest } from "next/server";
import {
  createRequestContext,
  log,
  logError,
  getAnthropicClient,
  parseRequestBody,
  checkLlmEnabled,
} from "@/utils/common/apiUtils";
import {
  createStreamResponse,
  createAnthropicEventStream,
} from "@/utils/streamResponse";
import prompts from "@/prompts";
import { DocumentPromptVariant } from "@/prompts";

// Document generation types
interface GenerateDocumentRequest {
  prompt?: string;
  topic?: string;
  config?: any;
  deepWriter?: boolean;
  documentId?: string;
  useSSE?: boolean;
  stream?: boolean;
  style?: string;
  length?: string | number;
  domain?: string;
  audience?: string;
  format?: string;
  customInstructions?: string;
  sections?: string[];
  variant?: DocumentPromptVariant;
  thinking?: {
    type: "enabled";
    budget_tokens?: number;
  };
}

export async function POST(request: NextRequest) {
  const { requestId, requestStartTime } = createRequestContext();
  log(requestId, "API stream document generation route called");

  try {
    // Parse the request body
    const body = await parseRequestBody<GenerateDocumentRequest>(
      request,
      requestId,
    );

    if (!body) {
      return new Response(JSON.stringify({ error: "Invalid request format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Extract parameters (support both old "prompt" and new "topic" parameter name)
    const {
      prompt, // Old API used "prompt"
      topic, // New API uses "topic"
      config = {},
      deepWriter = false,
      documentId = null,
      useSSE = false,
      stream = true, // Default to streaming for this endpoint
      style,
      length,
      domain,
      audience,
      format,
      customInstructions,
      sections,
      variant = DocumentPromptVariant.DEFAULT,
    } = body;

    // Use topic if provided, otherwise use prompt (for backward compatibility)
    const actualTopic = topic || prompt || "";

    log(requestId, "Request received:", {
      topic: actualTopic,
      config,
      deepWriter,
      streaming: stream,
      variant: deepWriter ? "deep-writer" : variant, // Log actual variant being used
    });

    // Validate input
    if (!actualTopic || !actualTopic.trim()) {
      logError(requestId, "Missing required parameter: topic or prompt", null);
      return new Response(
        JSON.stringify({
          error: "Missing required parameter: topic or prompt",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Get Anthropic client
    log(requestId, "Getting Anthropic client...");
    const anthropic = getAnthropicClient(requestId);
    log(requestId, "Anthropic client created successfully");

    // IMPORTANT: When deepWriter is true, always use DeepWriter variant
    // Ignore the variant parameter in this case
    const promptVariant = deepWriter
      ? DocumentPromptVariant.DEEP_WRITER
      : variant;

    const promptTemplate = prompts.getDocumentPromptByVariant(promptVariant);

    // Log which prompt template we're using
    log(
      requestId,
      `Using document prompt template: ${promptTemplate.id}, variant: ${promptVariant}`,
    );

    // Format the prompt with variables
    const promptVars = {
      topic: actualTopic, // Use the actual topic we determined
      style,
      length,
      domain,
      audience,
      format,
      customInstructions,
      sections,
      deepWriter: promptVariant === DocumentPromptVariant.DEEP_WRITER, // Ensure this matches the prompt variant
    };

    // Use our prompt system to create the formatted prompt package
    const { prompt: formattedPrompt, systemPrompt } =
      prompts.createPromptPackage(promptTemplate, promptVars);

    // Get model config from the prompt template
    const modelConfig = promptTemplate.modelConfig || {};

    // Extract config values with defaults
    const { llmEnabled = true } = config;

    // Override with user config if provided
    const model =
      config.model || modelConfig.model || "claude-3-7-sonnet-20250219";
    const temperature = config.temperature || modelConfig.temperature || 0.7;
    const maxTokens =
      config.maxTokens || modelConfig.maxTokens || (deepWriter ? 5000 : 1500);

    log(requestId, "Using model config:", {
      model,
      maxTokens,
      temperature,
      llmEnabled,
      deepWriter,
    });

    // Check if LLM is disabled
    if (
      !checkLlmEnabled(
        {
          llmEnabled,
          model,
          maxTokens,
          temperature,
          paragraphsToInclude: config.paragraphsToInclude || 3,
          typingDebounceMs: config.typingDebounceMs || 1000,
        },
        requestId,
      )
    ) {
      if (stream) {
        // Return error as stream
        async function* generateErrorEvents() {
          yield {
            type: "error",
            message: "LLM responses are currently disabled.",
            code: "LLM_DISABLED",
            timestamp: Date.now(),
          };

          yield {
            type: "progress",
            step: "error",
            message: "LLM responses are currently disabled.",
            percentage: 0,
            timestamp: Date.now(),
          };
        }

        return createStreamResponse(generateErrorEvents());
      } else {
        // Return regular JSON response
        return new Response(
          JSON.stringify({
            error: "LLM responses are currently disabled.",
          }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Call the Claude API
    log(requestId, "Making request to Claude API...");
    const apiStartTime = Date.now();

    try {
      if (stream) {
        // Use streaming response
        log(requestId, "Creating streaming document generation request");

        // Extract thinking configuration if present
        const thinkingConfig = body.thinking;
        let finalTemperature = temperature;

        // Log if thinking is enabled
        if (thinkingConfig) {
          log(requestId, "🧠 Extended Thinking configuration detected:", {
            type: "enabled",
            budgetTokens: thinkingConfig.budget_tokens || 6000,
          });

          // IMPORTANT: When thinking is enabled, temperature MUST be set to 1
          // This is a requirement from the Claude API
          finalTemperature = 1;

          // Ensure max_tokens is larger than thinking budget
          const thinkingBudget = thinkingConfig.budget_tokens || 6000;
          const adjustedMaxTokens = Math.max(maxTokens, thinkingBudget + 1000);

          log(
            requestId,
            `Adjusting max_tokens to ${adjustedMaxTokens} to accommodate thinking budget`,
          );
        }

        // Create the Claude API streaming request
        try {
          // Create the streaming request with proper error handling
          const response = await anthropic.messages.create({
            model,
            max_tokens: thinkingConfig
              ? Math.max(
                  maxTokens,
                  (thinkingConfig.budget_tokens || 6000) + 1000,
                )
              : maxTokens,
            temperature: finalTemperature, // Use adjusted temperature when thinking is enabled
            messages: [
              {
                role: "user",
                content: formattedPrompt,
              },
            ],
            system: systemPrompt,
            // Add thinking parameter if enabled
            ...(thinkingConfig && {
              thinking: {
                type: "enabled",
                budget_tokens: thinkingConfig.budget_tokens || 6000,
              },
            }),
            stream: true,
          });

          // Create event stream from Anthropic's streaming response
          const eventStream = createAnthropicEventStream(response, {
            includeThinking: true,
            initialStep: "analyzing",
            deepWriter: deepWriter,
          });

          // Return SSE response
          return createStreamResponse(eventStream, {
            retry: 3000,
            includeId: true,
          });
        } catch (error) {
          const streamCreationError = error as { message?: string };
          console.error("Error creating stream:", streamCreationError);

          // Return error as stream
          async function* generateErrorEvents() {
            yield {
              type: "error",
              message: streamCreationError.message || "Error creating stream",
              code: "STREAM_CREATION_ERROR",
              timestamp: Date.now(),
            };

            yield {
              type: "progress",
              step: "error",
              message: streamCreationError.message || "Error creating stream",
              percentage: 0,
              timestamp: Date.now(),
            };
          }

          return createStreamResponse(generateErrorEvents());
        }
      } else {
        // Use non-streaming response
        const response = await anthropic.messages.create({
          model,
          max_tokens: maxTokens,
          temperature,
          messages: [
            {
              role: "user",
              content: formattedPrompt,
            },
          ],
          system: systemPrompt,
        });

        const apiDuration = Date.now() - apiStartTime;
        log(requestId, `Claude API response received in ${apiDuration}ms`);

        const responseText =
          response.content?.[0]?.type === "text"
            ? (response.content[0] as { type: "text"; text: string }).text
            : "";

        // Return the non-streaming response
        return Response.json({
          documentType: "generic",
          title: "Generated Document",
          content: responseText,
          confidence: 0.8,
          deepWriter: promptVariant === DocumentPromptVariant.DEEP_WRITER, // Include actual DeepWriter mode
        });
      }
    } catch (error) {
      const apiError = error as { message?: string; name?: string };
      logError(requestId, "Error during Claude API call:", apiError);

      if (stream) {
        // Return error as stream
        async function* generateErrorEvents() {
          // Send error event
          yield {
            type: "error",
            message: apiError.message || "Error during API call",
            code: apiError.name || "API_ERROR",
            timestamp: Date.now(),
          };

          // Send progress event for error
          yield {
            type: "progress",
            step: "error",
            message: apiError.message || "Error during API call",
            percentage: 0,
            timestamp: Date.now(),
          };
        }

        return createStreamResponse(generateErrorEvents());
      } else {
        return new Response(
          JSON.stringify({
            error: apiError.message || "Error during API call",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }
  } catch (error) {
    logError(requestId, "Error parsing request:", error);
    return new Response(JSON.stringify({ error: "Invalid request format" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
