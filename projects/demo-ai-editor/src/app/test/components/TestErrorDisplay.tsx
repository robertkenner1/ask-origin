"use client";

import React from "react";

interface ErrorProps {
  error: Error | null;
  className?: string;
  showStack?: boolean;
}

/**
 * Reusable error display component for test pages
 */
export function TestErrorDisplay({
  error,
  className = "",
  showStack = true,
}: ErrorProps) {
  if (!error) return null;

  // Extended error properties (used by streaming client)
  const enhancedError = error as Error & {
    code?: string;
    severity?: "critical" | "error" | "warning";
    recoverable?: boolean;
    recovery?: {
      action: string;
      message?: string;
    };
    details?: any;
  };

  const severityColorClass =
    enhancedError.severity === "critical"
      ? "border-red-200 bg-red-50 text-red-800"
      : enhancedError.severity === "error"
        ? "border-orange-200 bg-orange-50 text-orange-800"
        : "border-red-200 bg-red-50 text-red-800";

  return (
    <div
      className={`mb-6 rounded-lg border ${severityColorClass} p-4 ${className}`}
    >
      <h2 className="mb-2 text-xl font-semibold">Error</h2>

      {enhancedError.code && (
        <p className="font-medium">Code: {enhancedError.code}</p>
      )}

      <div className="font-mono break-words whitespace-pre-wrap">
        {enhancedError.name}: {enhancedError.message}
        {showStack && enhancedError.stack && (
          <details className="mt-2">
            <summary>Stack Trace</summary>
            <p className="mt-1 max-h-[30vh] overflow-auto text-xs break-words">
              {enhancedError.stack}
            </p>
          </details>
        )}
      </div>

      {enhancedError.recoverable && enhancedError.recovery && (
        <div className="mt-2 border-t border-red-200 pt-2">
          <p className="font-medium">
            Recovery: {enhancedError.recovery.action}
          </p>
          {enhancedError.recovery.message && (
            <p>{enhancedError.recovery.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
