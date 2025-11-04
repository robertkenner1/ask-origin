import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsAiRewriter = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "AgentsAiRewriter", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M13.305 11.877a1.428 1.428 90 0 0-2.855 0 1.428 1.428 90 1 0 2.855 0m-.64-3.644c-.056.319.16.617.462.735a3 3 90 0 1 1.744 1.805c.107.306.398.533.719.488l3.618-.509a.555.555 0 0 0 .478-.66 7.82 7.82 90 0 0-5.71-5.913.554.554 0 0 0-.676.455Zm-1.842.57a3.23 3.23 90 0 0-2.041 3.947 3.23 3.23 90 0 0 2.213 2.211 3.234 3.234 90 0 0 3.948-2.04.73.73 0 0 1 .218-.31.746.746 90 0 1 1.079.144.71.71 90 0 1 .093.653 4.71 4.71 90 0 1-5.75 2.974 4.706 4.706 90 0 1-3.29-5.572 4.71 4.71 90 0 1 3.037-3.397.73.73 90 0 1 .794.224.74.74 90 0 1 .168.605.73.73 90 0 1-.469.56m1.067 10.896a7.85 7.85 90 0 1-5.395-2.159 7.84 7.84 90 0 1-.56-10.778 7.85 7.85 90 0 1 5.144-2.706h.077a.737.737 90 0 1 .062 1.47A6.374 6.374 90 0 0 7.37 16.373a6.38 6.38 90 0 0 6.641 1.502 6.38 6.38 90 0 0 4.215-5.343.736.736 90 0 1 1.283-.436.73.73 90 0 1 .185.568 7.83 7.83 90 0 1-2.548 5.018 7.84 7.84 90 0 1-5.255 2.016z" }));
});
export {
  AgentsAiRewriter
};
