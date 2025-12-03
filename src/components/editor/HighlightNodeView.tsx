// HighlightNodeView.tsx
import React from "react";
import { NodeViewWrapper } from "@tiptap/react";

interface HighlightNodeViewProps {
  node: {
    attrs: {
      content: string;
    };
  };
  deleteNode: () => void;
  editable?: boolean;
}

export const HighlightNodeView = ({
  node,
  deleteNode,
  editable = false,
}: HighlightNodeViewProps) => {
  return (
    <NodeViewWrapper>
      <div
        className="highlight-node"
        contentEditable={false} // This makes content uneditable even in editor
        data-user-editable={editable ? "true" : "false"}
      >
        {node.attrs.content}
        <button
          onClick={deleteNode}
          className="highlight-dismiss"
          title="Dismiss"
        >
          ✕
        </button>
      </div>
    </NodeViewWrapper>
  );
};
