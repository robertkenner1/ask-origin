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
const GGOActionMakeItProfessional = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none", viewBox: "0 0 25 25", "aria-hidden": "true", "data-icon": "GGOActionMakeItProfessional", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-sionala)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sionalb)`, d: "M21.536 22.008h-19v-14h19z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sionalc)`, fillRule: "evenodd", d: "M7.786 2.008h8.5v4.798h-1.5V3.508h-5.5v3.298h-1.5z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sionald)`, d: "M2.036 5.668h20v6.863c-1.579 1.66-18.347 1.725-20 0z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sionale)`, d: "M10.036 12.508h4v2h-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sionalf)`, d: "M10.536 15.258h3v2h-3z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sionalb`, x1: 12.036, x2: 12.036, y1: 22.008, y2: 12.643, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#ADB2C3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.861, stopColor: "#757C92" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sionalc`, x1: 12.036, x2: 12.036, y1: 2.758, y2: 6.806, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#99A0B3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#757C92" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sionald`, x1: 12.036, x2: 12.036, y1: 6.008, y2: 13.508, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#99A0B3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#ADB2C3" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sionale`, x1: 14.036, x2: 10.036, y1: 13.175, y2: 13.175, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#CDD1DC" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F4F4F6" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sionalf`, x1: 14.036, x2: 10.036, y1: 13.175, y2: 13.175, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#CDD1DC" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#F4F4F6" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-sionala` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2.036 2.008h20v20h-20z" }))));
});
exports.GGOActionMakeItProfessional = GGOActionMakeItProfessional;
