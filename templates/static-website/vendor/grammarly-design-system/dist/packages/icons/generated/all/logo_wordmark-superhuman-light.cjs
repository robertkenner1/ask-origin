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
const LogoWordmarkSuperhumanLight = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 211, height: 20, fill: "none", viewBox: "0 0 211 20", "aria-hidden": "true", "data-icon": "LogoWordmarkSuperhumanLight", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React__namespace.createElement("g", { fill: "#fff", clipPath: `url(#${resourcePrefix}-lighta)` }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M115.623 7.732V.437h4.406v19.126h-4.406V11.72h-7.798v7.843h-4.405V.437h4.405v7.295zM4.413 13.635c.302 1.777 1.64 2.652 4.048 2.652 2.216 0 3.446-.847 3.446-2.294 0-1.121-.573-1.638-2.189-1.996l-2.873-.628C2.168 10.332.36 8.745.36 5.63.361 2.214 3.398 0 8.047 0s7.714 2.13 7.905 5.955h-4.378c-.303-1.475-1.505-2.242-3.53-2.242s-3.284.74-3.284 2.024c0 .982.546 1.419 2.464 1.884l2.706.6c4.76 1.01 6.376 2.513 6.376 5.903 0 3.634-2.981 5.876-7.852 5.876C3.339 20 .19 17.654 0 13.635zM32.866.437h4.406V11.45c0 5.792-2.735 8.551-8.37 8.551-5.637 0-8.37-2.759-8.37-8.551V.437h4.405v11.12c0 3.116 1.202 4.48 3.968 4.48s3.968-1.367 3.968-4.48V.437zM77.083 19.563H62.639V.437h14.444v3.936H67.041v3.415h8.523v3.935h-8.523v3.908h10.042v3.935zM137.616.437h4.406V11.45c0 5.792-2.735 8.551-8.37 8.551-5.636 0-8.37-2.759-8.37-8.551V.437h4.405v11.12c0 3.116 1.203 4.48 3.968 4.48 2.766 0 3.969-1.367 3.969-4.48V.437zM157.122 9.592l4.677-9.155h5.171v19.126h-4.294V6.913l-5.063 10.03h-.984l-5.062-10.03v12.65h-4.294V.437h5.169l4.677 9.155zM189.696 19.563h-4.377l-.712-4.89h-7.853l-.712 4.89h-4.378l1.751-12.105C174.262 1.992 176.177 0 180.666 0s6.428 1.996 7.248 7.458l1.78 12.105zm-12.337-8.878h6.647l-.41-2.87c-.439-2.897-1.15-3.852-2.926-3.852-1.775 0-2.464.958-2.901 3.852zM206.704 12.896V.437H211v19.126h-4.407l-7.904-12.46v12.46h-4.294V.437h4.405zM88.3 11.889l4.107-1.553 6.295 9.21H93.45z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M82.413.392h9.235q2.028 0 3.564.753t2.386 2.163q.85 1.411.85 3.328c0 1.278-.284 2.24-.85 3.18-.568.94-1.595 1.725-2.653 2.167-1.146.478-10.236 3.222-10.236 3.222l.007-4.406s6.68-1.656 7.769-2.058c.475-.175 1.678-.575 1.678-2.105 0-1.829-1.814-2-2.96-2h-5.619l1.234-1.232v16.158h-4.405zM42.518.392h9.235q2.028 0 3.565.753 1.535.753 2.385 2.163.85 1.411.85 3.328c0 1.278-.284 2.24-.85 3.18s-1.594 1.725-2.653 2.167c-1.145.478-10.236 3.222-10.236 3.222l.007-4.406s6.681-1.656 7.769-2.058c.475-.175 1.678-.575 1.678-2.105 0-1.829-1.814-2-2.959-2h-5.62l1.235-1.232v16.158h-4.406z" })), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: `${resourcePrefix}-lighta` }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h211v20H0z" }))));
});
exports.LogoWordmarkSuperhumanLight = LogoWordmarkSuperhumanLight;
