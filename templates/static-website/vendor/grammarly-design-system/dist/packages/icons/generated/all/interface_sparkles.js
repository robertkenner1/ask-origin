import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceSparkles = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceSparkles", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.333 11.5a8.81 8.81 0 0 0-5.666 5.666A8.81 8.81 0 0 0 3 11.5a8.81 8.81 0 0 0 5.667-5.666 8.81 8.81 0 0 0 5.666 5.666M17.167 5.478a3.86 3.86 0 0 0-2.479 2.48 3.86 3.86 0 0 0-2.479-2.48A3.86 3.86 0 0 0 14.689 3a3.86 3.86 0 0 0 2.478 2.478", clipRule: "evenodd" }));
});
export {
  InterfaceSparkles
};
