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
const EmojiDismayed = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiDismayed", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-mayeda)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-mayedb)`, d: "M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#302C3B", d: "M6.713 10.539c-.184-.094-.329.133-.173.264 1.903 1.601 2.195 1.917 2.194 2.057 0 .141-.291.457-2.194 2.058-.156.13-.011.358.173.264C10.697 13.147 11.16 13 11.16 12.86c0-.14-.463-.286-4.448-2.321M17.288 15.182c.183.094.328-.133.172-.264-1.903-1.601-2.194-1.917-2.194-2.057 0-.141.291-.457 2.194-2.058.156-.13.011-.358-.172-.264-3.985 2.035-4.45 2.18-4.45 2.322 0 .14.465.286 4.45 2.32M15.31 18.45c-.565 0-.918-.444-1.201-.802-.141-.178-.354-.447-.466-.447-.11 0-.316.267-.452.443-.278.36-.624.807-1.193.807-.568 0-.914-.448-1.192-.807-.137-.176-.343-.443-.451-.443-.112 0-.325.269-.466.447-.283.358-.635.803-1.2.803-.976 0-1.453-1.218-1.504-1.357a.469.469 0 0 1 .88-.325c.113.304.402.744.623.744.112 0 .325-.269.466-.447.283-.358.635-.803 1.2-.803.569 0 .915.448 1.193.807.136.176.343.443.45.443.11 0 .316-.267.453-.443.277-.36.624-.807 1.192-.807.566 0 .918.445 1.202.803.14.178.354.447.466.447.223 0 .511-.44.625-.745a.469.469 0 0 1 .88.326c-.051.14-.529 1.357-1.505 1.357" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-mayedb`, x1: 12, x2: 12, y1: 21.375, y2: 2.625, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FFA027" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.272, stopColor: "#FFC151" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.763, stopColor: "#FFC93F" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFE261" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-mayeda` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" }))));
});
exports.EmojiDismayed = EmojiDismayed;
