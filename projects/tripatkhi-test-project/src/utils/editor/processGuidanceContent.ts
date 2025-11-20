/**
 * Process HTML content to convert triple bracketed text [[[content]]] into guidance node HTML.
 * Used by the editor to transform content as it's loaded or updated.
 */
export function processGuidanceContent(html: string): string {
  try {
    let contentModified = false;
    let newHtml = html;

    // Case 1: Check for triple bracketed content [[[content]]]
    if (html.includes("[[[") && html.includes("]]]")) {
      console.log(
        "Found triple-bracketed content, processing for guidance nodes...",
      );

      // Process the HTML content with regex to find and replace triple bracketed content
      // Using [\s\S]*? pattern to match across newlines, with lazy matching
      const contentRegex = /\[\[\[([\s\S]*?)\]\]\]/g;

      // Replace each triple-bracketed content with a guidance node
      newHtml = newHtml.replace(contentRegex, (match, capturedContent) => {
        console.log(
          `Found triple-bracketed content: "${capturedContent.substring(0, 30)}..."`,
        );
        contentModified = true;

        // Create a guidance node HTML representation
        return `<div data-type="guidance" class="guidance-node" data-content="${capturedContent.replace(/"/g, "&quot;")}">${capturedContent}</div>`;
      });
    }

    // Case 2: Check for pre-processed spans with data-highlight attribute (for backward compatibility)
    if (
      html.includes('class="triple-bracket-content"') ||
      html.includes('data-highlight="true"')
    ) {
      console.log(
        "Found pre-processed guidance spans, converting to guidance nodes...",
      );

      // Regex to find the pre-processed spans, handle multiline content
      const spanRegex =
        /<span class="triple-bracket-content"[^>]*>([\s\S]*?)<\/span>/g;

      // Replace each span with a guidance node
      newHtml = newHtml.replace(spanRegex, (match, capturedContent) => {
        console.log(
          `Found pre-processed span content: "${capturedContent.substring(0, 30)}..."`,
        );
        contentModified = true;

        // Create a guidance node HTML representation
        return `<div data-type="guidance" class="guidance-node" data-content="${capturedContent.replace(/"/g, "&quot;")}">${capturedContent}</div>`;
      });
    }

    // Return the modified content if changed, otherwise return original
    return contentModified ? newHtml : html;
  } catch (error) {
    console.error("Error processing triple-bracketed content:", error);
    return html;
  }
}
