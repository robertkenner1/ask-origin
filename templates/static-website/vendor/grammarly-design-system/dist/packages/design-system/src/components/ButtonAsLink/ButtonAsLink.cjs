"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const shared = require("../Button/shared.cjs");
;/* empty css                     */
const ScreenReaderOnly = require("../ScreenReaderOnly/ScreenReaderOnly.cjs");
const ButtonAsLink = /* @__PURE__ */ React.forwardRef(
  function ButtonAsLink2(props, forwardedRef) {
    const {
      accessibilityLabel,
      children,
      download,
      target,
      variant = "primary",
      href,
      onClick,
      className,
      style,
      width,
      size = "medium",
      text,
      iconEnd,
      iconStart,
      ...rest
    } = props;
    const label = text != null ? text : typeof children === "string" ? children : void 0;
    const textVariant = shared.textVariantMap[size];
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href,
        ref: forwardedRef,
        onClick,
        target,
        "aria-label": accessibilityLabel,
        className: clsx_m.clsx(
          "gds-button",
          "gds-button-as-link",
          `gds-button-${variant}`,
          `gds-button-${size}`,
          width === "full" && "gds-button-full",
          className
        ),
        style,
        rel: target === "_blank" ? "noopener noreferrer" : void 0,
        download,
        ...rest
      },
      shared.getButtonIconStart(variant, iconStart, size),
      shared.getButtonContent(label, children, textVariant, variant),
      shared.getButtonIconEnd(variant, iconEnd, size),
      target === "_blank" && /* @__PURE__ */ React.createElement(ScreenReaderOnly.ScreenReaderOnly, null, "Opens a new window")
    );
  }
);
exports.ButtonAsLink = ButtonAsLink;
