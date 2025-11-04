import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoLogomarkSuperhumanBrand = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 50, height: 50, fill: "none", viewBox: "0 0 50 50", "aria-hidden": "true", "data-icon": "LogoLogomarkSuperhumanBrand", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-branda)` }, /* @__PURE__ */ React.createElement("path", { fill: "#D6D3FE", d: "M49.534 13.34C48.984 6.45 43.501.983 36.61.44A149.7 149.7 0 0 0 13.34.466C6.45 1.007.982 6.491.441 13.391A149.6 149.6 0 0 0 .466 36.66c.55 6.892 6.033 12.359 12.925 12.9a149.6 149.6 0 0 0 23.268-.024c6.892-.55 12.359-6.034 12.9-12.926.592-7.743.592-15.518-.025-23.268" }), /* @__PURE__ */ React.createElement("path", { fill: "#421D24", d: "m34.584 41.135-8.759-4.801a1.62 1.62 0 0 0-1.533 0l-8.759 4.8c-1.408.775-2.95-.791-2.133-2.175l10.292-17.442c.608-1.034 2.125-1.034 2.733 0l10.3 17.442c.809 1.384-.724 2.95-2.141 2.175M30.108 13a5.04 5.04 0 0 1-5.05 5.033 5.036 5.036 0 0 1-5.042-5.034 5.04 5.04 0 0 1 5.042-5.033c2.792 0 5.05 2.258 5.05 5.033" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-branda` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h50v50H0z" }))));
});
export {
  LogoLogomarkSuperhumanBrand
};
