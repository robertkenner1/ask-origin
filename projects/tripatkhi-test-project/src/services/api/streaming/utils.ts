/**
 * Utility functions for working with streams
 */

/**
 * Parse Server-Sent Event message
 */
export function parseSSE(data: string): {
  event?: string;
  data?: string;
  id?: string;
  retry?: number;
} {
  const result: { event?: string; data?: string; id?: string; retry?: number } =
    {};

  const lines = data.split("\n");
  for (const line of lines) {
    if (!line.trim()) continue;

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const field = line.slice(0, colonIndex).trim();
    // Skip initial space after colon if present
    const value = line.slice(colonIndex + 1).replace(/^ /, "");

    if (field === "event") {
      result.event = value;
    } else if (field === "data") {
      result.data = result.data ? `${result.data}\n${value}` : value;
    } else if (field === "id") {
      result.id = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);
      if (!isNaN(retry)) {
        result.retry = retry;
      }
    }
  }

  return result;
}

/**
 * Format SSE event message
 */
export function formatSSE(
  event: string,
  data: any,
  id?: string,
  retry?: number,
): string {
  let message = "";

  // Add event type
  if (event) {
    message += `event: ${event}\n`;
  }

  // Add ID if provided
  if (id) {
    message += `id: ${id}\n`;
  }

  // Add retry if specified
  if (retry) {
    message += `retry: ${retry}\n`;
  }

  // Add data (JSON stringify if needed)
  const dataStr = typeof data === "string" ? data : JSON.stringify(data);

  // Split into multiple data lines for multiline data
  const dataLines = dataStr.split("\n");
  for (const line of dataLines) {
    message += `data: ${line}\n`;
  }

  // End with an extra newline
  message += "\n";

  return message;
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
