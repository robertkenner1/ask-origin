import { RetryOptions, DEFAULT_RETRY_OPTIONS } from "./types";
import { isRetryableError } from "./errors";

/**
 * Exponential backoff calculation with jitter
 * Adds randomness to prevent thundering herd problem
 *
 * @param attempt - The current retry attempt (0-based)
 * @param options - Retry configuration options
 * @returns Delay in milliseconds before next retry
 */
export function calculateBackoff(
  attempt: number,
  options: RetryOptions,
): number {
  const { initialDelayMs, backoffFactor } = options;

  // Calculate exponential backoff
  const exponentialDelay = initialDelayMs * Math.pow(backoffFactor, attempt);

  // Add jitter (±20% randomness) to prevent thundering herd
  const jitter = 0.2 * exponentialDelay;
  const min = exponentialDelay - jitter;
  const max = exponentialDelay + jitter;

  return Math.floor(min + Math.random() * (max - min));
}

/**
 * Checks if a request should be retried based on error and configuration
 *
 * @param error - The error that occurred
 * @param attempt - The current retry attempt (0-based)
 * @param options - Retry configuration options
 * @returns Whether the request should be retried
 */
export function shouldRetry(
  error: Error,
  attempt: number,
  options: RetryOptions,
): boolean {
  // Don't retry if we've reached max attempts
  if (attempt >= options.maxRetries) {
    return false;
  }

  // Check if the error is considered retryable
  return isRetryableError(error);
}

/**
 * Execute a function with retry logic
 *
 * @param fn - The async function to execute
 * @param options - Retry configuration options
 * @returns A promise that resolves with the function result or rejects after all retries
 */
export async function executeWithRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions | boolean = true,
): Promise<T> {
  // Normalize options
  const retryOptions: RetryOptions =
    options === true
      ? DEFAULT_RETRY_OPTIONS
      : options === false
        ? { ...DEFAULT_RETRY_OPTIONS, maxRetries: 0 }
        : { ...DEFAULT_RETRY_OPTIONS, ...options };

  let attempt = 0;
  let lastError: Error;

  // Try initial attempt plus retries
  do {
    try {
      // If this isn't the first attempt, delay before retrying
      if (attempt > 0) {
        const delay = calculateBackoff(attempt - 1, retryOptions);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      // Execute the function
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if we should retry
      if (!shouldRetry(lastError, attempt, retryOptions)) {
        break;
      }

      // Log retry attempt if possible
      if (typeof console !== "undefined") {
        console.warn(
          `Request failed, retrying (${attempt + 1}/${retryOptions.maxRetries})...`,
          lastError.message,
        );
      }

      // Increment attempt counter
      attempt++;
    }
  } while (attempt <= retryOptions.maxRetries);

  // If we got here, all retries failed
  throw lastError;
}
