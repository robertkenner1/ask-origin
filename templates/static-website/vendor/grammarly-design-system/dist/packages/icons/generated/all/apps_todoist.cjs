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
const AppsTodoist = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsTodoist", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E44332", d: "M4 2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2.722c.66.388 2.3 1.354 2.698 1.582a.65.65 0 0 0 .694-.002l2.837-1.651c1.687-.982 3.512-2.044 3.587-2.089.137-.08.144-.325-.01-.415l-.018-.01c-.158-.09-.432-.248-.537-.31a.5.5 0 0 0-.495.006l-5.38 3.128a.66.66 0 0 1-.665 0L2 11.924v-1.367c.66.39 2.3 1.355 2.698 1.583a.65.65 0 0 0 .694-.002l2.835-1.65c1.687-.982 3.514-2.045 3.589-2.09.137-.08.144-.325-.01-.414l-.019-.011c-.157-.09-.432-.248-.536-.31a.5.5 0 0 0-.495.005l-5.38 3.129a.66.66 0 0 1-.665 0L2 9.203V7.999c.66.388 2.3 1.354 2.698 1.582a.65.65 0 0 0 .694-.002l2.827-1.645.013-.008 3.584-2.086c.137-.08.144-.327-.01-.416l-.018-.01c-.158-.09-.433-.248-.537-.31a.5.5 0 0 0-.495.006c-.077.045-5.21 3.03-5.38 3.127a.66.66 0 0 1-.665 0L2 6.643V4a2.006 2.006 0 0 1 2-2" }));
});
exports.AppsTodoist = AppsTodoist;
