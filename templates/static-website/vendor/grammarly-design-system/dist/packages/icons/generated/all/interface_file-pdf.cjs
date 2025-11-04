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
const InterfaceFilePdf = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFilePdf", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm8.938-4.502v3.2h.677v-1.322h1.301v-.558h-1.301v-.762h1.442v-.558zm-1.935 3.2H8.95v-3.2h1.143c.966 0 1.557.6 1.557 1.597 0 1-.59 1.603-1.566 1.603m-.458-.58h.43c.601 0 .919-.309.919-1.023 0-.711-.318-1.017-.918-1.017h-.43zm-3.393-2.62v3.2h.676v-1.037h.57c.735 0 1.163-.44 1.163-1.079 0-.636-.42-1.084-1.147-1.084zm1.136 1.62h-.46v-1.067h.457c.39 0 .58.213.58.531s-.19.536-.577.536", clipRule: "evenodd" }));
});
exports.InterfaceFilePdf = InterfaceFilePdf;
