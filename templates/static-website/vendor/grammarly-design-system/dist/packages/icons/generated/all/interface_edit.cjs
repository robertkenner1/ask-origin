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
const InterfaceEdit = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceEdit", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M11.276 3c-.034.001-.1.02-.173.096l-.643.66 1.165 1.195.665-.682a.207.207 0 0 0 .004-.295l-.382-.392-.505-.517.357-.347-.357.347c-.06-.062-.104-.067-.13-.066m-.349 2.667L9.762 4.472l-5.208 5.34v1.21h1.152zM11.224 2c.334-.018.653.112.9.366l.502.515.384.393a1.207 1.207 0 0 1-.004 1.692l-6.732 6.904-.147.151H3.554V9.406l.142-.146 6.69-6.862c.22-.226.513-.38.838-.397M2 13.498a.5.5 0 0 1 .5-.5h11.002a.5.5 0 1 1 0 1H2.499a.5.5 0 0 1-.5-.5", clipRule: "evenodd" }));
});
exports.InterfaceEdit = InterfaceEdit;
