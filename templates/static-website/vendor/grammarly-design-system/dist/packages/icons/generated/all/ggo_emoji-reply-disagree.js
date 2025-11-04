import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOEmojiReplyDisagree = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiReplyDisagree", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-agreea)`, fillRule: "evenodd", d: "M8.566 19.04c1.025.284 2.17.442 3.434.442C25.333 19.482 25.333 2 12 2 1.551 2-.71 12.736 5.218 17.381c.418.992.725 2.669-.551 4.62 2.446-.456 3.498-2.075 3.899-2.961", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#fff", d: "m9 14 6-6M15 14 9 8" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-agreea`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(11.3742 0 0 9.94806 10 9.297)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#DC590F" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.406, stopColor: "#DC4C0F" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.689, stopColor: "#CE480F" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.891, stopColor: "#C53609" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#C53609" }))));
});
export {
  GGOEmojiReplyDisagree
};
