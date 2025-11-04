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
const GGOEmojiWhiteQuestionMark = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiWhiteQuestionMark", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#05735A", fillRule: "evenodd", d: "M6.001 7.998c.295-3.495 3.105-5.15 6.26-5.15 2.892 0 5.74 1.745 5.739 5.035 0 2.156-1.354 3.452-2.542 4.59-.745.713-1.425 1.363-1.665 2.124-.122.347-.282.526-.648.526h-2.353c-.391 0-.648-.237-.565-.635.25-1.461 1.327-2.46 2.333-3.393.99-.918 1.913-1.773 1.913-2.943 0-1.193-.853-1.866-2.328-1.866-1.353 0-2.347.59-2.578 1.776-.083.372-.282.571-.648.571H6.604c-.391 0-.628-.218-.603-.635m4.708 9.498h2.437c.39 0 .609.218.609.61v2.436c0 .391-.218.61-.61.61H10.71c-.392 0-.61-.219-.61-.61v-2.437c0-.39.218-.61.61-.61", clipRule: "evenodd" }));
});
exports.GGOEmojiWhiteQuestionMark = GGOEmojiWhiteQuestionMark;
