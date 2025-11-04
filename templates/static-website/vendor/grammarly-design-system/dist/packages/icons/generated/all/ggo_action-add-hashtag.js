import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionAddHashtag = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionAddHashtag", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-shtaga)` }, /* @__PURE__ */ React.createElement("path", { fill: "#D7E0FE", fillRule: "evenodd", d: "M8.387 20.377c1.085.299 2.289.463 3.613.463 14.667 0 14.667-20.164 0-20.164-11.304 0-13.896 11.978-7.775 17.47.402.98.93 3.168-.727 5.825 2.815-.39 4.334-2.59 4.889-3.594", clipRule: "evenodd" })), /* @__PURE__ */ React.createElement("path", { fill: "#2551DA", d: "m18.23 9.145.306-2h-2.498l.382-2.499h-2l-.382 2.499h-3.003l.383-2.499h-2l-.383 2.499H6.536l-.306 2H8.73l-.46 3.002H5.77l-.306 2h2.499l-.383 2.5h2l.383-2.5h3.002l-.383 2.5h2l.383-2.5h2.499l.306-2h-2.499l.46-3.002zm-4.959 3.002H10.27l.46-3.002h3.002z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-shtaga`, width: 22, height: 23.295, x: 1, y: 0.676, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.337255 0 0 0 0 0.47451 0 0 0 0 0.909804 0 0 0 0.75 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5873_7305" }))));
});
export {
  GGOActionAddHashtag
};
