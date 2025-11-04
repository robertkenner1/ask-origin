import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceStyleguide = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceStyleguide", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { stroke: "#646B81", clipPath: `url(#${resourcePrefix}-guidea)` }, /* @__PURE__ */ React.createElement("path", { d: "M11.988 9.603c1.284 1.284.815 3.22.815 3.22s-1.915.448-3.198-.836c-1.1-1.1-.733-3.096-.733-3.096s2.016-.388 3.116.712ZM6.303 3.915c1.283 1.284.814 3.22.814 3.22s-1.914.448-3.197-.836c-1.1-1.1-.734-3.096-.734-3.096s2.017-.388 3.117.712ZM6.405 11.987c-1.284 1.284-3.22.814-3.22.814s-.447-1.915.836-3.198c1.1-1.1 3.096-.734 3.096-.734s.388 2.018-.712 3.118ZM12.09 6.3c-1.283 1.284-3.218.815-3.218.815s-.448-1.915.835-3.199c1.1-1.1 3.095-.733 3.095-.733s.389 2.017-.711 3.117Z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-guidea` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" }))));
});
export {
  InterfaceStyleguide
};
