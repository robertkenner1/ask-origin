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
const EmojiSad = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiSad", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-jisada)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-jisadb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M8.394 16.707c2.197-1.274 5.018-1.274 7.212 0 .312.18.35-.014.254-.167-1.625-2.598-6.094-2.597-7.72 0-.096.153-.058.347.254.167M8.875 12.156c.776 0 1.406-.84 1.406-1.875s-.63-1.875-1.406-1.875c-.777 0-1.407.84-1.407 1.875s.63 1.875 1.407 1.875M15.124 12.156c.777 0 1.407-.84 1.407-1.875s-.63-1.875-1.407-1.875c-.776 0-1.406.84-1.406 1.875s.63 1.875 1.406 1.875" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-jisadb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-jisada` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiSad = EmojiSad;
