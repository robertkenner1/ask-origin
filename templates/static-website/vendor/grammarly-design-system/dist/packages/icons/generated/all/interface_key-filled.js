import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceKeyFilled = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceKeyFilled", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#1C1C1C", fillRule: "evenodd", d: "M10.29 11.304A4.03 4.03 0 0 1 2.5 9.861a4.028 4.028 0 0 1 7.731-1.586h6.061l1.709 1.708-2.807 2.808-1.71-1.71-1.708 1.71zm-3.768-.345a1.099 1.099 0 1 0 0-2.197 1.099 1.099 0 0 0 0 2.197", clipRule: "evenodd" }));
});
export {
  InterfaceKeyFilled
};
