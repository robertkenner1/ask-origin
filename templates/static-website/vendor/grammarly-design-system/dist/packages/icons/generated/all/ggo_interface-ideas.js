import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceIdeas = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceIdeas", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", d: "M6 4.5h3A1.5 1.5 0 0 1 10.5 6v3A1.5 1.5 0 0 1 9 10.5H6A1.5 1.5 0 0 1 4.5 9V6A1.5 1.5 0 0 1 6 4.5Zm0 9h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9 19.5H6A1.5 1.5 0 0 1 4.5 18v-3A1.5 1.5 0 0 1 6 13.5Zm9-9h3A1.5 1.5 0 0 1 19.5 6v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13.5 9V6A1.5 1.5 0 0 1 15 4.5Z" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "m14.551 15.816-1.624.542a.15.15 0 0 0 0 .284l1.624.542a2 2 0 0 1 1.265 1.265l.542 1.624a.15.15 0 0 0 .284 0l.542-1.624a2 2 0 0 1 1.265-1.265l1.624-.542a.15.15 0 0 0 0-.284l-1.624-.542a2 2 0 0 1-1.265-1.265l-.542-1.624a.15.15 0 0 0-.284 0l-.542 1.624a2 2 0 0 1-1.265 1.265" }));
});
export {
  GGOInterfaceIdeas
};
