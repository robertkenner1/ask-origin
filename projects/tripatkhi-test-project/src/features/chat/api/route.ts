import { NextRequest, NextResponse } from "next/server";
import { Message } from "@/app/components/ChatMessage";
import {
  createRequestContext,
  log,
  logError,
  getAnthropicClient,
  mergeConfig,
  errorResponse,
  parseRequestBody,
  checkLlmEnabled,
} from "@/utils/common/apiUtils";

// Converts our app's message format to Anthropic's format
const convertToAnthropicMessages = (messages: Message[]) => {
  return messages.map((message) => ({
    role: message.type,
    content: message.content,
  })) as { role: "user" | "assistant"; content: string }[];
};

export async function POST(request: NextRequest) {
  const { timestamp, requestId, requestStartTime } = createRequestContext();
  log(requestId, "API chat route called");

  try {
    // Parse the request body
    const body = await parseRequestBody<{ messages: Message[]; config?: any }>(
      request,
      requestId,
    );
    if (!body) {
      return errorResponse("Invalid request format", 400);
    }

    const { messages, config = {} } = body;

    log(requestId, "Request received:", {
      messagesCount: messages?.length || 0,
      config,
    });

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      logError(requestId, "Missing required parameter: messages", null);
      return errorResponse("Missing required parameter: messages", 400);
    }

    try {
      log(requestId, "Getting Anthropic client...");
      const anthropic = getAnthropicClient(requestId);
      log(requestId, "Anthropic client created successfully");

      // Merge default config with provided config
      const mergedConfig = mergeConfig(config);
      const { model, temperature, llmEnabled } = mergedConfig;

      // Check if LLM is disabled
      if (!checkLlmEnabled(mergedConfig, requestId)) {
        return NextResponse.json({
          message: {
            id: Date.now().toString(),
            content: "LLM responses are currently disabled.",
            type: "assistant",
            timestamp: new Date(),
          },
        });
      }

      // For chat, we'll use a higher max tokens default
      const maxTokens = config.maxTokens || 1000;

      log(requestId, "Using model config:", {
        model,
        maxTokens,
        temperature,
        llmEnabled,
      });

      // Convert messages to Anthropic format
      const anthropicMessages = convertToAnthropicMessages(messages);

      // Call the Claude API
      log(requestId, "Making request to Claude API...");
      const apiStartTime = Date.now();

      try {
        const response = await anthropic.messages.create({
          model,
          max_tokens: maxTokens,
          temperature,
          messages: anthropicMessages,
          system:
            "You are Orchestra, an AI writing assistant integrated into a text editor. " +
            "Your purpose is to help users with their writing tasks, answer questions, and provide " +
            "helpful suggestions. Be concise, helpful, and friendly.\n\n" +
            "Always format your responses with proper Markdown for better readability:\n" +
            "- Use line breaks between paragraphs (double newlines)\n" +
            "- Use **bold** for emphasis\n" +
            "- Use `code` for inline code\n" +
            "- Use ```language\\ncode\\n``` for code blocks\n\n" +
            "List formatting instructions (very important):\n" +
            "1. Choose EITHER ordered (numbered) OR unordered (bullet) lists for each response section\n" +
            '2. For ordered lists, use "1. ", "2. ", etc., with each item on a new line\n' +
            '3. For unordered lists, use "- " with each item on a new line\n' +
            "4. Do not mix list types within the same conceptual section\n" +
            "5. Always leave an empty line before and after a list\n" +
            "6. Prefer numbered lists when providing sequential steps or prioritized items\n" +
            "7. Prefer bullet points when listing related items without specific order or priority\n\n" +
            "Important general formatting rules:\n" +
            "1. Always leave an empty line between different content blocks (paragraphs, lists, code blocks)\n" +
            "2. Ensure proper whitespace formatting throughout your response\n" +
            "3. Make sure ordered lists use proper sequential numbering (1., 2., 3.)\n" +
            "4. No nested lists - keep all lists at a single level of hierarchy\n" +
            "5. Format lists consistently with proper line breaks between items\n\n" +
            "Special Formatting for Instructions:\n" +
            "1. When you want to provide writing prompts, suggestions, or placeholders that the user should replace with their own content, wrap these in triple angle brackets like this: <<<Write your introduction here>>>\n" +
            "2. This formatting helps the user distinguish between your explanatory text and content they should replace\n" +
            "3. Only use this format for text that is meant to be replaced, not for your general advice\n\n" +
            "Important: When analyzing the user's text, ignore any content wrapped in triple angle brackets (<<<like this>>>). These are placeholders and instructions, not the user's actual content.\n\n" +
            "Be especially careful with lists - each item must be properly formatted, and the list must be properly separated from surrounding content with blank lines.\n\n" +
            "Keep responses relatively brief and to the point. Provide specific, actionable advice when asked about writing. Your responses should be helpful while respecting that the user is the author of their own work.",
        });

        const apiDuration = Date.now() - apiStartTime;
        log(requestId, `Claude API response received in ${apiDuration}ms`);

        const responseText =
          response.content?.[0]?.type === "text"
            ? (response.content[0] as { type: "text"; text: string }).text
            : "";

        // Create a new message with the response
        const responseMessage: Message = {
          id: Date.now().toString(),
          content: responseText,
          type: "assistant",
          timestamp: new Date(),
        };

        const totalRequestTime = Date.now() - requestStartTime;
        log(requestId, `API chat complete in ${totalRequestTime}ms`);

        return NextResponse.json({
          message: responseMessage,
        });
      } catch (apiError) {
        logError(requestId, "Error during Claude API call:", apiError);
        throw apiError;
      }
    } catch (error) {
      logError(requestId, "Error in chat API:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return errorResponse(errorMessage, 500);
    }
  } catch (error) {
    logError(requestId, "Error parsing request:", error);
    return errorResponse("Invalid request format", 400);
  }
}
