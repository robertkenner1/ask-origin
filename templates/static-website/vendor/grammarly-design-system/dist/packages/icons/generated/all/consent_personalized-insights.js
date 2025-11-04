import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const ConsentPersonalizedInsights = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentPersonalizedInsights", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-ightsa)` }, /* @__PURE__ */ React.createElement("circle", { cx: 7.349, cy: 8.848, r: 1.5, fill: "#73E1D4" }), /* @__PURE__ */ React.createElement("circle", { cx: 3.521, cy: 15.098, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React.createElement("circle", { cx: 7.349, cy: 8.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React.createElement("circle", { cx: 12, cy: 12.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React.createElement("circle", { cx: 16.465, cy: 4.848, r: 1.65, stroke: "#1C1C1C", strokeWidth: 0.7 }), /* @__PURE__ */ React.createElement("path", { stroke: "#1C1C1C", strokeWidth: 0.7, d: "m4.366 13.918 2.412-3.759M8.388 9.746l2.348 2.227M12.704 11.515l3.161-5.28" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-ightsa` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" }))));
});
export {
  ConsentPersonalizedInsights
};
