import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceFolderMove = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceFolderMove", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M3 6.333V3.5a.5.5 0 0 1 .5-.5h3.192a.5.5 0 0 1 .426.24l.93 1.52a.5.5 0 0 0 .427.24H13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V11M2 8.5h6m0 0-2-2m2 2-2 2" }));
});
export {
  InterfaceFolderMove
};
