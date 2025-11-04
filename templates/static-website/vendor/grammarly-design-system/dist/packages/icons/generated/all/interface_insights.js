import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceInsights = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceInsights", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M3.714 10.805a1.1 1.1 0 0 0-.571-.158c-.631 0-1.143.527-1.143 1.176C2 12.474 2.512 13 3.143 13s1.143-.527 1.143-1.177c0-.435-.23-.815-.572-1.018Zm0 0L5.43 8.137m0 0c.168.1.363.157.571.157.375 0 .708-.186.916-.473m-1.487.316a1.18 1.18 0 0 1-.572-1.02c0-.65.512-1.176 1.143-1.176s1.143.527 1.143 1.177c0 .263-.084.507-.227.703m0 0 1.612 1.514m0 0c-.152.2-.242.45-.242.724 0 .65.511 1.176 1.143 1.176.63 0 1.142-.526 1.142-1.176 0-.436-.23-.816-.571-1.02m-1.472.296a1.13 1.13 0 0 1 .9-.453c.209 0 .404.058.572.158m0 0 2.286-3.844m0 0c.168.1.363.157.571.157.631 0 1.143-.527 1.143-1.177S13.488 3 12.857 3s-1.143.527-1.143 1.176c0 .436.23.816.572 1.02Z" }));
});
export {
  InterfaceInsights
};
