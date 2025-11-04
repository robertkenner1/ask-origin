import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfacePin = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "GGOInterfacePin", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#018374", fillRule: "evenodd", d: "M17 18.938A8.001 8.001 0 0 0 16 3a8 8 0 0 0-1 15.938V30h2zM16 6.25a.75.75 0 0 1 .75.75v3.25H20a.75.75 0 0 1 0 1.5h-3.25V15a.75.75 0 0 1-1.5 0v-3.25H12a.75.75 0 0 1 0-1.5h3.25V7a.75.75 0 0 1 .75-.75", clipRule: "evenodd" }));
});
export {
  GGOInterfacePin
};
