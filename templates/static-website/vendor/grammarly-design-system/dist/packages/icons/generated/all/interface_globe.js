import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceGlobe = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceGlobe", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.5 10a7.5 7.5 0 0 1-7.5 7.5m7.5-7.5A7.5 7.5 0 0 0 10 2.5m7.5 7.5h-15m7.5 7.5A7.5 7.5 0 0 1 2.5 10m7.5 7.5a11.47 11.47 0 0 0 3-7.5 11.47 11.47 0 0 0-3-7.5m0 15A11.48 11.48 0 0 1 7 10a11.48 11.48 0 0 1 3-7.5M2.5 10A7.5 7.5 0 0 1 10 2.5" }));
});
export {
  InterfaceGlobe
};
