"use client";

import React from "react";
import { BookOpen, FileText, PenLine } from "lucide-react";
import { cn } from "@/utils/common/cn";
import { Page } from "@/hooks/document/useDocumentStore";

interface PageRelationshipNavProps {
  currentPage: Page;
  pages: Page[];
  onPageChange: (page: Page) => void;
  className?: string;
}

export const PageRelationshipNav: React.FC<PageRelationshipNavProps> = ({
  currentPage,
  pages,
  onPageChange,
  className,
}) => {
  // Only show for Deep Writer pages that have related pages
  if (!currentPage.type || !currentPage.pageMetadata?.relatedPageIds?.length) {
    return null;
  }

  // Find related pages
  const relatedPages = currentPage.pageMetadata.relatedPageIds
    .map((id) => pages.find((p) => p.id === id))
    .filter(Boolean) as Page[];

  if (relatedPages.length === 0) {
    return null;
  }

  // Get the icon for the page type
  const getPageIcon = (type?: string) => {
    switch (type) {
      case "outline":
        return <FileText className="mr-1.5 h-4 w-4" />;
      case "draft":
        return <PenLine className="mr-1.5 h-4 w-4" />;
      case "research":
        return <BookOpen className="mr-1.5 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "rounded-md border border-gray-200 bg-gray-50 p-2",
        className,
      )}
    >
      <div className="mb-1.5 text-xs text-gray-500">Related Pages</div>
      <div className="flex flex-wrap gap-2">
        {relatedPages.map((page) => (
          <button
            key={page.id}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex items-center justify-center rounded border px-2 py-1 text-xs",
              "transition-colors hover:bg-gray-100",
              page.type === "outline"
                ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                : page.type === "draft"
                  ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                  : page.type === "research"
                    ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                    : "border-gray-200 text-gray-700",
            )}
          >
            {getPageIcon(page.type)}
            {page.type
              ? page.type.charAt(0).toUpperCase() + page.type.slice(1)
              : "Page"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageRelationshipNav;
