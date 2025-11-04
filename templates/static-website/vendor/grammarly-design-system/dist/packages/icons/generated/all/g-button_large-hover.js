import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GButtonLargeHover = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "GButtonLargeHover", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#15C39A", fillRule: "evenodd", d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { stroke: "#fff", strokeLinecap: "round", d: "m17.182 14.818 4.727-4.727m0 0h-5.318m5.318 0v5.318M14.818 17.182l-4.727 4.727m0 0h5.318m-5.318 0v-5.318" }));
});
export {
  GButtonLargeHover
};
