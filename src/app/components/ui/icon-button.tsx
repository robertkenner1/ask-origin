"use client";

import React from "react";
import { cn } from "@/utils/common/cn";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "custom";
  customSize?: string;
  onClick?: () => void;
}

/**
 * A reusable icon button component with consistent sizing and styling
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      active = false,
      size = "md",
      customSize,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    // Size mapping to width/height classes
    const sizeClasses = {
      xs: "w-4 h-4", // 16px
      sm: "w-6 h-6", // 24px
      md: "w-8 h-8", // 32px
      lg: "w-10 h-10", // 40px
      custom: customSize || "w-8 h-8", // Fallback to medium if no custom size
    };

    return (
      <button
        ref={ref}
        className={cn(
          "icon-hover flex items-center justify-center rounded-full",
          sizeClasses[size],
          active ? "bg-gray-200" : "",
          className,
        )}
        onClick={onClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
