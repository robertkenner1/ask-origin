import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipUnverified = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipUnverified", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#DDD", d: "M16.708 9.515a7.014 7.014 0 1 0-14.029 0 7.015 7.015 0 1 0 14.03 0" }), /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", strokeLinejoin: "round", d: "m14.468 14.653 2.854 2.847M9.66 12.661v.006m-.001-1.838c-.01-.67.6-.953 1.052-1.212.553-.304.926-.788.926-1.46 0-.996-.805-1.795-1.794-1.795-.996 0-1.794.8-1.794 1.795m8.659 1.358a7.014 7.014 0 1 0-14.03 0 7.015 7.015 0 1 0 14.03 0" }));
});
export {
  AuthorshipUnverified
};
