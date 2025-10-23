import { Mark, markPasteRule } from "@tiptap/core";

/**
 * Extension for animated underline with dots mark
 */
export const AnimatedUnderline = Mark.create({
  name: "animatedUnderline",

  // Define attributes to store data like message and category
  addAttributes() {
    return {
      class: {
        default: "animated-added",
      },
      "data-message": {
        default: null,
      },
      "data-category": {
        default: null,
      },
    };
  },

  // Define competing marks that can't coexist with this mark
  excludes: "correction",

  // Define how the mark will be rendered in HTML
  renderHTML({ HTMLAttributes }) {
    const message = HTMLAttributes["data-message"] || "";

    return [
      "span",
      {
        ...HTMLAttributes,
        class: `animated-underline ${HTMLAttributes.class || ""}`,
      },
      [
        "span",
        {},
        0, // Children will be placed inside this inner span
      ],
      [
        "span",
        {
          class: "tooltip",
        },
        message, // Display message in tooltip
      ],
    ];
  },

  // Define how to parse from HTML
  parseHTML() {
    return [
      {
        tag: "span.animated-underline",
      },
    ];
  },

  // Add paste rule to detect and convert pasted text with this mark
  addPasteRules() {
    return [
      markPasteRule({
        find: /\{\{(.*?)\}\}/g, // Match text like {{something}} as a potential syntax
        type: this.type,
      }),
    ];
  },
});
