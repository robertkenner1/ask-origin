"use client";

import React from "react";
import MarkdownRenderer from "@/components/core/MarkdownRenderer";
import { OrchestraIconAnimated } from "@/app/components/icons/OrchestraIconAnimated";

export type MessageType = "user" | "assistant";

export interface MessageAnnotation {
  type: string;
  render: (message: Message) => React.ReactNode;
}

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  isLoading?: boolean;
  annotations?: MessageAnnotation[];
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "w-full"} mb-6`}>
      {isUser ? (
        // User messages display as blue bubbles on the right
        <div
          className={`max-w-[80%] rounded-2xl rounded-br-none bg-blue-500 px-4 py-2 break-words text-white`}
        >
          {message.content}
        </div>
      ) : message.isLoading ? (
        // Loading message with animated icon
        <div className="llm-response w-full px-1 text-gray-800">
          <div className="flex items-start">
            <OrchestraIconAnimated size={21} />
          </div>
        </div>
      ) : (
        // Assistant messages use full width with markdown formatting
        <div className="llm-response w-full px-1 text-gray-800">
          <MarkdownRenderer content={message.content} />

          {/* Render message annotations if any exist */}
          {message.annotations && message.annotations.length > 0 && (
            <div className="mt-2 flex justify-start space-x-2">
              {message.annotations.map((annotation, index) => (
                <React.Fragment key={`${message.id}-annotation-${index}`}>
                  {annotation.render(message)}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
