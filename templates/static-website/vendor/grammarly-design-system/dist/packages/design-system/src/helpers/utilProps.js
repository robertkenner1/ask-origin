import { getColorVariable } from "./color.js";
import { getPaddingCSS, getMarginCSS, getTokenStringFromNumber } from "./space.js";
function splitUtilityProps(props) {
  const {
    bgColor,
    borderColor,
    borderRadius,
    color,
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
      color,
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
    color,
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
    backgroundColor: getColorVariable(bgColor),
    border: borderColor !== void 0 ? `1px solid var(--color-border-${borderColor})` : void 0,
    borderRadius: borderRadius !== void 0 ? `var(--radius-${getTokenStringFromNumber(borderRadius)})` : void 0,
    color: color !== void 0 ? `var(--color-text-${color})` : void 0,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    ...getMarginCSS({ margin, marginLeft, marginRight, marginTop, marginBottom }),
    ...getPaddingCSS({ padding, paddingLeft, paddingRight, paddingTop, paddingBottom })
  };
}
export {
  applyUtilityProps,
  splitUtilityProps
};
