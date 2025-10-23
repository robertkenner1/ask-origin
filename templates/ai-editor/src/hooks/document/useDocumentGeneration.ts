"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDocumentStore } from "./useDocumentStore";
import { defaultClaudeConfig } from "@/services/ai/claudeService";

/**
 * Hook for generating documents from LLM
 * Simplifies document generation flow to prevent duplicates
 */
export function useDocumentGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  // Get document store functions
  const createDocument = useDocumentStore((state) => state.createDocument);
  const updateCurrentDocument = useDocumentStore(
    (state) => state.updateCurrentDocument,
  );
  const updatePage = useDocumentStore((state) => state.updatePage);

  /**
   * Generate document content from prompt
   * - Creates document if docId not provided
   * - Updates existing document if docId provided
   * - Sets LLM metadata for tracking
   * - Stores raw markdown content in the page
   * - The Editor component will render it as rich text using the Markdown extension
   */
  const generateDocument = async (prompt: string, docId?: string) => {
    if (!prompt?.trim()) {
      console.error("Empty prompt provided");
      return null;
    }

    try {
      setIsGenerating(true);

      // Check for code fences which can cause JSON parsing issues
      if (prompt.includes("```json") || prompt.includes("```")) {
        throw new Error("Please remove code blocks (```) from your request");
      }

      // Call generation API
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Generation failed: ${response.status}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error("Failed to parse response from LLM");
      }

      // Create or use existing document
      let documentId = docId;

      // Get title from response or use default
      const title = data?.title || "Generated Document";

      if (!documentId) {
        // Create new document with title
        const doc = createDocument(title);
        documentId = doc.id;
      } else {
        // Update existing document's title
        updateCurrentDocument({ title });
      }

      // Store LLM metadata
      const metadata = {
        prompt,
        rawResponse: JSON.stringify(data, null, 2),
        model: data.model || defaultClaudeConfig.model,
        generatedAt: Date.now(),
      };

      updateCurrentDocument({
        llmMetadata: metadata,
      });

      // Check if we have content from the LLM response
      if (data && typeof data === "object") {
        try {
          // Get the current document to find current page ID
          const currentDocument = useDocumentStore.getState().currentDocument;

          if (!currentDocument) {
            throw new Error("Document not found after creation");
          }

          // The response might be nested - we need to properly extract the content
          let contentToUse = "";

          // Case 1: Direct content field in the response
          if (typeof data.content === "string") {
            contentToUse = data.content;
          }
          // Case 2: Nested JSON in the rawResponse that needs to be parsed
          else if (typeof data.rawResponse === "string") {
            try {
              // The raw response might be a JSON string containing the actual content
              const parsedRaw = JSON.parse(data.rawResponse);
              if (parsedRaw && typeof parsedRaw.content === "string") {
                contentToUse = parsedRaw.content;
              }
            } catch (parseError) {
              console.error("Failed to parse raw response:", parseError);
            }
          }

          // If we couldn't extract content, try content from response as fallback
          if (!contentToUse && typeof data.content === "string") {
            contentToUse = data.content;
          }

          if (!contentToUse) {
            console.warn("Could not extract content from LLM response");
            return documentId;
          }

          // Preserve content formatting from LLM
          let cleanedContent = contentToUse
            // Keep the content as-is, preserving triple square brackets for highlighting
            .trim();

          // Store markdown with special data attribute to indicate it's markdown
          // The Editor component will recognize this and parse it correctly
          const currentPageId =
            currentDocument.currentPageId || currentDocument.pages[0].id;
          const markdownWrapped = `<div data-markdown="true">${cleanedContent}</div>`;
          updatePage(currentPageId, markdownWrapped);

          console.log(
            "Document content updated with markdown content from LLM",
          );
        } catch (error) {
          console.error("Error handling document content:", error);

          // Last resort fallback
          const currentDocument = useDocumentStore.getState().currentDocument;
          if (currentDocument) {
            // Try to extract content in the most permissive way
            let fallbackContent = "";

            if (typeof data === "string") {
              fallbackContent = data;
            } else if (typeof data.content === "string") {
              fallbackContent = data.content;
            } else if (data.rawResponse) {
              try {
                const parsed = JSON.parse(data.rawResponse);
                if (parsed && parsed.content) {
                  fallbackContent = parsed.content;
                }
              } catch (e) {
                // If we can't parse, use raw content
                fallbackContent = String(data.rawResponse)
                  .replace(/^[^{]*{/, "{")
                  .replace(/}[^}]*$/, "}");
              }
            }

            if (fallbackContent) {
              // Preserve content formatting for highlighting with triple brackets
              const currentPageId =
                currentDocument.currentPageId || currentDocument.pages[0].id;
              const markdownWrapped = `<div data-markdown="true">${fallbackContent}</div>`;
              updatePage(currentPageId, markdownWrapped);
            }
          }
        }
      }

      // Navigate to editor with clean URL
      router.replace(`/editor?id=${documentId}`);

      return documentId;
    } catch (error) {
      console.error("Document generation error:", error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateDocument,
    isGenerating,
  };
}
