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
const EmojiEmpathetic = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiEmpathetic", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-hetica)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-heticb)`, d: "M12 21.375A9.062 9.062 0 1 0 12 3.25a9.062 9.062 0 0 0 0 18.125" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-heticc)`, d: "M6.434 17.08a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-heticd)`, d: "M17.566 17a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-hetice)`, d: "M2.625 5.012C2.625 6.331 5.799 7.4 12 7.4c6.2 0 9.375-1.068 9.375-2.387S18.2 2.625 12 2.625 2.625 3.693 2.625 5.012m3.32-.563c0-.352 1.318-.586 3.098-.705A9.1 9.1 0 0 1 12 3.25c1.03 0 2.023.176 2.944.494 1.78.118 3.11.353 3.11.705 0 1.06-12.109 1.06-12.109 0" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M13.276 11.972c1.14-1.27 2.914-1.271 4.055 0 .175.194.278-.016.223-.18-1.109-3.281-3.392-3.281-4.501 0-.056.164.048.374.223.18M6.67 11.972c1.14-1.27 2.913-1.271 4.054 0 .175.194.28-.016.223-.18-1.108-3.281-3.392-3.281-4.5 0-.056.164.048.374.223.18M14.795 15.143c-1.703 1.456-3.89 1.455-5.592 0-.24-.205-.385.017-.307.191 1.307 2.969 4.901 2.968 6.208 0 .077-.174-.066-.397-.309-.19" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-heticc`, cx: 0, cy: 0, r: 1, gradientTransform: "translate(6.434 13.955)scale(3.125)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F18D84" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.251, stopColor: "#F29180", stopOpacity: 0.749 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.512, stopColor: "#F49E73", stopOpacity: 0.488 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.775, stopColor: "#F8B25F", stopOpacity: 0.225 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FDCA47", stopOpacity: 0 })), /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-heticd`, cx: 0, cy: 0, r: 1, gradientTransform: "translate(17.566 13.875)scale(3.125)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#F18D84" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.251, stopColor: "#F29180", stopOpacity: 0.749 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.512, stopColor: "#F49E73", stopOpacity: 0.488 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.775, stopColor: "#F8B25F", stopOpacity: 0.225 }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FDCA47", stopOpacity: 0 })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-heticb`, x1: 12, x2: 12, y1: 21.375, y2: 3.25, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-hetice`, x1: 12, x2: 12, y1: 7.399, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.412, stopColor: "#00D0FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.988, stopColor: "#0174C7" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-hetica` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiEmpathetic = EmojiEmpathetic;
