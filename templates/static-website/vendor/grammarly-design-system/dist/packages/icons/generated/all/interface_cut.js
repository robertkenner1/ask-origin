import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceCut = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceCut", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "m8.564 7.147 2.043-4.438a.5.5 0 0 0-.908-.418L8.013 5.952 6.326 2.291a.5.5 0 0 0-.908.418l2.045 4.438-1.117 2.425A2.333 2.333 0 0 0 2 10.754a2.334 2.334 0 0 0 4.481.916l1.533-3.328 1.508 3.274A2.335 2.335 0 1 0 9.68 9.57zm1.927 4.188.002-.001-.048-.105a1.334 1.334 0 1 1 .046.106m-4.824-.58a1.334 1.334 0 1 1-2.667 0 1.334 1.334 0 0 1 2.667 0", clipRule: "evenodd" }));
});
export {
  InterfaceCut
};
