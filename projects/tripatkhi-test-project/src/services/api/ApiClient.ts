import { useNetworkStatus } from '@/hooks/common/useNetworkStatus';
import {
  ApiClientConfig,
  DEFAULT_CONFIG,
  RequestOptions,
  ChatRequest,
  ChatResponse,
  SuggestRequest,
  SuggestResponse,
  GenerateDocumentRequest,
  GenerateDocumentResponse,
  Message,
  RetryOptions,
  DEFAULT_RETRY_OPTIONS,
} from './types';
import {
  ApiError,
  NetworkError,
  TimeoutError,
  createErrorFromResponse,
  isRetryableError,
} from './errors';
import { CancellableOperation } from './CancellableOperation';
import { executeWithRetry } from './retry';

/**
 * Core API client for the application
 * Handles communication with backend API endpoints
 */
export class ApiClient {
  private config: ApiClientConfig;

  /**
   * Create a new API client instance
   * @param config - Client configuration options
   */
  constructor(config: ApiClientConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Make a network request with error handling and optional logging
   * @param url - The URL to request
   * @param method - HTTP method
   * @param data - Optional data to send
   * @param options - Request options
   * @returns Response data
   */
  private async request<T>(
    url: string,
    method: string,
    data?: any,
    options: RequestOptions = {},
  ): Promise<T> {
    // Track the network request for status indicators
    useNetworkStatus.getState().incrementRequests();

    try {
      // Execute the request with retry logic if enabled
      const execute = async (): Promise<T> => {
        try {
          // Prepare URL for Next.js API routes using window.location.origin
          // This ensures we have the correct host regardless of environment
          const origin =
            typeof window !== 'undefined' ? window.location.origin : '';
          const fullUrl = url.startsWith('http') ? url : `${origin}${url}`;

          // Log the URL we're about to fetch
          if (this.config.enableLogging) {
            console.log(`[ApiClient] Preparing to fetch URL: ${fullUrl}`);
          }

          // Prepare request options
          const requestInit: RequestInit = {
            method,
            headers: {
              'Content-Type': 'application/json',
              ...options.headers,
            },
            signal: options.signal,
          };

          // Add request body for non-GET requests
          if (data && method !== 'GET') {
            requestInit.body = JSON.stringify(data);
          }

          // Log request if enabled
          if (this.config.enableLogging) {
            console.log(`[ApiClient] ${method} ${fullUrl}`, { data, options });
          }

          // Create timeout promise if needed
          let timeoutId: NodeJS.Timeout | undefined;
          const timeoutPromise =
            options.timeout || this.config.timeout
              ? new Promise<never>((_, reject) => {
                  timeoutId = setTimeout(() => {
                    reject(new TimeoutError(`Request to ${url} timed out`));
                  }, options.timeout || this.config.timeout);
                })
              : undefined;

          // Execute fetch with optional timeout
          // Log the full URL for debugging
          if (this.config.enableLogging) {
            console.log(`[ApiClient] Request URL: ${fullUrl}`, { requestInit });
          }

          let response;

          try {
            const responsePromise = fetch(fullUrl, requestInit);

            // Race fetch against timeout if specified
            response = await (timeoutPromise
              ? Promise.race([responsePromise, timeoutPromise])
              : responsePromise);
          } catch (fetchError) {
            console.error('[ApiClient] Fetch error:', fetchError);
            throw fetchError;
          } finally {
            // Clear timeout if it was set
            if (timeoutId) clearTimeout(timeoutId);
          }

          // Check for response success
          if (!(response as Response).ok) {
            const error = await createErrorFromResponse(response as Response);
            throw error;
          }

          // Parse response as JSON
          const result = await (response as Response).json();

          // Log response if enabled
          if (this.config.enableLogging) {
            console.log(
              `[ApiClient] Response from ${method} ${fullUrl}:`,
              result,
            );
            console.log(
              '[ApiClient] Response status:',
              (response as Response).status,
            );
            console.log(
              '[ApiClient] Response headers:',
              Object.fromEntries([...(response as Response).headers.entries()]),
            );
          }

          return result as T;
        } catch (error) {
          // Enhance error handling
          if (error instanceof ApiError) {
            throw error;
          } else if (
            error instanceof TypeError &&
            error.message.includes('network')
          ) {
            throw new NetworkError(error.message);
          } else if (error instanceof Error) {
            throw new ApiError(error.message);
          } else {
            throw new ApiError('Unknown error occurred');
          }
        }
      };

      // Execute with retry if enabled in options
      if (options.retry !== false) {
        return await executeWithRetry(execute, options.retry || true);
      } else {
        return await execute();
      }
    } finally {
      // Always decrement the request counter, even if an error occurred
      useNetworkStatus.getState().decrementRequests();
    }
  }

  /**
   * Send a chat request to get a response from the AI
   * @param chatRequest - The chat request parameters
   * @param options - Request options
   * @returns The chat response
   */
  async chat(
    chatRequest: ChatRequest,
    options: RequestOptions = {},
  ): Promise<ChatResponse> {
    // Apply default values from config
    const request: ChatRequest = {
      messages: chatRequest.messages,
      model: chatRequest.model || this.config.defaultModel,
      maxTokens: chatRequest.maxTokens || this.config.defaultMaxTokens,
      temperature: chatRequest.temperature || this.config.defaultTemperature,
      llmEnabled:
        chatRequest.llmEnabled !== undefined ? chatRequest.llmEnabled : true,
    };

    return this.request<ChatResponse>('/api/chat', 'POST', request, options);
  }

  /**
   * Get text suggestions based on current text
   * @param suggestRequest - The suggestion request parameters
   * @param options - Request options
   * @returns Array of suggestion options
   */
  async suggest(
    suggestRequest: SuggestRequest,
    options: RequestOptions = {},
  ): Promise<SuggestResponse> {
    // Apply default values from config
    const request: SuggestRequest = {
      text: suggestRequest.text,
      cursorPosition: suggestRequest.cursorPosition,
      model: suggestRequest.model || this.config.defaultModel,
      maxTokens: suggestRequest.maxTokens || this.config.defaultMaxTokens,
      temperature: suggestRequest.temperature || this.config.defaultTemperature,
      llmEnabled:
        suggestRequest.llmEnabled !== undefined
          ? suggestRequest.llmEnabled
          : true,
    };

    return this.request<SuggestResponse>(
      '/api/suggest',
      'POST',
      request,
      options,
    );
  }

  /**
   * Generate a document from a prompt
   * @param generateRequest - The document generation request parameters
   * @param options - Request options
   * @returns The generated document
   */
  async generateDocument(
    generateRequest: GenerateDocumentRequest,
    options: RequestOptions = {},
  ): Promise<GenerateDocumentResponse> {
    // Apply default values from config
    const request: GenerateDocumentRequest = {
      prompt: generateRequest.prompt,
      model: generateRequest.model || this.config.defaultModel,
      temperature:
        generateRequest.temperature || this.config.defaultTemperature,
      deepWriter: generateRequest.deepWriter || false,
      documentId: generateRequest.documentId,
      useSSE: generateRequest.useSSE || false,
      llmEnabled:
        generateRequest.llmEnabled !== undefined
          ? generateRequest.llmEnabled
          : true,
    };

    return this.request<GenerateDocumentResponse>(
      '/api/generate',
      'POST',
      request,
      options,
    );
  }

  /**
   * Creates a cancellable chat operation
   * @param chatRequest - The chat request parameters
   * @param options - Request options (without signal, which is managed by CancellableOperation)
   * @returns A cancellable operation
   */
  createCancellableChat(
    chatRequest: ChatRequest,
    options: Omit<RequestOptions, 'signal'> = {},
  ): CancellableOperation<ChatResponse> {
    return new CancellableOperation<ChatResponse>((signal) => {
      return this.chat(chatRequest, { ...options, signal });
    });
  }

  /**
   * Creates a cancellable suggest operation
   * @param suggestRequest - The suggestion request parameters
   * @param options - Request options (without signal, which is managed by CancellableOperation)
   * @returns A cancellable operation
   */
  createCancellableSuggest(
    suggestRequest: SuggestRequest,
    options: Omit<RequestOptions, 'signal'> = {},
  ): CancellableOperation<SuggestResponse> {
    return new CancellableOperation<SuggestResponse>((signal) => {
      return this.suggest(suggestRequest, { ...options, signal });
    });
  }

  /**
   * Creates a cancellable document generation operation
   * @param generateRequest - The document generation request parameters
   * @param options - Request options (without signal, which is managed by CancellableOperation)
   * @returns A cancellable operation
   */
  createCancellableGenerateDocument(
    generateRequest: GenerateDocumentRequest,
    options: Omit<RequestOptions, 'signal'> = {},
  ): CancellableOperation<GenerateDocumentResponse> {
    return new CancellableOperation<GenerateDocumentResponse>((signal) => {
      return this.generateDocument(generateRequest, { ...options, signal });
    });
  }

  /**
   * Creates a generic cancellable operation from any function
   * @param fn - The function to execute with cancellation support
   * @returns A cancellable operation
   */
  createCancellableOperation<T>(fn: () => Promise<T>): CancellableOperation<T> {
    const controller = new AbortController();
    const promise = fn().catch((error) => {
      // If this is an AbortError, convert it to a more friendly error
      if (error?.name === 'AbortError') {
        throw new Error('Operation was cancelled');
      }
      throw error;
    });

    return new CancellableOperation<T>((signal) => {
      // If the operation is cancelled, abort the controller
      if (signal) {
        signal.addEventListener('abort', () => controller.abort());
      }
      return promise;
    });
  }
}
