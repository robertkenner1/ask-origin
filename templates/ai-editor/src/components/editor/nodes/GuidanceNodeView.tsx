import React from "react";
import { NodeViewWrapper } from "@tiptap/react";

interface GuidanceNodeViewProps {
  node: {
    attrs: {
      content: string;
    };
  };
  deleteNode: () => void;
  editable?: boolean;
}

export const GuidanceNodeView = ({
  node,
  deleteNode,
  editable = false,
}: GuidanceNodeViewProps) => {
  return (
    <NodeViewWrapper>
      <div
        className="guidance-node"
        contentEditable={false} // This makes content uneditable even in editor
        data-user-editable={editable ? "true" : "false"}
      >
        {node.attrs.content}
        <button
          onClick={deleteNode}
          className="guidance-dismiss"
          title="Dismiss"
        >
          ✕
        </button>
      </div>
    </NodeViewWrapper>
  );
};
