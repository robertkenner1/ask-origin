import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionSurpriseMe = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionSurpriseMe", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-isemea)`, d: "M20.673 5.031c-.222-2.556-3.515-3.443-4.99-1.343L13.52 6.766v2.25h3.5c2.15 0 3.84-1.842 3.653-3.985" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-isemeb)`, d: "M3.367 5.031c.222-2.556 3.515-3.443 4.99-1.343l2.163 3.078v2.25h-3.5a3.667 3.667 0 0 1-3.653-3.985" }), /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-isemec)` }, /* @__PURE__ */ React.createElement("path", { fill: "#E6CCFB", d: "M2.02 9.016h20v13h-20z" })), /* @__PURE__ */ React.createElement("path", { fill: "#5679E8", d: "M9.52 22.016h5v-13h-5z" }), /* @__PURE__ */ React.createElement("path", { fill: "#2551DA", d: "M9.52 8.766a2.5 2.5 0 0 1 5 0v.25h-5z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-isemea`, x1: 17.52, x2: 13.441, y1: 2.405, y2: 9.692, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#8CA6F6" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2551DA" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-isemeb`, x1: 6.52, x2: 10.6, y1: 2.405, y2: 9.692, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#8CA6F6" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2551DA" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-isemec`, width: 20, height: 13, x: 2.02, y: 9.016, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 4 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.643137 0 0 0 0 0.411765 0 0 0 0 0.811765 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3800" }))));
});
export {
  GGOActionSurpriseMe
};
