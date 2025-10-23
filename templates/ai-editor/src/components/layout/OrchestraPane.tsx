"use client";

import React, { useRef, useEffect } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import { useDocumentManager } from "@/hooks/document/useDocumentStore";
import { useChatStore } from "@/stores/chat/chatStore";
import { OrchestraIconAnimated } from "@/components/icons/OrchestraIconAnimated";

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

  return (
    <div className="flex h-full w-full flex-col" data-orchestra-pane>
      {/* Header - matched with DocumentHeader */}
      <div
        className={`flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4`}
      >
        <h2 className="text-base font-medium">Orchestra</h2>
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

      {/* Content area - Display messages in a scrollable area */}
      <div className="orchestra-messages-container flex-1 overflow-y-auto p-4">
        {messages.length > 0 ? (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </>
        ) : (
          <div
            className={`flex h-full items-center justify-center text-center text-gray-400 italic`}
          >
            Send a message to start a conversation
          </div>
        )}
      </div>

      {/* Fixed input area at bottom */}
      <div className="border-t border-gray-200 p-4">
        <ChatInput
          onSubmit={handleSendMessage}
          placeholder="Ask Orchestra..."
        />
      </div>
    </div>
  );
};

export default OrchestraPane;
