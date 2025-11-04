import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOEmojiReplyQuestion = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiReplyQuestion", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-stiona)`, fillRule: "evenodd", d: "M8.566 19.04c1.025.284 2.17.442 3.434.442C25.333 19.482 25.333 2 12 2 1.551 2-.71 12.736 5.219 17.381c.417.992.724 2.669-.552 4.619 2.446-.455 3.498-2.074 3.899-2.96", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M10.939 14.219q0 .383.267.644.267.255.657.254a.95.95 0 0 0 .684-.254.85.85 0 0 0 .273-.644.87.87 0 0 0-.273-.658.94.94 0 0 0-.684-.26q-.39 0-.657.26a.88.88 0 0 0-.267.658M9.324 8.457h1.12q0-.326.098-.605a1.4 1.4 0 0 1 .286-.495q.189-.215.475-.332.294-.124.684-.124.384 0 .716.137.339.13.547.416.215.286.215.756 0 .507-.267.807a6 6 0 0 1-.723.664q-.318.254-.605.534a2.3 2.3 0 0 0-.462.631 1.76 1.76 0 0 0-.17.82l.007.547h1.14v-.39q0-.378.097-.612.105-.234.325-.443.228-.214.6-.514.312-.247.598-.527a2.4 2.4 0 0 0 .475-.658q.19-.384.19-.924 0-.762-.378-1.257a2.26 2.26 0 0 0-.983-.736 3.3 3.3 0 0 0-1.27-.247q-.475 0-.957.13a2.7 2.7 0 0 0-.879.423q-.404.287-.644.782-.242.487-.235 1.217" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-stiona`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(11.3742 0 0 9.94791 10 9.296)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#17A9C9" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.406, stopColor: "#15A2C1" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.689, stopColor: "#15A2C1" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.933, stopColor: "#1095B3" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#1290AC" }))));
});
export {
  GGOEmojiReplyQuestion
};
