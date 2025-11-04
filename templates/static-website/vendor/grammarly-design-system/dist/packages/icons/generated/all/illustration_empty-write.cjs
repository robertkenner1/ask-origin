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
const IllustrationEmptyWrite = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptyWrite", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", clipPath: `url(#${resourcePrefix}-writea)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-1)", strokeMiterlimit: 10, d: "M78 14H29.048C27.697 35.346 4.54 50.5 9.767 78h48.952C54.5 44 76.649 35.346 78 14" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-1)", strokeMiterlimit: 10, d: "M74 10H25.048C23.697 31.346.54 46.5 5.767 74h48.952C51 41 72.649 31.346 74 10" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", strokeMiterlimit: 10, d: "M70 6H21.758C20.426 27.346-2.396 42.5 2.756 70H50C45.835 42.5 68.668 27.346 70 6" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M30 17h25M25 28h25M18 40h25M12 53.5h19.265" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D5FF00", strokeMiterlimit: 10, d: "M1.682 12.645a5.363 5.363 0 0 1 1.963-7.326v0a5.363 5.363 0 0 1 7.326 1.963l20.38 35.298-9.29 5.363z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E6E6", strokeMiterlimit: 10, d: "M1.682 12.645a5.363 5.363 0 0 1 1.963-7.326v0a5.363 5.363 0 0 1 7.326 1.963l4.022 6.966-9.289 5.363z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF4D45", strokeMiterlimit: 10, d: "M1.682 12.645a5.363 5.363 0 0 1 1.963-7.326v0a5.363 5.363 0 0 1 7.326 1.963l.804 1.393-9.289 5.363z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", strokeMiterlimit: 10, d: "m22.061 47.943 9.29-5.363-.087 10.577z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-default)", strokeMiterlimit: 10, d: "m26.261 49.853 4.645-2.681.359 5.985z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-writea` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", d: "M0 0h80v80H0z" }))));
});
exports.IllustrationEmptyWrite = IllustrationEmptyWrite;
