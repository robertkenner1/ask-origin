import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const ConsentSmartDictionary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "ConsentSmartDictionary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-onarya)` }, /* @__PURE__ */ React.createElement("path", { fill: "#73E1D4", fillRule: "evenodd", d: "M16.667 3.99a3.56 3.56 0 0 0-2.254 2.325 3.56 3.56 0 0 0-2.254-2.325 3.56 3.56 0 0 0 2.254-2.323 3.56 3.56 0 0 0 2.254 2.323", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#1C1C1C", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 0.7, d: "M9.697 3.99H4.584c-.69 0-1.25.56-1.25 1.25v10.984m11.079 2.11h-9.08a2 2 0 0 1-2-2v-.11m11.08-7.171v5.062h-9.08a2 2 0 0 0-2 2v.11m10.91 0H5.379M16.667 3.99a3.56 3.56 0 0 0-2.254 2.325 3.56 3.56 0 0 0-2.254-2.325 3.56 3.56 0 0 0 2.254-2.323 3.56 3.56 0 0 0 2.254 2.323" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-onarya` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" }))));
});
export {
  ConsentSmartDictionary
};
