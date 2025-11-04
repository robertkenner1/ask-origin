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
const GGOEmojiReplyOther = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOEmojiReplyOther", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: `url(#${resourcePrefix}-othera)`, fillRule: "evenodd", d: "M8.566 19.04c1.025.284 2.17.442 3.434.442C25.333 19.482 25.333 2 12 2 1.551 2-.71 12.736 5.219 17.381c.417.992.724 2.669-.552 4.619 2.446-.455 3.498-2.074 3.899-2.96", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M7.663 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.337 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("radialGradient", { id: `${resourcePrefix}-othera`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(11.3742 0 0 9.94791 10 9.296)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#6B71F3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.406, stopColor: "#5C62E7" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.689, stopColor: "#555BE3" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.933, stopColor: "#4E54DB" }), /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#4A50D1" }))));
});
exports.GGOEmojiReplyOther = GGOEmojiReplyOther;
