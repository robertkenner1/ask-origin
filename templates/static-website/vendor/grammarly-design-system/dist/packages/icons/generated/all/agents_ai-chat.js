import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsAiChat = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsAiChat", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: ai chat") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", fillRule: "evenodd", d: "M6.263 2.573a95 95 0 0 1 7.474 0c1.542.061 2.788 1.272 2.863 2.813q.135 2.79 0 5.579c-.075 1.541-1.322 2.751-2.863 2.812q-1.463.057-2.927.07a.84.84 0 0 0-.609.269l-3.08 3.338c-.487.527-1.366.183-1.366-.534v-2.802c0-.236-.168-.435-.39-.515a2.95 2.95 0 0 1-1.964-2.638q-.135-2.79 0-5.579a2.967 2.967 0 0 1 2.862-2.813m4 2.443c-.074-.233-.456-.232-.528 0-.218.707-.53 1.374-1.03 1.864-.498.49-1.161.805-1.864 1.027-.233.073-.232.455 0 .528.707.218 1.374.53 1.865 1.028.49.499.805 1.168 1.026 1.871.073.233.454.232.526 0 .218-.709.53-1.378 1.03-1.87.5-.491 1.168-.806 1.872-1.027.232-.073.23-.454-.002-.525-.708-.22-1.377-.532-1.87-1.032-.49-.498-.804-1.161-1.025-1.864", clipRule: "evenodd" }));
});
export {
  AgentsAiChat
};
