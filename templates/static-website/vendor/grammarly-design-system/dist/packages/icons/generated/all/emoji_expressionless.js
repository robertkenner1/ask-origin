import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const EmojiExpressionless = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiExpressionless", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-nlessa)` }, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-nlessb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React.createElement("path", { fill: "#302C3B", d: "M15.784 16.375H8.217c-.789 0-.789-1.25 0-1.25h7.567c.788 0 .788 1.25 0 1.25M10.165 11.375H6.728c-.783 0-.783-1.25 0-1.25h3.437c.783 0 .783 1.25 0 1.25M17.273 11.375h-3.438c-.782 0-.782-1.25 0-1.25h3.438c.782 0 .782 1.25 0 1.25" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-nlessb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-nlessa` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
export {
  EmojiExpressionless
};
