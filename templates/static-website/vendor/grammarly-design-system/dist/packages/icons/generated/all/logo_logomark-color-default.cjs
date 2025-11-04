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
const LogoLogomarkColorDefault = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoLogomarkColorDefault", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--green-60)", d: "M0 16C0 7.163 7.162 0 16.001 0s16 7.163 16 16c0 7.732-5.482 14.183-12.773 15.676-1.042.213-2.121.324-3.222.324H0z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--white)", d: "m19.876 14.484-1.788 2.94h6.02c-.93 5.116-6.62 8.599-12.304 5.653a6.7 6.7 0 0 1-2.861-2.834c-3.27-6.226 1.197-12.49 7.093-12.49a8.19 8.19 0 0 1 6.2 2.839l1.58-2.6a11.08 11.08 0 0 0-8.566-3.148c-5.562.384-10.071 4.994-10.342 10.56-.309 6.393 4.8 11.688 11.124 11.688s11.14-4.999 11.14-11.14c0-.5-.038-.989-.1-1.468z" }));
});
exports.LogoLogomarkColorDefault = LogoLogomarkColorDefault;
