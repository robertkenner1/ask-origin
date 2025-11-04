import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceTools = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceTools", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", stroke: "#646B81", strokeMiterlimit: 10, strokeWidth: 0.924, d: "m1.518 14.784 3.126-1.195a.04.04 0 0 0 .023-.036l-.07-.282a2.4 2.4 0 0 0-2.229-1.83.03.03 0 0 0-.028.029z" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeMiterlimit: 10, d: "M3.885 12.081c.423.39.683.897.772 1.428.004.029.04.037.06.019l7.903-9.03a1.64 1.64 0 0 0-.112-2.27 1.545 1.545 0 0 0-2.214.13l-7.902 9.03c-.02.022-.008.055.023.06a2.4 2.4 0 0 1 1.47.633Z" }), /* @__PURE__ */ React.createElement("rect", { width: 3.097, height: 18.09, x: 15.952, y: 3.563, stroke: "#646B81", rx: 0.268, transform: "rotate(41.842 15.952 3.563)" }), /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeWidth: 0.6, d: "m13.89 8.405.606.543m-1.813.805.606.543m-1.813.805.607.543m-1.814.804.607.543m-1.813.805.606.543m-1.813.805.606.543" }));
});
export {
  InterfaceTools
};
