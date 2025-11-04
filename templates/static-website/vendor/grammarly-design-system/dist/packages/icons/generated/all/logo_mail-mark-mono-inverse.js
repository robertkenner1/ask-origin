import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoMailMarkMonoInverse = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 34, fill: "none", viewBox: "0 0 32 34", "aria-hidden": "true", "data-icon": "LogoMailMarkMonoInverse", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: mail mark mono inverse") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-mail-default)", fillRule: "evenodd", d: "M15.802 2.686a.335.335 0 0 1 .396 0L28.23 11.61a.313.313 0 0 1 0 .505L16 21.185l-12.23-9.07a.313.313 0 0 1 0-.505zm11.693 18.705-4.448-3.298-.085-.064-4.533 3.362zm-3.18-4.365 4.91 3.642a1.88 1.88 0 0 1 0 3.042l-12.03 8.923a2.01 2.01 0 0 1-2.39 0L2.776 23.71a1.88 1.88 0 0 1 0-3.042l4.91-3.642-4.91-3.643a1.88 1.88 0 0 1 0-3.042l12.03-8.923a2.01 2.01 0 0 1 2.39 0l12.03 8.923a1.88 1.88 0 0 1 0 3.042zM9.038 18.029l-.085.064-5.183 3.843a.312.312 0 0 0 0 .506l12.032 8.923c.117.087.28.087.396 0l11.297-8.378H15.723l-.22-.164z", clipRule: "evenodd" }));
});
export {
  LogoMailMarkMonoInverse
};
