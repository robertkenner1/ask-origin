import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceExportXls = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceExportXls", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M4.544 1.899h-.5v5.369h1v-4.37h3.13V5.85h2.847v1.418h1V4.91l-.134-.144-2.506-2.707-.148-.16H4.544m4.63 2.951V3.308l1.429 1.542zM3.14 7.8h-.5v6.4H13.36V7.8H3.14m.5 5.4V8.8h8.722v4.4zm6.775-1.355a1 1 0 0 1-.303.041q-.31 0-.439-.155a.5.5 0 0 1-.094-.259h-.502a.75.75 0 0 0 .282.62q.282.223.774.223.482 0 .745-.227a.73.73 0 0 0 .265-.575q0-.337-.226-.514a1.1 1.1 0 0 0-.43-.183l-.434-.104a1.5 1.5 0 0 1-.329-.104.22.22 0 0 1-.12-.202q0-.147.122-.229a.57.57 0 0 1 .325-.082q.183 0 .306.063.184.096.198.323h.506q-.014-.402-.296-.612a1.1 1.1 0 0 0-.678-.212q-.478 0-.723.224a.73.73 0 0 0-.246.563q0 .37.254.545.15.105.544.193l.266.06q.233.05.344.118t.11.193q0 .214-.221.292m-3.456.405h-.64l-.478-.858-.506.858h-.611l.81-1.283-.771-1.236h.629l.45.819.46-.819h.61l-.772 1.215zm.204-2.519h.527v2.066h1.247v.453H7.162z", clipRule: "evenodd" }));
});
export {
  InterfaceExportXls
};
