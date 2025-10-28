import React from "react";

const TapArea = ({ href, children, accessibilityLabel, className }) => {
  return (
    <a
      className={className}
      href={href}
      style={{ display: "flex" }}
      aria-label={accessibilityLabel}
    >
      {children}
    </a>
  );
};

export { TapArea };
