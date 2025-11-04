import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfacePasskey = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfacePasskey", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#1C1C1C", d: "M11.465 6.278a3.362 3.362 0 1 1-6.724 0 3.362 3.362 0 0 1 6.724 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#1C1C1C", fillRule: "evenodd", d: "M15.532 11.608a2.642 2.642 0 1 0-1.987-.038v3.974l1.12 1.12 1.841-1.84-1.12-1.12 1.12-1.121zm-.227-2.47a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#1C1C1C", d: "M7.07 10.76a4.57 4.57 0 0 0-4.57 4.57c0 .747.606 1.353 1.354 1.353h8.41V12a4.55 4.55 0 0 0-3.128-1.24z" }));
});
export {
  InterfacePasskey
};
