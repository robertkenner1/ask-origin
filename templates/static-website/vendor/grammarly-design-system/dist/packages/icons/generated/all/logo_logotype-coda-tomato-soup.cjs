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
const LogoLogotypeCodaTomatoSoup = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 93, height: 33, fill: "none", viewBox: "0 0 93 33", "aria-hidden": "true", "data-icon": "LogoLogotypeCodaTomatoSoup", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { fill: "#EE5A29", clipPath: `url(#${resourcePrefix}-osoupa)` }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M.154 20.207c0 7.686 5.32 12.463 12.052 12.463 2.365 0 4.731-.572 6.457-1.863v-6.006a8.48 8.48 0 0 1-5.686 2.155c-3.497 0-6.286-2.503-6.286-6.732 0-4.228 2.778-6.685 6.286-6.685a8.29 8.29 0 0 1 5.714 2.137V9.658c-1.714-1.32-4.091-1.822-6.457-1.822-6.76 0-12.08 4.777-12.08 12.371M32.377 7.836c-6.857 0-11.646 5.097-11.646 12.371S25.51 32.67 32.377 32.67s11.686-5.143 11.686-12.463S39.29 7.836 32.377 7.836m0 19.24c-3.274 0-5.097-2.858-5.097-6.858s1.823-6.822 5.097-6.822 5.092 2.857 5.092 6.822c0 3.966-1.772 6.858-5.092 6.858M62.823 10.339a8.28 8.28 0 0 0-6.006-2.503c-6.914 0-10.823 5.594-10.823 12.371 0 6.857 3.909 12.463 10.823 12.463a8.46 8.46 0 0 0 6.006-2.503v1.96h6.594V.67h-6.594zm0 13.828a5.05 5.05 0 0 1-4.503 2.726c-3.594 0-5.714-2.857-5.714-6.686s2.137-6.64 5.714-6.64a5.06 5.06 0 0 1 4.503 2.777zM82.611 7.836c-3.182 0-6.228.868-7.96 1.96v5.714a11.9 11.9 0 0 1 6.503-1.96c3.366 0 5.326 1.457 5.326 3.777v1.32c-.96-.686-3.28-1.411-5.326-1.411-5.228 0-9.183 3.091-9.183 7.64 0 4.914 3.955 7.685 8.778 7.685 2.588 0 4.954-.908 5.714-1.68v1.275h6.366V16.933c.017-5.777-3.715-9.097-10.218-9.097m3.869 17.828c-.571 1.274-2.32 2.052-4.189 2.052-2.091 0-4.228-.869-4.228-2.915 0-2.045 2.137-2.908 4.228-2.908 1.869 0 3.595.771 4.189 2.046z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-osoupa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M.154.67h92.691v32H.155z" }))));
});
exports.LogoLogotypeCodaTomatoSoup = LogoLogotypeCodaTomatoSoup;
