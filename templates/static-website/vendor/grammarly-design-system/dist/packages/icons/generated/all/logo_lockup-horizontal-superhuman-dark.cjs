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
const LogoLockupHorizontalSuperhumanDark = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 280, height: 40, fill: "none", viewBox: "0 0 280 40", "aria-hidden": "true", "data-icon": "LogoLockupHorizontalSuperhumanDark", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { fill: "#421D24", clipPath: `url(#${resourcePrefix}-mandarka)` }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M39.669 10.674A11.25 11.25 0 0 0 29.32.356a119 119 0 0 0-18.636.018C5.165.809.785 5.196.355 10.71c-.478 6.197-.475 12.42.02 18.616.439 5.515 4.83 9.89 10.347 10.318a119 119 0 0 0 18.635-.018c5.521-.439 9.901-4.825 10.33-10.336.48-6.197.476-12.42-.018-18.616m-19.599-4.3a4.034 4.034 0 0 1 4.043 4.028 4.034 4.034 0 0 1-4.043 4.027 4.034 4.034 0 0 1-4.042-4.027 4.034 4.034 0 0 1 4.042-4.027m7.628 26.533h.003l-7.017-3.838a1.27 1.27 0 0 0-1.228 0l-7.017 3.838c-1.13.617-2.36-.635-1.71-1.738l8.245-13.954c.49-.83 1.7-.83 2.19 0l8.244 13.954c.65 1.103-.577 2.355-1.71 1.738M180.303 17.629v-7.626h4.605v19.994h-4.605v-8.2h-8.152v8.2h-4.605V10.003h4.605v7.626zM64.054 23.8c.315 1.858 1.714 2.772 4.23 2.772 2.318 0 3.603-.885 3.603-2.398 0-1.172-.599-1.712-2.288-2.086l-3.003-.657c-4.889-1.085-6.777-2.743-6.777-6 0-3.57 3.174-5.886 8.033-5.886 4.86 0 8.063 2.228 8.263 6.226H71.54c-.316-1.542-1.573-2.343-3.69-2.343s-3.432.772-3.432 2.115c0 1.026.57 1.483 2.575 1.97l2.829.627c4.976 1.056 6.665 2.627 6.665 6.172 0 3.798-3.117 6.142-8.208 6.142-5.347 0-8.637-2.453-8.837-6.654zM93.796 10.003H98.4v11.512c0 6.055-2.858 8.94-8.75 8.94-5.89 0-8.749-2.885-8.749-8.94V10.003h4.605v11.624c0 3.258 1.257 4.684 4.148 4.684s4.148-1.43 4.148-4.684V10.003zM140.016 29.997h-15.098V10.003h15.098v4.114h-10.497v3.57h8.91V21.8h-8.91v4.085h10.497v4.115zM203.292 10.003h4.605v11.512c0 6.055-2.859 8.94-8.749 8.94s-8.75-2.885-8.75-8.94V10.003h4.606v11.624c0 3.258 1.257 4.684 4.148 4.684s4.148-1.43 4.148-4.684V10.003zM223.682 19.574l4.888-9.571h5.405v19.994h-4.489V16.773l-5.292 10.485h-1.029l-5.29-10.485v13.224h-4.489V10.003h5.403l4.889 9.57zM257.731 29.997h-4.575l-.745-5.112h-8.208l-.745 5.112h-4.576l1.83-12.655c.885-5.714 2.887-7.797 7.58-7.797s6.719 2.087 7.576 7.797l1.861 12.655zm-12.896-9.28h6.948l-.429-3.001c-.459-3.03-1.202-4.027-3.058-4.027s-2.575 1.001-3.032 4.027zM275.509 23.028V10.003H280v19.994h-4.607l-8.262-13.025v13.025h-4.489V10.003h4.605zM151.742 21.974l4.292-1.623 6.58 9.628h-5.49z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M145.587 9.955h9.654q2.12 0 3.726.787 1.604.789 2.493 2.262.888 1.476.889 3.479c0 1.336-.297 2.34-.89 3.324-.592.983-1.666 1.804-2.772 2.266-1.197.5-10.7 3.369-10.7 3.369l.008-4.607s6.983-1.731 8.12-2.151c.497-.184 1.755-.602 1.755-2.201 0-1.912-1.897-2.09-3.094-2.09h-5.873l1.289-1.289v16.893h-4.605zM103.885 9.955h9.653q2.121 0 3.726.787 1.605.789 2.494 2.262.888 1.476.888 3.479c0 1.336-.297 2.34-.889 3.324-.592.983-1.666 1.804-2.772 2.266-1.197.5-10.7 3.369-10.7 3.369l.008-4.607s6.983-1.731 8.12-2.151c.497-.184 1.755-.601 1.755-2.201 0-1.912-1.897-2.09-3.094-2.09H107.2l1.29-1.289v16.893h-4.605z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-mandarka` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h280v40H0z" }))));
});
exports.LogoLockupHorizontalSuperhumanDark = LogoLockupHorizontalSuperhumanDark;
