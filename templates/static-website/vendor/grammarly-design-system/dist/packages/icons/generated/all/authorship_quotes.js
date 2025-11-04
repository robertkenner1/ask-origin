import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipQuotes = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipQuotes", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 10, r: 9, fill: "#B356B3" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M7.269 8.608c.238-.531.55-1.03.93-1.486a.297.297 0 0 0-.066-.44q-.475-.32-.952-.63a.33.33 0 0 0-.361.005 6.65 6.65 0 0 0-2.63 3.65c-.202.716-.423 2.081.372 3.171C5.08 13.582 5.977 14 6.864 14q.357 0 .7-.091a2.68 2.68 0 0 0 1.886-1.811 2.66 2.66 0 0 0-.588-2.611 2.92 2.92 0 0 0-1.593-.88M15.29 9.487a2.92 2.92 0 0 0-1.593-.879c.238-.532.55-1.03.929-1.486a.296.296 0 0 0-.065-.44 76 76 0 0 0-.952-.63.33.33 0 0 0-.361.005 6.65 6.65 0 0 0-2.63 3.65c-.202.717-.423 2.083.371 3.171.518.704 1.416 1.122 2.303 1.122q.358 0 .7-.09a2.68 2.68 0 0 0 1.886-1.81 2.66 2.66 0 0 0-.588-2.613", clipRule: "evenodd" }));
});
export {
  AuthorshipQuotes
};
