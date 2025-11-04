import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceOffline = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceOffline", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#CD0800", fillRule: "evenodd", d: "M3.311 2.928a.583.583 0 0 0-.848-.025.643.643 0 0 0-.024.884l1.904 2.098A9.3 9.3 0 0 0 2.354 7.89a1.69 1.69 0 0 0 .121 2.121l6.015 6.627c.3.331.707.515 1.147.515.432 0 .85-.188 1.149-.515l1.656-1.825 2.051 2.26a.586.586 0 0 0 .848.025.643.643 0 0 0 .024-.884zM16.92 7.877c-1.748-2.388-4.403-3.758-7.284-3.758-.287 0-.576.015-.856.046a.4.4 0 0 0-.333.27.43.43 0 0 0 .084.43l6.174 6.804c.076.084.181.131.29.131.11 0 .216-.047.291-.13l1.516-1.665a1.69 1.69 0 0 0 .118-2.128", clipRule: "evenodd" }));
});
export {
  InterfaceOffline
};
