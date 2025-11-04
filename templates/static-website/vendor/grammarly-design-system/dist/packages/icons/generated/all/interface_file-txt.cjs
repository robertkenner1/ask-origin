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
const InterfaceFileTxt = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileTxt", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm8.517-4.502v.558h.98v2.642h.668v-2.642h.98v-.558zm-2.257 0 .645 1.09h.025l.648-1.09h.765l-.977 1.6.998 1.6h-.778l-.656-1.092h-.025l-.656 1.092h-.775l1.001-1.6-.983-1.6zm-3.564 0v.558h.98v2.642h.669v-2.642h.98v-.558z", clipRule: "evenodd" }));
});
exports.InterfaceFileTxt = InterfaceFileTxt;
