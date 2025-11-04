import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOLogoGButtonLogoMedium = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "GGOLogoGButtonLogoMedium", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#018374", fillRule: "evenodd", d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M13.176 13.943c.054.295.33.497.63.497h.943l.547-.077c-.875 1.283-2.393 1.874-4.054 1.613-1.351-.212-2.512-1.127-3.002-2.404-1.112-2.899 1.005-5.667 3.764-5.667 1.438 0 2.7.864 3.423 1.88a.613.613 0 0 0 .849.164.603.603 0 0 0 .181-.8 5.28 5.28 0 0 0-4.818-2.426c-2.632.177-4.761 2.33-4.912 4.963-.176 3.064 2.254 5.566 5.277 5.566 1.588 0 3.01-.692 3.978-1.81l-.115.641v.58c0 .3.202.576.497.63a.61.61 0 0 0 .723-.6V13.22h-3.311a.61.61 0 0 0-.6.723", clipRule: "evenodd" }));
});
export {
  GGOLogoGButtonLogoMedium
};
