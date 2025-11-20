export function processLLMContent(content: string): string {
  let processedContent = content;

  // Process guidance blocks [[[text]]]
  processedContent = processedContent.replace(
    /\[\[\[(.*?)\]\]\]/g,
    (match, content) => {
      const cleanContent = content.trim();
      return `<div data-type="guidance" class="guidance-node" 
          data-content="${cleanContent.replace(/"/g, "&quot;")}">${cleanContent}</div>`;
    },
  );

  // Process list items to ensure they have proper line breaks
  // Match lines starting with "- " and ensure they have proper spacing
  processedContent = processedContent.replace(
    /^- (.*?)$/gm,
    (match, listContent) => {
      return `- ${listContent}\n`;
    },
  );

  return processedContent;
}
