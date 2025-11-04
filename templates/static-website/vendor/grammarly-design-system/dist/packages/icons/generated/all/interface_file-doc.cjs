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
const InterfaceFileDoc = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileDoc", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm7-1.258c.848 0 1.498-.597 1.498-1.644s-.65-1.644-1.498-1.644c-.854 0-1.499.597-1.499 1.644 0 1.042.645 1.644 1.499 1.644m0-2.69c.49 0 .812.368.812 1.046s-.322 1.045-.812 1.045c-.493 0-.813-.367-.813-1.045s.32-1.045.813-1.045m4.006.566h.685c-.09-.739-.649-1.164-1.39-1.164-.845 0-1.49.597-1.49 1.644 0 1.044.634 1.644 1.49 1.644.821 0 1.316-.546 1.39-1.135l-.685-.003c-.064.342-.332.54-.693.54-.486 0-.816-.362-.816-1.046 0-.666.325-1.045.82-1.045.37 0 .638.214.69.565m-7.383 2.08H5.568v-3.2h1.144c.966 0 1.556.6 1.556 1.597 0 1-.59 1.603-1.565 1.603m-.458-.58h.43c.601 0 .918-.31.918-1.023 0-.711-.317-1.017-.917-1.017h-.431z", clipRule: "evenodd" }));
});
exports.InterfaceFileDoc = InterfaceFileDoc;
