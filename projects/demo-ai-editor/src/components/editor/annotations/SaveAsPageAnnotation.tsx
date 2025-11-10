"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/core/button";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { Message, MessageAnnotation } from "@/components/chat/ChatMessage";
import { CheckIcon, Plus, FileText } from "lucide-react";
import { forceUpdateEditorContent } from "@/utils/editor/TipTapEditorInitializeContent";
import { markdownToHtml } from "@/utils/document/markdownToHtml";
import { Editor } from "@tiptap/react";

export const createSaveAsPageAnnotation = (): MessageAnnotation => {
  return {
    type: "save-as-page",
    render: (message: Message) => <SaveAsPageButton message={message} />,
  };
};

export const createAddToPageAnnotation = (): MessageAnnotation => {
  return {
    type: "add-to-page",
    render: (message: Message) => <AddToPageButton message={message} />,
  };
};

interface SaveAsPageButtonProps {
  message: Message;
}

interface AddToPageButtonProps {
  message: Message;
}

const SaveAsPageButton: React.FC<SaveAsPageButtonProps> = ({ message }) => {
  const [status, setStatus] = useState<"idle" | "saving" | "success">("idle");

  // Reset success state after 3 seconds
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSaveAsPage = () => {
    // Indicate saving started
    setStatus("saving");

    // Use the store directly to avoid React Hooks rules violations
    const store = useDocumentStore.getState();

    // First create a title for the page from the first line of the message
    const firstLine = message.content.split("\n")[0].trim();
    // Extract first 30 chars for title, or "LLM Response" if empty
    const pageTitle = firstLine
      ? firstLine.length > 30
        ? firstLine.substring(0, 30) + "..."
        : firstLine
      : "LLM Response";

    // Create a new page (this sets it as current page)
    store.addPage();

    // Wait for the state update
    setTimeout(() => {
      const store = useDocumentStore.getState();
      const currentPage = store.currentDocument?.pages.find(
        (p) => p.id === store.currentDocument?.currentPageId,
      );

      if (currentPage) {
        // Rename the page with our better title
        store.renamePage(currentPage.id, pageTitle);

        // Convert message content to HTML using our markdown converter
        const content = markdownToHtml(message.content);

        // Update the page content
        store.updatePage(currentPage.id, content);

        // Make sure we're on this page (should already be, but making it explicit)
        store.changePage(currentPage.id);

        // Find the active editor instance
        const editorElement = document.querySelector(".ProseMirror");
        if (editorElement && (editorElement as any)["editor"]) {
          // Force update the editor content directly
          const editorInstance = (editorElement as any)["editor"] as Editor;
          forceUpdateEditorContent(editorInstance, content, () => {
            // Focus the editor after content is updated
            editorInstance.commands.focus("end");
          });
        } else {
          // Fallback to the focus event if we can't get the editor directly
          document.dispatchEvent(new Event("focusEditor"));
        }

        // Show success state
        setStatus("success");
      }
    }, 100);
  };

  // Content based on current status
  const buttonContent = () => {
    switch (status) {
      case "saving":
        return "Saving...";
      case "success":
        return (
          <span className="flex items-center">
            Saved <CheckIcon className="ml-1 h-3 w-3" />
          </span>
        );
      default:
        return (
          <span className="flex items-center">
            <FileText className="mr-1 h-3 w-3" />
            Save as page
          </span>
        );
    }
  };

  return (
    <Button
      variant={status === "success" ? "default" : "outline"}
      onClick={handleSaveAsPage}
      className={`h-6 px-2 text-xs transition-all ${status === "success" ? "bg-green-600 hover:bg-green-700" : ""}`}
      disabled={status !== "idle"}
    >
      {buttonContent()}
    </Button>
  );
};

const AddToPageButton: React.FC<AddToPageButtonProps> = ({ message }) => {
  const [status, setStatus] = useState<"idle" | "adding" | "success">("idle");

  // Reset success state after 3 seconds
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleAddToPage = () => {
    // Indicate adding started
    setStatus("adding");

    // Use the store directly to avoid React Hooks rules violations
    const store = useDocumentStore.getState();
    const currentPage = store.currentDocument?.pages.find(
      (p) => p.id === store.currentDocument?.currentPageId,
    );

    if (currentPage) {
      // Get current page content
      const currentContent = currentPage.content || "";

      // Convert message content to HTML using our markdown converter
      const newContent = markdownToHtml(message.content);

      // Wrap new content with a className for styling
      const wrappedNewContent = `<div class="newly-added-content" data-added-at="${Date.now()}">${newContent}</div>`;

      // Append new content to existing content with proper spacing
      let combinedContent = currentContent.trim();

      // Add spacing between existing content and new content
      if (combinedContent && !combinedContent.endsWith("</p>")) {
        combinedContent += "<p></p>"; // Add empty paragraph for spacing
      } else if (combinedContent) {
        combinedContent += "<p></p>"; // Add empty paragraph for spacing
      }

      // Append the wrapped new content
      combinedContent += wrappedNewContent;

      // Update the page content with combined content
      store.updatePage(currentPage.id, combinedContent);

      // Find the active editor instance and update it
      const editorElement = document.querySelector(".ProseMirror");
      if (editorElement && (editorElement as any)["editor"]) {
        // Force update the editor content directly
        const editorInstance = (editorElement as any)["editor"] as Editor;
        forceUpdateEditorContent(editorInstance, combinedContent, () => {
          // Focus the editor at the end after content is updated
          editorInstance.commands.focus("end");

          // Optional: Remove the className after 5 seconds for a fade-out effect
          setTimeout(() => {
            removeNewContentHighlight(editorInstance, store, currentPage.id);
          }, 5000);
        });
      } else {
        // Fallback to the focus event if we can't get the editor directly
        document.dispatchEvent(new Event("focusEditor"));
      }

      // Show success state
      setStatus("success");
    }
  };

  // Function to remove the highlight class from newly added content
  const removeNewContentHighlight = (
    editor: Editor,
    store: any,
    pageId: string,
  ) => {
    try {
      // First add the 'removing' class to trigger fade out animation
      const currentContent = editor.getHTML();
      const contentWithRemoving = currentContent.replace(
        /<div class="newly-added-content"/g,
        '<div class="newly-added-content removing"',
      );

      if (contentWithRemoving !== currentContent) {
        store.updatePage(pageId, contentWithRemoving);
        forceUpdateEditorContent(editor, contentWithRemoving);

        // After the fade animation completes, remove the wrapper entirely
        setTimeout(() => {
          const finalContent = editor.getHTML();
          // Remove the entire wrapper div and just keep the inner content
          const cleanedContent = finalContent.replace(
            /<div class="newly-added-content removing"[^>]*>(.*?)<\/div>/gs,
            "$1",
          );

          if (cleanedContent !== finalContent) {
            store.updatePage(pageId, cleanedContent);
            forceUpdateEditorContent(editor, cleanedContent);
          }
        }, 500); // Wait for fade animation to complete
      }
    } catch (error) {
      console.error("Error removing new content highlight:", error);
    }
  };

  // Content based on current status
  const buttonContent = () => {
    switch (status) {
      case "adding":
        return "Adding...";
      case "success":
        return (
          <span className="flex items-center">
            Added <CheckIcon className="ml-1 h-3 w-3" />
          </span>
        );
      default:
        return (
          <span className="flex items-center">
            <Plus className="mr-1 h-3 w-3" />
            Add to page
          </span>
        );
    }
  };

  return (
    <Button
      variant={status === "success" ? "default" : "outline"}
      onClick={handleAddToPage}
      className={`h-6 px-2 text-xs transition-all ${status === "success" ? "bg-green-600 hover:bg-green-700" : ""}`}
      disabled={status !== "idle"}
    >
      {buttonContent()}
    </Button>
  );
};

export { AddToPageButton };
export default SaveAsPageButton;
