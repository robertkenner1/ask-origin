import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceImage = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceImage", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#707070", strokeLinecap: "round", d: "M17.5 11.679 13.281 7.8l-4.687 4.31-1.711-1.373L2.5 14.4m14.063-9.9H3.437a.947.947 0 0 0-.937.956v9.088c0 .528.42.956.938.956h13.125a.947.947 0 0 0 .937-.956V5.456a.947.947 0 0 0-.937-.956Z" }), /* @__PURE__ */ React.createElement("path", { fill: "#707070", d: "M5.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" }));
});
export {
  InterfaceImage
};
