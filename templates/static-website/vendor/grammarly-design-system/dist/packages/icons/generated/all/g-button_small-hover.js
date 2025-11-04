import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GButtonSmallHover = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "GButtonSmallHover", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#15C39A", fillRule: "evenodd", d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeWidth: 0.8, d: "m10.727 9.273 2.91-2.91m0 0h-3.273m3.272 0v3.273M9.273 10.727l-2.91 2.91m0 0h3.273m-3.272 0v-3.274" }));
});
export {
  GButtonSmallHover
};
