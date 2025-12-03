/**
 * Base class for all API errors
 */
export class ApiError extends Error {
  /** HTTP status code (if applicable) */
  status?: number;

  /** Whether this error is retryable */
  retryable: boolean;

  /** Additional error details */
  details?: any;

  constructor(
    message: string,
    options: { status?: number; retryable?: boolean; details?: any } = {},
  ) {
    super(message);
    this.name = "ApiError";
    this.status = options.status;
    this.retryable = options.retryable ?? false;
    this.details = options.details;

    // Ensure proper prototype chain for ES5
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/**
 * Error thrown when there's a network connectivity issue
 */
export class NetworkError extends ApiError {
  constructor(message: string = "Network error occurred", details?: any) {
    super(message, { retryable: true, details });
    this.name = "NetworkError";

    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

/**
 * Error thrown when a request times out
 */
export class TimeoutError extends ApiError {
  constructor(message: string = "Request timed out", details?: any) {
    super(message, { retryable: true, details });
    this.name = "TimeoutError";

    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

/**
 * Error thrown when rate limits are exceeded
 */
export class RateLimitError extends ApiError {
  /** When the rate limit will reset (if available) */
  resetAt?: Date;

  constructor(
    message: string = "Rate limit exceeded",
    options: { status?: number; resetAt?: Date; details?: any } = {},
  ) {
    super(message, {
      status: options.status || 429,
      retryable: true,
      details: options.details,
    });
    this.name = "RateLimitError";
    this.resetAt = options.resetAt;

    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * Error thrown when authentication fails
 */
export class AuthError extends ApiError {
  constructor(message: string = "Authentication failed", details?: any) {
    super(message, { status: 401, retryable: false, details });
    this.name = "AuthError";

    Object.setPrototypeOf(this, AuthError.prototype);
  }
}

/**
 * Error thrown when the server returns a 5xx error
 */
export class ServerError extends ApiError {
  constructor(
    message: string = "Server error occurred",
    options: { status?: number; details?: any } = {},
  ) {
    super(message, {
      status: options.status || 500,
      retryable: true,
      details: options.details,
    });
    this.name = "ServerError";

    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

/**
 * Error thrown when validation fails
 */
export class ValidationError extends ApiError {
  /** Validation issues by field */
  validationIssues?: Record<string, string[]>;

  constructor(
    message: string = "Validation failed",
    options: {
      status?: number;
      validationIssues?: Record<string, string[]>;
      details?: any;
    } = {},
  ) {
    super(message, {
      status: options.status || 400,
      retryable: false,
      details: options.details,
    });
    this.name = "ValidationError";
    this.validationIssues = options.validationIssues;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

/**
 * Factory function to create the appropriate error from a Response object
 */
export async function createErrorFromResponse(
  response: Response,
): Promise<ApiError> {
  let errorMessage = "Unknown error occurred";
  let isRateLimit = false;
  let details: any = undefined;

  // Try to parse error details from JSON
  try {
    const errorData = await response.json();

    // Use more detailed error message if available
    if (errorData.error) {
      errorMessage = errorData.error;
    }

    // Capture any additional details
    details = errorData;

    // Check for rate limit errors
    if (
      errorData.type === "error" &&
      errorData.error?.type === "rate_limit_error"
    ) {
      isRateLimit = true;
      errorMessage =
        errorData.error.message ||
        "Rate limit exceeded. Please try again in a few minutes.";
    }
  } catch (e) {
    // If we can't parse the JSON, use the status text
    errorMessage = response.statusText || errorMessage;
  }

  // Handle specific status codes
  if (response.status === 401 || response.status === 403) {
    return new AuthError(errorMessage, details);
  } else if (response.status === 400 || response.status === 422) {
    return new ValidationError(errorMessage, {
      status: response.status,
      details,
    });
  } else if (response.status === 429 || isRateLimit) {
    // Check for retry-after header
    const retryAfter = response.headers.get("retry-after");
    let resetAt: Date | undefined = undefined;

    if (retryAfter) {
      // Retry-After can be a date string or seconds
      if (isNaN(Number(retryAfter))) {
        resetAt = new Date(retryAfter);
      } else {
        resetAt = new Date(Date.now() + Number(retryAfter) * 1000);
      }
    }

    return new RateLimitError(errorMessage, {
      status: response.status,
      resetAt,
      details,
    });
  } else if (response.status >= 500) {
    return new ServerError(errorMessage, { status: response.status, details });
  } else {
    // Generic API error for other cases
    return new ApiError(errorMessage, { status: response.status, details });
  }
}

/**
 * Helper to determine if an error is retryable
 */
export function isRetryableError(error: Error): boolean {
  if (error instanceof ApiError) {
    return error.retryable;
  }

  // Network errors are generally retryable
  if (error.name === "TypeError" && error.message.includes("network")) {
    return true;
  }

  // Default to not retrying
  return false;
}
