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
const InterfaceThumbUp = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceThumbUp", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "#646B81", d: "M13.5 8.635q-.001.137-.047.265l-1.797 3.607-.008.016-.007.017c-.116.284-.371.46-.641.46H6.4c-.362 0-.7-.316-.7-.77V7.578c0-.218.086-.417.215-.553l3.589-3.796.264.279c.08.09.128.202.132.321l-.012.143-.523 2.663-.117.597H13.2c.138 0 .3.13.3.346zM3.6 7.23c.14 0 .3.128.3.346v5.077c0 .218-.16.346-.3.346h-.8c-.14 0-.3-.128-.3-.346V7.577c0-.218.16-.346.3-.346z" }));
});
exports.InterfaceThumbUp = InterfaceThumbUp;
