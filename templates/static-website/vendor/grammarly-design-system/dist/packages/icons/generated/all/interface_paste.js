import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfacePaste = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfacePaste", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.118 4.62v-.727a.6.6 0 0 0-.6-.6H7.54m-2.965 0L2.61 3.26a.6.6 0 0 0-.61.6v7.975a.6.6 0 0 0 .6.6h2.835m3.736-3.449H12m-2.83 2.576H12M4.576 4.338V3.2a1.2 1.2 0 0 1 1.2-1.2h.565a1.2 1.2 0 0 1 1.2 1.2v1.137zM7.771 14H13.4a.6.6 0 0 0 .6-.6V7.1a.6.6 0 0 0-.6-.6H7.77a.6.6 0 0 0-.6.6v6.3a.6.6 0 0 0 .6.6" }));
});
export {
  InterfacePaste
};
