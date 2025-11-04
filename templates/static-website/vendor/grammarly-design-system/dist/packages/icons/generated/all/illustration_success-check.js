import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const IllustrationSuccessCheck = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationSuccessCheck", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("circle", { cx: 40, cy: 40, r: 39.5, fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M63.322 30.656a5 5 0 0 0-6.644-7.474L30 46.896l-6.678-5.936a5 5 0 0 0-6.644 7.474L30 60.275z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M63.322 30.656a5 5 0 0 0-6.644-7.474L30 46.896l-6.678-5.936a5 5 0 0 0-6.644 7.474L30 60.275z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "var(--color-illustration-stroke-default)", d: "M63.737 23.597a5 5 0 0 1-.415 7.059L30 60.276 16.678 48.433a5 5 0 1 1 6.644-7.474L30 46.896l26.678-23.714a5 5 0 0 1 7.059.415Z" }));
});
export {
  IllustrationSuccessCheck
};
