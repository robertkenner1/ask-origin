/**
 * Streaming API exports
 */

// Export the main streaming client
export { StreamingClient } from "./StreamingClient";

// Export a singleton instance of StreamingClient for direct use
import { StreamingClient } from "./StreamingClient";
export const streamingClient = new StreamingClient();

// Export types
export type {
  StreamEventType,
  StreamEvent,
  ContentEvent,
  ThinkingEvent,
  ErrorEvent,
  CompleteEvent,
  StreamEventUnion,
  StreamEventListener,
  StreamController,
  StreamOperation,
} from "./StreamingClient";

// Re-export ProgressEvent with different name to avoid conflict
import { ProgressEvent as StreamProgressEvent } from "./StreamingClient";
export type { StreamProgressEvent };

// Export utility functions from utils
export { formatSSE, parseSSE } from "./utils";
