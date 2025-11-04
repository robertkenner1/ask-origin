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
const FlagAu = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "FlagAu", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 8, fill: "#006" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M4.004 11.727a8 8 0 0 1 7.746-7.723v3.68H9.253l2.497 2.498v1.545l-.023.023h-1.545L7.685 9.253v2.497z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#EA1537", fillRule: "evenodd", d: "M4.004 11.75a8 8 0 0 1 7.746-7.746v2.54H6.544v5.205zm7.746-1.053L8.711 7.66H7.66l4.09 4.09z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#F9FAFF", d: "M16.262 8.019 16 7.5l-.261.519-.591-.13.264.518-.475.357.592.127-.002.575.473-.36.473.36-.002-.575.591-.127-.474-.357.264-.518zM13.875 10.688l.261.518.591-.13-.264.518.475.358-.592.126.002.575-.473-.36-.473.36.002-.575-.591-.126.474-.358-.264-.517.59.13zM9.086 14.13l-.524-1.052-.522 1.052-1.182-.263.53 1.05-.95.723 1.182.257-.003 1.165.946-.729.945.73-.003-1.166 1.182-.257-.95-.724.53-1.049zM16.262 15.456 16 14.938l-.261.518-.591-.13.264.518-.475.358.592.126-.002.575.473-.36.473.36-.002-.575.591-.126-.474-.358.264-.517zM18.125 9.625l.262.519.59-.13-.264.518.474.357-.59.127v.575l-.472-.36-.473.36.002-.575-.591-.127.474-.357-.264-.518.59.13zM16.997 12.645l-.19-.54-.189.54h-.613l.496.335-.19.54.497-.334.496.335-.19-.541.497-.335z" }));
});
exports.FlagAu = FlagAu;
