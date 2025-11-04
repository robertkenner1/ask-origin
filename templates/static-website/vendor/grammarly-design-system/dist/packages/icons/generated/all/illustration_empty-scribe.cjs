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
const IllustrationEmptyScribe = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 80, height: 80, fill: "none", viewBox: "0 0 80 80", "aria-hidden": "true", "data-icon": "IllustrationEmptyScribe", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#A8A8A8", d: "M21.5 79.532c10.77 0 19.5-1.846 19.5-4.123s-8.73-4.124-19.5-4.124S2 73.131 2 75.41s8.73 4.123 19.5 4.123" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#A8A8A8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M37.484 71.595a.7.7 0 0 0 0-.306v-4.416h-3.338c-2.86-1.05-7.223 0-12.146 0s-9.31-1.067-12.15 0H6.5v5.878c.54 2.37 7.292 4.244 15.5 4.244s14.936-1.867 15.484-4.244z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M22 71.17c8.56 0 15.5-2.037 15.5-4.55s-6.94-4.552-15.5-4.552S6.5 64.106 6.5 66.62s6.94 4.552 15.5 4.552" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", d: "M37.459 66.775V64.89a2.82 2.82 0 0 0-2.79-2.86h-.103a1.226 1.226 0 0 1-1.193-1.225v-.441H10.626v.44a1.226 1.226 0 0 1-1.197 1.226H9.33a2.82 2.82 0 0 0-2.795 2.86v1.883" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M37.459 66.775V64.89a2.82 2.82 0 0 0-2.79-2.86h-.103a1.226 1.226 0 0 1-1.193-1.225v-.441H10.626v.44a1.226 1.226 0 0 1-1.197 1.226H9.33a2.82 2.82 0 0 0-2.795 2.86v1.883" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#A8A8A8", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M33.615 59.883a1 1 0 0 0 0-.115 1 1 0 0 0 0-.118v-3.31H31.11c-2.128-.788-5.417 0-9.11 0s-6.982-.816-9.115 0h-2.529v3.677h.029c.409 1.782 5.442 3.187 11.599 3.187 6.156 0 11.19-1.405 11.594-3.187z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EBEBEB", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "M22 59.564c6.422 0 11.627-1.53 11.627-3.415 0-1.887-5.206-3.416-11.627-3.416s-11.627 1.53-11.627 3.416S15.579 59.564 22 59.564" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#1C1C1C", d: "M22 57.901c4.815 0 8.719-.828 8.719-1.85S26.815 54.2 22 54.2s-8.718.828-8.718 1.85 3.904 1.851 8.718 1.851" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#D5FF00", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "M62.76 1.739a145 145 0 0 0-6.07 3.042l-3.88 6.74.463-4.848c-8.902 5.191-13.861 10.256-20.53 19.08-6.224 8.24-6.147 19.036-6.147 19.036l12.958-3.983-3.725-1.394 5.585-.368c8.65-8.653 15.07-14.03 20.738-18.368l-5.442-1.964 8.993-.73c1.83-1.35 3.59-2.631 5.392-3.944L78.9 1.525z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#00E0AC", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", d: "M66.833 7.518S31.22 21.959 20.108 56.725h2.751c3.595-9.751 13.375-31.935 43.974-49.207" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "m40.135 22.162.525-5.798M51.3 23.004l6.286 1.195M40.726 32.27l6.234 1.184M32.34 30.931l.42-5.182" }));
});
exports.IllustrationEmptyScribe = IllustrationEmptyScribe;
