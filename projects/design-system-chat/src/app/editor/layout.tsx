"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import OrchestraPane from "../components/OrchestraPane";
import ProofreaderPane from "../components/ProofreaderPane";
import PlagiarismPane from "../components/PlagiarismPane";
import AiDetectorPane from "../components/AiDetectorPane";
import { useSidebarStore } from "@/stores/chat/sidebarStore";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get state from zustand store
  const {
    isPaneOpen,
    currentPaneConfig,
    closePane,
    isAnimating,
    setIsAnimating,
    paneMode,
    isSidebarExpanded,
  } = useSidebarStore();

  // Render the appropriate pane component based on type
  const renderPaneContent = () => {
    if (!currentPaneConfig) return null;

    const commonProps = {
      isOpen: true,
      onClose: closePane,
    };

    switch (currentPaneConfig.type) {
      case "orchestra":
        return <OrchestraPane {...commonProps} />;
      case "proofreader":
        return <ProofreaderPane {...commonProps} />;
      case "plagiarism":
        return <PlagiarismPane {...commonProps} />;
      case "aidetector":
        return <AiDetectorPane {...commonProps} />;
      default:
        return null;
    }
  };

  // Get the current width for the pane based on mode and expansion state
  const getCurrentPaneWidth = () => {
    if (!currentPaneConfig) return 0;

    if (paneMode === "compact" && currentPaneConfig.type === "orchestra") {
      // For pixel-perfect positioning, maintain same total width
      // Collapsed: orchestra(400px) + sidebar(57px) = 457px total
      // Expanded: orchestra(277px) + sidebar(180px) = 457px total
      // Difference: 180px - 57px = 123px, so subtract from orchestra width
      return isSidebarExpanded
        ? currentPaneConfig.width - 123 // 400 - 123 = 277px
        : currentPaneConfig.width; // 400px
    } else if (paneMode === "compact") {
      return Math.floor(currentPaneConfig.width * 0.8);
    }

    return currentPaneConfig.width;
  };

  // Get animation variants based on current pane (without dynamic width for compact)
  const getAnimationVariants = () => {
    if (!currentPaneConfig) return {};

    const baseVariants = currentPaneConfig.variants;

    // Modify variants based on pane mode
    switch (paneMode) {
      case "compact":
        // For compact mode, return base variants but let width be handled by animate prop
        return {
          ...baseVariants,
          open: {
            ...baseVariants.open,
            width: getCurrentPaneWidth(), // Initial width, but will be overridden by animate prop
          },
        };
      case "overlay":
        return {
          closed: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.2 },
          },
          open: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 },
          },
        };
      case "floating":
        return {
          closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 },
          },
          open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
          },
        };
      default:
        return baseVariants;
    }
  };

  // Get container classes based on pane mode
  const getContainerClasses = () => {
    const baseClasses =
      "h-full flex-shrink-0 overflow-hidden border-s border-gray-200 bg-white";

    switch (paneMode) {
      case "overlay":
        return `${baseClasses} absolute right-0 top-0 z-50 shadow-2xl`;
      case "floating":
        return `${baseClasses} absolute right-4 top-4 bottom-4 z-50 shadow-xl rounded-lg`;
      default:
        return baseClasses;
    }
  };

  // Define the main container style with CSS variables for ComposeBar positioning
  const getComposeBarOffset = () => {
    if (!isPaneOpen || !currentPaneConfig) return "0px";

    let paneWidth = currentPaneConfig.width;

    // Adjust for different pane modes
    if (paneMode === "compact") {
      if (currentPaneConfig.type === "orchestra") {
        // For pixel-perfect positioning, maintain same total width
        // Collapsed: orchestra(400px) + sidebar(57px) = 457px total
        // Expanded: orchestra(277px) + sidebar(180px) = 457px total
        paneWidth = isSidebarExpanded
          ? currentPaneConfig.width - 123 // 400 - 123 = 277px
          : currentPaneConfig.width; // 400px
      } else {
        paneWidth = Math.floor(currentPaneConfig.width * 0.8);
      }
    }

    return `-${paneWidth / 2}px`;
  };

  // Get sidebar container z-index - higher for pinned mode when expanded to cover orchestra panel
  const getSidebarContainerZIndex = () => {
    return paneMode === "pinned" && isSidebarExpanded ? "z-[200]" : "z-10";
  };

  // Get sidebar container classes - handle positioning for pinned mode
  const getSidebarContainerClasses = () => {
    const baseClasses = "flex-shrink-0";

    if (paneMode === "pinned") {
      // In pinned mode, use fixed positioning so sidebar doesn't affect layout
      return `${baseClasses} fixed right-0 top-0 h-full ${getSidebarContainerZIndex()}`;
    }

    return `${baseClasses} ${getSidebarContainerZIndex()}`;
  };

  // Get main container padding for pinned mode to account for fixed sidebar
  const getMainContainerPadding = () => {
    if (paneMode === "pinned") {
      // Always reserve space for the collapsed sidebar width (57px) in pinned mode
      return "pr-[57px]";
    }
    return "";
  };

  const mainStyle = {
    height: "100vh",
    "--compose-bar-offset": getComposeBarOffset(),
  } as React.CSSProperties;

  return (
    <main
      className={`flex h-full min-h-screen w-full flex-row relative ${getMainContainerPadding()}`}
      style={mainStyle}
    >
      <div className="editor-wrapper relative h-full flex-grow overflow-auto">
        {children}
      </div>

      <AnimatePresence mode="wait">
        {isPaneOpen && currentPaneConfig && (
          <motion.div
            key={`${currentPaneConfig.type}-pane-${paneMode}`}
            initial="closed"
            animate={{
              ...getAnimationVariants().open,
              width: getCurrentPaneWidth(),
            }}
            exit="closed"
            variants={getAnimationVariants()}
            transition={{
              width:
                paneMode === "compact"
                  ? {
                      // Match sidebar timing exactly: 0.5s cubic-bezier(0.4, 0, 0.2, 1)
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }
                  : {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
              opacity: {
                duration: 0.3,
              },
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className={getContainerClasses()}
            style={{
              // Prevent layout shift during animation and set fixed width for overlay/floating modes
              overflow: isAnimating ? "hidden" : "auto",
              width:
                paneMode === "overlay" || paneMode === "floating"
                  ? currentPaneConfig.width
                  : undefined,
            }}
          >
            {renderPaneContent()}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={getSidebarContainerClasses()}>
        <Sidebar />
      </div>
    </main>
  );
}
