import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceHighlight = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceHighlight", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#6D758D", strokeLinecap: "round", strokeWidth: 0.998, d: "m11.496 8.612 2.005 2.005M2.499 5.753h3.635M2.5 9.248h6.314M2.5 12.75h8.434m1.22-6.49a3.01 3.01 0 1 1-6.019 0 3.01 3.01 0 0 1 6.019 0Z" }));
});
export {
  InterfaceHighlight
};
