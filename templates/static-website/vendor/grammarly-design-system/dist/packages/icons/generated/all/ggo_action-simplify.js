import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionSimplify = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionSimplify", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-plifya)` }, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-plifyb)` }, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-plifyc)`, d: "M23.008 20.054s-.917.819-4.067 1.354l-1.6-4.233-.51 4.527a41 41 0 0 1-3.823.178c-7.35 0-10-1.826-10-1.826l3.2-7.603h13.61z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-plifyd)`, d: "M13.012 1.016a2.26 2.26 0 0 0-2.248 2.487l.497 4.907H8.117a1.91 1.91 0 0 0-1.913 1.904v2.137H19.82v-2.137a1.91 1.91 0 0 0-1.913-1.904h-3.145l.498-4.907a2.26 2.26 0 0 0-2.248-2.487" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-plifye)`, d: "M1.327 23.016a4.1 4.1 0 0 1-.319-1.613 4.27 4.27 0 0 1 4.264-4.264 4.27 4.27 0 0 1 3.986 2.731 3.65 3.65 0 0 1 2.056-.63 3.693 3.693 0 0 1 3.694 3.695v.081z" }))), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-plifyc`, x1: 13.483, x2: 16.58, y1: 19.705, y2: 6.657, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FAA300" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.842, stopColor: "#FFEAC2" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-plifyd`, x1: 13.012, x2: 13.012, y1: 1.016, y2: 13.655, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.177, stopColor: "#5679E8" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#2551DA" })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-plifye`, x1: 8.492, x2: 8.355, y1: 18.029, y2: 24.404, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#E2E4E9" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#C2C6D4" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-plifya` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M.008.016h24v24h-24z" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-plifyb` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M.008 1.016h23v23h-23z" }))));
});
export {
  GGOActionSimplify
};
