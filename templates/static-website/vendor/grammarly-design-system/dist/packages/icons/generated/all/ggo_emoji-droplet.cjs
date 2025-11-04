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
const GGOEmojiDroplet = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiDroplet", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-opleta)`, d: "M11.998.75C7.715 6.61 5.25 12.005 5.25 16.432c0 3.764 3.024 6.818 6.75 6.818 3.728 0 6.75-3.054 6.75-6.818 0-4.427-2.534-9.916-6.752-15.682" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-opletb)`, d: "M11.619 13.334c-.458 3.009-1.987 5.273-3.414 5.056-1.428-.218-2.215-2.834-1.756-5.843.455-3.01 1.984-5.273 3.414-5.055 1.428.217 2.213 2.832 1.756 5.842" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-opleta`, cx: 0, cy: 0, r: 1, gradientTransform: "rotate(89.146 .398 10.045)scale(12.0399 8.12177)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.43, stopColor: "#66E4FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.551, stopColor: "#61E0FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.694, stopColor: "#52D5FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.849, stopColor: "#3BC2FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#1CAAFF" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-opletb`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(2.58545 .3927 -.8276 5.44862 9.021 12.943)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D4F2FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.552, stopColor: "#D1F1FF", stopOpacity: 0.448 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.883, stopColor: "#C9EFFF", stopOpacity: 0.117 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#C4EEFF", stopOpacity: 0 }))));
});
exports.GGOEmojiDroplet = GGOEmojiDroplet;
