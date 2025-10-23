import { NextResponse } from "next/server";
import type {
  StreamEvent,
  ThinkingEvent,
  ContentEvent,
  ProgressEvent,
  ErrorEvent,
  CompleteEvent,
} from "../services/api/streaming/StreamingClient";

// Format SSE event
export function formatSSE(event: string, data: any, id?: string): string {
  let message = "";

  // Add event type
  message += `event: ${event}\n`;

  // Add ID if provided
  if (id) {
    message += `id: ${id}\n`;
  }

  // Add data
  message += `data: ${typeof data === "string" ? data : JSON.stringify(data)}\n\n`;

  return message;
}

// Create a streaming response from events
export function createStreamResponse(
  eventsGenerator: AsyncGenerator<any>,
  options: { includeId?: boolean; retry?: number } = {},
): NextResponse {
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      // Send initial ping to keep connection alive
      controller.enqueue(encoder.encode(": ping\n\n"));

      // Process events from the generator
      try {
        for await (const event of eventsGenerator) {
          // Skip if null/undefined
          if (!event) continue;

          // Format the event as SSE
          let eventString;

          if (typeof event === "string") {
            // Raw string events (legacy support)
            eventString = event;
          } else if (event.type) {
            // Structured event object
            eventString = formatSSE(
              event.type,
              event,
              options.includeId ? event.id || `id-${Date.now()}` : undefined,
            );
          } else {
            // Default to 'message' event type
            eventString = formatSSE("message", event);
          }

          // Send the event
          controller.enqueue(encoder.encode(eventString));
        }
      } catch (err) {
        const error = err as Error;
        // Send error event if something fails
        const errorEvent = formatSSE("error", {
          type: "error",
          message: error.message || "Stream error",
          code: error.name || "ERROR",
          timestamp: Date.now(),
        });

        controller.enqueue(encoder.encode(errorEvent));
      } finally {
        // Close the stream
        controller.close();
      }
    },
  });

  // Create response with proper headers
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
      ...(options.retry ? { retry: options.retry.toString() } : {}),
    },
  });
}

/**
 * Create an event stream from Anthropic's streaming response
 * Enhanced version to properly handle extended thinking
 */
export async function* createAnthropicEventStream(
  stream: any, // AnthropicMessageStream type is implicit
  options: {
    includeThinking?: boolean;
    initialStep?: string;
    transformContent?: (content: string) => string;
    deepWriter?: boolean;
  } = {},
): AsyncGenerator<StreamEvent> {
  const {
    includeThinking = false,
    initialStep = "analyzing",
    transformContent = (content) => content,
    deepWriter = false,
  } = options;

  let eventCount = 0;
  let contentBuffer = "";
  let processedContentChunks = new Set<string>(); // Track content chunks we've already processed

  // Create a simple hash function to help with deduplication
  const hashContent = (content: string): string => {
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      hash = (hash << 5) - hash + content.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
  };

  let thinkingBuffer = "";
  let lastProgress: number = 10;
  let lastProgressTime = Date.now();

  // Send initial progress event
  yield {
    type: "progress",
    step: initialStep,
    message:
      initialStep === "analyzing" ? "Analyzing your request..." : "Starting...",
    percentage: lastProgress,
    timestamp: Date.now(),
  } as ProgressEvent;

  // For DeepWriter mode, initialize with predefined pages
  // and switch between them based on content
  let pageIndex = 0;
  const pageIds = ["outline_page", "draft_page", "research_page"];
  let currentPage = pageIds[0];

  // Track content for each page to return in complete event
  const pageContents: Record<string, string> = {
    outline_page: "",
    draft_page: "",
    research_page: "",
  };

  // Track page names for better display
  const pageNames: Record<string, string> = {
    outline_page: "Outline",
    draft_page: "Draft",
    research_page: "Research",
  };

  // Flag to determine if a thinking event has been received
  let receivedExtendedThinking = false;

  // Process the stream events
  try {
    for await (const event of stream) {
      eventCount++;

      // Handle thinking data in content_block_delta events (Claude 3.7+ format)
      if (
        includeThinking &&
        event.type === "content_block_delta" &&
        event.delta?.type === "thinking_delta" &&
        event.delta?.thinking
      ) {
        console.log(
          `🧠 Received thinking data from content_block_delta (${event.delta.thinking.length} characters)`,
        );
        console.log(
          `🧠 Thinking snippet: "${event.delta.thinking.substring(0, 100)}..."`,
        );

        // Send thinking event
        const thinkingEvent: ThinkingEvent = {
          type: "thinking",
          content: event.delta.thinking,
          timestamp: Date.now(),
        };
        console.log(
          "🧠 Emitting thinking event from content_block_delta:",
          thinkingEvent,
        );

        yield thinkingEvent;

        // Accumulate thinking for reference
        thinkingBuffer += event.delta.thinking;
        receivedExtendedThinking = true;
      }

      // Handle explicit thinking events (from extended thinking mode)
      // Note: This is for backward compatibility with older Claude APIs
      if (includeThinking && event.thinking) {
        receivedExtendedThinking = true;

        console.log(
          `🧠 Received thinking data (${event.thinking.length} characters)`,
        );
        console.log(
          `🧠 Thinking snippet: "${event.thinking.substring(0, 100)}..."`,
        );

        // Send thinking event
        const thinkingEvent: ThinkingEvent = {
          type: "thinking",
          content: event.thinking,
          timestamp: Date.now(),
        };
        console.log("🧠 Emitting thinking event:", thinkingEvent);

        yield thinkingEvent;

        // Accumulate thinking for reference
        thinkingBuffer += event.thinking;
      }

      // Handle thinking data in message_delta events (Claude 3 API format)
      if (
        includeThinking &&
        event.type === "message_delta" &&
        event.delta?.thinking
      ) {
        receivedExtendedThinking = true;

        console.log(
          "🧠 Received thinking data from message_delta " +
            `(${event.delta.thinking.length} characters)`,
        );
        console.log(
          `🧠 Thinking snippet from delta: "${event.delta.thinking.substring(0, 100)}..."`,
        );

        // Send thinking event
        const thinkingEvent: ThinkingEvent = {
          type: "thinking",
          content: event.delta.thinking,
          timestamp: Date.now(),
        };
        console.log(
          "🧠 Emitting thinking event from message_delta:",
          thinkingEvent,
        );

        yield thinkingEvent;

        // Accumulate thinking for reference
        thinkingBuffer += event.delta.thinking;
      }

      // Handle content events
      if (
        event.type === "content_block_delta" ||
        (event.delta && event.delta.type === "text_delta")
      ) {
        // Extract text based on event structure
        const text =
          event.delta?.text ||
          (event.delta?.type === "text_delta" ? event.delta.text : "");
        if (!text) continue;

        // Generate a hash for this text chunk to help with deduplication
        const textHash = hashContent(text);

        // Check if we've already processed this exact text chunk
        // This helps prevent duplicate content if the same chunk comes multiple times
        if (processedContentChunks.has(textHash)) {
          console.log(
            `Skipping duplicate text chunk (${text.length} chars, hash: ${textHash}):`,
            text.substring(0, 30),
          );
          continue;
        }

        // Add this chunk's hash to our set of processed chunks
        processedContentChunks.add(textHash);

        // We're no longer using the contentBuffer for accumulation since it seems to cause issues
        // Log what we're processing
        console.log(
          `Processing chunk (${text.length} chars): "${text.substring(0, 30)}${text.length > 30 ? "..." : ""}"`,
        );

        // In DeepWriter mode, we need to send content to appropriate pages
        if (deepWriter) {
          // RADICALLY SIMPLIFIED PAGE PROCESSING TO FIX DUPLICATION ISSUES
          try {
            // Check for a page marker in this specific text chunk
            const pageMarkerRegex = /===PAGE\s+(\d+):\s+([^=]+)===/i;
            const markerMatch = text.match(pageMarkerRegex);

            if (markerMatch) {
              // This chunk contains a page marker - extract information
              const pageNum = parseInt(markerMatch[1], 10);
              const pageName = markerMatch[2].trim();

              // Only process if we have valid information
              if (!isNaN(pageNum) && pageNum > 0 && pageName) {
                // Create new page ID
                const newPageId = `page-${pageNum}`;

                // Update current page
                currentPage = newPageId;

                // Initialize the page content if needed
                if (!pageContents[currentPage]) {
                  pageContents[currentPage] = "";
                }

                // Store the page name
                pageNames[currentPage] = pageName;

                // Add to pageIds array if not already present
                if (!pageIds.includes(currentPage)) {
                  pageIds.push(currentPage);
                }

                console.log(
                  `Detected page marker: Page ${pageNum}: ${pageName}`,
                );
                console.log(`Switched to page: ${currentPage}`);

                // Only add content after the marker
                const markerEndIndex =
                  text.indexOf(markerMatch[0]) + markerMatch[0].length;
                const contentAfterMarker = text.substring(markerEndIndex);

                if (contentAfterMarker.trim()) {
                  // Check if this content is already at the end of the page content
                  // This helps prevent duplication at page boundaries
                  const existingPageContent = pageContents[currentPage] || "";
                  const contentToCheck = contentAfterMarker.slice(
                    0,
                    Math.min(contentAfterMarker.length, 100),
                  );

                  if (existingPageContent.endsWith(contentToCheck)) {
                    console.log(
                      `Content already exists at end of page ${currentPage}, skipping duplicate`,
                    );
                  } else {
                    pageContents[currentPage] += contentAfterMarker;
                    console.log(
                      `Added ${contentAfterMarker.length} chars after marker to ${currentPage}`,
                    );
                  }
                }
              }
            } else {
              // No page marker - add to current page
              // Make sure we have a current page
              if (!currentPage) {
                console.warn("No current page ID set, using default page");
                currentPage = pageIds[0] || "outline_page";
              }

              // Ensure the page exists in our content map
              if (!pageContents[currentPage]) {
                pageContents[currentPage] = "";
                console.log(`Initialized content for page: ${currentPage}`);
              }

              // Check if this content is already at the end of the current page content
              // This helps prevent duplication of content
              const existingPageContent = pageContents[currentPage] || "";
              const contentToCheck = text.slice(0, Math.min(text.length, 100));

              if (existingPageContent.endsWith(contentToCheck)) {
                console.log(
                  `Content already exists at end of page ${currentPage}, skipping duplicate`,
                );
              } else {
                // Add the text to the current page
                pageContents[currentPage] += text;

                // Log content accumulation
                if (text.length > 50) {
                  console.log(
                    `Added ${text.length} chars to ${currentPage}: "${text.substring(0, 20)}...${text.substring(text.length - 20)}"`,
                  );
                } else {
                  console.log(
                    `Added ${text.length} chars to ${currentPage}: "${text}"`,
                  );
                }
              }
            }
          } catch (error) {
            console.error(
              "Error processing content in DeepWriter mode:",
              error,
            );
            // Initialize default page as fallback
            if (!pageContents["outline_page"]) {
              pageContents["outline_page"] = "";
            }
            pageContents["outline_page"] += text;
          }

          // Always send to content with appropriate pageId
          yield {
            type: "content",
            content: transformContent(text),
            pageId: currentPage,
            timestamp: Date.now(),
          } as ContentEvent;
        } else {
          // Regular mode - no pageId
          // Only treat early content as thinking if we haven't received extended thinking
          if (!receivedExtendedThinking && eventCount < 20 && includeThinking) {
            yield {
              type: "thinking",
              content: text,
              timestamp: Date.now(),
            } as ThinkingEvent;
          }

          yield {
            type: "content",
            content: transformContent(text),
            timestamp: Date.now(),
          } as ContentEvent;
        }
      }

      // Handle progress updates (throttled to avoid too many events)
      const now = Date.now();
      if (now - lastProgressTime > 500) {
        lastProgressTime = now;
        lastProgress += 3;
        if (lastProgress > 95) lastProgress = 95;

        yield {
          type: "progress",
          step: "generating",
          message: "Generating document...",
          percentage: lastProgress,
          timestamp: now,
        } as ProgressEvent;
      }
    }

    // Send completion events
    yield {
      type: "progress",
      step: "complete",
      message: "Document ready!",
      percentage: 100,
      timestamp: Date.now(),
    } as ProgressEvent;

    // Try to extract title
    let title = "Generated Document";
    const titleMatch = contentBuffer.match(/"title"\s*:\s*"([^"]+)"/);
    if (titleMatch && titleMatch[1]) {
      title = titleMatch[1];
    }

    // For DeepWriter, prepare pages data for completion
    let pagesData: any[] = [];
    if (deepWriter) {
      // Create pages array with content and names
      pagesData = Object.entries(pageContents)
        .map(([pageId, content]) => {
          // Get the custom page name if available, otherwise use default naming
          let name;

          // First check if we have a stored name from page markers
          if (pageNames[pageId]) {
            name = pageNames[pageId];
          }
          // Otherwise extract from page ID (for legacy support)
          else if (pageId.includes("_")) {
            name = pageId.split("_")[0] || "Page";
            // Capitalize first letter
            name = name.charAt(0).toUpperCase() + name.slice(1);
          }
          // Fallback for page-# format
          else if (pageId.startsWith("page-")) {
            const pageNum = pageId.replace("page-", "");
            name = `Page ${pageNum}`;
          }
          // Default fallback
          else {
            name = "Page";
          }

          // Determine page type from ID
          let type = "custom";
          if (pageId.includes("_")) {
            type = pageId.split("_")[0] || "custom";
          } else if (pageId.startsWith("page-")) {
            // For numeric pages, infer type from page number
            const pageNum = parseInt(pageId.replace("page-", ""));
            if (pageNum === 1) type = "outline";
            else if (pageNum === 2) type = "draft";
            else if (pageNum === 3) type = "research";
          }

          return {
            id: pageId,
            name,
            content: content || "",
            type,
          };
        })
        .filter((page) => page.content.trim().length > 0); // Only include pages with content

      console.log(
        `Completed DeepWriter document with ${pagesData.length} pages:`,
        pagesData.map((p) => `${p.name}: ${p.content.length} chars`),
      );
    }

    yield {
      type: "complete",
      metadata: {
        title,
        contentLength: contentBuffer.length,
        thinkingLength: thinkingBuffer.length,
        hasExtendedThinking: receivedExtendedThinking,
        ...(deepWriter && { pages: pagesData }),
      },
      timestamp: Date.now(),
    } as CompleteEvent;
  } catch (err) {
    const error = err as Error;
    console.error("Error in createAnthropicEventStream:", error);

    // Create error event object
    const errorEvent: ErrorEvent = {
      type: "error",
      message: error.message || "Unknown error",
      code: "STREAM_ERROR",
      timestamp: Date.now(),
    };

    // Create progress error event object
    const progressErrorEvent: ProgressEvent = {
      type: "progress",
      step: "error",
      message: error.message || "Error generating document",
      percentage: 0,
      timestamp: Date.now(),
    };

    // Yield both events
    yield errorEvent;
    yield progressErrorEvent;
  }
}
