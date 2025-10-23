"use client";

import React from "react";

export interface BasePaneProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  behavior: "chat" | "analysis" | "mini" | "overlay";
  className?: string;
}

export const BasePaneComponent: React.FC<
  BasePaneProps & { children: React.ReactNode }
> = ({ isOpen, onClose, title, behavior, className = "", children }) => {
  // If pane is not open, don't render
  if (!isOpen) return null;

  const getHeaderStyle = () => {
    switch (behavior) {
      case "chat":
        return "bg-blue-50 border-blue-200";
      case "analysis":
        return "bg-green-50 border-green-200";
      case "mini":
        return "bg-purple-50 border-purple-200";
      case "overlay":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div
      className={`flex h-full w-full flex-col ${className}`}
      data-pane-type={behavior}
    >
      {/* Header */}
      <div
        className={`flex h-16 items-center justify-between border-b px-4 ${getHeaderStyle()}`}
      >
        <h2 className="text-base font-medium">{title}</h2>
        <button
          onClick={onClose}
          className="rounded-full p-1 hover:bg-gray-100"
          aria-label={`Close ${title}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default BasePaneComponent;
