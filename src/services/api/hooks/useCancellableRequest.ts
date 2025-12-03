import { useState, useEffect, useCallback, useRef } from "react";
import { CancellableOperation } from "../CancellableOperation";

/**
 * Hook for managing cancellable API requests
 *
 * @param requestFn - Function that creates a cancellable operation
 * @param immediate - Whether to execute the request immediately
 * @param deps - Dependencies that trigger a re-request when changed
 * @returns Object with request state and control functions
 */
export function useCancellableRequest<P, R>(
  requestFn: (params: P) => CancellableOperation<R>,
  immediate = false,
  deps: any[] = [],
) {
  // State for the request
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ref to track current operation
  const operationRef = useRef<CancellableOperation<R> | null>(null);

  // Clean up any ongoing operation
  const cancelOperation = useCallback(() => {
    if (operationRef.current) {
      operationRef.current.cancel();
      operationRef.current = null;
    }
  }, []);

  // Execute the request with given parameters
  const execute = useCallback(
    async (params: P): Promise<R> => {
      // Cancel any ongoing operation
      cancelOperation();

      // Reset state
      setError(null);
      setIsLoading(true);

      // Create and store new operation
      const operation = requestFn(params);
      operationRef.current = operation;

      try {
        // Wait for result
        const result = await operation.result();

        // Only update state if not cancelled
        if (!operation.isCancelled) {
          setData(result);
          setIsLoading(false);
        }

        return result;
      } catch (err) {
        // Only update error state if not cancelled and not an AbortError
        if (
          !operation.isCancelled &&
          !(err instanceof DOMException && err.name === "AbortError")
        ) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }

        throw err;
      }
    },
    [requestFn, cancelOperation],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelOperation();
    };
  }, [cancelOperation]);

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      // Need a dummy param since we don't have real params
      // This is only useful when immediate execution is combined with
      // a request function that doesn't need params
      execute({} as P).catch(() => {
        // Errors are already handled in execute
      });
    }
  }, [immediate, execute, ...deps]);

  return {
    data,
    error,
    isLoading,
    execute,
    cancel: cancelOperation,
  };
}
