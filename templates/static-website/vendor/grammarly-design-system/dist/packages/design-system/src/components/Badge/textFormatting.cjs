"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const colors = require("./colors.cjs");
const formatThousands = (n) => {
  if (n <= 99) {
    return n.toString();
  } else if (n > 99 && n < 1e3) {
    return "99+";
  } else {
    return "1K+";
  }
};
const calculateBadgeProps = (props) => {
  const {
    count,
    getAriaLabelText,
    specialCharBefore,
    specialCharAfter,
    style: styleProp,
    variant,
    className,
    ...rest
  } = props;
  const withSpecialChar = specialCharBefore != null || specialCharAfter != null;
  const displayText = withSpecialChar ? `${specialCharBefore != null ? specialCharBefore : ""}${count}${specialCharAfter != null ? specialCharAfter : ""}` : formatThousands(count);
  const screenReaderText = getAriaLabelText == null ? void 0 : getAriaLabelText(
    withSpecialChar ? count : displayText,
    specialCharBefore,
    specialCharAfter
  );
  const style = Object.assign(colors.getColor(variant), styleProp);
  return { displayText, screenReaderText, style, className, ...rest };
};
exports.calculateBadgeProps = calculateBadgeProps;
exports.formatThousands = formatThousands;
