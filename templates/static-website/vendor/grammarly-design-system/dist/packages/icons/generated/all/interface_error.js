import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceError = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceError", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#D31332", fillRule: "evenodd", d: "M6.586 2.414a2 2 0 0 1 2.828 0l4.172 4.172a2 2 0 0 1 0 2.828l-4.172 4.172a2 2 0 0 1-2.828 0L2.414 9.414a2 2 0 0 1 0-2.828zM8 4.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 8 4.25m0 7.25A.75.75 0 1 0 8 10a.75.75 0 0 0 0 1.5", clipRule: "evenodd" }));
});
export {
  InterfaceError
};
