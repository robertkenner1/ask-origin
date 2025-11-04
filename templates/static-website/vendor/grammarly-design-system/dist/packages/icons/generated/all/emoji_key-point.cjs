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
const EmojiKeyPoint = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiKeyPoint", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ypointa)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointb)`, d: "M13.78 16.302a2.72 2.72 0 0 1-1.376 2.438 2.72 2.72 0 0 1-2.797-.069l-1.109.629c.812 1.15 2.936 1.212 4.43.364 1.496-.849 2.532-2.703 1.96-3.99z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointc)`, d: "M3.053 18.387s-1.155.744.33 2.23c1.487 1.486 2.23.328 2.23.328z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointd)`, d: "M10.475 3.606 3.057 18.335v.001c-.526.81 1.797 3.137 2.608 2.607l14.718-7.41z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointe)`, d: "m21.043 12.943-.398.399c-1.02 1.02-4.082-.39-6.838-3.148-2.758-2.758-4.169-5.82-3.15-6.839l.4-.398z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointf)`, d: "M17.895 6.105c2.757 2.758 4.168 5.82 3.148 6.838-1.019 1.019-4.08-.391-6.838-3.148s-4.168-5.82-3.149-6.838c1.02-1.02 4.08.39 6.839 3.148" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ypointg)`, d: "M14.201 9.79c1.954 1.953 4.061 3.23 5.485 3.446-.223-1.425-1.496-3.522-3.444-5.47-1.955-1.954-4.06-3.23-5.486-3.445.224 1.424 1.497 3.521 3.445 5.468" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ypointb`, x1: 12.945, x2: 11.68, y1: 19.654, y2: 17.463, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FF2121" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.33, stopColor: "#FC1F1F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.596, stopColor: "#F2181B" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.838, stopColor: "#E10B13" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#D1000B" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ypointc`, x1: 3.045, x2: 4.839, y1: 18.392, y2: 21.499, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D9E0E4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.232, stopColor: "#D6DDE1" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.831, stopColor: "#C2CACD" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ypointd`, x1: 5.916, x2: 12.691, y1: 6.238, y2: 17.973, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FF2121" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.33, stopColor: "#FC1F1F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.596, stopColor: "#F2181B" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.838, stopColor: "#E10B13" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#D1000B" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ypointe`, x1: 10.326, x2: 21.044, y1: 8.315, y2: 8.315, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D9E0E4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.232, stopColor: "#D6DDE1" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.831, stopColor: "#C2CACD" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-ypointf`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(5.31209 0 0 10.6762 16.05 7.95)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#D9E0E4" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.301, stopColor: "#D6DDE1" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.528, stopColor: "#C2CACD" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.753, stopColor: "#A2AAAD" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#A2AAAD" })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-ypointg`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(4.45006 0 0 3.13017 15.22 8.776)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#545061" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.279, stopColor: "#464253" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.611, stopColor: "#312D3D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.796, stopColor: "#211D2D" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.956, stopColor: "#1A1626" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ypointa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiKeyPoint = EmojiKeyPoint;
