"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Document } from "@/hooks/document/useDocumentStore";
import {
  MoreVertical,
  CheckSquare,
  Square,
  Trash2,
  Copy,
  Check,
} from "lucide-react";
import { formatTimeAgo } from "@/utils/common/timeFormatter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DocumentListItemProps {
  document: Document;
  isSelectionMode: boolean;
  isSelected?: boolean;
  onSelect?: (documentId: string, e: React.MouseEvent) => void;
  onDelete?: (document: Document, e: React.MouseEvent) => void;
}

export function DocumentListItem({
  document,
  isSelectionMode,
  isSelected = false,
  onSelect,
  onDelete,
}: DocumentListItemProps) {
  const [promptCopied, setPromptCopied] = useState(false);

  // Handle selection click
  const handleSelectionClick = (e: React.MouseEvent) => {
    if (onSelect) {
      onSelect(document.id, e);
    }
  };

  // Handle delete click
  const handleDeleteClick = (e: React.MouseEvent) => {
    if (onDelete) {
      onDelete(document, e);
    }
  };

  // Handle copy prompt click
  const handleCopyPromptClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const prompt =
      document.llmMetadata?.prompt ||
      document.pages[0]?.pageMetadata?.generationPrompt;

    if (prompt) {
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          setPromptCopied(true);
          setTimeout(() => {
            setPromptCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy prompt:", err);
        });
    }
  };

  // Check if document has a prompt
  const hasPrompt = Boolean(
    document.llmMetadata?.prompt ||
      document.pages[0]?.pageMetadata?.generationPrompt,
  );

  if (isSelectionMode) {
    return (
      <div
        onClick={handleSelectionClick}
        className={
          "group block cursor-pointer rounded-xl border border-transparent px-4 py-4 transition-all duration-100 ease-in-out hover:border-gray-200 hover:bg-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        }
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            {isSelected ? (
              <CheckSquare className="mt-0.5 mr-3 h-5 w-5 text-blue-600" />
            ) : (
              <Square className="mt-0.5 mr-3 h-5 w-5" />
            )}
            <div className="flex flex-col">
              <p
                className={
                  "max-w-md truncate text-base font-medium text-blue-600 transition-colors group-hover:text-blue-700"
                }
              >
                {document.title || "Untitled Document"}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-xs text-gray-500 transition-colors group-hover:text-gray-700">
                  {formatTimeAgo(document.lastEdited)}
                </p>
                {document.llmMetadata?.deepWriter?.enabled && (
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-medium text-purple-700">
                    Deep Writer
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/editor?id=${document.id}`}
      className="group block rounded-xl border border-transparent transition-all duration-100 ease-in-out hover:border-gray-200 hover:bg-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
    >
      <div className="px-4 py-4">
        <div className="max-w flex flex-grow items-start justify-between">
          <div className="flex flex-grow flex-col">
            <p
              className={
                "flex-grow text-base font-medium text-gray-700 transition-colors group-hover:text-blue-700 hover:text-blue-600"
              }
            >
              {document.title || "Untitled Document"}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-xs text-gray-500 transition-colors group-hover:text-gray-700">
                {formatTimeAgo(document.lastEdited)}
              </p>
              {document.llmMetadata?.deepWriter?.enabled && (
                <span className="deep-writer-badge rounded-full px-2 py-0.5 text-[10px] font-medium">
                  Deep Writer
                </span>
              )}
            </div>
          </div>
          <div className="ml-2 flex flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="rounded-md p-2.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  aria-label="More options"
                  onClick={(e) => e.preventDefault()}
                >
                  <MoreVertical className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {hasPrompt && (
                  <DropdownMenuItem
                    className="cursor-pointer text-gray-600 focus:text-gray-700"
                    onClick={handleCopyPromptClick}
                  >
                    {promptCopied ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy prompt
                      </>
                    )}
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  className="cursor-pointer text-red-600 focus:text-red-700"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDeleteClick(e);
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Add gradient style for Deep Writer badge
const styles = `
.deep-writer-badge {
    background: linear-gradient(
        45deg,
        rgba(124, 58, 237, 0.12),
        rgba(139, 92, 246, 0.12),
        rgba(167, 139, 250, 0.12)
    );
    color: #7c3aed;
    border: 1px solid rgba(124, 58, 237, 0.3);
}
`;
// Inject styles once
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  if (!document.getElementById("deep-writer-badge-styles")) {
    styleTag.id = "deep-writer-badge-styles";
    document.head.appendChild(styleTag);
  }
}
