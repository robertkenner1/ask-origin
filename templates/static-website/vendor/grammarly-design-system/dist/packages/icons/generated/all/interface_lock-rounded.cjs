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
const InterfaceLockRounded = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceLockRounded", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", d: "M14.986 9.242a1.52 1.52 0 0 0-1.521-1.517h-6.93c-.84 0-1.52.68-1.52 1.517v2.275c0 2.746 2.232 4.972 4.986 4.972a4.98 4.98 0 0 0 4.985-4.972zM12.835 6.34A2.83 2.83 0 0 0 10 3.51 2.83 2.83 0 0 0 7.166 6.34v.375h5.67zm1.014.407A2.53 2.53 0 0 1 16 9.242v2.275c0 3.305-2.686 5.983-6 5.983s-6-2.678-6-5.983V9.242c0-1.266.933-2.312 2.151-2.496v-.407a3.844 3.844 0 0 1 3.85-3.839 3.844 3.844 0 0 1 3.848 3.839z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", d: "M10.423 12.204A1.265 1.265 0 0 0 10 9.747a1.265 1.265 0 0 0-.423 2.456v1.337h.846z" }));
});
exports.InterfaceLockRounded = InterfaceLockRounded;
