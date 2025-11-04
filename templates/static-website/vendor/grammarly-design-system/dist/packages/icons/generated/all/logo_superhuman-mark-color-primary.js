import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoSuperhumanMarkColorPrimary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoSuperhumanMarkColorPrimary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: superhuman mark color primary") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-rimaryclip0_28185_1127)` }, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-superhuman-primary)", d: "M31.702 8.538A9.004 9.004 0 0 0 23.43.282 96 96 0 0 0 8.538.298 8.996 8.996 0 0 0 .282 8.57a96 96 0 0 0 .016 14.892 9.004 9.004 0 0 0 8.272 8.256c4.955.379 9.931.379 14.892-.016a9.004 9.004 0 0 0 8.256-8.272 96 96 0 0 0-.016-14.892" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-hero-dark)", d: "m22.134 26.326-5.606-3.073a1.03 1.03 0 0 0-.981 0L9.94 26.326c-.901.496-1.888-.507-1.365-1.392l6.587-11.163a1.02 1.02 0 0 1 1.75 0l6.591 11.163c.518.885-.464 1.888-1.37 1.392M19.27 8.32a3.224 3.224 0 0 1-3.233 3.22 3.223 3.223 0 0 1-3.226-3.22 3.227 3.227 0 0 1 3.226-3.222 3.23 3.23 0 0 1 3.233 3.221" })));
});
export {
  LogoSuperhumanMarkColorPrimary
};
