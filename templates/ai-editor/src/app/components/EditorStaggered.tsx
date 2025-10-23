import React, { useState, useCallback, useEffect, useRef } from "react";

// Add simple flag to window for simulation focus
declare global {
  interface Window {
    skipNextClear?: boolean;
  }
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
} from "../extensions/TipTapPredictionExtension";
import { GuidanceNode } from "../extensions/TipTapGuidanceNodeExtension";
import { Correction } from "../extensions/TipTapCorrectionExtension";

import { AnimatedUnderline } from "../extensions/TipTapAnimatedUnderlineExtension";
import ToggleList from "../extensions/TipTapToggleListExtension";
import ToggleListItem from "../extensions/TipTapToggleListItemExtension";

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
import {
  applyCorrections,
  clearAllCorrections,
  type TextCorrection,
} from "@/utils/editor/applyCorrections";
import {
  applyAnimatedUnderlines,
  clearAllAnimatedUnderlines,
  type AnimatedUnderlineRange,
} from "@/utils/editor/applyAnimatedUnderlines";
import {
  checkSpellingEnhanced,
  isSpellCheckSupported,
  type SpellCheckResult,
} from "@/utils/editor/spellChecker";

export function EditorStaggered() {
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

  // State for controlling underline amounts
  const [redUnderlineCount, setRedUnderlineCount] = useState<number>(5);
  const [animatedUnderlineCount, setAnimatedUnderlineCount] =
    useState<number>(5);

  // State for automatic spell checking
  const [autoSpellCheckEnabled, setAutoSpellCheckEnabled] =
    useState<boolean>(true);
  const [isSpellChecking, setIsSpellChecking] = useState<boolean>(false);
  const [lastTextLength, setLastTextLength] = useState<number>(0);

  // Separate ref for auto underlines to avoid state conflicts
  const lastUnderlineTextLength = useRef<number>(0);

  // State for automatic underline simulation
  const [autoUnderlineEnabled, setAutoUnderlineEnabled] =
    useState<boolean>(true);
  const [underlineDensity, setUnderlineDensity] = useState<number>(25); // Percentage of words to underline

  // NEW: State for staggered animation timing
  const [staggerDelay, setStaggerDelay] = useState<number>(150); // milliseconds between each underline
  const [enableStaggered, setEnableStaggered] = useState<boolean>(true);

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
        placeholder: "What will we write together? (Staggered Version)",
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-node-empty",
      }),
      Prediction.configure({
        prediction: "",
        className: "text-muted-foreground",
      }),
      // Add correction extension for underlining errors
      Correction,
      // Add guidance node extension for [[[text]]] format
      GuidanceNode.extend({
        addKeyboardShortcuts() {
          return {
            // Add Ctrl+Shift+G as a test shortcut to insert a guidance node
            // Removed setGuidance command that's not properly registered
            "Mod-Shift-g": ({ editor }: { editor: any }) => {
              console.log("Keyboard shortcut for guidance triggered");
              // Custom command not available in type definitions
              return (
                (editor.commands as any).setGuidance?.(
                  "This is a test guidance note",
                ) || false
              );
            },
            // Keep the old shortcut for backwards compatibility
            "Mod-Shift-h": ({ editor }: { editor: any }) => {
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
      // Add animated underline with dots extension
      AnimatedUnderline,
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

  // Helper function to find word positions accurately in text
  const findWordPositions = useCallback((text: string) => {
    const wordPositions: Array<{ word: string; start: number; end: number }> =
      [];
    const words = text.split(/(\s+)/); // Split but keep separators
    let position = 0;

    for (const segment of words) {
      if (segment.trim()) {
        // Only process non-whitespace segments
        wordPositions.push({
          word: segment,
          start: position,
          end: position + segment.length,
        });
      }
      position += segment.length;
    }

    return wordPositions;
  }, []);

  // NEW: Unified staggered application function for mixed underline types
  const applyUnifiedStaggered = useCallback(
    async (
      corrections: TextCorrection[],
      animatedRanges: AnimatedUnderlineRange[],
    ) => {
      if (!editor || !enableStaggered) {
        // Fall back to normal application if staggered is disabled
        if (editor) {
          if (corrections.length > 0) applyCorrections(editor, corrections);
          if (animatedRanges.length > 0)
            applyAnimatedUnderlines(editor, animatedRanges);
        }
        return;
      }

      // Create a unified array with type information
      const allUnderlines: Array<{
        type: "correction" | "animated";
        data: TextCorrection | AnimatedUnderlineRange;
        position: number;
      }> = [];

      // Add corrections
      corrections.forEach((correction) => {
        allUnderlines.push({
          type: "correction",
          data: correction,
          position: correction.from,
        });
      });

      // Add animated underlines
      animatedRanges.forEach((range) => {
        allUnderlines.push({
          type: "animated",
          data: range,
          position: range.from,
        });
      });

      // Sort the unified array by document position
      allUnderlines.sort((a, b) => a.position - b.position);

      console.log(
        `Applying ${allUnderlines.length} unified underlines with staggered timing (${staggerDelay}ms delay)`,
      );

      // Apply each underline with staggered timing
      for (let i = 0; i < allUnderlines.length; i++) {
        const underline = allUnderlines[i];

        if (underline.type === "correction") {
          // Apply single red correction
          applyCorrections(editor, [underline.data as TextCorrection]);
        } else {
          // Apply single animated underline
          applyAnimatedUnderlines(editor, [
            underline.data as AnimatedUnderlineRange,
          ]);
        }

        // Wait before applying next one (except for the last one)
        if (i < allUnderlines.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, staggerDelay));
        }
      }
    },
    [editor, enableStaggered, staggerDelay],
  );

  // NEW: Function to apply both types of underlines together with unified staggering
  const handleApplyAllUnderlines = useCallback(async () => {
    if (!editor) return;

    // Get the current editor text to find positions
    const text = editor.getText();

    if (text.length < 10) {
      alert("Please type more text in the editor first.");
      return;
    }

    // Get corrections (reuse logic from handleApplyCorrections)
    const exampleCorrections: TextCorrection[] = [];
    const wordPositions = findWordPositions(text);
    const availableWords = wordPositions.filter(({ start, end }) => {
      const hasAnimatedUnderline = editor.isActive("animatedUnderline", {
        from: start,
        to: end,
      });
      const hasCorrection = editor.isActive("correction", {
        from: start,
        to: end,
      });
      return !hasAnimatedUnderline && !hasCorrection;
    });

    // Apply intelligent word selection for corrections
    const targetWords: Array<{ word: string; start: number; end: number }> = [];
    const longWords = availableWords.filter(({ word }) => word.length > 8);
    targetWords.push(...longWords.slice(0, Math.ceil(redUnderlineCount * 0.4)));

    const potentialSpellingIssues = availableWords.filter(
      ({ word }) =>
        /[A-Z][a-z]+/.test(word) &&
        !["The", "This", "That", "They", "There", "Then"].includes(word),
    );
    targetWords.push(
      ...potentialSpellingIssues.slice(0, Math.ceil(redUnderlineCount * 0.3)),
    );

    const shortWords = availableWords.filter(
      ({ word }) =>
        word.length >= 2 &&
        word.length <= 4 &&
        !["the", "and", "but", "for", "you", "are", "can"].includes(
          word.toLowerCase(),
        ),
    );
    targetWords.push(
      ...shortWords.slice(0, Math.ceil(redUnderlineCount * 0.3)),
    );

    const uniqueTargets = Array.from(new Set(targetWords.map((w) => w.start)))
      .map((start) => targetWords.find((w) => w.start === start)!)
      .slice(0, redUnderlineCount);

    uniqueTargets.forEach(({ word, start, end }) => {
      let hasConflict = false;
      for (let pos = start; pos < end; pos++) {
        if (editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })) {
          hasConflict = true;
          break;
        }
      }

      if (!hasConflict) {
        let type: "spelling" | "grammar" | "style" = "spelling";
        let message = `Check spelling of "${word}"`;

        if (word.length > 8) {
          type = "style";
          message = `Consider a simpler alternative to "${word}"`;
        } else if (word.length <= 4) {
          type = "grammar";
          message = `Verify grammar for "${word}"`;
        } else if (/[A-Z]/.test(word[0])) {
          type = "spelling";
          message = `Check capitalization of "${word}"`;
        }

        exampleCorrections.push({
          from: start,
          to: end,
          type,
          message,
        });
      }
    });

    // Get animated underlines using improved hybrid approach
    const animatedRanges: AnimatedUnderlineRange[] = [];

    // First, try to get sentence beginnings (preferred locations)
    const sentenceStartRegex = /(^|[.!?]\s+)(\w)/g;
    const sentenceStarts: number[] = [];

    let match;
    while ((match = sentenceStartRegex.exec(text)) !== null) {
      const startPos = match.index + match[1].length;
      sentenceStarts.push(startPos);
    }

    console.log(
      `Found ${sentenceStarts.length} sentence starts for unified underlines`,
    );

    sentenceStarts.sort((a, b) => a - b);
    const sentencesWithSuperUnderlines = new Set<number>();

    // Apply animated underlines to sentence beginnings first (preferred)
    let addedCount = 0;
    for (const startPos of sentenceStarts) {
      if (addedCount >= animatedUnderlineCount) break;

      const fixedCharCount = 6;
      let endPos = Math.min(startPos + fixedCharCount, text.length);

      while (
        endPos < text.length &&
        /\w/.test(text[endPos]) &&
        !/\s/.test(text[endPos])
      ) {
        endPos++;
      }

      const nextSentenceIndex = sentenceStarts.findIndex(
        (pos) => pos > startPos,
      );
      if (nextSentenceIndex !== -1) {
        const nextSentenceStart = sentenceStarts[nextSentenceIndex];
        if (endPos > nextSentenceStart) {
          endPos = nextSentenceStart;
        }
      }

      if (endPos <= startPos) {
        endPos = Math.min(startPos + 1, text.length);
      }

      let hasConflict = false;
      for (let pos = startPos; pos < endPos; pos++) {
        if (
          editor.isActive("correction", { from: pos, to: pos + 1 }) ||
          editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })
        ) {
          hasConflict = true;
          break;
        }
      }

      const currentSentenceIndex = sentenceStarts.indexOf(startPos);
      if (sentencesWithSuperUnderlines.has(currentSentenceIndex)) {
        hasConflict = true;
      }

      // Also check if this overlaps with any red corrections we're about to apply
      const overlapsWithRed = exampleCorrections.some(
        (red) =>
          (startPos >= red.from && startPos < red.to) ||
          (endPos > red.from && endPos <= red.to) ||
          (startPos <= red.from && endPos >= red.to),
      );

      if (!hasConflict && !overlapsWithRed) {
        const underlineText = text.substring(startPos, endPos);
        animatedRanges.push({
          from: startPos,
          to: endPos,
          message: `Super enhancement at sentence start: "${underlineText.trim()}"`,
          category: "sentence-start",
        });

        sentencesWithSuperUnderlines.add(currentSentenceIndex);
        addedCount++;
      }
    }

    // If we still need more animated underlines, use remaining available words
    if (addedCount < animatedUnderlineCount && availableWords.length > 0) {
      console.log(
        `Super underlines only appear at sentence beginnings. Found ${addedCount} sentence starts, requested ${animatedUnderlineCount}. This is expected behavior.`,
      );
    }

    if (exampleCorrections.length === 0 && animatedRanges.length === 0) {
      alert(
        "No underlines added. Either type more text in the editor first or remove existing underlines.",
      );
      return;
    }

    console.log(
      `Applying ${exampleCorrections.length} red + ${animatedRanges.length} animated underlines with ${enableStaggered ? "unified staggered" : "normal"} timing (expected ${animatedUnderlineCount} animated)`,
    );

    // Apply both types together with unified staggering
    await applyUnifiedStaggered(exampleCorrections, animatedRanges);
  }, [
    editor,
    redUnderlineCount,
    animatedUnderlineCount,
    findWordPositions,
    applyUnifiedStaggered,
    enableStaggered,
  ]);

  // Function to clear all corrections
  const handleClearCorrections = useCallback(() => {
    if (!editor) return;
    clearAllCorrections(editor);
  }, [editor]);

  // Modified function to apply animated underlines with staggered timing
  const handleApplyAnimatedUnderlines = useCallback(async () => {
    if (!editor) return;

    // Get the current editor text to find positions for animated underlines
    const text = editor.getText();

    // Create animated underline ranges
    const animatedRanges: AnimatedUnderlineRange[] = [];

    // Only create animated underlines if there's text to underline
    if (text.length > 10) {
      // Find sentence beginnings using regex
      // Look for sentence start patterns: beginning of text, or after ., !, ? followed by space(s)
      const sentenceStartRegex = /(^|[.!?]\s+|[\r\n]+\s*)(\w)/g;
      const sentenceStarts: number[] = [];

      let match;
      while ((match = sentenceStartRegex.exec(text)) !== null) {
        // Get the position of the first word character after sentence delimiter
        const startPos = match.index + match[1].length;
        sentenceStarts.push(startPos);
      }

      console.log(
        `Found ${sentenceStarts.length} sentence starts:`,
        sentenceStarts,
      );

      // SORT SENTENCE STARTS BY POSITION (should already be sorted, but ensure it)
      sentenceStarts.sort((a, b) => a - b);

      // Track which sentences already have super underlines to ensure max 1 per sentence
      const sentencesWithSuperUnderlines = new Set<number>();

      // For each sentence start, create a fixed-width underline (limit to desired count)
      let addedCount = 0;
      for (const startPos of sentenceStarts) {
        if (addedCount >= animatedUnderlineCount) break;

        // Calculate end position for fixed width (approximately 50px worth of characters)
        // Assuming average character width of ~8px, 50px ≈ 6-7 characters
        const fixedCharCount = 6;
        let endPos = Math.min(startPos + fixedCharCount, text.length);

        // Adjust to not break in the middle of a word
        // Find the next word boundary if we're in the middle of a word
        while (
          endPos < text.length &&
          /\w/.test(text[endPos]) &&
          !/\s/.test(text[endPos])
        ) {
          endPos++;
        }

        // Make sure we don't go beyond the next sentence
        const nextSentenceIndex = sentenceStarts.findIndex(
          (pos) => pos > startPos,
        );
        if (nextSentenceIndex !== -1) {
          const nextSentenceStart = sentenceStarts[nextSentenceIndex];
          if (endPos > nextSentenceStart) {
            endPos = nextSentenceStart;
          }
        }

        // Ensure we have at least one character
        if (endPos <= startPos) {
          endPos = Math.min(startPos + 1, text.length);
        }

        // Check if this range conflicts with existing underlines (more thorough check)
        let hasConflict = false;

        // Check every position in the range for conflicts with animated underlines
        for (let pos = startPos; pos < endPos; pos++) {
          if (
            editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })
          ) {
            hasConflict = true;
            break;
          }
        }

        // Also check if this sentence already has a super underline
        const currentSentenceIndex = sentenceStarts.indexOf(startPos);
        if (sentencesWithSuperUnderlines.has(currentSentenceIndex)) {
          hasConflict = true;
        }

        if (!hasConflict) {
          const underlineText = text.substring(startPos, endPos);
          animatedRanges.push({
            from: startPos,
            to: endPos,
            message: `Super enhancement at sentence start: "${underlineText.trim()}"`,
            category: "sentence-start",
          });

          // Mark this sentence as having a super underline
          sentencesWithSuperUnderlines.add(currentSentenceIndex);
          addedCount++;
        }
      }
    }

    // If still no animated underlines, show informative message
    if (animatedRanges.length === 0) {
      alert(
        "No animated underlines added. Either type more text with complete sentences or remove existing underlines from sentence beginnings.",
      );
      return;
    }

    // SORT ANIMATED RANGES BY DOCUMENT POSITION for clean start-to-end animation
    animatedRanges.sort((a, b) => a.from - b.from);

    console.log(
      `Adding ${animatedRanges.length} animated underlines with ${enableStaggered ? "staggered" : "normal"} timing (sorted by position)`,
    );

    // Apply animated underlines to the editor with staggered timing
    await applyUnifiedStaggered([], animatedRanges);
  }, [editor, animatedUnderlineCount, applyUnifiedStaggered, enableStaggered]);

  // Function to clear all animated underlines
  const handleClearAnimatedUnderlines = useCallback(() => {
    if (!editor) return;
    clearAllAnimatedUnderlines(editor);
  }, [editor]);

  // Modified auto underlines function with staggered timing
  const applyAutoUnderlines = useCallback(async () => {
    console.log("applyAutoUnderlines called", {
      editor: !!editor,
      autoUnderlineEnabled,
    });
    if (!editor || !autoUnderlineEnabled) {
      console.log("Early return: editor or autoUnderlineEnabled false");
      return;
    }

    const text = editor.getText();
    console.log(
      "Text length:",
      text.length,
      "Text preview:",
      text.substring(0, 100),
    );
    if (text.length < 20) {
      console.log("Early return: text too short");
      return; // Need some text to work with
    }

    // Get word positions
    const wordPositions = findWordPositions(text);
    console.log("Total word positions found:", wordPositions.length);

    // Filter out words that already have underlines
    const availableWords = wordPositions.filter(({ start, end }) => {
      const hasCorrection = editor.isActive("correction", {
        from: start,
        to: end,
      });
      const hasAnimated = editor.isActive("animatedUnderline", {
        from: start,
        to: end,
      });
      return !hasCorrection && !hasAnimated;
    });

    console.log(
      "Available words (no existing underlines):",
      availableWords.length,
    );
    if (availableWords.length === 0) {
      console.log("Early return: no available words");
      return;
    }

    // Calculate how many words to underline based on density
    const totalWordsToUnderline = Math.floor(
      (availableWords.length * underlineDensity) / 100,
    );
    console.log(
      "Words to underline:",
      totalWordsToUnderline,
      "Density:",
      underlineDensity,
    );
    if (totalWordsToUnderline === 0) {
      console.log("Early return: totalWordsToUnderline is 0");
      return;
    }

    // Distribute underlines: 60% red, 40% animated
    const redCount = Math.ceil(totalWordsToUnderline * 0.6);
    const animatedCount = totalWordsToUnderline - redCount;

    console.log("Distribution:", {
      redCount,
      animatedCount,
      total: totalWordsToUnderline,
    });

    // Shuffle available words for random distribution
    const shuffledWords = [...availableWords].sort(() => Math.random() - 0.5);

    // Apply red underlines (errors) - take first portion of shuffled words
    const redWords = shuffledWords.slice(0, redCount);
    const redCorrections: TextCorrection[] = [];

    redWords.forEach(({ word, start, end }) => {
      // Check for conflicts with animated underlines (more thorough check)
      let hasConflict = false;

      // Check every position in the range for conflicts with animated underlines
      for (let pos = start; pos < end; pos++) {
        if (editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })) {
          hasConflict = true;
          break;
        }
      }

      if (!hasConflict) {
        const correctionType =
          Math.random() > 0.6
            ? "spelling"
            : Math.random() > 0.5
              ? "grammar"
              : "style";
        redCorrections.push({
          from: start,
          to: end,
          type: correctionType,
          message: `Simulated ${correctionType} issue: "${word}"`,
        });
      }
    });

    // SORT RED CORRECTIONS BY DOCUMENT POSITION for clean start-to-end animation
    redCorrections.sort((a, b) => a.from - b.from);

    // Apply animated underlines - use a hybrid approach
    const animatedRanges: AnimatedUnderlineRange[] = [];

    // First, try to get sentence beginnings (preferred locations)
    const sentenceStartRegex = /(^|[.!?]\s+|[\r\n]+\s*)(\w)/g;
    const sentenceStarts: number[] = [];

    let match;
    while ((match = sentenceStartRegex.exec(text)) !== null) {
      const startPos = match.index + match[1].length;
      sentenceStarts.push(startPos);
    }

    console.log(
      `Found ${sentenceStarts.length} sentence starts for animated underlines`,
    );

    // SORT SENTENCE STARTS BY POSITION (should already be sorted, but ensure it)
    sentenceStarts.sort((a, b) => a - b);

    // Track which sentences already have super underlines to ensure max 1 per sentence
    const sentencesWithSuperUnderlines = new Set<number>();

    // Apply animated underlines to sentence beginnings only (as designed)
    let addedAnimatedCount = 0;
    for (const startPos of sentenceStarts) {
      if (addedAnimatedCount >= animatedCount) break;

      const fixedCharCount = 6;
      let endPos = Math.min(startPos + fixedCharCount, text.length);

      // Adjust to not break in the middle of a word
      while (
        endPos < text.length &&
        /\w/.test(text[endPos]) &&
        !/\s/.test(text[endPos])
      ) {
        endPos++;
      }

      // Make sure we don't go beyond the next sentence
      const nextSentenceIndex = sentenceStarts.findIndex(
        (pos) => pos > startPos,
      );
      if (nextSentenceIndex !== -1) {
        const nextSentenceStart = sentenceStarts[nextSentenceIndex];
        if (endPos > nextSentenceStart) {
          endPos = nextSentenceStart;
        }
      }

      // Ensure we have at least one character
      if (endPos <= startPos) {
        endPos = Math.min(startPos + 1, text.length);
      }

      // Check for conflicts (more thorough check)
      let hasConflict = false;

      // Check every position in the range for conflicts
      for (let pos = startPos; pos < endPos; pos++) {
        if (
          editor.isActive("correction", { from: pos, to: pos + 1 }) ||
          editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })
        ) {
          hasConflict = true;
          break;
        }
      }

      // Also check if this sentence already has a super underline
      const currentSentenceIndex = sentenceStarts.indexOf(startPos);
      if (sentencesWithSuperUnderlines.has(currentSentenceIndex)) {
        hasConflict = true;
      }

      // Also check if this overlaps with any red corrections we're about to apply
      const overlapsWithRed = redCorrections.some(
        (red) =>
          (startPos >= red.from && startPos < red.to) ||
          (endPos > red.from && endPos <= red.to) ||
          (startPos <= red.from && endPos >= red.to),
      );

      if (!hasConflict && !overlapsWithRed) {
        const underlineText = text.substring(startPos, endPos);
        animatedRanges.push({
          from: startPos,
          to: endPos,
          message: `"${underlineText.trim()}"`,
          category: "auto-sentence-start",
        });

        // Mark this sentence as having a super underline
        sentencesWithSuperUnderlines.add(currentSentenceIndex);
        addedAnimatedCount++;
      }
    }

    console.log(
      `Applied ${addedAnimatedCount} animated underlines at sentence beginnings (requested ${animatedCount}, available sentence starts: ${sentenceStarts.length})`,
    );

    // SORT ANIMATED RANGES BY DOCUMENT POSITION for clean start-to-end animation
    animatedRanges.sort((a, b) => a.from - b.from);

    // If we still need more animated underlines, use remaining available words
    if (
      addedAnimatedCount < animatedCount &&
      availableWords.length > redCount
    ) {
      console.log(
        `Super underlines only appear at sentence beginnings. Found ${addedAnimatedCount} sentence starts, requested ${animatedCount}. This is expected behavior.`,
      );
    }

    // SORT ANIMATED RANGES BY DOCUMENT POSITION for clean start-to-end animation
    animatedRanges.sort((a, b) => a.from - b.from);

    // Apply all underlines with staggered timing if enabled
    console.log("About to apply underlines:", {
      redCorrections: redCorrections.length,
      animatedRanges: animatedRanges.length,
      staggered: enableStaggered,
      expectedAnimated: animatedCount,
    });

    if (enableStaggered) {
      // COMBINE BOTH TYPES INTO ONE UNIFIED SET FOR STAGGERED APPLICATION
      // Create a unified array with type information
      const allUnderlines: Array<{
        type: "correction" | "animated";
        data: TextCorrection | AnimatedUnderlineRange;
        position: number;
      }> = [];

      // Add red corrections
      redCorrections.forEach((correction) => {
        allUnderlines.push({
          type: "correction",
          data: correction,
          position: correction.from,
        });
      });

      // Add animated underlines
      animatedRanges.forEach((range) => {
        allUnderlines.push({
          type: "animated",
          data: range,
          position: range.from,
        });
      });

      // Sort the unified array by document position
      allUnderlines.sort((a, b) => a.position - b.position);

      console.log(
        "Applying unified underlines with staggered timing:",
        allUnderlines.map((u) => ({
          type: u.type,
          position: u.position,
          text:
            u.type === "correction"
              ? editorText.substring(u.data.from, u.data.to)
              : editorText.substring(
                  (u.data as AnimatedUnderlineRange).from,
                  (u.data as AnimatedUnderlineRange).to,
                ),
        })),
      );

      // Apply each underline with staggered timing
      for (let i = 0; i < allUnderlines.length; i++) {
        const underline = allUnderlines[i];

        if (underline.type === "correction") {
          // Apply single red correction
          applyCorrections(editor, [underline.data as TextCorrection]);
        } else {
          // Apply single animated underline
          applyAnimatedUnderlines(editor, [
            underline.data as AnimatedUnderlineRange,
          ]);
        }

        // Wait before applying next one (except for the last one)
        if (i < allUnderlines.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, staggerDelay));
        }
      }
    } else {
      // Apply normally (separate batches)
      if (redCorrections.length > 0) {
        console.log("Applying red corrections normally:", redCorrections);
        applyCorrections(editor, redCorrections);
      }
      if (animatedRanges.length > 0) {
        console.log("Applying animated underlines normally:", animatedRanges);
        applyAnimatedUnderlines(editor, animatedRanges);
      }
    }

    console.log(
      `Auto-applied underlines: ${redCorrections.length} red, ${animatedRanges.length} animated (${enableStaggered ? "staggered unified" : "normal"})`,
    );
  }, [
    editor,
    autoUnderlineEnabled,
    underlineDensity,
    findWordPositions,
    enableStaggered,
    staggerDelay,
    applyUnifiedStaggered,
  ]);

  // Modified function to apply corrections with staggered timing
  const handleApplyCorrections = useCallback(async () => {
    if (!editor) return;

    // Get the current editor text to find positions for corrections
    const text = editor.getText();

    // Create corrections based on actual text content
    const exampleCorrections: TextCorrection[] = [];

    // Only create corrections if there's text to correct
    if (text.length > 10) {
      // Get accurate word positions
      const wordPositions = findWordPositions(text);

      // Filter words that don't already have underlines
      const availableWords = wordPositions.filter(({ start, end }) => {
        const hasAnimatedUnderline = editor.isActive("animatedUnderline", {
          from: start,
          to: end,
        });
        return !hasAnimatedUnderline;
      });

      // Apply intelligent word selection for corrections
      const targetWords: Array<{ word: string; start: number; end: number }> =
        [];

      // 1. Target longer words (potential style issues)
      const longWords = availableWords.filter(({ word }) => word.length > 8);
      targetWords.push(
        ...longWords.slice(0, Math.ceil(redUnderlineCount * 0.4)),
      );

      // 2. Target words with common spelling patterns
      const potentialSpellingIssues = availableWords.filter(
        ({ word }) =>
          /[A-Z][a-z]+/.test(word) &&
          !["The", "This", "That", "They", "There", "Then"].includes(word),
      );
      targetWords.push(
        ...potentialSpellingIssues.slice(0, Math.ceil(redUnderlineCount * 0.3)),
      );

      // 3. Target short function words (potential grammar issues)
      const shortWords = availableWords.filter(
        ({ word }) =>
          word.length >= 2 &&
          word.length <= 4 &&
          !["the", "and", "but", "for", "you", "are", "can"].includes(
            word.toLowerCase(),
          ),
      );
      targetWords.push(
        ...shortWords.slice(0, Math.ceil(redUnderlineCount * 0.3)),
      );

      // Remove duplicates and limit to desired count
      const uniqueTargets = Array.from(new Set(targetWords.map((w) => w.start)))
        .map((start) => targetWords.find((w) => w.start === start)!)
        .slice(0, redUnderlineCount);

      // Create corrections for selected words (check for conflicts with animated underlines)
      uniqueTargets.forEach(({ word, start, end }) => {
        // Check for conflicts with animated underlines (more thorough check)
        let hasConflict = false;

        // Check every position in the range for conflicts with animated underlines
        for (let pos = start; pos < end; pos++) {
          if (
            editor.isActive("animatedUnderline", { from: pos, to: pos + 1 })
          ) {
            hasConflict = true;
            break;
          }
        }

        if (!hasConflict) {
          let type: "spelling" | "grammar" | "style" = "spelling";
          let message = `Check spelling of "${word}"`;

          if (word.length > 8) {
            type = "style";
            message = `Consider a simpler alternative to "${word}"`;
          } else if (word.length <= 4) {
            type = "grammar";
            message = `Verify grammar for "${word}"`;
          } else if (/[A-Z]/.test(word[0])) {
            type = "spelling";
            message = `Check capitalization of "${word}"`;
          }

          exampleCorrections.push({
            from: start,
            to: end,
            type,
            message,
          });
        }
      });

      // If we still need more corrections, add some from remaining available words
      if (
        exampleCorrections.length < redUnderlineCount &&
        availableWords.length > exampleCorrections.length
      ) {
        const remaining = availableWords.filter(
          ({ start }) =>
            !exampleCorrections.some((corr) => corr.from === start),
        );

        const additionalNeeded = redUnderlineCount - exampleCorrections.length;
        const additional = remaining.slice(0, additionalNeeded);

        additional.forEach(({ word, start, end }) => {
          exampleCorrections.push({
            from: start,
            to: end,
            type: "spelling",
            message: `Example correction for "${word}"`,
          });
        });
      }
    }

    // If still no corrections, show informative message
    if (exampleCorrections.length === 0) {
      alert(
        "No corrections added. Either type more text in the editor first or remove existing blue/animated underlines from words.",
      );
      return;
    }

    // SORT CORRECTIONS BY DOCUMENT POSITION for clean start-to-end animation
    exampleCorrections.sort((a, b) => a.from - b.from);

    console.log(
      `Adding ${exampleCorrections.length} red underlines with ${enableStaggered ? "staggered" : "normal"} timing (sorted by position)`,
    );

    // Apply corrections to the editor with staggered timing
    await applyUnifiedStaggered(exampleCorrections, []);
  }, [
    editor,
    redUnderlineCount,
    findWordPositions,
    applyUnifiedStaggered,
    enableStaggered,
  ]);

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

  // Function to toggle auto underline simulation
  const handleToggleAutoUnderlines = useCallback(() => {
    setAutoUnderlineEnabled((prev) => {
      const newValue = !prev;
      if (!newValue && editor) {
        // If disabling, clear all underlines
        clearAllCorrections(editor);
        clearAllAnimatedUnderlines(editor);
      } else if (newValue && editor) {
        // If enabling, apply underlines to existing text
        setTimeout(() => applyAutoUnderlines(), 100);
      }
      return newValue;
    });
  }, [editor, applyAutoUnderlines]);

  // Function to clear all underlines
  const handleClearAllUnderlines = useCallback(() => {
    if (!editor) return;
    clearAllCorrections(editor);
    clearAllAnimatedUnderlines(editor);
  }, [editor]);

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

        // Parse markdown to HTML - directly set content with markdown
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

        // Fallback to setting the content directly
        forceUpdateEditorContent(editor, `<p>${markdown}</p>`, () => {
          console.log("Editor content updated with simplest fallback method");
        });
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
            if (markdown.startsWith("#")) {
              markdown = markdown.replace(/^(#+)([^#\s])/, "$1 $2");
              console.log("Fixed heading format in first line");
            }

            // Use the setMarkdownContent helper with properly pre-processed markdown
            setMarkdownContent(markdown);
            console.log("Editor content updated from markdown");

            // After a short delay, process any remaining triple-bracketed content
            setTimeout(() => {
              if (editor) {
                const content = editor.getHTML();
                if (
                  content.includes("[[[") ||
                  content.includes('data-guidance="true"') ||
                  content.includes('data-highlight="true"')
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

  // Function to run automatic spell checking
  const runAutoSpellCheck = useCallback(async () => {
    if (!editor || !autoSpellCheckEnabled || isSpellChecking) return;

    setIsSpellChecking(true);

    try {
      // Get the current text from the editor
      const text = editor.getText();

      // Skip if text is too short
      if (text.length < 3) {
        setIsSpellChecking(false);
        return;
      }

      // Check for spelling errors
      console.log(
        "Running spell check on text:",
        text.substring(0, 100) + "...",
      );
      const spellCheckResults = await checkSpellingEnhanced(text);
      console.log(
        "Spell check found",
        spellCheckResults.length,
        "potential errors:",
        spellCheckResults,
      );

      // Convert spell check results to corrections format
      const corrections: TextCorrection[] = spellCheckResults.map((result) => ({
        from: result.start,
        to: result.end,
        type: "spelling" as const,
        message:
          result.suggestions && result.suggestions.length > 0
            ? `Possible spelling error. Did you mean: ${result.suggestions.slice(0, 3).join(", ")}?`
            : `Possible spelling error: "${result.word}"`,
      }));

      // Filter out corrections that would conflict with existing underlines
      const validCorrections = corrections.filter((correction) => {
        const hasAnimatedUnderline = editor.isActive("animatedUnderline", {
          from: correction.from,
          to: correction.to,
        });

        return !hasAnimatedUnderline;
      });

      // Clear existing spell check corrections first
      clearAllCorrections(editor);

      // Apply new spell check corrections
      if (validCorrections.length > 0) {
        console.log(
          `Auto spell check found ${validCorrections.length} potential errors`,
        );
        applyCorrections(editor, validCorrections);
      }
    } catch (error) {
      console.error("Auto spell check failed:", error);
    } finally {
      setIsSpellChecking(false);
    }
  }, [editor, autoSpellCheckEnabled, isSpellChecking]);

  // Function to manually trigger spell check
  const handleManualSpellCheck = useCallback(async () => {
    if (!editor) return;

    // Clear existing corrections first
    clearAllCorrections(editor);

    // Run spell check
    await runAutoSpellCheck();
  }, [editor, runAutoSpellCheck]);

  // Function to toggle auto spell check
  const handleToggleAutoSpellCheck = useCallback(() => {
    setAutoSpellCheckEnabled((prev) => {
      const newValue = !prev;
      if (!newValue && editor) {
        // If disabling, clear existing spell check corrections
        clearAllCorrections(editor);
      }
      return newValue;
    });
  }, [editor]);

  // Auto spell check effect - only runs when text is actually added
  useEffect(() => {
    if (!autoSpellCheckEnabled || !editor) return;

    const currentTextLength = editorText.length;

    // Only run spell check if text was actually added (not just cursor movement)
    if (currentTextLength > lastTextLength) {
      console.log("Text added, scheduling spell check...");

      // Debounce spell checking to avoid checking on every keystroke
      const timeoutId = setTimeout(() => {
        runAutoSpellCheck();
      }, 1500); // Wait 1.5 seconds after user stops typing

      // Update the last text length
      setLastTextLength(currentTextLength);

      return () => clearTimeout(timeoutId);
    } else {
      // Update last text length even if no spell check is needed
      setLastTextLength(currentTextLength);
    }
  }, [
    editorText,
    autoSpellCheckEnabled,
    runAutoSpellCheck,
    editor,
    lastTextLength,
  ]);

  // Auto underline effect - applies underlines as user types
  useEffect(() => {
    console.log("Auto underline effect triggered", {
      autoUnderlineEnabled,
      hasEditor: !!editor,
      editorTextLength: editorText.length,
    });

    if (!autoUnderlineEnabled || !editor) {
      console.log(
        "Auto underline effect: early return due to disabled or no editor",
      );
      return;
    }

    const currentTextLength = editorText.length;
    const lastLength = lastUnderlineTextLength.current;

    console.log("Auto underline effect: checking conditions", {
      currentTextLength,
      lastLength,
      textAdded: currentTextLength > lastLength,
      hasEnoughText: currentTextLength > 50,
    });

    // Apply underlines when text is added and we have enough words
    if (currentTextLength > lastLength && currentTextLength > 50) {
      console.log("Scheduling auto underlines...", {
        currentTextLength,
        lastLength,
        autoUnderlineEnabled,
      });

      // Update the ref immediately to prevent multiple triggers
      lastUnderlineTextLength.current = currentTextLength;

      // Debounce underline application
      const timeoutId = setTimeout(() => {
        console.log("Executing auto underlines...");
        applyAutoUnderlines();
      }, 800);

      return () => {
        console.log("Clearing auto underline timeout");
        clearTimeout(timeoutId);
      };
    } else {
      console.log(
        "Auto underline effect: conditions not met, not scheduling underlines",
      );
    }
  }, [editorText, autoUnderlineEnabled, editor, applyAutoUnderlines]);

  // If no current document yet, show loading
  if (!currentDocument) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className={`mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent`}
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
            title={`${currentDocument.title} (Staggered)`}
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
            onNewPage={handleNewPage}
            onRenamePage={handleRenamePage}
            onDeletePage={handleDeletePage}
          />

          {/* Add staggered animation controls */}
          <div className="px-4 py-2 flex gap-2 border-b flex-wrap">
            {/* NEW: Staggered Animation Controls */}
            <div className="flex gap-2 items-center bg-indigo-50 px-3 py-1 rounded-lg border">
              <label className="flex items-center gap-1 text-xs font-medium">
                <input
                  type="checkbox"
                  checked={enableStaggered}
                  onChange={(e) => setEnableStaggered(e.target.checked)}
                  className="w-3 h-3"
                />
                Staggered Mode
              </label>
              <span className="text-xs text-gray-400">|</span>
              <label className="text-xs text-gray-600">Delay:</label>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={staggerDelay}
                onChange={(e) => setStaggerDelay(Number(e.target.value))}
                className="w-20"
                disabled={!enableStaggered}
              />
              <span className="text-xs text-gray-500 w-12">
                {staggerDelay}ms
              </span>
            </div>
            <span className="border-l mx-2"></span>

            {/* Auto Underline Simulation Controls */}
            <div className="flex gap-2 items-center bg-purple-50 px-3 py-1 rounded-lg border">
              <label className="flex items-center gap-1 text-xs font-medium">
                <input
                  type="checkbox"
                  checked={autoUnderlineEnabled}
                  onChange={handleToggleAutoUnderlines}
                  className="w-3 h-3"
                />
                Auto Underlines
              </label>
              <span className="text-xs text-gray-400">|</span>
              <label className="text-xs text-gray-600">Density:</label>
              <input
                type="range"
                min="5"
                max="40"
                value={underlineDensity}
                onChange={(e) => setUnderlineDensity(Number(e.target.value))}
                className="w-20"
                disabled={!autoUnderlineEnabled}
              />
              <span className="text-xs text-gray-500 w-8">
                {underlineDensity}%
              </span>
              <button
                onClick={() => {
                  console.log("Manual trigger clicked");
                  applyAutoUnderlines();
                }}
                className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-800 hover:bg-purple-200"
              >
                Apply Now
              </button>
              <button
                onClick={handleClearAllUnderlines}
                className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Clear All
              </button>
            </div>
            <span className="border-l mx-2"></span>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleApplyAnimatedUnderlines}
                className="text-xs px-3 py-1 rounded bg-blue-100 text-blue-800 hover:bg-blue-200"
              >
                Add Super Underlines
              </button>
              <input
                type="range"
                min="1"
                max="20"
                value={animatedUnderlineCount}
                onChange={(e) =>
                  setAnimatedUnderlineCount(Number(e.target.value))
                }
                className="w-24"
              />
              <span className="text-xs text-gray-500">
                {animatedUnderlineCount}
              </span>
              <button
                onClick={handleClearAnimatedUnderlines}
                className="text-xs px-3 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Clear Super Underlines
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleApplyCorrections}
                className="text-xs px-3 py-1 rounded bg-red-100 text-red-800 hover:bg-red-200"
              >
                Add Red Underlines
              </button>
              <input
                type="range"
                min="1"
                max="20"
                value={redUnderlineCount}
                onChange={(e) => setRedUnderlineCount(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-xs text-gray-500">{redUnderlineCount}</span>
              <button
                onClick={handleClearCorrections}
                className="text-xs px-3 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Clear Red Underlines
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleApplyAllUnderlines}
                className="text-xs px-3 py-1 rounded bg-gradient-to-r from-red-100 to-blue-100 text-gray-800 hover:from-red-200 hover:to-blue-200 font-medium"
              >
                Add Both (Unified)
              </button>
            </div>
          </div>
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
          key={`editor-staggered-${currentPage?.id || "default"}`}
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

      {/* Global styles - same as original */}
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

        /* Correction underline styling */
        .ProseMirror .correction-underline {
          position: relative;
          display: inline;
          text-decoration: none !important;
          border-bottom: none !important;
        }

        /* Base underline style - always visible */
        .ProseMirror .correction-underline::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 4px;
          background-color: #e11d48;
          transform-origin: left;
          transform: scaleX(1);
          animation: underlineAnimation 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Animate underline when element is added to DOM */
        .ProseMirror .correction-underline.correction-added::after {
          animation: underlineAnimation 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Hover effect for better visibility */
        .ProseMirror .correction-underline:hover::after {
          height: 2px;
          opacity: 1;
        }

        @keyframes underlineAnimation {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        /* Tooltip styling for correction messages - using ::before to avoid conflict with underline */
        .ProseMirror .correction-underline:hover::before {
          content: attr(data-message);
          position: absolute;
          left: 3px;
          bottom: 100%;
          z-index: 50;
          white-space: nowrap;
          background: #1f2937;
          color: white;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          pointer-events: none;
          transform: translateY(-4px);
          opacity: 1;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Hide tooltip if no message */
        .ProseMirror .correction-underline:not([data-message]):hover::before {
          display: none;
        }

        /* Style different types of corrections with different colors */
        .ProseMirror .correction-underline[data-type="spelling"]::after {
          background-color: #e11d48; /* red for spelling */
        }

        .ProseMirror .correction-underline[data-type="grammar"]::after {
          background-color: #7c3aed; /* purple for grammar */
        }

        .ProseMirror .correction-underline[data-type="style"]::after {
          background-color: #0284c7; /* blue for style */
        }

        /* Animated underline styling with dots - matches the image */
        .ProseMirror .animated-underline {
          position: relative;
          display: inline;
          text-decoration: none !important;
          border-bottom: none !important;
        }

        /* Create container for line and dots */
        .ProseMirror .animated-underline::after {
          content: "";
          position: absolute;
          bottom: -10px; /* Position below the text */
          left: 3px;
          width: 100%;
          height: 0; /* No height needed as we'll use pseudo-elements */
          display: flex;
          align-items: center;
        }

        /* The main pill-shaped line */
        .ProseMirror .animated-underline::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 3px;
          width: 30px; /* Fixed width of 50px */
          height: 3px;
          background-color: #667eea;
          border-radius: 4px;
          transform-origin: left;
          animation: drawLine 0.3s ease-in-out forwards;
          z-index: 5; /* Ensure line appears above any other content */
        }

        /* The dots - using absolute positioning relative to the mark */
        /* First dot */
        .ProseMirror .animated-underline > span::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 35px; /* First dot position after 50px line + 2px gap */
          width: 3px;
          height: 3px;
          background-color: #667eea;
          border-radius: 50%;
          transform: scale(0);
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.3s;
          z-index: 5;
        }

        /* Second dot - using a variable to create offset */
        .ProseMirror .animated-underline > span::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 39px; /* Second dot position after 50px line + 6px gap */
          width: 3px;
          height: 3px;
          background-color: #667eea;
          border-radius: 50%;
          transform: scale(0);
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.4s;
          z-index: 5;
        }

        /* Third dot - using additional element */
        .ProseMirror .animated-underline::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 43px; /* Third dot position after 50px line + 10px gap */
          width: 3px;
          height: 3px;
          background-color: #667eea;
          border-radius: 50%;
          transform: scale(0);
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.5s;
          z-index: 5;
        }

        /* Drawing animation */
        @keyframes drawLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        /* Dot animation */
        @keyframes punctuate {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Tooltip styling for animated underline */
        .ProseMirror .animated-underline:hover .tooltip {
          display: block;
        }

        /* Add tooltip as element */
        .ProseMirror .animated-underline .tooltip {
          display: none;
          position: absolute;
          left: 0;
          bottom: calc(100% + 5px);
          z-index: 52;
          white-space: nowrap;
          background: #1e3a8a;
          color: white;
          font-size: 12px;
          padding: 2px 4px;
          border-radius: 4px;
          pointer-events: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Reset animations for new elements */
        .ProseMirror .animated-underline.animated-added::before {
          animation: drawLine 0.3s ease-in-out forwards;
        }

        .ProseMirror .animated-underline.animated-added > span::before {
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.3s;
        }

        .ProseMirror .animated-underline.animated-added > span::after {
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.4s;
        }

        .ProseMirror .animated-underline.animated-added::after {
          animation: punctuate 0.4s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
