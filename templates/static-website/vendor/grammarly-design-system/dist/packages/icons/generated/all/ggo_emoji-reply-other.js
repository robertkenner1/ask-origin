import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOEmojiReplyOther = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiReplyOther", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-othera)`, fillRule: "evenodd", d: "M8.566 19.04c1.025.284 2.17.442 3.434.442C25.333 19.482 25.333 2 12 2 1.551 2-.71 12.736 5.219 17.381c.417.992.724 2.669-.552 4.619 2.446-.455 3.498-2.074 3.899-2.96", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M7.663 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.337 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-othera`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(11.3742 0 0 9.94791 10 9.296)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#6B71F3" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.406, stopColor: "#5C62E7" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.689, stopColor: "#555BE3" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.933, stopColor: "#4E54DB" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#4A50D1" }))));
});
export {
  GGOEmojiReplyOther
};
