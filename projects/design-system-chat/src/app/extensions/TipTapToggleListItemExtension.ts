import { Node, mergeAttributes } from "@tiptap/core";

const ToggleListItem = Node.create({
  name: "toggleListItem",
  defining: true,

  // Attributes to track collapsed state
  addAttributes() {
    return {
      collapsed: {
        default: false,
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("collapsed") === "true",
        renderHTML: (attributes) => ({ collapsed: attributes.collapsed }),
      },
    };
  },

  parseHTML() {
    return [{ tag: `li[data-type="${this.name}"]`, priority: 51 }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "li",
      mergeAttributes(HTMLAttributes, { "data-type": this.name }),
      0,
    ];
  },

  // Support common list keyboard interactions
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
    };
  },
});

export default ToggleListItem;
