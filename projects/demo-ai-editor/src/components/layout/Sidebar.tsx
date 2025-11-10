"use client";

import React, { useState } from "react";
import AgentBench from "@/components/chat/AgentBench";
import IconButton from "@/components/core/icon-button";
import { OrchestraIcon } from "@/app/components/icons/OrchestraIcon";
import ProofreaderIcon from "@/app/components/icons/ProofreaderIcon";
import PlagiarismIcon from "@/app/components/icons/PlagiarismIcon";
import AiDetectorIcon from "@/app/components/icons/AiDetectorIcon";
import SettingsIcon from "@/app/components/icons/SettingsIcon";
import SettingsDialog from "@/components/core/SettingsDialog";
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
    paneMode,
    isSidebarExpanded,
    toggleSidebarExpansion,
  } = useSidebarStore();

  // State for settings dialog
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Use the specified icons in the specified order with standardized sizing
  const icons = [
    <OrchestraIcon key="orchestra" size={iconSizes.sm} />,
    <ProofreaderIcon key="proofreader" />,
    <PlagiarismIcon key="plagiarism" />,
    <AiDetectorIcon key="aidetector" />,
  ];

  // Handle icon clicks - now using the zustand store
  const handleIconClick = (index: number) => {
    toggleSidebar(index);

    // Call legacy prop for backward compatibility
    if (onOrchestraToggle) {
      const isOrchestraOpen = index === 0 && activeSidebar !== 0;
      onOrchestraToggle(isOrchestraOpen);
    }
  };

  // Determine if labels should be shown (only when in labels mode AND expanded)
  const showLabels = paneMode === "labels" && isSidebarExpanded;

  // Adjust sidebar width based on whether labels are shown
  const sidebarWidth = showLabels ? "w-[180px]" : "w-[57px]";

  // Handle sidebar hover/click for labels mode
  const handleSidebarInteraction = () => {
    if (paneMode === "labels") {
      toggleSidebarExpansion();
    }
  };

  return (
    <div
      className={`sidebar-main flex h-full ${sidebarWidth} flex-col justify-between border-l border-gray-200 bg-[#FAFAFA] px-[8px] py-4 ${
        paneMode === "labels" ? "cursor-pointer hover:bg-gray-50" : ""
      }`}
      style={{
        transition:
          "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease",
        width: showLabels ? "180px" : "57px",
      }}
      onClick={paneMode === "labels" ? handleSidebarInteraction : undefined}
      onMouseEnter={
        paneMode === "labels" ? handleSidebarInteraction : undefined
      }
      onMouseLeave={
        paneMode === "labels"
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
        />
      </div>

      {/* Settings button at bottom */}
      <div className="flex justify-center">
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
        />
      </div>
    </div>
  );
};

export default Sidebar;
