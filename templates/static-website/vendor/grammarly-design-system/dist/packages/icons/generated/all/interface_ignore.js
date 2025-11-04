import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceIgnore = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceIgnore", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M3 4h1.25M13 4h-1.25m0 0h-1.562m1.562 0-.552 8.828A1.25 1.25 0 0 1 9.951 14H6.049a1.25 1.25 0 0 1-1.247-1.172L4.25 4m0 0h1.563m0 0v-.75c0-.69.56-1.25 1.25-1.25v0h1.875v0c.69 0 1.25.56 1.25 1.25V4M5.812 4h4.376m-1.25 2.5v4.917M7.062 6.5v4.917" }));
});
export {
  InterfaceIgnore
};
