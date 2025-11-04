import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsMicrosoft = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsMicrosoft", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#F35325", d: "M3 3h6.668v6.668H3z" }), /* @__PURE__ */ React.createElement("path", { fill: "#05A6F0", d: "M3 10.333h6.668V17H3z" }), /* @__PURE__ */ React.createElement("path", { fill: "#81BC06", d: "M10.332 3H17v6.668h-6.668z" }), /* @__PURE__ */ React.createElement("path", { fill: "#FFBA08", d: "M10.332 10.333H17V17h-6.668z" }));
});
export {
  AppsMicrosoft
};
