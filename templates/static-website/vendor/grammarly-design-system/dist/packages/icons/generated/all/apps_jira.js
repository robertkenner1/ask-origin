import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsJira = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsJira", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#2684FF", d: "M16.08 3.333H9.26c0 1.7 1.376 3.076 3.076 3.076h1.255v1.215c0 1.7 1.376 3.076 3.076 3.076V3.92a.587.587 0 0 0-.587-.587" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-sjiraa)`, d: "M12.7 6.733H5.88c0 1.7 1.376 3.076 3.076 3.076h1.255v1.215c0 1.7 1.376 3.076 3.076 3.076V7.32a.587.587 0 0 0-.587-.587" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-sjirab)`, d: "M9.32 10.133H2.5c0 1.7 1.376 3.077 3.076 3.077h1.255v1.214c0 1.7 1.376 3.076 3.076 3.076v-6.78a.587.587 0 0 0-.587-.587" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-sjiraa`, x1: 13.145, x2: 10.243, y1: 6.741, y2: 9.733, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.176, stopColor: "#0052CC" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2684FF" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-sjirab`, x1: 9.962, x2: 6.606, y1: 10.159, y2: 13.424, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.176, stopColor: "#0052CC" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2684FF" }))));
});
export {
  AppsJira
};
