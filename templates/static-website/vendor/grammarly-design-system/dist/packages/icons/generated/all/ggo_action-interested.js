import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionInterested = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionInterested", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-resteda)` }, /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-restedb)` }, /* @__PURE__ */ React.createElement("path", { fill: "#E0FFF8", fillRule: "evenodd", d: "M8.387 20.377c1.085.299 2.289.463 3.613.463 14.667 0 14.667-20.164 0-20.164-11.304 0-13.896 11.979-7.775 17.47.402.981.93 3.169-.727 5.825 2.815-.39 4.334-2.59 4.889-3.594", clipRule: "evenodd" })), /* @__PURE__ */ React.createElement("path", { fill: "#018374", d: "M17.916 7.345 16.5 5.929l-6.55 6.55L7.5 10.031l-1.416 1.417 3.864 3.864z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-resteda` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-restedb`, width: 22, height: 23.295, x: 1, y: 0.676, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.0627451 0 0 0 0 0.752941 0 0 0 0 0.592157 0 0 0 0.75 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5873_7258" }))));
});
export {
  GGOActionInterested
};
