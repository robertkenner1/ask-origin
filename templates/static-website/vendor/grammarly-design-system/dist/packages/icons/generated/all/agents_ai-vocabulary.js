import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsAiVocabulary = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsAiVocabulary", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: ai vocabulary") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16m2.398 5.84q-.67 0-1.199.31-.527.312-.835.898-.305.585-.305 1.407 0 .82.305 1.406.309.585.835.898.53.31 1.199.31a2.3 2.3 0 0 0 1.195-.31q.53-.31.836-.895.307-.585.307-1.409 0-.823-.307-1.407a2.2 2.2 0 0 0-.836-.898 2.3 2.3 0 0 0-1.195-.31m-7.333.07L6.857 13h1.14L9.79 7.91H8.776l-1.322 4.006h-.053L6.077 7.909zm7.333.757q.414 0 .733.207.318.204.497.604.181.398.182.977 0 .579-.182.979-.18.397-.497.604a1.33 1.33 0 0 1-.733.204 1.33 1.33 0 0 1-.734-.204 1.4 1.4 0 0 1-.499-.604q-.18-.4-.18-.979 0-.58.18-.977a1.36 1.36 0 0 1 .5-.604q.317-.207.733-.207" }));
});
export {
  AgentsAiVocabulary
};
