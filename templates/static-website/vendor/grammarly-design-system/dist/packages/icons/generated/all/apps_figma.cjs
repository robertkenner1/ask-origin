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
const AppsFigma = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsFigma", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-figmaa)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0ACF83", d: "M7.667 18a2.67 2.67 0 0 0 2.666-2.667v-2.667H7.667a2.668 2.668 0 0 0 0 5.334" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#A259FF", d: "M5 10a2.67 2.67 0 0 1 2.667-2.666h2.666v5.333H7.667A2.67 2.67 0 0 1 5 10" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F24E1E", d: "M5.001 4.667A2.67 2.67 0 0 1 7.668 2h2.666v5.333H7.668A2.67 2.67 0 0 1 5 4.667" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF7262", d: "M10.334 2h2.667a2.668 2.668 0 0 1 0 5.333h-2.667z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1ABCFE", d: "M15.667 10a2.668 2.668 0 0 1-5.333 0 2.668 2.668 0 0 1 5.333 0" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-figmaa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M5 2h10.669v16H5z" }))));
});
exports.AppsFigma = AppsFigma;
