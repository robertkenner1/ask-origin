import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceInProgress = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceInProgress", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M10 17.5a7.5 7.5 0 0 0 0-15" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeDasharray: "2 2", d: "M10 17.5a7.5 7.5 0 0 1 0-15" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "m7 10.407 2 1.926L13.5 8" }));
});
export {
  InterfaceInProgress
};
