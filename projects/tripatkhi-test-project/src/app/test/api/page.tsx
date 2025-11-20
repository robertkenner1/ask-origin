"use client";

import { useState, useEffect } from "react";
import PromptApiClient from "@/services/api";
import {
  ChatRequest,
  SuggestRequest,
  GenerateDocumentRequest,
  CancellableOperation,
} from "@/services/api";
import { DocumentPromptVariant, SuggestionType, ChatRoleType } from "@/prompts";
import prompts from "@/prompts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  TestPanel,
  TestPanelGroup,
  TestConfigPanel,
  TestResultPanel,
  TestResultDisplay,
  TestPastResults,
  TestLoadingIndicator,
  TestErrorDisplay,
} from "../components";

const { getDocumentPromptByVariant, getSuggestionPrompt, getChatPromptByRole } =
  prompts;

/**
 * Test page for the API client
 * Uses a tabbed interface with configuration options for each API type
 */
export default function ApiTestPage() {
  // State for API client
  const [apiClient, setApiClient] = useState<PromptApiClient | null>(null);

  // State for current tab
  const [activeTab, setActiveTab] = useState("chat");

  // State for operations
  const [operation, setOperation] = useState<CancellableOperation<any> | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [pastResults, setPastResults] = useState<
    Array<{
      id: number;
      data: any;
      expanded: boolean;
      type: string; // 'chat', 'suggest', or 'generate'
      config: any; // store configuration used for this result
      timestamp: Date;
    }>
  >([]);
  const [error, setError] = useState<Error | null>(null);

  // Dialog state
  const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false);
  const [isDialogClosing, setIsDialogClosing] = useState(false);
  const [promptDialogTitle, setPromptDialogTitle] = useState("");
  const [promptDialogContent, setPromptDialogContent] = useState("");

  // Chat request state
  const [chatInput, setChatInput] = useState(
    "Hello, can you help me write a document about climate change?",
  );
  const [chatRole, setChatRole] = useState<ChatRoleType>(
    ChatRoleType.ASSISTANT,
  );
  const [domainExpertArea, setDomainExpertArea] = useState("climate science");

  // Suggest request state
  const [textInput, setTextInput] = useState(
    "The impact of climate change on biodiversity is profound. Many species are",
  );
  const [cursorPosition, setCursorPosition] = useState<number | undefined>(
    undefined,
  );
  const [suggestionType, setSuggestionType] = useState<SuggestionType>(
    SuggestionType.CONTINUATION,
  );

  // Generate document state
  const [promptInput, setPromptInput] = useState(
    "Create a product requirements document for a new mobile app that helps users track their carbon footprint",
  );
  const [deepWriter, setDeepWriter] = useState(false);
  const [documentVariant, setDocumentVariant] = useState<DocumentPromptVariant>(
    DocumentPromptVariant.DEFAULT,
  );

  // Initialize API client
  useEffect(() => {
    const client = new PromptApiClient({
      enableLogging: true,
      // Don't set baseUrl - let the ApiClient use the relative URLs directly
    });
    setApiClient(client);

    // Log that we've initialized the client
    console.log("API client initialized:", client);
  }, []);

  // Cleanup function for cancelling operations
  useEffect(() => {
    return () => {
      if (operation) {
        operation.cancel();
      }
    };
  }, [operation]);

  // Common function to update results - puts current result in past results
  // and sets the new result as current
  const updateResultAndHistory = (newResult: any) => {
    // If there's a current result, move it to past results first
    if (result !== null) {
      setPastResults((prev) => [result, ...prev]);
    }

    // Then set the new result as current
    setResult(newResult);
    setIsLoading(false);
    setOperation(null);
  };

  // Get current configuration based on active tab
  const getActiveConfig = () => {
    switch (activeTab) {
      case "chat":
        return {
          role: chatRole,
          domain:
            chatRole === ChatRoleType.EXPERT ? domainExpertArea : undefined,
        };
      case "suggest":
        return {
          type: suggestionType,
          cursorPosition,
        };
      case "generate":
        return {
          variant: documentVariant,
          deepWriter,
        };
      default:
        return {};
    }
  };

  // Handle API call errors
  const handleError = (err: any) => {
    // Set the error state directly
    setError(err instanceof Error ? err : new Error(String(err)));
    setIsLoading(false);
    setOperation(null);
  };

  // Cancel current operation
  const handleCancel = () => {
    if (operation) {
      operation.cancel();
      setOperation(null);
      setIsLoading(false);
      setError(new Error("Operation cancelled by user"));
    }
  };

  // Clear current result and move it to past results
  const handleClear = () => {
    // Move current result to past results before clearing
    if (result) {
      // Set expanded to false when moving to past results via Clear button
      // No need to modify the structure since the result is already in the correct format
      const resultWithExpansionState = {
        ...result,
        expanded: false,
      };

      setPastResults((prev) => [resultWithExpansionState, ...prev]);

      // Clear after adding to past results
      setResult(null);
      setError(null);
    }
  };

  // Toggle expansion of a past result
  const togglePastResult = (id: number) => {
    setPastResults((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item,
      ),
    );
  };

  // Clear all past results
  const clearAllResults = () => {
    setPastResults([]);
    setResult(null);
    setError(null);
  };

  // Test chat API
  const testChat = async () => {
    if (!apiClient) return;

    // Start loading state
    setIsLoading(true);
    setError(null);

    // Create well-formed message
    const messages = [
      {
        type: "user" as const,
        content: chatInput,
        id: Date.now().toString(),
        timestamp: new Date(),
      },
    ];

    // If using domain expert, include the domain
    const chatVars = {
      messages,
      // Only include domain for expert role
      ...(chatRole === ChatRoleType.EXPERT ? { domain: domainExpertArea } : {}),
    };

    const op = apiClient.createCancellableChatMessage(chatVars, chatRole);
    setOperation(op);

    try {
      const response = await op.result();

      // Create a complete result object with metadata
      const newResult = {
        id: Date.now(), // Unique ID for this result
        expanded: true, // New results start expanded
        data: response,
        type: "chat",
        config: {
          role: chatRole,
          ...(chatRole === ChatRoleType.EXPERT
            ? { domain: domainExpertArea }
            : {}),
        },
        timestamp: new Date(),
      };

      // Use common function to update results
      updateResultAndHistory(newResult);
    } catch (err) {
      handleError(err);
    }
  };

  // Test suggest API
  const testSuggest = async () => {
    if (!apiClient) return;

    // Start loading state
    setIsLoading(true);
    setError(null);

    const op = apiClient.createCancellableSuggestions(
      {
        text: textInput,
        cursorPosition:
          cursorPosition !== undefined ? Number(cursorPosition) : undefined,
        suggestionCount: 4,
      },
      suggestionType,
    );

    setOperation(op);

    try {
      const response = await op.result();

      // Create a complete result object with metadata
      const newResult = {
        id: Date.now(), // Unique ID for this result
        expanded: true, // New results start expanded
        data: response,
        type: "suggest",
        config: {
          suggestionType: suggestionType,
          cursorPosition: cursorPosition,
        },
        timestamp: new Date(),
      };

      // Use common function to update results
      updateResultAndHistory(newResult);
    } catch (err) {
      handleError(err);
    }
  };

  // Test generate document API
  const testGenerateDocument = async () => {
    if (!apiClient) return;

    // Start loading state
    setIsLoading(true);
    setError(null);

    const op = apiClient.createCancellableDocumentGeneration(
      {
        topic: promptInput,
        deepWriter,
        style: "balanced",
        length: deepWriter ? "long" : "medium",
      },
      documentVariant,
    );

    setOperation(op);

    try {
      const response = await op.result();

      // Create a complete result object with metadata
      const newResult = {
        id: Date.now(), // Unique ID for this result
        expanded: true, // New results start expanded
        data: response,
        type: "generate",
        config: {
          documentVariant: documentVariant,
          deepWriter: deepWriter,
        },
        timestamp: new Date(),
      };

      // Use common function to update results
      updateResultAndHistory(newResult);
    } catch (err) {
      handleError(err);
    }
  };

  // Function to show system prompt modal
  const showSystemPrompt = (type: string) => {
    let title = "";
    let content = "";
    let version = "";

    if (type === "chat") {
      // For domain expert, we need to format the prompt with the domain
      if (chatRole === ChatRoleType.EXPERT) {
        const prompt = getChatPromptByRole(chatRole);
        const { formatPrompt } = prompts;
        title = `Chat System Prompt (${chatRole}: ${domainExpertArea})`;
        content = formatPrompt(prompt.systemTemplate || "", {
          domain: domainExpertArea,
        });
        version = prompt.version;
      } else {
        const prompt = getChatPromptByRole(chatRole);
        title = `Chat System Prompt (${chatRole})`;
        content = prompt.systemTemplate || "";
        version = prompt.version;
      }
    } else if (type === "suggest") {
      const prompt = getSuggestionPrompt({
        type: suggestionType,
        cursorPosition,
      });
      title = `Suggestion System Prompt (${suggestionType})`;
      content = prompt.systemTemplate || "";
      version = prompt.version;
    } else if (type === "generate") {
      const prompt = getDocumentPromptByVariant(documentVariant);
      title = `Document Generation Prompt (${documentVariant}${deepWriter ? ", DeepWriter" : ""})`;
      content = prompt.systemTemplate || "";
      version = prompt.version;
    }

    setPromptDialogTitle(`${title} v${version}`);
    setPromptDialogContent(content);
    setIsDialogClosing(false);
    setIsPromptDialogOpen(true);
  };

  // Function to close dialog with animation
  const closeDialog = () => {
    setIsDialogClosing(true);
    // Wait for animation to complete before fully closing
    setTimeout(() => {
      setIsPromptDialogOpen(false);
      setIsDialogClosing(false);
    }, 200); // Match animation duration
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">API Client Test</h1>

      <TestPanelGroup>
        {/* Left column - Configuration */}
        <TestConfigPanel>
          <TestPanel title="">
            <Tabs
              defaultValue="chat"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="mb-6 w-full bg-gray-200">
                <TabsTrigger value="chat" className="flex-1">
                  Chat
                </TabsTrigger>
                <TabsTrigger value="suggest" className="flex-1">
                  Suggest
                </TabsTrigger>
                <TabsTrigger value="generate" className="flex-1">
                  Generate
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Assistant Role
                    </label>
                    <select
                      value={chatRole}
                      onChange={(e) =>
                        setChatRole(e.target.value as ChatRoleType)
                      }
                      className="w-full rounded-md border bg-white p-2 text-base"
                    >
                      <option value={ChatRoleType.ASSISTANT}>
                        General Assistant
                      </option>
                      <option value={ChatRoleType.EDITOR}>Editor</option>
                      <option value={ChatRoleType.TUTOR}>Writing Tutor</option>
                      <option value={ChatRoleType.EXPERT}>Domain Expert</option>
                    </select>
                  </div>

                  {/* Domain Expert Area - only visible when Domain Expert role is selected */}
                  {chatRole === ChatRoleType.EXPERT && (
                    <div className="mt-4">
                      <label className="mb-1 block text-sm font-medium">
                        Domain Area
                      </label>
                      <input
                        type="text"
                        value={domainExpertArea}
                        onChange={(e) => setDomainExpertArea(e.target.value)}
                        className="w-full rounded-md border bg-white p-2 text-base"
                        placeholder="Enter domain expertise (e.g., climate science)"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Required for Domain Expert role
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="flex justify-between">
                      <span className="mb-1 block text-sm font-medium">
                        Message
                      </span>
                      <button
                        onClick={() => showSystemPrompt("chat")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View System Prompt
                      </button>
                    </label>
                    <textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className={
                        "max-h-[300px] min-h-[120px] w-full flex-grow resize-none overflow-y-auto rounded-md border bg-white p-2 text-base"
                      }
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    onClick={testChat}
                    disabled={isLoading}
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    Test Chat API
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="suggest" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Suggestion Type
                    </label>
                    <select
                      value={suggestionType}
                      onChange={(e) =>
                        setSuggestionType(e.target.value as SuggestionType)
                      }
                      className="w-full rounded-md border bg-white p-2 text-base"
                    >
                      <option value={SuggestionType.CONTINUATION}>
                        Continuation
                      </option>
                      <option value={SuggestionType.REWRITE}>Rewrite</option>
                      <option value={SuggestionType.EXPAND}>Expand</option>
                      <option value={SuggestionType.SUMMARIZE}>
                        Summarize
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="flex justify-between">
                      <span className="mb-1 block text-sm font-medium">
                        Text
                      </span>
                      <button
                        onClick={() => showSystemPrompt("suggest")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View System Prompt
                      </button>
                    </label>
                    <textarea
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      className="max-h-[300px] min-h-[120px] w-full flex-grow resize-none overflow-y-auto rounded-md border bg-white p-2 text-base"
                      placeholder="Enter text for suggestions"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Cursor Position (optional)
                    </label>
                    <input
                      type="number"
                      value={cursorPosition === undefined ? "" : cursorPosition}
                      onChange={(e) =>
                        setCursorPosition(
                          e.target.value ? Number(e.target.value) : undefined,
                        )
                      }
                      className="w-full rounded-md border bg-white p-2 text-base"
                      placeholder="Enter cursor position"
                    />
                  </div>

                  <button
                    onClick={testSuggest}
                    disabled={isLoading}
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    Test Suggest API
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="generate" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Document Variant
                    </label>
                    <select
                      value={documentVariant}
                      onChange={(e) =>
                        setDocumentVariant(
                          e.target.value as DocumentPromptVariant,
                        )
                      }
                      className="w-full rounded-md border bg-white p-2 text-base"
                    >
                      <option value={DocumentPromptVariant.DEFAULT}>
                        Standard
                      </option>
                      <option value={DocumentPromptVariant.DEEP_WRITER}>
                        Deep Writer
                      </option>
                      <option value={DocumentPromptVariant.ACADEMIC}>
                        Academic
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="flex justify-between">
                      <span className="mb-1 block text-sm font-medium">
                        Topic/Prompt
                      </span>
                      <button
                        onClick={() => showSystemPrompt("generate")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View System Prompt
                      </button>
                    </label>
                    <textarea
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      className="max-h-[300px] min-h-[120px] w-full flex-grow resize-none overflow-y-auto rounded-md border bg-white p-2 text-base"
                      placeholder="Enter prompt for document generation"
                    />
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={deepWriter}
                        onChange={(e) => setDeepWriter(e.target.checked)}
                        className="mr-2"
                      />
                      Use DeepWriter (multiple pages)
                    </label>
                  </div>

                  <button
                    onClick={testGenerateDocument}
                    disabled={isLoading}
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    Test Generate Document API
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </TestPanel>
        </TestConfigPanel>

        {/* Right column - Results */}
        <TestResultPanel>
          <div className="space-y-6">
            {/* Operation Status */}
            {isLoading && (
              <TestLoadingIndicator
                message="Loading..."
                onCancel={handleCancel}
              />
            )}

            {/* Error Display */}
            {error && <TestErrorDisplay error={error} />}

            {/* Current Result Display */}
            {result && (
              <TestResultDisplay
                result={result.data}
                title={`Current Result (${result.type}${result.type === "chat" ? `: ${result.config.role}` : ""}${result.type === "suggest" ? `: ${result.config.suggestionType}` : ""}${result.type === "generate" ? `: ${result.config.documentVariant}${result.config.deepWriter ? ", DeepWriter" : ""}` : ""})`}
                onClear={handleClear}
              />
            )}

            {/* Empty state only shows if no result, no error, and not loading */}
            {!isLoading && !error && !result && pastResults.length === 0 && (
              <TestPanel
                title=""
                className={
                  "flex h-40 flex-col items-center justify-center text-center"
                }
              >
                <h3 className="mb-3 text-xl font-semibold">
                  API Testing Interface
                </h3>
                <p className="text-gray-600">
                  Configure options in the left panel and click the test button
                  to see results here.
                </p>
              </TestPanel>
            )}

            {/* Current configuration summary when no result but loading */}
            {isLoading && !result && (
              <TestPanel
                title="Loading Configuration"
                className={"mb-6 border-blue-100 bg-blue-50 text-left"}
              >
                {activeTab === "chat" && (
                  <p className="text-blue-700">
                    Testing chat with role: <strong>{chatRole}</strong>
                  </p>
                )}
                {activeTab === "suggest" && (
                  <p className="text-blue-700">
                    Testing <strong>{suggestionType}</strong> suggestions
                    {cursorPosition !== undefined
                      ? ` at position ${cursorPosition}`
                      : ""}
                  </p>
                )}
                {activeTab === "generate" && (
                  <p className="text-blue-700">
                    Testing document generation with variant:{" "}
                    <strong>{documentVariant}</strong>
                    {deepWriter ? " using DeepWriter" : ""}
                  </p>
                )}
              </TestPanel>
            )}

            {/* Past Results - Always visible if there are any */}
            {pastResults.length > 0 && (
              <TestPastResults
                items={pastResults}
                onToggle={togglePastResult}
                onClearAll={clearAllResults}
              />
            )}
          </div>
        </TestResultPanel>
      </TestPanelGroup>

      {/* System Prompt Dialog */}
      {isPromptDialogOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4 ${isDialogClosing ? "animate-fadeOut" : "animate-fadeIn"} `}
          style={{
            animation: isDialogClosing
              ? "fadeOut 0.2s ease-in-out"
              : "fadeIn 0.15s ease-in-out",
            backgroundColor: "rgba(0, 0, 0, 0.84)",
          }}
        >
          <div
            className={`flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-white ${isDialogClosing ? "animate-scaleOut" : "animate-scaleIn"} `}
            style={{
              animation: isDialogClosing
                ? "scaleOut 0.2s ease-in"
                : "scaleIn 0.2s ease-out",
              transformOrigin: "center",
            }}
          >
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="text-xl font-semibold">{promptDialogTitle}</h3>
              <button
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-grow overflow-auto p-4">
              <pre className="max-h-[60vh] overflow-auto rounded-md bg-gray-50 p-4 font-mono text-sm break-words whitespace-pre-wrap">
                {promptDialogContent}
              </pre>
            </div>
            <div className="border-t p-4">
              <button
                onClick={closeDialog}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scaleOut {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(0.95);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
