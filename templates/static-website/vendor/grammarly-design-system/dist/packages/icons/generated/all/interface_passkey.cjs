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
const InterfacePasskey = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfacePasskey", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M11.465 6.278a3.362 3.362 0 1 1-6.724 0 3.362 3.362 0 0 1 6.724 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", fillRule: "evenodd", d: "M15.532 11.608a2.642 2.642 0 1 0-1.987-.038v3.974l1.12 1.12 1.841-1.84-1.12-1.12 1.12-1.121zm-.227-2.47a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M7.07 10.76a4.57 4.57 0 0 0-4.57 4.57c0 .747.606 1.353 1.354 1.353h8.41V12a4.55 4.55 0 0 0-3.128-1.24z" }));
});
exports.InterfacePasskey = InterfacePasskey;
