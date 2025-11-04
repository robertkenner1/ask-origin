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
const InterfaceFileJson = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileJson", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.18 2.499h6.307l.148.16 3.133 3.383.133.144v2.899h-1V7.188h-3.557v-3.69H6.18v5.587h-1V2.499m6.164 1.317v2.372h2.196zM2.08 9.876h16.107v7.75H2.08v-7.75m1 1v5.75h14.107v-5.75zm12.227 1.247v3.2h-.584l-1.393-2.014h-.023v2.014h-.677v-3.2h.594l1.381 2.012h.028v-2.012zm-4.544 3.244c.848 0 1.499-.597 1.499-1.644s-.65-1.644-1.499-1.644c-.853 0-1.498.597-1.498 1.644 0 1.042.645 1.644 1.498 1.644m0-2.69c.49 0 .813.368.813 1.046s-.322 1.045-.813 1.045c-.492 0-.812-.367-.812-1.045s.32-1.045.812-1.045m-2.458.366c-.025-.251-.223-.398-.546-.398-.332 0-.515.151-.515.358-.004.23.229.332.507.396l.287.07c.556.124.958.407.96.94-.002.586-.461.96-1.243.96-.776 0-1.271-.358-1.289-1.05h.655c.022.32.275.482.627.482.343 0 .565-.16.567-.394-.002-.215-.196-.315-.544-.4l-.348-.087c-.541-.13-.874-.4-.872-.872-.003-.581.51-.969 1.212-.969.713 0 1.181.394 1.19.964zm-2.163-.92h-.669v2.231c-.001.308-.139.47-.389.47-.236 0-.389-.146-.393-.401h-.674c-.003.639.453.944 1.033.944.648 0 1.09-.393 1.092-1.013z", clipRule: "evenodd" }));
});
exports.InterfaceFileJson = InterfaceFileJson;
