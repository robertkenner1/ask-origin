import {
  Mark,
  mergeAttributes,
  markInputRule,
  markPasteRule,
} from "@tiptap/core";

// Extension to mark text with correction underlines
export const Correction = Mark.create({
  name: "correction",

  // Specify the HTML attributes and structure
  addOptions() {
    return {
      HTMLAttributes: {
        class: "correction-underline",
      },
    };
  },

  // Define competing marks that can't coexist with this mark
  excludes: "animatedUnderline",

  // Define how the mark is parsed from HTML
  parseHTML() {
    return [
      {
        tag: "span.correction-underline",
      },
      {
        style: "text-decoration-line",
        getAttrs: (value) => {
          return value === "underline" && null;
        },
      },
    ];
  },

  // Define how the mark is rendered to HTML
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  // Add keyboard shortcuts to toggle correction
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-u": () => this.editor.commands.toggleMark(this.name),
    };
  },
});
