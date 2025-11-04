import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceSnippets = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceSnippets", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("rect", { width: 8, height: 8, x: 5.25, y: 2.5, stroke: "#646B81", strokeDasharray: "1 2", strokeLinecap: "round", rx: 2 }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M7.204 5h4.092M7.204 6.5h4.092M7.204 8H9.25M3.75 5.25v0c-.69 0-1.25.56-1.25 1.25v4.75a2 2 0 0 0 2 2h4.75c.69 0 1.25-.56 1.25-1.25v0" }));
});
export {
  InterfaceSnippets
};
