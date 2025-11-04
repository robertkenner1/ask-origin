import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceBracket = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 26, fill: "none", viewBox: "0 0 24 26", "aria-hidden": "true", "data-icon": "GGOInterfaceBracket", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#018374", stroke: "#fff", d: "M11 25.5h.5V9.309l5.17-2.585a1.5 1.5 0 0 0 .83-1.342V2A1.5 1.5 0 0 0 16 .5h-5.5a2 2 0 0 0-2 2v23H11Z" }));
});
export {
  GGOInterfaceBracket
};
