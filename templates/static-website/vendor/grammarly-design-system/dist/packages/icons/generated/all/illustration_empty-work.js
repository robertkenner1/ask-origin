import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const IllustrationEmptyWork = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptyWork", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("ellipse", { cx: 40, cy: 72, fill: "var(--color-illustration-shadow-default)", rx: 40, ry: 7 }), /* @__PURE__ */ React.createElement("path", { fill: "#FF4D45", fillRule: "evenodd", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M33 7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3zm-9 3a9 9 0 0 1 9-9h16a9 9 0 0 1 9 9v11a9 9 0 0 1-9 9H33a9 9 0 0 1-9-9z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("rect", { width: 78, height: 58, x: 1, y: 14, fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", rx: 10 }), /* @__PURE__ */ React.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M19 26.5V38c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V26.5" }), /* @__PURE__ */ React.createElement("rect", { width: 18, height: 58, x: 1, y: 14, fill: "#027E6F", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", rx: 9 }), /* @__PURE__ */ React.createElement("path", { fill: "#D5FF00", stroke: "var(--color-illustration-stroke-default)", d: "M29 40a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a6 6 0 0 1-12 0z" }), /* @__PURE__ */ React.createElement("circle", { cx: 35, cy: 53, r: 3, fill: "var(--color-illustration-fill-default)", stroke: "var(--color-illustration-stroke-default)" }), /* @__PURE__ */ React.createElement("path", { fill: "#D5FF00", stroke: "var(--color-illustration-stroke-default)", d: "M58 40a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a6 6 0 0 1-12 0z" }), /* @__PURE__ */ React.createElement("circle", { cx: 64, cy: 53, r: 3, fill: "var(--color-illustration-fill-default)", stroke: "var(--color-illustration-stroke-default)" }));
});
export {
  IllustrationEmptyWork
};
