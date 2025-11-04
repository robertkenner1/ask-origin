import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const OutcomeStyleGuide = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "OutcomeStyleGuide", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("circle", { cx: 12, cy: 12, r: 8, fill: "#333" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M10.348 14.67H8.533l2.357-7.003h2.248l2.357 7.003H13.68l-.46-1.47h-2.412zm.863-2.756h1.606L12.04 9.43h-.055z" }), /* @__PURE__ */ React.createElement("path", { stroke: "#fff", d: "M8 16.834h8" }));
});
export {
  OutcomeStyleGuide
};
