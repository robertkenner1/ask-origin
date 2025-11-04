import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceLoading = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceLoading", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#C2C6D4", fillRule: "evenodd", d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#05735A", fillRule: "evenodd", d: "M17 11a1 1 0 0 1 1 1 6 6 0 0 1-7.553 5.796 1 1 0 0 1 .518-1.932A4 4 0 0 0 16 12a1 1 0 0 1 1-1", clipRule: "evenodd" }));
});
export {
  GGOInterfaceLoading
};
