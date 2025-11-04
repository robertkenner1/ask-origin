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
const InterfaceNewTeam = /* @__PURE__ */ createIcon.createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceNewTeam", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#6D758D", d: "M4.629 10.999a.5.5 0 1 0 0-1zm-2.13-.5H2a.5.5 0 0 0 .5.5zm3.21-3.75a.5.5 0 1 0-1 0zm2.585 2.43a.5.5 0 1 0 .412-.912zm-1.036-2.43a.5.5 0 0 0-1 0zm.578 1.673.207-.455zm-3.682.049.228.445zm-.6.306-.227-.446zm7.817 3.722a.5.5 0 0 0 0 1zm2.13.5v.5a.5.5 0 0 0 .5-.5zm-2.21-3.75a.5.5 0 0 0-1 0zm.554 1.722-.227.445zm.6.306.228-.445zm-.816 2.222a.5.5 0 1 0 0-1zm-5.13-.5H6a.5.5 0 0 0 .5.5zm3.21-3.75a.5.5 0 0 0-1 0zm-1.555 1.722-.227-.445zm-.6.306.227.445zM4.63 9.999h-2.13v1h2.13zm-.848-.777.6-.306-.454-.89-.6.305zm4.925-.955-.663-.3-.413.91.664.301zm-3.77-2.899v-.79h-1v.79zm2.096-.79v.79h1v-.79zm0 .79c0 .605-.478 1.079-1.048 1.079v1c1.14 0 2.048-.94 2.048-2.079zM5.984 3.5c.57 0 1.048.474 1.048 1.079h1c0-1.14-.908-2.079-2.048-2.079zM4.935 4.579c0-.605.479-1.079 1.049-1.079v-1c-1.14 0-2.049.94-2.049 2.079zm-1 .789c0 1.139.908 2.079 2.049 2.079v-1c-.57 0-1.049-.474-1.049-1.079zm4.108 2.599a1.34 1.34 0 0 1-.785-1.218h-1c0 .918.536 1.75 1.372 2.128zm-3.661.95a2.43 2.43 0 0 0 1.327-2.168h-1c0 .539-.302 1.032-.782 1.277zM3 10.498c0-.539.302-1.032.781-1.277l-.454-.89A2.43 2.43 0 0 0 2 10.498zm8.371 3h2.13v-1h-2.13zm1.302-2.668-.6-.305-.455.89.6.306zm-.608-2.963v-.79h-1v.79zm-4.097-.79v.79h1v-.79zm0 .79c0 1.139.908 2.079 2.048 2.079v-1c-.57 0-1.048-.474-1.048-1.079zM10.016 5c-1.14 0-2.048.94-2.048 2.079h1c0-.605.478-1.079 1.048-1.079zm2.049 2.079c0-1.14-.908-2.079-2.049-2.079v1c.57 0 1.049.474 1.049 1.079zm-1 .789c0 .605-.479 1.079-1.049 1.079v1c1.14 0 2.049-.94 2.049-2.079zm1.008 2.658a1.43 1.43 0 0 1-.782-1.277h-1c0 .915.513 1.752 1.327 2.167zM14 12.999c0-.915-.513-1.752-1.328-2.168l-.454.891c.48.245.782.738.782 1.277zm-2.372-.5h-5.13v1h5.13zm-3.848-.777.6-.306-.454-.89-.6.306zm1.154-3.854v-.79h-1v.79zm2.097-.79v.79h1v-.79zm0 .79c0 .605-.478 1.079-1.048 1.079v1c1.14 0 2.048-.94 2.048-2.079zM9.984 6c.57 0 1.048.474 1.048 1.079h1c0-1.14-.908-2.079-2.048-2.079zM8.935 7.079C8.935 6.474 9.414 6 9.984 6V5c-1.14 0-2.049.94-2.049 2.079zm-1 .789c0 1.139.908 2.079 2.049 2.079v-1c-.57 0-1.049-.474-1.049-1.079zm.447 3.548A2.43 2.43 0 0 0 9.709 9.25h-1c0 .539-.302 1.032-.782 1.277zM7 13c0-.539.302-1.032.781-1.277l-.454-.89A2.43 2.43 0 0 0 6 12.999z" }));
});
exports.InterfaceNewTeam = InterfaceNewTeam;
