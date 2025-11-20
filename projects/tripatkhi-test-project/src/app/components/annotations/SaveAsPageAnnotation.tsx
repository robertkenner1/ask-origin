"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useDocumentStore } from "@/hooks/document/useDocumentStore";
import { Message, MessageAnnotation } from "../ChatMessage";
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
        ? `${firstLine.substring(0, 30)}...`
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
    console.log("🔧 AddToPage: Starting to add content");

    // Use the store directly to avoid React Hooks rules violations
    const store = useDocumentStore.getState();
    const currentPage = store.currentDocument?.pages.find(
      (p) => p.id === store.currentDocument?.currentPageId,
    );

    if (currentPage) {
      // Get current page content
      const currentContent = currentPage.content || "";
      console.log(
        "🔧 AddToPage: Current content length:",
        currentContent.length,
      );

      // Convert message content to HTML using our markdown converter
      const newContent = markdownToHtml(message.content);
      console.log(
        "🔧 AddToPage: New content:",
        `${newContent.substring(0, 100)}...`,
      );

      // Find the active editor instance first
      const editorElement = document.querySelector(".ProseMirror");
      if (editorElement && (editorElement as any)["editor"]) {
        console.log(
          "🔧 AddToPage: Found editor instance, trying TipTap command approach",
        );
        const editorInstance = (editorElement as any)["editor"] as Editor;

        // Try approach 1: Use TipTap command if available
        try {
          console.log("🔧 AddToPage: Trying TipTap command approach");
          console.log(
            "🔧 AddToPage: Available commands:",
            Object.keys(editorInstance.commands),
          );

          // Move cursor to end
          editorInstance.commands.focus("end");

          // Add some spacing
          editorInstance.commands.insertContent("<p></p>");

          // Get position before inserting new content
          const beforePosition = editorInstance.state.selection.to;

          // Insert the new content
          editorInstance.commands.insertContent(newContent);

          // Get position after inserting new content
          const afterPosition = editorInstance.state.selection.to;

          // Apply the newly-added mark to the range we just inserted
          editorInstance.commands.setTextSelection({
            from: beforePosition,
            to: afterPosition,
          });

          // Try to call the command
          const success = editorInstance.commands.setNewlyAdded({
            addedAt: Date.now().toString(),
          });
          console.log("🔧 AddToPage: setNewlyAdded command result:", success);

          editorInstance.commands.focus("end");

          // Update the store with the current content
          store.updatePage(currentPage.id, editorInstance.getHTML());

          console.log("🔧 AddToPage: TipTap command approach completed");

          // Scroll to the newly added content after a brief delay to ensure DOM updates
          setTimeout(() => {
            const addedElements = document.querySelectorAll(
              ".newly-added-content",
            );
            if (addedElements.length > 0) {
              const lastAddedElement = addedElements[addedElements.length - 1];
              console.log(
                "🔧 AddToPage: Scrolling to newly added content (TipTap approach)",
              );

              lastAddedElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }
          }, 150);
        } catch (error) {
          console.log(
            "🔧 AddToPage: TipTap command failed, falling back to HTML approach:",
            error,
          );

          // Fallback to HTML approach
          // Wrap new content with proper span markup that TipTap will recognize
          const wrappedNewContent = `<span class="newly-added-content" data-newly-added="true" data-added-at="${Date.now()}">${newContent}</span>`;
          console.log(
            "🔧 AddToPage: Wrapped content:",
            `${wrappedNewContent.substring(0, 150)}...`,
          );

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
          console.log(
            "🔧 AddToPage: Final combined content length:",
            combinedContent.length,
          );

          // Update the page content with combined content
          store.updatePage(currentPage.id, combinedContent);

          // Force update the editor content directly
          forceUpdateEditorContent(editorInstance, combinedContent, () => {
            console.log("🔧 AddToPage: Editor content updated successfully");

            // Check what HTML we tried to set vs what we got
            console.log(
              "🔧 AddToPage: HTML we tried to set (last 300 chars):",
              combinedContent.substring(combinedContent.length - 300),
            );

            // Focus the editor at the end after content is updated
            editorInstance.commands.focus("end");

            // Check what the editor actually contains after update
            const actualEditorHTML = editorInstance.getHTML();
            console.log(
              "🔧 AddToPage: Actual editor HTML after update (last 300 chars):",
              actualEditorHTML.substring(actualEditorHTML.length - 300),
            );

            // Check if our span got through
            if (actualEditorHTML.includes("newly-added-content")) {
              console.log(
                "🔧 AddToPage: ✅ newly-added-content class survived!",
              );
            } else {
              console.log(
                "🔧 AddToPage: ❌ newly-added-content class was stripped out",
              );
            }

            if (actualEditorHTML.includes("<span")) {
              console.log("🔧 AddToPage: ✅ Some spans exist in the content");
            } else {
              console.log(
                "🔧 AddToPage: ❌ No spans found in editor content at all",
              );
            }

            // Check if the class was actually applied
            setTimeout(() => {
              const addedElements = document.querySelectorAll(
                ".newly-added-content",
              );
              console.log(
                "🔧 AddToPage: Found",
                addedElements.length,
                "elements with newly-added-content class",
              );

              // Scroll to the newly added content if found
              if (addedElements.length > 0) {
                const lastAddedElement =
                  addedElements[addedElements.length - 1];
                console.log("🔧 AddToPage: Scrolling to newly added content");

                // Smooth scroll to the newly added content
                lastAddedElement.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }

              // Also check if any spans exist at all
              const allSpans = document.querySelectorAll(".ProseMirror span");
              console.log(
                "🔧 AddToPage: Found",
                allSpans.length,
                "span elements in editor",
              );

              // Check if the data attribute exists somewhere
              const elementsWithDataAttr =
                document.querySelectorAll("[data-added-at]");
              console.log(
                "🔧 AddToPage: Found",
                elementsWithDataAttr.length,
                "elements with data-added-at attribute",
              );

              // Let's also check if TipTap extension is working by trying to apply the mark manually
              console.log(
                "🔧 AddToPage: Available commands:",
                Object.keys(editorInstance.commands),
              );
              if ("setNewlyAdded" in editorInstance.commands) {
                console.log(
                  "🔧 AddToPage: ✅ setNewlyAdded command is available",
                );
              } else {
                console.log(
                  "🔧 AddToPage: ❌ setNewlyAdded command is NOT available",
                );
              }
            }, 100);

            // Optional: Remove the className after 5 seconds for a fade-out effect
            setTimeout(() => {
              removeNewContentHighlight(editorInstance, store, currentPage.id);
            }, 5000);
          });
        }

        // Show success state
        setStatus("success");
      } else {
        console.log("🔧 AddToPage: Editor instance not found, using fallback");
        // Fallback to the focus event if we can't get the editor directly
        document.dispatchEvent(new Event("focusEditor"));
      }
    } else {
      console.log("🔧 AddToPage: No current page found");
    }
  };

  // Function to remove the highlight class from newly added content
  const removeNewContentHighlight = (
    editor: Editor,
    store: any,
    pageId: string,
  ) => {
    try {
      console.log("🔧 AddToPage: Starting highlight removal process");

      // First try TipTap's built-in mark removal
      try {
        console.log("🔧 AddToPage: Trying TipTap unsetNewlyAdded command");

        // Select all content to remove all newly-added marks
        editor.commands.selectAll();
        const success = editor.commands.unsetNewlyAdded();
        console.log("🔧 AddToPage: unsetNewlyAdded command result:", success);

        // Move cursor back to end
        editor.commands.focus("end");

        // Update store with cleaned content
        store.updatePage(pageId, editor.getHTML());

        // Verify the removal worked
        setTimeout(() => {
          const verifyElements = document.querySelectorAll(
            ".newly-added-content",
          );
          console.log(
            "🔧 AddToPage: After TipTap removal - remaining newly-added-content elements:",
            verifyElements.length,
          );

          if (verifyElements.length === 0) {
            console.log("🔧 AddToPage: ✅ TipTap removal successful!");
            return;
          } else {
            console.log(
              "🔧 AddToPage: ⚠️ TipTap removal failed, falling back to HTML manipulation",
            );
            // Fall back to HTML manipulation if TipTap method failed
            htmlFallbackRemoval(editor, store, pageId);
          }
        }, 100);
      } catch (error) {
        console.log(
          "🔧 AddToPage: TipTap removal failed, falling back to HTML manipulation:",
          error,
        );
        htmlFallbackRemoval(editor, store, pageId);
      }
    } catch (error) {
      console.error("🔧 AddToPage: Error in highlight removal:", error);
    }
  };

  // Fallback HTML manipulation method
  const htmlFallbackRemoval = (editor: Editor, store: any, pageId: string) => {
    console.log("🔧 AddToPage: Using HTML fallback removal method");

    // Get current content and remove the newly-added-content spans
    const currentContent = editor.getHTML();
    console.log(
      "🔧 AddToPage: Current content before removal (last 200 chars):",
      currentContent.substring(currentContent.length - 200),
    );

    // Check if we have any newly-added-content spans to remove
    if (!currentContent.includes("newly-added-content")) {
      console.log(
        "🔧 AddToPage: No newly-added-content spans found, nothing to remove",
      );
      return;
    }

    // First add the 'removing' class to trigger fade out animation
    const contentWithRemoving = currentContent.replace(
      /(<span[^>]*class="[^"]*newly-added-content[^"]*")/g,
      "$1 removing",
    );

    console.log(
      "🔧 AddToPage: Added removing class, content changed:",
      contentWithRemoving !== currentContent,
    );

    if (contentWithRemoving !== currentContent) {
      // Update the page content to trigger fade animation
      store.updatePage(pageId, contentWithRemoving);
      forceUpdateEditorContent(editor, contentWithRemoving, () => {
        console.log(
          "🔧 AddToPage: Applied removing class to trigger fade animation",
        );
      });

      // After the fade animation completes, remove the wrapper entirely
      setTimeout(() => {
        const finalContent = editor.getHTML();
        console.log(
          "🔧 AddToPage: Content before final cleanup (last 200 chars):",
          finalContent.substring(finalContent.length - 200),
        );

        // Remove the entire wrapper span and just keep the inner content
        // More comprehensive regex to handle various span attributes
        const cleanedContent = finalContent.replace(
          /<span[^>]*class="[^"]*newly-added-content[^"]*"[^>]*>(.*?)<\/span>/gs,
          "$1",
        );

        console.log(
          "🔧 AddToPage: Content after cleanup (last 200 chars):",
          cleanedContent.substring(cleanedContent.length - 200),
        );
        console.log(
          "🔧 AddToPage: Content was cleaned:",
          cleanedContent !== finalContent,
        );

        if (cleanedContent !== finalContent) {
          store.updatePage(pageId, cleanedContent);
          forceUpdateEditorContent(editor, cleanedContent, () => {
            console.log(
              "🔧 AddToPage: ✅ Successfully cleaned up newly-added-content spans",
            );

            // Verify cleanup worked
            setTimeout(() => {
              const verifyElements = document.querySelectorAll(
                ".newly-added-content",
              );
              console.log(
                "🔧 AddToPage: Verification - remaining newly-added-content elements:",
                verifyElements.length,
              );
            }, 100);
          });
        } else {
          console.log(
            "🔧 AddToPage: ⚠️ No changes made during cleanup - content was already clean or regex didn't match",
          );
        }
      }, 600); // Wait for fade animation to complete (CSS animation is 0.5s)
    } else {
      console.log(
        "🔧 AddToPage: ⚠️ Failed to add removing class - content unchanged",
      );
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
            Insert
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
