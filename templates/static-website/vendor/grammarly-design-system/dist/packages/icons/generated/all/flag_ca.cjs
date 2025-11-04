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
const FlagCa = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "FlagCa", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F9FAFF", fillRule: "evenodd", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "red", d: "M5.999 6.71A7.97 7.97 0 0 0 4 12a7.97 7.97 0 0 0 1.999 5.29zM18.002 6.71A7.97 7.97 0 0 1 20 12a7.97 7.97 0 0 1-1.996 5.287zM14.519 14.777l2.396-1.794-.495-.215c-.198-.066-.167-.167-.099-.393l.021-.07.364-1.234-1.394.273a.22.22 0 0 1-.247-.136l-.179-.582-1.103 1.145c-.155.183-.472.183-.387-.24l.472-2.318-.63.305c-.179.09-.357.104-.458-.057l-.86-1.521-.87 1.51c-.1.161-.279.147-.457.057l-.631-.304.472 2.302c.097.424-.22.424-.387.24l-1.103-1.144-.178.581a.22.22 0 0 1-.248.137l-1.394-.273.364 1.234.02.07c.07.226.1.327-.097.393l-.496.215 2.396 1.793a.29.29 0 0 1 .113.305l-.213.664c.382-.042.74-.092 1.1-.143.42-.059.84-.118 1.296-.162.07 0 .194.108.194.183l-.109 2.342h.387l-.061-2.335c0-.079.112-.197.182-.19.428.043.828.099 1.232.155.376.053.755.107 1.164.15l-.19-.628a.29.29 0 0 1 .113-.316" }));
});
exports.FlagCa = FlagCa;
