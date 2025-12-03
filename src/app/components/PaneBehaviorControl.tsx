"use client";

import React, { useState } from "react";
import { useSidebarStore } from "@/stores/chat/sidebarStore";
import { Settings, ChevronDown } from "lucide-react";

const PaneBehaviorControl: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const paneTypes = [
    { id: 0, name: "Orchestra", type: "orchestra" },
    { id: 1, name: "Proofreader", type: "proofreader" },
    { id: 2, name: "Plagiarism", type: "plagiarism" },
    { id: 3, name: "AI Detector", type: "aidetector" },
  ];

  const paneModes = [
    { id: "normal", name: "Normal", description: "Standard side panel" },
    { id: "compact", name: "Compact", description: "20% smaller width" },
    { id: "overlay", name: "Overlay", description: "Overlays editor content" },
    {
      id: "floating",
      name: "Floating",
      description: "Floating panel with shadow",
    },
    {
      id: "labels",
      name: "Labels",
      description: "Shows text labels next to icons",
    },
  ];

  const handleOpenPane = (paneId: number, mode: string) => {
    openPane(paneId, mode as any);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Pane Behavior Control"
      >
        <Settings size={18} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">
          Pane Behavior Control
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Current Status */}
      <div className="mb-4 p-2 bg-gray-50 rounded text-xs">
        <div>
          <strong>Active:</strong>{" "}
          {isPaneOpen ? currentPaneConfig?.type : "None"}
        </div>
        <div>
          <strong>Mode:</strong> {paneMode}
        </div>
        <div>
          <strong>Index:</strong> {activeSidebar ?? "None"}
        </div>
        {paneMode === "labels" && (
          <div>
            <strong>Sidebar:</strong>{" "}
            {isSidebarExpanded ? "Expanded" : "Collapsed"}
          </div>
        )}
      </div>

      {/* Pane Mode Selection */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-600 mb-2">
          Pane Mode:
        </label>
        <div className="grid grid-cols-2 gap-1">
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
              <div className="text-gray-500 text-xs">{mode.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar Expansion Control (only show when in labels mode) */}
      {paneMode === "labels" && (
        <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded">
          <label className="block text-xs font-medium text-blue-800 mb-2">
            Sidebar Labels:
          </label>
          <button
            onClick={toggleSidebarExpansion}
            className={`w-full p-2 text-xs rounded transition-colors ${
              isSidebarExpanded
                ? "bg-blue-200 text-blue-900 border border-blue-300"
                : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-50"
            }`}
          >
            {isSidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          </button>
          <p className="mt-1 text-xs text-blue-600">
            Hover over sidebar to expand/collapse automatically
          </p>
        </div>
      )}

      {/* Pane Type Controls */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-600 mb-2">
          Test Panes:
        </label>
        <div className="space-y-1">
          {paneTypes.map((pane) => (
            <div key={pane.id} className="flex items-center gap-2">
              <button
                onClick={() => handleOpenPane(pane.id, paneMode)}
                className={`flex-1 p-2 text-xs rounded text-left transition-colors ${
                  activeSidebar === pane.id
                    ? "bg-green-100 border border-green-300 text-green-800"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {pane.name}
              </button>
              {activeSidebar === pane.id && (
                <button
                  onClick={closePane}
                  className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                >
                  Close
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-t pt-3">
        <div className="flex gap-2">
          <button
            onClick={closePane}
            className="flex-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Close All
          </button>
          <button
            onClick={() => handleOpenPane(0, "overlay")}
            className="flex-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            Quick Overlay
          </button>
        </div>
      </div>

      {/* Help */}
      <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
        <strong>Tip:</strong> Try different modes with different pane types to
        see various behaviors!
      </div>
    </div>
  );
};

export default PaneBehaviorControl;
