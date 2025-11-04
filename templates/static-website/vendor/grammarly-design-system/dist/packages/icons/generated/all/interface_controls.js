import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceControls = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceControls", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M8.5 4H14M2 4h2.667m0 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2 8h5.5m3.833 0H14m-2.667 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 12h4M2 12h4m0 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" }));
});
export {
  InterfaceControls
};
