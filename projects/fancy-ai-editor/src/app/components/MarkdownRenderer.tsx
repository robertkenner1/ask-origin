"use client";

import React from "react";
import { markdownToHtml } from "@/utils/document/markdownToHtml";

// A better Markdown renderer that uses our markdown to HTML utility
export const MarkdownRenderer: React.FC<{ content: string }> = ({
  content,
}) => {
  const htmlContent = React.useMemo(() => {
    return markdownToHtml(content);
  }, [content]);

  return (
    <div
      className="prose prose-sm max-w-none space-y-4"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
