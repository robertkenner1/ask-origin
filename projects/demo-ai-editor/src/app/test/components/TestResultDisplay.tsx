"use client";

import React from "react";

interface ResultProps {
  result: any;
  title?: string;
  className?: string;
  onClear?: () => void;
  showClearButton?: boolean;
}

/**
 * Reusable result display component for test pages
 */
export function TestResultDisplay({
  result,
  title = "Result",
  className = "",
  onClear,
  showClearButton = true,
}: ResultProps) {
  if (!result) return null;

  return (
    <div
      className={`mb-6 rounded-lg border border-green-200 bg-green-50 p-4 ${className}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-green-800">
          {title}
          {result.type && ` (${result.type})`}
        </h2>

        {showClearButton && onClear && (
          <button
            onClick={onClear}
            className="rounded-md bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
          >
            Clear
          </button>
        )}
      </div>

      <pre className="max-h-[60vh] overflow-auto rounded-md border border-green-200 bg-white p-4 text-sm break-words whitespace-pre-wrap">
        {typeof result === "object" ? JSON.stringify(result, null, 2) : result}
      </pre>
    </div>
  );
}

interface PastResultProps {
  items: Array<any>;
  onToggle: (id: number) => void;
  onClearAll?: () => void;
  className?: string;
}

/**
 * Component for displaying past results in a collapsible list
 */
export function TestPastResults({
  items,
  onToggle,
  onClearAll,
  className = "",
}: PastResultProps) {
  if (!items.length) return null;

  return (
    <div
      className={`rounded-lg border border-gray-200 bg-gray-50 p-4 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Past Results ({items.length})
        </h2>

        {onClearAll && (
          <button
            onClick={onClearAll}
            className="rounded-md bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="rounded-lg border border-gray-300 bg-white"
          >
            <div
              className="flex cursor-pointer items-center justify-between rounded-t-lg bg-gray-100 p-3"
              onClick={() => onToggle(item.id)}
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="mr-2 font-medium">
                    Result {items.length - index}
                  </span>
                  {item.type && (
                    <span className="text-sm text-gray-600">({item.type})</span>
                  )}
                </div>
                {item.timestamp && (
                  <div className="text-xs text-gray-500">
                    {new Date(item.timestamp).toLocaleTimeString()}{" "}
                    {new Date(item.timestamp).toLocaleDateString()}
                  </div>
                )}
              </div>
              <div className="text-gray-500">{item.expanded ? "▼" : "►"}</div>
            </div>

            {item.expanded && (
              <div className="p-3">
                <pre className="max-h-[40vh] overflow-auto rounded-md border border-gray-200 bg-white p-4 text-sm break-words whitespace-pre-wrap">
                  {typeof item.data === "object"
                    ? JSON.stringify(item.data, null, 2)
                    : item.data}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
