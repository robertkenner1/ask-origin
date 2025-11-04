import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoLogomarkSuperhumanDark = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 50, height: 50, fill: "none", viewBox: "0 0 50 50", "aria-hidden": "true", "data-icon": "LogoLogomarkSuperhumanDark", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#421D24", d: "M49.533 13.342A14.06 14.06 0 0 0 36.613.444a149 149 0 0 0-23.27.023A14.05 14.05 0 0 0 .443 13.387a149 149 0 0 0 .023 23.27 14.06 14.06 0 0 0 12.92 12.898c7.747.6 15.524.595 23.27-.022a14.06 14.06 0 0 0 12.898-12.92 149 149 0 0 0-.022-23.27M25.06 7.968a5.04 5.04 0 0 1 5.048 5.034 5.04 5.04 0 0 1-5.048 5.034 5.04 5.04 0 0 1-5.047-5.034 5.04 5.04 0 0 1 5.047-5.034m9.524 33.166h.004l-8.761-4.798a1.59 1.59 0 0 0-1.533 0l-8.762 4.798c-1.41.77-2.948-.794-2.136-2.173L23.692 21.52c.612-1.038 2.122-1.038 2.734 0l10.295 17.442c.812 1.38-.721 2.944-2.136 2.173" }));
});
export {
  LogoLogomarkSuperhumanDark
};
