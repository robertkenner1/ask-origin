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
const EmojiSkeptical = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiSkeptical", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-ticala)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ticalb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#917524", d: "M5.536 8.809c2.349-1.106 4.198.732 5.044.157.213-.145.462.342.256.498-1.102.84-3.16-.788-4.906.281-.24.147-.653-.814-.394-.936M13.148 7.742c2.971-1.231 3.279-3.086 5.331-.563.17.21-.64.683-.817.477-1.492-1.733-1.436-.184-4.287.59-.287.078-.411-.428-.227-.504" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M8.875 12.969a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813M15.125 12.969c.776 0 1.406-.84 1.406-1.875s-.63-1.875-1.406-1.875c-.777 0-1.407.84-1.407 1.875s.63 1.875 1.407 1.875M13.596 17h-3.192c-.788 0-.788-1.25 0-1.25h3.192c.788 0 .788 1.25 0 1.25" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ticalb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-ticala` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiSkeptical = EmojiSkeptical;
