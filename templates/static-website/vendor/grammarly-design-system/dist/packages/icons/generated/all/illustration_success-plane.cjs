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
const IllustrationSuccessPlane = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationSuccessPlane", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-planea)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "m22.5 42.5-4.259-13.34L74.276 1.863z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "M30.31 30.885 76 1 50.713 51zM3.012 24.276 76 1 18.242 29.16z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#027E6F", stroke: "var(--color-illustration-stroke-default)", strokeLinejoin: "round", d: "m35.77 36.345-5.46-5.46L22.5 42.5z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-1)", strokeMiterlimit: 10, d: "M31.748 65c-.109 0-.18-.09-.18-.198.162-6.367-2.02-8.676-8.388-8.856-.108 0-.18-.09-.18-.198s.09-.18.198-.18c6.367.162 8.676-2.02 8.856-8.388 0-.108.09-.18.198-.18s.18.09.18.198c-.162 6.367 2.02 8.676 8.388 8.838.108 0 .18.09.18.198s-.09.18-.198.18c-6.367-.162-8.676 2.02-8.856 8.388-.018.126-.09.198-.199.198ZM71.804 49c-.085 0-.14-.07-.14-.154.126-4.952-1.572-6.748-6.524-6.888-.084 0-.14-.07-.14-.154 0-.085.07-.14.154-.14 4.952.126 6.748-1.572 6.888-6.524 0-.084.07-.14.154-.14.085 0 .14.07.14.154-.126 4.952 1.572 6.748 6.524 6.874.084 0 .14.07.14.154s-.07.14-.154.14c-4.952-.126-6.748 1.572-6.888 6.524-.014.098-.07.154-.154.154ZM14.318 14c-.079 0-.13-.065-.13-.143.117-4.598-1.46-6.266-6.058-6.396-.078 0-.13-.065-.13-.143 0-.079.065-.13.143-.13 4.599.117 6.266-1.46 6.396-6.058 0-.078.065-.13.143-.13.079 0 .13.065.13.143-.117 4.598 1.46 6.266 6.058 6.383.078 0 .13.065.13.143s-.065.13-.143.13c-4.598-.117-6.266 1.46-6.396 6.058-.013.09-.065.143-.143.143Z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-1)", strokeDasharray: "4 5", strokeLinecap: "square", d: "M13 39C7 41.5-5.299 57 5.5 68c10.8 11 56-2.5 72.5 11" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-planea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h80v80H0z" }))));
});
exports.IllustrationSuccessPlane = IllustrationSuccessPlane;
