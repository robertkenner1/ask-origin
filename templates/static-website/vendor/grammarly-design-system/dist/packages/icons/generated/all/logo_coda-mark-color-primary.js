import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoCodaMarkColorPrimary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 30, height: 32, fill: "none", viewBox: "0 0 30 32", "aria-hidden": "true", "data-icon": "LogoCodaMarkColorPrimary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: coda mark color primary") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-colorprimaryclip0_28185_1046)` }, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-coda-primary)", d: "M23.25 23.373a7.377 7.377 0 0 1 0-14.75 7.15 7.15 0 0 1 4.693 1.757A1.25 1.25 0 0 0 30 9.42V2.5A2.5 2.5 0 0 0 27.5 0h-25A2.5 2.5 0 0 0 0 2.5v27A2.5 2.5 0 0 0 2.5 32h25a2.5 2.5 0 0 0 2.5-2.5v-6.92a1.25 1.25 0 0 0-2.057-.96 7.15 7.15 0 0 1-4.693 1.753", className: "colorprimaryprimary-element" })));
});
export {
  LogoCodaMarkColorPrimary
};
