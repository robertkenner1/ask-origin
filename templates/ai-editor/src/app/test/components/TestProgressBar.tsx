"use client";

import React from "react";

interface ProgressProps {
  progress: {
    step: string;
    percentage: number;
    message: string;
  };
  isLoading?: boolean;
  className?: string;
  onCancel?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

/**
 * Reusable progress bar component for test pages
 */
export function TestProgressBar({
  progress,
  isLoading = false,
  className = "",
  onCancel,
  onPause,
  onResume,
}: ProgressProps) {
  const isPaused = progress.step === "paused";

  if (!isLoading && progress.percentage === 0) return null;

  return (
    <div className={`mb-4 rounded-lg bg-blue-50 p-4 ${className}`}>
      <h2 className="mb-2 text-xl font-semibold">
        {isLoading ? "Operation in Progress" : "Progress"}
      </h2>

      <div className="mb-2">
        <div className="flex items-center justify-between text-sm">
          <span>{progress.message}</span>
          <span>{progress.percentage}%</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      {isLoading && (
        <div className="mt-2 flex items-center justify-end gap-2">
          {onPause && onResume && (
            <button
              onClick={isPaused ? onResume : onPause}
              className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-700"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
          )}

          {onCancel && (
            <button
              onClick={onCancel}
              className="rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Displays operation in progress with loading spinner
 */
export function TestLoadingIndicator({
  message = "Loading...",
  onCancel,
  className = "",
}: {
  message?: string;
  onCancel?: () => void;
  className?: string;
}) {
  return (
    <div className={`mb-6 rounded-lg bg-blue-50 p-4 ${className}`}>
      <h2 className="mb-2 text-xl font-semibold">Operation in Progress</h2>
      <div className="flex items-center">
        <div className="mr-4 h-5 w-5 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
        <span>{message}</span>

        {onCancel && (
          <button
            onClick={onCancel}
            className="ml-auto rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
