import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoLogomarkCodaBlack = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 31, height: 33, fill: "none", viewBox: "0 0 31 33", "aria-hidden": "true", "data-icon": "LogoLogomarkCodaBlack", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-ablacka)` }, /* @__PURE__ */ React.createElement("path", { fill: "#101010", d: "M23.75 23.94a7.377 7.377 0 0 1 0-14.75 7.15 7.15 0 0 1 4.693 1.757 1.25 1.25 0 0 0 2.057-.96v-6.92a2.5 2.5 0 0 0-2.5-2.5H3a2.5 2.5 0 0 0-2.5 2.5v27a2.5 2.5 0 0 0 2.5 2.5h25a2.5 2.5 0 0 0 2.5-2.5v-6.92a1.25 1.25 0 0 0-2.057-.96 7.15 7.15 0 0 1-4.693 1.753" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-ablacka` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M.5.567h30v32H.5z" }))));
});
export {
  LogoLogomarkCodaBlack
};
