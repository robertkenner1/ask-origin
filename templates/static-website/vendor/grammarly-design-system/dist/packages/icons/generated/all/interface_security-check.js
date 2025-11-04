import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceSecurityCheck = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceSecurityCheck", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#707070", d: "M10 2.5 3.75 5.208v4.057c0 3.8 2.5 6.993 6.25 8.235 3.75-1.242 6.25-4.435 6.25-8.235V5.208z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", d: "m7.5 10.077 1.795 1.729 4.038-3.89" }));
});
export {
  InterfaceSecurityCheck
};
