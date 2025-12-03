// Claude API Service for text prediction using server-side API
import type { Anthropic } from "@anthropic-ai/sdk";
import { useNetworkStatus } from "@/hooks/common/useNetworkStatus";

// Use web standard Response type
type Response = globalThis.Response;

/**
 * Configuration for the Claude API
 */
export interface ClaudeConfig {
  model: string;
  maxTokens: number;
  temperature: number;
  paragraphsToInclude: number;
  typingDebounceMs: number;
  llmEnabled: boolean;
  thinking?: {
    enabled: boolean;
    budgetTokens: number;
  };
}

/**
 * Default configuration for Claude API requests
 */
export const defaultClaudeConfig: ClaudeConfig = {
  model: "claude-3-7-sonnet-20250219",
  maxTokens: 100,
  temperature: 0.7,
  paragraphsToInclude: 2,
  typingDebounceMs: 500,
  llmEnabled: true,
};

/**
 * Option types for different suggestion variants
 */
export type SuggestionOption = {
  id: string;
  title: string; // Short title (3 words or less)
  text: string; // The suggested text
  type:
    | "continueText"
    | "rewriteStyle"
    | "rewriteAngle"
    | "rewriteTone"
    | "custom";
};

/**
 * API error handling class
 */
class APIError extends Error {
  status: number;
  isRateLimit: boolean;

  constructor(message: string, status: number, isRateLimit: boolean = false) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.isRateLimit = isRateLimit;
  }
}

/**
 * Handles API response errors consistently
 */
async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = "Unknown error occurred";
    let isRateLimit = false;

    // Check if this is a rate limit error (HTTP 429)
    if (response.status === 429) {
      isRateLimit = true;
      errorMessage = "Rate limit exceeded. Please try again in a few minutes.";
    }

    try {
      const errorData = await response.json();

      // Use the more detailed error message from the response if available
      if (errorData.error) {
        errorMessage = errorData.error;
      }

      // Check for specific Claude rate limit errors
      if (
        errorData.type === "error" &&
        errorData.error?.type === "rate_limit_error"
      ) {
        isRateLimit = true;
        errorMessage =
          errorData.error.message ||
          "Rate limit exceeded. Please try again in a few minutes.";
      }
    } catch (e) {
      // If we can't parse the JSON, use the status text
      errorMessage = response.statusText || errorMessage;
    }

    throw new APIError(errorMessage, response.status, isRateLimit);
  }

  return response.json() as Promise<T>;
}

/**
 * Gets text suggestions from Claude API through server-side API route
 * @param text The text to get suggestions for
 * @param cursorPosition Optional cursor position in the text
 * @param config Configuration options
 * @returns Array of suggestion options
 * @throws Error if API call fails
 */
export async function getSuggestions(
  text: string,
  cursorPosition?: number,
  config: Partial<ClaudeConfig> = {},
): Promise<SuggestionOption[]> {
  // Track the network request
  useNetworkStatus.getState().incrementRequests();

  try {
    // Merge default config with provided config
    const mergedConfig = { ...defaultClaudeConfig, ...config };
    const { model, maxTokens, temperature, thinking } = mergedConfig;

    // Call our server-side API route for suggestions
    const response = await fetch("/api/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        cursorPosition,
        config: {
          model,
          maxTokens,
          temperature,
          llmEnabled: mergedConfig.llmEnabled,
          thinking: thinking
            ? {
                type: "enabled",
                budget_tokens: thinking.budgetTokens,
              }
            : undefined,
        },
      }),
    });

    const data = await handleApiResponse<{ suggestions: SuggestionOption[] }>(
      response,
    );

    if (!data.suggestions || !Array.isArray(data.suggestions)) {
      return [];
    }

    return data.suggestions;
  } catch (error) {
    if (error instanceof APIError) {
      // For rate limit errors, provide a more user-friendly message
      if (error.isRateLimit) {
        const rateLimitError = new APIError(
          "You've reached Claude's rate limit. Please wait a minute and try again.",
          429,
          true,
        );
        throw rateLimitError;
      }
      throw error;
    } else if (error instanceof Error) {
      throw error;
    }

    throw new Error("Unknown error occurred when calling suggestions API");
  } finally {
    // Always decrement the request counter, even if an error occurred
    useNetworkStatus.getState().decrementRequests();
  }
}

/**
 * Generates a document from a prompt using Claude API
 * @param prompt The prompt to generate a document from
 * @param config Configuration options
 * @returns Generated document data
 * @throws Error if API call fails
 */
export interface PageContent {
  type: "outline" | "draft" | "research" | "custom";
  name: string;
  content: string;
  contentType?: "essay" | "prd" | "research" | "resume" | "custom";
}

export interface GenerateDocumentResponse {
  documentType: string;
  title: string;
  content: string;
  confidence: number;
  model?: string;
  pages?: PageContent[];
  deepWriter?: boolean;
}

export async function generateDocument(
  prompt: string,
  config: Partial<ClaudeConfig> = {},
  deepWriter: boolean = false,
): Promise<GenerateDocumentResponse> {
  // Track the network request
  useNetworkStatus.getState().incrementRequests();

  try {
    // Merge default config with provided config
    const mergedConfig = { ...defaultClaudeConfig, ...config };
    const { model, temperature, llmEnabled, thinking } = mergedConfig;

    // Call our server-side API route
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        config: {
          model,
          temperature,
          llmEnabled,
          thinking: thinking
            ? {
                type: "enabled",
                budget_tokens: thinking.budgetTokens,
              }
            : undefined,
        },
        deepWriter,
      }),
    });

    const data = await handleApiResponse<GenerateDocumentResponse>(response);

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      // For rate limit errors, provide a more user-friendly message
      if (error.isRateLimit) {
        const rateLimitError = new APIError(
          "You've reached Claude's rate limit. Please wait a minute and try again.",
          429,
          true,
        );
        throw rateLimitError;
      }
      throw error;
    } else if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      "Unknown error occurred when calling document generation API",
    );
  } finally {
    // Always decrement the request counter, even if an error occurred
    useNetworkStatus.getState().decrementRequests();
  }
}

/**
 * Sends a message to Claude API for chat functionality
 * @param messages The chat messages to send
 * @param config Configuration options
 * @returns The assistant's response message
 * @throws Error if API call fails
 */
export async function sendChatMessage(
  messages: {
    type: "user" | "assistant";
    content: string;
    id: string;
    timestamp: Date;
  }[],
  config: Partial<ClaudeConfig> = {},
): Promise<{
  id: string;
  content: string;
  type: "assistant";
  timestamp: Date;
}> {
  // Track the network request
  useNetworkStatus.getState().incrementRequests();

  try {
    // Merge default config with provided config
    const mergedConfig = { ...defaultClaudeConfig, ...config };
    const { model, maxTokens, temperature, llmEnabled, thinking } =
      mergedConfig;

    // Call our server-side API route
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        config: {
          model,
          maxTokens,
          temperature,
          llmEnabled,
          thinking: thinking
            ? {
                type: "enabled",
                budget_tokens: thinking.budgetTokens,
              }
            : undefined,
        },
      }),
    });

    const data = await handleApiResponse<{
      message: {
        id: string;
        content: string;
        type: "assistant";
        timestamp: Date;
      };
    }>(response);
    return data.message;
  } catch (error) {
    if (error instanceof APIError) {
      // For rate limit errors, provide a more user-friendly message
      if (error.isRateLimit) {
        const rateLimitError = new APIError(
          "You've reached Claude's rate limit. Please wait a minute and try again.",
          429,
          true,
        );
        throw rateLimitError;
      }
      throw error;
    } else if (error instanceof Error) {
      throw error;
    }

    throw new Error("Unknown error occurred when calling chat API");
  } finally {
    // Always decrement the request counter, even if an error occurred
    useNetworkStatus.getState().decrementRequests();
  }
}
