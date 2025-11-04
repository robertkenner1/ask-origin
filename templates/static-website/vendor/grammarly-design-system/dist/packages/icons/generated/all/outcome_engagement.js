import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const OutcomeEngagement = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "OutcomeEngagement", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#B9F9EA", fillRule: "evenodd", d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-ementa)` }, /* @__PURE__ */ React.createElement("path", { fill: "#0FDCAC", fillRule: "evenodd", d: "M12 13.5A3.75 3.75 0 1 0 12 6a3.75 3.75 0 0 0 0 7.5m0 4.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5", clipRule: "evenodd" })), /* @__PURE__ */ React.createElement("path", { fill: "#C0F9EC", fillRule: "evenodd", d: "M15 12a3.74 3.74 0 0 1-3 1.5A3.74 3.74 0 0 1 9 12a3.74 3.74 0 0 1 3-1.5c1.227 0 2.316.59 3 1.5", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-ementa`, width: 17.5, height: 22, x: 3.25, y: 1, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_1822" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_1822", result: "shape" }))));
});
export {
  OutcomeEngagement
};
