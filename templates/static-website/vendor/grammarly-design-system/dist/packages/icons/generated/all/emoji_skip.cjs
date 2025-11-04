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
const EmojiSkip = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiSkip", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-iskipa)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-iskipb)`, d: "M8.61 18.15c.125-.072.238-.043.312.085l.475.823c.073.127.043.24-.084.312l-3.405 1.966c-.127.074-.239.043-.312-.084l-.375-.649a.5.5 0 0 1-.07-.286l.184-4.415-1.884 1.088c-.126.073-.24.043-.312-.084l-.475-.824c-.073-.127-.043-.24.083-.312l3.326-1.92c.127-.074.24-.043.312.084l.375.65c.055.094.073.179.07.286l-.185 4.415z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-iskipc)`, d: "M13.562 12.792c.177-.065.315-.002.38.178l.423 1.161c.065.178.001.316-.177.381l-4.804 1.749c-.179.065-.316 0-.38-.178l-.334-.916a.7.7 0 0 1-.027-.383l1.235-5.611-2.659.967c-.178.066-.316.002-.38-.177l-.424-1.162c-.065-.178 0-.316.178-.38l4.692-1.708c.179-.065.316 0 .38.177l.334.916c.049.135.053.247.026.384L10.79 13.8z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-iskipd)`, d: "M21.04 9.938c.214 0 .335.12.335.335v1.392c0 .214-.121.335-.334.335h-5.76c-.215 0-.334-.121-.334-.335v-1.098c0-.16.04-.281.12-.415l3.468-5.465h-3.187c-.214 0-.335-.12-.335-.335V2.96c0-.213.121-.334.335-.334h5.625c.215 0 .335.12.335.334v1.099c0 .161-.04.281-.12.415l-3.47 5.465z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-iskipb`, x1: 6.029, x2: 6.029, y1: 21.375, y2: 13.811, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#018FCF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.123, stopColor: "#0196DA" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.421, stopColor: "#01A5EE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.716, stopColor: "#01ADFB" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#01B0FF" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-iskipc`, x1: 10.391, x2: 10.391, y1: 16.286, y2: 6.689, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#018FCF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.123, stopColor: "#0196DA" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.421, stopColor: "#01A5EE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.716, stopColor: "#01ADFB" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#01B0FF" })), /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-iskipd`, x1: 18.161, x2: 18.161, y1: 12, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#018FCF" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.123, stopColor: "#0196DA" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.421, stopColor: "#01A5EE" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.716, stopColor: "#01ADFB" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#01B0FF" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-iskipa` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiSkip = EmojiSkip;
