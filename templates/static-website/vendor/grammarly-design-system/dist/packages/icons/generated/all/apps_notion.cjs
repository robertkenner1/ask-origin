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
const AppsNotion = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsNotion", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-otiona)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "m4.142 3.604 7.747-.572c.952-.082 1.196-.027 1.794.408l2.473 1.742c.408.3.544.381.544.707v9.554c0 .6-.218.953-.979 1.007l-8.996.545c-.57.027-.843-.054-1.142-.436l-1.821-2.368c-.327-.435-.462-.761-.462-1.143V4.556c0-.49.217-.898.842-.952" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#000", fillRule: "evenodd", d: "m11.889 3.032-7.747.572c-.625.054-.842.462-.842.952v8.492c0 .381.135.708.462 1.143l1.821 2.368c.3.382.571.463 1.142.436l8.996-.544c.761-.055.979-.409.979-1.008V5.89c0-.31-.122-.4-.482-.663L13.683 3.44c-.598-.435-.842-.49-1.794-.408m-4.96 2.701c-.735.05-.901.06-1.319-.278L4.55 4.61c-.108-.11-.054-.246.218-.273l7.447-.544c.625-.054.95.164 1.195.354l1.278.925c.054.028.19.19.027.19l-7.691.464zm-.857 9.629v-8.11c0-.355.11-.518.435-.546l8.833-.517c.3-.027.435.163.435.517v8.057c0 .354-.055.653-.544.68l-8.452.49c-.49.028-.706-.135-.706-.571m8.344-7.676c.055.245 0 .49-.245.518l-.407.08v5.99c-.354.19-.68.298-.951.298-.436 0-.544-.136-.87-.544L9.28 9.837v4.055l.843.19s0 .49-.68.49l-1.875.11c-.055-.11 0-.382.19-.436l.49-.136V8.748l-.68-.055c-.054-.245.081-.598.462-.626l2.012-.135 2.772 4.246V8.42l-.707-.08c-.055-.3.163-.519.434-.546z", clipRule: "evenodd" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-otiona` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M3 3h14v14H3z" }))));
});
exports.AppsNotion = AppsNotion;
