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
const InterfaceRewrite = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 21, height: 21, fill: "none", viewBox: "0 0 21 21", "aria-hidden": "true", "data-icon": "InterfaceRewrite", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#707070", d: "m3.85 4.5-.122-.01c-.273-.047-.478-.249-.478-.49s.205-.443.478-.49l.122-.01h11.8c.331 0 .6.224.6.5s-.269.5-.6.5zM3.85 7.5l-.122-.01c-.273-.047-.478-.249-.478-.49s.205-.443.478-.49l.122-.01h11.8c.331 0 .6.224.6.5s-.269.5-.6.5zM3.827 10.5l-.117-.01c-.263-.046-.46-.248-.46-.49 0-.241.197-.443.46-.49l.117-.01h3.846c.319 0 .577.224.577.5s-.258.5-.577.5zM3.827 13.5l-.117-.01c-.263-.046-.46-.248-.46-.49s.197-.444.46-.49l.117-.01h3.846c.319 0 .577.224.577.5s-.258.5-.577.5zM16.25 13.456c0-1.557-1.223-2.794-2.7-2.794-.655 0-1.257.242-1.727.647h.927l.1.01a.5.5 0 0 1 0 .98l-.1.01h-2.5V9.75a.5.5 0 0 1 1 0v.735a3.63 3.63 0 0 1 2.3-.823c2.057 0 3.7 1.712 3.7 3.794s-1.643 3.794-3.7 3.794a3.67 3.67 0 0 1-2.98-1.546l-.13-.191-.044-.09a.5.5 0 0 1 .829-.523l.062.08.095.141a2.67 2.67 0 0 0 2.168 1.129c1.477 0 2.7-1.237 2.7-2.794" }));
});
exports.InterfaceRewrite = InterfaceRewrite;
