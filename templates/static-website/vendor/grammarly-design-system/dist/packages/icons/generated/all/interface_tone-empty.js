import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceToneEmpty = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceToneEmpty", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "m4.8 10.4.457-.4A2.08 2.08 0 0 1 8 10a2.08 2.08 0 0 0 2.743 0l.457-.4M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0ZM6.4 6.4a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Zm4.8 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" }));
});
export {
  InterfaceToneEmpty
};
