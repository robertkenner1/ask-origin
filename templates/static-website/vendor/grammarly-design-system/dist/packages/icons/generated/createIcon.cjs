"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
// @__NO_SIDE_EFFECTS__
function createIcon(type, svg) {
  Object.defineProperty(svg, "__brand", { value: type });
  Object.defineProperty(svg, "__source", { value: "GDS" });
  return svg;
}
exports.createIcon = createIcon;
