"use client";

import { create } from "zustand";

// Animation variants for framer-motion
export const sidebarAnimationVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const orchestraPaneVariants = {
  closed: {
    width: 0,
    opacity: 0,
    transition: {
      width: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  open: {
    width: 400,
    opacity: 1,
    transition: {
      width: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

// Add new pane variants for different tools
export const proofreaderPaneVariants = {
  closed: {
    width: 0,
    opacity: 0,
    transition: {
      width: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  open: {
    width: 350,
    opacity: 1,
    transition: {
      width: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.3,
        delay: 0.15,
      },
    },
  },
};

export const miniPaneVariants = {
  closed: {
    width: 0,
    opacity: 0,
    transition: {
      width: {
        type: "spring",
        stiffness: 500,
        damping: 50,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
  open: {
    width: 280,
    opacity: 1,
    transition: {
      width: {
        type: "spring",
        stiffness: 500,
        damping: 50,
      },
      opacity: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
};

// Define pane types and their configurations
export type PaneType =
  | "orchestra"
  | "proofreader"
  | "plagiarism"
  | "aidetector"
  | null;

export interface PaneConfig {
  type: PaneType;
  width: number;
  variants: any;
  component: string;
  behavior: "chat" | "analysis" | "mini" | "overlay";
}

// Agent label configuration for the 'labels' variant
export interface AgentLabel {
  id: number;
  name: string;
  type: PaneType;
}

export const AGENT_LABELS: AgentLabel[] = [
  { id: 0, name: "Assistant", type: "orchestra" },
  { id: 1, name: "Grammarly", type: "proofreader" },
  { id: 2, name: "Plagiarism", type: "plagiarism" },
  { id: 3, name: "AI Detector", type: "aidetector" },
];

export const PANE_CONFIGS: Record<number, PaneConfig> = {
  0: {
    type: "orchestra",
    width: 400,
    variants: orchestraPaneVariants,
    component: "OrchestraPane",
    behavior: "chat",
  },
  1: {
    type: "proofreader",
    width: 350,
    variants: proofreaderPaneVariants,
    component: "ProofreaderPane",
    behavior: "analysis",
  },
  2: {
    type: "plagiarism",
    width: 280,
    variants: miniPaneVariants,
    component: "PlagiarismPane",
    behavior: "mini",
  },
  3: {
    type: "aidetector",
    width: 280,
    variants: miniPaneVariants,
    component: "AiDetectorPane",
    behavior: "mini",
  },
};

interface SidebarState {
  // Which sidebar is currently active (0 = orchestra, null = none)
  activeSidebar: number | null;
  // Whether any pane is open
  isPaneOpen: boolean;
  // Current pane type and configuration
  currentPaneConfig: PaneConfig | null;
  // Animation state tracking
  isAnimating: boolean;
  // Behavior variants - now includes 'labels', 'pinned' and 'tooltips'
  paneMode:
    | "normal"
    | "compact"
    | "overlay"
    | "floating"
    | "labels"
    | "pinned"
    | "tooltips";
  // Whether the sidebar is expanded (only relevant for 'labels' and 'pinned' modes)
  isSidebarExpanded: boolean;

  // Actions
  setActiveSidebar: (index: number | null) => void;
  toggleSidebar: (index: number) => void;
  openPane: (
    index: number,
    mode?:
      | "normal"
      | "compact"
      | "overlay"
      | "floating"
      | "labels"
      | "pinned"
      | "tooltips",
  ) => void;
  closePane: () => void;
  setIsAnimating: (animating: boolean) => void;
  setPaneMode: (
    mode:
      | "normal"
      | "compact"
      | "overlay"
      | "floating"
      | "labels"
      | "pinned"
      | "tooltips",
  ) => void;
  toggleSidebarExpansion: () => void;
  animateOpenSidebar: (index: number) => Promise<void>;

  // Legacy methods for backward compatibility
  openOrchestraPane: () => void;
  closeOrchestraPane: () => void;
  isOrchestraPaneOpen: boolean;
}

/**
 * Enhanced Store for managing sidebar and multiple pane types with different behaviors
 *
 * Usage Examples:
 *
 * // Basic usage:
 * const { isPaneOpen, currentPaneConfig, toggleSidebar } = useSidebarStore()
 *
 * // Open different panes with specific modes:
 * openPane(1, 'compact') // Open proofreader in compact mode
 * openPane(2, 'overlay') // Open plagiarism checker as overlay
 * openPane(0, 'labels') // Open orchestra with expandable labels sidebar
 *
 * // Labels mode with expansion:
 * setPaneMode('labels') // Enable labels mode
 * toggleSidebarExpansion() // Toggle between collapsed (icons only) and expanded (icons + labels)
 *
 * // In your component with Framer Motion:
 * const variants = currentPaneConfig?.variants || orchestraPaneVariants
 */
export const useSidebarStore = create<SidebarState>((set, get) => ({
  activeSidebar: null,
  isPaneOpen: false,
  currentPaneConfig: null,
  isAnimating: false,
  paneMode: "tooltips",
  isSidebarExpanded: false,

  // Set the active sidebar directly
  setActiveSidebar: (index) => {
    const config = index !== null ? PANE_CONFIGS[index] : null;
    set({
      activeSidebar: index,
      isPaneOpen: index !== null,
      currentPaneConfig: config,
    });
  },

  // Toggle sidebar - if already active, close it, otherwise open it
  toggleSidebar: (index) => {
    set((state) => {
      const newActiveSidebar = state.activeSidebar === index ? null : index;
      const config =
        newActiveSidebar !== null ? PANE_CONFIGS[newActiveSidebar] : null;

      return {
        activeSidebar: newActiveSidebar,
        isPaneOpen: newActiveSidebar !== null,
        currentPaneConfig: config,
      };
    });
  },

  // Open specific pane with mode
  openPane: (index, mode = "tooltips") => {
    const config = PANE_CONFIGS[index];
    if (config) {
      set({
        activeSidebar: index,
        isPaneOpen: true,
        currentPaneConfig: config,
        paneMode: mode,
      });
    }
  },

  // Close any open pane
  closePane: () => {
    set({
      activeSidebar: null,
      isPaneOpen: false,
      currentPaneConfig: null,
    });
  },

  // Animation state setter
  setIsAnimating: (animating) => set({ isAnimating: animating }),

  // Set pane display mode
  setPaneMode: (mode) => set({ paneMode: mode }),

  // Legacy compatibility methods
  openOrchestraPane: () => {
    const config = PANE_CONFIGS[0];
    set({
      activeSidebar: 0,
      isPaneOpen: true,
      currentPaneConfig: config,
    });
  },

  closeOrchestraPane: () => {
    set({
      activeSidebar: null,
      isPaneOpen: false,
      currentPaneConfig: null,
    });
  },

  // Legacy computed property
  get isOrchestraPaneOpen() {
    const state = get();
    return state.activeSidebar === 0 && state.isPaneOpen;
  },

  toggleSidebarExpansion: () => {
    set((state) => ({ isSidebarExpanded: !state.isSidebarExpanded }));
  },

  // Animated sidebar opening method
  animateOpenSidebar: async (index: number) => {
    const config = PANE_CONFIGS[index];
    if (config) {
      // Set animation state
      set({ isAnimating: true });

      // Open the pane
      set({
        activeSidebar: index,
        isPaneOpen: true,
        currentPaneConfig: config,
      });

      // Wait for animation to complete (matching the spring animation duration)
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Clear animation state
      set({ isAnimating: false });
    }
  },
}));

export default useSidebarStore;
