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
const LogoMailMarkMonoLight = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 33, fill: "none", viewBox: "0 0 32 33", "aria-hidden": "true", "data-icon": "LogoMailMarkMonoLight", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: mail mark mono light") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-logo-mail-light)", fillRule: "evenodd", d: "M15.802 2.212a.335.335 0 0 1 .396 0l12.032 8.923a.312.312 0 0 1 0 .506L16 20.71l-12.23-9.07a.312.312 0 0 1 0-.506zm11.693 18.705-4.448-3.299-.085-.063-4.533 3.362zm-3.18-4.366 4.91 3.643a1.88 1.88 0 0 1 0 3.042l-12.03 8.923a2.01 2.01 0 0 1-2.39 0l-12.03-8.923a1.88 1.88 0 0 1 0-3.043l4.91-3.642-4.91-3.642a1.88 1.88 0 0 1 0-3.042L14.804.944a2.01 2.01 0 0 1 2.39 0l12.03 8.923a1.88 1.88 0 0 1 0 3.042zM9.038 17.555l-.085.063-5.183 3.844a.313.313 0 0 0 0 .505l12.032 8.924c.117.087.28.087.396 0l11.297-8.379H15.723l-.22-.163z", clipRule: "evenodd" }));
});
exports.LogoMailMarkMonoLight = LogoMailMarkMonoLight;
