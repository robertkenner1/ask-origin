"use client";

import React, { useState } from "react";
import BasePaneComponent from "./BasePaneComponent";

interface PlagiarismPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlagiarismPane: React.FC<PlagiarismPaneProps> = ({ isOpen, onClose }) => {
  const [scanResults, setScanResults] = useState<{
    similarity: number;
    sources: string[];
    status: "idle" | "scanning" | "complete";
  }>({
    similarity: 0,
    sources: [],
    status: "idle",
  });

  const handleScan = () => {
    setScanResults({ similarity: 0, sources: [], status: "scanning" });

    setTimeout(() => {
      setScanResults({
        similarity: 15,
        sources: [
          "Wikipedia - AI Research Article",
          "Academic Paper - ML Foundations",
          "Blog Post - Tech Trends 2024",
        ],
        status: "complete",
      });
    }, 3000);
  };

  const getSimilarityColor = (similarity: number) => {
    if (similarity < 10) return "text-green-600";
    if (similarity < 25) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <BasePaneComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Plagiarism Check"
      behavior="mini"
    >
      <div className="p-3 space-y-3">
        {/* Scan button */}
        <button
          onClick={handleScan}
          disabled={scanResults.status === "scanning"}
          className="w-full py-2 px-3 bg-purple-100 text-purple-800 rounded text-sm hover:bg-purple-200 disabled:opacity-50"
        >
          {scanResults.status === "scanning" ? "Scanning..." : "Scan Document"}
        </button>

        {/* Results */}
        {scanResults.status === "scanning" && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 justify-center">
            <div className="animate-spin h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full"></div>
            <span>Checking for plagiarism...</span>
          </div>
        )}

        {scanResults.status === "complete" && (
          <div className="space-y-3">
            {/* Similarity score */}
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${getSimilarityColor(scanResults.similarity)}`}
              >
                {scanResults.similarity}%
              </div>
              <div className="text-xs text-gray-500">Similarity detected</div>
            </div>

            {/* Sources */}
            {scanResults.sources.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-gray-600 mb-2">
                  Similar Sources:
                </h4>
                <div className="space-y-1">
                  {scanResults.sources.map((source, index) => (
                    <div
                      key={index}
                      className="text-xs p-2 bg-gray-50 rounded border"
                    >
                      {source}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick actions */}
            <div className="border-t pt-2">
              <button className="w-full text-xs py-1 text-purple-600 hover:bg-purple-50 rounded">
                View Detailed Report
              </button>
            </div>
          </div>
        )}

        {/* Settings toggle */}
        <div className="border-t pt-2">
          <label className="flex items-center text-xs">
            <input type="checkbox" defaultChecked className="mr-2" />
            Auto-scan on document changes
          </label>
        </div>
      </div>
    </BasePaneComponent>
  );
};

export default PlagiarismPane;
