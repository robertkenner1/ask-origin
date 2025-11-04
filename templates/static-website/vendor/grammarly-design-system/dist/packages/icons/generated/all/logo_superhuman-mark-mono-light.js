import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoSuperhumanMarkMonoLight = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoSuperhumanMarkMonoLight", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: superhuman mark mono light") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-superhuman-light)", d: "M31.7 8.54A8.996 8.996 0 0 0 23.433.284 95 95 0 0 0 8.539.298a8.99 8.99 0 0 0-8.254 8.27A95 95 0 0 0 .298 23.46a8.996 8.996 0 0 0 8.27 8.254 95 95 0 0 0 14.892-.014 8.996 8.996 0 0 0 8.254-8.27c.384-4.957.38-9.934-.014-14.892M16.04 5.1a3.226 3.226 0 0 1 3.23 3.222 3.226 3.226 0 0 1-3.23 3.221 3.226 3.226 0 0 1-3.23-3.221 3.226 3.226 0 0 1 3.23-3.222m6.095 21.226h.003l-5.607-3.071a1.02 1.02 0 0 0-.982 0l-5.607 3.07c-.903.494-1.887-.507-1.367-1.39l6.589-11.163a1.017 1.017 0 0 1 1.75 0L23.5 24.935c.52.883-.461 1.884-1.367 1.39" }));
});
export {
  LogoSuperhumanMarkMonoLight
};
