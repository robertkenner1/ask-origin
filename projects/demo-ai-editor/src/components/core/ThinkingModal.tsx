"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { Brain } from "lucide-react";

interface ThinkingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  thinking: string;
  title?: string;
}

export function ThinkingModal({
  open,
  onOpenChange,
  thinking,
  title = "Claude's Thinking Process",
}: ThinkingModalProps) {
  if (!thinking) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="rounded-md border bg-gray-50 p-4">
          <div className="prose prose-gray max-w-none">
            <MarkdownRenderer content={thinking} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
