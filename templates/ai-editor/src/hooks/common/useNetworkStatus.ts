import { create } from "zustand";

/**
 * Global state to track network requests
 */
interface NetworkState {
  // Number of pending requests
  pendingRequests: number;

  // Derived state for quick access
  isLoading: boolean;

  // Actions to update state
  incrementRequests: () => void;
  decrementRequests: () => void;
}

/**
 * Hook to manage global network request status
 *
 * Tracks pending requests to show loading indicators
 */
export const useNetworkStatus = create<NetworkState>((set) => ({
  pendingRequests: 0,
  isLoading: false,

  incrementRequests: () =>
    set((state) => ({
      pendingRequests: state.pendingRequests + 1,
      isLoading: true,
    })),

  decrementRequests: () =>
    set((state) => {
      const newCount = Math.max(0, state.pendingRequests - 1);
      return {
        pendingRequests: newCount,
        isLoading: newCount > 0,
      };
    }),
}));
