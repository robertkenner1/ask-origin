/**
 * Utility for applying blue underline marks to text in the editor
 */

import { Editor } from "@tiptap/core";

/**
 * Represents a text range to be underlined in blue
 */
export interface BlueUnderlineRange {
  /** Starting position of the blue underline in the text */
  from: number;
  /** Ending position of the blue underline in the text */
  to: number;
  /** Optional message that appears on hover */
  message?: string;
  /** Optional category type */
  category?: string;
}

/**
 * Apply blue underline marks to specified text ranges in the editor
 *
 * @param editor - The TipTap editor instance
 * @param ranges - Array of range objects with from/to positions
 * @returns boolean indicating if blue underlines were successfully applied
 */
export function applyBlueUnderlines(
  editor: Editor,
  ranges: BlueUnderlineRange[],
): boolean {
  if (!editor || !ranges.length) return false;

  try {
    // Save current cursor position
    const currentSelection = editor.state.selection;

    // Apply each blue underline
    for (const range of ranges) {
      // Skip if this range already has a correction underline
      const hasCorrectionUnderline = editor.isActive("correction", {
        from: range.from,
        to: range.to,
      });

      // Skip if this range already has an animated underline
      const hasAnimatedUnderline = editor.isActive("animatedUnderline", {
        from: range.from,
        to: range.to,
      });

      if (hasCorrectionUnderline || hasAnimatedUnderline) {
        console.log(
          "Skipping blue underline: another underline already exists in this range",
        );
        continue;
      }

      // Apply the blue underline mark without changing selection
      editor
        .chain()
        .setTextSelection({ from: range.from, to: range.to })
        .setMark("blueUnderline", {
          class: "blue-added",
          ...(range.message ? { "data-message": range.message } : {}),
          ...(range.category ? { "data-category": range.category } : {}),
        })
        .run();
    }

    // Restore original cursor position
    editor.commands.setTextSelection(currentSelection);

    return true;
  } catch (error) {
    console.error("Failed to apply blue underlines:", error);
    return false;
  }
}

/**
 * Remove all blue underline marks from the document
 *
 * @param editor - The TipTap editor instance
 * @returns boolean indicating if blue underlines were successfully cleared
 */
export function clearAllBlueUnderlines(editor: Editor): boolean {
  if (!editor) return false;

  try {
    // Select all content
    editor.commands.selectAll();

    // Remove all blue underline marks
    editor.commands.unsetMark("blueUnderline");

    // Deselect
    editor.commands.setTextSelection(editor.state.selection.from);

    return true;
  } catch (error) {
    console.error("Failed to clear blue underlines:", error);
    return false;
  }
}
