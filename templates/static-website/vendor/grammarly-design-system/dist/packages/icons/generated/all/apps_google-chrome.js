import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsGoogleChrome = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGoogleChrome", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-hromea)` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M10 13.498a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-hromeb)`, d: "M10 6.5h6.061a7 7 0 0 0-12.123 0l3.031 5.25h.003A3.495 3.495 0 0 1 10 6.5" }), /* @__PURE__ */ React.createElement("path", { fill: "#1A73E8", d: "M10 12.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-hromec)`, d: "M13.03 11.75 10 17a7 7 0 0 0 6.06-10.5H10l-.001.004a3.496 3.496 0 0 1 3.032 5.247" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-hromed)`, d: "M6.97 11.75 3.938 6.503A6.998 6.998 0 0 0 10 17l3.03-5.25-.002-.001a3.495 3.495 0 0 1-6.06.002" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-hromeb`, x1: 3.938, x2: 16.061, y1: 7.375, y2: 7.375, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#D93025" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#EA4335" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-hromec`, x1: 9.044, x2: 15.105, y1: 16.906, y2: 6.408, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FCC934" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FBBC04" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-hromed`, x1: 10.758, x2: 4.696, y1: 16.563, y2: 6.064, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#1E8E3E" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#34A853" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-hromea` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M3 3h14v14H3z" }))));
});
export {
  AppsGoogleChrome
};
