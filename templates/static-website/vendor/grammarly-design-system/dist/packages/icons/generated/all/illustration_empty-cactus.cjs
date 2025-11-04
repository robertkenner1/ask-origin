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
const IllustrationEmptyCactus = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptyCactus", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-shadow-default)", d: "M40 80c11.598 0 21-1.79 21-4s-9.402-4-21-4-21 1.79-21 4 9.402 4 21 4" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D5FF00", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M44.004 76.741h-9.67c-7.445 0-13.49-5.464-13.49-12.204v-13.56c0-.495 37.313-.495 37.313 0V63.93c0 7.076-6.332 12.811-14.153 12.811Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M39.5 55.472c10.304 0 18.657-1.92 18.657-4.287s-8.353-4.288-18.656-4.288c-10.304 0-18.656 1.92-18.656 4.288s8.352 4.287 18.656 4.287Z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M55 53.033C51.912 54.217 46.13 55 39.495 55 32.87 55 27.088 54.217 24 53.033 24.853 51.33 31.47 50 39.495 50 47.53 50 54.147 51.33 55 53.033" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "m27 41.905 2.782-.76-2.436-1.543M30.063 34.565l2.68 1.064-1.02-2.697M27.07 47.22l2.874.236-2.112 1.964M52.706 41.905l-2.782-.76 2.436-1.543M49.643 34.565l-2.68 1.064 1.02-2.697M52.637 47.22l-2.874.236 2.111 1.964" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-1)", strokeLinecap: "round", strokeLinejoin: "round", d: "M49.796 39.449c-1.194-4.09-5.097-6.949-9.948-6.949v0h-.001v0c-4.85 0-8.753 2.86-9.947 6.949-1.717 5.88 1.018 12.172 2.288 13.332 2.182.466 3.774.849 7.65.849s6.15-.5 7.669-.85c1.27-1.16 4.005-7.452 2.289-13.331" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "M41.588 53.383c.864-1.678 2.667-6 2.711-10.318.043-4.146-1.803-8.434-4.164-10.445" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "m46.938 44.229-2.64-1.164 2.64-1.165M46.367 38.13l-2.879-.172 2.068-2.01M46.365 48.477l-2.875.236 2.112 1.964M38.107 53.383c-.864-1.678-2.667-6-2.71-10.318-.044-4.196 1.847-8.53 4.249-10.515" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "m32.758 44.23 2.639-1.165-2.64-1.165M33.328 38.13l2.88-.172-2.068-2.01M33.331 48.477l2.875.236-2.112 1.964" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-1)", strokeMiterlimit: 10, d: "M8.29 68c-.09 0-.15-.075-.15-.165.135-5.306-1.684-7.23-6.99-7.38-.09 0-.15-.075-.15-.165s.075-.15.165-.15c5.306.135 7.23-1.684 7.38-6.99 0-.09.075-.15.165-.15s.15.075.15.165c-.135 5.306 1.684 7.23 6.99 7.365.09 0 .15.075.15.165s-.075.15-.165.15c-5.306-.135-7.23 1.684-7.38 6.99-.015.105-.075.165-.165.165ZM71.804 47c-.085 0-.14-.07-.14-.154.126-4.952-1.572-6.748-6.524-6.888-.084 0-.14-.07-.14-.154 0-.085.07-.14.154-.14 4.952.126 6.748-1.572 6.888-6.524 0-.084.07-.14.154-.14.085 0 .14.07.14.154-.126 4.952 1.572 6.748 6.524 6.874.084 0 .14.07.14.154s-.07.14-.154.14c-4.952-.126-6.748 1.572-6.888 6.524-.014.098-.07.154-.154.154ZM55.72 29c-.12 0-.201-.1-.201-.22.18-7.075-2.244-9.64-9.319-9.84-.12 0-.2-.1-.2-.22s.1-.201.22-.201c7.075.18 9.64-2.244 9.84-9.319 0-.12.1-.2.22-.2s.201.1.201.22c-.18 7.075 2.244 9.64 9.319 9.82.12 0 .2.1.2.22s-.1.2-.22.2c-7.075-.18-9.64 2.245-9.84 9.32-.02.14-.1.22-.22.22Z" }));
});
exports.IllustrationEmptyCactus = IllustrationEmptyCactus;
