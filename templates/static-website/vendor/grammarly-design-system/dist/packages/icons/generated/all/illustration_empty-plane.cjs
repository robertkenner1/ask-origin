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
const IllustrationEmptyPlane = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptyPlane", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M16 58 41 1l25 57v19.5H16z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "m16 58 25-16.5L66 58" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M40.5 5.947V2h1v3.947zm0 7.895V9.895h1v3.947zm0 7.895V17.79h1v3.947zm0 7.895v-3.948h1v3.948zm0 7.894V33.58h1v3.947zm0 7.895v-3.947h1v3.947zm0 7.895v-3.948h1v3.948zm0 7.895v-3.948h1v3.948zm0 7.894v-3.947h1v3.947zm0 7.895v-3.947h1V77z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-2)", strokeLinecap: "round", d: "M12.476 41.896C6.476 43.396-3 52.5 3.5 61s20.998 5.616 26.5 1.112" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-2)", strokeLinecap: "round", strokeLinejoin: "round", d: "m7.016 39.658 5.684 1.957-1.957 5.685" }));
});
exports.IllustrationEmptyPlane = IllustrationEmptyPlane;
