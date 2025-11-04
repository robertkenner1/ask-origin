import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfacePremium = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfacePremium", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", strokeLinejoin: "round", d: "M2 6.448 4.526 3h2.527M2 6.448 8 13M2 6.448h3.474m8.526 0L11.474 3H8.947M14 6.448 8 13m6-6.552h-3.79M8 13 5.474 6.448M8 13l2.21-6.552m-4.736 0h4.736m-4.736 0L7.053 3m3.157 3.448L8.948 3m0 0H7.053" }));
});
export {
  InterfacePremium
};
