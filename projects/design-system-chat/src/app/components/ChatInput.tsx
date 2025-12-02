"use client";

import React, { useState, useRef, useEffect } from "react";
import IconButton from "@/app/components/ui/icon-button";
import { iconSizes } from "@/config/iconConfig";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSubmit,
  placeholder = "Type a message...",
}) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      // Call parent's onSubmit with the message
      onSubmit(inputValue.trim());

      // Clear the input field
      setInputValue("");

      // Reset textarea size in next render cycle
      setTimeout(() => {
        if (textareaRef.current) {
          // Trigger the resize logic
          const event = new Event("input", { bubbles: true });
          textareaRef.current.dispatchEvent(event);
          // Optional: focus back on textarea
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  // Handle Enter key press to submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent form submission on Enter
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  // Auto-resize the textarea based on content
  const handleTextareaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "auto";
    target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      {/* Container with rounded corners */}
      <div className="flex items-center gap-4 rounded-[24px] border border-gray-300 bg-white px-6 py-3 shadow-sm focus-within:border-gray-400">
        {/* Plus button */}
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center text-gray-500 hover:text-gray-700"
          aria-label="Add attachment"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Text input area */}
        <div className="flex flex-grow items-center">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full resize-none border-none bg-transparent text-base focus:ring-0 focus:outline-none"
            style={{
              minHeight: "24px",
              maxHeight: "200px",
              height: "auto",
            }}
            rows={1}
            onInput={handleTextareaInput}
          />
        </div>

        {/* Send button */}
        <button
          type="submit"
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            inputValue.trim()
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-gray-400 text-gray-200"
          }`}
          disabled={!inputValue.trim()}
          aria-label="Send message"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
