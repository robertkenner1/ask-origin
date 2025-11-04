import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoGoMarkColorSecondary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoGoMarkColorSecondary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: go logo mark color secondary") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-hero-default)", fillRule: "evenodd", d: "M17.263 13.18c-.563-.929-1.968-.929-2.53 0L5.21 28.86c-.755 1.244.67 2.651 1.974 1.955l8.105-4.315c.44-.232.978-.232 1.417 0l8.105 4.315c1.31.696 2.73-.712 1.982-1.955zM15.997 1c-2.575 0-4.665 2.03-4.665 4.525 0 2.502 2.09 4.523 4.666 4.523 2.582 0 4.67-2.02 4.671-4.523C20.67 3.03 18.581 1 15.998 1", clipRule: "evenodd" }));
});
export {
  LogoGoMarkColorSecondary
};
