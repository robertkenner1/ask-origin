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
      <div className="flex items-start overflow-hidden rounded-[20px] border border-transparent bg-gray-100 pr-1 focus-within:border-gray-300">
        {/* Text input area */}
        <div className="flex flex-grow items-center">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`w-full resize-none overflow-hidden border-none bg-transparent pt-[10px] pr-2 pb-[10px] pl-4 focus:ring-0 focus:outline-none`}
            style={{
              minHeight: "40px",
              maxHeight: "200px",
              height: "auto",
            }}
            rows={1}
            onInput={handleTextareaInput}
          />
        </div>

        {/* Send button with color change based on input state */}
        <div className="flex h-[40px] items-center self-end">
          <IconButton
            type="submit"
            className={` ${
              inputValue.trim()
                ? "text-blue-500 hover:bg-blue-500 hover:text-white"
                : "text-gray-400 hover:bg-gray-200"
            } `}
            disabled={!inputValue.trim()}
            aria-label="Send message"
            size="md"
          >
            <svg
              width={iconSizes.sm}
              height={iconSizes.sm}
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
          </IconButton>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
