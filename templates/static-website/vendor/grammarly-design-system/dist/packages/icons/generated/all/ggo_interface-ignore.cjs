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
const GGOInterfaceIgnore = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceIgnore", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M10.5 4.5A1.5 1.5 0 0 0 9 6v1H6.5a.5.5 0 0 0 0 1h.545l.785 8.237a2.5 2.5 0 0 0 2.489 2.263h3.362a2.5 2.5 0 0 0 2.49-2.263L16.954 8h.545a.5.5 0 0 0 0-1H15V6a1.5 1.5 0 0 0-1.5-1.5zM14 7V6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1zM8.05 8h7.9l-.775 8.142A1.5 1.5 0 0 1 13.68 17.5H10.32a1.5 1.5 0 0 1-1.494-1.358z", clipRule: "evenodd" }));
});
exports.GGOInterfaceIgnore = GGOInterfaceIgnore;
