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
const LogoGrammarlyStackedMonoInverse = /* @__PURE__ */ createIcon.createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = helpers.generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 106, height: 61, fill: "none", viewBox: "0 0 106 61", "aria-hidden": "true", "data-icon": "LogoGrammarlyStackedMonoInverse", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React__namespace.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, "Vector graphic: grammarly stacked mono inverse") : desc ? /* @__PURE__ */ React__namespace.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-logo-grammarly-default)", fillRule: "evenodd", d: "M16.065 0c8.874 0 16.066 7.19 16.066 16.06 0 7.76-5.505 14.234-12.824 15.731a16 16 0 0 1-3.236.325H0V16.06C0 7.19 7.192 0 16.065 0m7.712 7.893A11.13 11.13 0 0 0 15.31 4.86C9.728 5.246 5.2 9.873 4.93 15.46c-.311 6.415 4.82 11.732 11.168 11.732s11.184-5.017 11.184-11.18q-.002-.75-.101-1.475h-7.238l-1.704 2.951h5.969c-.935 5.133-6.647 8.63-12.355 5.673a6.73 6.73 0 0 1-2.873-2.845c-3.284-6.248 1.2-12.537 7.12-12.537a8.22 8.22 0 0 1 6.15 2.763z", clipRule: "evenodd" }), /* @__PURE__ */ React__namespace.createElement("path", { fill: "var(--color-logo-grammarly-default)", d: "M30.427 43.825v1.17a4.97 4.97 0 0 0-3.513-1.44c-3.086 0-5.45 2.544-5.45 5.694s2.364 5.65 5.45 5.65c1.374 0 2.589-.54 3.513-1.441v1.172h2.207V43.825zm-.503 7.15c-1.054 1.678-3.046 2.18-4.629 1.19-1.582-.995-2.006-2.987-.952-4.665s3.057-2.2 4.64-1.206 1.995 3.006.941 4.684zM77.694 43.825v1.17a4.97 4.97 0 0 0-3.513-1.44c-3.086 0-5.451 2.544-5.451 5.694s2.365 5.65 5.451 5.65c1.374 0 2.589-.54 3.513-1.441v1.172H79.9V43.825zm-.503 7.15c-1.054 1.678-3.047 2.18-4.629 1.19-1.583-.995-2.007-2.987-.952-4.665 1.054-1.678 3.057-2.2 4.64-1.206s1.992 3.006.94 4.684zM41.37 48.187c0-1.011-.224-1.509-.563-1.867-.34-.362-.857-.562-1.419-.562s-1.08.203-1.419.562c-.336.358-.562.855-.562 1.867v6.438H35.11V43.82h2.162v.765a3.44 3.44 0 0 1 2.498-1.037c1.237 0 2.342.585 3.04 1.486.744-.9 1.89-1.486 3.222-1.486 1.33 0 2.365.585 3.086 1.532.494.675.81 1.53.81 2.903v6.642h-2.297v-6.438c0-1.011-.226-1.509-.562-1.867-.34-.362-.856-.562-1.419-.562-.562 0-1.08.203-1.418.562-.337.358-.563.855-.563 1.867v6.438h-2.297v-6.438zM58.545 48.187c0-1.011-.226-1.509-.562-1.867-.34-.362-.856-.562-1.419-.562-.562 0-1.08.203-1.418.562-.337.358-.563.855-.563 1.867v6.438h-2.297V43.82h2.162v.765a3.45 3.45 0 0 1 2.5-1.037c1.238 0 2.343.585 3.041 1.486.744-.9 1.89-1.486 3.222-1.486 1.33 0 2.365.585 3.086 1.532.494.675.81 1.53.81 2.903v6.642H64.81v-6.438c0-1.011-.226-1.509-.562-1.867-.34-.362-.856-.562-1.419-.562-.562 0-1.08.203-1.418.562-.337.358-.563.855-.563 1.867v6.438h-2.297v-6.438zM90.81 37.116h2.297V54.63h-2.298zM8.964 43.825v1.17a4.97 4.97 0 0 0-3.513-1.44c-3.086 0-5.451 2.5-5.451 5.649s2.365 5.695 5.451 5.695c1.351 0 2.566-.52 3.468-1.396v1.127c0 1.848-1.15 3.24-2.866 3.466-1.34.178-2.814-.206-3.753-.977a3 3 0 0 1-.313-.297L.78 58.786q.046.037.088.076c1.19.977 2.86 1.531 4.524 1.531q.48 0 .955-.062c2.843-.376 4.824-2.72 4.824-5.7V43.824zm-3.287 8.87c-1.87 0-3.286-1.508-3.286-3.488s1.418-3.444 3.286-3.444 3.287 1.486 3.287 3.466-1.419 3.466-3.287 3.466M103.455 43.789l-3.402 7.717-3.14-7.718H94.61l4.245 10.436-2.677 6.07h2.332l7.279-16.505zM20.672 44.085c-.797-.35-1.673-.497-2.532-.322a4 4 0 0 0-2.015 1.088 2.4 2.4 0 0 0-.317.361v-1.395h-2.161v10.805h2.297V49.24c0-1.26.316-1.98.834-2.5.54-.539 1.283-.855 2.139-.855.266 0 .952.073 1.695.556l1.091-1.777a6.3 6.3 0 0 0-1.031-.579M86.873 43.749c-.76.155-1.467.54-2.015 1.088a2.5 2.5 0 0 0-.317.358V43.8H82.38v10.805h2.298v-5.381c0-1.26.313-1.98.833-2.5.54-.54 1.283-.856 2.14-.856.265 0 .898.005 1.687.313v-2.138c-.78-.33-1.63-.47-2.467-.3z" }));
});
exports.LogoGrammarlyStackedMonoInverse = LogoGrammarlyStackedMonoInverse;
