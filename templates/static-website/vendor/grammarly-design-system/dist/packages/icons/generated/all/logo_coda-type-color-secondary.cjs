"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const createIcon = require("../createIcon.cjs");
const helpers = require("../helpers.cjs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const LogoCodaTypeColorSecondary = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 93, height: 33, fill: "none", viewBox: "0 0 93 33", "aria-hidden": "true", "data-icon": "LogoCodaTypeColorSecondary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: coda type color secondary") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-econdaryclip0_28185_1060)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-logo-coda-secondary)", d: "M0 20.162c0 7.686 5.32 12.463 12.051 12.463 2.366 0 4.732-.571 6.458-1.863v-6.006a8.48 8.48 0 0 1-5.686 2.155c-3.497 0-6.286-2.503-6.286-6.732 0-4.228 2.777-6.685 6.286-6.685a8.29 8.29 0 0 1 5.714 2.137V9.614c-1.714-1.32-4.091-1.823-6.457-1.823C5.32 7.79 0 12.568 0 20.162M32.223 7.79c-6.857 0-11.646 5.098-11.646 12.372s4.777 12.463 11.646 12.463c6.868 0 11.686-5.143 11.686-12.463S39.137 7.791 32.223 7.791m0 19.24c-3.274 0-5.097-2.856-5.097-6.856s1.823-6.823 5.097-6.823 5.091 2.857 5.091 6.823c0 3.965-1.771 6.857-5.091 6.857M62.669 10.294a8.28 8.28 0 0 0-6.006-2.503c-6.914 0-10.823 5.594-10.823 12.371 0 6.857 3.909 12.463 10.823 12.463a8.46 8.46 0 0 0 6.006-2.503v1.96h6.594V.625h-6.594zm0 13.828a5.05 5.05 0 0 1-4.503 2.726c-3.595 0-5.715-2.857-5.715-6.686s2.138-6.64 5.715-6.64a5.06 5.06 0 0 1 4.503 2.777zM82.457 7.79c-3.183 0-6.228.87-7.96 1.96v5.715A11.9 11.9 0 0 1 81 13.505c3.366 0 5.326 1.457 5.326 3.777v1.32c-.96-.686-3.28-1.411-5.326-1.411-5.229 0-9.183 3.091-9.183 7.64 0 4.914 3.954 7.685 8.777 7.685 2.589 0 4.955-.908 5.715-1.68v1.275h6.365V16.888c.017-5.777-3.714-9.097-10.217-9.097m3.869 17.83c-.572 1.274-2.32 2.05-4.189 2.05-2.091 0-4.228-.868-4.228-2.914 0-2.045 2.137-2.908 4.228-2.908 1.869 0 3.594.771 4.189 2.046z", className: "econdarycolor-group" })));
});
exports.LogoCodaTypeColorSecondary = LogoCodaTypeColorSecondary;
