import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsDeepWriter = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsDeepWriter", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: deep writer") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M6.215 8.253q.517 0 .865.193.35.192.53.58.178.384.178.97 0 .583-.179.974a1.24 1.24 0 0 1-.534.584q-.356.194-.888.194H5.43V8.253z" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16M4.507 7.455v5.09h1.725q.776 0 1.328-.305.555-.306.847-.878.296-.571.296-1.367 0-.793-.293-1.362a2.05 2.05 0 0 0-.84-.872q-.546-.306-1.303-.306zm4.577 0 1.437 5.09h.91l1.021-3.571h.04l1.019 3.572h.91l1.436-5.09h-.99l-.919 3.742h-.044l-.982-3.743h-.902l-.98 3.74h-.047l-.917-3.74z", clipRule: "evenodd" }));
});
export {
  AgentsDeepWriter
};
