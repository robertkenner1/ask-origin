"use client";

import React, { useState, useEffect, useRef } from "react";
import { DragHandle } from "@tiptap/extension-drag-handle-react";
import { Editor } from "@tiptap/react";
import { DragHandleIcon } from "@/app/components/icons/DragHandleIcon";

interface TipTapDragHandleProps {
  editor: Editor;
}

export function TipTapDragHandle({ editor }: TipTapDragHandleProps) {
  // No state needed for simple solution
  const dragHandleRef = useRef<HTMLDivElement>(null);

  if (!editor) {
    return null;
  }

  return (
    <DragHandle
      editor={editor}
      tippyOptions={{
        placement: "left-start", // Position at the top-left of the block
        duration: 300,
        delay: [200, 0], // Show after 200ms, hide immediately
        offset: [0, 12], // Adjust offset to position near the top
        hideOnClick: false,
        trigger: "mouseenter", // Only trigger on mouse enter
        interactive: true, // Make the tippy interactive
      }}
    >
      <div ref={dragHandleRef} className="custom-drag-handle">
        <DragHandleIcon size={12} />
      </div>
    </DragHandle>
  );
}
