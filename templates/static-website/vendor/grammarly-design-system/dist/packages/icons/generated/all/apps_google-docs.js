import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsGoogleDocs = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGoogleDocs", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("rect", { width: 14, height: 14, x: 3, y: 3, fill: "#5086EC", rx: 2 }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M5.625 5.625h8.75v1.75h-8.75zM5.625 9.125h8.75v1.75h-8.75zM5.625 12.625h6.125v1.75H5.625z" }));
});
export {
  AppsGoogleDocs
};
