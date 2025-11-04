import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionNotInterested = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionNotInterested", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-esteda)` }, /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-estedb)` }, /* @__PURE__ */ React.createElement("path", { fill: "#FFDCE1", fillRule: "evenodd", d: "M8.387 20.377c1.085.299 2.289.463 3.613.463 14.667 0 14.667-20.164 0-20.164-11.304 0-13.896 11.979-7.775 17.47.402.981.93 3.169-.727 5.825 2.815-.39 4.334-2.59 4.889-3.594", clipRule: "evenodd" })), /* @__PURE__ */ React.createElement("path", { fill: "#D31332", d: "M10.586 10.936 6.793 14.73l1.414 1.414L12 12.35l3.793 3.793 1.414-1.414-3.793-3.793 3.793-3.793-1.414-1.414L12 9.522 8.207 5.729 6.793 7.143z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-esteda` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-estedb`, width: 22, height: 23.295, x: 1, y: 0.676, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.886275 0 0 0 0 0.254902 0 0 0 0 0.356863 0 0 0 0.7 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5873_7252" }))));
});
export {
  GGOActionNotInterested
};
