import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const IllustrationSpotCoin = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotCoin", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-illustration-fill-1)", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M3.2 29.927c0-10.43 8.455-18.886 18.885-18.886h5.395v37.77h-5.395c-10.43 0-18.885-8.454-18.885-18.884z" }), /* @__PURE__ */ React.createElement("circle", { cx: 27.48, cy: 29.927, r: 18.885, fill: "var(--teal-30)", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { stroke: "var(--color-illustration-stroke-default)", d: "M21.884 33.343c0 2.825 1.866 4.708 4.663 4.708h2.49c2.23 0 4.039-1.826 4.039-4.078 0-1.993-1.428-3.695-3.375-4.022l-4.442-.748c-1.947-.327-3.375-2.029-3.375-4.022 0-2.252 1.809-4.078 4.04-4.078h2.489c2.575 0 4.663 1.883 4.663 4.708m-5.596-8.474v24.48" }), /* @__PURE__ */ React.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "square", strokeLinejoin: "round", d: "M8.4 29.927H3.2M9.6 22.932H4.949M14.4 15.938H9.805M9.6 36.921H4.668M14.4 43.916H9.805" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", stroke: "var(--color-illustration-stroke-default)", d: "m42 7.212 3.154 6.846L52 17.212l-6.846 3.153L42 27.212l-3.154-6.847L32 17.212l6.846-3.154z" }));
});
export {
  IllustrationSpotCoin
};
