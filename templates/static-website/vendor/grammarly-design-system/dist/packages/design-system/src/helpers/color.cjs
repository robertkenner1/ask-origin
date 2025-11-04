"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function getColorVariable(color) {
  if (color === void 0) return void 0;
  if (color === "light-green") return "var(--light-green)";
  if (color === "yellow-green") return "var(--yellow-green)";
  if (/-\d\d?\d?$/.test(color) || color === "white") return `var(--${color})`;
  return `var(--color-${color})`;
}
exports.getColorVariable = getColorVariable;
