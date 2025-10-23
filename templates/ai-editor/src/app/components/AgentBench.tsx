"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "@/app/components/ui/icon-button";
import { iconSizes } from "@/config/iconConfig";
import { AGENT_LABELS } from "@/stores/chat/sidebarStore";

interface AgentBenchProps {
  icons: React.ReactNode[];
  onIconClick?: (index: number) => void;
  activeIconIndex?: number | null;
  showLabels?: boolean;
  showTooltips?: boolean;
  showPillContainer?: boolean;
}

// Animation variants for label fade-in with stagger
const labelContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Quick succession cascade
      delayChildren: 0.1, // Small delay before children start animating
    },
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster stagger on exit
      staggerDirection: -1, // Reverse the stagger direction for exit
      delayChildren: 0,
    },
  },
};

const labelItemVariants = {
  hidden: {
    opacity: 0,
    x: -15, // Slightly more movement for better visual effect
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -15,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Tooltip animation variants
const tooltipVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 5,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export const AgentBench: React.FC<AgentBenchProps> = ({
  icons,
  onIconClick,
  activeIconIndex,
  showLabels = false,
  showTooltips = false,
  showPillContainer = true,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleIconClick = (index: number, event?: React.MouseEvent) => {
    // Prevent the click from bubbling up to parent elements
    if (event) {
      event.stopPropagation();
    }

    if (onIconClick) {
      onIconClick(index);
    }
  };

  return (
    <div
      className={
        showPillContainer
          ? "agent-bench flex w-full flex-col items-center gap-1 rounded-[20px] border border-black/3 bg-white py-2 shadow-[0px_0px_4px_rgba(0,0,0,0.06)] relative z-[10000]"
          : "agent-bench flex w-full flex-col items-center relative py-4"
      }
    >
      {/* Container for all labels to enable stagger animation */}
      <AnimatePresence mode="wait">
        {showLabels && !showTooltips ? (
          <motion.div
            key="labels-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={labelContainerVariants}
            className="w-full flex flex-col gap-2"
          >
            {/* Icon buttons use our standardized IconButton component */}
            {icons.map((icon, index) => {
              const agentLabel = AGENT_LABELS.find(
                (label) => label.id === index,
              );

              return (
                <motion.div
                  key={index}
                  variants={labelItemVariants}
                  className="flex items-center w-full px-1 relative"
                  style={{ minHeight: "32px" }}
                >
                  <div className="w-8 flex justify-center flex-shrink-0 relative">
                    <div
                      onClick={(e) => handleIconClick(index, e)}
                      className="cursor-pointer"
                    >
                      <IconButton
                        active={activeIconIndex === index}
                        aria-label={
                          agentLabel?.name || `Agent tool ${index + 1}`
                        }
                        size="md"
                        className="flex-shrink-0"
                      >
                        {icon}
                      </IconButton>
                    </div>
                  </div>

                  {/* Labels with cascading animation */}
                  {agentLabel && (
                    <span className="text-sm font-medium text-gray-700 ml-2 flex-1 text-left whitespace-nowrap">
                      {agentLabel.name}
                    </span>
                  )}
                </motion.div>
              );
            })}

            {/* Add button with label */}
            <motion.div
              variants={labelItemVariants}
              className="flex items-center w-full px-1 relative"
              style={{ minHeight: "32px" }}
            >
              <div className="w-8 flex justify-center flex-shrink-0 relative">
                <div
                  onClick={(e) => handleIconClick(icons.length, e)}
                  className="cursor-pointer"
                >
                  <IconButton
                    aria-label="Add agent"
                    size="md"
                    className="flex-shrink-0"
                  >
                    <svg
                      width={iconSizes.sm}
                      height={iconSizes.sm}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4V20M4 12H20"
                        stroke="#666666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </div>
              </div>

              <span className="text-sm font-medium text-gray-700 ml-2 flex-1 text-left whitespace-nowrap">
                Add agents
              </span>
            </motion.div>
          </motion.div>
        ) : (
          /* Fallback for tooltips mode or when labels are hidden */
          <div className="w-full flex flex-col gap-2">
            {/* Icon buttons use our standardized IconButton component */}
            {icons.map((icon, index) => {
              const agentLabel = AGENT_LABELS.find(
                (label) => label.id === index,
              );

              return (
                <div
                  key={index}
                  className="flex items-center w-full px-1 relative"
                  style={{ minHeight: "32px" }}
                >
                  <div className="w-8 flex justify-center flex-shrink-0 relative">
                    <div
                      onMouseEnter={() =>
                        showTooltips && setHoveredIndex(index)
                      }
                      onMouseLeave={() => showTooltips && setHoveredIndex(null)}
                      className="relative"
                    >
                      <div
                        onClick={(e) => handleIconClick(index, e)}
                        className="cursor-pointer"
                      >
                        <IconButton
                          active={activeIconIndex === index}
                          aria-label={
                            agentLabel?.name || `Agent tool ${index + 1}`
                          }
                          size="md"
                          className="flex-shrink-0"
                        >
                          {icon}
                        </IconButton>
                      </div>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {showTooltips &&
                          hoveredIndex === index &&
                          agentLabel && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={tooltipVariants}
                              className="absolute right-[38px] top-1/2 mr-2 transform -translate-y-1/2 z-[200]"
                            >
                              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-md whitespace-nowrap shadow-lg">
                                {agentLabel.name}
                                {/* Tooltip arrow pointing right */}
                                <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent border-l-gray-900"></div>
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Add button */}
            <div
              className="flex items-center w-full px-1 relative"
              style={{ minHeight: "32px" }}
            >
              <div className="w-8 flex justify-center flex-shrink-0 relative">
                <div
                  onMouseEnter={() =>
                    showTooltips && setHoveredIndex(icons.length)
                  }
                  onMouseLeave={() => showTooltips && setHoveredIndex(null)}
                  className="relative"
                >
                  <div
                    onClick={(e) => handleIconClick(icons.length, e)}
                    className="cursor-pointer"
                  >
                    <IconButton
                      aria-label="Add agent"
                      size="md"
                      className="flex-shrink-0"
                    >
                      <svg
                        width={iconSizes.sm}
                        height={iconSizes.sm}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4V20M4 12H20"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </div>

                  {/* Add button tooltip */}
                  <AnimatePresence>
                    {showTooltips && hoveredIndex === icons.length && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tooltipVariants}
                        className="absolute right-full top-1/2 mr-2 transform -translate-y-1/2 z-[200]"
                      >
                        <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
                          Add agents
                          {/* Tooltip arrow pointing right */}
                          <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentBench;
