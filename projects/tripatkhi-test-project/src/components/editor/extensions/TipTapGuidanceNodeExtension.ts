import { Node, RawCommands } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Plugin, PluginKey } from "prosemirror-state";
import { GuidanceNodeView } from "../nodes/GuidanceNodeView";

// Regex pattern for matching [[[content]]]
const GUIDANCE_REGEX = /\[\[\[(.*?)\]\]\]/g;

export const GuidanceNode = Node.create({
  name: "guidance",
  group: "block",
  content: "inline*",
  selectable: false,
  atom: true,
  draggable: true,
  priority: 1000,

  addNodeView() {
    return ReactNodeViewRenderer(({ node, editor, getPos }) => {
      const deleteNode = () => {
        if (typeof getPos === "function") {
          const pos = getPos();
          const nodeSize = node.nodeSize || 1;
          editor.commands.deleteRange({ from: pos, to: pos + nodeSize });
        }
      };

      return GuidanceNodeView({
        node: {
          attrs: {
            content: node.attrs.content || "",
          },
        },
        deleteNode,
        editable: false, // Tell component this not editable
      });
    });
  },

  addAttributes() {
    return {
      content: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="guidance"]',
        getAttrs: (node) => {
          if (typeof node === "string") return {};
          const domNode = node as HTMLElement;
          return { content: domNode.getAttribute("data-content") || "" };
        },
      },
      // For backward compatibility with highlight nodes
      {
        tag: 'div[data-type="highlight"]',
        getAttrs: (node) => {
          if (typeof node === "string") return {};
          const domNode = node as HTMLElement;
          return { content: domNode.getAttribute("data-content") || "" };
        },
      },
      {
        tag: "span.triple-bracket-content",
        getAttrs: (node) => {
          if (typeof node === "string") return {};
          const domNode = node as HTMLElement;
          return { content: domNode.textContent || "" };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      {
        "data-type": "guidance",
        "data-content": HTMLAttributes.content || "",
        class: "guidance-node",
      },
      HTMLAttributes.content || "",
    ];
  },

  addProseMirrorPlugins() {
    const pluginKey = new PluginKey("guidanceInputBlocker");

    return [
      new Plugin({
        key: pluginKey,
        // Prevent [[[text]]] from being typed
        appendTransaction: (transactions, oldState, newState) => {
          // Skip if no transactions or no doc changes
          if (!transactions.length || !transactions.some((tr) => tr.docChanged))
            return null;

          // Get text content to check
          const newContent = newState.doc.textContent;
          const tripleLeftMatch = /\[\[\[/g.exec(newContent);

          if (tripleLeftMatch) {
            // Found triple brackets - replace them
            const tr = newState.tr;

            // Find all nodes with triple brackets
            newState.doc.descendants((node, position) => {
              if (node.isText && node.text) {
                const text = node.text;

                // Only process if it contains the pattern
                if (text.includes("[[[")) {
                  // Replace [[ with just [ and ]]] with ]
                  const newText = text
                    .replace(/\[\[\[/g, "[") // Replace [[[ with [
                    .replace(/\]\]\]/g, "]"); // Replace ]]] with ]

                  // Only update if text changed
                  if (newText !== text) {
                    tr.insertText(newText, position, position + text.length);
                  }
                }
              }
            });

            // Return transaction if we made changes
            if (tr.docChanged) {
              return tr;
            }
          }

          return null;
        },
      }),
    ];
  },

  addCommands() {
    return {
      setGuidance:
        (content: string) =>
        ({ commands }: any) => {
          return commands.insertContent({
            type: this.name,
            attrs: { content },
          });
        },
    } as Partial<RawCommands>;
  },
});
