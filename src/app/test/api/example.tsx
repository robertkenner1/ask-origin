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

// Import our reusable components
import {
  TestPanel,
  TestPanelGroup,
  TestConfigPanel,
  TestResultPanel,
  TestErrorDisplay,
  TestResultDisplay,
  TestPastResults,
  TestLoadingIndicator,
} from "../components";

const { getDocumentPromptByVariant, getSuggestionPrompt, getChatPromptByRole } =
  prompts;

/**
 * Example of API test page using the reusable components
 * This demonstrates how the existing page could be refactored
 */
export default function ApiTestPageExample() {
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

  // Chat request state
  const [chatInput, setChatInput] = useState(
    "Hello, can you help me write a document about climate change?",
  );
  const [chatRole, setChatRole] = useState<ChatRoleType>(
    ChatRoleType.ASSISTANT,
  );
  const [domainExpertArea, setDomainExpertArea] = useState("climate science");

  // Initialize API client
  useEffect(() => {
    const client = new PromptApiClient({
      enableLogging: true,
    });
    setApiClient(client);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        API Client Test (With Reusable Components)
      </h1>

      <TestPanelGroup>
        {/* Left column - Configuration */}
        <TestConfigPanel>
          <TestPanel title="API Configuration">
            <Tabs
              defaultValue="chat"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="mb-6 w-full">
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
                    <label className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="max-h-[300px] min-h-[120px] w-full flex-grow resize-none overflow-y-auto rounded-md border bg-white p-2 text-base"
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

              {/* Other tabs content would go here */}
            </Tabs>
          </TestPanel>
        </TestConfigPanel>

        {/* Right column - Results */}
        <TestResultPanel>
          {/* Operation Status - using our new components */}
          {isLoading && (
            <TestLoadingIndicator
              message="Processing request..."
              onCancel={handleCancel}
            />
          )}

          {/* Error Display - using our new component */}
          <TestErrorDisplay error={error} />

          {/* Current Result Display - using our new component */}
          {result && (
            <TestResultDisplay
              result={result}
              title={`${result.type} Result`}
              onClear={handleClear}
            />
          )}

          {/* Past Results - using our new component */}
          <TestPastResults
            items={pastResults}
            onToggle={togglePastResult}
            onClearAll={clearAllResults}
          />
        </TestResultPanel>
      </TestPanelGroup>
    </div>
  );
}
