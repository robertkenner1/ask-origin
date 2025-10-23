"use client";

import React, { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useDocumentManager } from "@/hooks/document/useDocumentStore";
import { useChatStore } from "@/stores/chat/chatStore";
import { useSidebarStore } from "@/stores/chat/sidebarStore";
import { OrchestraIconAnimated } from "@/components/icons/OrchestraIconAnimated";
import { OrchestraIcon } from "@/components/icons/OrchestraIcon";
import { iconSizes } from "@/config/iconConfig";

interface OrchestraPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrchestraPane: React.FC<OrchestraPaneProps> = ({
  isOpen,
  onClose,
}) => {
  // Get messages and actions from the centralized chat store
  const { messages, addUserMessage, loadMessagesForDocument } = useChatStore();

  // Get pane mode from sidebar store to check if we're in 'pinned' mode
  const { paneMode } = useSidebarStore();

  // Get current document ID from document manager
  const { currentDocument } = useDocumentManager();
  const documentId = currentDocument?.id || "default";

  // Load document-specific chat history when component mounts or document changes
  useEffect(() => {
    loadMessagesForDocument(documentId);
  }, [documentId, loadMessagesForDocument]);

  // Auto-scroll to the most recent message
  const scrollToBottom = (smooth = true) => {
    // Set scroll directly on container (more reliable)
    const container = document.querySelector(".orchestra-messages-container");
    if (container) {
      if (smooth) {
        // Smooth scroll for new messages
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      } else {
        // Instant scroll for panel open
        container.scrollTop = container.scrollHeight;
      }
    }
  };

  // Scroll when messages change (new message added)
  useEffect(() => {
    // Check if this is due to panel initially opening or a new message
    // Only use smooth animation for new messages, not initial load
    if (isOpen && messages.length > 0) {
      // Use smooth scrolling for new messages
      const container = document.querySelector(".orchestra-messages-container");
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [isOpen, messages.length]);

  // Instead of complex scheduling, set initial CSS height to put scroll at bottom
  useEffect(() => {
    if (!isOpen) return;

    // Just do one immediate scroll - no timers, no complexity
    const container = document.querySelector(".orchestra-messages-container");
    if (container) {
      // Directly set scrollTop without animation
      container.scrollTop = 99999; // Large value forces to bottom
    }
  }, [isOpen, messages]);

  // Handle sending a message through the ChatInput component
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Use the centralized store to add the message and handle the API call
    addUserMessage(message);

    // Scroll to bottom immediately after new message is added
    setTimeout(() => {
      const container = document.querySelector(".orchestra-messages-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 10);
  };

  // If sidebar is not open, don't render
  if (!isOpen) return null;

  // Determine container classes based on pane mode
  // Only use fixed positioning for pinned mode - compact mode should use normal flow
  const useFixedPositioning = paneMode === "pinned";

  const containerClasses = useFixedPositioning
    ? "fixed right-14 top-0 h-full w-[400px] flex flex-col z-[100] bg-white border-l border-gray-200"
    : "flex h-full w-full flex-col relative z-[100]";

  return (
    <div className={containerClasses} data-orchestra-pane>
      {/* Header - matched with DocumentHeader */}
      <div className={`flex h-16 items-center justify-end bg-white px-4`}>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-1 hover:bg-gray-100"
            aria-label="Edit"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m18.5 2.5-7 7L10 13l3.5-1.5 7-7a2.828 2.828 0 1 0-4-4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
            aria-label="Close sidebar"
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
      </div>

      {/* Content area - Display messages in a scrollable area */}
      <div className="orchestra-messages-container flex-1 overflow-y-auto p-4">
        {messages.length > 0 ? (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </>
        ) : (
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-4 pt-8">
              <OrchestraIcon size={iconSizes.lg} />
              <h2 className="text-lg font-medium text-gray-900">Assistant</h2>
            </div>
          </div>
        )}
      </div>

      {/* Fixed input area at bottom */}
      <div className="border-t border-gray-200 p-4">
        <ChatInput onSubmit={handleSendMessage} placeholder="Ask AI" />
      </div>
    </div>
  );
};

export default OrchestraPane;
