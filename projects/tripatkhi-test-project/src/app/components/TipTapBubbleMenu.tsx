"use client";

import { BubbleMenu, BubbleMenuProps } from "@tiptap/react";
import { useState, useCallback } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Strikethrough,
  List,
  ListOrdered,
  CheckSquare,
  Code,
  CircleChevronDown,
} from "lucide-react";

interface TipTapBubbleMenuProps {
  editor: any;
}

export function TipTapBubbleMenu({ editor }: TipTapBubbleMenuProps) {
  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 150,
        placement: "top-start",
        offset: [0, 10],
        maxWidth: "none",
        theme: "light",
        animation: "scale",
        popperOptions: {
          modifiers: [
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom-start"],
              },
            },
          ],
        },
      }}
      shouldShow={({ editor, view, state, from, to }) => {
        // Only show when text is selected
        const { doc, selection } = state;
        const { empty } = selection;
        return !empty;
      }}
      className={
        "animate-in fade-in z-50 flex gap-1 rounded-md border border-gray-200 bg-white p-1.5 text-gray-700 shadow-lg"
      }
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("bold") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Bold"
        type="button"
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("italic") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Italic"
        type="button"
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("strike") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Strikethrough"
        type="button"
      >
        <Strikethrough size={16} />
      </button>
      <div className="mx-1 h-6 w-px bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("heading", { level: 1 })
            ? "bg-gray-200 text-blue-600"
            : ""
        }`}
        title="Heading 1"
        type="button"
      >
        <Heading1 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-200 text-blue-600"
            : ""
        }`}
        title="Heading 2"
        type="button"
      >
        <Heading2 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("heading", { level: 3 })
            ? "bg-gray-200 text-blue-600"
            : ""
        }`}
        title="Heading 3"
        type="button"
      >
        <Heading3 size={16} />
      </button>
      <div className="mx-1 h-6 w-px bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("bulletList") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Bullet List"
        type="button"
      >
        <List size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("orderedList") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Ordered List"
        type="button"
      >
        <ListOrdered size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("taskList") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Task List"
        type="button"
      >
        <CheckSquare size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleToggleList().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("toggleList") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Toggle List"
      >
        <CircleChevronDown size={16} />
      </button>
      <div className="mx-1 h-6 w-px bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`rounded-md p-1.5 transition-colors hover:bg-gray-100 ${
          editor.isActive("codeBlock") ? "bg-gray-200 text-blue-600" : ""
        }`}
        title="Code Block"
        type="button"
      >
        <Code size={16} />
      </button>
    </BubbleMenu>
  );
}
