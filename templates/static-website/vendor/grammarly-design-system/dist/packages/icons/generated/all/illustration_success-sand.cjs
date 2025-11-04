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
const IllustrationSuccessSand = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationSuccessSand", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ssanda)` }, /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M40 15V1" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "m40 1 13 2.5L40 6z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", d: "M5.238 71.93c-14.606-2.063 11.81-11.854 29.741-14.584s52.329 9.456 42.186 14.162c-2.107.978-18.782 2.84-30.596 3.626-1.08.072-2.06.605-2.935 1.242C41.447 77.97 37.946 79 34 79c-3.058 0-5.848-.62-7.967-1.64-1.228-.59-2.636-.816-3.979-.58-.812.144-1.669.22-2.554.22-3.244 0-6.108-1.027-7.822-2.594-1.002-.916-2.112-1.843-3.455-2.04L6.89 72.17c-.718-.105-1.28-.188-1.652-.24" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "m6.89 72.17 1.333.196c1.343.197 2.453 1.124 3.455 2.04C13.39 75.973 16.256 77 19.5 77c.885 0 1.742-.076 2.555-.22 1.342-.236 2.75-.01 3.978.58C28.152 78.38 30.943 79 34 79c3.946 0 7.447-1.031 9.634-2.624.874-.637 1.856-1.17 2.935-1.242 11.814-.787 28.49-2.648 30.596-3.626C87.308 66.802 52.91 54.616 34.98 57.346 17.05 60.076-9.368 69.867 5.238 71.93c.372.052.934.135 1.652.24Zm0 0q0 0 0 0Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M46 27H34a2 2 0 0 1-2-2v-6.172a2 2 0 0 1 .586-1.414l6-6a2 2 0 0 1 2.828 0l6 6A2 2 0 0 1 48 18.828V25a2 2 0 0 1-2 2Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", d: "M38 17a2 2 0 1 1 4 0v4h-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M50 25H30a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V27a2 2 0 0 0-2-2Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", d: "M38 31a2 2 0 1 1 4 0v4h-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M33 35H23a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V37a2 2 0 0 0-2-2Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", d: "M26 41a2 2 0 1 1 4 0v4h-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M57 35H47a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V37a2 2 0 0 0-2-2Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", stroke: "var(--color-illustration-stroke-default)", d: "M50 41a2 2 0 1 1 4 0v4h-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FFEBB8", d: "M16 51a2 2 0 0 1 2-2h4.17a2 2 0 0 1 2 2v3h5.106v-3a2 2 0 0 1 2-2h4.17a2 2 0 0 1 2 2v3h5.107v-3a2 2 0 0 1 2-2h4.17a2 2 0 0 1 2 2v3h5.107v-3a2 2 0 0 1 2-2H62a2 2 0 0 1 2 2v16H16z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M64 67V51a2 2 0 0 0-2-2h-4.17a2 2 0 0 0-2 2v3h-5.107v-3a2 2 0 0 0-2-2h-4.17a2 2 0 0 0-2 2v3h-5.106v-3a2 2 0 0 0-2-2h-4.17a2 2 0 0 0-2 2v3H24.17v-3a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v16" }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9, cy: 9, r: 8, fill: "#D5FF00", stroke: "var(--color-illustration-stroke-default)" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-1)", strokeLinecap: "round", strokeLinejoin: "round", d: "M4 27c2.727 0 5 5 5 5s2.273-5 5-5M16 20c2.182 0 4 4 4 4s1.818-4 4-4" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ssanda` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h80v80H0z" }))));
});
exports.IllustrationSuccessSand = IllustrationSuccessSand;
