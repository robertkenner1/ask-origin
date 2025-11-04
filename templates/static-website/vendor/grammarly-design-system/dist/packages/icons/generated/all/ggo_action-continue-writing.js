import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionContinueWriting = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionContinueWriting", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-ritinga)` }, /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-ritingb)` }, /* @__PURE__ */ React.createElement("path", { fill: "#F4F4F6", d: "M2.036 3h16v20h-16z" })), /* @__PURE__ */ React.createElement("path", { fill: "#99A0B3", d: "M5.036 10.502h4v-1h-4zM15.036 14.502h-10v-1h10zM15.036 18.504h-10v-1h10z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-ritingc)`, d: "M16.507 4.213 10.786 0v11l5.721-4.213V11l7.471-5.5-7.47-5.5z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-ritingc`, x1: 9.693, x2: 23.978, y1: 5.739, y2: 5.739, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#2551DA" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#5679E8" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-ritinga` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M.036 0h24v24h-24z" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-ritingb`, width: 16, height: 20, x: 2.036, y: 3, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.760784 0 0 0 0 0.776471 0 0 0 0 0.831373 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3680" }))));
});
export {
  GGOActionContinueWriting
};
