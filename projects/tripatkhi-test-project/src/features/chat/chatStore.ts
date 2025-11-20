import { create } from "zustand";
import { getEditorConfig } from "@/config/editorConfig";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { Message } from "@/app/components/ChatMessage";
import {
  createSaveAsPageAnnotation,
  createAddToPageAnnotation,
} from "@/app/components/annotations/SaveAsPageAnnotation";

interface ChatState {
  messages: Message[];
  addUserMessage: (content: string) => Promise<void>;
  loadMessagesForDocument: (documentId: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],

  loadMessagesForDocument: (documentId: string) => {
    const storageKey = `orchestraChatMessages_${documentId}`;
    const savedMessages = localStorage.getItem(storageKey);

    if (savedMessages) {
      try {
        // Parse the saved messages and fix the date objects
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
          // Add SaveAsPage annotation to assistant messages
          annotations:
            msg.type === "assistant" && !msg.isLoading
              ? [createSaveAsPageAnnotation()]
              : undefined,
        }));
        set({ messages: parsedMessages });
      } catch (error) {
        console.error("Error loading chat messages from localStorage:", error);
        set({ messages: [] });
      }
    } else {
      // Clear messages when switching to a document with no saved chat
      set({ messages: [] });
    }
  },

  addUserMessage: async (content: string) => {
    // Get current document ID using Zustand store's getState
    const currentDocument = useDocumentStore.getState().currentDocument;
    const documentId = currentDocument?.id || "default";
    const storageKey = `orchestraChatMessages_${documentId}`;

    // Create a new user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      type: "user",
      timestamp: new Date(),
    };

    // Add the user message to state
    const currentMessages = get().messages;
    const updatedMessages = [...currentMessages, newMessage];
    set({ messages: updatedMessages });

    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(updatedMessages));

    // Create loading message
    const loadingId = `${Date.now().toString()}-loading`;
    const loadingMessage: Message = {
      id: loadingId,
      content: "",
      type: "assistant",
      timestamp: new Date(),
      isLoading: true,
    };

    // Add loading message
    set({ messages: [...updatedMessages, loadingMessage] });

    try {
      // Get the editor config
      const editorConfig = getEditorConfig();

      // Send the message to the Claude API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
          config: {
            temperature: 0.7,
            maxTokens: 1000,
            llmEnabled: editorConfig.prediction.llmEnabled,
          },
        }),
      });

      // Get current messages to make sure we're operating on latest state
      const messagesWithLoading = get().messages;

      // Remove the loading message
      const messagesWithoutLoading = messagesWithLoading.filter(
        (msg) => msg.id !== loadingId,
      );

      if (!response.ok) {
        // Handle error response
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get a response");
      }

      // Get the response message
      const data = await response.json();

      // Add both SaveAsPage and AddToPage annotations to assistant message
      const assistantMessage = {
        ...data.message,
        annotations: [
          createAddToPageAnnotation(),
          createSaveAsPageAnnotation(),
        ],
      };

      const finalMessages = [...messagesWithoutLoading, assistantMessage];
      set({ messages: finalMessages });

      // Save to localStorage (with annotations)
      localStorage.setItem(storageKey, JSON.stringify(finalMessages));
    } catch (error) {
      console.error("Error sending message:", error);

      // Add an error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, I encountered an error. Please try again.",
        type: "assistant",
        timestamp: new Date(),
        // No annotation for error messages
      };

      // Remove loading and add error
      const currentMessages = get().messages;
      const messagesWithoutLoading = currentMessages.filter(
        (msg) => !msg.id.includes("-loading"),
      );
      const finalMessages = [...messagesWithoutLoading, errorMessage];
      set({ messages: finalMessages });

      // Save to localStorage
      localStorage.setItem(storageKey, JSON.stringify(finalMessages));
    }
  },
}));
