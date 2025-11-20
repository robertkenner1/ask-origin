import { NextRequest } from "next/server";
import {
  createRequestContext,
  log,
  logError,
  getAnthropicClient,
  parseRequestBody,
  checkLlmEnabled,
} from "@/utils/common/apiUtils";
import { ThinkingEvent } from "@/services/api/streaming/StreamingClient";
import {
  createStreamResponse,
  createAnthropicEventStream,
} from "@/utils/streamResponse";

// Converts our app's message format to Anthropic's format
const convertToAnthropicMessages = (messages: any[]) => {
  return messages.map((message) => ({
    role: message.type,
    content: message.content,
  }));
};

export async function POST(request: NextRequest) {
  const { requestId, requestStartTime } = createRequestContext();
  log(requestId, "API stream chat route called");

  try {
    // Parse the request body
    const body = await parseRequestBody<{
      messages: any[];
      config?: any;
      stream?: boolean;
      domain?: string;
    }>(request, requestId);

    if (!body) {
      return new Response(JSON.stringify({ error: "Invalid request format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { messages, config = {}, stream = true, domain } = body;

    log(requestId, "Request received:", {
      messagesCount: messages?.length || 0,
      configKeys: Object.keys(config),
      streaming: stream,
    });

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      logError(requestId, "Missing required parameter: messages", null);
      return new Response(
        JSON.stringify({ error: "Missing required parameter: messages" }),
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

    // Extract config values with defaults
    const {
      model = "claude-3-7-sonnet-20250219",
      temperature = 0.7,
      llmEnabled = true,
      systemPrompt,
      thinking,
    } = config;

    // For chat, use reasonable max tokens default
    let maxTokens = config.maxTokens || 1000;

    // Format thinking configuration if enabled
    let thinkingConfig = undefined;
    if (thinking) {
      // The Claude API requires 'type' for thinking configuration
      thinkingConfig = {
        type: "enabled", // Required field for all Claude API versions
        budget_tokens: thinking.budget_tokens || 6000, // Increased default budget
      };

      // IMPORTANT: max_tokens must be greater than thinking.budget_tokens
      // If thinking budget is set, ensure max_tokens is larger
      // Add 1000 tokens buffer for the actual response content
      const thinkingBudget = thinkingConfig.budget_tokens;
      if (maxTokens <= thinkingBudget) {
        maxTokens = thinkingBudget + 1000;
        log(
          requestId,
          `Adjusting max_tokens to ${maxTokens} to exceed thinking budget ${thinkingBudget}`,
        );
      }

      log(requestId, "Extended Thinking configuration detected:", {
        type: "enabled",
        budgetTokens: thinkingConfig.budget_tokens,
        // Extended thinking requires temperature=1
        temperatureOverride: true,
        // Ensure max_tokens > thinking.budget_tokens
        maxTokens: maxTokens,
      });

      // Additional debug logging for thinking configuration
      log(requestId, "🧠 Thinking config details:", {
        config: JSON.stringify(thinkingConfig),
        maxTokens,
        model,
      });
    }

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
          JSON.stringify({ error: "LLM responses are currently disabled." }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Set up default system prompt
    const defaultSystemPrompt =
      "You are Orchestra, an AI writing assistant integrated into a text editor. " +
      "Your purpose is to help users with their writing tasks, answer questions, and provide " +
      "helpful suggestions. Be concise, helpful, and friendly.";

    // Use custom system prompt if provided, otherwise use default
    const finalSystemPrompt = systemPrompt || defaultSystemPrompt;

    // Log the system prompt being used
    log(
      requestId,
      `Using ${systemPrompt ? "custom" : "default"} system prompt`,
    );

    // Convert messages to Anthropic format
    const anthropicMessages = convertToAnthropicMessages(messages);

    // IMPORTANT: When thinking is enabled, temperature MUST be set to 1
    // This is a requirement from the Claude API
    const finalTemperature = thinkingConfig ? 1 : temperature;

    // Log the API call configuration
    log(requestId, "Claude API request configuration:", {
      model,
      maxTokens,
      temperature: finalTemperature,
      systemPromptLength: finalSystemPrompt.length,
      messagesCount: anthropicMessages.length,
      thinkingEnabled: !!thinkingConfig,
      thinkingBudget: thinkingConfig?.budget_tokens,
    });

    // Call the Claude API
    log(requestId, "Making request to Claude API...");
    const apiStartTime = Date.now();

    try {
      if (stream) {
        // Use streaming response
        log(requestId, "Using streaming mode");

        // Build API request with conditionally applied thinking parameter
        const apiRequest: any = {
          model,
          max_tokens: maxTokens,
          temperature: finalTemperature, // Use adjusted temperature
          messages: anthropicMessages,
          system: finalSystemPrompt,
        };

        // Add thinking parameter in the correct format for the API
        if (thinkingConfig) {
          log(requestId, "🧠 Adding thinking config to API request");

          // The Claude API only supports basic thinking configuration
          apiRequest.thinking = {
            type: "enabled",
            budget_tokens: thinkingConfig.budget_tokens,
          };

          // Stream is already set by default

          log(
            requestId,
            `🧠 Using thinking format for ${model}:`,
            apiRequest.thinking,
          );
        }

        const streamResponse = await anthropic.messages.stream(apiRequest);

        // Log start of streaming
        log(requestId, "Stream started, creating event stream");

        // Debug logging for thinking configuration
        if (thinkingConfig) {
          log(requestId, "🧠 Extended thinking mode enabled", {
            budget: thinkingConfig.budget_tokens,
            temperature: finalTemperature,
          });
        }

        // Create event stream from Anthropic's streaming response
        const eventStream = createAnthropicEventStream(streamResponse, {
          includeThinking: !!thinkingConfig,
          initialStep: "analyzing",
        });

        // Add explicit debug logging for events passing through the stream
        const debuggedEventStream = (async function* () {
          for await (const event of eventStream) {
            // Log all events going to the client
            log(requestId, "📡 Sending event to client:", {
              type: event.type,
              hasThinking: event.type === "thinking",
              dataPreview:
                event.type === "thinking"
                  ? `${(event as ThinkingEvent).content?.substring(0, 50)}...`
                  : undefined,
            });

            yield event;
          }
        })();

        // Return SSE response
        log(requestId, "Returning SSE stream response");
        return createStreamResponse(debuggedEventStream, {
          retry: 3000,
          includeId: true,
        });
      } else {
        // Use non-streaming response
        log(requestId, "Using non-streaming mode");

        // Build API request with conditionally applied thinking parameter
        const apiRequest: any = {
          model,
          max_tokens: maxTokens,
          temperature: finalTemperature, // Use adjusted temperature
          messages: anthropicMessages,
          system: finalSystemPrompt,
        };

        // Add thinking parameter in the correct format for the API
        if (thinkingConfig) {
          log(
            requestId,
            "🧠 Adding thinking config to API request (non-streaming)",
          );

          // The Claude API only supports basic thinking configuration
          apiRequest.thinking = {
            type: "enabled",
            budget_tokens: thinkingConfig.budget_tokens,
          };

          log(
            requestId,
            `🧠 Using thinking format for ${model} (non-streaming):`,
            apiRequest.thinking,
          );
        }

        const response = await anthropic.messages.create(apiRequest);

        const apiDuration = Date.now() - apiStartTime;
        log(requestId, `Claude API response received in ${apiDuration}ms`);

        // Use a variable to store thinking data, if available
        const thinkingData = (response as any).thinking;

        // Log thinking data if present
        if (thinkingData) {
          log(
            requestId,
            `Thinking received (length: ${thinkingData.length} chars)`,
          );
          log(
            requestId,
            `Thinking snippet: ${thinkingData.substring(0, 200)}...`,
          );
        }

        const responseText =
          response.content?.[0]?.type === "text"
            ? (response.content[0] as { type: "text"; text: string }).text
            : "";

        // Create a new message with the response
        const responseMessage = {
          id: Date.now().toString(),
          content: responseText,
          type: "assistant",
          timestamp: new Date(),
          thinking: thinkingData,
        };

        const totalRequestTime = Date.now() - requestStartTime;
        log(requestId, `API chat complete in ${totalRequestTime}ms`, {
          responseLength: responseText.length,
          thinkingLength: thinkingData?.length || 0,
        });

        return Response.json({
          message: responseMessage,
          thinking: thinkingData, // Added for backward compatibility
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
