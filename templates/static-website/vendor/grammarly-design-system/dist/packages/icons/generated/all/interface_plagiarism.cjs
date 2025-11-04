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
const InterfacePlagiarism = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfacePlagiarism", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#646B81", d: "m11.429 8.571.473.16.223-.66h-.696zM9.07 10.486l-.096-.49a.5.5 0 0 0-.404.49zm0 1.514h-.5a.5.5 0 0 0 .609.488zm-4.5-3.429.474.16.223-.66H4.57zm-2.357 1.915-.096-.49a.5.5 0 0 0-.404.49zm0 1.514h-.5a.5.5 0 0 0 .609.488zm8.74-3.588c-.144.429-.36.76-.662 1.014-.304.255-.726.454-1.317.57l.193.981c.715-.14 1.303-.397 1.766-.785.465-.39.775-.887.968-1.46zm-2.383 2.074V12h1v-1.514zm.609 2.002c2.445-.543 3.802-1.718 4.53-2.985.717-1.247.79-2.522.79-3.217h-1c0 .631-.07 1.697-.657 2.718-.575 1-1.682 2.02-3.88 2.508zm2.249-4.417c-1.201 0-2.072-.853-2.072-1.785h-1c0 1.592 1.432 2.785 3.072 2.785zM9.357 6.286c0-.933.87-1.786 2.072-1.786v-1c-1.64 0-3.072 1.193-3.072 2.786zM11.43 4.5c1.21 0 2.071.797 2.071 1.786h1c0-1.666-1.442-2.786-3.071-2.786zM4.098 8.412c-.145.429-.36.76-.663 1.014-.305.255-.726.454-1.317.57l.193.981c.715-.14 1.303-.397 1.766-.785.465-.39.774-.887.968-1.46zm-2.384 2.074V12h1v-1.514zm.609 2.002c2.445-.543 3.802-1.718 4.53-2.985.717-1.247.79-2.522.79-3.217h-1c0 .631-.07 1.697-.657 2.718-.575 1-1.682 2.02-3.88 2.508zM4.57 8.071c-1.2 0-2.071-.853-2.071-1.785h-1c0 1.592 1.432 2.785 3.071 2.785zM2.5 6.286c0-.933.87-1.786 2.071-1.786v-1C2.932 3.5 1.5 4.693 1.5 6.286zM4.571 4.5c1.211 0 2.072.797 2.072 1.786h1C7.643 4.62 6.2 3.5 4.57 3.5z" }));
});
exports.InterfacePlagiarism = InterfacePlagiarism;
