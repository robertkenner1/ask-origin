import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOActionCleanUp = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOActionCleanUp", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#C193E2", d: "m2.127 17.063-.695 2.884 12.453 3.037 1.493-2.443L2.128 5.153.38 7.443l9.772 11.554z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-eanupa)`, d: "m19.184 13.91-1.422 2.68L.982 7.955l1.147-2.807z" }), /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-eanupb)`, d: "m10 5 6.928-4 7 12.124-6.928 4z" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-eanupa`, x1: 9.549, x2: 18.523, y1: 10.869, y2: 15.365, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#C193E2" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FAF8FB", stopOpacity: 0 })), /* @__PURE__ */ React.createElement("linearGradient", { id: `${resourcePrefix}-eanupb`, x1: 16.5, x2: 17, y1: 1, y2: 17.5, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#99A0B3" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#646B81" }))));
});
export {
  GGOActionCleanUp
};
