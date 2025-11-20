/**
 * Utility for applying animated underline marks with punctuating dots to text in the editor
 */

import { Editor } from "@tiptap/core";

/**
 * Represents a text range to be underlined with animated style
 */
export interface AnimatedUnderlineRange {
  /** Starting position of the animated underline in the text */
  from: number;
  /** Ending position of the animated underline in the text */
  to: number;
  /** Optional message that appears on hover */
  message?: string;
  /** Optional category type */
  category?: string;
}

/**
 * Apply animated underline marks to specified text ranges in the editor
 *
 * @param editor - The TipTap editor instance
 * @param ranges - Array of range objects with from/to positions
 * @returns boolean indicating if animated underlines were successfully applied
 */
export function applyAnimatedUnderlines(
  editor: Editor,
  ranges: AnimatedUnderlineRange[],
): boolean {
  if (!editor || !ranges.length) return false;

  try {
    // Save current cursor position
    const currentSelection = editor.state.selection;

    // Apply each animated underline
    for (const range of ranges) {
      // Skip if this range already has other underlines
      const hasOtherUnderline = editor.isActive("correction", {
        from: range.from,
        to: range.to,
      });

      if (hasOtherUnderline) {
        console.log(
          "Skipping animated underline: another underline already exists in this range",
        );
        continue;
      }

      // Apply the animated underline mark without changing selection
      editor
        .chain()
        .setTextSelection({ from: range.from, to: range.to })
        .setMark("animatedUnderline", {
          class: "animated-added",
          ...(range.message ? { "data-message": range.message } : {}),
          ...(range.category ? { "data-category": range.category } : {}),
        })
        .run();
    }

    // Restore original cursor position
    editor.commands.setTextSelection(currentSelection);

    return true;
  } catch (error) {
    console.error("Failed to apply animated underlines:", error);
    return false;
  }
}

/**
 * Remove all animated underline marks from the document
 *
 * @param editor - The TipTap editor instance
 * @returns boolean indicating if animated underlines were successfully cleared
 */
export function clearAllAnimatedUnderlines(editor: Editor): boolean {
  if (!editor) return false;

  try {
    // Select all content
    editor.commands.selectAll();

    // Remove all animated underline marks
    editor.commands.unsetMark("animatedUnderline");

    // Deselect
    editor.commands.setTextSelection(editor.state.selection.from);

    return true;
  } catch (error) {
    console.error("Failed to clear animated underlines:", error);
    return false;
  }
}
