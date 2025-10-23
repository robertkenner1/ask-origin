import { Mark, mergeAttributes } from "@tiptap/core";

export interface NewlyAddedOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    newlyAdded: {
      /**
       * Set a newly added mark
       */
      setNewlyAdded: (attributes?: { addedAt?: string }) => ReturnType;
      /**
       * Toggle a newly added mark
       */
      toggleNewlyAdded: (attributes?: { addedAt?: string }) => ReturnType;
      /**
       * Unset a newly added mark
       */
      unsetNewlyAdded: () => ReturnType;
    };
  }
}

export const NewlyAdded = Mark.create<NewlyAddedOptions>({
  name: "newlyAdded",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      addedAt: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-added-at"),
        renderHTML: (attributes) => {
          if (!attributes.addedAt) {
            return {};
          }
          return {
            "data-added-at": attributes.addedAt,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-newly-added]",
      },
      {
        tag: "span.newly-added-content",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: "newly-added-content",
        "data-newly-added": "true",
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setNewlyAdded:
        (attributes) =>
        ({ commands }) => {
          return commands.setMark(this.name, attributes);
        },
      toggleNewlyAdded:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, attributes);
        },
      unsetNewlyAdded:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});

export default NewlyAdded;
