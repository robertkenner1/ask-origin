import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const ConsentControl = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentControl", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("rect", { width: 15.917, height: 5.311, x: 2.375, y: 2.375, fill: "#B3F8F8", stroke: "#1C1C1C", strokeWidth: 0.75, rx: 2.655 }), /* @__PURE__ */ React.createElement("circle", { cx: 15.636, cy: 5.03, r: 2.655, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75 }), /* @__PURE__ */ React.createElement("rect", { width: 15.917, height: 5.311, x: -0.375, y: 0.375, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75, rx: 2.655, transform: "matrix(-1 0 0 1 17.916 11.09)" }), /* @__PURE__ */ React.createElement("circle", { cx: 3.03, cy: 3.03, r: 2.655, fill: "#fff", stroke: "#1C1C1C", strokeWidth: 0.75, transform: "matrix(-1 0 0 1 8.06 11.09)" }));
});
export {
  ConsentControl
};
