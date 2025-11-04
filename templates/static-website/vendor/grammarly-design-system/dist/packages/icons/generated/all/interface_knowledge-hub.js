import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceKnowledgeHub = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceKnowledgeHub", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-gehuba)` }, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeMiterlimit: 10, d: "m3.748 6.206-1.477.827a.517.517 0 0 0 0 .91l6.102 3.416c.335.188.748.188 1.083 0l4.273-2.392a.517.517 0 0 0 0-.91l-1.443-.808M3.748 8.706l-1.477.827a.517.517 0 0 0 0 .91l6.102 3.416c.335.188.748.188 1.083 0l4.273-2.392a.517.517 0 0 0 0-.91l-1.443-.808m1.443-3.282L9.456 8.859a1.11 1.11 0 0 1-1.083 0L2.271 5.443a.517.517 0 0 1 0-.91l4.273-2.392a1.11 1.11 0 0 1 1.083 0l6.102 3.416c.361.202.361.708 0 .91Z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-gehuba` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" }))));
});
export {
  InterfaceKnowledgeHub
};
