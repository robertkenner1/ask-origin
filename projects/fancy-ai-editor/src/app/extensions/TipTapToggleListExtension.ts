import { Node, mergeAttributes } from "@tiptap/core";

const ToggleList = Node.create({
  name: "toggleList",
  group: "block",
  content: "toggleListItem+", // Can only contain toggle list items

  parseHTML() {
    return [{ tag: 'ul[data-type="toggleList"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "ul",
      mergeAttributes(HTMLAttributes, { "data-type": "toggleList" }),
      0,
    ];
  },

  addCommands() {
    return {
      // Type fixing: cast to any to work around TipTap type issues
      toggleToggleList:
        () =>
        ({ commands }: { commands: any }) => {
          return commands.toggleList("toggleList", "toggleListItem");
        },
    } as any;
  },
});

export default ToggleList;
