import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const SocialFacebook = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "SocialFacebook", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#1877F2", fillRule: "evenodd", d: "M22 12.06c0-1.923-.548-3.805-1.579-5.424a10 10 0 0 0-4.236-3.712 9.95 9.95 0 0 0-10.68 1.488 10.07 10.07 0 0 0-3.075 4.73 10.1 10.1 0 0 0-.054 5.653 10.07 10.07 0 0 0 2.983 4.79A9.97 9.97 0 0 0 10.438 22v-7.031h-2.54V12.06h2.54V9.843c0-2.521 1.493-3.915 3.776-3.915 1.094 0 2.239.197 2.239.197V8.6h-1.261c-1.243 0-1.63.776-1.63 1.572v1.887h2.775l-.444 2.909h-2.33V22a10 10 0 0 0 6.04-3.404A10.1 10.1 0 0 0 22 12.06", clipRule: "evenodd" }));
});
export {
  SocialFacebook
};
