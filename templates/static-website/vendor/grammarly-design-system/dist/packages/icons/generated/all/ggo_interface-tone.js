import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceTone = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceTone", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M6.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.813 11.507c-.9 1.619-3.227 1.619-4.126 0l-.874.486c1.28 2.304 4.594 2.304 5.874 0zM12 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M8.75 17q-.509 0-.997-.073A6.751 6.751 0 0 1 8.75 3.5a6.75 6.75 0 0 1 0 13.5m5.75-6.75a5.75 5.75 0 1 1-11.5 0 5.75 5.75 0 0 1 11.5 0", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M9.902 17.87a6.75 6.75 0 0 0 5.348 2.63A6.75 6.75 0 0 0 22 13.75a6.75 6.75 0 0 0-6.424-6.742q.175.497.28 1.024a5.75 5.75 0 1 1-4.89 9.553q-.517.18-1.064.284" }), /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "M13.316 16.25H17.5v-1h-3.196a7.6 7.6 0 0 1-.988 1M18 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }));
});
export {
  GGOInterfaceTone
};
