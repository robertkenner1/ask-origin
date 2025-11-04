import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfacePause = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfacePause", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { fill: "#707070", fillRule: "evenodd", clipPath: `url(#${resourcePrefix}-pausea)`, clipRule: "evenodd" }, /* @__PURE__ */ React.createElement("path", { d: "M7.334 6.4a.4.4 0 0 1 .111-.283.37.37 0 0 1 .27-.117h.761c.101 0 .198.042.27.117a.4.4 0 0 1 .111.283v7.2a.4.4 0 0 1-.111.283.37.37 0 0 1-.27.117h-.762a.37.37 0 0 1-.269-.117.4.4 0 0 1-.112-.283zm3.809 0a.4.4 0 0 1 .112-.283.37.37 0 0 1 .269-.117h.762c.1 0 .198.042.27.117a.4.4 0 0 1 .11.283v7.2a.4.4 0 0 1-.11.283.37.37 0 0 1-.27.117h-.762a.37.37 0 0 1-.27-.117.4.4 0 0 1-.111-.283z" }), /* @__PURE__ */ React.createElement("path", { d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1.333a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-pausea` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M2 2h16v16H2z" }))));
});
export {
  InterfacePause
};
