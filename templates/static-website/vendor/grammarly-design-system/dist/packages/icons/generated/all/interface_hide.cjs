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
const InterfaceHide = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceHide", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M1.646 1.646a.5.5 0 0 1 .708 0l12.02 12.021a.5.5 0 0 1-.707.707L1.647 2.354a.5.5 0 0 1 0-.708M3.41 5.532A6.8 6.8 0 0 0 1.557 7.77a.5.5 0 0 0 0 .46c1.588 3.07 5.073 4.265 8.138 3.585l-.866-.865c-2.398.292-4.96-.691-6.259-2.95a5.8 5.8 0 0 1 1.557-1.753zm8.464 4.221A5.8 5.8 0 0 0 13.43 8c-1.298-2.259-3.86-3.242-6.258-2.95l-.866-.865c3.065-.68 6.55.515 8.138 3.585a.5.5 0 0 1 0 .46 6.8 6.8 0 0 1-1.855 2.238z", clipRule: "evenodd" }));
});
exports.InterfaceHide = InterfaceHide;
