// Main exports for the API client package
export * from "./ApiClient";
export * from "./PromptApiClient";
export * from "./CancellableOperation";
export * from "./errors";
export * from "./retry";
export * from "./types";
export * from "./hooks/useCancellableRequest";

// Export streaming functionality
// Only export StreamingClient and streamingClient directly
import {
  StreamingClient,
  streamingClient,
  formatSSE,
  parseSSE,
} from "./streaming";

// Export the StreamingClient.ts type definitions directly to avoid conflicts
import type {
  StreamEventType,
  StreamEvent,
  ContentEvent,
  ThinkingEvent,
  ProgressEvent as StreamProgressEvent,
  ErrorEvent,
  CompleteEvent,
  StreamEventUnion,
  StreamEventListener,
  StreamController,
  StreamOperation,
} from "./streaming/StreamingClient";

export { StreamingClient, streamingClient, formatSSE, parseSSE };

// Export all types
export type {
  StreamEventType,
  StreamEvent,
  ContentEvent,
  ThinkingEvent,
  StreamProgressEvent,
  ErrorEvent,
  CompleteEvent,
  StreamEventUnion,
  StreamEventListener,
  StreamController,
  StreamOperation,
};

// Export default API client implementation
import { PromptApiClient } from "./PromptApiClient";
export default PromptApiClient;
