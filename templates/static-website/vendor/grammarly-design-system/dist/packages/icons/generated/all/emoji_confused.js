import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const EmojiConfused = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiConfused", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-fuseda)` }, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-fusedb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React.createElement("path", { fill: "#302C3B", d: "M8.875 12.156c.777 0 1.406-.84 1.406-1.875s-.63-1.875-1.406-1.875c-.777 0-1.406.84-1.406 1.875s.63 1.875 1.406 1.875M15.125 12.156c.777 0 1.406-.84 1.406-1.875s-.63-1.875-1.406-1.875c-.777 0-1.406.84-1.406 1.875s.63 1.875 1.406 1.875M15.323 14.692c-2.38-.773-5.407-.01-6.78 1.875-.113.154.036.335.205.217 1.374-.955 4.202-1.556 6.203-.837.766.276 1.183-.992.371-1.255" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-fusedb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-fuseda` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
export {
  EmojiConfused
};
