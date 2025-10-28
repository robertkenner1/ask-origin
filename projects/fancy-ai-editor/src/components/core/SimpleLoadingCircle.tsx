"use client";

import React from "react";

export const SimpleLoadingCircle: React.FC = () => {
  return (
    <span
      className="ml-1 inline-block animate-pulse"
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "#5E47E5",
        borderRadius: "50%",
        display: "inline-block",
      }}
    />
  );
};

export default SimpleLoadingCircle;
