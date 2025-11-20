"use client";

import React, { useState } from "react";
import { cn } from "@/utils/common/cn";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  label,
  className,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={cn("flex items-center", className)}>
      {label && (
        <span className="mr-2 text-xs font-medium text-gray-700">{label}</span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex h-5 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
          isChecked ? "bg-blue-500" : "bg-gray-200",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="sr-only">{label || "Toggle"}</span>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            isChecked ? "translate-x-3" : "translate-x-0",
          )}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
