import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { getButtonIconStart, getButtonContent, getButtonIconEnd, textVariantMap } from "../Button/shared.js";
/* empty css                   */
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
const ButtonAsLink = /* @__PURE__ */ React__default.forwardRef(
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
    const textVariant = textVariantMap[size];
    return /* @__PURE__ */ React__default.createElement(
      "a",
      {
        href,
        ref: forwardedRef,
        onClick,
        target,
        "aria-label": accessibilityLabel,
        className: clsx(
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
      getButtonIconStart(variant, iconStart, size),
      getButtonContent(label, children, textVariant, variant),
      getButtonIconEnd(variant, iconEnd, size),
      target === "_blank" && /* @__PURE__ */ React__default.createElement(ScreenReaderOnly, null, "Opens a new window")
    );
  }
);
export {
  ButtonAsLink
};
