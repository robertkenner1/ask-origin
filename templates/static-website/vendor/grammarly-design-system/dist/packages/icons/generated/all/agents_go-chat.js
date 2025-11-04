import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsGoChat = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsGoChat", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: go chat") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M10.575 8.684a.668.668 0 0 0-1.147 0L5.11 16.001c-.342.58.304 1.238.895.913L9.68 14.9a.68.68 0 0 1 .642 0l3.675 2.014c.594.324 1.237-.332.899-.913zM10 3a2.115 2.115 0 0 0-2.115 2.112c0 1.167.948 2.11 2.115 2.11a2.113 2.113 0 0 0 2.118-2.11A2.115 2.115 0 0 0 10.001 3", clipRule: "evenodd" }));
});
export {
  AgentsGoChat
};
