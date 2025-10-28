"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "@/app/components/ui/icon-button";
import { iconSizes } from "@/config/iconConfig";
import { AGENT_LABELS } from "@/stores/chat/sidebarStore";

interface AgentBenchProps {
  icons: React.ReactNode[];
  onIconClick?: (index: number) => void;
  activeIconIndex?: number | null;
  showLabels?: boolean;
}

// Animation variants for label fade-in with stagger
const labelContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const labelItemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const AgentBench: React.FC<AgentBenchProps> = ({
  icons,
  onIconClick,
  activeIconIndex,
  showLabels = false,
}) => {
  const handleIconClick = (index: number) => {
    if (onIconClick) {
      onIconClick(index);
    }
  };

  return (
    <div className="agent-bench flex w-full flex-col items-center gap-2 rounded-[20px] border border-black/3 bg-white py-1 shadow-[0px_0px_4px_rgba(0,0,0,0.06)]">
      {/* Icon buttons use our standardized IconButton component */}
      {icons.map((icon, index) => {
        const agentLabel = AGENT_LABELS.find((label) => label.id === index);

        return (
          <div
            key={index}
            className="flex items-center w-full px-2"
            style={{ minHeight: "40px" }}
          >
            <div className="w-8 flex justify-center flex-shrink-0">
              <IconButton
                active={activeIconIndex === index}
                onClick={() => handleIconClick(index)}
                aria-label={agentLabel?.name || `Agent tool ${index + 1}`}
                size="md"
                className="flex-shrink-0"
              >
                {icon}
              </IconButton>
            </div>
            <AnimatePresence>
              {showLabels && agentLabel && (
                <motion.span
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={labelItemVariants}
                  className="text-sm font-medium text-gray-700 ml-2 flex-1 text-left whitespace-nowrap"
                >
                  {agentLabel.name}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Add button */}
      <div
        className="flex items-center w-full px-2"
        style={{ minHeight: "40px" }}
      >
        <div className="w-8 flex justify-center flex-shrink-0">
          <IconButton
            onClick={() => handleIconClick(icons.length)}
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
        <AnimatePresence>
          {showLabels && (
            <motion.span
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={labelItemVariants}
              className="text-sm font-medium text-gray-700 ml-2 flex-1 text-left whitespace-nowrap"
            >
              Add agents
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AgentBench;
