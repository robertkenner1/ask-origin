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
const EmojiRegretful = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiRegretful", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-etfula)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-etfulb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#917524", d: "M5.267 10.214c1.639.074 3.504-.617 4.215-1.49.15-.184-.225-.956-.37-.819-1.113 1.056-2.624 1.788-4.14 1.816-.203.004.05.482.295.493M18.733 10.213c-1.639.075-3.504-.616-4.215-1.488-.15-.184.226-.957.37-.82 1.113 1.056 2.624 1.788 4.14 1.816.203.004-.05.482-.295.492" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-etfulc)`, d: "M4.5 12.968c-1.19 1.628-1.875 3.126-1.875 4.356 0 1.045.84 1.894 1.875 1.894a1.885 1.885 0 0 0 1.875-1.894c0-1.23-.704-2.755-1.876-4.356" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M8.875 14.344a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813M15.125 14.344a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813M9.116 18.69c1.757-1.457 4.013-1.456 5.77 0 .248.205.279-.017.202-.191-1.3-2.969-4.876-2.968-6.176 0-.077.174-.046.396.204.19" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-etfulc`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(3.62267 0 0 3.71586 2.98 15.126)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#75D6FF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.18, stopColor: "#70D4FD" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.386, stopColor: "#62D0F7" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.606, stopColor: "#4BC8ED" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.832, stopColor: "#2CBEE0" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#0FB4D4" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-etfulb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-etfula` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiRegretful = EmojiRegretful;
