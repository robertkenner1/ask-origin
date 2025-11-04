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
const IllustrationSpotChatDouble = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotChatDouble", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M6.8 30.24a4 4 0 0 0-4 4v17.28l5.398-3.307H25.68a4 4 0 0 0 4-4V34.24a4 4 0 0 0-4-4z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M2.45 34.24a4.35 4.35 0 0 1 4.35-4.35h18.88a4.35 4.35 0 0 1 4.35 4.35v9.973a4.35 4.35 0 0 1-4.35 4.35H8.296l-5.313 3.255a.35.35 0 0 1-.533-.298zm4.35-3.65a3.65 3.65 0 0 0-3.65 3.65v16.655l4.865-2.98a.35.35 0 0 1 .183-.052H25.68a3.65 3.65 0 0 0 3.65-3.65V34.24a3.65 3.65 0 0 0-3.65-3.65z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M24.08 36.61a.35.35 0 1 1 0 .7H8.4a.35.35 0 1 1 0-.7zm0 4.48a.35.35 0 1 1 0 .7H8.4a.35.35 0 1 1 0-.7z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-2)", fillRule: "evenodd", d: "M49.2 4.48a4 4 0 0 1 4 4v29.152l-8.321-5.152H15.76a4 4 0 0 1-4-4v-20a4 4 0 0 1 4-4z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M53.55 8.48a4.35 4.35 0 0 0-4.35-4.35H15.76a4.35 4.35 0 0 0-4.35 4.35v20a4.35 4.35 0 0 0 4.35 4.35h29.019l8.237 5.1a.35.35 0 0 0 .534-.298zM49.2 4.83a3.65 3.65 0 0 1 3.65 3.65v28.524l-7.787-4.822a.35.35 0 0 0-.184-.052H15.76a3.65 3.65 0 0 1-3.65-3.65v-20a3.65 3.65 0 0 1 3.65-3.65z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", d: "M32.48 27.44a8.96 8.96 0 1 0 0-17.92 8.96 8.96 0 0 0 0 17.92" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M32.48 9.87a8.61 8.61 0 1 0 0 17.22 8.61 8.61 0 0 0 0-17.22m-9.31 8.61a9.31 9.31 0 1 1 18.62 0 9.31 9.31 0 0 1-18.62 0", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-stroke-default)", fillRule: "evenodd", d: "M37.507 15.246a.35.35 0 0 1 0 .495l-6.22 6.221-3.235-3.234a.35.35 0 1 1 .495-.495l2.74 2.74 5.725-5.727a.35.35 0 0 1 .495 0", clipRule: "evenodd" }));
});
exports.IllustrationSpotChatDouble = IllustrationSpotChatDouble;
