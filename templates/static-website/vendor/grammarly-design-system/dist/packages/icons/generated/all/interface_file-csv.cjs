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
const InterfaceFileCsv = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileCsv", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm10.002-2.07-.774-2.432h-.751l1.104 3.2h.872l1.103-3.2h-.75l-.775 2.431zm-2.367-1.512c-.025-.251-.223-.398-.547-.398-.331 0-.514.151-.514.358-.005.23.228.332.506.396l.288.07c.556.124.958.407.96.94-.002.586-.462.96-1.243.96-.777 0-1.272-.358-1.289-1.05h.655c.022.32.275.482.626.482.344 0 .566-.16.567-.394-.001-.215-.195-.315-.543-.4l-.349-.087c-.54-.13-.873-.4-.872-.872-.003-.581.511-.969 1.213-.969.712 0 1.181.394 1.19.964zm-2.774.2h.685c-.09-.739-.649-1.164-1.39-1.164-.845 0-1.49.597-1.49 1.644 0 1.044.634 1.644 1.49 1.644.821 0 1.316-.546 1.39-1.135l-.685-.003c-.064.342-.332.54-.693.54-.486 0-.816-.362-.816-1.046 0-.666.325-1.045.82-1.045.37 0 .638.214.69.565", clipRule: "evenodd" }));
});
exports.InterfaceFileCsv = InterfaceFileCsv;
