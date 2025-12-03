"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import prompts, {
  DocumentPromptVariant,
  SuggestionType,
  ChatRoleType,
} from "@/prompts";

import {
  TestPanel,
  TestPanelGroup,
  TestConfigPanel,
  TestResultPanel,
  TestResultDisplay,
  TestErrorDisplay,
} from "../components";

/**
 * Test page for prompt formatting system
 */
export default function PromptTestPage() {
  // State for current tab
  const [activeTab, setActiveTab] = useState("document");

  // Common state
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Document generation state
  const [topic, setTopic] = useState("Artificial intelligence ethics");
  const [style, setStyle] = useState("balanced");
  const [length, setLength] = useState("medium");
  const [domain, setDomain] = useState("technology");
  const [sections, setSections] = useState([
    "introduction",
    "current state",
    "ethical concerns",
    "recommendations",
    "conclusion",
  ]);
  const [docVariant, setDocVariant] = useState<DocumentPromptVariant>(
    DocumentPromptVariant.DEFAULT,
  );

  // Text suggestion state
  const [text, setText] = useState(
    "The impact of climate change on biodiversity is profound. Many species are",
  );
  const [cursorPosition, setCursorPosition] = useState<number | undefined>(
    undefined,
  );
  const [suggestionCount, setSuggestionCount] = useState(4);
  const [suggestType, setSuggestType] = useState<SuggestionType>(
    SuggestionType.CONTINUATION,
  );

  // Chat state
  const [message, setMessage] = useState(
    "Can you help me improve this paragraph about climate change?",
  );
  const [chatRole, setChatRole] = useState<ChatRoleType>(
    ChatRoleType.ASSISTANT,
  );
  const [includeFormatting, setIncludeFormatting] = useState(true);

  // Handler for testing document prompts
  const testDocumentPrompt = () => {
    try {
      setError(null);

      // Get the appropriate prompt
      const promptTemplate = prompts.getDocumentPromptByVariant(docVariant);

      // Format with variables
      const { prompt, systemPrompt } = prompts.createPromptPackage(
        promptTemplate,
        {
          topic,
          style,
          length,
          domain,
          sections,
          deepWriter: docVariant === DocumentPromptVariant.DEEP_WRITER,
        },
      );

      // Set the result
      setResult(
        `${systemPrompt ? `System prompt:\n${systemPrompt}\n\n` : ""}User prompt:\n${prompt}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setResult("");
    }
  };

  // Handler for testing suggestion prompts
  const testSuggestionPrompt = () => {
    try {
      setError(null);

      // Get the appropriate prompt
      const promptTemplate = prompts.getSuggestionPrompt({
        cursorPosition:
          cursorPosition !== undefined ? Number(cursorPosition) : undefined,
        type: suggestType,
      });

      // Format with variables
      const { prompt, systemPrompt } = prompts.createPromptPackage(
        promptTemplate,
        {
          text,
          cursorPosition:
            cursorPosition !== undefined ? Number(cursorPosition) : undefined,
          suggestionCount,
          includeCursor: cursorPosition !== undefined,
        },
      );

      // Set the result
      setResult(
        `${systemPrompt ? `System prompt:\n${systemPrompt}\n\n` : ""}User prompt:\n${prompt}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setResult("");
    }
  };

  // Handler for testing chat prompts
  const testChatPrompt = () => {
    try {
      setError(null);

      // Get the appropriate prompt
      const promptTemplate = prompts.getChatPromptByRole(chatRole);

      // Create a simple message history
      const messages = [
        {
          type: "user" as const,
          content: message,
          id: "1",
          timestamp: new Date(),
        },
      ];

      // Format with variables
      const { prompt, systemPrompt } = prompts.createPromptPackage(
        promptTemplate,
        {
          messages,
          includeFormatting,
          domain: domain || undefined,
        },
      );

      // Set the result
      setResult(
        `${systemPrompt ? `System prompt:\n${systemPrompt}\n\n` : ""}User prompt:\n${prompt}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setResult("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Prompt Management System Test</h1>

      <TestPanelGroup>
        {/* Left column - Configuration */}
        <TestConfigPanel>
          <TestPanel title="Prompt Configuration">
            <Tabs
              defaultValue="document"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className={`mb-6 w-full bg-gray-200`}>
                <TabsTrigger value="document" className={`flex-1`}>
                  Document
                </TabsTrigger>
                <TabsTrigger value="suggest" className={`flex-1`}>
                  Suggestion
                </TabsTrigger>
                <TabsTrigger value="chat" className={`flex-1`}>
                  Chat
                </TabsTrigger>
              </TabsList>

              {/* Document Tab Content */}
              <TabsContent value="document" className={`space-y-4`}>
                <div className={`mb-4`}>
                  <label className={`mb-1 block text-sm font-medium`}>
                    Topic
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={`w-full rounded-md border bg-white p-2 text-base`}
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full rounded-md border bg-white p-2 text-base"
                  >
                    <option value="balanced">Balanced</option>
                    <option value="formal">Formal</option>
                    <option value="casual">Casual</option>
                    <option value="technical">Technical</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full rounded-md border bg-white p-2 text-base"
                  >
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Domain
                  </label>
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full rounded-md border bg-white p-2 text-base"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Prompt Variant
                  </label>
                  <select
                    value={docVariant}
                    onChange={(e) =>
                      setDocVariant(e.target.value as DocumentPromptVariant)
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

                <button
                  onClick={testDocumentPrompt}
                  className={`w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50`}
                >
                  Test Document Prompt
                </button>
              </TabsContent>

              {/* Suggestion Tab Content */}
              <TabsContent value="suggest" className="space-y-4">
                <div className="mb-4 flex flex-grow flex-col">
                  <label className="mb-1 block text-sm font-medium">Text</label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="min-h-[100px] w-full flex-grow rounded-md border bg-white p-2 text-base"
                  />
                </div>

                <div className="mb-4">
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
                    placeholder="Leave empty for end of text"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Suggestion Count
                  </label>
                  <input
                    type="number"
                    value={suggestionCount}
                    onChange={(e) => setSuggestionCount(Number(e.target.value))}
                    className="w-full rounded-md border bg-white p-2 text-base"
                    min={1}
                    max={10}
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    Suggestion Type
                  </label>
                  <select
                    value={suggestType}
                    onChange={(e) =>
                      setSuggestType(e.target.value as SuggestionType)
                    }
                    className="w-full rounded-md border bg-white p-2 text-base"
                  >
                    <option value={SuggestionType.CONTINUATION}>
                      Continuation
                    </option>
                    <option value={SuggestionType.REWRITE}>Rewrite</option>
                    <option value={SuggestionType.EXPAND}>Expand</option>
                    <option value={SuggestionType.SUMMARIZE}>Summarize</option>
                  </select>
                </div>

                <button
                  onClick={testSuggestionPrompt}
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  Test Suggestion Prompt
                </button>
              </TabsContent>

              {/* Chat Tab Content */}
              <TabsContent value="chat" className="space-y-4">
                <div className="mb-4 flex flex-grow flex-col">
                  <label className="mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px] w-full flex-grow rounded-md border bg-white p-2 text-base"
                  />
                </div>

                <div className="mb-4">
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

                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeFormatting}
                      onChange={(e) => setIncludeFormatting(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">
                      Include Formatting Instructions
                    </span>
                  </label>
                </div>

                <button
                  onClick={testChatPrompt}
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  Test Chat Prompt
                </button>
              </TabsContent>
            </Tabs>
          </TestPanel>
        </TestConfigPanel>

        {/* Right column - Results */}
        <TestResultPanel>
          {/* Error display */}
          {error && <TestErrorDisplay error={new Error(error)} />}

          {/* Result display */}
          {result ? (
            <TestResultDisplay
              result={result}
              title={`Formatted ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Prompt`}
              onClear={() => setResult("")}
            />
          ) : (
            <TestPanel
              title=""
              className={`flex h-40 flex-col items-center justify-center text-center`}
            >
              <h3 className={`mb-3 text-xl font-semibold`}>
                Prompt Testing Interface
              </h3>
              <p className={`text-gray-600`}>
                Configure options in the left panel and click the test button to
                see formatted prompts here.
              </p>
            </TestPanel>
          )}
        </TestResultPanel>
      </TestPanelGroup>
    </div>
  );
}
