/**
 * Utility for applying correction marks to text in the editor
 */

import { Editor } from "@tiptap/core";

/**
 * Represents a text correction to be applied
 */
export interface TextCorrection {
  /** Starting position of the correction in the text */
  from: number;
  /** Ending position of the correction in the text */
  to: number;
  /** Optional message describing the correction issue */
  message?: string;
  /** Optional type of correction (spelling, grammar, etc.) */
  type?: "spelling" | "grammar" | "style";
}

/**
 * Apply correction marks to specified text ranges in the editor
 *
 * @param editor - The TipTap editor instance
 * @param corrections - Array of correction objects with from/to positions
 * @returns boolean indicating if corrections were successfully applied
 */
export function applyCorrections(
  editor: Editor,
  corrections: TextCorrection[],
): boolean {
  if (!editor || !corrections.length) return false;

  try {
    // Save current cursor position
    const currentSelection = editor.state.selection;

    // Apply each correction
    for (const correction of corrections) {
      // Skip if this range already has an animated underline
      const hasAnimatedUnderline = editor.isActive("animatedUnderline", {
        from: correction.from,
        to: correction.to,
      });

      if (hasAnimatedUnderline) {
        console.log(
          "Skipping correction: another underline already exists in this range",
        );
        continue;
      }

      // Apply the correction mark without changing selection
      editor
        .chain()
        .setTextSelection({ from: correction.from, to: correction.to })
        .setMark("correction", {
          class: "correction-added",
          ...(correction.message ? { "data-message": correction.message } : {}),
          ...(correction.type ? { "data-type": correction.type } : {}),
        })
        .run();
    }

    // Restore original cursor position
    editor.commands.setTextSelection(currentSelection);

    return true;
  } catch (error) {
    console.error("Failed to apply corrections:", error);
    return false;
  }
}

/**
 * Remove all correction marks from the document
 *
 * @param editor - The TipTap editor instance
 * @returns boolean indicating if corrections were successfully cleared
 */
export function clearAllCorrections(editor: Editor): boolean {
  if (!editor) return false;

  try {
    // Select all content
    editor.commands.selectAll();

    // Remove all correction marks
    editor.commands.unsetMark("correction");

    // Deselect
    editor.commands.setTextSelection(editor.state.selection.from);

    return true;
  } catch (error) {
    console.error("Failed to clear corrections:", error);
    return false;
  }
}
