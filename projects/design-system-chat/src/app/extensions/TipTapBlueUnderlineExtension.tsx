import { Mark, mergeAttributes } from "@tiptap/core";

// Extension to mark text with blue underlines
export const BlueUnderline = Mark.create({
  name: "blueUnderline",

  // Specify the HTML attributes and structure
  addOptions() {
    return {
      HTMLAttributes: {
        class: "blue-underline",
      },
    };
  },

  // Define competing marks that can't coexist with this mark
  excludes: "correction animatedUnderline",

  // Define how the mark is parsed from HTML
  parseHTML() {
    return [
      {
        tag: "span.blue-underline",
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

  // Add keyboard shortcuts to toggle blue underline
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-b": () => this.editor.commands.toggleMark(this.name),
    };
  },
});
