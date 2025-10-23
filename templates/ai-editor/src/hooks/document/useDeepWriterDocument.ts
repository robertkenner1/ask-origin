"use client";

import { useState, useEffect, useRef } from "react";
import { generateDocument, PageContent } from "@/services/ai/claudeService";
import {
  useDocumentStore,
  type Document,
} from "@/hooks/document/useDocumentStore";
import { detectContentType } from "@/utils/document/contentTypeDetection";

// Keep same progress interface
export interface GenerationProgress {
  step:
    | "analyzing"
    | "outline"
    | "draft"
    | "research"
    | "processing"
    | "complete"
    | "error";
  message: string;
  percentage: number;
}

export function useDeepWriterDocument() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<GenerationProgress>({
    step: "analyzing",
    message: "Analyzing your request...",
    percentage: 0,
  });

  // Track active generation with refs - prevent double calls!
  const activeGenerationRef = useRef<string | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  // Store functions
  const createDocument = useDocumentStore((state) => state.createDocument);
  const updateCurrentDocument = useDocumentStore(
    (state) => state.updateCurrentDocument,
  );
  const markDocumentAsFailed = useDocumentStore(
    (state) => state.markDocumentAsFailed,
  );
  const changePage = useDocumentStore((state) => state.changePage);
  const loadDocument = useDocumentStore((state) => state.loadDocument);
  const updatePage = useDocumentStore((state) => state.updatePage);
  const addPage = useDocumentStore((state) => state.addPage);
  const renamePage = useDocumentStore((state) => state.renamePage);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        console.log("Closing SSE connection on unmount");
        eventSourceRef.current.close();
      }
    };
  }, []);

  /**
   * Initializes a document with basic structure, then generates content
   */
  const initializeDocument = (
    prompt: string,
    useDeepWriter: boolean = true,
  ): Document => {
    // Get document type for title
    const detectedType = detectContentType(prompt);
    const initialTitle = `New ${detectedType.type.charAt(0).toUpperCase() + detectedType.type.slice(1)}`;

    // Create empty document in IndexedDB
    const newDoc = createDocument(initialTitle);

    // Update with metadata but no content yet
    updateCurrentDocument({
      id: newDoc.id,
      title: initialTitle,
      llmMetadata: {
        prompt,
        generatedAt: Date.now(),
        deepWriter: useDeepWriter
          ? {
              enabled: true,
              generateOutline: true,
              generateDraft: true,
              generateResearch: true,
              contentType: detectedType.type,
            }
          : undefined,
      },
    });

    return newDoc;
  };

  /**
   * Creates a document with DeepWriter - main function
   */
  const createDeepWriterDocument = async (
    prompt: string,
    config = {},
    existingDocId?: string | null,
  ): Promise<Document> => {
    // IMPORTANT FIX: Skip if already generating this document
    if (existingDocId && activeGenerationRef.current === existingDocId) {
      console.log(
        `Already generating document ${existingDocId}, skipping duplicate request`,
      );
      return {
        id: existingDocId,
        title: "Generating...",
        pages: [],
        currentPageId: "",
        lastEdited: Date.now(),
      } as Document;
    }

    // Input validation
    if (!prompt.trim()) {
      throw new Error("Prompt is required for document generation");
    }

    // Check for code fences which can cause JSON parsing issues
    if (prompt.includes("```json") || prompt.includes("```")) {
      throw new Error("Please remove code blocks (```) from your request");
    }

    setIsGenerating(true);
    setProgress({
      step: "analyzing",
      message: "Analyzing your request...",
      percentage: 10,
    });

    try {
      // Get document type and create basic document
      const detectedType = detectContentType(prompt);
      const documentTitle = `New ${detectedType.type.charAt(0).toUpperCase() + detectedType.type.slice(1)}`;

      // Use existing doc or create new one
      let newDocument: Document;
      if (existingDocId) {
        const existingDocs = useDocumentStore.getState().documents;
        const existingDoc = existingDocs.find(
          (doc) => doc.id === existingDocId,
        );
        newDocument = existingDoc || createDocument(documentTitle);
      } else {
        newDocument = createDocument(documentTitle);
      }

      // IMPORTANT: Set active generation reference to prevent duplicates
      activeGenerationRef.current = newDocument.id;

      // Connect to progress stream for this generation
      connectToProgressStream(newDocument.id, prompt);

      // Call API only once - use same session token that API creates
      const response = await generateDocument(prompt, config, true);

      // Update progress based on result
      setProgress({
        step: "processing",
        message: "Processing document pages...",
        percentage: 80,
      });

      // Return the document object
      return {
        ...newDocument,
        title: response.title || documentTitle,
      };
    } catch (error) {
      console.error("Deep Writer generation error:", error);

      // Update progress with error
      setProgress({
        step: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
        percentage: 0,
      });

      // Mark document as failed if it exists
      if (existingDocId) {
        markDocumentAsFailed(
          existingDocId,
          error instanceof Error ? error.message : "Document generation failed",
        );
      }

      // Clear active generation reference
      activeGenerationRef.current = null;
      setIsGenerating(false);

      throw error;
    }
  };

  /**
   * Connect to server-sent events for this document
   */
  const connectToProgressStream = (documentId: string, prompt: string) => {
    // Close any existing connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    try {
      // Create random session token that matches with API request
      const sessionToken = `deepwriter_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`;

      // Create EventSource connection to events endpoint
      console.log(`Creating SSE connection with sessionId: ${sessionToken}`);
      const sse = new EventSource(
        `/api/stream/generate?sessionId=${sessionToken}`,
      );

      // Store for cleanup
      eventSourceRef.current = sse;

      // Set up event handlers
      sse.onopen = () => console.log("SSE connection opened");

      sse.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // Handle different event types
          if (data.step) {
            setProgress({
              step: data.step,
              message: data.message || "",
              percentage: data.percentage || 0,
            });

            // Complete state handling
            if (data.step === "complete") {
              // Successfully completed
              setIsGenerating(false);
              activeGenerationRef.current = null;

              // Close SSE connection
              setTimeout(() => {
                sse.close();
                eventSourceRef.current = null;
              }, 500);
            } else if (data.step === "error") {
              // Error state
              setIsGenerating(false);
              activeGenerationRef.current = null;

              // Close SSE connection
              sse.close();
              eventSourceRef.current = null;
            }
          }
        } catch (error) {
          console.error("Error parsing SSE message:", error);
        }
      };

      sse.onerror = (error) => {
        console.error("SSE connection error:", error);

        // Only set error state if still generating
        if (isGenerating) {
          setProgress({
            step: "error",
            message: "Error in progress update connection",
            percentage: 0,
          });

          setIsGenerating(false);
          activeGenerationRef.current = null;
        }

        // Close connection
        sse.close();
        eventSourceRef.current = null;
      };

      // Return session token to be used in API request
      return sessionToken;
    } catch (error) {
      console.error("Error creating SSE connection:", error);
      setProgress({
        step: "error",
        message: "Failed to connect to progress updates",
        percentage: 0,
      });
      return null;
    }
  };

  /**
   * Generates content for an existing document
   */
  const generateContentForDocument = async (
    docId: string,
    prompt: string,
    deepWriterEnabled: boolean = true,
  ): Promise<Document | null> => {
    if (!docId || !prompt) return null;

    // Skip if already generating
    if (isGenerating || activeGenerationRef.current === docId) {
      console.log(
        `Already generating content for document ${docId}. Skipping.`,
      );
      return null;
    }

    // Set state and mark as active
    setIsGenerating(true);
    activeGenerationRef.current = docId;

    setProgress({
      step: "analyzing",
      message: "Generating content...",
      percentage: 10,
    });

    try {
      // Call the API
      const response = await generateDocument(prompt, {}, deepWriterEnabled);

      // Get the document to update
      const doc = await loadDocument(docId);

      // Update document with results
      updateCurrentDocument({
        id: docId,
        title: response.title || doc.title,
        llmMetadata: {
          prompt,
          rawResponse: JSON.stringify(response),
          model: response.model,
          generatedAt: Date.now(),
          deepWriter: deepWriterEnabled
            ? {
                enabled: true,
                generateOutline: true,
                generateDraft: true,
                generateResearch: true,
                contentType:
                  doc.llmMetadata?.deepWriter?.contentType || "custom",
              }
            : undefined,
        },
      });

      // If the response included pages for Deep Writer, add them
      if (
        deepWriterEnabled &&
        response.pages &&
        Array.isArray(response.pages)
      ) {
        // First page is already created, update it
        if (doc && response.pages.length > 0 && doc.pages.length > 0) {
          // Update first page content and name it "Outline"
          const firstPageId = doc.pages[0].id;
          updatePage(firstPageId, response.pages[0].content || "");
          renamePage(firstPageId, response.pages[0].name || "Outline");

          // If we need to add pages beyond what already exists
          let pageCount = doc.pages.length;
          for (let i = pageCount; i < response.pages.length; i++) {
            addPage();
            pageCount++;
          }

          // Reload document to get updated pages
          const updatedDoc = await loadDocument(docId);

          // Update all pages with content and proper names
          for (
            let i = 1;
            i < response.pages.length && i < updatedDoc.pages.length;
            i++
          ) {
            updatePage(updatedDoc.pages[i].id, response.pages[i].content || "");
            renamePage(
              updatedDoc.pages[i].id,
              response.pages[i].name || getDefaultPageName(i),
            );
          }
        }
      } else if (!deepWriterEnabled && response.content) {
        // Regular mode - just update the first page content
        if (doc && doc.pages.length > 0) {
          updatePage(doc.pages[0].id, response.content);
        }
      }

      // Update progress
      setProgress({
        step: "complete",
        message: "Document ready!",
        percentage: 100,
      });

      // Clear generating state
      setIsGenerating(false);
      activeGenerationRef.current = null;

      // Return the updated document
      return await loadDocument(docId);
    } catch (error) {
      console.error("Generation error:", error);

      // Update progress with error
      setProgress({
        step: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
        percentage: 0,
      });

      // Mark document as failed
      if (docId) {
        markDocumentAsFailed(
          docId,
          error instanceof Error ? error.message : "Document generation failed",
        );
      }

      // Clear state
      setIsGenerating(false);
      activeGenerationRef.current = null;

      return null;
    }
  };

  // Helper function to get default page names based on index
  const getDefaultPageName = (index: number): string => {
    switch (index) {
      case 0:
        return "Outline";
      case 1:
        return "Draft";
      case 2:
        return "Research";
      default:
        return `Page ${index + 1}`;
    }
  };

  /**
   * Retry failed generation
   */
  const retryGeneration = async (
    prompt: string,
    config = {},
    docId?: string,
  ) => {
    // Reset progress
    setProgress({
      step: "analyzing",
      message: "Retrying document generation...",
      percentage: 10,
    });

    // Clear active generation reference
    activeGenerationRef.current = null;

    // Call main generation function
    return createDeepWriterDocument(prompt, config, docId);
  };

  return {
    createDeepWriterDocument,
    retryGeneration,
    connectToProgressStream,
    initializeDocument,
    generateContentForDocument,
    isGenerating,
    progress,
  };
}
