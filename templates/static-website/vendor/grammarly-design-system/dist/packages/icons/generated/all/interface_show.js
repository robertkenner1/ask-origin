import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceShow = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceShow", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M9 8c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1 1 .5 1 1" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M13.43 8c-2.299 4-8.561 4-10.86 0 2.299-4 8.561-4 10.86 0ZM8.5 8a.5.5 0 0 1-.166.334A.5.5 0 0 1 8 8.5a.5.5 0 0 1-.334-.166A.5.5 0 0 1 7.5 8a.5.5 0 0 1 .166-.334A.5.5 0 0 1 8 7.5a.5.5 0 0 1 .334.166A.5.5 0 0 1 8.5 8ZM8 9.5c.413 0 .783-.201 1.041-.459s.459-.628.459-1.04-.201-.784-.459-1.042S8.413 6.5 8 6.5s-.783.201-1.041.459S6.5 7.587 6.5 8s.201.783.459 1.041S7.587 9.5 8 9.5Z" }));
});
export {
  InterfaceShow
};
