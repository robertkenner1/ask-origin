import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceMoney = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceMoney", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M6.2 9.2c0 .9.6 1.5 1.5 1.5h.8a1.3 1.3 0 0 0 .214-2.58L7.286 7.88A1.3 1.3 0 0 1 7.499 5.3H8.3c.828 0 1.5.6 1.5 1.5M8 4.1v7.8M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z" }));
});
export {
  InterfaceMoney
};
