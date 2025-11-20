/**
 * Represents a cancellable API operation
 * Used to manage asynchronous operations that may need to be cancelled
 */
export class CancellableOperation<T> {
  private controller: AbortController;
  private promise: Promise<T>;
  private _isCancelled: boolean = false;

  /**
   * Create a new cancellable operation
   * @param executor - Function that performs the operation with an abort signal
   */
  constructor(executor: (signal: AbortSignal) => Promise<T>) {
    this.controller = new AbortController();
    this.promise = executor(this.controller.signal);
  }

  /**
   * Cancel the operation
   * This will abort the underlying request if it's in progress
   */
  cancel(): void {
    this._isCancelled = true;
    this.controller.abort();
  }

  /**
   * Check if the operation has been cancelled
   */
  get isCancelled(): boolean {
    return this._isCancelled;
  }

  /**
   * Get the result of the operation
   * @returns A promise that resolves with the operation result or rejects if cancelled
   */
  result(): Promise<T> {
    return this.promise;
  }

  /**
   * Utility to wrap an API method into a cancellable operation
   * @param apiFn - The API method to call
   * @param params - Parameters for the API method
   * @returns A cancellable operation
   */
  static create<P, R>(
    apiFn: (params: P, options: { signal?: AbortSignal }) => Promise<R>,
    params: P,
  ): CancellableOperation<R> {
    return new CancellableOperation<R>((signal) => {
      return apiFn(params, { signal });
    });
  }
}
