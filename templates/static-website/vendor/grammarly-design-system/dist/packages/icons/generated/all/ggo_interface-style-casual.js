import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOInterfaceStyleCasual = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOInterfaceStyleCasual", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", fillRule: "evenodd", d: "M14.062 6H9.938l-1.702.426a1.5 1.5 0 0 0-.857.583l-2.626 3.676L8 12.31V17.5h8v-5.191l3.247-1.623-2.626-3.677a1.5 1.5 0 0 0-.857-.583zM8 9.5v1.691l-1.753-.876L8.193 7.59a.5.5 0 0 1 .285-.194l1.158-.29.015.06a2.421 2.421 0 0 0 4.698 0l.015-.06 1.157.29a.5.5 0 0 1 .286.194l1.946 2.725L16 11.19V9.5h-1v7H9v-7zM13.358 7h-2.715a1.421 1.421 0 0 0 2.715 0", clipRule: "evenodd" }));
});
export {
  GGOInterfaceStyleCasual
};
