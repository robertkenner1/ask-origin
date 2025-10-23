import React, { useEffect, useState } from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";

export default function ToggleListItemView({
  node,
  updateAttributes,
  editor,
  getPos,
}: NodeViewProps) {
  const { collapsed } = node.attrs;
  const [isEmpty, setIsEmpty] = useState(node.content.size === 0);

  const toggleCollapsed = () => {
    updateAttributes({ collapsed: !collapsed });
  };

  // Check if content changes
  useEffect(() => {
    const checkIfEmpty = () => {
      const currentNode = editor.state.doc.nodeAt(getPos());
      setIsEmpty(currentNode ? currentNode.content.size === 0 : true);
    };

    // Update empty state when editor changes
    editor.on("update", checkIfEmpty);
    return () => {
      editor.off("update", checkIfEmpty);
    };
  }, [editor, getPos]);

  return (
    <NodeViewWrapper
      as="li"
      className={`toggle-list-item ${collapsed ? "collapsed" : "expanded"}`}
      data-empty={isEmpty ? "false" : "true"}
    >
      <button
        className="toggle-arrow"
        contentEditable={false}
        onClick={toggleCollapsed}
        role="button"
        aria-label={collapsed ? "Expand" : "Collapse"}
        tabIndex={0}
        disabled={!isEmpty}
      />

      <NodeViewContent className="toggle-content" />
    </NodeViewWrapper>
  );
}
