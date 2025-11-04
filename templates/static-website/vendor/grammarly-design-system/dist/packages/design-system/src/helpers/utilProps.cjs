"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const color = require("./color.cjs");
const space = require("./space.cjs");
function splitUtilityProps(props) {
  const {
    bgColor,
    borderColor,
    borderRadius,
    color: color2,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    width,
    height,
    ...rest
  } = props;
  return {
    utility: {
      bgColor,
      borderColor,
      borderRadius,
      color: color2,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      width,
      height
    },
    other: rest
  };
}
function applyUtilityProps(props) {
  const {
    bgColor,
    borderColor,
    borderRadius,
    color: color$1,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    width,
    height
  } = props;
  return {
    backgroundColor: color.getColorVariable(bgColor),
    border: borderColor !== void 0 ? `1px solid var(--color-border-${borderColor})` : void 0,
    borderRadius: borderRadius !== void 0 ? `var(--radius-${space.getTokenStringFromNumber(borderRadius)})` : void 0,
    color: color$1 !== void 0 ? `var(--color-text-${color$1})` : void 0,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    ...space.getMarginCSS({ margin, marginLeft, marginRight, marginTop, marginBottom }),
    ...space.getPaddingCSS({ padding, paddingLeft, paddingRight, paddingTop, paddingBottom })
  };
}
exports.applyUtilityProps = applyUtilityProps;
exports.splitUtilityProps = splitUtilityProps;
