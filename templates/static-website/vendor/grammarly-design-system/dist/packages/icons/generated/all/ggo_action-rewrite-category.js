import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionRewriteCategory = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 25, fill: "none", viewBox: "0 0 24 25", "aria-hidden": "true", "data-icon": "GGOActionRewriteCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-egorya)` }, /* @__PURE__ */ React.createElement("path", { fill: "#F4F4F6", d: "M1 2.016h16v20H1z" })), /* @__PURE__ */ React.createElement("path", { fill: "#018374", d: "m15.638 11.262 2.882-.772a4.72 4.72 0 0 0-2.14-2.6c-1.739-1.003-3.779-.796-5.167.3L8.946 6.88c2.177-2.308 5.785-2.828 8.684-1.154a7.25 7.25 0 0 1 3.308 4.116l2.897-.776-3 5.196zM12.33 12.77l-2.882.772a4.72 4.72 0 0 0 2.14 2.6c1.74 1.003 3.78.796 5.167-.299l2.268 1.31c-2.177 2.307-5.786 2.827-8.684 1.154A7.25 7.25 0 0 1 7.03 14.19l-2.897.776 3-5.196z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-egorya`, width: 16, height: 20, x: 1, y: 2.016, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.760784 0 0 0 0 0.776471 0 0 0 0 0.831373 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_5231_3770" }))));
});
export {
  GGOActionRewriteCategory
};
