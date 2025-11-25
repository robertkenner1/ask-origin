"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DocumentList from "./components/DocumentList";
import { DocumentListHeader } from "./components/DocumentListHeader";
import { X } from "lucide-react";
import { Button } from "@superhuman/origin";

// Separate component to use searchParams inside Suspense
function PageContent() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  // Check for error message in URL params
  const [isRateLimit, setIsRateLimit] = useState(false);

  useEffect(() => {
    const errorMsg = searchParams.get("error");
    if (errorMsg) {
      // Ignore NEXT_REDIRECT errors as they're expected
      if (errorMsg === "NEXT_REDIRECT") {
        return;
      }

      // Check if this is a rate limit error
      if (errorMsg.startsWith("ratelimit:")) {
        setIsRateLimit(true);
        setError(decodeURIComponent(errorMsg.substring(10)));
      } else {
        setIsRateLimit(false);
        setError(decodeURIComponent(errorMsg));
      }
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <DocumentListHeader />

      {/* Error notification */}
      {error && (
        <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4">
          <div
            className={`flex w-full max-w-xl items-center rounded-lg border px-4 py-3 shadow-md ${
              isRateLimit
                ? "border-amber-200 bg-amber-50 text-amber-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            <div className="flex-1">
              <p className="font-medium">
                {isRateLimit
                  ? "API Rate Limit Exceeded"
                  : "Document generation failed"}
              </p>
              <p
                className={`text-sm ${isRateLimit ? "text-amber-700" : "text-red-700"}`}
              >
                {error}
              </p>
              {isRateLimit && (
                <p className="mt-1 text-xs text-amber-600">
                  Claude is setting a limit on requests. Please wait a minute
                  before trying again.
                </p>
              )}
            </div>
            <button
              onClick={() => {
                setError(null);
                setIsRateLimit(false);
              }}
              className={`rounded-md p-1.5 transition-colors ${
                isRateLimit ? "hover:bg-amber-100" : "hover:bg-red-100"
              }`}
              aria-label="Dismiss"
            >
              <X
                className={`h-4 w-4 ${isRateLimit ? "text-amber-500" : "text-red-500"}`}
              />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 overflow-y-auto px-4 pt-16 md:px-8">
        {/* Test Button */}
        <div className="mb-4 flex justify-center">
          <Button
            variant="primary"
            onClick={() => {
              alert("that's a button created by Claude Code");
            }}
          >
            Test alert
          </Button>
        </div>

        {/* Document List Section */}
        <DocumentList />
      </main>
    </div>
  );
}

// Fallback component to show while content is loading
function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <DocumentListHeader />
      <main className="flex-1 overflow-y-auto px-4 pt-16 md:px-8">
        <div className="flex h-40 items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PageContent />
    </Suspense>
  );
}
