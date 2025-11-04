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
const EmojiInformal = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "EmojiInformal", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-ormala)`, d: "M17.8 5.054c-.3-.405-1.387-.766-2.645-1.176-.778-.254-3.155.774-3.155.774s-2.378-1.028-3.155-.774c-1.257.41-2.346.771-2.645 1.176C5.077 6.57 2.665 9.789 2.665 9.789c.972 1.33 3.79 2.187 3.79 2.187l.858-1.23-.419 8.925c1.636.939 8.575.939 10.212 0l-.419-8.926.856 1.231s2.82-.857 3.792-2.187c0 0-2.413-3.218-3.535-4.735" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#086952", d: "M12 3.953s-1.165.014-2.857-.328v.781L12 6.046l2.857-1.64v-.781c-1.692.342-2.857.328-2.857.328" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0D8065", d: "M12 4.527s-1.378-.02-2.857-.328l.833 1.32L12 5.963l2.023-.446.834-1.32a17 17 0 0 1-2.857.33M16.687 10.745l.578.831c-.189-1.752.016-3.987.016-3.987s-.817 1.323-.594 3.156" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#11A683", d: "M14.857 3.625C14.52 4.78 13.184 5.635 12 5.635s-2.52-.855-2.857-2.01l-.6.352C9.188 5.549 10.53 6.35 12 6.35s2.81-.8 3.456-2.373z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#0D8065", d: "m7.313 10.745-.579.831c.189-1.752-.016-3.987-.016-3.987s.818 1.323.595 3.156" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#11A683", d: "m17.023 11.275.518.749s2.851-.873 3.834-2.227l-.517-.696c-1.343 1.227-3.835 2.173-3.835 2.173M6.977 11.275l-.517.749s-2.852-.873-3.835-2.227l.517-.696c1.343 1.227 3.835 2.173 3.835 2.173" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("linearGradient", { id: `${resourcePrefix}-ormala`, x1: 12, x2: 12, y1: 22.375, y2: 3.838, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#11A683" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#15C39A" }))));
});
exports.EmojiInformal = EmojiInformal;
