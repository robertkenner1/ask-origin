import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsConfluence = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsConfluence", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-uencea)`, d: "M3.52 13.514c-.149.242-.315.522-.456.746a.456.456 0 0 0 .152.62l2.965 1.825a.456.456 0 0 0 .632-.155c.119-.199.271-.457.438-.732 1.174-1.94 2.356-1.702 4.486-.685l2.94 1.398a.457.457 0 0 0 .613-.228l1.412-3.193a.456.456 0 0 0-.228-.597c-.62-.292-1.854-.874-2.965-1.41-3.996-1.94-7.392-1.815-9.99 2.411" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-uenceb)`, d: "M16.814 6.268c.148-.241.314-.522.456-.745a.456.456 0 0 0-.153-.62l-2.965-1.825a.457.457 0 0 0-.65.15c-.119.199-.271.456-.438.732-1.174 1.939-2.356 1.702-4.486.685l-2.93-1.392a.456.456 0 0 0-.614.228L3.622 6.674a.456.456 0 0 0 .228.598c.62.292 1.855.873 2.965 1.41 4.005 1.938 7.4 1.808 9.999-2.414" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-uencea`, x1: 16.622, x2: 7.652, y1: 17.646, y2: 12.492, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.18, stopColor: "#0052CC" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2684FF" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-uenceb`, x1: 3.711, x2: 12.683, y1: 2.134, y2: 7.29, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.18, stopColor: "#0052CC" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2684FF" }))));
});
export {
  AppsConfluence
};
