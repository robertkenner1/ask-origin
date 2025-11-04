import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionEvaluateCategory = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionEvaluateCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-categorya)`, d: "M9.976 16.761a8.5 8.5 0 1 0-2.551-2.551l-3.817 3.163a2.277 2.277 0 1 0 3.206 3.205z" }), /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-categoryb)` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M19.172 5.015a6.5 6.5 0 1 1-9.193 9.192 6.5 6.5 0 0 1 9.193-9.192" })), /* @__PURE__ */ React.createElement("path", { stroke: "#2551DA", strokeLinecap: "square", strokeMiterlimit: 10, strokeWidth: 1.5, d: "m17.79 7.317-4.733 4.732-1.768-1.768" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-categorya`, x1: 8.04, x2: 16.54, y1: 3, y2: 16.5, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#DABAF2" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#8943BC" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-categoryb`, width: 14.182, height: 15.364, x: 6.894, y: 0.747, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", { dx: -1.182, dy: -2.364 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.364 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.721569 0 0 0 0 0.784314 0 0 0 0 0.984314 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3686" }))));
});
export {
  GGOActionEvaluateCategory
};
