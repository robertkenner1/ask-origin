import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceApps = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceApps", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.53 9.059V14M14 11.53H9.059m.5-9.53H13.5a.5.5 0 0 1 .5.5v3.941a.5.5 0 0 1-.5.5H9.559a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5M2.5 2h3.941a.5.5 0 0 1 .5.5v3.941a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5m0 12h3.941a.5.5 0 0 0 .5-.5V9.559a.5.5 0 0 0-.5-.5H2.5a.5.5 0 0 0-.5.5V13.5a.5.5 0 0 0 .5.5" }));
});
export {
  InterfaceApps
};
