"use client";

import { create } from "zustand";

interface SidebarState {
  // Which sidebar is currently active (0 = orchestra, null = none)
  activeSidebar: number | null;
  // Whether the orchestra pane is open
  isOrchestraPaneOpen: boolean;

  // Actions
  setActiveSidebar: (index: number | null) => void;
  toggleSidebar: (index: number) => void;
  openOrchestraPane: () => void;
  closeOrchestraPane: () => void;
}

/**
 * Store for managing sidebar and orchestra pane state
 * This centralizes the state management instead of using prop drilling
 */
export const useSidebarStore = create<SidebarState>((set) => ({
  activeSidebar: null,
  isOrchestraPaneOpen: false,

  // Set the active sidebar directly
  setActiveSidebar: (index) => {
    set({ activeSidebar: index });
    // Update orchestra pane state based on sidebar state
    if (index === 0) {
      set({ isOrchestraPaneOpen: true });
      // Add CSS class to adjust editor width
      document.documentElement.classList.add("has-orchestra-pane");
    } else {
      set({ isOrchestraPaneOpen: false });
      // Remove CSS class when orchestra pane is closed
      document.documentElement.classList.remove("has-orchestra-pane");
    }
  },

  // Toggle sidebar - if already active, close it, otherwise open it
  toggleSidebar: (index) => {
    set((state) => {
      const newActiveSidebar = state.activeSidebar === index ? null : index;
      const newIsOrchestraPaneOpen = newActiveSidebar === 0;

      // Update CSS class for orchestra pane
      if (newIsOrchestraPaneOpen) {
        document.documentElement.classList.add("has-orchestra-pane");
      } else {
        document.documentElement.classList.remove("has-orchestra-pane");
      }

      return {
        activeSidebar: newActiveSidebar,
        isOrchestraPaneOpen: newIsOrchestraPaneOpen,
      };
    });
  },

  // Open the orchestra pane explicitly (e.g., from X button)
  openOrchestraPane: () => {
    set({
      isOrchestraPaneOpen: true,
      activeSidebar: 0,
    });
    document.documentElement.classList.add("has-orchestra-pane");
  },

  // Close the orchestra pane explicitly (e.g., from X button)
  closeOrchestraPane: () => {
    set({
      isOrchestraPaneOpen: false,
      activeSidebar: null,
    });
    document.documentElement.classList.remove("has-orchestra-pane");
  },
}));

export default useSidebarStore;
