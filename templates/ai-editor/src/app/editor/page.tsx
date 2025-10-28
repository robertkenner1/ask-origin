"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Editor } from "../components/Editor";
import { EditorStaggered } from "../components/EditorStaggered";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { OrchestraIconAnimated } from "../components/icons/OrchestraIconAnimated";
import { useDeepWriterDocument } from "@/hooks/document/useDeepWriterDocument";

// Simple loading component
function EditorLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div
          className={`mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent`}
        ></div>
        <p className="text-gray-600">Loading editor...</p>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<EditorLoading />}>
      <EditorContent />
    </Suspense>
  );
}

function EditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const loadDocument = useDocumentStore((state) => state.loadDocument);
  const isHydrated = useDocumentStore((state) => state.isHydrated);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  // NEW: State to toggle between regular and staggered editor
  const [useStaggeredEditor, setUseStaggeredEditor] = useState(false);

  // Generation-related states and functions
  const { generateContentForDocument, isGenerating, progress } =
    useDeepWriterDocument();
  const [generationComplete, setGenerationComplete] = useState(false);

  // Use ref to track if generation has been started
  const generationStartedRef = useRef(false);

  // Get document ID from URL
  const docId = searchParams.get("id");

  // Get generation parameters if present
  const needsGeneration = searchParams.get("generating") === "true";
  const prompt = searchParams.get("prompt");
  const deepWriter = searchParams.get("deepWriter") === "true";

  // Load document effect
  useEffect(() => {
    let isMounted = true;

    async function loadDocAsync() {
      try {
        // Try to load document with the ID from URL
        const doc = await loadDocument(docId);

        if (!isMounted) return;

        // Only redirect if the ID is wrong or missing
        if (!docId || docId !== doc.id) {
          router.replace(`/editor?id=${doc.id}`);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading document:", error);
        if (isMounted) {
          setLoadError("Failed to load document");
          setIsLoading(false);
        }
      }
    }

    if (isHydrated) {
      loadDocAsync();
    } else {
      // Wait for hydration
      const checkHydration = () => {
        if (isHydrated) {
          loadDocAsync();
        } else {
          setTimeout(checkHydration, 50);
        }
      };
      checkHydration();
    }

    return () => {
      isMounted = false;
    };
  }, [docId, router, loadDocument, isHydrated]);

  // Separate effect to handle document generation exactly once
  useEffect(() => {
    // Skip if already started generation, already completed, no need for generation, or not hydrated yet
    if (
      generationStartedRef.current ||
      !needsGeneration ||
      !docId ||
      !prompt ||
      generationComplete ||
      !isHydrated ||
      isLoading
    ) {
      return;
    }

    // Mark generation as started immediately to prevent multiple calls
    generationStartedRef.current = true;

    // Function to generate content
    const generateContent = async () => {
      console.log("Starting content generation...");
      try {
        // Generate content for the document
        await generateContentForDocument(docId, prompt, deepWriter === true);

        // Only update state and URL if the component is still mounted
        setGenerationComplete(true);

        // Remove generation params from URL to prevent regeneration on refresh
        // Use replace to avoid adding to history
        if (window.history && window.history.replaceState) {
          const url = new URL(window.location.href);
          url.searchParams.delete("generating");
          url.searchParams.delete("prompt");
          url.searchParams.delete("deepWriter");
          window.history.replaceState({}, "", url.toString());
        } else {
          // Fallback for older browsers
          router.replace(`/editor?id=${docId}`);
        }
      } catch (error) {
        console.error("Error generating content:", error);

        // Still mark as complete to prevent infinite retries
        setGenerationComplete(true);

        // Clean URL even on error
        if (window.history && window.history.replaceState) {
          const url = new URL(window.location.href);
          url.searchParams.delete("generating");
          url.searchParams.delete("prompt");
          url.searchParams.delete("deepWriter");
          window.history.replaceState({}, "", url.toString());
        } else {
          router.replace(`/editor?id=${docId}`);
        }
      }
    };

    // Start generation with a slight delay to ensure everything is properly initialized
    setTimeout(generateContent, 500);
  }, [
    docId,
    needsGeneration,
    prompt,
    deepWriter,
    generateContentForDocument,
    router,
    generationComplete,
    isHydrated,
    isLoading,
  ]);

  // Show generation loading screen if needed
  if (needsGeneration && !generationComplete) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-32 w-32">
            <OrchestraIconAnimated size={128} />
          </div>
          <p className="text-xl font-medium text-gray-800">
            {progress.message}
          </p>
          <div className="mx-auto mt-4 h-2 w-64 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full animate-pulse rounded-full bg-blue-500"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Simple loading or error states
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-32 w-32">
            <OrchestraIconAnimated size={128} />
          </div>
          <p className="text-xl font-medium text-gray-800">
            Loading document...
          </p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl font-medium text-red-800">{loadError}</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {/* Editor Toggle Button - Fixed position in top right */}
      <div className="fixed top-4 right-4 z-50">
        {/* <button
          onClick={() => setUseStaggeredEditor(!useStaggeredEditor)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-200
            ${useStaggeredEditor 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }
          `}
          title={`Switch to ${useStaggeredEditor ? 'Regular' : 'Staggered'} Editor`}
        >
          {useStaggeredEditor ? '⚡ Staggered' : '📝 Regular'}
        </button> */}
      </div>

      {/* Render the appropriate editor */}
      {useStaggeredEditor ? <EditorStaggered /> : <Editor />}
    </div>
  );
}
