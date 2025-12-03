"use client";

import { useState, useEffect, useRef } from "react";
import { useStreamingChat } from "@/hooks/useStreamingChat";
import { useStreamingDocumentGeneration } from "@/hooks/document/useStreamingDocumentGeneration";
import { ChatRoleType } from "@/prompts";
import { DocumentPromptVariant } from "@/prompts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  TestPanel,
  TestPanelGroup,
  TestConfigPanel,
  TestResultPanel,
  TestErrorDisplay,
  TestProgressBar,
} from "../components";

/**
 * Test page for streaming API
 */
export default function StreamingTestPage() {
  // Chat state
  const [chatInput, setChatInput] = useState(
    "Tell me how streaming works in this application and list the key benefits.",
  );
  const [chatRole, setChatRole] = useState<ChatRoleType>(
    ChatRoleType.ASSISTANT,
  );
  const [chatThinkingEnabled, setChatThinkingEnabled] = useState(false);
  const [chatThinkingBudget, setChatThinkingBudget] = useState(4096);

  // Document state
  const [documentPrompt, setDocumentPrompt] = useState(
    "Write a comprehensive guide about cats as pets, including information about different cat breeds, cat care tips, cat behavior, and health considerations for cat owners. Include interesting facts about cats throughout.",
  );
  const [documentVariant, setDocumentVariant] = useState<DocumentPromptVariant>(
    DocumentPromptVariant.DEFAULT,
  );
  const [deepWriter, setDeepWriter] = useState(false);
  const [docThinkingEnabled, setDocThinkingEnabled] = useState(false);
  const [docThinkingBudget, setDocThinkingBudget] = useState(4096);

  // Document content state to capture the streamed content
  const [documentContent, setDocumentContent] = useState("");
  const [documentPages, setDocumentPages] = useState<Record<string, string>>(
    {},
  );
  const [activeDocumentPage, setActiveDocumentPage] = useState("main");
  const [showFullContent, setShowFullContent] = useState(false);

  // Store page names for display in tabs
  const pageNamesRef = useRef<Record<string, string>>({});

  // Local state to preserve thinking content
  const [localChatThinking, setLocalChatThinking] = useState("");
  const [localDocThinking, setLocalDocThinking] = useState("");

  // Use a small rolling buffer ONLY for marker detection
  const markerBufferRef = useRef("");
  const MARKER_BUFFER_MAX = 60; // Just enough for a complete page marker
  const currentPageIdRef = useRef("main");

  // Get streaming hooks
  const {
    sendStreamingMessage,
    cancelStreaming: cancelChat,
    pauseStreaming: pauseChat,
    resumeStreaming: resumeChat,
    isStreaming,
    content: chatContent,
    thinking: chatThinking,
    progress: chatProgress,
    error: chatError,
  } = useStreamingChat();

  const {
    generateDocument,
    cancelGeneration,
    pauseGeneration,
    resumeGeneration,
    isGenerating,
    progress: docProgress,
    thinking: docThinking,
    documentTitle,
    error: docError,
  } = useStreamingDocumentGeneration();

  // Copy thinking content to local state to avoid flickering
  useEffect(() => {
    if (chatThinking) {
      // Just use the thinking data directly - it should already be accumulated in the hook
      setLocalChatThinking(chatThinking);

      console.log("Test UI - Updated chat thinking:", {
        length: chatThinking.length,
        sample: chatThinking.substring(0, 100) + "...",
      });
    }
  }, [chatThinking]);

  useEffect(() => {
    if (docThinking) {
      // Just use the thinking data directly - it should already be accumulated in the hook
      setLocalDocThinking(docThinking);

      console.log("Test UI - Updated doc thinking:", {
        length: docThinking.length,
        sample: docThinking.substring(0, 100) + "...",
      });
    }
  }, [docThinking]);

  // Function to start chat streaming
  const startChat = async () => {
    // Reset thinking state for new chat
    setLocalChatThinking("");

    console.log(
      "🚨🚨🚨 Starting chat with thinking:",
      chatThinkingEnabled ? "enabled" : "disabled",
      chatThinkingEnabled ? `budget: ${chatThinkingBudget}` : "",
    );

    await sendStreamingMessage(
      {
        messages: [
          {
            type: "user",
            content: chatInput,
            id: Date.now().toString(),
            timestamp: new Date(),
          },
        ],
        // Add thinking configuration if enabled - using proper format for Claude 3.7
        thinking: chatThinkingEnabled
          ? {
              type: "enabled",
              budget_tokens: chatThinkingBudget,
            }
          : undefined,
      },
      chatRole,
    );
  };

  // Function to start document generation without creating a document
  const startDocumentGeneration = async () => {
    // Reset document content state
    setDocumentContent("");

    // Reset pages and initialize with just the main content holder
    setDocumentPages({
      main: "", // Start with just one main content area
    });
    setActiveDocumentPage("main");

    // Reset page names ref
    pageNamesRef.current = {};

    // Update prompt with page marker instructions if using DeepWriter
    if (deepWriter && !documentPrompt.includes("===PAGE")) {
      setDocumentPrompt(
        (prev) =>
          prev +
          " Format your response with clear page markers using ===PAGE #: PAGE NAME=== at the start of each page (for example, ===PAGE 1: OUTLINE===, ===PAGE 2: DRAFT===, ===PAGE 3: RESEARCH===).",
      );
    }

    // Reset thinking when starting a new document
    setLocalDocThinking("");

    // We'll setup our content listeners before starting generation
    try {
      // Setup content handler (simplified)
      const handleContent = (content: string, pageId?: string) => {
        // For standard mode with single page
        if (!deepWriter) {
          setDocumentContent((prev) => prev + content);
          return;
        }

        // Update the marker detection buffer (keep it small)
        markerBufferRef.current += content;
        if (markerBufferRef.current.length > MARKER_BUFFER_MAX) {
          // Keep just the last MARKER_BUFFER_MAX characters
          markerBufferRef.current =
            markerBufferRef.current.slice(-MARKER_BUFFER_MAX);
        }

        // Check for complete page markers in the buffer
        const markerRegex = /===PAGE (\d+): ([^=]+)===/;
        const match = markerBufferRef.current.match(markerRegex);

        if (match) {
          // Found a marker, extract page info
          const pageNum = parseInt(match[1], 10);
          const pageName = match[2].trim();
          const newPageId = `page-${pageNum}`;

          console.log(`Found page marker: ${match[0]}`);

          // Store page name
          pageNamesRef.current[newPageId] = pageName;

          // Update the current page ID reference
          currentPageIdRef.current = newPageId;

          // Clear the marker from the buffer
          const markerEndIndex =
            markerBufferRef.current.indexOf(match[0]) + match[0].length;
          markerBufferRef.current =
            markerBufferRef.current.substring(markerEndIndex);

          // Switch to the new page
          setTimeout(() => {
            setActiveDocumentPage(newPageId);
          }, 100);
        }

        // Update the document pages with this chunk (no duplication)
        setDocumentPages((prevPages) => {
          const newPages = { ...prevPages };
          const currentPage = currentPageIdRef.current;

          // Ensure the page exists
          if (!newPages[currentPage]) {
            newPages[currentPage] = "";
          }

          // Add only the new content
          newPages[currentPage] += content;

          return newPages;
        });
      };

      // Simplified thinking handler - no hacks needed now that events work properly
      const handleThinking = (content: string) => {
        // Just log the thinking content
        console.log("Document thinking event received:", {
          contentLength: content.length,
          contentSnippet: content.substring(0, 100) + "...",
        });
      };

      // Start the document generation using the hook
      // The hook already uses the streamingClient internally
      await generateDocument(
        {
          topic: documentPrompt,
          deepWriter,
          style: "balanced",
          length: deepWriter ? "long" : "medium",
          onContent: handleContent,
          onThinking: handleThinking,
          // Add thinking configuration if enabled - using proper format for Claude 3.7
          thinking: docThinkingEnabled
            ? {
                type: "enabled",
                budget_tokens: docThinkingBudget,
              }
            : undefined,
        },
        documentVariant,
        null, // Pass null document ID to prevent creating a document
        { resetThinking: true }, // Explicitly reset thinking for new documents
      );
    } catch (error) {
      console.error("Error in document generation:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Streaming API Test</h1>

      <TestPanelGroup>
        {/* Left column - Configuration */}
        <TestConfigPanel>
          <TestPanel title="Configuration">
            <Tabs defaultValue="chat" className={`w-full`}>
              <TabsList className={`mb-6 w-full bg-gray-200`}>
                <TabsTrigger value="chat" className={`flex-1`}>
                  Chat
                </TabsTrigger>
                <TabsTrigger value="document" className={`flex-1`}>
                  Document
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className={`space-y-4`}>
                <div>
                  <label className={`mb-1 block text-sm font-medium`}>
                    Message
                  </label>
                  <textarea
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    disabled={isStreaming}
                    className={`min-h-[100px] w-full rounded-md border bg-white p-2 text-base`}
                    placeholder="Enter your message"
                  />
                </div>

                <div>
                  <label className={`mb-1 block text-sm font-medium`}>
                    Role
                  </label>
                  <select
                    value={chatRole}
                    onChange={(e) =>
                      setChatRole(e.target.value as ChatRoleType)
                    }
                    disabled={isStreaming}
                    className={`w-full rounded-md border bg-white p-2 text-base`}
                  >
                    <option value={ChatRoleType.ASSISTANT}>Assistant</option>
                    <option value={ChatRoleType.EDITOR}>Editor</option>
                    <option value={ChatRoleType.TUTOR}>Tutor</option>
                    <option value={ChatRoleType.EXPERT}>Expert</option>
                  </select>
                </div>

                {/* Extended Thinking Controls for Chat */}
                <div
                  className={`rounded-md border border-blue-100 bg-blue-50 p-3`}
                >
                  <label
                    className={`flex items-center text-sm font-medium text-blue-800`}
                  >
                    <input
                      type="checkbox"
                      checked={chatThinkingEnabled}
                      onChange={(e) => setChatThinkingEnabled(e.target.checked)}
                      disabled={isStreaming}
                      className={`mr-2`}
                    />
                    Extended Thinking Mode
                  </label>

                  {chatThinkingEnabled && (
                    <div className={`mt-2`}>
                      <label className={`text-xs text-blue-600`}>
                        Thinking budget: {chatThinkingBudget} tokens
                      </label>
                      <input
                        type="range"
                        min="1024"
                        max="8192"
                        step="1024"
                        value={chatThinkingBudget}
                        onChange={(e) =>
                          setChatThinkingBudget(Number(e.target.value))
                        }
                        disabled={isStreaming}
                        className={`w-full`}
                      />
                    </div>
                  )}
                </div>

                <div className={`flex gap-2`}>
                  <button
                    onClick={startChat}
                    disabled={isStreaming}
                    className={`flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50`}
                  >
                    Start Chat
                  </button>

                  <button
                    onClick={cancelChat}
                    disabled={!isStreaming}
                    className={`rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50`}
                  >
                    Cancel
                  </button>

                  <button
                    onClick={isStreaming ? resumeChat : pauseChat}
                    disabled={!isStreaming}
                    className={`rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50`}
                  >
                    {chatProgress.step === "paused" ? "Resume" : "Pause"}
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="document" className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Prompt
                  </label>
                  <textarea
                    value={documentPrompt}
                    onChange={(e) => setDocumentPrompt(e.target.value)}
                    disabled={isGenerating}
                    className="min-h-[100px] w-full rounded-md border bg-white p-2 text-base"
                    placeholder="Enter your document prompt"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Document Mode
                  </label>
                  <Tabs
                    defaultValue="standard"
                    value={deepWriter ? "deepwriter" : "standard"}
                    onValueChange={(value) => {
                      if (isGenerating) return; // Prevent changes while generating

                      if (value === "deepwriter") {
                        setDeepWriter(true);
                        setDocumentVariant(DocumentPromptVariant.DEEP_WRITER);
                      } else {
                        setDeepWriter(false);
                        setDocumentVariant(DocumentPromptVariant.DEFAULT);
                      }
                    }}
                    className={`w-full ${isGenerating ? "pointer-events-none opacity-70" : ""}`}
                  >
                    <TabsList className="mb-2 w-full bg-gray-200">
                      <TabsTrigger value="standard" className="flex-1">
                        Standard Mode
                      </TabsTrigger>
                      <TabsTrigger value="deepwriter" className="flex-1">
                        DeepWriter Mode
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="standard"
                      className="text-xs text-gray-500"
                    >
                      Standard mode creates a single-page document with basic
                      structure.
                    </TabsContent>
                    <TabsContent
                      value="deepwriter"
                      className="text-xs text-gray-500"
                    >
                      DeepWriter mode creates a multi-page document with
                      outline, draft, and research sections.
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Only show variant selector in standard mode */}
                {!deepWriter && (
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Document Type
                    </label>
                    <select
                      value={documentVariant}
                      onChange={(e) =>
                        setDocumentVariant(
                          e.target.value as DocumentPromptVariant,
                        )
                      }
                      disabled={isGenerating || deepWriter}
                      className="w-full rounded-md border bg-white p-2 text-base"
                    >
                      <option value={DocumentPromptVariant.DEFAULT}>
                        Standard
                      </option>
                      <option value={DocumentPromptVariant.ACADEMIC}>
                        Academic
                      </option>
                    </select>
                  </div>
                )}

                {/* Extended Thinking Controls for Document */}
                <div className="rounded-md border border-blue-100 bg-blue-50 p-3">
                  <label className="flex items-center text-sm font-medium text-blue-800">
                    <input
                      type="checkbox"
                      checked={docThinkingEnabled}
                      onChange={(e) => setDocThinkingEnabled(e.target.checked)}
                      disabled={isGenerating}
                      className="mr-2"
                    />
                    Extended Thinking Mode
                  </label>

                  {docThinkingEnabled && (
                    <div className="mt-2">
                      <label className="text-xs text-blue-600">
                        Thinking budget: {docThinkingBudget} tokens
                      </label>
                      <input
                        type="range"
                        min="1024"
                        max="8192"
                        step="1024"
                        value={docThinkingBudget}
                        onChange={(e) =>
                          setDocThinkingBudget(Number(e.target.value))
                        }
                        disabled={isGenerating}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={startDocumentGeneration}
                    disabled={isGenerating}
                    className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    Generate Document
                  </button>

                  <button
                    onClick={cancelGeneration}
                    disabled={!isGenerating}
                    className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={
                      docProgress.step === "paused"
                        ? resumeGeneration
                        : pauseGeneration
                    }
                    disabled={!isGenerating}
                    className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
                  >
                    {docProgress.step === "paused" ? "Resume" : "Pause"}
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </TestPanel>
        </TestConfigPanel>

        {/* Right column - Response */}
        <TestResultPanel>
          <TestPanel
            title={
              isStreaming
                ? "Chat Streaming"
                : isGenerating
                  ? "Document Generation"
                  : "Response"
            }
          >
            {/* Progress Bar for both types */}
            {(isStreaming || isGenerating) && (
              <TestProgressBar
                progress={{
                  step: isStreaming ? chatProgress.step : docProgress.step,
                  percentage: isStreaming
                    ? chatProgress.percentage
                    : docProgress.percentage,
                  message: isStreaming
                    ? chatProgress.message
                    : docProgress.message,
                }}
                isLoading={isStreaming || isGenerating}
                onCancel={isStreaming ? cancelChat : cancelGeneration}
                onPause={isStreaming ? pauseChat : pauseGeneration}
                onResume={isStreaming ? resumeChat : resumeGeneration}
              />
            )}

            {/* Thinking Display - always visible for debugging */}
            <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
              <h3 className="mb-2 flex items-center text-sm font-medium text-yellow-800">
                <span>Thinking</span>
                {isStreaming || isGenerating ? (
                  <span className="ml-2 animate-pulse rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">
                    Active
                  </span>
                ) : (
                  <span className="ml-2 rounded-full bg-gray-300 px-2 py-0.5 text-xs text-gray-700">
                    Complete
                  </span>
                )}
              </h3>

              {/* Thinking Content Display */}
              <div className="max-h-[400px] overflow-y-auto rounded border border-yellow-100 bg-white p-3 font-mono text-xs whitespace-pre-wrap text-yellow-800">
                {isStreaming ? (
                  <pre className="overflow-auto whitespace-pre-wrap">
                    {chatThinking || (
                      <span className="text-gray-400">
                        Waiting for thinking data...
                      </span>
                    )}
                  </pre>
                ) : isGenerating ? (
                  <pre className="overflow-auto whitespace-pre-wrap">
                    {docThinking || (
                      <span className="text-gray-400">
                        Waiting for thinking data...
                      </span>
                    )}
                  </pre>
                ) : (
                  /* Show either chat or document thinking data when complete */
                  <pre className="overflow-auto whitespace-pre-wrap">
                    {documentTitle
                      ? docThinking || localDocThinking
                      : chatThinking ||
                        localChatThinking || (
                          <span className="text-gray-400">
                            No thinking data available.
                          </span>
                        )}
                  </pre>
                )}
              </div>

              {/* Add Clear button for thinking data */}
              <div className="mt-2 flex justify-end">
                <button
                  onClick={() => {
                    // Clear thinking data
                    setLocalChatThinking("");
                    setLocalDocThinking("");
                  }}
                  className="rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300"
                >
                  Clear Thinking Data
                </button>
              </div>

              {/* Debug information - collapsible section */}
              <div className="mt-3">
                <details className="text-xs">
                  <summary
                    className={`cursor-pointer font-medium text-gray-700 hover:text-gray-900`}
                  >
                    Debug Information
                  </summary>
                  <div className="mt-2 rounded bg-gray-800 p-3 text-white">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <strong>Mode:</strong>{" "}
                        {isStreaming
                          ? "Chat"
                          : isGenerating
                            ? "Document"
                            : "Idle"}
                      </div>
                      <div>
                        <strong>Status:</strong>{" "}
                        {isStreaming
                          ? chatProgress.step
                          : isGenerating
                            ? docProgress.step
                            : "complete"}
                      </div>
                      <div>
                        <strong>Progress:</strong>{" "}
                        {isStreaming
                          ? chatProgress.percentage
                          : isGenerating
                            ? docProgress.percentage
                            : 100}
                        %
                      </div>
                      <div>
                        <strong>Thinking Budget:</strong>{" "}
                        {isStreaming ? chatThinkingBudget : docThinkingBudget}{" "}
                        tokens
                      </div>
                      <div>
                        <strong>Content:</strong>{" "}
                        {isStreaming
                          ? chatContent.length
                          : documentContent.length}{" "}
                        chars
                      </div>
                      <div>
                        <strong>Thinking:</strong>{" "}
                        {isStreaming || (!isGenerating && localChatThinking)
                          ? localChatThinking.length ||
                            chatThinking?.length ||
                            0
                          : localDocThinking.length ||
                            docThinking?.length ||
                            0}{" "}
                        chars
                      </div>
                    </div>

                    <div className="mt-3 border-t border-gray-600 pt-2">
                      <div className="mb-1 font-medium">
                        Raw Thinking Sample:
                      </div>
                      <div className="overflow-x-auto rounded bg-gray-900 p-2">
                        {isStreaming || (!isGenerating && !documentTitle)
                          ? chatThinking?.substring(0, 300) +
                            (chatThinking?.length > 300 ? "..." : "")
                          : docThinking?.substring(0, 300) +
                            (docThinking?.length > 300 ? "..." : "")}
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-400">
                      <strong>Important:</strong> Claude 3.7 requires the
                      thinking parameter format
                      <code className="mx-1 rounded bg-gray-700 px-1 text-white">
                        {"{ type: 'enabled', budget_tokens: N }"}
                      </code>
                      where N is at least 1024. If you're not seeing thinking
                      data, ensure you're using the correct format. For complex
                      reasoning tasks, consider 4096 tokens as a minimum, and up
                      to 8192 for advanced analysis. Each model token is roughly
                      4 characters in English text.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Error Display - combined for both types */}
            {(chatError || docError) && (
              <TestErrorDisplay error={chatError || docError} />
            )}

            {/* Content Display - shows either chat or document content */}
            <div className="rounded-lg border border-green-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-medium text-green-800">
                {isGenerating || documentTitle
                  ? "Document Content"
                  : "Chat Response"}
              </h3>

              {/* Chat Response */}
              {chatContent && (
                <div className="prose max-h-[60vh] overflow-y-auto text-sm whitespace-pre-wrap">
                  {chatContent}
                </div>
              )}

              {/* Document Content */}
              {(isGenerating || documentTitle) && (
                <div>
                  <div className="mb-2 rounded-md bg-blue-100 p-2 text-sm text-blue-800">
                    <strong>Note:</strong> This is a test page. No documents
                    will be saved to your document list.
                  </div>

                  {/* Document metadata */}
                  <div className="mb-4 border-b p-2">
                    <p>
                      <strong>Title:</strong> {documentTitle || "Generating..."}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className="font-medium text-green-600">
                        {docProgress.step}
                      </span>
                    </p>
                    <p>
                      <strong>Progress:</strong> {docProgress.message}
                    </p>
                    {docThinkingEnabled && (
                      <p>
                        <strong>Thinking:</strong>{" "}
                        <span className="font-medium text-purple-600">
                          Enabled ({docThinkingBudget} tokens)
                        </span>
                      </p>
                    )}
                  </div>

                  {/* DeepWriter Pages Tabs */}
                  {deepWriter && (
                    <div className="mb-4">
                      <div className="mb-2 flex items-center justify-between">
                        {/* Dynamically display tabs based on available content */}
                        <Tabs
                          defaultValue={
                            Object.keys(documentPages).length > 0
                              ? Object.keys(documentPages)[0]
                              : "main"
                          }
                          value={
                            showFullContent
                              ? "full-content"
                              : activeDocumentPage
                          }
                          onValueChange={(val) => {
                            if (val === "full-content") {
                              setShowFullContent(true);
                            } else {
                              setShowFullContent(false);
                              setActiveDocumentPage(val);
                            }
                          }}
                          className="flex-1"
                        >
                          <TabsList className="bg-gray-200">
                            {/* Show tabs for pages that have content */}
                            {Object.keys(documentPages).length > 0 ? (
                              // Sort pages by their page number
                              Object.keys(documentPages)
                                .filter(
                                  (pageId) =>
                                    pageId !== "main" ||
                                    documentPages["main"].length > 0,
                                )
                                .sort((a, b) => {
                                  if (a === "main") return -1;
                                  if (b === "main") return 1;

                                  // Extract page numbers from page ID (page-1, page-2, etc.)
                                  const aNum =
                                    parseInt(a.replace("page-", ""), 10) || 999;
                                  const bNum =
                                    parseInt(b.replace("page-", ""), 10) || 999;
                                  return aNum - bNum;
                                })
                                .map((pageId) => (
                                  <TabsTrigger
                                    key={pageId}
                                    value={pageId}
                                    className="flex-1"
                                  >
                                    {/* Display page name using sophisticated naming logic */}
                                    {(() => {
                                      // If pageId is 'main', show 'Content'
                                      if (pageId === "main") return "Content";

                                      // If we have a custom name for this pageId, use it
                                      if (pageNamesRef.current[pageId])
                                        return pageNamesRef.current[pageId];

                                      // For page-# formats without custom names
                                      if (pageId.startsWith("page-")) {
                                        const pageNum = pageId.replace(
                                          "page-",
                                          "",
                                        );
                                        // Use specific names for first few pages
                                        if (pageNum === "1") return "Outline";
                                        if (pageNum === "2") return "Draft";
                                        if (pageNum === "3") return "Research";
                                        // For others, use "Page #" format
                                        return `Page ${pageNum}`;
                                      }

                                      // For underscore formats like 'outline_page'
                                      if (pageId.includes("_")) {
                                        const parts = pageId.split("_");
                                        const firstPart = parts[0];
                                        // Capitalize first letter
                                        return (
                                          firstPart.charAt(0).toUpperCase() +
                                          firstPart.slice(1)
                                        );
                                      }

                                      // Default to the pageId as fallback
                                      return pageId;
                                    })()}
                                  </TabsTrigger>
                                ))
                            ) : (
                              // Default "waiting" tab if no content yet
                              <>
                                <TabsTrigger value="main" className="flex-1">
                                  Content
                                </TabsTrigger>
                              </>
                            )}

                            {/* Add a full content tab */}
                            <TabsTrigger
                              value="full-content"
                              className="flex-1"
                            >
                              Full Content
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>

                        {/* Full content toggle checkbox */}
                        <div className="ml-4 flex items-center">
                          <input
                            type="checkbox"
                            id="fullContentToggle"
                            checked={showFullContent}
                            onChange={(e) =>
                              setShowFullContent(e.target.checked)
                            }
                            className="mr-2"
                          />
                          <label
                            htmlFor="fullContentToggle"
                            className="text-sm text-gray-600"
                          >
                            Show Full Content
                          </label>
                        </div>
                      </div>

                      {/* Display active page content or full content */}
                      <div className="prose max-h-[50vh] overflow-y-auto rounded-md border bg-white p-3">
                        {showFullContent ? (
                          // Full content display - combine all pages
                          <div>
                            {Object.keys(documentPages).length > 0 ? (
                              // Sort pages by their page number and combine content
                              Object.keys(documentPages)
                                .filter(
                                  (pageId) =>
                                    pageId !== "main" ||
                                    documentPages["main"].length > 0,
                                )
                                .sort((a, b) => {
                                  if (a === "main") return -1;
                                  if (b === "main") return 1;
                                  const aNum =
                                    parseInt(a.replace("page-", ""), 10) || 999;
                                  const bNum =
                                    parseInt(b.replace("page-", ""), 10) || 999;
                                  return aNum - bNum;
                                })
                                .map((pageId, index) => (
                                  <div
                                    key={pageId}
                                    className={
                                      index > 0
                                        ? "mt-6 border-t border-gray-200 pt-4"
                                        : ""
                                    }
                                  >
                                    {pageId !== "main" &&
                                      pageNamesRef.current[pageId] && (
                                        <h2 className="mb-4 text-xl font-bold text-blue-600">
                                          {pageNamesRef.current[pageId]}
                                        </h2>
                                      )}
                                    <div
                                      className="whitespace-pre-wrap"
                                      dangerouslySetInnerHTML={{
                                        __html: documentPages[pageId],
                                      }}
                                    />
                                  </div>
                                ))
                            ) : (
                              <p className="text-gray-400">
                                Waiting for content...
                              </p>
                            )}
                          </div>
                        ) : // Single page display
                        documentPages[activeDocumentPage] ? (
                          <div
                            className="whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{
                              __html: documentPages[activeDocumentPage],
                            }}
                          />
                        ) : (
                          <p className="text-gray-400">
                            Waiting for content...
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Standard document content */}
                  {!deepWriter && (
                    <div className="prose max-h-[50vh] overflow-y-auto rounded-md border bg-white p-3">
                      {documentContent ? (
                        <div
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{
                            __html: documentContent,
                          }}
                        />
                      ) : (
                        <p className="text-gray-400">Waiting for content...</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Empty state */}
              {!chatContent && !isGenerating && !documentTitle && (
                <div className="text-gray-400">
                  Response will appear here...
                </div>
              )}
            </div>
          </TestPanel>
        </TestResultPanel>
      </TestPanelGroup>
    </div>
  );
}
