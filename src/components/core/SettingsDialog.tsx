import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/core/dialog";
import { Button } from "@/components/core/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/core/tabs";
import { getEditorConfig } from "@/config/editorConfig";
import type { Suggestion } from "@/hooks/editor/useTextSuggestions";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSimulateSuggestions?: () => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
  onSimulateSuggestions,
}) => {
  const config = getEditorConfig();
  const currentDocument = useDocumentStore((state) => state.currentDocument);

  // State for copy notification and active tab
  const [copyNotification, setCopyNotification] = React.useState<string | null>(
    null,
  );
  const [activeTab, setActiveTab] = React.useState("settings");

  // Clear notification after timeout
  React.useEffect(() => {
    if (copyNotification) {
      const timer = setTimeout(() => {
        setCopyNotification(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copyNotification]);

  // Copy to clipboard function
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopyNotification(`${type} copied to clipboard`);
  };

  // Mock settings values - in a real implementation, these would be state values
  // that update the actual configuration
  const [llmEnabled, setLlmEnabled] = React.useState(
    config.prediction.llmEnabled,
  );
  const [temperature, setTemperature] = React.useState(
    config.prediction.temperature || 0.7,
  );

  // Format raw JSON for display
  const formatRawResponse = (rawResponse: string | undefined) => {
    if (!rawResponse) return "";
    try {
      // If it's already a string, try to parse it to pretty print
      const parsed = JSON.parse(rawResponse);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // If parsing fails, it might be already formatted or not JSON
      return rawResponse;
    }
  };

  // Sample suggestions for testing
  const sampleSuggestions: Suggestion[] = [
    {
      id: "cont-1",
      title: "Continue",
      text: " with the implementation of this feature as discussed in our previous meeting.",
      type: "continueText",
    },
    {
      id: "formal-1",
      title: "Formal",
      text: " to proceed with the implementation of aforementioned functionality as per our prior discussion.",
      type: "rewriteStyle",
    },
    {
      id: "casual-1",
      title: "Casual",
      text: " and just get this feature done like we talked about earlier.",
      type: "rewriteTone",
    },
    {
      id: "creative-1",
      title: "Creative",
      text: " on this exciting journey of feature implementation, bringing our vision to life!",
      type: "rewriteAngle",
    },
  ];

  // Handle simulating suggestions
  const handleSimulateSuggestions = () => {
    // Dispatch a custom event with sample suggestions for testing
    const event = new CustomEvent("simulateSuggestions", {
      detail: { suggestions: sampleSuggestions },
    });
    document.dispatchEvent(event);
    console.log("Simulated suggestions:", sampleSuggestions);

    // Close the dialog after simulation
    onOpenChange(false);
  };

  const handleSave = () => {
    // In a real application, this would save to config
    console.log("Saving settings:", { llmEnabled, temperature });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`pb-0 sm:max-w-[600px]`}>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Configure your editing experience
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="settings"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="llm">LLM</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="pt-2">
            <div className="grid gap-4 py-4 pb-8">
              <div className="flex items-center justify-between">
                <label htmlFor="llm-toggle" className="text-sm font-medium">
                  AI Suggestions Enabled
                </label>
                <div className="flex h-5 items-center">
                  <input
                    id="llm-toggle"
                    type="checkbox"
                    checked={llmEnabled}
                    onChange={(e) => setLlmEnabled(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="temperature" className="text-sm font-medium">
                  AI Creativity (Temperature): {temperature.toFixed(1)}
                </label>
                <input
                  id="temperature"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  disabled={!llmEnabled}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Precise</span>
                  <span>Creative</span>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="mb-4">
                <h3 className="mb-2 text-sm font-medium">Testing Tools</h3>
                <Button
                  variant="secondary"
                  onClick={handleSimulateSuggestions}
                  className="w-full"
                  type="button"
                >
                  Simulate Suggestions
                </Button>
                <p className="mt-2 text-xs text-gray-500">
                  This will generate sample suggestions to test the ComposeBar
                  interactions.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="llm" className="pt-2">
            <div style={{ height: "370px" }} className="overflow-auto py-4">
              {currentDocument?.llmMetadata ? (
                <div className="grid gap-4 pb-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Model</h3>
                    <div className="rounded bg-gray-50 p-2 text-sm">
                      {currentDocument.llmMetadata.model || "Unknown model"}
                    </div>
                    {currentDocument.llmMetadata.generatedAt && (
                      <div className="mt-1 text-xs text-gray-500">
                        Generated on{" "}
                        {new Date(
                          currentDocument.llmMetadata.generatedAt,
                        ).toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-sm font-medium">Prompt</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 py-0 text-xs"
                        onClick={() => {
                          if (currentDocument?.llmMetadata?.prompt) {
                            copyToClipboard(
                              currentDocument.llmMetadata.prompt,
                              "Prompt",
                            );
                          }
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                    <div className="max-h-24 overflow-auto rounded bg-gray-50 p-2 text-sm whitespace-pre-wrap">
                      {currentDocument.llmMetadata.prompt ||
                        "No prompt available"}
                    </div>
                  </div>

                  {/* Deep Writer Section */}
                  {currentDocument?.llmMetadata?.deepWriter && (
                    <div className="mb-4">
                      <div className="mb-2 flex items-center">
                        <h3 className="text-sm font-medium">Deep Writer</h3>
                        <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                          Enabled
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 rounded border border-gray-200 bg-gray-50 p-3">
                        <div className="flex items-center text-xs">
                          <span className="w-24 font-medium">
                            Content Type:
                          </span>
                          <span className="capitalize">
                            {currentDocument.llmMetadata.deepWriter
                              .contentType || "Custom"}
                          </span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="w-24 font-medium">Outline:</span>
                          <span>
                            {currentDocument.llmMetadata.deepWriter
                              .generateOutline
                              ? "✓"
                              : "✗"}
                          </span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="w-24 font-medium">Draft:</span>
                          <span>
                            {currentDocument.llmMetadata.deepWriter
                              .generateDraft
                              ? "✓"
                              : "✗"}
                          </span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="w-24 font-medium">Research:</span>
                          <span>
                            {currentDocument.llmMetadata.deepWriter
                              .generateResearch
                              ? "✓"
                              : "✗"}
                          </span>
                        </div>
                        {currentDocument.llmMetadata.deepWriter
                          .detailedResearch && (
                          <div className="col-span-2 flex items-center text-xs">
                            <span className="w-24 font-medium">
                              Detailed Research:
                            </span>
                            <span>✓</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-sm font-medium">Raw Response</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 py-0 text-xs"
                        onClick={() => {
                          if (currentDocument?.llmMetadata?.rawResponse) {
                            copyToClipboard(
                              currentDocument.llmMetadata.rawResponse,
                              "Raw response",
                            );
                          }
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                    <pre className="rounded bg-gray-50 p-2 text-xs break-words whitespace-pre-wrap">
                      {formatRawResponse(
                        currentDocument.llmMetadata.rawResponse,
                      ) || "No raw response available"}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center pb-4 text-center text-gray-500">
                  <p>No LLM metadata available for this document.</p>
                  <p className="mt-2 text-xs">
                    This document was not generated by an AI.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {copyNotification && (
          <div className="absolute right-0 bottom-20 left-0 mx-auto w-fit rounded-md border border-green-300 bg-green-100 px-4 py-2 text-sm text-green-800 shadow-sm">
            {copyNotification}
          </div>
        )}

        {activeTab === "settings" && (
          <DialogFooter className="px-4 pb-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
