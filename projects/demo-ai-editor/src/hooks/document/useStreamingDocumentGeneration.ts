import { useState, useCallback, useEffect, useRef } from "react";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { StreamingClient } from "@/services/api/streaming/StreamingClient";
import { DocumentPromptVariant } from "@/prompts";

// Simple client instance - no extra config needed
const streamingClient = new StreamingClient();

/**
 * Progress state for streaming operations
 */
interface StreamProgress {
  step:
    | "idle"
    | "analyzing"
    | "generating"
    | "outline"
    | "draft"
    | "research"
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
interface StreamError extends Error {
  code?: string;
  recoverable?: boolean;
}

/**
 * Hook for streaming document generation
 */
export function useStreamingDocumentGeneration() {
  // Document state
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<StreamProgress>({
    step: "idle",
    message: "",
    percentage: 0,
  });
  const [error, setError] = useState<StreamError | null>(null);
  const [thinking, setThinking] = useState<string>("");
  const [documentTitle, setDocumentTitle] = useState<string>("");

  // Document store functions
  const createDocument = useDocumentStore((state) => state.createDocument);
  const updateCurrentDocument = useDocumentStore(
    (state) => state.updateCurrentDocument,
  );
  const updatePage = useDocumentStore((state) => state.updatePage);

  // Operation reference for cleanup
  const operationRef = useRef<any>(null);
  const documentIdRef = useRef<string | null>(null);

  // Use refs to track accumulated thinking content to avoid race conditions
  const accumulatedThinkingRef = useRef<string>("");
  const newThinkingStreamRef = useRef<boolean>(true);

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
   * Generate a document with streaming
   */
  const generateDocument = useCallback(
    async (
      vars: any,
      variant: DocumentPromptVariant = DocumentPromptVariant.DEFAULT,
      existingDocId?: string | null,
      options: { resetThinking?: boolean } = { resetThinking: true },
    ) => {
      // Reset state
      setError(null);

      // Only reset thinking if explicitly requested
      if (options.resetThinking) {
        setThinking("");
        if (accumulatedThinkingRef && accumulatedThinkingRef.current) {
          accumulatedThinkingRef.current = "";
        }
      }

      setDocumentTitle("");
      setProgress({
        step: "analyzing",
        message: "Starting generation...",
        percentage: 0,
      });

      try {
        // Cancel any existing operation
        if (operationRef.current) {
          operationRef.current.controller.cancel();
          operationRef.current = null;
        }

        // Use existing document ID or create a new one
        let docId: string;
        if (existingDocId) {
          docId = existingDocId;
        } else if (existingDocId !== null) {
          // Only create a new document if existingDocId is undefined (not null)
          const newDoc = createDocument("New Document");
          docId = newDoc.id;
        } else {
          // If null was explicitly passed, don't create a document
          docId = "temp-" + Date.now();
        }

        // Store document ID for reference
        documentIdRef.current = docId;

        // Set generating state
        setIsGenerating(true);

        // Page content tracking
        const pageContents: Record<string, string> = {};
        let documentContent = "";

        // Extract callback handlers if provided
        const onContent = vars.onContent || null;
        const onThinking = vars.onThinking || null;

        // Clean up vars object by removing callback handlers
        const cleanVars = { ...vars };
        delete cleanVars.onContent;
        delete cleanVars.onThinking;

        // Create streaming operation
        const operation = streamingClient.streamDocumentGeneration(
          cleanVars,
          variant,
        );
        operationRef.current = operation;

        // Set up event listeners
        operation.on("thinking", (event) => {
          if (event.type !== "thinking") return;

          console.log(
            "🧠 useStreamingDocumentGeneration - Thinking event received:",
            {
              contentLength: event.content.length,
              preview: event.content.substring(0, 100),
            },
          );

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

            // Use a state updater function with word break detection
            setThinking((prevThinking) => {
              // Get current value
              const currentValue = prevThinking || "";

              if (!currentValue) {
                // First thinking chunk
                accumulatedThinkingRef.current = thinkingContent;
                return thinkingContent;
              }

              // TEMPORARILY DISABLING WORD ANALYSIS TO FIX DUPLICATION
              // Simply concatenate thinking content for now
              const result = currentValue + thinkingContent;

              // Update our ref for external access
              accumulatedThinkingRef.current = result;

              console.log("Document thinking appended without word analysis:", {
                prevLength: currentValue.length,
                newLength: thinkingContent.length,
                totalLength: result.length,
              });

              return result;
            });

            // Call external handler if provided
            if (onThinking && typeof onThinking === "function") {
              onThinking(event.content);
            }
          } catch (e) {
            // Fallback if processing fails
            console.error("Error processing thinking event:", e);

            // Still try to accumulate even on error
            setThinking((prev) => {
              const fallbackContent = event.content || JSON.stringify(event);
              const newContent = prev
                ? `${prev}\n${fallbackContent}`
                : fallbackContent;
              accumulatedThinkingRef.current = newContent;
              return newContent;
            });

            // Call external handler if provided
            if (onThinking && typeof onThinking === "function") {
              onThinking(event.content);
            }
          }
        });

        operation.on("content", (event) => {
          if (event.type !== "content" || !event.content) return;

          if (event.pageId) {
            // For DeepWriter mode with multiple pages
            const pageId = event.pageId;

            // Extract page type from the page ID for meaningful naming
            // Expected format: outline_page, draft_page, research_page, etc.
            let pageType = "page";
            if (pageId.includes("_")) {
              pageType = pageId.split("_")[0] || "page";
            }

            // Convert to a standard pageId format the app can recognize
            // If it already matches our format (like 'page-1'), use as is
            // Otherwise, convert it to a standard format
            let normalizedPageId = pageId;
            if (!pageId.match(/^page-\d+$/)) {
              // Convert to our standard page format based on type
              // This makes it compatible with updatePage
              if (pageType === "outline") normalizedPageId = "page-1";
              else if (pageType === "draft") normalizedPageId = "page-2";
              else if (pageType === "research") normalizedPageId = "page-3";
              else
                normalizedPageId = `page-${Object.keys(pageContents).length + 1}`;
            }

            // Accumulate content for this page
            const existingContent = pageContents[normalizedPageId] || "";
            pageContents[normalizedPageId] = existingContent + event.content;

            console.log(
              `Streaming content to page ${normalizedPageId} (${pageType}): ${event.content.substring(0, 50)}...`,
            );

            // Update the page content in document store
            if (documentIdRef.current && existingDocId !== null) {
              updatePage(normalizedPageId, pageContents[normalizedPageId]);
            }

            // Call external handler if provided
            if (onContent && typeof onContent === "function") {
              onContent(event.content, normalizedPageId);
            }
          } else {
            // For regular documents with single page
            documentContent += event.content;

            // Update document content in store
            if (documentIdRef.current && existingDocId !== null) {
              updatePage("page-1", documentContent);
            }

            // Call external handler if provided
            if (onContent && typeof onContent === "function") {
              onContent(event.content);
            }
          }
        });

        operation.on("progress", (event) => {
          if (event.type !== "progress") return;

          setProgress({
            step: event.step,
            message: event.message,
            percentage: event.percentage,
          });
        });

        operation.on("error", (event) => {
          if (event.type !== "error") return;

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
            setIsGenerating(false);
          }
        });

        operation.on("complete", (event) => {
          if (event.type !== "complete") return;

          // Update document title
          const title = event.metadata?.title || "Generated Document";
          setDocumentTitle(title);

          // Update document metadata
          if (documentIdRef.current) {
            updateCurrentDocument({
              id: documentIdRef.current,
              title,
              llmMetadata: {
                prompt: vars.topic,
                generatedAt: Date.now(),
                deepWriter: vars.deepWriter
                  ? {
                      enabled: true,
                      generateOutline: true,
                      generateDraft: true,
                      generateResearch: true,
                      contentType: "custom",
                    }
                  : undefined,
              },
            });
          }

          // Update progress
          setProgress({
            step: "complete",
            message: "Document generation complete!",
            percentage: 100,
          });

          // Finish generation, but DO NOT reset thinking state
          setTimeout(() => {
            setIsGenerating(false);
            // We DO NOT clear thinking state here
          }, 500);
        });

        // Wait for result
        const result = await operation.result;

        // Clear operation reference
        operationRef.current = null;

        return {
          id: documentIdRef.current,
          result,
        };
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
        setIsGenerating(false);

        return null;
      }
    },
    [createDocument, updateCurrentDocument, updatePage],
  );

  /**
   * Cancel document generation
   */
  const cancelGeneration = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.cancel();
      operationRef.current = null;
    }

    setIsGenerating(false);
    setProgress({
      step: "idle",
      message: "Generation cancelled",
      percentage: 0,
    });
  }, []);

  /**
   * Pause document generation
   */
  const pauseGeneration = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.pause();
      setProgress((prev) => ({
        ...prev,
        step: "paused",
        message: "Generation paused",
      }));
    }
  }, []);

  /**
   * Resume document generation
   */
  const resumeGeneration = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.controller.resume();
      setProgress((prev) => ({
        ...prev,
        step: "generating",
        message: "Continuing generation...",
      }));
    }
  }, []);

  /**
   * Retry document generation after error
   */
  const retryGeneration = useCallback(() => {
    if (error?.recoverable) {
      setError(null);
      setProgress({
        step: "analyzing",
        message: "Retrying document generation...",
        percentage: 0,
      });

      // Get previous parameters from ref if available
      const prevParams = operationRef.current?.params;
      if (prevParams) {
        generateDocument(
          prevParams.vars,
          prevParams.variant,
          documentIdRef.current,
        );
      }
    }
  }, [error, generateDocument]);

  return {
    generateDocument,
    cancelGeneration,
    pauseGeneration,
    resumeGeneration,
    retryGeneration,
    isGenerating,
    progress,
    error,
    thinking,
    documentTitle,
  };
}

export default useStreamingDocumentGeneration;
