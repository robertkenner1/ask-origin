import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Plus,
  Edit2,
  Trash2,
  FileText,
  PenLine,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { cn } from "@/utils/common/cn";
import Link from "next/link";

interface Page {
  id: string;
  name: string;
  type?: "outline" | "draft" | "research" | "custom";
  pageMetadata?: {
    contentType?: "essay" | "prd" | "research" | "resume" | "custom";
    generationPrompt?: string;
    relatedPageIds?: string[];
  };
}

interface PageSelectorProps {
  currentPage: Page;
  pages: Page[];
  onPageChange: (page: Page) => void;
  onNewPage: () => void;
  onRenamePage?: (pageId: string, newName: string) => void;
  onDeletePage?: (pageId: string) => void;
  documentTitle?: string;
  onDocumentTitleChange?: (newTitle: string) => void;
}

export default function PageSelector({
  currentPage,
  pages,
  onPageChange,
  onNewPage,
  onRenamePage,
  onDeletePage,
  documentTitle = "Untitled Document",
  onDocumentTitleChange,
}: PageSelectorProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [editPageName, setEditPageName] = useState("");
  const [editedDocTitle, setEditedDocTitle] = useState(documentTitle);
  const [isEditingDocTitle, setIsEditingDocTitle] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  const docTitleInputRef = useRef<HTMLInputElement>(null);

  // Handle toggle of page menu
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current !== event.target &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
        setEditingPageId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update document title state when prop changes
  useEffect(() => {
    setEditedDocTitle(documentTitle);
  }, [documentTitle]);

  // Focus edit input when editing
  useEffect(() => {
    if (editingPageId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingPageId]);

  // Focus document title input when editing
  useEffect(() => {
    if (isEditingDocTitle && docTitleInputRef.current) {
      docTitleInputRef.current.focus();
      docTitleInputRef.current.select();
    }
  }, [isEditingDocTitle]);

  // Handle document title edit
  const handleDocTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditingDocTitle(true);
  };

  const handleDocTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDocTitle(e.target.value);
  };

  const handleDocTitleBlur = () => {
    if (onDocumentTitleChange) {
      if (editedDocTitle.trim() === "") {
        setEditedDocTitle("Untitled Document");
        onDocumentTitleChange("Untitled Document");
      } else {
        onDocumentTitleChange(editedDocTitle);
      }
    }
    setIsEditingDocTitle(false);
  };

  const handleDocTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (onDocumentTitleChange) {
        if (editedDocTitle.trim() === "") {
          setEditedDocTitle("Untitled Document");
          onDocumentTitleChange("Untitled Document");
        } else {
          onDocumentTitleChange(editedDocTitle);
        }
      }
      setIsEditingDocTitle(false);
    } else if (e.key === "Escape") {
      setEditedDocTitle(documentTitle);
      setIsEditingDocTitle(false);
    }
  };

  // Handle page selection
  const handlePageSelect = (page: Page) => {
    console.log("PageSelector - selecting page:", {
      id: page.id,
      name: page.name,
    });
    onPageChange(page);
    setMenuOpen(false);
  };

  // Handle new page creation
  const handleNewPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNewPage();
    setMenuOpen(false);
  };

  // Start editing page name
  const handleEditClick = (
    e: React.MouseEvent | React.KeyboardEvent,
    page: Page,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setEditingPageId(page.id);
    setEditPageName(page.name);
  };

  // Handle delete page
  const handleDeleteClick = (
    e: React.MouseEvent | React.KeyboardEvent,
    pageId: string,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    // Only allow delete if there's more than one page
    if (pages.length > 1 && onDeletePage) {
      onDeletePage(pageId);
    }
  };

  // Handle page rename input change
  const handleEditNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPageName(e.target.value);
  };

  // Handle page rename submit
  const handleRenameSubmit = (e: React.FormEvent, pageId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (editPageName.trim() && onRenamePage) {
      onRenamePage(pageId, editPageName.trim());
      setEditingPageId(null);
    }
  };

  // Handle keyboard events in rename input
  const handleRenameKeyDown = (e: React.KeyboardEvent, pageId: string) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setEditingPageId(null);
    } else if (e.key === "Enter") {
      if (editPageName.trim() && onRenamePage) {
        onRenamePage(pageId, editPageName.trim());
        setEditingPageId(null);
      }
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        data-page-selector-button
        className={`flex items-center bg-transparent text-xs font-medium text-gray-600 transition-colors group-hover:text-gray-800`}
      >
        {currentPage.name}
        <ChevronDown className="ml-1 h-3 w-3" />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute top-full left-0 z-10 mt-1 w-80 rounded-md border border-gray-200 bg-white py-1 shadow-md`}
        >
          {/* Document title edit section */}
          <div className="border-b border-gray-200 px-3 py-2">
            <div className="mb-1 text-xs text-gray-500">Document Title</div>
            {isEditingDocTitle ? (
              <input
                ref={docTitleInputRef}
                type="text"
                value={editedDocTitle}
                onChange={handleDocTitleChange}
                onBlur={handleDocTitleBlur}
                onKeyDown={handleDocTitleKeyDown}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            ) : (
              <div
                onClick={handleDocTitleClick}
                className="flex cursor-pointer items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-gray-100"
              >
                <span>{documentTitle}</span>
                {/* Show Deep Writer icon if any page has a type */}
                {pages.some((page) => page.type) && (
                  <span className="ml-2 inline-flex items-center">
                    <Sparkles className="h-3 w-3 text-blue-500" />
                    <span className="ml-1 text-xs text-blue-500">
                      Deep Writer
                    </span>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* List of pages */}
          <div className="max-h-60 overflow-y-auto pt-2">
            <div className="mb-1 px-3 text-xs text-gray-500">Pages</div>
            {pages.map((page) => (
              <div key={page.id} className="group relative">
                {editingPageId === page.id ? (
                  <form
                    onSubmit={(e) => handleRenameSubmit(e, page.id)}
                    className="px-3 py-1"
                  >
                    <input
                      ref={editInputRef}
                      type="text"
                      value={editPageName}
                      onChange={handleEditNameChange}
                      onKeyDown={(e) => handleRenameKeyDown(e, page.id)}
                      className={`w-full rounded border border-gray-300 px-2 py-1 text-sm`}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </form>
                ) : (
                  <div
                    onClick={() => handlePageSelect(page)}
                    className={`group flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                      page.id === currentPage.id ? "bg-gray-50 font-medium" : ""
                    } ${
                      page.type
                        ? page.type === "outline"
                          ? "border-l-2 border-l-blue-500"
                          : page.type === "draft"
                            ? "border-l-2 border-l-green-500"
                            : page.type === "research"
                              ? "border-l-2 border-l-amber-500"
                              : ""
                        : ""
                    } `}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handlePageSelect(page)
                    }
                  >
                    <span className="flex items-center">
                      {page.type === "outline" && (
                        <FileText className="mr-2 h-3.5 w-3.5 text-blue-600" />
                      )}
                      {page.type === "draft" && (
                        <PenLine className="mr-2 h-3.5 w-3.5 text-green-600" />
                      )}
                      {page.type === "research" && (
                        <BookOpen className="mr-2 h-3.5 w-3.5 text-amber-600" />
                      )}
                      <span className="truncate">{page.name}</span>
                      {page.type && (
                        <span
                          className={cn(
                            "ml-1.5 rounded-full border px-1.5 py-0.5 text-[10px]",
                            page.type === "outline"
                              ? "border-blue-200 bg-blue-100 text-blue-700"
                              : page.type === "draft"
                                ? "border-green-200 bg-green-100 text-green-700"
                                : page.type === "research"
                                  ? "border-amber-200 bg-amber-100 text-amber-700"
                                  : "border-gray-200 bg-gray-100 text-gray-700",
                          )}
                        >
                          {page.type.charAt(0).toUpperCase() +
                            page.type.slice(1)}
                        </span>
                      )}
                    </span>
                    <div
                      className="ml-2 hidden group-hover:flex"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        onClick={(e) => handleEditClick(e, page)}
                        className={`cursor-pointer p-1 text-gray-500 hover:text-gray-700`}
                        aria-label="Rename page"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleEditClick(e, page)
                        }
                      >
                        <Edit2 className="h-3 w-3" />
                      </div>
                      {pages.length > 1 && (
                        <div
                          onClick={(e) => handleDeleteClick(e, page.id)}
                          className={`cursor-pointer p-1 text-gray-500 hover:text-red-500`}
                          aria-label="Delete page"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleDeleteClick(e, page.id)
                          }
                        >
                          <Trash2 className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {pages.length === 0 && (
              <div className="px-3 py-2 text-sm text-gray-500 italic">
                No pages yet
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="my-1 h-[1px] bg-gray-200"></div>

          {/* New page button */}
          <div
            onClick={handleNewPage}
            className={`flex w-full cursor-pointer items-center px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleNewPage(e as any)}
          >
            <Plus className="mr-1 h-4 w-4" />
            New Page
          </div>
        </div>
      )}
    </div>
  );
}
