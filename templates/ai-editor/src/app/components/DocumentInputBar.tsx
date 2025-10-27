"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { OrchestraIconAnimated } from "./icons/OrchestraIconAnimated";
import { cn } from "@/utils/common/cn";
import { useDeepWriterDocument } from "@/hooks/document/useDeepWriterDocument";

interface DocumentInputBarProps {
  value: string;
  onChange: (value: string) => void;
  isGenerating: boolean;
  deepWriter: boolean;
  onToggleDeepWriter: () => void;
  disabled?: boolean;
  placeholder?: string;
  error?: string | null;
}

export function DocumentInputBar({
  value,
  onChange,
  isGenerating,
  deepWriter,
  onToggleDeepWriter,
  disabled = false,
  placeholder = "What do you want to write?",
  error = null,
}: DocumentInputBarProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [localLoading, setLocalLoading] = useState(false);
  const { initializeDocument } = useDeepWriterDocument();

  // Auto-resize the textarea based on content
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.max(textarea.scrollHeight, 44);
      textarea.style.height = `${newHeight}px`;
    }
  }, [value]);

  // Custom form submission handler - create empty doc and redirect immediately
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim() || isGenerating || disabled || localLoading) {
      return;
    }

    try {
      setLocalLoading(true);

      // Create new document with metadata but no content yet
      const newDoc = initializeDocument(value, deepWriter);

      // Redirect to editor immediately - content will be generated there
      router.push(
        `/editor?id=${newDoc.id}&generating=true&prompt=${encodeURIComponent(value)}&deepWriter=${deepWriter}`,
      );
    } catch (error) {
      console.error("Error initializing document:", error);
      setLocalLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-gray-50 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          <div
            className={cn(
              "flex w-full items-start overflow-hidden rounded-xl border-b border-gray-200 bg-white pr-1.5",
              (isGenerating || localLoading || disabled) && "opacity-50",
            )}
          >
            <textarea
              ref={textareaRef}
              name="prompt"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={isGenerating || localLoading || disabled}
              rows={1}
              className="min-h-[44px] flex-grow resize-none overflow-hidden px-4 py-3 text-gray-700 placeholder-gray-500 focus:border-0 focus:ring-0 focus:outline-none"
            />

            <button
              type="submit"
              disabled={
                isGenerating || localLoading || disabled || !value.trim()
              }
              className={cn(
                "mt-1 flex items-center justify-center rounded-md p-2 transition-all",
                "text-gray-400",
                isGenerating || localLoading || disabled
                  ? "cursor-not-allowed"
                  : !value.trim()
                    ? "opacity-50"
                    : "hover:bg-gray-100 hover:text-gray-700",
              )}
              aria-label="Create document"
            >
              {isGenerating || localLoading ? (
                <div className="h-4 w-4">
                  <OrchestraIconAnimated size={16} animating={true} />
                </div>
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Grey bar beneath input */}
          <div className="flex w-full items-center justify-between px-3 py-1.5">
            {/* Error message area on the left */}
            <div className="flex-grow overflow-hidden">
              {error && error !== "NEXT_REDIRECT" && (
                <div className="truncate text-xs font-medium text-red-600">
                  <span className="mr-1">⚠️</span> {error}
                </div>
              )}
            </div>

            {/* Deep Writer toggle on the right */}
            <button
              onClick={onToggleDeepWriter}
              type="button"
              disabled={isGenerating || localLoading || disabled}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all",
                isGenerating || localLoading || disabled
                  ? "cursor-not-allowed text-gray-400 opacity-50"
                  : deepWriter
                    ? "deep-writer-text bg-gray-300"
                    : "text-gray-500 hover:bg-gray-200 hover:text-gray-600",
              )}
            >
              Deep Writer
            </button>
          </div>
        </div>
      </form>

      {/* CSS for animating rainbow text - unchanged */}
      <style jsx global>{`
        .deep-writer-text {
          background: linear-gradient(
            to right,
            #ff5e62,
            #ff9966,
            #ffcc33,
            #00b09b,
            #96c7ff,
            #5f2c82,
            #ff5e62
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: textflow 3s linear infinite;
        }

        @keyframes textflow {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
}

export default DocumentInputBar;
