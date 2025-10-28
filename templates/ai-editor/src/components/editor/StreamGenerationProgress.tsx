"use client";

import React from "react";
import { OrchestraIconAnimated } from "@/app/components/icons/OrchestraIconAnimated";
import { X } from "lucide-react";

interface StreamGenerationProgressProps {
  step: string;
  message: string;
  percentage: number;
  isComplete: boolean;
  onClose?: () => void;
}

export function StreamGenerationProgress({
  step,
  message,
  percentage,
  isComplete,
  onClose,
}: StreamGenerationProgressProps) {
  // If generation is complete and there's a close handler, render nothing
  if (isComplete && !onClose) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="p-4">
        <div className="flex items-start">
          <div className="mr-3 h-8 w-8 flex-shrink-0">
            <OrchestraIconAnimated size={32} />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900 capitalize">
                {isComplete ? "Generation Complete" : step}
              </h3>

              {onClose && (
                <button
                  onClick={onClose}
                  className="rounded p-1 hover:bg-gray-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>

            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>

        {!isComplete && (
          <div className="mt-3">
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-blue-600 transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-gray-500">
              {Math.round(percentage)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
