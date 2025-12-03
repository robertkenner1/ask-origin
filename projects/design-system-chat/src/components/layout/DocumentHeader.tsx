import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Home, Loader2, RotateCcw } from "lucide-react";
import { useNetworkStatus } from "@/hooks/common/useNetworkStatus";
import PageSelector from "@/components/document/PageSelector";
import ToggleSwitch from "@/components/core/toggle-switch";
import { useSuggestionsStore } from "@/stores/editor/suggestionsStore";

export interface Page {
  id: string;
  name: string;
}

interface DocumentHeaderProps {
  title: string;
  onTitleChange: (newTitle: string) => void;
  lastEdited?: number;
  currentPage?: Page;
  pages?: Page[];
  onPageChange?: (page: Page) => void;
  onNewPage?: () => void;
  onRenamePage?: (pageId: string, newName: string) => void;
  onDeletePage?: (pageId: string) => void;
}

export default function DocumentHeader({
  title,
  onTitleChange,
  lastEdited,
  currentPage = { id: "page-1", name: "Page 1" },
  pages = [{ id: "page-1", name: "Page 1" }],
  onPageChange = () => {},
  onNewPage = () => {},
  onRenamePage,
  onDeletePage,
}: DocumentHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get network status to show loading indicator
  const { isLoading } = useNetworkStatus();

  // Get suggestions state from store
  const { enabled: suggestionsEnabled, setEnabled: setSuggestionsEnabled } =
    useSuggestionsStore();

  const handleSuggestionsToggle = (checked: boolean) => {
    setSuggestionsEnabled(checked);
  };

  const handleReset = () => {
    if (
      confirm(
        "Are you sure you want to reload the page? Any unsaved changes will be lost.",
      )
    ) {
      window.location.reload();
    }
  };

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      // Store current scroll position
      const scrollPos = window.scrollY;

      // Focus and select the input
      inputRef.current.focus();
      inputRef.current.select();

      // Restore scroll position to prevent jumping
      window.scrollTo(0, scrollPos);
    }
  }, [isEditing]);

  const handleTitleClick = (e: React.MouseEvent) => {
    // Stop event propagation to prevent the click from reaching the editor
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (editedTitle.trim() === "") {
      setEditedTitle("Untitled Document");
      onTitleChange("Untitled Document");
    } else {
      onTitleChange(editedTitle);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (editedTitle.trim() === "") {
        setEditedTitle("Untitled Document");
        onTitleChange("Untitled Document");
      } else {
        onTitleChange(editedTitle);
      }
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditedTitle(title);
      setIsEditing(false);
    }
  };

  // Function to stop propagation for all clicks in the header
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="flex h-16 items-center gap-3 border-b border-gray-200 bg-white px-3"
      onClick={stopPropagation} // Stop propagation for all clicks in the header
    >
      <Link
        href="/"
        className="flex items-center justify-center self-center rounded-md p-2.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
        aria-label="Home"
      >
        <Home size={18} />
      </Link>

      <div className="flex flex-grow flex-col justify-center">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyDown={handleKeyDown}
            className={`w-full max-w-md rounded-md bg-gray-100 px-2 py-1 text-base font-medium outline-none focus:bg-gray-100`}
            // We're manually focusing with useEffect instead of using autoFocus
            // to prevent scroll jump
          />
        ) : (
          <div className="flex flex-col">
            <div
              className="group -ml-1.5 inline-block cursor-pointer rounded-md px-1.5 py-1 transition-colors hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const button = document.querySelector(
                  "[data-page-selector-button]",
                );
                if (button) {
                  (button as HTMLButtonElement).click();
                }
              }}
            >
              <h1 className="text-base font-medium group-hover:text-gray-700">
                {title}
              </h1>

              {/* Hidden Page selector that will be triggered by the parent div */}
              <div className="mt-0.5">
                <PageSelector
                  currentPage={currentPage}
                  pages={pages}
                  onPageChange={onPageChange}
                  onNewPage={onNewPage}
                  onRenamePage={onRenamePage}
                  onDeletePage={onDeletePage}
                  documentTitle={title}
                  onDocumentTitleChange={onTitleChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Loading indicator - only visible when loading */}
        {isLoading && (
          <Loader2 className="ml-3 h-4 w-4 animate-spin text-gray-500" />
        )}
      </div>

      {/* Right side controls */}
      <div className="ml-auto flex items-center gap-2">
        {/* Reset button */}
        <button
          onClick={handleReset}
          className="flex items-center justify-center rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          title="Reload page"
          aria-label="Reload page"
        >
          <RotateCcw size={16} />
        </button>

        {/* Suggestions toggle */}
        <ToggleSwitch
          label="Suggestions"
          checked={suggestionsEnabled}
          onChange={handleSuggestionsToggle}
        />
      </div>
    </div>
  );
}
