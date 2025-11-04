function getTokenStringFromNumber(number) {
  if (number === 0.5) {
    return "half";
  }
  if (number === 0.25) {
    return "quarter";
  }
  return `${number}`;
}
function getMarginCSS({
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom
}) {
  const splitMargin = splitCssSides(margin);
  return {
    marginLeft: getMarginOrPaddingValue(marginLeft, splitMargin.left),
    marginRight: getMarginOrPaddingValue(marginRight, splitMargin.right),
    marginTop: getMarginOrPaddingValue(marginTop, splitMargin.top),
    marginBottom: getMarginOrPaddingValue(marginBottom, splitMargin.bottom)
  };
}
function getPaddingCSS({
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom
}) {
  const splitPadding = splitCssSides(padding);
  return {
    paddingLeft: getMarginOrPaddingValue(paddingLeft, splitPadding.left),
    paddingRight: getMarginOrPaddingValue(paddingRight, splitPadding.right),
    paddingTop: getMarginOrPaddingValue(paddingTop, splitPadding.top),
    paddingBottom: getMarginOrPaddingValue(paddingBottom, splitPadding.bottom)
  };
}
function getMarginOrPaddingValue(value, fallback) {
  const computedValue = value !== void 0 ? value : fallback;
  if (computedValue === void 0) {
    return void 0;
  }
  if (typeof computedValue === "string") {
    return computedValue;
  }
  if (computedValue < 0) {
    const positiveValue = computedValue * -1;
    return `calc(var(--space-${getTokenStringFromNumber(positiveValue)}) * -1)`;
  }
  return `var(--space-${getTokenStringFromNumber(computedValue)})`;
}
function splitCssSides(value) {
  if (typeof value !== "string") {
    return { top: value, right: value, bottom: value, left: value };
  }
  const split = value.split(" ");
  const top = split[0];
  const right = split[1] || top;
  const bottom = split[2] || top;
  const left = split[3] || right;
  return {
    top,
    right,
    bottom,
    left
  };
}
export {
  getMarginCSS,
  getPaddingCSS,
  getTokenStringFromNumber
};
