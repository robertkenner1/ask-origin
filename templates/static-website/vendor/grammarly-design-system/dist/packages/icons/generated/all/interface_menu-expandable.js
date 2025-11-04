import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceMenuExpandable = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceMenuExpandable", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", stroke: "#646B81", strokeLinecap: "round", d: "M2.5 3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm10.19-3.752-.851-.844v2.694l.852-.845.148-.147.358-.355-.358-.356z" }));
});
export {
  InterfaceMenuExpandable
};
