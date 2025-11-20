import React from "react";
import type { Suggestion } from "@/hooks/editor/useTextSuggestions";

interface DiffSuggestionViewProps {
  originalText: string;
  suggestions: Suggestion[];
  activeIndex: number;
  onAccept: () => void;
  onReject: () => void;
  onSelectOption: (index: number) => void;
}

export function DiffSuggestionView({
  originalText,
  suggestions,
  activeIndex,
  onAccept,
  onReject,
  onSelectOption,
}: DiffSuggestionViewProps) {
  // Get the active suggestion
  const activeSuggestion = suggestions[activeIndex] || suggestions[0];

  // If no suggestions, don't render
  if (!activeSuggestion) {
    return null;
  }

  // Get the last paragraph of original text for rewrite suggestions
  const getLastParagraph = (text: string) => {
    if (!text) return "";
    const paragraphs = text.split(/\n\s*\n/);
    return paragraphs[paragraphs.length - 1] || text;
  };

  // For rewrite types, we show the last paragraph crossed out
  // For continue types, we just show the suggestion
  const isRewriteType = activeSuggestion.type.startsWith("rewrite");
  const textToShow = isRewriteType ? getLastParagraph(originalText) : "";

  return (
    <div
      className={
        "mx-auto my-4 max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
      }
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">AI Suggestion</h3>
        <div className="text-sm text-gray-500">{activeSuggestion.title}</div>
      </div>

      {/* Original text - only shown for rewrites */}
      {isRewriteType && (
        <div className="mb-3">
          <div className="mb-1 text-sm font-medium text-gray-700">
            Original:
          </div>
          <div className="rounded bg-red-50 p-2 text-red-700 line-through">
            {textToShow}
          </div>
        </div>
      )}

      {/* Suggestion text */}
      <div className="mb-4">
        <div className="mb-1 text-sm font-medium text-gray-700">
          Suggestion:
        </div>
        <div className="rounded bg-green-50 p-2 text-green-700">
          {activeSuggestion.text}
        </div>
      </div>

      {/* Selector for multiple suggestions */}
      {suggestions.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              onClick={() => onSelectOption(index)}
              className={`rounded-full px-3 py-1 text-sm ${
                index === activeIndex
                  ? "bg-blue-100 font-medium text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {suggestion.title}
            </button>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={onReject}
          className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Dismiss
        </button>
        <button
          onClick={onAccept}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
