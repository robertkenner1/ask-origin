import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceSuggestionsSettings = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceSuggestionsSettings", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M7.375 3.8H4.25C3.56 3.8 3 4.36 3 5.05v7.45m8.125 1.5H4.5A1.5 1.5 0 0 1 3 12.5v0m8.125-3V11H4.5A1.5 1.5 0 0 0 3 12.5v0m8 0H4.5M11.125 2v1.8m0 1.8V3.8m0 0H13 9.25M13 7.5H9.25" }));
});
export {
  InterfaceSuggestionsSettings
};
