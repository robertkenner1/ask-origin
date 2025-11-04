import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GButtonMedium = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GButtonMedium", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#15C39A", fillRule: "evenodd", d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M13.438 14.375c.065.36.403.607.77.607h1.152l.668-.094c-1.069 1.568-2.925 2.29-4.954 1.972-1.652-.26-3.071-1.377-3.67-2.938-1.36-3.544 1.229-6.927 4.6-6.927 1.758 0 3.3 1.055 4.184 2.298.235.338.7.435 1.038.2a.737.737 0 0 0 .222-.979 6.45 6.45 0 0 0-5.89-2.963c-3.216.215-5.818 2.847-6.003 6.065-.215 3.745 2.755 6.803 6.45 6.803 1.94 0 3.678-.845 4.862-2.213l-.14.785v.708c0 .366.246.705.606.77a.746.746 0 0 0 .884-.733V13.49H14.17a.746.746 0 0 0-.732.884", clipRule: "evenodd" }));
});
export {
  GButtonMedium
};
