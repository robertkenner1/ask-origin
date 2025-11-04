"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
;/* empty css           */
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const Link = /* @__PURE__ */ React.forwardRef(
  function Link2(props, ref) {
    const {
      accessibilityLabel,
      children,
      display = "inline",
      target,
      underline = "always",
      variant = "primary",
      weight,
      href,
      onClick,
      className,
      style,
      download,
      ...rest
    } = props;
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href,
        ref,
        onClick,
        target,
        "aria-label": accessibilityLabel,
        className: clsx_m.clsx(
          "gds-link",
          underline === "hover" && "gds-link-underline-hover",
          display === "block" && "gds-link-block",
          display === "inline-block" && "gds-link-inline-block",
          variant === "primary" && "gds-link-primary",
          variant === "secondary" && "gds-link-secondary",
          variant === "inherit" && "gds-link-inherit",
          weight === "bold" && "gds-link-bold",
          className
        ),
        style,
        rel: target === "_blank" ? "noopener noreferrer" : void 0,
        download,
        ...rest
      },
      children,
      target === "_blank" && /* @__PURE__ */ React.createElement(ScreenReaderOnly.ScreenReaderOnly, null, "Opens a new window")
    );
  }
);
exports.Link = Link;
