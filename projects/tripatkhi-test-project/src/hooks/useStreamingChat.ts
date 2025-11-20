import { useState, useCallback, useEffect, useRef } from "react";
import {
  StreamingClient,
  StreamOperation,
} from "@/services/api/streaming/StreamingClient";
import { ChatRoleType } from "@/prompts";

// Simple client instance - no extra config needed
const streamingClient = new StreamingClient();

/**
 * Progress state for streaming operations
 */
export interface StreamProgress {
  step:
    | "idle"
    | "analyzing"
    | "generating"
    | "processing"
    | "complete"
    | "error"
    | "paused";
  message: string;
  percentage: number;
}

/**
 * Enhanced error type
 */
export interface StreamError extends Error {
  code?: string;
  recoverable?: boolean;
}

/**
 * Chat message in streaming context
 */
export interface ChatMessage {
  type: "user" | "assistant";
  content: string;
  id: string;
  timestamp: Date;
}

/**
 * ChatVars - parameters for the streaming chat API
 */
export interface ChatVars {
  messages: ChatMessage[];
  systemPrompt?: string;
  thinking?: {
    type: "enabled";
    budget_tokens?: number;
  };
}

/**
 * Result type for the streaming chat operation
 */
export interface StreamChatResult {
  message: ChatMessage;
}

/**
 * Hook return type
 */
export interface UseStreamingChatReturn {
  sendStreamingMessage: (
    chatVars: ChatVars,
    role?: ChatRoleType,
  ) => Promise<StreamChatResult | null>;
  cancelStreaming: () => void;
  pauseStreaming: () => void;
  resumeStreaming: () => void;
  retryAfterError: () => void;
  isStreaming: boolean;
  content: string;
  thinking: string;
  progress: StreamProgress;
  error: StreamError | null;
}

/**
 * Processes thinking content from raw event data
 * Enhanced to handle multiple thinking data formats from Claude 3.7 Sonnet
 */
function processThinkingContent(rawContent: string): string {
  // Try to parse as JSON if it looks like JSON
  if (
    typeof rawContent === "string" &&
    rawContent.trim().startsWith("{") &&
    rawContent.trim().endsWith("}")
  ) {
    try {
      const parsed = JSON.parse(rawContent);

      // Handle various possible structures for thinking content
      // Each of these paths represents a different possible location
      // where Claude might include thinking data

      // Case 1: Direct thinking property
      if (parsed.thinking) {
        console.log("Found direct thinking property");
        return parsed.thinking;
      }

      // Case 2: Content property
      else if (parsed.content) {
        console.log("Found content property");
        return parsed.content;
      }

      // Case 3: Inside delta object (message_delta event)
      else if (parsed.delta && parsed.delta.thinking) {
        console.log("Found thinking in delta object");
        return parsed.delta.thinking;
      }

      // Case 4: Inside message object (message event)
      else if (parsed.message && parsed.message.thinking) {
        console.log("Found thinking in message object");
        return parsed.message.thinking;
      }

      // Case 5: Inside content_block object (content_block_start event)
      else if (parsed.content_block && parsed.content_block.thinking) {
        console.log("Found thinking in content_block object");
        return parsed.content_block.thinking;
      }

      // Default: If no specific thinking field is found, use the whole object
      console.log("No specific thinking property found, using entire JSON");
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // If parsing fails, use the raw content
      console.log("Failed to parse thinking as JSON, using raw content:", e);
      return rawContent;
    }
  }

  // If not JSON, return as is
  return rawContent;
}

/**
 * Determines if a thinking string represents a new thinking stream
 * Enhanced to recognize more potential starting phrases used by Claude 3.7
 */
function isNewThinkingStream(
  content: string,
  currentAccumulated: string,
): boolean {
  if (!currentAccumulated) {
    return true; // Always treat as new if there's no accumulated content
  }

  // Check for common thinking starting phrases
  const startingPhrases = [
    "I need to think",
    "Let me think",
    "Let me analyze",
    "I'll analyze",
    "I need to understand",
    "Let me work through",
    "I'll approach this",
    "Let's break down",
    "First, I'll",
    "To solve this",
    "I'll start by",
  ];

  const trimmedContent = content.trim();

  for (const phrase of startingPhrases) {
    if (trimmedContent.startsWith(phrase)) {
      return true;
    }
  }

  // Also check if this looks like a completely new train of thought
  // by seeing if it starts with a capital letter and doesn't continue existing sentence
  if (
    /^[A-Z]/.test(trimmedContent) &&
    !currentAccumulated.trim().endsWith(",") &&
    !currentAccumulated.trim().endsWith(":") &&
    !currentAccumulated.trim().endsWith(";")
  ) {
    return true;
  }

  return false;
}

/**
 * Hook for streaming chat interactions
 */
export function useStreamingChat(): UseStreamingChatReturn {
  // State
  const [isStreaming, setIsStreaming] = useState(false);
  const [content, setContent] = useState("");
  const [thinking, setThinking] = useState("");
  const [progress, setProgress] = useState<StreamProgress>({
    step: "idle",
    message: "",
    percentage: 0,
  });
  const [error, setError] = useState<StreamError | null>(null);

  // Use refs to track accumulated thinking content to avoid state update issues
  const accumulatedThinkingRef = useRef<string>("");

  // Track if a new thinking stream has started
  const newThinkingStreamRef = useRef<boolean>(true);

  // Operation reference for cleanup with additional params for retries
  interface OperationWithParams extends StreamOperation<StreamChatResult> {
    params?: {
      chatVars: ChatVars;
      role: ChatRoleType;
    };
  }
  const operationRef = useRef<OperationWithParams | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (operationRef.current) {
        operationRef.current.controller.cancel();
        operationRef.current = null;
      }
    };
  }, []);

  /**
   * Sets up event handlers for the streaming operation
   */
  const setupEventHandlers = useCallback(
    (
      operation: OperationWithParams,
      params: { chatVars: ChatVars; role: ChatRoleType },
    ) => {
      // Store the operation and params for potential retries
      // We're storing chatVars and role in params for use in retryAfterError
      operationRef.current = operation;
      operationRef.current.params = params;

      // Content event handler
      operation.on("content", (event) => {
        if (event.type === "content") {
          setContent((prev) => prev + event.content);
        }
      });

      // Thinking event handler
      operation.on("thinking", (event) => {
        if (event.type === "thinking") {
          console.log("🧠 useStreamingChat - Thinking event received:", {
            contentLength: event.content.length,
            preview: event.content.substring(0, 100),
          });

          try {
            // Process the thinking content
            let thinkingContent = event.content;

            // Make sure content is a string
            if (typeof thinkingContent !== "string") {
              console.log(
                "🧠 Thinking content is not a string, converting:",
                thinkingContent,
              );
              thinkingContent = JSON.stringify(thinkingContent);
            }

            // Use a state updater function with precise word break detection
            setThinking((prevThinking) => {
              // Get current value
              const currentValue = prevThinking || "";

              if (!currentValue) {
                return thinkingContent;
              }

              // Sophisticated word break detection
              let result = "";

              // Extract the last few characters from previous content and first few from new content
              const lastChars = currentValue.slice(-10);
              const firstChars = thinkingContent.slice(0, 10);

              // Check for specific patterns indicating word breaks vs word boundaries
              const prevEndsWithPartialWord = /[a-zA-Z][a-zA-Z]$/.test(
                lastChars,
              );
              const newStartsWithPartialWord = /^[a-zA-Z][a-z]/.test(
                firstChars,
              );

              // Common word endings and beginnings to check
              const commonWordEndings = [
                "the",
                "and",
                "for",
                "but",
                "or",
                "yet",
                "so",
                "in",
                "on",
                "at",
                "to",
                "by",
              ];
              const commonWordStarts = [
                "the",
                "and",
                "for",
                "but",
                "or",
                "yet",
                "so",
                "in",
                "on",
                "at",
                "to",
                "by",
              ];

              const lastWord =
                lastChars.match(/(\w+)$/)?.[1]?.toLowerCase() || "";
              const firstWord =
                firstChars.match(/^(\w+)/)?.[1]?.toLowerCase() || "";

              const isCommonWordEnding = commonWordEndings.includes(lastWord);
              const isCommonWordStart = commonWordStarts.includes(firstWord);

              // If it looks like a common word ending + common word start, they need a space
              if (isCommonWordEnding && isCommonWordStart) {
                result = `${currentValue} ${thinkingContent}`;
              }
              // If last chunk ends with capital letter + lowercase, and next starts with lowercase,
              // likely a broken word (like "Th" + "e")
              else if (
                /[A-Z][a-z]$/.test(lastChars) &&
                /^[a-z]/.test(firstChars)
              ) {
                result = currentValue + thinkingContent;
              }
              // If previous ends with multiple letters, and next starts with lowercase,
              // likely a broken word (like "strea" + "ming")
              else if (
                /[a-z]{2,}$/.test(lastChars) &&
                /^[a-z]/.test(firstChars)
              ) {
                result = currentValue + thinkingContent;
              }
              // If previous ends with punctuation and next starts with capital, needs space
              else if (/[.!?]$/.test(lastChars) && /^[A-Z]/.test(firstChars)) {
                result = `${currentValue} ${thinkingContent}`;
              }
              // New line handling
              else if (
                /[\n\r]$/.test(currentValue) ||
                /^[\n\r]/.test(thinkingContent)
              ) {
                result = currentValue + thinkingContent;
              }
              // Default case - add a space if both ends have letters/numbers
              else if (
                /[a-zA-Z0-9]$/.test(lastChars) &&
                /^[a-zA-Z0-9]/.test(firstChars)
              ) {
                result = `${currentValue} ${thinkingContent}`;
              }
              // Otherwise, direct concatenation
              else {
                result = currentValue + thinkingContent;
              }

              // Update our ref for external access
              accumulatedThinkingRef.current = result;

              console.log("Thinking processed with advanced word analysis:", {
                lastChars,
                firstChars,
                isCommonWordEnding,
                isCommonWordStart,
                addedSpace: result !== currentValue + thinkingContent,
              });

              return result;
            });
          } catch (e) {
            // Fallback if processing fails
            console.error("Error processing thinking event:", e);

            // Still try to accumulate even on error
            setThinking((prev) => {
              const fallbackContent = event.content || JSON.stringify(event);
              return prev ? `${prev}\n${fallbackContent}` : fallbackContent;
            });
          }
        }
      });

      // Progress event handler
      operation.on("progress", (event) => {
        if (event.type === "progress") {
          setProgress({
            step: event.step,
            message: event.message,
            percentage: event.percentage,
          });
        }
      });

      // Error event handler
      operation.on("error", (event) => {
        if (event.type === "error") {
          const streamError = new Error(event.message) as StreamError;
          streamError.code = event.code;
          streamError.recoverable = event.recoverable;

          setError(streamError);
          setProgress({
            step: "error",
            message: event.message,
            percentage: 0,
          });

          if (!event.recoverable) {
            setIsStreaming(false);
          }
        }
      });

      // Complete event handler
      operation.on("complete", (event) => {
        if (event.type === "complete") {
          setProgress({
            step: "complete",
            message: "Message received!",
            percentage: 100,
          });
          setIsStreaming(false);

          // Log completion metadata if available
          if (event.metadata) {
            console.log("Stream complete with metadata:", event.metadata);
          }
        }
      });
    },
    [],
  );

  /**
   * Send a streaming chat message
   */
  const sendStreamingMessage = useCallback(
    async (
      chatVars: ChatVars,
      role: ChatRoleType = ChatRoleType.ASSISTANT,
    ): Promise<StreamChatResult | null> => {
      // Reset state
      setError(null);
      setContent("");

      // Always clear thinking data for new requests
      setThinking("");
      accumulatedThinkingRef.current = "";
      newThinkingStreamRef.current = true;

      setProgress({
        step: "analyzing",
        message: "Starting...",
        percentage: 0,
      });

      try {
        // Cancel any existing operation
        if (operationRef.current) {
          operationRef.current.controller.cancel();
        }

        // Start streaming
        setIsStreaming(true);

        // Store params for potential retry
        const params = { chatVars, role };

        // Create streaming operation
        console.log(
          "🚨🚨🚨 SETUP: Creating streaming operation with thinking:",
          chatVars.thinking,
        );
        const operation = streamingClient.streamChat(
          chatVars,
          role,
        ) as OperationWithParams;

        // DIRECT DEBUG: Log that we're setting up event handlers
        console.log(
          "🚨🚨🚨 SETUP: About to set up event handlers for streaming operation",
        );

        // Set up event handlers
        setupEventHandlers(operation, params);

        // DIRECT DEBUG: Log that handlers are set up
        console.log(
          "🚨🚨🚨 SETUP: Event handlers are set up, including thinking event handler",
        );

        // Wait for result
        const result = await operation.result;

        // Clear operation reference
        operationRef.current = null;

        return result;
      } catch (err) {
        // Handle errors
        const streamError =
          err instanceof Error
            ? (err as StreamError)
            : (new Error(String(err)) as StreamError);

        setError(streamError);
        setProgress({
          step: "error",
          message: streamError.message,
          percentage: 0,
        });
        setIsStreaming(false);

        return null;
      }
    },
    [setupEventHandlers],
  );

  /**
   * Cancel streaming
   */
  const cancelStreaming = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.cancel();
      operationRef.current = null;
    }

    setIsStreaming(false);
    setProgress({
      step: "idle",
      message: "Cancelled",
      percentage: 0,
    });
  }, []);

  /**
   * Pause streaming
   */
  const pauseStreaming = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.pause();
    }
  }, []);

  /**
   * Resume streaming
   */
  const resumeStreaming = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.resume();
    }
  }, []);

  /**
   * Retry after error
   */
  const retryAfterError = useCallback(() => {
    if (error?.recoverable && operationRef.current?.params) {
      setError(null);
      setProgress({
        step: "analyzing",
        message: "Retrying...",
        percentage: 0,
      });

      const { chatVars, role } = operationRef.current.params;
      sendStreamingMessage(chatVars, role);
    }
  }, [error, sendStreamingMessage]);

  return {
    sendStreamingMessage,
    cancelStreaming,
    pauseStreaming,
    resumeStreaming,
    retryAfterError,
    isStreaming,
    content,
    thinking,
    progress,
    error,
  };
}

export default useStreamingChat;
