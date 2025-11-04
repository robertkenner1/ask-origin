import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceAnalytics = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceAnalytics", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M2.8 17.2h14.4" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M4.1 15.101v-4.6h2.2v4.6zm4.8.002v-7h2.2v7zm4.8 0v-11h2.2v11z" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M3.6 7.125c.547 0 1.085-.011 1.624-.131a6.8 6.8 0 0 0 1.842-.702c.485-.271.95-.585 1.38-.936C9 4.904 9.466 4.373 9.96 3.86" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", stroke: "#646B81", strokeWidth: 0.83, d: "m9.576 3.31 1.35-.414-.316 1.376z" }));
});
export {
  InterfaceAnalytics
};
