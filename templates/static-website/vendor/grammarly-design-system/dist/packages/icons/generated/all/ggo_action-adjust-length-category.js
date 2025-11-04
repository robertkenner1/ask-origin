import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionAdjustLengthCategory = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 24, fill: "none", viewBox: "0 0 25 24", "aria-hidden": "true", "data-icon": "GGOActionAdjustLengthCategory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-hcategorya)`, d: "M2.008 2h20v20h-20z" }), /* @__PURE__ */ React.createElement("path", { fill: "#5679E8", d: "M14.508 9h4.5l-7-7-7 7h4.5v6h-4.5l7 7 7-7h-4.5z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-hcategorya`, x1: 12.008, x2: 12.008, y1: 2, y2: 22, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#CDD1DC" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.872, stopColor: "#CDD1DC", stopOpacity: 0 }))));
});
export {
  GGOActionAdjustLengthCategory
};
