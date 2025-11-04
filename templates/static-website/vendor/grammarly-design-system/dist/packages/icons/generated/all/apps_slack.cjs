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
const AppsSlack = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsSlack", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: `url(#${resourcePrefix}-slacka)` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#E01E5A", d: "M5.304 12.137c0 .937-.766 1.702-1.702 1.702A1.706 1.706 0 0 1 1.9 12.137c0-.937.765-1.702 1.702-1.702h1.702zM6.161 12.137c0-.937.765-1.702 1.702-1.702s1.702.765 1.702 1.702v4.261c0 .937-.766 1.702-1.702 1.702a1.706 1.706 0 0 1-1.702-1.702z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#36C5F0", d: "M7.863 5.304A1.706 1.706 0 0 1 6.16 3.602c0-.937.765-1.702 1.702-1.702s1.702.765 1.702 1.702v1.702zM7.863 6.161c.936 0 1.702.765 1.702 1.702s-.766 1.702-1.702 1.702H3.602A1.706 1.706 0 0 1 1.9 7.863c0-.937.765-1.702 1.702-1.702z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#2EB67D", d: "M14.696 7.863c0-.937.765-1.702 1.702-1.702s1.702.765 1.702 1.702-.766 1.702-1.702 1.702h-1.702zM13.839 7.863c0 .937-.765 1.702-1.702 1.702a1.706 1.706 0 0 1-1.702-1.702V3.602c0-.937.765-1.702 1.702-1.702s1.702.765 1.702 1.702z" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "#ECB22E", d: "M12.137 14.696c.937 0 1.702.766 1.702 1.702 0 .937-.765 1.702-1.702 1.702a1.706 1.706 0 0 1-1.702-1.702v-1.702zM12.137 13.839a1.706 1.706 0 0 1-1.702-1.702c0-.937.765-1.702 1.702-1.702h4.261c.937 0 1.702.765 1.702 1.702s-.765 1.702-1.702 1.702z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-slacka` }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 18, height: 18, x: 1, y: 1, fill: "#fff", rx: 9 }))));
});
exports.AppsSlack = AppsSlack;
