import { NextRequest, NextResponse } from "next/server";
import { getEditorConfig } from "@/config/editorConfig";
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

// Consistent interface for suggestions
export interface Suggestion {
  id: string;
  title: string;
  text: string;
  type:
    | "continueText"
    | "rewriteStyle"
    | "rewriteAngle"
    | "rewriteTone"
    | "custom";
}

// Get configuration from central editorConfig
const editorConfig = getEditorConfig();

export async function POST(request: NextRequest) {
  const { requestId } = createRequestContext();
  log(requestId, "API suggest route called");

  try {
    // Parse request body
    const body = await parseRequestBody<{
      text: string;
      cursorPosition?: number;
      config?: any;
    }>(request, requestId);
    if (!body) {
      return errorResponse("Invalid request format", 400);
    }

    const { text, cursorPosition, config = {} } = body;

    // Merge configs with defaults from editorConfig
    const defaultConfig = {
      maxTokens: editorConfig.prediction.maxTokens,
      temperature: editorConfig.prediction.temperature,
    };

    const mergedConfig = mergeConfig({ ...defaultConfig, ...config });

    // Check if LLM is disabled
    if (!checkLlmEnabled(mergedConfig, requestId)) {
      return NextResponse.json({ suggestions: [] });
    }

    // Validate input
    if (!text || typeof text !== "string") {
      return errorResponse("Missing or invalid text parameter", 400);
    }

    try {
      // Get Anthropic client
      const anthropic = getAnthropicClient(requestId);

      // Build unified prompt for suggestions
      const prompt = `I need multiple different ways to continue the following text.
The user is writing something and I need to offer them different options for how to proceed.

${cursorPosition !== undefined ? "IMPORTANT: The [CURSOR] placemark shows exactly where the user's cursor is positioned. This is where any new text will be inserted. You MUST generate text specifically for this position." : "Generate text to continue at the end of the user's current text."}

IMPORTANT PREPROCESSING INSTRUCTION:
The text may contain instructional content wrapped in triple square brackets like [[[this is an instruction]]]. When generating suggestions, you MUST completely IGNORE any text wrapped in these [[[triple square brackets]]]. These are just guidelines for the user and should NOT influence your text completion in any way. Treat them as if they don't exist in the original text.

The user's current text is:
---
${text}
---

${cursorPosition !== undefined ? "Notice the [CURSOR] marker above. This is where the user's cursor is currently positioned. Your suggestions should be inserted at this exact point." : ""}

Please provide the following options:

1. "Finish Paragraph" - A natural continuation that ${cursorPosition !== undefined ? "completes the thought starting from the cursor position" : "simply completes the current thought"}. This should be a smooth, direct continuation but ONLY include the new text I should add, NOT the original text the user wrote.

2. Three alternate versions that REWRITE the ${cursorPosition !== undefined ? "text around the cursor" : "last paragraph"} with different tones, styles, or angles. Examples might include:
   - Changing the tone (more formal, more casual, more technical, etc.)
   - Changing the perspective (from a specific viewpoint like "as a product manager" or "from a critical angle")
   - Changing the style (more descriptive, more concise, more narrative, etc.)

For each of the rewrite options (not the continuation), provide:
- A very short title (maximum 3 words) that describes the style/tone/angle
- ONLY include the new text to add ${cursorPosition !== undefined ? "at the cursor position marked by [CURSOR]" : "after the user's current text"}, NOT the complete paragraph including the user's text

IMPORTANT:
- Do NOT repeat the user's existing text in any of your suggestions.
- Only provide the continuation text that would be ${cursorPosition !== undefined ? "inserted at the [CURSOR] position" : "appended to what the user has already written"}.
- DO NOT include the [CURSOR] marker itself in your suggestions.
- COMPLETELY IGNORE any text wrapped in [[[triple square brackets]]] when generating suggestions. These are instructions to the user, not actual content.
- Your suggestions should continue naturally as if the instructions in [[[triple square brackets]]] were not present.
- NEVER output any text in triple square brackets in your suggestions.

Format your response as a JSON array with these fields:
- id: a unique string identifier for each option
- title: the short title (3 words or less) describing the option
- text: the suggested text
- type: either "continueText" (for option 1) or one of "rewriteStyle", "rewriteAngle", "rewriteTone" (for options 2-4)

CRITICAL: Your entire response MUST be valid, parseable JSON with no additional text before or after. Do not include ANY explanatory text, prose, or formatting outside the JSON structure. ONLY return the JSON array.`;

      // Updated system prompt to force JSON-only response
      const systemPrompt =
        "You are a helpful writing assistant that provides multiple continuation options for text. You MUST only output valid JSON that can be parsed. Your entire response MUST be a JSON array with no other text before or after. Never include explanatory text or any other content outside of the JSON structure. Remember to completely ignore any text wrapped in {{{triple angle brackets}}} when generating suggestions, as these are instructions to the user and not actual content.";

      // Call Claude API
      log(
        requestId,
        `Making request to Claude API with model ${mergedConfig.model}...`,
      );

      // Log the cursor position for debugging
      log(
        requestId,
        "Text with cursor position:",
        cursorPosition !== undefined
          ? `Cursor at position ${cursorPosition}`
          : "No cursor position provided",
      );

      const response = await anthropic.messages.create({
        model: mergedConfig.model,
        max_tokens: mergedConfig.maxTokens,
        temperature: mergedConfig.temperature,
        messages: [{ role: "user", content: prompt }],
        system: systemPrompt,
      });

      // Get response text
      const responseText =
        response.content?.[0]?.type === "text"
          ? (response.content[0] as { type: "text"; text: string }).text
          : "";

      // Parse response to get suggestions
      let suggestions: Suggestion[] = [];
      log(requestId, `Response length: ${responseText.length}`);

      try {
        // Step 1: Parse response to get raw suggestions array
        let rawSuggestions: any[] = [];

        try {
          // Try to parse entire response as JSON array
          const trimmedResponse = responseText.trim();

          // Handle code block format if needed
          let textToProcess = trimmedResponse;
          if (
            trimmedResponse.startsWith("```json") &&
            trimmedResponse.endsWith("```")
          ) {
            textToProcess = trimmedResponse
              .replace(/^```json\n/, "")
              .replace(/\n```$/, "");
          }

          // Try parsing
          const parsed = JSON.parse(textToProcess);

          if (Array.isArray(parsed)) {
            // Simple case - we got an array
            rawSuggestions = parsed;
          } else if (
            typeof parsed === "object" &&
            parsed !== null &&
            Array.isArray(parsed.suggestions)
          ) {
            // Got an object with suggestions array
            rawSuggestions = parsed.suggestions;
          } else {
            throw new Error("Response not in expected format");
          }
        } catch (e) {
          // Simple fallback for when JSON parse fails
          log(requestId, "JSON parse failed, trying fallback", e);

          // Find first complete JSON object
          const match = /\{\s*"id".*?"type"\s*:\s*"[^"]*"\s*\}/s.exec(
            responseText,
          );
          if (match) {
            log(requestId, "Found complete suggestion object");
            try {
              // Wrap in array brackets
              const fixedJson = `[${match[0]}]`;
              rawSuggestions = JSON.parse(fixedJson);
              log(requestId, "Fallback parse worked - got one suggestion");
            } catch (error) {
              log(requestId, "Even fallback parse failed:", error);
              throw error;
            }
          } else {
            log(requestId, "No complete object found in response");
            throw new Error("No valid suggestion found");
          }
        }

        // Step 2: Sanitize and validate each suggestion
        suggestions = rawSuggestions
          .filter(
            (item) =>
              item && typeof item === "object" && typeof item.text === "string",
          )
          .map((item, index) => ({
            id:
              typeof item.id === "string"
                ? item.id
                : `suggestion-${Date.now()}-${index}`,
            title: typeof item.title === "string" ? item.title : "Continue",
            text: item.text,
            type: typeof item.type === "string" ? item.type : "continueText",
          })) as Suggestion[];
      } catch (error) {
        const parseError = error as Error;
        logError(requestId, "Error processing suggestions:", parseError);

        // Fallback with error message
        suggestions = [
          {
            id: "fallback",
            title: "Continue",
            text: "Unable to generate suggestions. Please try again.",
            type: "continueText",
          },
        ];
      }

      // Return the suggestions
      return NextResponse.json({ suggestions });
    } catch (error) {
      logError(requestId, "API error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return errorResponse(errorMessage, 500);
    }
  } catch (error) {
    logError(requestId, "Request parsing error:", error);
    return errorResponse("Invalid request format", 400);
  }
}
