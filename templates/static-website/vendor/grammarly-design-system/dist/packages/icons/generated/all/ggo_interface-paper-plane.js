import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfacePaperPlane = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfacePaperPlane", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#0A9A78", d: "M21.106 12.447 4.993 20.504a.5.5 0 0 1-.707-.576l1.548-5.805a1 1 0 0 1 .802-.729l6.884-1.147c.279-.047.279-.447 0-.493l-6.884-1.148a1 1 0 0 1-.802-.729L4.286 4.073a.5.5 0 0 1 .707-.577l16.113 8.057a.5.5 0 0 1 0 .894" }));
});
export {
  GGOInterfacePaperPlane
};
