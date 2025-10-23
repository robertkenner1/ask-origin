"use client";

import { useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { OrchestraIconAnimated } from "@/app/components/icons/OrchestraIconAnimated";

// This client component handles document creation with IndexedDB
export default function CreateDocumentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const createDocument = useDocumentStore((state) => state.createDocument);
  const updateCurrentDocument = useDocumentStore(
    (state) => state.updateCurrentDocument,
  );
  const loadDocument = useDocumentStore((state) => state.loadDocument);
  const updatePage = useDocumentStore((state) => state.updatePage);
  const addPage = useDocumentStore((state) => state.addPage);
  const renamePage = useDocumentStore((state) => state.renamePage);

  // Avoid race conditions with useCallback
  const createAndRedirect = useCallback(async () => {
    try {
      // Get params from URL
      const title = searchParams.get("title") || "Untitled Document";
      const prompt = searchParams.get("prompt") || "";
      // Get contentType from URL and validate it's one of the allowed values
      const rawContentType = searchParams.get("contentType") || "custom";
      const contentType =
        rawContentType === "essay" ||
        rawContentType === "prd" ||
        rawContentType === "research" ||
        rawContentType === "resume" ||
        rawContentType === "custom"
          ? rawContentType
          : "custom";
      const responseStr = searchParams.get("response") || "{}";
      const deepWriter = searchParams.get("deepWriter") === "true";

      // Parse the response data
      let response;
      try {
        response = JSON.parse(responseStr);
      } catch (e) {
        console.error("Failed to parse response data:", e);
        response = { title, content: "" };
      }

      // Create document in IndexedDB (client-side)
      const newDoc = createDocument(title);
      console.log("Created document:", newDoc.id);

      // Update document with results
      updateCurrentDocument({
        id: newDoc.id,
        title: response.title || title,
        llmMetadata: {
          prompt,
          rawResponse: responseStr,
          model: response.model,
          generatedAt: Date.now(),
          deepWriter: deepWriter
            ? {
                enabled: true,
                generateOutline: true,
                generateDraft: true,
                generateResearch: true,
                contentType,
              }
            : undefined,
        },
      });

      // If the response included pages for Deep Writer, add them
      if (deepWriter && response.pages && Array.isArray(response.pages)) {
        // First page is already created, update it
        const doc = await loadDocument(newDoc.id);
        console.log(
          "Loaded document:",
          doc.id,
          "with pages:",
          doc.pages.length,
        );

        if (doc && response.pages.length > 0 && doc.pages.length > 0) {
          // Update first page
          const firstPageId = doc.pages[0].id;
          updatePage(firstPageId, response.pages[0].content || "");

          // Add additional pages
          for (let i = 1; i < response.pages.length; i++) {
            addPage();
            // Need to reload to get the new current page ID
            const updatedDoc = await loadDocument(newDoc.id);
            const currentPageId = updatedDoc.currentPageId;

            updatePage(currentPageId, response.pages[i].content || "");
            renamePage(
              currentPageId,
              response.pages[i].name || `Page ${i + 1}`,
            );
          }
        }
      } else if (!deepWriter && response.content) {
        // Regular mode - just update the first page content
        const doc = await loadDocument(newDoc.id);
        if (doc && doc.pages.length > 0) {
          updatePage(doc.pages[0].id, response.content);
        }
      }

      // Wait a moment to ensure all writes are complete
      setTimeout(() => {
        // Redirect to the editor with the new document ID
        router.replace(`/editor?id=${newDoc.id}`);
      }, 500);
    } catch (error) {
      console.error("Error creating document:", error);
      router.replace("/?error=Failed+to+create+document");
    }
  }, [
    searchParams,
    router,
    createDocument,
    updateCurrentDocument,
    loadDocument,
    updatePage,
    addPage,
    renamePage,
  ]);

  useEffect(() => {
    // Only run when parameters are available
    if (searchParams.has("title") && searchParams.has("response")) {
      createAndRedirect();
    } else {
      // If parameters are missing, go back to home
      router.replace("/?error=Missing+parameters");
    }
  }, [searchParams, createAndRedirect, router]);

  // Show loading while creating document
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-32 w-32">
          <OrchestraIconAnimated size={128} animating={true} />
        </div>
        <p className="text-xl font-medium text-gray-800">
          Creating your document...
        </p>
        <p className="mt-2 text-sm text-gray-500">This may take a moment.</p>
      </div>
    </div>
  );
}
