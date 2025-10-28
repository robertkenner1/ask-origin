import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SuggestionsState {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

// Create a store for suggestions state
export const useSuggestionsStore = create<SuggestionsState>()(
  immer((set) => ({
    // Default to enabled
    enabled: true,

    // Action to toggle suggestions on/off
    setEnabled: (enabled) =>
      set((state) => {
        state.enabled = enabled;
      }),
  })),
);
