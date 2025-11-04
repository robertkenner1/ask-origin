import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOLogoGButtonLarge = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOLogoGButtonLarge", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#018374", fillRule: "evenodd", d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M13.437 14.376c.065.36.404.606.77.606h1.152l.668-.093c-1.069 1.568-2.925 2.29-4.954 1.971-1.652-.26-3.07-1.377-3.67-2.938-1.359-3.543 1.229-6.927 4.601-6.927 1.758 0 3.3 1.056 4.184 2.298.234.339.699.436 1.037.2a.737.737 0 0 0 .222-.978 6.45 6.45 0 0 0-5.889-2.964c-3.216.216-5.819 2.848-6.004 6.066-.215 3.745 2.756 6.802 6.45 6.802 1.941 0 3.678-.845 4.862-2.212l-.14.784v.709c0 .365.246.704.607.77a.746.746 0 0 0 .884-.734v-4.245H14.17a.746.746 0 0 0-.733.885", clipRule: "evenodd" }));
});
export {
  GGOLogoGButtonLarge
};
