"use client";

import React, { useState, useEffect } from "react";
import BasePaneComponent from "./BasePaneComponent";
import { useSidebarStore } from "@/stores/chat/sidebarStore";

interface ProofreaderPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProofreaderPane: React.FC<ProofreaderPaneProps> = ({
  isOpen,
  onClose,
}) => {
  const [analysis, setAnalysis] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock proofreading analysis
  useEffect(() => {
    if (isOpen) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setAnalysis([
          "Grammar: Consider revising sentence structure in paragraph 2",
          'Style: "Very" is overused throughout the document',
          "Clarity: Simplify complex sentences for better readability",
          "Tone: Maintain consistent formal tone throughout",
        ]);
        setIsAnalyzing(false);
      }, 1500);
    }
  }, [isOpen]);

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis([
        "Updated: Grammar issues resolved in paragraph 2",
        "New: Check passive voice usage in introduction",
        "Style: Consider stronger verb choices",
        "Spelling: No issues detected",
      ]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <BasePaneComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Proofreader"
      behavior="analysis"
    >
      <div className="p-4 space-y-4">
        {/* Control panel */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">
            Document Analysis
          </h3>
          <button
            onClick={handleRunAnalysis}
            disabled={isAnalyzing}
            className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 disabled:opacity-50"
          >
            {isAnalyzing ? "Analyzing..." : "Re-analyze"}
          </button>
        </div>

        {/* Analysis results */}
        <div className="space-y-2">
          {isAnalyzing ? (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="animate-spin h-4 w-4 border-2 border-green-500 border-t-transparent rounded-full"></div>
              <span>Analyzing document...</span>
            </div>
          ) : (
            analysis.map((item, index) => (
              <div
                key={index}
                className="p-3 bg-white border border-gray-200 rounded-lg"
              >
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))
          )}
        </div>

        {/* Settings */}
        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-600 mb-2">
            Analysis Settings
          </h4>
          <div className="space-y-2">
            <label className="flex items-center text-xs">
              <input type="checkbox" defaultChecked className="mr-2" />
              Grammar checking
            </label>
            <label className="flex items-center text-xs">
              <input type="checkbox" defaultChecked className="mr-2" />
              Style suggestions
            </label>
            <label className="flex items-center text-xs">
              <input type="checkbox" className="mr-2" />
              Tone analysis
            </label>
          </div>
        </div>
      </div>
    </BasePaneComponent>
  );
};

export default ProofreaderPane;
