"use client";

import React, { useState, useCallback, useEffect } from "react";
import AgentBench from "./AgentBench";
import IconButton from "@/app/components/ui/icon-button";
import { OrchestraIcon } from "@/components/icons/OrchestraIcon";
import ProofreaderIcon from "@/components/icons/ProofreaderIcon";
import PlagiarismIcon from "@/components/icons/PlagiarismIcon";
import AiDetectorIcon from "@/components/icons/AiDetectorIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SettingsDialog from "./SettingsDialog";
import { useSidebarStore } from "@/stores/chat/sidebarStore";
import { iconSizes } from "@/config/iconConfig";

interface SidebarProps {
  // Legacy prop for backward compatibility, will be removed after full transition to zustand
  onOrchestraToggle?: (isOpen: boolean) => void;
}

export const Sidebar = ({ onOrchestraToggle }: SidebarProps) => {
  // Get state and actions from the store
  const {
    activeSidebar,
    toggleSidebar,
    isAnimating,
    paneMode,
    isSidebarExpanded,
    toggleSidebarExpansion,
  } = useSidebarStore();

  // State for settings dialog
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // State for delaying label hiding to allow exit animation
  const [shouldShowLabels, setShouldShowLabels] = useState(false);

  // State for underlines settings visibility
  const [showUnderlinesSettings, setShowUnderlinesSettings] = useState(() => {
    // Get from localStorage or default to true
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("showUnderlinesSettings");
      return stored !== null ? JSON.parse(stored) : true;
    }
    return true;
  });

  // State for pill container visibility - start with default to avoid hydration mismatch
  const [showPillContainer, setShowPillContainer] = useState(true);

  // State for sidebar open by default setting - start with default to avoid hydration mismatch
  const [openSidebarByDefault, setOpenSidebarByDefault] = useState(false);

  // Load pill container setting from localStorage after hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("showPillContainer");
      if (stored !== null) {
        setShowPillContainer(JSON.parse(stored));
      }
    }
  }, []);

  // Load sidebar open by default setting from localStorage after hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("openSidebarByDefault");
      if (stored !== null) {
        const shouldOpenByDefault = JSON.parse(stored);
        setOpenSidebarByDefault(shouldOpenByDefault);
      }
    }
  }, []);

  // Apply the sidebar open by default setting when pane mode changes or component initializes
  useEffect(() => {
    if (
      openSidebarByDefault &&
      !isSidebarExpanded &&
      (paneMode === "labels" || paneMode === "compact" || paneMode === "pinned")
    ) {
      toggleSidebarExpansion();
    }
  }, [
    openSidebarByDefault,
    paneMode,
    isSidebarExpanded,
    toggleSidebarExpansion,
  ]);

  // Handle delayed label visibility for smooth exit animations
  useEffect(() => {
    const baseShowLabels =
      (paneMode === "labels" && isSidebarExpanded) ||
      (paneMode === "compact" && isSidebarExpanded) ||
      (paneMode === "pinned" && isSidebarExpanded);

    if (baseShowLabels) {
      // Show labels immediately when expanding
      setShouldShowLabels(true);
    } else {
      // Delay hiding labels to allow exit animation (150ms)
      const timeoutId = setTimeout(() => {
        setShouldShowLabels(false);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [paneMode, isSidebarExpanded]);

  // Function to toggle underlines settings visibility
  const handleToggleUnderlinesSettings = useCallback((show: boolean) => {
    setShowUnderlinesSettings(show);
    if (typeof window !== "undefined") {
      localStorage.setItem("showUnderlinesSettings", JSON.stringify(show));
    }

    // Dispatch custom event to notify Editor component
    const event = new CustomEvent("toggleUnderlinesSettings", {
      detail: { show },
    });
    document.dispatchEvent(event);
  }, []);

  // Function to toggle pill container visibility
  const handleTogglePillContainer = useCallback((show: boolean) => {
    setShowPillContainer(show);
    if (typeof window !== "undefined") {
      localStorage.setItem("showPillContainer", JSON.stringify(show));
    }
  }, []);

  // Function to toggle sidebar open by default setting
  const handleToggleOpenSidebarByDefault = useCallback((open: boolean) => {
    setOpenSidebarByDefault(open);
    if (typeof window !== "undefined") {
      localStorage.setItem("openSidebarByDefault", JSON.stringify(open));
    }
  }, []);

  // Use the specified icons in the specified order with standardized sizing
  const icons = [
    <OrchestraIcon key="orchestra" size={iconSizes.sm} />,
    <ProofreaderIcon key="proofreader" />,
    <PlagiarismIcon key="plagiarism" />,
    <AiDetectorIcon key="aidetector" />,
  ];

  // Handle icon clicks - now using simple toggle from the store
  const handleIconClick = (index: number) => {
    // Prevent clicks during animations
    if (isAnimating) return;

    const wasOrchestraOpen = activeSidebar === 0;
    toggleSidebar(index);

    // Call legacy prop for backward compatibility
    if (onOrchestraToggle) {
      const isOrchestraOpen = index === 0 && activeSidebar !== index;
      onOrchestraToggle(isOrchestraOpen);
    }
  };

  // Determine if labels should be shown (for labels mode AND compact mode when expanded)
  const showLabels = shouldShowLabels;

  // Determine if tooltips should be shown (only for tooltips mode)
  const showTooltips = paneMode === "tooltips";

  // Adjust sidebar width based on whether labels are shown
  const sidebarWidth = showLabels ? "w-[180px]" : "w-[57px]";

  // Handle sidebar hover/click for labels mode, compact mode, and pinned mode
  const handleSidebarInteraction = () => {
    if (
      paneMode === "labels" ||
      paneMode === "compact" ||
      paneMode === "pinned"
    ) {
      toggleSidebarExpansion();
    }
  };

  return (
    <div
      className={`sidebar-main flex h-full ${sidebarWidth} flex-col justify-between border-l border-gray-200 bg-[#FAFAFA] px-[8px] py-4 relative overflow-visible ${
        paneMode === "labels" || paneMode === "compact" || paneMode === "pinned"
          ? "cursor-pointer hover:bg-gray-50"
          : ""
      }`}
      style={{
        transition:
          "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease",
        width: showLabels ? "180px" : "57px",
      }}
      onClick={
        paneMode === "labels" || paneMode === "compact" || paneMode === "pinned"
          ? handleSidebarInteraction
          : undefined
      }
      onMouseEnter={
        paneMode === "labels" || paneMode === "compact" || paneMode === "pinned"
          ? handleSidebarInteraction
          : undefined
      }
      onMouseLeave={
        paneMode === "labels" || paneMode === "compact" || paneMode === "pinned"
          ? () => isSidebarExpanded && toggleSidebarExpansion()
          : undefined
      }
    >
      {/* Empty box at top for visual balance */}
      <div className="h-8 w-full"></div>

      {/* AgentBench in the middle */}
      <div className="flex h-full items-center">
        <AgentBench
          icons={icons}
          onIconClick={handleIconClick}
          activeIconIndex={activeSidebar}
          showLabels={showLabels}
          showTooltips={showTooltips}
          showPillContainer={showPillContainer}
        />
      </div>

      {/* Settings button at bottom */}
      <div className="flex justify-start">
        <IconButton
          size="lg"
          className="p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
          aria-label="Settings"
          onClick={() => setIsSettingsOpen(true)}
        >
          <div className="h-5 w-5">
            <SettingsIcon />
          </div>
        </IconButton>

        {/* Settings Dialog */}
        <SettingsDialog
          open={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
          showUnderlinesSettings={showUnderlinesSettings}
          onToggleUnderlinesSettings={handleToggleUnderlinesSettings}
          showPillContainer={showPillContainer}
          onTogglePillContainer={handleTogglePillContainer}
          openSidebarByDefault={openSidebarByDefault}
          onToggleOpenSidebarByDefault={handleToggleOpenSidebarByDefault}
        />
      </div>
    </div>
  );
};

export default Sidebar;
