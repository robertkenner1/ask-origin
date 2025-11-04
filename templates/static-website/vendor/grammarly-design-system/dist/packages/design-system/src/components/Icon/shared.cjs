"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const useWarnIfExternalIcon = require("./hooks/useWarnIfExternalIcon.cjs");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
function getSvgIconElement(icon) {
  return icon;
}
function getClassName(variant) {
  return `gds-icon-${variant != null ? variant : "default"}`;
}
const getSize = (size = "medium") => {
  switch (size) {
    case "small":
      return 16;
    case "medium":
      return 20;
    case "large":
      return 24;
    case "xlarge":
      return 32;
    case "xxlarge":
      return 40;
    default:
      return assertNever(size);
  }
};
function getSvgIconProps(props, ref) {
  const {
    accessibilityLabel,
    className,
    size,
    icon,
    isDecorative,
    variant,
    resourcePrefix,
    ...rest
  } = props;
  const iconSize = getSize(size);
  const canChangeColor = (icon == null ? void 0 : icon.__brand) === "color";
  const isGDSIcon = (icon == null ? void 0 : icon.__source) === "GDS";
  const stableResourcePrefix = _import.useId(resourcePrefix);
  useWarnIfExternalIcon.useWarnIfExternalIcon(icon, isGDSIcon);
  let ariaHidden = isDecorative != null ? isDecorative : true;
  if (accessibilityLabel.trim() !== "") {
    ariaHidden = false;
  }
  return {
    "aria-label": accessibilityLabel,
    "aria-hidden": ariaHidden,
    focusable: false,
    role: "img",
    strokeWidth: "1px",
    // force stroke width to 1px as per design requirements
    className: clsx_m.clsx(
      "gds-icon",
      canChangeColor && getClassName(variant),
      variant === "inverse" && "gds-icon-inverse",
      className
    ),
    width: iconSize,
    height: iconSize,
    ref,
    ...isGDSIcon && { resourcePrefix: stableResourcePrefix },
    ...rest
  };
}
const assertNever = (x) => x;
exports.getClassName = getClassName;
exports.getSvgIconElement = getSvgIconElement;
exports.getSvgIconProps = getSvgIconProps;
