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
const EmojiDissatisfied = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiDissatisfied", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-sfieda)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-sfiedb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#917524", d: "M20.067 10.377c-.997-1.302-2.724-2.287-3.85-2.271-.238.003-.588.787-.39.81 1.524.174 3.056.86 4.052 2.003.133.154.337-.346.188-.542M3.934 10.378C4.93 9.075 6.657 8.09 7.783 8.106c.237.003.588.788.39.81-1.524.175-3.056.861-4.052 2.004-.133.154-.337-.346-.187-.542" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M10.282 11.645c-1.047-1.215-4.24-.853-5.326.97-.072.123.024.271.19.169 1.049-.645 2.367-.612 2.367-.612.002.878.696 1.588 1.552 1.588 1.24 0 1.831-1.402 1.217-2.115M18.824 11.645c-1.047-1.215-4.24-.853-5.326.97-.073.123.024.271.19.169 1.048-.645 2.366-.612 2.366-.612.003.878.696 1.588 1.553 1.588 1.24 0 1.83-1.402 1.217-2.115M14.748 16.409c-1.954-.634-4.438-.009-5.566 1.539-.092.127.03.275.17.178 1.127-.784 3.448-1.277 5.09-.687.629.226.972-.814.306-1.03" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-sfiedb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-sfieda` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiDissatisfied = EmojiDissatisfied;
