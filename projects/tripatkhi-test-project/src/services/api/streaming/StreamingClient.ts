import { ApiClient } from '../ApiClient';
import { ApiClientConfig } from '../types';

// Simple event types
export type StreamEventType =
  | 'content'
  | 'thinking'
  | 'progress'
  | 'error'
  | 'complete';

// Base event interface
export interface StreamEvent {
  type: StreamEventType;
  timestamp: number;
}

// Content event
export interface ContentEvent extends StreamEvent {
  type: 'content';
  content: string;
  pageId?: string;
}

// Thinking event
export interface ThinkingEvent extends StreamEvent {
  type: 'thinking';
  content: string;
}

// Progress event
export interface ProgressEvent extends StreamEvent {
  type: 'progress';
  step:
    | 'analyzing'
    | 'generating'
    | 'processing'
    | 'complete'
    | 'error'
    | 'paused';
  message: string;
  percentage: number;
}

// Alias for exports to avoid ambiguity
export type StreamProgressEvent = ProgressEvent;

// Error event
export interface ErrorEvent extends StreamEvent {
  type: 'error';
  message: string;
  code?: string;
  recoverable?: boolean;
}

// Complete event
export interface CompleteEvent extends StreamEvent {
  type: 'complete';
  metadata?: any;
}

// Union type for all events
export type StreamEventUnion =
  | ContentEvent
  | ThinkingEvent
  | ProgressEvent
  | ErrorEvent
  | CompleteEvent;

// Event listener type
export type StreamEventListener = (event: StreamEventUnion) => void;

// Stream controller interface
export interface StreamController {
  pause: () => void;
  resume: () => void;
  cancel: () => void;
}

// Stream operation interface
export interface StreamOperation<T> {
  result: Promise<T>;
  controller: StreamController;
  on: (type: StreamEventType, listener: StreamEventListener) => void;
  off: (type: StreamEventType, listener: StreamEventListener) => void;
}

// Event emitter for stream events
class EventEmitter {
  private listeners: Map<string, Set<StreamEventListener>> = new Map();

  on(type: StreamEventType, listener: StreamEventListener): void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(listener);
  }

  off(type: StreamEventType, listener: StreamEventListener): void {
    if (this.listeners.has(type)) {
      this.listeners.get(type)!.delete(listener);
    }
  }

  emit(event: StreamEventUnion): void {
    const listeners = this.listeners.get(event.type);
    if (listeners) {
      for (const listener of listeners) {
        try {
          listener(event);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      }
    }
  }
}

// Parse SSE messages
function parseSSE(data: string): { event?: string; data?: string } {
  const result: { event?: string; data?: string } = {};

  const lines = data.split('\n');
  let dataLines: string[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const field = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (field === 'event') {
      result.event = value;
    } else if (field === 'data') {
      // Collect all data lines
      dataLines.push(value);
    }
  }

  // Join data lines to handle multiline data properly
  if (dataLines.length > 0) {
    result.data = dataLines.join('\n');
  }

  return result;
}

// Main streaming client class
export class StreamingClient extends ApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * Create a streaming operation
   */
  private createStreamOperation<T>(
    url: string,
    method: 'GET' | 'POST',
    data: any,
    resultHandler: (events: StreamEventUnion[]) => T,
  ): StreamOperation<T> {
    // EventEmitter to handle events
    const emitter = new EventEmitter();

    // Collected events
    const events: StreamEventUnion[] = [];

    // Stream state
    let paused = false;
    let aborted = false;
    let eventSource: EventSource | null = null;
    let controller = new AbortController();

    // Create URL for GET requests
    const fullUrl =
      method === 'GET' && data
        ? `${url}?${new URLSearchParams(data).toString()}`
        : url;

    // Controller implementation
    const streamController: StreamController = {
      pause: () => {
        if (eventSource && !paused) {
          paused = true;
          eventSource.close();

          // Send paused progress event
          const event: ProgressEvent = {
            type: 'progress',
            timestamp: Date.now(),
            step: 'paused',
            message: 'Stream paused',
            percentage:
              events.filter((e) => e.type === 'progress').length > 0
                ? (
                    events.filter(
                      (e) => e.type === 'progress',
                    ) as ProgressEvent[]
                  ).pop()!.percentage
                : 0,
          };

          events.push(event);
          emitter.emit(event);
        }
      },

      resume: () => {
        if (paused && !aborted) {
          paused = false;
          startStream();

          // Send resuming progress event
          const event: ProgressEvent = {
            type: 'progress',
            timestamp: Date.now(),
            step: 'generating',
            message: 'Stream resumed',
            percentage:
              events.filter((e) => e.type === 'progress').length > 0
                ? (
                    events.filter(
                      (e) => e.type === 'progress',
                    ) as ProgressEvent[]
                  ).pop()!.percentage
                : 0,
          };

          events.push(event);
          emitter.emit(event);
        }
      },

      cancel: () => {
        aborted = true;
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }

        controller.abort();

        // Send error event for cancellation
        const event: ErrorEvent = {
          type: 'error',
          timestamp: Date.now(),
          message: 'Stream cancelled by user',
          code: 'CANCELLED',
          recoverable: false,
        };

        events.push(event);
        emitter.emit(event);
      },
    };

    // Function to start or restart stream
    let startStream: () => void;

    // Result promise that will resolve with final result
    const resultPromise = new Promise<T>((resolve, reject) => {
      // Define the stream function
      startStream = () => {
        // Close existing connection if any
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }

        // Create new abort controller
        controller = new AbortController();

        try {
          if (method === 'GET') {
            // For GET requests, use EventSource
            eventSource = new EventSource(fullUrl);

            // Set up event listeners
            eventSource.addEventListener('open', () => {
              // Send initial progress event
              const event: ProgressEvent = {
                type: 'progress',
                timestamp: Date.now(),
                step: 'analyzing',
                message: 'Starting operation...',
                percentage: 0,
              };

              events.push(event);
              emitter.emit(event);
            });

            // Listen for all event types
            [
              'content',
              'thinking',
              'progress',
              'error',
              'complete',
              'message',
              'message_start',
              'message_delta',
              'message_stop',
              'content_block_start',
              'content_block',
              'content_block_delta',
            ].forEach((eventType) => {
              eventSource!.addEventListener(eventType, (e: MessageEvent) => {
                if (paused || aborted) return;

                try {
                  // Log the raw event data for debugging
                  console.log(`Raw ${eventType} event:`, e.data);

                  // Parse the data more carefully for thinking events
                  if (eventType === 'thinking') {
                    let thinkingContent;
                    try {
                      // Enhanced debug logging to see what we're receiving
                      console.log('Raw thinking event data:', e.data);

                      // First try to parse as JSON
                      const parsedData = JSON.parse(e.data);

                      // Claude 3 API may send thinking data directly or in delta.thinking
                      if (parsedData.delta && parsedData.delta.thinking) {
                        thinkingContent = parsedData.delta.thinking;
                        console.log('Found thinking in delta.thinking:', {
                          length: thinkingContent.length,
                          snippet: thinkingContent.substring(0, 100),
                        });
                      } else if (parsedData.thinking) {
                        // Direct thinking property
                        thinkingContent = parsedData.thinking;
                        console.log('Found direct thinking property:', {
                          length: thinkingContent.length,
                          snippet: thinkingContent.substring(0, 100),
                        });
                      } else if (parsedData.content) {
                        // Fallback to content
                        thinkingContent = parsedData.content;
                        console.log('Using content as thinking:', {
                          length: thinkingContent.length,
                          snippet: thinkingContent.substring(0, 100),
                        });
                      } else {
                        // Use entire parsed data if no specific thinking field found
                        thinkingContent = parsedData;
                        console.log('Using entire parsed data as thinking');
                      }
                    } catch (error) {
                      const parseError = error as Error;
                      // If not valid JSON, use as-is
                      console.log(
                        'Thinking data is not valid JSON, using raw:',
                        {
                          error: parseError.message,
                          rawLength: e.data.length,
                          rawSnippet: e.data.substring(0, 100),
                        },
                      );
                      thinkingContent = e.data;
                    }

                    const event: ThinkingEvent = {
                      type: 'thinking',
                      content:
                        typeof thinkingContent === 'string'
                          ? thinkingContent
                          : JSON.stringify(thinkingContent),
                      timestamp: Date.now(),
                    };

                    console.log('Processed thinking event:', event);
                    events.push(event);
                    emitter.emit(event);
                  } else if (eventType === 'content_block_delta') {
                    try {
                      // Parse the data
                      const parsedData = JSON.parse(e.data);

                      // Handle thinking_delta events specifically
                      if (
                        parsedData.delta &&
                        parsedData.delta.type === 'thinking_delta'
                      ) {
                        console.log(
                          '🧠 Received thinking_delta with ' +
                            `${parsedData.delta.thinking.length} characters`,
                        );

                        const thinkingEvent: ThinkingEvent = {
                          type: 'thinking',
                          content: parsedData.delta.thinking,
                          timestamp: Date.now(),
                        };

                        console.log('🧠 Processing thinking_delta event:');
                        events.push(thinkingEvent);
                        emitter.emit(thinkingEvent);
                        return; // Skip normal processing for thinking deltas
                      }

                      // Handle as normal event if not a thinking delta
                      const event = JSON.parse(e.data) as StreamEventUnion;
                      event.timestamp = Date.now();
                      events.push(event);
                      emitter.emit(event);
                    } catch (error) {
                      console.error(
                        'Error processing content_block_delta event:',
                        error,
                      );
                      // Fall back to normal handling
                      try {
                        const event = JSON.parse(e.data) as StreamEventUnion;
                        event.timestamp = Date.now();
                        events.push(event);
                        emitter.emit(event);
                      } catch (e) {
                        console.error(
                          'Failed to process content_block_delta as fallback:',
                          e,
                        );
                      }
                    }
                  } else if (
                    eventType === 'message' ||
                    eventType === 'message_start' ||
                    eventType === 'message_stop'
                  ) {
                    // Special handling for message and message_start events
                    try {
                      const parsedData = JSON.parse(e.data);
                      console.log(
                        `Parsed ${eventType} event data:`,
                        parsedData,
                      );

                      // Check for thinking data in message
                      if (parsedData.message && parsedData.message.thinking) {
                        const thinkingContent = parsedData.message.thinking;
                        console.log('Found thinking in message:', {
                          length: thinkingContent.length,
                          snippet: thinkingContent.substring(0, 100),
                        });

                        const event: ThinkingEvent = {
                          type: 'thinking',
                          content: thinkingContent,
                          timestamp: Date.now(),
                        };

                        events.push(event);
                        emitter.emit(event);
                      }

                      // Handle usage data for tracking
                      if (parsedData.usage) {
                        console.log('Usage data received:', parsedData.usage);
                      }
                    } catch (error) {
                      console.error(
                        `Error processing ${eventType} event:`,
                        error,
                      );
                    }
                  } else if (eventType === 'content_block_start') {
                    // Special handling for content_block_start events
                    try {
                      const parsedData = JSON.parse(e.data);
                      console.log(
                        'Parsed content_block_start event data:',
                        parsedData,
                      );

                      // Check for thinking data in content_block
                      if (
                        parsedData.content_block &&
                        parsedData.content_block.thinking
                      ) {
                        const thinkingContent =
                          parsedData.content_block.thinking;
                        console.log('Found thinking in content_block:', {
                          length: thinkingContent.length,
                          snippet: thinkingContent.substring(0, 100),
                        });

                        const event: ThinkingEvent = {
                          type: 'thinking',
                          content: thinkingContent,
                          timestamp: Date.now(),
                        };

                        events.push(event);
                        emitter.emit(event);
                      }
                    } catch (error) {
                      console.error(
                        'Error processing content_block_start event:',
                        error,
                      );
                    }
                  } else {
                    // Handle other event types normally
                    const event = JSON.parse(e.data) as StreamEventUnion;
                    event.timestamp = Date.now();

                    // Log the parsed event for debugging
                    console.log(`Parsed ${eventType} event:`, event);

                    events.push(event);
                    emitter.emit(event);
                  }

                  // Handle completion
                  if (eventType === 'complete') {
                    if (eventSource) {
                      eventSource.close();
                      eventSource = null;
                    }

                    resolve(resultHandler(events));
                  }

                  // Handle error
                  if (eventType === 'error') {
                    // Create proper error event
                    const errorEvent: ErrorEvent = {
                      type: 'error',
                      message: 'Error occurred during streaming',
                      timestamp: Date.now(),
                    };

                    if (eventSource) {
                      eventSource.close();
                      eventSource = null;
                    }

                    if (!errorEvent.recoverable) {
                      reject(new Error(errorEvent.message));
                    }
                  }
                } catch (error) {
                  console.error('Error processing event:', error);
                }
              });
            });

            // Handle generic message event as fallback - enhanced to detect thinking events
            eventSource.addEventListener('message', (e: MessageEvent) => {
              if (paused || aborted) return;

              try {
                // Log all raw messages for debugging
                console.log('Raw message event:', e.data);

                const parsed = parseSSE(e.data);
                if (parsed.data) {
                  // Try to determine if this is a thinking event that wasn't properly typed
                  let parsedData: any = undefined;
                  try {
                    parsedData = JSON.parse(parsed.data);

                    // If this looks like a thinking event but wasn't tagged as one
                    if (
                      parsedData.type === 'thinking' ||
                      parsed.data.includes('thinking') ||
                      parsedData.content?.includes('thinking')
                    ) {
                      console.log(
                        'Detected thinking data in generic message:',
                        parsedData,
                      );

                      // Handle as thinking event
                      const thinkingEvent: ThinkingEvent = {
                        type: 'thinking',
                        content: parsedData.content || parsed.data,
                        timestamp: Date.now(),
                      };

                      events.push(thinkingEvent);
                      emitter.emit(thinkingEvent);
                      return;
                    }
                  } catch (error) {
                    // Not valid JSON, continue with normal processing
                  }

                  // Normal content handling
                  const event = {
                    type: 'content',
                    timestamp: Date.now(),
                    content: parsed.data,
                  } as ContentEvent;

                  events.push(event);
                  emitter.emit(event);
                }
              } catch (error) {
                console.error('Error processing message event:', error);
              }
            });

            // Handle connection error
            eventSource.addEventListener('error', (e) => {
              console.error('EventSource error:', e);

              if (eventSource) {
                eventSource.close();
                eventSource = null;
              }

              if (!paused && !aborted) {
                const errorEvent: ErrorEvent = {
                  type: 'error',
                  timestamp: Date.now(),
                  message: 'Connection error',
                  code: 'CONNECTION_ERROR',
                  recoverable: false,
                };

                events.push(errorEvent);
                emitter.emit(errorEvent);

                reject(new Error('Connection error'));
              }
            });
          } else {
            // For POST requests, use fetch with streaming
            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'text/event-stream',
              },
              body: JSON.stringify(data),
              signal: controller.signal,
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error: ${response.status}`);
                }

                if (!response.body) {
                  throw new Error('Response body is null');
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = '';

                // Send initial progress event
                const progressEvent: ProgressEvent = {
                  type: 'progress',
                  timestamp: Date.now(),
                  step: 'analyzing',
                  message: 'Starting operation...',
                  percentage: 0,
                };

                events.push(progressEvent);
                emitter.emit(progressEvent);

                // Process stream chunks
                function processChunk(): Promise<void> {
                  if (paused || aborted) {
                    return Promise.resolve();
                  }

                  return reader
                    .read()
                    .then(({ done, value }) => {
                      if (done) {
                        // If no complete event was received, create one
                        if (!events.some((e) => e.type === 'complete')) {
                          const completeEvent: CompleteEvent = {
                            type: 'complete',
                            timestamp: Date.now(),
                          };

                          events.push(completeEvent);
                          emitter.emit(completeEvent);
                        }

                        resolve(resultHandler(events));
                        return;
                      }

                      // Decode the chunk and add to buffer
                      const chunk = decoder.decode(value, { stream: true });
                      buffer += chunk;

                      // Process complete SSE messages
                      const messages = buffer.split('\n\n');
                      buffer = messages.pop() || '';

                      for (const message of messages) {
                        if (message.trim()) {
                          try {
                            const parsed = parseSSE(message);

                            if (parsed.event && parsed.data) {
                              // Special handling for thinking events
                              if (parsed.event === 'thinking') {
                                let thinkingContent;
                                try {
                                  // Enhanced debug logging for thinking events
                                  console.log(
                                    'Raw thinking event data (POST):',
                                    parsed.data,
                                  );

                                  const parsedData = JSON.parse(parsed.data);

                                  // Claude 3 API may send thinking data directly or in delta.thinking
                                  if (
                                    parsedData.delta &&
                                    parsedData.delta.thinking
                                  ) {
                                    thinkingContent = parsedData.delta.thinking;
                                    console.log(
                                      'Found thinking in delta.thinking (POST):',
                                      {
                                        length: thinkingContent.length,
                                        snippet: thinkingContent.substring(
                                          0,
                                          100,
                                        ),
                                      },
                                    );
                                  } else if (parsedData.thinking) {
                                    // Direct thinking property
                                    thinkingContent = parsedData.thinking;
                                    console.log(
                                      'Found direct thinking property (POST):',
                                      {
                                        length: thinkingContent.length,
                                        snippet: thinkingContent.substring(
                                          0,
                                          100,
                                        ),
                                      },
                                    );
                                  } else if (parsedData.content) {
                                    // Fallback to content
                                    thinkingContent = parsedData.content;
                                    console.log(
                                      'Using content as thinking (POST):',
                                      {
                                        length: thinkingContent.length,
                                        snippet: thinkingContent.substring(
                                          0,
                                          100,
                                        ),
                                      },
                                    );
                                  } else {
                                    // Use entire parsed data if no specific thinking field found
                                    thinkingContent = parsedData;
                                    console.log(
                                      'Using entire parsed data as thinking (POST)',
                                    );
                                  }
                                } catch (error) {
                                  const parseError = error as Error;
                                  // If not valid JSON, use as-is
                                  console.log(
                                    'Thinking data is not valid JSON, using raw (POST):',
                                    {
                                      error: parseError.message,
                                      rawLength: parsed.data.length,
                                      rawSnippet: parsed.data.substring(0, 100),
                                    },
                                  );
                                  thinkingContent = parsed.data;
                                }

                                const event: ThinkingEvent = {
                                  type: 'thinking',
                                  content:
                                    typeof thinkingContent === 'string'
                                      ? thinkingContent
                                      : JSON.stringify(thinkingContent),
                                  timestamp: Date.now(),
                                };

                                console.log(
                                  'Processed thinking event (POST):',
                                  event,
                                );
                                events.push(event);
                                emitter.emit(event);
                              } else {
                                // Parse the event data for other event types
                                const eventData = JSON.parse(parsed.data);
                                const event = {
                                  ...eventData,
                                  type: parsed.event,
                                  timestamp: Date.now(),
                                } as StreamEventUnion;

                                events.push(event);
                                emitter.emit(event);
                              }
                            }
                          } catch (error) {
                            console.error('Error processing message:', error);
                          }
                        }
                      }

                      // Continue reading
                      return processChunk();
                    })
                    .catch((err) => {
                      const error = err as Error;
                      if (error.name === 'AbortError' || paused || aborted) {
                        return;
                      }

                      const errorEvent: ErrorEvent = {
                        type: 'error',
                        timestamp: Date.now(),
                        message: error.message || 'Stream error',
                        code: 'STREAM_ERROR',
                        recoverable: false,
                      };

                      events.push(errorEvent);
                      emitter.emit(errorEvent);

                      reject(error);
                    });
                }

                // Start processing
                return processChunk();
              })
              .catch((err) => {
                const error = err as Error;
                if (error.name === 'AbortError' || paused || aborted) {
                  return;
                }

                const errorEvent: ErrorEvent = {
                  type: 'error',
                  timestamp: Date.now(),
                  message: error.message || 'Request error',
                  code: 'REQUEST_ERROR',
                  recoverable: false,
                };

                events.push(errorEvent);
                emitter.emit(errorEvent);

                reject(error);
              });
          }
        } catch (err) {
          const error = err as Error;
          const errorEvent: ErrorEvent = {
            type: 'error',
            timestamp: Date.now(),
            message: error.message || 'Setup error',
            code: 'SETUP_ERROR',
            recoverable: false,
          };

          events.push(errorEvent);
          emitter.emit(errorEvent);

          reject(error);
        }
      };

      // Start the stream
      startStream();
    });

    // Create and return the operation
    return {
      result: resultPromise,
      controller: streamController,
      on: (type, listener) => emitter.on(type, listener),
      off: (type, listener) => emitter.off(type, listener),
    };
  }

  /**
   * Stream chat messages
   */
  streamChat(chatVars: any, role: string = 'assistant'): StreamOperation<any> {
    const messages = [...chatVars.messages];

    // Format request data
    const requestData = {
      messages,
      config: {
        systemPrompt: chatVars.systemPrompt,
        thinking: chatVars.thinking,
      },
      stream: true,
      role,
    };

    // Create the streaming operation
    return this.createStreamOperation(
      '/api/stream/chat',
      'POST',
      requestData,
      (events) => {
        // Extract content from events
        const contentEvents = events.filter(
          (e) => e.type === 'content',
        ) as ContentEvent[];
        const content = contentEvents.map((e) => e.content).join('');

        // Return final result
        return {
          message: {
            id: Date.now().toString(),
            content,
            type: 'assistant',
            timestamp: new Date(),
          },
        };
      },
    );
  }

  /**
   * Stream document generation
   */
  streamDocumentGeneration(
    vars: any,
    variant: string = 'default',
  ): StreamOperation<any> {
    // Format request data with thinking parameter
    const requestData = {
      prompt: vars.topic,
      topic: vars.topic, // Include both for backward compatibility
      deepWriter: vars.deepWriter,
      style: vars.style || 'balanced',
      length: vars.length || 'medium',
      stream: true,
      variant,
      // Pass thinking configuration directly to API
      thinking: vars.thinking,
    };

    // Create the streaming operation
    return this.createStreamOperation(
      '/api/stream/generate',
      'POST',
      requestData,
      (events) => {
        // Process response based on document type
        if (vars.deepWriter) {
          // For multi-page documents, organize content by page
          const pageContent: Record<string, string> = {};

          // Extract content by page ID
          const contentEvents = events.filter(
            (e) => e.type === 'content',
          ) as ContentEvent[];
          for (const event of contentEvents) {
            if (event.pageId) {
              const pageId = event.pageId;
              pageContent[pageId] = (pageContent[pageId] || '') + event.content;
            }
          }

          // Find document title from complete event
          const completeEvent = events.find(
            (e) => e.type === 'complete',
          ) as CompleteEvent;
          const title = completeEvent?.metadata?.title || 'Generated Document';

          // Construct pages from collected content
          const pages = Object.entries(pageContent).map(([pageId, content]) => {
            const [type = 'custom'] = pageId.split('_');
            const name = type.charAt(0).toUpperCase() + type.slice(1);

            return {
              type,
              name,
              content,
              contentType: 'custom',
            };
          });

          // Return the multi-page document
          return {
            title,
            pages,
            deepWriter: true,
          };
        } else {
          // For single-page documents, combine all content
          const contentEvents = events.filter(
            (e) => e.type === 'content',
          ) as ContentEvent[];
          const content = contentEvents.map((e) => e.content).join('');

          // Find document title from complete event
          const completeEvent = events.find(
            (e) => e.type === 'complete',
          ) as CompleteEvent;
          const title = completeEvent?.metadata?.title || 'Generated Document';

          // Return the single-page document
          return {
            title,
            content,
            deepWriter: false,
          };
        }
      },
    );
  }
}
