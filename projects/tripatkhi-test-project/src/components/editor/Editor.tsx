import React, { useState, useCallback, useEffect } from "react";

// Add simple flag to window for simulation focus
declare global {
  interface Window {
    skipNextClear?: boolean;
    isSpace?: (code: number) => boolean;
  }
}

// Fix for markdown-it isSpace error
if (typeof window !== "undefined") {
  // Define isSpace globally to fix markdown-it bundling issue
  window.isSpace = function isSpace(code: number): boolean {
    return code === 0x20 || code === 0x09 || code === 0x0a || code === 0x0d;
  };
}

// Core TipTap imports
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { Markdown } from "tiptap-markdown";

// TipTap components and extensions
import { TipTapBubbleMenu } from "./TipTapBubbleMenu";
import { TipTapDragHandle } from "./TipTapDragHandle";
import {
  Prediction,
  updatePrediction,
} from "./extensions/TipTapPredictionExtension";
import { GuidanceNode } from "./extensions/TipTapGuidanceNodeExtension";
import ToggleList from "./extensions/TipTapToggleListExtension";
import ToggleListItem from "./extensions/TipTapToggleListItemExtension";

// Code highlighting
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

// UI components
import { ComposeBar } from "./ComposeBar";
import DocumentHeader from "@/components/layout/DocumentHeader";

// Hooks and utilities
import { useTextSuggestions } from "@/hooks/editor/useTextSuggestions";
import {
  useDocumentManager,
  useDocumentStore,
} from "@/hooks/document/useDocumentStore";
import { forceUpdateEditorContent } from "@/utils/editor/TipTapEditorInitializeContent";
import { getEditorConfig } from "@/config/editorConfig";
import { processGuidanceContent } from "@/utils/editor/processGuidanceContent";
import { processLLMContent } from "@/utils/editor/processLLMContent";

export function Editor() {
  // Document management
  const {
    currentDocument,
    handleTitleChange,
    currentPage,
    pages,
    handlePageContentChange,
    handleNewPage,
    handleRenamePage,
    handleDeletePage,
  } = useDocumentManager();

  // Cursor position state
  const [isAtParagraphStart, setIsAtParagraphStart] = useState(true);

  // Current text in editor
  const [editorText, setEditorText] = useState("");
  // Track if cursor is in a code block
  const [isInCodeBlock, setIsInCodeBlock] = useState(false);
  // Track cursor position
  const [cursorPosition, setCursorPosition] = useState<number | undefined>(
    undefined,
  );

  // Create lowlight instance with registered languages
  const lowlight = createLowlight();
  lowlight.register("html", html);
  lowlight.register("css", css);
  lowlight.register("js", js);
  lowlight.register("ts", typescript);
  lowlight.register("javascript", js);
  lowlight.register("typescript", typescript);

  // Initialize editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable the default code block since we'll use lowlight
        codeBlock: false,
      }),
      Underline,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      // Toggle List
      ToggleList,
      ToggleListItem,
      // Add Markdown support with proper storage methods
      Markdown.configure({
        transformPastedText: true, // Convert pasted markdown to rich text
        transformCopiedText: false, // Don't convert copied text to markdown
        // transformMarkdown option removed - not supported in current version
      }),
      // Add code block with syntax highlighting and tab handling
      CodeBlockLowlight.extend({
        addKeyboardShortcuts() {
          return {
            Tab: ({ editor }) => {
              if (editor.isActive("codeBlock")) {
                // Insert spaces for indentation (2 spaces)
                editor.commands.insertContent("  ");
                return true;
              }
              return false;
            },
            "Shift-Tab": ({ editor }) => {
              if (editor.isActive("codeBlock")) {
                // Handle dedent logic (could be more complex in a real implementation)
                // For now, we're just preventing the default behavior
                return true;
              }
              return false;
            },
          };
        },
      }).configure({
        lowlight,
        HTMLAttributes: {
          class: "code-block-lowlight",
        },
      }),
      Placeholder.configure({
        placeholder: "What will we write together?",
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-node-empty",
      }),
      Prediction.configure({
        prediction: "",
        className: "text-muted-foreground",
      }),
      // Add guidance node extension for [[[text]]] format
      GuidanceNode.extend({
        addKeyboardShortcuts() {
          return {
            // Add Ctrl+Shift+G as a test shortcut to insert a guidance node
            // Removed setGuidance command that's not properly registered
            "Mod-Shift-g": ({ editor }) => {
              console.log("Keyboard shortcut for guidance triggered");
              // Custom command not available in type definitions
              return (
                (editor.commands as any).setGuidance?.(
                  "This is a test guidance note",
                ) || false
              );
            },
            // Keep the old shortcut for backwards compatibility
            "Mod-Shift-h": ({ editor }) => {
              console.log("Legacy keyboard shortcut for guidance triggered");
              // Custom command not available in type definitions
              return (
                (editor.commands as any).setGuidance?.(
                  "This is a test guidance note",
                ) || false
              );
            },
          };
        },
      }),
    ],
    immediatelyRender: false,
    content: currentPage?.content || "<p></p>",
    onUpdate: ({ editor }) => {
      // Get HTML for storage
      const html = editor.getHTML();
      handlePageContentChange(html);

      // Get plain text for suggestions
      const text = editor.getText();
      setEditorText(text);

      // Track cursor position
      const { selection } = editor.state;
      const cursorPos = selection.from;

      // Check if cursor is at paragraph start
      const textBeforeCursor = text.substring(0, cursorPos);
      const isParagraphStart =
        cursorPos === 0 ||
        textBeforeCursor.endsWith("\n\n") ||
        textBeforeCursor.endsWith("\r\n\r\n");

      setIsAtParagraphStart(isParagraphStart);

      // Store the cursor position for the API
      setCursorPosition(cursorPos);

      // Check if cursor is in a code block
      const isInCodeBlockNow = editor.isActive("codeBlock");
      setIsInCodeBlock(isInCodeBlockNow);
    },
  });

  // Handle accepting suggestions
  const handleAcceptSuggestion = useCallback(
    (text: string) => {
      if (!editor) return;

      // Insert text at current position
      editor.chain().insertContent(text).focus().run();

      // Clear prediction
      updatePrediction(editor, "");
    },
    [editor],
  );

  // Helper function to set markdown content
  const setMarkdownContent = useCallback(
    (markdown: string) => {
      if (!editor) return;

      // Use editor's markdown extension to parse markdown to HTML
      try {
        // If markdown is empty or undefined, set empty paragraph
        if (!markdown?.trim()) {
          editor.commands.setContent("<p></p>", false, {
            preserveWhitespace: "full",
          });
          return;
        }

        // Pre-process markdown to ensure proper format
        let processedMarkdown = String(markdown);

        // 1. Fix headings - make sure there's a space after # symbols
        processedMarkdown = processedMarkdown.replace(
          /^(#+)([^#\s])/gm,
          "$1 $2",
        );

        // 2. Make sure there are proper line breaks between sections
        if (!processedMarkdown.endsWith("\n")) {
          processedMarkdown += "\n";
        }

        // 3. Ensure proper list item formatting (may need to be customized based on your needs)
        processedMarkdown = processedMarkdown.replace(
          /^([*-])([^\s])/gm,
          "$1 $2",
        );

        // 4. Ensure lists have proper paragraph spacing around them
        // This helps markdown processors recognize them as proper lists

        // Add a blank line before the first list item in a sequence
        processedMarkdown = processedMarkdown.replace(
          /^(?!- )(.*)\n(- )/gm,
          "$1\n\n$2",
        );

        // Ensure blank line after the last list item before non-list content
        processedMarkdown = processedMarkdown.replace(
          /(- .*)\n([^-\s])/gm,
          "$1\n\n$2",
        );

        // Do the same for numbered lists
        processedMarkdown = processedMarkdown.replace(
          /^(?!\d+\. )(.*)\n(\d+\. )/gm,
          "$1\n\n$2",
        );
        processedMarkdown = processedMarkdown.replace(
          /(\d+\. .*)\n([^\d\s])/gm,
          "$1\n\n$2",
        );

        // 5. Ensure proper consecutive list items formatting
        // TipTap's markdown parser needs list items to be properly formatted
        // Convert sequences of list items to proper markdown lists with single newlines between items

        try {
          // First, make sure there aren't double newlines between list items (which breaks the list)
          processedMarkdown = processedMarkdown
            .toString()
            .replace(/(- .*)\n\n(- )/g, "$1\n$2");

          // Do the same for numbered lists
          processedMarkdown = processedMarkdown
            .toString()
            .replace(/(\d+\. .*)\n\n(\d+\. )/g, "$1\n$2");
        } catch (e) {
          // If String object methods fail, fall back to simple string
          console.error("Error processing markdown:", e);
        }

        // Parse markdown to HTML - directly set content with markdown
        // This properly initializes the content using the Markdown extension
        // Type definition expects a boolean for the second parameter but we need to pass options
        // Use type assertion to work around the type mismatch
        (editor.commands.setContent as any)(processedMarkdown, {
          preserveWhitespace: "full",
          parseOptions: {
            preserveWhitespace: true,
          },
        });

        // Get the parsed HTML after content has been set
        const html = editor.getHTML();

        console.log("Markdown parsed to HTML:", {
          markdownLength: processedMarkdown.length,
          htmlLength: html?.length || 0,
          htmlPreview: html?.substring(0, 50),
        });

        // Set the content using the forceUpdateEditorContent helper
        forceUpdateEditorContent(editor, html, () => {
          console.log("Editor content updated from markdown");
        });
      } catch (error) {
        console.error("Failed to convert markdown to HTML:", error);

        // More advanced fallback that attempts to handle some basic markdown
        try {
          // Simple fallback markdown converter for headings and paragraphs
          let fallbackHtml = "<div>";

          // Split by lines and convert
          const lines = markdown.split("\n");
          for (const line of lines) {
            if (line.trim() === "") {
              fallbackHtml += "</p><p>";
            } else if (line.startsWith("# ")) {
              fallbackHtml += `<h1>${line.substring(2)}</h1>`;
            } else if (line.startsWith("## ")) {
              fallbackHtml += `<h2>${line.substring(3)}</h2>`;
            } else if (line.startsWith("### ")) {
              fallbackHtml += `<h3>${line.substring(4)}</h3>`;
            } else {
              fallbackHtml += line;
            }
          }

          fallbackHtml += "</div>";

          forceUpdateEditorContent(editor, fallbackHtml, () => {
            console.log("Editor content updated with enhanced fallback method");
          });
        } catch (fallbackError) {
          // Last resort fallback to plain text
          forceUpdateEditorContent(editor, `<p>${markdown}</p>`, () => {
            console.log("Editor content updated with simplest fallback method");
          });
        }
      }
    },
    [editor],
  );

  const handleCreateNewPage = useCallback(() => {
    // Call the store function to create new page
    handleNewPage();

    // Immediately update editor with empty content
    if (editor) {
      // Use setTimeout to ensure store update completes first
      setTimeout(() => {
        editor.commands.setContent("<p></p>", false, {
          preserveWhitespace: "full",
        });
      }, 0);
    }
  }, [editor, handleNewPage]);

  // Get editor configuration
  const editorConfig = getEditorConfig();

  // Use our simplified text suggestions hook with destructured internal setters for testing
  const {
    suggestions,
    ui,
    loading,
    actions,
    _internal: { setSuggestions, setUI },
  } = useTextSuggestions({
    text: editorText,
    isAtParagraphStart,
    onAccept: handleAcceptSuggestion,
    isInCodeBlock,
    cursorPosition,
    config: {
      llmEnabled: editorConfig.prediction.llmEnabled,
    },
  });

  // Process and convert triple-bracketed content to guidance nodes
  const processTripleBracketContent = useCallback(
    (html: string) => {
      if (!editor) return html;

      try {
        // Use the utility function to process the content
        const processedHtml = processGuidanceContent(html);

        // If content was modified, update the editor
        if (processedHtml !== html) {
          console.log("Applying processed content with guidance nodes");
          editor.commands.setContent(processedHtml);
          return editor.getHTML();
        }
      } catch (error) {
        console.error("Error processing triple-bracketed content:", error);
      }

      return html;
    },
    [editor],
  );

  useEffect(() => {
    if (editor && currentPage?.content) {
      // Need to process content immediately when loading
      let contentToLoad = currentPage.content;

      // Process markers in the content before setting it
      if (contentToLoad.includes("[[[")) {
        contentToLoad = processLLMContent(contentToLoad);
        console.log("Processed content:", contentToLoad);
      }

      // Force update with processed content
      forceUpdateEditorContent(editor, contentToLoad, () => {
        console.log("Editor content updated with processed nodes");
      });
    }
  }, [editor, currentPage?.id]);

  useEffect(() => {
    // Only run if editor exists and page has content
    if (editor && currentPage?.content) {
      console.log("Setting editor content from currentPage", {
        pageId: currentPage.id,
        contentLength: currentPage.content.length,
      });

      // Check if content is markdown (wrapped in data-markdown div)
      const isMarkdown = currentPage.content.includes('data-markdown="true"');

      if (isMarkdown) {
        // Extract markdown content from the wrapper
        const markdownMatch = currentPage.content.match(
          /<div data-markdown="true">([\s\S]*?)<\/div>/,
        );
        if (markdownMatch && markdownMatch[1]) {
          // Use the markdown extension to parse the content
          try {
            let markdown = markdownMatch[1];

            // Make sure the # heading has proper spacing to be recognized
            // Fix issues with first line headings not being recognized
            if (markdown.startsWith("#")) {
              // Ensure there's a space after the # characters for proper heading parsing
              markdown = markdown.replace(/^(#+)([^#\s])/, "$1 $2");
              console.log("Fixed heading format in first line");
            }

            // Ensure markdown has proper line breaks
            if (!markdown.includes("\n\n") && !markdown.endsWith("\n")) {
              markdown = `${markdown}\n\n`;
            }

            // Pre-process triple bracketed content in the markdown
            if (markdown.includes("[[[") && markdown.includes("]]]")) {
              console.log(
                "Pre-processing triple-bracketed content in markdown",
              );

              // Wrap each [[[content]]] with HTML that will be preserved during markdown parsing
              // Using [\s\S]*? to match across newlines with lazy matching
              markdown = markdown.replace(
                /\[\[\[([\s\S]*?)\]\]\]/g,
                (match, content) => {
                  console.log(
                    `Pre-processing content: ${content.substring(0, 30)}...`,
                  );
                  return `<span class="triple-bracket-content" data-guidance="true">${content}</span>`;
                },
              );
            }

            // Use the setMarkdownContent helper with properly pre-processed markdown
            setMarkdownContent(markdown);
            console.log("Editor content updated from markdown");

            // After a short delay, process any remaining triple-bracketed content
            setTimeout(() => {
              if (editor) {
                const content = editor.getHTML();
                // Check for either triple brackets or our special spans
                if (
                  content.includes("[[[") ||
                  content.includes('data-guidance="true"') ||
                  content.includes('data-highlight="true"') // For backward compatibility
                ) {
                  console.log(
                    "Processing triple-bracketed or pre-processed content...",
                  );
                  processTripleBracketContent(content);
                }
              }
            }, 300);
          } catch (error) {
            console.error("Failed to process markdown content:", error);

            // Fallback to setting the content directly
            forceUpdateEditorContent(editor, currentPage.content, () => {
              console.log("Editor content updated with fallback method");

              // Still try to process triple-bracketed content even in fallback case
              if (currentPage.content.includes("[[[")) {
                setTimeout(() => {
                  processTripleBracketContent(editor.getHTML());
                }, 300);
              }
            });
          }
        } else {
          // Fallback if markdown extraction fails
          forceUpdateEditorContent(editor, currentPage.content, () => {
            console.log("Editor content updated with fallback method");

            // Process triple-bracketed content
            if (currentPage.content.includes("[[[")) {
              setTimeout(() => {
                processTripleBracketContent(editor.getHTML());
              }, 300);
            }
          });
        }
      } else {
        // Handle regular HTML content
        forceUpdateEditorContent(editor, currentPage.content, () => {
          console.log("Editor content updated successfully");

          // Process triple-bracketed content
          if (currentPage.content.includes("[[[")) {
            setTimeout(() => {
              processTripleBracketContent(editor.getHTML());
            }, 300);
          }
        });
      }
    }
  }, [
    editor,
    currentPage?.id,
    setMarkdownContent,
    processTripleBracketContent,
  ]);

  // Update prediction display in editor
  useEffect(() => {
    if (!editor) return;

    // Only show prediction if we have suggestions and UI permits
    if (suggestions.length > 0 && ui.expanded && !ui.askMode) {
      const activeSuggestion = suggestions[ui.activeIndex];
      if (activeSuggestion) {
        // GRUG SIMPLE WAY - Just trust the API to give us clean data
        // API now guarantees that suggestion.text will be a clean string
        let suggestionText = "";

        // Direct access, no complex parsing - API already sanitizes
        if (
          activeSuggestion &&
          typeof activeSuggestion === "object" &&
          "text" in activeSuggestion &&
          typeof activeSuggestion.text === "string"
        ) {
          suggestionText = activeSuggestion.text;
          console.log(
            "Using suggestion text from object:",
            suggestionText.substring(0, 20),
          );
        } else if (typeof activeSuggestion === "string") {
          // Simple string fallback (should be rare with API fix)
          suggestionText = activeSuggestion;
          console.log(
            "Using suggestion as direct string:",
            suggestionText.substring(0, 20),
          );
        }

        // Final safety check
        if (typeof suggestionText === "object") {
          console.error(
            "Object detected in suggestionText - API sanitization failed",
            suggestionText,
          );
          suggestionText = "";
        }

        // Update with clean text only, but only if not clicking in the editor
        if (!editor.isFocused || document.activeElement === editor.view.dom) {
          updatePrediction(editor, suggestionText);
        } else {
          // Clear prediction if editor is being interacted with
          updatePrediction(editor, "");
        }
      }
    } else {
      updatePrediction(editor, "");
    }
  }, [editor, suggestions, ui.expanded, ui.activeIndex, ui.askMode]);

  // Use a focus handler to capture focus-related events and other custom events
  useEffect(() => {
    const handleFocusEditor = () => {
      if (editor) {
        editor.commands.focus();
      }
    };

    // Handle simulation of suggestions for testing
    const handleSimulateSuggestions = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log("EDITOR: Received simulation event:", customEvent);

      if (customEvent.detail && customEvent.detail.suggestions) {
        // Set the suggestions directly using our hook's exposed setter
        setSuggestions(customEvent.detail.suggestions);

        // Update UI state to show the suggestions
        setUI((prev) => {
          const newState = {
            ...prev,
            expanded: true,
            tabIndicator: true,
            activeIndex: 0,
            hasEnteredComposeBar: false, // Ensure proper initial state
          };
          console.log("EDITOR: Setting UI state for simulation:", newState);
          return newState;
        });

        console.log(
          "EDITOR: Suggestions simulated successfully:",
          customEvent.detail.suggestions.length,
        );

        // Create temporary variable to avoid clearing suggestions on initial focus
        window.skipNextClear = true;

        // Focus editor after simulation but don't trigger click
        // to keep suggestions visible
        if (editor) {
          setTimeout(() => {
            editor.commands.focus("end");

            // Reset flag after a short delay
            setTimeout(() => {
              window.skipNextClear = false;
            }, 200);
          }, 100);
        }
      }
    };

    document.addEventListener("focusEditor", handleFocusEditor);
    document.addEventListener("simulateSuggestions", handleSimulateSuggestions);

    return () => {
      document.removeEventListener("focusEditor", handleFocusEditor);
      document.removeEventListener(
        "simulateSuggestions",
        handleSimulateSuggestions,
      );
    };
  }, [editor, setSuggestions, setUI]);

  // If no current document yet, show loading
  if (!currentDocument) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className={
              "mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
            }
          ></div>
          <p className="text-gray-600">Loading document...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-background flex h-full w-full flex-col"
      id="editor-container"
    >
      {/* Document Header */}
      {currentDocument && (
        <div className="bg-background sticky top-0 z-40 w-full">
          <DocumentHeader
            title={currentDocument.title}
            onTitleChange={handleTitleChange}
            lastEdited={currentDocument.lastEdited}
            currentPage={currentPage || undefined}
            pages={pages}
            onPageChange={(headerPage) => {
              // Find full page with content
              const fullPage = pages.find((p) => p.id === headerPage.id);

              if (editor && fullPage) {
                // Update current page in store
                useDocumentStore.getState().changePage(fullPage.id);

                // Update editor content using force update helper
                forceUpdateEditorContent(
                  editor,
                  fullPage.content || "<p></p>",
                  () => {
                    console.log("Editor content updated on page change");
                  },
                );
              }
            }}
            onNewPage={handleCreateNewPage}
            onRenamePage={handleRenamePage}
            onDeletePage={handleDeletePage}
          />
        </div>
      )}

      {/* Editor with ComposeBar */}
      <div
        className="relative w-full flex-grow overflow-auto"
        onKeyDown={(e) => {
          // First check if it's arrow key or editing key (not Tab navigation)
          const isArrowKey = e.key.startsWith("Arrow");
          const isEditingKey =
            !e.key.startsWith("Tab") &&
            e.key !== "Shift" &&
            e.key !== "Control" &&
            e.key !== "Alt" &&
            e.key !== "Meta" &&
            e.key !== "Enter"; // Don't clear on Enter

          // If arrow key or any other non-modifier key, clear suggestions
          if (
            (isArrowKey || isEditingKey) &&
            ui.expanded &&
            suggestions.length > 0
          ) {
            console.log(`Key press: ${e.key}, clearing suggestions`);
            actions.clearSuggestions();
          }

          // Only pass Tab-related events to suggestion navigation
          if (e.key === "Tab" || (suggestions.length > 0 && ui.expanded)) {
            actions.handleKeyDown(e);
          }
        }}
        onMouseDown={(e) => {
          // Any mousedown in editor area clears suggestions - catches event earlier
          // But skip if we're focusing after simulation
          if (ui.expanded && suggestions.length > 0 && !window.skipNextClear) {
            console.log("Editor mousedown, clearing suggestions");
            actions.clearSuggestions();
          } else if (window.skipNextClear) {
            console.log("Skipping suggestion clear on simulation focus");
          }
        }}
        onClick={(e) => {
          // If click directly on container, focus editor
          if (e.target === e.currentTarget && editor) {
            editor.commands.focus();
            editor.commands.setTextSelection(editor.state.doc.content.size);
          }
        }}
      >
        {editor && <TipTapBubbleMenu editor={editor} />}
        {editor && <TipTapDragHandle editor={editor} />}

        <EditorContent
          key={`editor-${currentPage?.id || "default"}`}
          editor={editor}
          className="prose prose-lg max-w-none focus:ring-0 focus:outline-none"
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75",
            padding: "var(--editor-padding)",
            paddingBottom: "calc(25vh)",
            outline: "none",
            height: "auto",
            margin: "0 auto",
            maxWidth: "var(--editor-max-width)",
          }}
        />

        {/* Compose Bar positioned at the bottom of the editor */}
        <div
          className="fixed bottom-4 z-50"
          style={{
            pointerEvents: "none",
            left: "50%",
            transform:
              "translateX(calc(-50% + var(--compose-bar-offset, 0px)))",
          }}
        >
          <div style={{ pointerEvents: "auto" }}>
            <ComposeBar
              ui={{
                expanded: ui.expanded,
                tabIndicator: ui.tabIndicator,
                activeIndex: ui.activeIndex,
                askMode: ui.askMode,
                hasEnteredComposeBar: ui.hasEnteredComposeBar,
              }}
              suggestions={suggestions}
              loading={loading}
              actions={actions}
            />
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .ProseMirror {
          outline: none !important;
        }
        .ProseMirror p.is-node-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror .is-empty::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
          font-size: var(--text-base);
          padding-left: calc(
            1.5rem + 20px
          ); /* Add drag handle space to existing padding */
          margin: 1rem 0;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          font-size: var(--text-base);
          padding-left: calc(
            1.5rem + 20px
          ); /* Add drag handle space to existing padding */
          margin: 1rem 0;
        }
        .ProseMirror li {
          margin-bottom: 0.5rem;
        }
        .ProseMirror li p {
          margin: 0;
        }
        /* Fix for list markers being larger than text */
        .ProseMirror ol li::marker,
        .ProseMirror ul li::marker {
          font-size: 1rem;
        }
        /* Task List Styles */
        .ProseMirror ul[data-type="taskList"] {
          list-style-type: none;
          padding: 0;
          padding-left: 20px; /* Add space for drag handles */
          padding-right: 20px; /* Balance the padding */
        }
        .ProseMirror ul[data-type="taskList"] li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .ProseMirror ul[data-type="taskList"] li label {
          margin-right: 0.5rem;
          user-select: none;
        }
        .ProseMirror ul[data-type="taskList"] li[data-checked="true"] {
          text-decoration: line-through;
          color: #6b7280; /* gray-500 */
        }
        .ProseMirror
          ul[data-type="taskList"]
          li[data-checked="true"]
          > div
          > p {
          text-decoration: line-through;
          color: #6b7280; /* gray-500 */
        }
        .ProseMirror ul[data-type="taskList"] li input[type="checkbox"] {
          cursor: pointer;
          margin-right: 0.5rem;
          margin-top: 0.3rem;
        }

        /* Guidance Node Styles */
        .ProseMirror .guidance-node {
          display: block;
          position: relative;
          width: calc(100% - 40px);
          margin: 0;
          margin-left: 1rem;
          padding: 1rem;
          background-color: rgb(240, 240, 240);
          border-radius: 12px;
          font-size: 0.825rem;
          white-space: pre-wrap;
        }

        .ProseMirror .guidance-dismiss {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #555;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .ProseMirror .guidance-dismiss:hover {
          opacity: 1;
          background-color: rgb(220, 220, 220);
        }

        /* Drag Handle Styles */
        .custom-drag-handle {
          width: 24px;
          height: 24px;
          border-radius: 6px; /* md */
          background-color: #f3f4f6; /* light grey */
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          opacity: 0.9;
          position: absolute;
          z-index: 100;
          /* Position handle at the top of the block */
          top: 0;
        }

        .custom-drag-handle:hover {
          background-color: #e5e7eb;
          opacity: 1;
        }

        .custom-drag-handle:active {
          cursor: grabbing;
          background-color: #d1d5db;
          opacity: 1;
        }

        /* Simple padding on all block elements for drag handle */
        .ProseMirror p,
        .ProseMirror h1,
        .ProseMirror h2,
        .ProseMirror h3,
        .ProseMirror h4,
        .ProseMirror h5,
        .ProseMirror h6,
        .ProseMirror blockquote,
        .ProseMirror pre {
          padding-left: 20px; /* Minimum padding to keep drag handle accessible */
          padding-right: 20px; /* Balance the padding for better centering */
          position: relative; /* For positioning the drag handle */
          margin: 0.5rem 0;
        }

        /* Make handles more visible on hover */
        .ProseMirror *:hover > .custom-drag-handle {
          opacity: 0.9;
        }

        /* Code Block Styles using lowlight extension - Apprentice theme */
        .ProseMirror .code-block-lowlight {
          font-family: "Menlo", "Monaco", "Courier New", monospace;
          background-color: #262626; /* Apprentice background */
          color: #bcbcbc; /* Apprentice foreground */
          padding: 1rem;
          border-radius: 0.5rem; /* lg corner radius */
          margin: 1.5rem 0;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: keep-all;
          line-height: 1.4;
          font-size: 0.875rem;
          position: relative;
        }

        /* Language display */
        .ProseMirror .code-block-lowlight::before {
          content: attr(data-language);
          position: absolute;
          top: 0.25rem;
          right: 0.5rem;
          font-size: 0.75rem;
          color: #6c6c6c;
          opacity: 0.7;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* Code block syntax highlighting based on Apprentice */
        .ProseMirror pre code {
          color: inherit;
          padding: 0;
          background: none;
          font-size: inherit;
        }

        /* Comments */
        .ProseMirror .hljs-comment,
        .ProseMirror .hljs-quote {
          color: #6c6c6c; /* Apprentice color7 */
          font-style: italic;
        }

        /* Keywords */
        .ProseMirror .hljs-keyword,
        .ProseMirror .hljs-selector-tag,
        .ProseMirror .hljs-literal {
          color: #5f5f87; /* Apprentice color5 */
          font-weight: bold;
        }

        /* Strings */
        .ProseMirror .hljs-string,
        .ProseMirror .hljs-regexp,
        .ProseMirror .hljs-addition {
          color: #5f875f; /* Apprentice color2 */
        }

        /* Numbers */
        .ProseMirror .hljs-number,
        .ProseMirror .hljs-built_in {
          color: #af5f5f; /* Apprentice color1 */
        }

        /* Functions */
        .ProseMirror .hljs-function,
        .ProseMirror .hljs-title.function {
          color: #5f87af; /* Apprentice color4 */
        }

        /* Types, attributes, classes */
        .ProseMirror .hljs-type,
        .ProseMirror .hljs-attribute,
        .ProseMirror .hljs-selector-class,
        .ProseMirror .hljs.attribute {
          color: #5f8787; /* Apprentice color6 */
        }

        /* Variables */
        .ProseMirror .hljs-variable,
        .ProseMirror .hljs-template-variable,
        .ProseMirror .hljs-deletion {
          color: #87875f; /* Apprentice color3 */
        }

        /* Tag names */
        .ProseMirror .hljs-name,
        .ProseMirror .hljs-tag {
          color: #5f5faf;
        }

        /* Inline code styling */
        .ProseMirror p code {
          font-family: "Menlo", "Monaco", "Courier New", monospace;
          background-color: #f3f4f6;
          color: #5f5f87; /* Apprentice color5 - muted purple */
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
          white-space: normal;
        }
      `}</style>
    </div>
  );
}
