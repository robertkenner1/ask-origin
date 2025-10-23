"use client";

import React from "react";
import { Plus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { OrchestraIcon } from "@/components/icons/OrchestraIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DocumentListHeaderProps {
  onToggleSelectionMode?: () => void;
}

export function DocumentListHeader({
  onToggleSelectionMode,
}: DocumentListHeaderProps) {
  const router = useRouter();
  const createDocument = useDocumentStore((state) => state.createDocument);

  const handleCreateNewAndNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    const newDoc = createDocument();
    router.push(`/editor?id=${newDoc.id}`);
  };

  const handleToggleSelectionMode = () => {
    if (onToggleSelectionMode) {
      onToggleSelectionMode();
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-10 bg-white px-4 py-2 shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        {/* Logo on left */}
        <div className="flex items-center">
          <OrchestraIcon size={26} />
        </div>

        {/* New button and dropdown on right */}
        <div className="flex items-center space-x-2">
          <Link
            href="/editor"
            onClick={handleCreateNewAndNavigate}
            className={`inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
          >
            <Plus className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>New</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex h-[36px] w-[36px] items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                aria-label="More options"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleToggleSelectionMode}
              >
                Select...
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-between flex cursor-pointer items-center"
                >
                  Test environment
                  <ExternalLinkIcon size={16} className="ml-2" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
