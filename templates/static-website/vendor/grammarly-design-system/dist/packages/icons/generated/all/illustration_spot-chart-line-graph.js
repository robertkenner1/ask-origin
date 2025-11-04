import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const IllustrationSpotChartLineGraph = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 56, height: 56, fill: "none", viewBox: "0 0 56 56", "aria-hidden": "true", "data-icon": "IllustrationSpotChartLineGraph", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#fff", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M40.155 6.16H16.072C10.29 6.16 5.6 10.85 5.6 16.634V39.41c0 5.784 4.689 10.472 10.472 10.472h24.083c5.783 0 10.472-4.688 10.472-10.472V16.633c0-5.784-4.689-10.472-10.473-10.472Z" }), /* @__PURE__ */ React.createElement("path", { stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "m12 35.95 4.058-7.497c1.728-3.193 5.79-3.617 8.047-.84l2.292 2.818c2.061 2.536 5.7 2.441 7.64-.198L41.6 19.95" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--teal-30)", stroke: "var(--color-illustration-stroke-default)", strokeLinecap: "round", d: "M42.071 20.905c1.245 0 2.253-.98 2.253-2.19s-1.008-2.19-2.253-2.19c-1.244 0-2.253.981-2.253 2.19s1.009 2.19 2.253 2.19Z" }));
});
export {
  IllustrationSpotChartLineGraph
};
