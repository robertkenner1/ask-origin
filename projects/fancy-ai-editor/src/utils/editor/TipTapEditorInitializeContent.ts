import { Editor } from "@tiptap/react";

/**
 * Helper function to forcibly update TipTap editor content
 * Bypasses all conditional checks to ensure content is always set
 */
export function forceUpdateEditorContent(
  editor: Editor,
  initialContent: string | undefined,
  onContentUpdated?: () => void,
) {
  if (!editor) return;

  console.log("FORCE UPDATE EDITOR CONTENT:", {
    contentType: typeof initialContent,
    contentLength: initialContent?.length || 0,
    preview: initialContent?.substring(0, 30) || "empty",
    editorId: editor.options.element?.id || "unknown",
  });

  // Update content with preservation of whitespace
  try {
    // Default to empty paragraph if no content
    const contentToSet =
      initialContent && initialContent.length > 0 ? initialContent : "<p></p>";

    // First clear the content
    editor.commands.clearContent();

    // Then set the new content with preservation of whitespace
    editor.commands.setContent(contentToSet, false, {
      preserveWhitespace: "full",
    });

    // Log the result
    console.log("Editor content after FORCE update:", {
      content: editor.getHTML(),
      textContent: editor.getText(),
      length: editor.getText().length,
    });

    // Notify caller if needed
    if (onContentUpdated) {
      setTimeout(onContentUpdated, 50);
    }
  } catch (error) {
    console.error("Error updating editor content:", error);
  }
}
