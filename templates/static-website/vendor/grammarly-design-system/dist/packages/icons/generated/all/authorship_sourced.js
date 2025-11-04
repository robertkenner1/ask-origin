import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AuthorshipSourced = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AuthorshipSourced", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#F6E4F6", fillRule: "evenodd", d: "M6.934 3.828V3.63c0-.624.506-1.13 1.13-1.13h3.872c.624 0 1.13.506 1.13 1.13v.198h.001a3.13 3.13 0 0 1 3.129 3.129v7.414a3.13 3.13 0 0 1-3.129 3.13H6.934a3.13 3.13 0 0 1-3.128-3.13V6.958a3.13 3.13 0 0 1 3.128-3.129", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#9B469B", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.067 3.828a3.13 3.13 0 0 1 3.129 3.129v7.414a3.13 3.13 0 0 1-3.129 3.13H6.934a3.13 3.13 0 0 1-3.128-3.13V6.958a3.13 3.13 0 0 1 3.128-3.129m5.58 9.035H7.485m5.029-3.735H7.485m4.451-3.89H8.064a1.13 1.13 0 0 1-1.13-1.13V3.63c0-.624.506-1.13 1.13-1.13h3.872c.624 0 1.13.506 1.13 1.13v.478a1.13 1.13 0 0 1-1.13 1.13" }));
});
export {
  AuthorshipSourced
};
