import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceMore = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceMore", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M8.001 6.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4M12.803 6.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4M3.2 6.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" }));
});
export {
  InterfaceMore
};
