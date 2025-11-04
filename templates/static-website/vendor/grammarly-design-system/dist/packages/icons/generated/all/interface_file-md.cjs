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
const InterfaceFileMd = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileMd", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.18 2.499h6.307l.148.16 3.133 3.383.133.144v2.899h-1V7.188h-3.557v-3.69H6.18v5.587h-1V2.499m6.164 1.317v2.372h2.196zM2.08 9.876h16.107v7.75H2.08v-7.75m1 1v5.75h14.107v-5.75zm8.813 4.447h-1.135v-3.2h1.144c.966 0 1.556.6 1.556 1.597 0 1-.59 1.603-1.565 1.603m-.458-.58h.43c.601 0 .918-.309.918-1.023 0-.711-.317-1.017-.917-1.017h-.431zm-3.736-2.62h-.835v3.2h.657v-2.09h.026l.828 2.074h.447l.828-2.067h.027v2.083h.656v-3.2h-.834l-.882 2.15H8.58z", clipRule: "evenodd" }));
});
exports.InterfaceFileMd = InterfaceFileMd;
