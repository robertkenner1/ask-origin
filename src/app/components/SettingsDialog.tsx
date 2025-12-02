import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { getEditorConfig } from "@/config/editorConfig";
import type { Suggestion } from "@/hooks/editor/useTextSuggestions";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { useSidebarStore } from "@/stores/chat/sidebarStore";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSimulateSuggestions?: () => void;
  showUnderlinesSettings?: boolean;
  onToggleUnderlinesSettings?: (show: boolean) => void;
  showPillContainer?: boolean;
  onTogglePillContainer?: (show: boolean) => void;
  openSidebarByDefault?: boolean;
  onToggleOpenSidebarByDefault?: (open: boolean) => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
  onSimulateSuggestions,
  showUnderlinesSettings = false,
  onToggleUnderlinesSettings,
  showPillContainer,
  onTogglePillContainer,
  openSidebarByDefault,
  onToggleOpenSidebarByDefault,
}) => {
  const config = getEditorConfig();
  const currentDocument = useDocumentStore((state) => state.currentDocument);

  // Pane behavior controls
  const {
    activeSidebar,
    isPaneOpen,
    currentPaneConfig,
    paneMode,
    openPane,
    closePane,
    setPaneMode,
    isSidebarExpanded,
    toggleSidebarExpansion,
  } = useSidebarStore();

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
  const [localShowUnderlinesSettings, setLocalShowUnderlinesSettings] =
    React.useState(showUnderlinesSettings);

  // Pane testing data
  const paneTypes = [
    { id: 0, name: "Orchestra", type: "orchestra" },
    { id: 1, name: "Proofreader", type: "proofreader" },
    { id: 2, name: "Plagiarism", type: "plagiarism" },
    { id: 3, name: "AI Detector", type: "aidetector" },
  ];

  const paneModes = [
    {
      id: "tooltips",
      name: "Tooltips",
      description: "Shows tooltips on hover",
    },
    { id: "normal", name: "Normal", description: "Standard side panel" },
    {
      id: "compact",
      name: "Compact",
      description:
        "Expandable labels. Orchestra: 60% width when expanded, 100% when collapsed",
    },
    // { id: 'floating', name: 'Floating', description: 'Floating panel with shadow' },
    {
      id: "labels",
      name: "Labels Push",
      description: "Shows text labels next to icons",
    },
    {
      id: "pinned",
      name: "Labels Pinned",
      description: "Labels with fixed orchestra panel position",
    },

    { id: "overlay", name: "Overlay", description: "Overlays editor content" },
  ];

  const handleOpenPane = (paneId: number, mode: string) => {
    openPane(paneId, mode as any);
    // Keep dialog open for testing multiple panes
  };

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
          defaultValue="panes"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="panes">Panes</TabsTrigger>
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

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="underlines-toggle"
                    className="text-sm font-medium"
                  >
                    Show Underlines Settings
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Display the underlines toolbar in the editor
                  </p>
                </div>
                <div className="flex h-5 items-center">
                  <input
                    id="underlines-toggle"
                    type="checkbox"
                    checked={localShowUnderlinesSettings}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      setLocalShowUnderlinesSettings(newValue);
                      onToggleUnderlinesSettings?.(newValue);
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="pill-container-toggle"
                    className="text-sm font-medium"
                  >
                    Show Icon Container
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Display icons in a white pill-shaped container
                  </p>
                </div>
                <div className="flex h-5 items-center">
                  <input
                    id="pill-container-toggle"
                    type="checkbox"
                    checked={showPillContainer}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      onTogglePillContainer?.(newValue);
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="sidebar-open-toggle"
                    className="text-sm font-medium"
                  >
                    Open Sidebar by Default
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Start with the sidebar expanded to show labels
                  </p>
                </div>
                <div className="flex h-5 items-center">
                  <input
                    id="sidebar-open-toggle"
                    type="checkbox"
                    checked={openSidebarByDefault}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      onToggleOpenSidebarByDefault?.(newValue);
                    }}
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

          <TabsContent value="panes" className="pt-2">
            <div className="grid gap-4 py-4 pb-8 max-h-96 overflow-auto">
              {/* Current Status */}
              {/* <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Current Status</h3>
                <div className="space-y-1 text-xs">
                  <div><strong>Active:</strong> {isPaneOpen ? currentPaneConfig?.type : 'None'}</div>
                  <div><strong>Mode:</strong> {paneMode}</div>
                  <div><strong>Index:</strong> {activeSidebar ?? 'None'}</div>
                  {paneMode === 'labels' && (
                    <div><strong>Sidebar:</strong> {isSidebarExpanded ? 'Expanded' : 'Collapsed'}</div>
                  )}
                </div>
              </div> */}

              {/* Pane Mode Selection */}
              <div>
                <h3 className="text-sm font-medium mb-2">Pane Mode</h3>
                <div className="grid grid-cols-2 gap-2">
                  {paneModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setPaneMode(mode.id as any)}
                      className={`p-2 text-xs rounded border text-left transition-colors ${
                        paneMode === mode.id
                          ? "bg-blue-100 border-blue-300 text-blue-800"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      title={mode.description}
                    >
                      <div className="font-medium">{mode.name}</div>
                      <div className="text-gray-500 text-xs">
                        {mode.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Expansion Control (only show when in labels mode) */}
              {paneMode === "labels" && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="text-sm font-medium mb-2 text-blue-800">
                    Sidebar Labels
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSidebarExpansion}
                    className={`w-full h-8 text-xs ${
                      isSidebarExpanded
                        ? "bg-blue-200 text-blue-900 border-blue-300"
                        : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {isSidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                  </Button>
                  <p className="mt-2 text-xs text-blue-600">
                    Hover over sidebar to expand/collapse automatically
                  </p>
                </div>
              )}

              {/* Sidebar Expansion Control for Pinned Mode */}
              {paneMode === "pinned" && (
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="text-sm font-medium mb-2 text-purple-800">
                    Pinned Mode
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSidebarExpansion}
                    className={`w-full h-8 text-xs ${
                      isSidebarExpanded
                        ? "bg-purple-200 text-purple-900 border-purple-300"
                        : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
                    }`}
                  >
                    {isSidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                  </Button>
                  <p className="mt-2 text-xs text-purple-600">
                    Orchestra panel stays fixed when sidebar expands over it
                  </p>
                </div>
              )}

              {/* Sidebar Expansion Control for Compact Mode */}
              {paneMode === "compact" && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-sm font-medium mb-2 text-green-800">
                    Compact Mode
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSidebarExpansion}
                    className={`w-full h-8 text-xs ${
                      isSidebarExpanded
                        ? "bg-green-200 text-green-900 border-green-300"
                        : "bg-white text-green-700 border-green-300 hover:bg-green-50"
                    }`}
                  >
                    {isSidebarExpanded
                      ? "Collapse Sidebar (100% Orchestra width)"
                      : "Expand Sidebar (60% Orchestra width)"}
                  </Button>
                  <p className="mt-2 text-xs text-green-600">
                    {isSidebarExpanded
                      ? "Shows labels, Orchestra panel at 60% width"
                      : "Icons only, Orchestra panel at 100% width"}
                  </p>
                </div>
              )}

              {/* Pane Type Controls */}
              <div>
                <h3 className="text-sm font-medium mb-2">Test Panes</h3>
                <div className="space-y-2">
                  {paneTypes.map((pane) => (
                    <div key={pane.id} className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenPane(pane.id, paneMode)}
                        className={`flex-1 p-2 text-sm rounded text-left transition-colors ${
                          activeSidebar === pane.id
                            ? "bg-green-100 border border-green-300 text-green-800"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {pane.name}
                      </button>
                      {activeSidebar === pane.id && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={closePane}
                          className="h-8 px-3 text-xs"
                        >
                          Close
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closePane}
                    className="h-8 text-xs"
                  >
                    Close All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenPane(0, "overlay")}
                    className="h-8 text-xs"
                  >
                    Orchestra Overlay
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenPane(1, "compact")}
                    className="h-8 text-xs"
                  >
                    Proofreader Compact
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenPane(0, "pinned")}
                    className="h-8 text-xs"
                  >
                    Orchestra Pinned
                  </Button>
                </div>
              </div>

              {/* Help */}
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs">
                  <strong>Tip:</strong> Select a mode first, then test different
                  pane types to see various behaviors!
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
