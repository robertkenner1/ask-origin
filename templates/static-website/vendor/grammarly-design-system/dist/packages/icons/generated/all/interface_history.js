import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceHistory = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceHistory", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M3.174 9.996A7.994 7.994 0 1 1 7.17 16.92a.5.5 0 0 1 .5-.866 6.994 6.994 0 1 0-3.497-6.057v.667l1.644-1.645a.5.5 0 1 1 .707.707l-2.498 2.498-.353.354-.354-.354L.822 9.725a.5.5 0 0 1 .707-.707l1.645 1.645zm7.994-4.871a.5.5 0 0 1 .5.5v3.871h2.622a.5.5 0 0 1 0 1h-3.622V5.625a.5.5 0 0 1 .5-.5", clipRule: "evenodd" }));
});
export {
  InterfaceHistory
};
