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
const EmojiSmiling = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiSmiling", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ilinga)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ilingb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ilingc)`, d: "M6.434 15.205a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ilingd)`, d: "M17.566 15.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M13.32 9.751c1.18-1.314 3.014-1.315 4.195 0 .18.202.288-.016.23-.187-1.147-3.393-3.51-3.393-4.656 0-.057.171.05.388.231.187M6.486 9.751c1.18-1.314 3.014-1.315 4.194 0 .18.202.29-.016.23-.187-1.146-3.393-3.508-3.393-4.655 0-.057.171.05.388.23.187M15.913 13.372c-2.384 1.716-5.445 1.715-7.828 0-.337-.242-.54.02-.43.226 1.829 3.498 6.86 3.497 8.69 0 .108-.206-.093-.468-.432-.226" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-ilingc`, cx: 0, cy: 0, r: 1, gradientTransform: "translate(6.434 12.08)scale(3.125)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F18D84" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.251, stopColor: "#F29180", stopOpacity: 0.749 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.512, stopColor: "#F49E73", stopOpacity: 0.488 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.775, stopColor: "#F8B25F", stopOpacity: 0.225 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FDCA47", stopOpacity: 0 })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-ilingd`, cx: 0, cy: 0, r: 1, gradientTransform: "translate(17.566 12)scale(3.125)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F18D84" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.251, stopColor: "#F29180", stopOpacity: 0.749 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.512, stopColor: "#F49E73", stopOpacity: 0.488 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.775, stopColor: "#F8B25F", stopOpacity: 0.225 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FDCA47", stopOpacity: 0 })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ilingb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ilinga` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiSmiling = EmojiSmiling;
