"use client";

import React, { useState } from "react";
import BasePaneComponent from "./BasePaneComponent";

interface AiDetectorPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiDetectorPane: React.FC<AiDetectorPaneProps> = ({ isOpen, onClose }) => {
  const [detectionResults, setDetectionResults] = useState<{
    aiProbability: number;
    confidence: number;
    segments: Array<{ text: string; probability: number }>;
    status: "idle" | "analyzing" | "complete";
  }>({
    aiProbability: 0,
    confidence: 0,
    segments: [],
    status: "idle",
  });

  const handleAnalyze = () => {
    setDetectionResults({
      aiProbability: 0,
      confidence: 0,
      segments: [],
      status: "analyzing",
    });

    setTimeout(() => {
      setDetectionResults({
        aiProbability: 23,
        confidence: 78,
        segments: [
          { text: "Introduction paragraph", probability: 15 },
          { text: "Technical section", probability: 45 },
          { text: "Conclusion", probability: 10 },
        ],
        status: "complete",
      });
    }, 2500);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability < 20) return "text-green-600";
    if (probability < 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getProbabilityBg = (probability: number) => {
    if (probability < 20) return "bg-green-100";
    if (probability < 50) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <BasePaneComponent
      isOpen={isOpen}
      onClose={onClose}
      title="AI Detector"
      behavior="mini"
    >
      <div className="p-3 space-y-3">
        {/* Analyze button */}
        <button
          onClick={handleAnalyze}
          disabled={detectionResults.status === "analyzing"}
          className="w-full py-2 px-3 bg-blue-100 text-blue-800 rounded text-sm hover:bg-blue-200 disabled:opacity-50"
        >
          {detectionResults.status === "analyzing"
            ? "Analyzing..."
            : "Analyze for AI Content"}
        </button>

        {/* Analysis in progress */}
        {detectionResults.status === "analyzing" && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 justify-center">
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            <span>Detecting AI content...</span>
          </div>
        )}

        {/* Results */}
        {detectionResults.status === "complete" && (
          <div className="space-y-3">
            {/* Overall score */}
            <div className="text-center space-y-1">
              <div
                className={`text-2xl font-bold ${getProbabilityColor(detectionResults.aiProbability)}`}
              >
                {detectionResults.aiProbability}%
              </div>
              <div className="text-xs text-gray-500">
                AI-generated probability
              </div>
              <div className="text-xs text-gray-400">
                Confidence: {detectionResults.confidence}%
              </div>
            </div>

            {/* Segment analysis */}
            {detectionResults.segments.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-gray-600 mb-2">
                  Section Analysis:
                </h4>
                <div className="space-y-1">
                  {detectionResults.segments.map((segment, index) => (
                    <div
                      key={index}
                      className={`text-xs p-2 rounded border ${getProbabilityBg(segment.probability)}`}
                    >
                      <div className="font-medium">{segment.text}</div>
                      <div
                        className={`${getProbabilityColor(segment.probability)}`}
                      >
                        {segment.probability}% AI probability
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interpretation */}
            <div className="text-xs p-2 bg-gray-50 rounded border">
              <strong>Interpretation:</strong>{" "}
              {detectionResults.aiProbability < 20
                ? "Likely human-written"
                : detectionResults.aiProbability < 50
                  ? "Mixed human/AI content"
                  : "Likely AI-generated"}
            </div>
          </div>
        )}

        {/* Settings */}
        <div className="border-t pt-2">
          <label className="flex items-center text-xs">
            <input type="checkbox" className="mr-2" />
            Real-time analysis
          </label>
        </div>
      </div>
    </BasePaneComponent>
  );
};

export default AiDetectorPane;
