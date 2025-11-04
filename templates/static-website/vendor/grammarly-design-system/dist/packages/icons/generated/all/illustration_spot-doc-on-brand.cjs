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
const IllustrationSpotDocOnBrand = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotDocOnBrand", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", stroke: "var(--color-illustration-fill-default)", d: "M.875 14.5a4 4 0 0 1 4-4h30.5a4 4 0 0 1 4 4v34.875a4 4 0 0 1-4 4h-30.5a4 4 0 0 1-4-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-fill-default)", strokeLinecap: "round", d: "M7.875 24.5h10.063M7.875 32.375h24.5M7.875 40.25h24.5" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--teal-30)", d: "M7.875 4.875a4 4 0 0 1 4-4h39.25a4 4 0 0 1 4 4v7.75a4 4 0 0 1-4 4h-39.25a4 4 0 0 1-4-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { stroke: "var(--color-illustration-fill-default)", d: "M7.875 4.875a4 4 0 0 1 4-4h39.25a4 4 0 0 1 4 4v7.75a4 4 0 0 1-4 4h-39.25a4 4 0 0 1-4-4z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-illustration-fill-default)", d: "M49.589 11.426h-1.861v-5.25h1.876q.792 0 1.364.316.57.312.879.9.31.586.31 1.404 0 .82-.31 1.41a2.13 2.13 0 0 1-.884.905q-.575.315-1.374.315m-.751-.95h.704q.494 0 .828-.175.339-.177.508-.546.172-.372.172-.959 0-.582-.172-.95a1.1 1.1 0 0 0-.505-.544q-.336-.175-.828-.175h-.708zM46.548 6.176v5.25h-.959l-2.284-3.304h-.038v3.304h-1.11v-5.25h.974l2.266 3.302h.046V6.176zM37.4 11.426h-1.19l1.812-5.25h1.43l1.81 5.25h-1.19l-1.314-4.05h-.041zm-.075-2.063h2.81v.866h-2.81zM31.495 11.426v-5.25h2.07q.596 0 1.016.213.423.21.643.597.223.385.223.905 0 .524-.225.9-.226.374-.654.574-.426.2-1.03.2H32.15v-.892h1.207q.318 0 .528-.087a.63.63 0 0 0 .313-.262.83.83 0 0 0 .105-.433.86.86 0 0 0-.105-.44.65.65 0 0 0-.315-.272 1.3 1.3 0 0 0-.531-.095h-.748v4.342zm2.835-2.389 1.305 2.39h-1.226l-1.276-2.39zM26.46 11.426v-5.25h2.101q.58 0 .967.172t.582.477q.195.302.195.697 0 .307-.123.541-.123.23-.339.38a1.4 1.4 0 0 1-.487.207v.051q.3.013.561.17.265.156.429.438.164.279.164.666 0 .419-.208.746a1.4 1.4 0 0 1-.607.516q-.404.19-.992.19zm1.11-.907h.904q.465 0 .677-.177a.6.6 0 0 0 .213-.477.7.7 0 0 0-.105-.384.7.7 0 0 0-.3-.262 1 1 0 0 0-.46-.095h-.93zm0-2.146h.822a1 1 0 0 0 .405-.08.7.7 0 0 0 .282-.23q.105-.15.105-.356a.58.58 0 0 0-.202-.46q-.2-.173-.57-.174h-.843zM25.246 8.367v.867h-2.394v-.867zM21.634 6.176v5.25h-.96l-2.283-3.304h-.039v3.304h-1.11v-5.25h.974l2.267 3.302h.046V6.176zM16.158 8.801q0 .86-.326 1.461-.323.603-.882.92-.556.316-1.25.316-.7 0-1.257-.318a2.26 2.26 0 0 1-.88-.92q-.322-.603-.322-1.459 0-.859.323-1.46.322-.603.88-.919.555-.318 1.255-.318.694 0 1.251.318.56.315.882.918.326.603.326 1.461m-1.126 0q0-.555-.166-.938a1.27 1.27 0 0 0-.464-.58 1.25 1.25 0 0 0-.703-.197q-.402 0-.702.198-.3.197-.467.579-.165.382-.164.938 0 .557.164.938.167.382.467.58t.702.197.703-.197.464-.58q.166-.381.166-.938" }));
});
exports.IllustrationSpotDocOnBrand = IllustrationSpotDocOnBrand;
