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
const GButtonSmall = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "GButtonSmall", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#15C39A", fillRule: "evenodd", d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M11.046 11.728c.047.261.293.44.56.44h.838l.485-.067c-.777 1.14-2.127 1.665-3.603 1.433a3.43 3.43 0 0 1-2.669-2.136C5.67 8.82 7.551 6.36 10.004 6.36c1.278 0 2.4.768 3.042 1.671.17.246.509.317.755.146a.536.536 0 0 0 .161-.712A4.7 4.7 0 0 0 9.68 5.31c-2.34.157-4.232 2.07-4.367 4.411-.156 2.724 2.005 4.947 4.692 4.947a4.65 4.65 0 0 0 3.536-1.609l-.102.57v.516c0 .266.179.513.44.56.345.062.644-.2.644-.533v-3.088h-2.943c-.333 0-.596.3-.533.643", clipRule: "evenodd" }));
});
exports.GButtonSmall = GButtonSmall;
