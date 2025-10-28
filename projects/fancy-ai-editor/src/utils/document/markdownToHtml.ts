/**
 * Utility to convert markdown text to HTML
 * Extracted from MarkdownRenderer component for reuse
 */

// Helper function to format inline markdown elements
function formatInline(text: string): string {
  let formatted = text;

  // Bold
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/__([^_]+)__/g, "<strong>$1</strong>");

  // Italic
  formatted = formatted.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  formatted = formatted.replace(/_([^_]+)_/g, "<em>$1</em>");

  // Inline code
  formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");

  return formatted;
}

/**
 * Convert markdown text to HTML
 */
export function markdownToHtml(markdown: string): string {
  // Convert markdown to HTML using a methodical approach
  const lines = markdown.split("\n");
  const htmlParts: string[] = [];

  let inOrderedList = false;
  let inUnorderedList = false;
  let inCodeBlock = false;
  let codeContent = "";
  let currentParagraph = "";

  const flushParagraph = () => {
    if (currentParagraph.trim()) {
      htmlParts.push(`<p>${currentParagraph}</p>`);
      currentParagraph = "";
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = i < lines.length - 1 ? lines[i + 1] : "";

    // Handle headings
    if (line.startsWith("# ")) {
      flushParagraph();
      htmlParts.push(`<h1>${formatInline(line.substring(2))}</h1>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      htmlParts.push(`<h2>${formatInline(line.substring(3))}</h2>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      htmlParts.push(`<h3>${formatInline(line.substring(4))}</h3>`);
      continue;
    }

    // Handle code blocks
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        flushParagraph();
        inCodeBlock = true;
        codeContent = "";
        continue; // Skip the opening ```
      } else {
        inCodeBlock = false;
        htmlParts.push(`<pre><code>${codeContent}</code></pre>`);
        continue; // Skip the closing ```
      }
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // Handle ordered lists (numbered)
    const orderedListMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (orderedListMatch) {
      flushParagraph();

      if (!inOrderedList) {
        htmlParts.push("<ol>");
        inOrderedList = true;
      }

      const listContent = orderedListMatch[2];
      // Process inline formatting within list items
      const formattedListContent = formatInline(listContent);
      htmlParts.push(`<li>${formattedListContent}</li>`);
      continue;
    } else if (inOrderedList && line.trim() === "") {
      htmlParts.push("</ol>");
      inOrderedList = false;
    }

    // Handle unordered lists (bullets)
    const unorderedListMatch = line.match(/^[-*]\s+(.+)$/);
    if (unorderedListMatch) {
      flushParagraph();

      if (!inUnorderedList) {
        htmlParts.push("<ul>");
        inUnorderedList = true;
      }

      const listContent = unorderedListMatch[1];
      // Process inline formatting within list items
      const formattedListContent = formatInline(listContent);
      htmlParts.push(`<li>${formattedListContent}</li>`);
      continue;
    } else if (inUnorderedList && line.trim() === "") {
      htmlParts.push("</ul>");
      inUnorderedList = false;
    }

    // Close any open lists when done with them
    if (
      (inOrderedList || inUnorderedList) &&
      line.trim() === "" &&
      !nextLine.match(/^(\d+)\.\s+/) &&
      !nextLine.match(/^[-*]\s+/)
    ) {
      if (inOrderedList) {
        htmlParts.push("</ol>");
        inOrderedList = false;
      }
      if (inUnorderedList) {
        htmlParts.push("</ul>");
        inUnorderedList = false;
      }
      continue;
    }

    // Handle paragraphs
    if (line.trim() === "") {
      flushParagraph();
    } else if (!inOrderedList && !inUnorderedList) {
      // Process inline formatting
      const formattedLine = formatInline(line);

      if (currentParagraph) {
        currentParagraph += " " + formattedLine;
      } else {
        currentParagraph = formattedLine;
      }

      // If the next line is blank, this paragraph is done
      if (nextLine.trim() === "") {
        flushParagraph();
      }
    }
  }

  // Close any open lists at the end
  if (inOrderedList) {
    htmlParts.push("</ol>");
  }
  if (inUnorderedList) {
    htmlParts.push("</ul>");
  }

  // Make sure any remaining paragraph is added
  flushParagraph();

  return htmlParts.join("");
}
