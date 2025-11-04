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
const IllustrationSuccessCheck = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationSuccessCheck", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 40, cy: 40, r: 39.5, fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M63.322 30.656a5 5 0 0 0-6.644-7.474L30 46.896l-6.678-5.936a5 5 0 0 0-6.644 7.474L30 60.275z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M63.322 30.656a5 5 0 0 0-6.644-7.474L30 46.896l-6.678-5.936a5 5 0 0 0-6.644 7.474L30 60.275z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", d: "M63.737 23.597a5 5 0 0 1-.415 7.059L30 60.276 16.678 48.433a5 5 0 1 1 6.644-7.474L30 46.896l26.678-23.714a5 5 0 0 1 7.059.415Z" }));
});
exports.IllustrationSuccessCheck = IllustrationSuccessCheck;
