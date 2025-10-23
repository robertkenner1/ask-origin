/**
 * API Client Configuration
 */
export interface ApiClientConfig {
  /** API key for authentication */
  apiKey?: string;
  /** Base URL for API requests */
  baseUrl?: string;
  /** Default model to use for requests */
  defaultModel?: string;
  /** Default maximum tokens to generate */
  defaultMaxTokens?: number;
  /** Default temperature for generation (0.0 - 1.0) */
  defaultTemperature?: number;
  /** Enable logging of requests/responses */
  enableLogging?: boolean;
  /** Default timeout for requests in milliseconds */
  timeout?: number;
}

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: ApiClientConfig = {
  baseUrl: "/api",
  defaultModel: "claude-3-7-sonnet-20250219",
  defaultMaxTokens: 100,
  defaultTemperature: 0.7,
  enableLogging: false,
  timeout: 60000, // 60 seconds
};

/**
 * Request options for all API calls
 */
export interface RequestOptions {
  /** AbortSignal for canceling the request */
  signal?: AbortSignal;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Custom headers to include with the request */
  headers?: Record<string, string>;
  /** Whether to retry on transient errors */
  retry?: boolean | RetryOptions;
}

/**
 * Retry configuration for requests
 */
export interface RetryOptions {
  /** Maximum number of retry attempts */
  maxRetries: number;
  /** Initial delay before first retry (ms) */
  initialDelayMs: number;
  /** Factor to increase delay for each subsequent retry */
  backoffFactor: number;
  /** HTTP status codes that should trigger a retry */
  retryableStatusCodes?: number[];
}

/**
 * Default retry configuration
 */
export const DEFAULT_RETRY_OPTIONS: RetryOptions = {
  maxRetries: 3,
  initialDelayMs: 1000,
  backoffFactor: 2,
  retryableStatusCodes: [408, 429, 502, 503, 504],
};

/**
 * Message type for chat API
 */
export interface Message {
  type: "user" | "assistant";
  content: string;
  id: string;
  timestamp: Date;
  thinking?: string;
}

/**
 * Chat request parameters
 */
export interface ChatRequest {
  /** Array of messages in the conversation */
  messages: Message[];
  /** Model to use for generation */
  model?: string;
  /** Maximum tokens to generate */
  maxTokens?: number;
  /** Temperature for generation (0.0 - 1.0) */
  temperature?: number;
  /** Whether LLM generation is enabled */
  llmEnabled?: boolean;
  /** Optional additional configuration */
  config?: {
    /** Custom system prompt */
    systemPrompt?: string;
    /** Other config options */
    [key: string]: any;
  };
}

/**
 * Chat response from API
 */
export interface ChatResponse {
  /** The assistant's response message */
  message: Message;
}

/**
 * Text suggestion request parameters
 */
export interface SuggestRequest {
  /** The text to generate suggestions for */
  text: string;
  /** Optional cursor position in the text */
  cursorPosition?: number;
  /** Model to use for generation */
  model?: string;
  /** Maximum tokens to generate */
  maxTokens?: number;
  /** Temperature for generation (0.0 - 1.0) */
  temperature?: number;
  /** Whether LLM generation is enabled */
  llmEnabled?: boolean;
}

/**
 * Text suggestion option
 */
export interface SuggestionOption {
  /** Unique identifier for the suggestion */
  id: string;
  /** Short title describing the suggestion */
  title: string;
  /** The actual suggested text */
  text: string;
  /** The type of suggestion */
  type:
    | "continueText"
    | "rewriteStyle"
    | "rewriteAngle"
    | "rewriteTone"
    | "custom";
}

/**
 * Suggestion response from API
 */
export interface SuggestResponse {
  /** Array of suggestion options */
  suggestions: SuggestionOption[];
}

/**
 * Page content for document generation
 */
export interface PageContent {
  type: "outline" | "draft" | "research" | "custom";
  name: string;
  content: string;
  contentType?: "essay" | "prd" | "research" | "resume" | "custom";
}

/**
 * Document generation request parameters
 */
export interface GenerateDocumentRequest {
  /** The prompt to generate a document from */
  prompt: string;
  /** Model to use for generation */
  model?: string;
  /** Temperature for generation (0.0 - 1.0) */
  temperature?: number;
  /** Whether to use DeepWriter mode */
  deepWriter?: boolean;
  /** Document ID for streaming progress updates */
  documentId?: string;
  /** Whether to use server-sent events */
  useSSE?: boolean;
  /** Whether LLM generation is enabled */
  llmEnabled?: boolean;
}

/**
 * Document generation response
 */
export interface GenerateDocumentResponse {
  /** The type of document generated */
  documentType: string;
  /** Document title */
  title: string;
  /** Document content */
  content: string;
  /** Confidence score (0.0 - 1.0) */
  confidence: number;
  /** Model used for generation */
  model?: string;
  /** Array of pages for multi-page documents */
  pages?: PageContent[];
  /** Whether DeepWriter mode was used */
  deepWriter?: boolean;
}

/**
 * Progress event for streaming document generation
 */
export interface ProgressEvent {
  /** Current step in the generation process */
  step: "analyzing" | "processing" | "complete" | "error";
  /** Human-readable message about the current step */
  message: string;
  /** Progress percentage (0-100) */
  percentage: number;
  /** Timestamp for the event */
  timestamp: number;
  /** Document ID for the generation */
  documentId?: string;
}
