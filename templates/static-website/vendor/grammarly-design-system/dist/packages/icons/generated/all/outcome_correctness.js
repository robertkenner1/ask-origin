import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const OutcomeCorrectness = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "OutcomeCorrectness", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#FFC8D2", fillRule: "evenodd", d: "m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-tnessa)` }, /* @__PURE__ */ React.createElement("path", { fill: "#EE445F", fillRule: "evenodd", d: "M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926z", clipRule: "evenodd" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-tnessa`, width: 15.113, height: 23.407, x: 1.75, y: 0.25, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 2.5 }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_1810" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_1810", result: "shape" }))));
});
export {
  OutcomeCorrectness
};
