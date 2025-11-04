import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceDraggable = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceDraggable", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M6.287 3.714a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M6.287 7.143a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M7.144 9.714a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0M6.287 14a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M10.573 2.857a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0M9.716 7.143a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M10.573 9.714a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0M9.716 14a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714" }));
});
export {
  InterfaceDraggable
};
