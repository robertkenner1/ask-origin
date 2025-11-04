import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceStarFilled = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceStarFilled", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", d: "M10.585 2.406a.624.624 0 0 0-1.17 0L7.71 6.966l-4.863.212a.624.624 0 0 0-.361 1.112l3.81 3.03-1.302 4.691a.624.624 0 0 0 .947.688L10 14.012l4.06 2.687a.624.624 0 0 0 .945-.688l-1.3-4.69 3.81-3.031a.624.624 0 0 0-.362-1.112l-4.863-.213z" }));
});
export {
  InterfaceStarFilled
};
