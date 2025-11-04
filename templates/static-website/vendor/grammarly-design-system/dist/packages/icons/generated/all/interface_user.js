import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceUser = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceUser", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "m3.714 12 2.11-.88a2.14 2.14 0 0 0 1.319-1.977M12.286 12l-2.11-.88a2.14 2.14 0 0 1-1.319-1.977M6 6.286v1.143a2 2 0 1 0 4 0V6.286a2 2 0 1 0-4 0ZM14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z" }));
});
export {
  InterfaceUser
};
