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
const InterfaceThumbDown = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceThumbDown", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", d: "M2.5 7.865c0-.09.017-.181.047-.265l1.797-3.607.008-.016.007-.017c.116-.283.371-.46.641-.46h4.6c.362 0 .7.316.7.77v4.653a.8.8 0 0 1-.215.553l-3.589 3.796-.264-.279a.5.5 0 0 1-.132-.322l.012-.142.523-2.663.117-.597H2.8c-.138 0-.3-.13-.3-.346zm9.9 1.404c-.14 0-.3-.128-.3-.346V3.846c0-.218.16-.346.3-.346h.8c.14 0 .3.128.3.346v5.077c0 .218-.16.346-.3.346z" }));
});
exports.InterfaceThumbDown = InterfaceThumbDown;
