import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfacePlus = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "InterfacePlus", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: interface/plus") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-base-default)", fillRule: "evenodd", d: "M12 5a.7.7 0 0 1 .7.7v5.6h5.6a.7.7 0 1 1 0 1.4h-5.6v5.6a.7.7 0 1 1-1.4 0v-5.6H5.7a.7.7 0 1 1 0-1.4h5.6V5.7A.7.7 0 0 1 12 5", clipRule: "evenodd" }));
});
export {
  InterfacePlus
};
