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
const IllustrationSpotDocDoubleCheck = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotDocDoubleCheck", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-1)", d: "M3.36 10.72a4 4 0 0 1 4-4H35.2a4 4 0 0 1 4 4V46.4a4 4 0 0 1-4 4H7.36a4 4 0 0 1-4-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M3.01 10.72a4.35 4.35 0 0 1 4.35-4.35H35.2a4.35 4.35 0 0 1 4.35 4.35V46.4a4.35 4.35 0 0 1-4.35 4.35H7.36a4.35 4.35 0 0 1-4.35-4.35zm4.35-3.65a3.65 3.65 0 0 0-3.65 3.65V46.4a3.65 3.65 0 0 0 3.65 3.65H35.2a3.65 3.65 0 0 0 3.65-3.65V10.72a3.65 3.65 0 0 0-3.65-3.65z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", d: "M7.84 6.24a4 4 0 0 1 4-4h27.84a4 4 0 0 1 4 4v35.68a4 4 0 0 1-4 4H11.84a4 4 0 0 1-4-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M7.49 6.24a4.35 4.35 0 0 1 4.35-4.35h27.84a4.35 4.35 0 0 1 4.35 4.35v35.68a4.35 4.35 0 0 1-4.35 4.35H11.84a4.35 4.35 0 0 1-4.35-4.35zm4.35-3.65a3.65 3.65 0 0 0-3.65 3.65v35.68a3.65 3.65 0 0 0 3.65 3.65h27.84a3.65 3.65 0 0 0 3.65-3.65V6.24a3.65 3.65 0 0 0-3.65-3.65z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-default)", d: "M16.8 26.88a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0M16.8 34.72a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#B1F0E8", d: "M14.56 18.745a4.615 4.615 0 0 1 4.615-4.616h.247a4.615 4.615 0 0 1 4.615 4.616v1.415H14.56z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M14.21 18.745a4.965 4.965 0 0 1 4.965-4.966h.247a4.965 4.965 0 0 1 4.965 4.966v1.415a.35.35 0 0 1-.35.35H14.56a.35.35 0 0 1-.35-.35zm4.965-4.266a4.265 4.265 0 0 0-4.265 4.266v1.065h8.777v-1.065a4.265 4.265 0 0 0-4.265-4.266z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#B1F0E8", d: "M16.283 11.975a3.015 3.015 0 1 0 6.03 0 3.015 3.015 0 0 0-6.03 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M19.298 9.31a2.665 2.665 0 1 1 0 5.33 2.665 2.665 0 0 1 0-5.33m3.366 2.665a3.365 3.365 0 1 0-6.73 0 3.365 3.365 0 0 0 6.73 0M28.77 12.32a.35.35 0 0 1 .35-.35h7.84a.35.35 0 1 1 0 .7h-7.84a.35.35 0 0 1-.35-.35M28.77 17.92a.35.35 0 0 1 .35-.35h7.84a.35.35 0 1 1 0 .7h-7.84a.35.35 0 0 1-.35-.35M22.05 26.88a.35.35 0 0 1 .35-.35h14.56a.35.35 0 1 1 0 .7H22.4a.35.35 0 0 1-.35-.35M22.05 34.72a.35.35 0 0 1 .35-.35h14.56a.35.35 0 1 1 0 .7H22.4a.35.35 0 0 1-.35-.35", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", d: "M42.56 53.76c6.186 0 11.2-5.014 11.2-11.2s-5.014-11.2-11.2-11.2-11.2 5.014-11.2 11.2 5.014 11.2 11.2 11.2" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M42.56 31.71c-5.992 0-10.85 4.858-10.85 10.85s4.858 10.85 10.85 10.85 10.85-4.858 10.85-10.85-4.858-10.85-10.85-10.85M31.01 42.56c0-6.379 5.171-11.55 11.55-11.55s11.55 5.171 11.55 11.55-5.171 11.55-11.55 11.55-11.55-5.171-11.55-11.55", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M48.782 38.58a.35.35 0 0 1 0 .495l-7.714 7.714-3.98-3.98a.35.35 0 0 1 .494-.496l3.486 3.486 7.22-7.22a.35.35 0 0 1 .494 0", clipRule: "evenodd" }));
});
exports.IllustrationSpotDocDoubleCheck = IllustrationSpotDocDoubleCheck;
