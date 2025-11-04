import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceStyleNeutral = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceStyleNeutral", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M9.7 14.4a3.83 3.83 0 0 0 4.6 0l-.6-.8a2.834 2.834 0 0 1-3.4 0zM9.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", clipRule: "evenodd" }));
});
export {
  GGOInterfaceStyleNeutral
};
