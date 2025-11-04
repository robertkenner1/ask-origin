import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoCodaTypeMonoLight = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 93, height: 33, fill: "none", viewBox: "0 0 93 33", "aria-hidden": "true", "data-icon": "LogoCodaTypeMonoLight", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: coda type mono light") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-monolightclip0_28185_1048)` }, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-coda-light)", d: "M0 19.787C0 27.473 5.32 32.25 12.051 32.25c2.366 0 4.732-.571 6.458-1.863v-6.006a8.48 8.48 0 0 1-5.686 2.155c-3.497 0-6.286-2.503-6.286-6.732 0-4.228 2.777-6.685 6.286-6.685a8.29 8.29 0 0 1 5.714 2.137V9.239c-1.714-1.32-4.091-1.823-6.457-1.823C5.32 7.416 0 12.193 0 19.787M32.223 7.416c-6.857 0-11.646 5.097-11.646 12.371S25.354 32.25 32.223 32.25c6.868 0 11.686-5.143 11.686-12.463S39.137 7.416 32.223 7.416m0 19.24c-3.274 0-5.097-2.857-5.097-6.857s1.823-6.823 5.097-6.823 5.091 2.857 5.091 6.823c0 3.965-1.771 6.857-5.091 6.857M62.669 9.919a8.28 8.28 0 0 0-6.006-2.503c-6.914 0-10.823 5.594-10.823 12.371 0 6.857 3.909 12.463 10.823 12.463a8.46 8.46 0 0 0 6.006-2.503v1.96h6.594V.25h-6.594zm0 13.828a5.05 5.05 0 0 1-4.503 2.726c-3.595 0-5.715-2.857-5.715-6.686s2.138-6.64 5.715-6.64a5.06 5.06 0 0 1 4.503 2.777zM82.457 7.416c-3.183 0-6.228.868-7.96 1.96v5.714A11.9 11.9 0 0 1 81 13.13c3.366 0 5.326 1.457 5.326 3.777v1.32c-.96-.686-3.28-1.411-5.326-1.411-5.229 0-9.183 3.091-9.183 7.64 0 4.914 3.954 7.685 8.777 7.685 2.589 0 4.955-.908 5.715-1.68v1.275h6.365V16.513c.017-5.777-3.714-9.097-10.217-9.097m3.869 17.828c-.572 1.275-2.32 2.052-4.189 2.052-2.091 0-4.228-.869-4.228-2.915 0-2.045 2.137-2.908 4.228-2.908 1.869 0 3.594.771 4.189 2.046z", className: "monolightcolor-group" })));
});
export {
  LogoCodaTypeMonoLight
};
