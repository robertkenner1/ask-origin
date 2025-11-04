import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const SocialGoogle = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "SocialGoogle", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#FBBC05", fillRule: "evenodd", d: "M6.185 11.999c0-.65.111-1.272.307-1.857L3.049 7.57A9.8 9.8 0 0 0 2 11.999c0 1.592.377 3.094 1.048 4.427l3.44-2.579A5.8 5.8 0 0 1 6.185 12", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA4335", fillRule: "evenodd", d: "M12.232 6.09c1.442 0 2.744.501 3.767 1.319l2.976-2.91C17.162 2.955 14.838 2 12.232 2a10.37 10.37 0 0 0-5.407 1.498A10.06 10.06 0 0 0 3.05 7.57l3.443 2.573a5.9 5.9 0 0 1 2.199-2.937 6.1 6.1 0 0 1 3.541-1.115", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#34A853", fillRule: "evenodd", d: "M12.232 17.907a6.1 6.1 0 0 1-3.541-1.115 5.9 5.9 0 0 1-2.2-2.937L3.05 16.43a10.07 10.07 0 0 0 3.776 4.072A10.37 10.37 0 0 0 12.232 22c2.496 0 4.878-.867 6.666-2.492l-3.269-2.474c-.92.569-2.083.875-3.397.875", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("path", { fill: "#4285F4", fillRule: "evenodd", d: "M22 11.999a8 8 0 0 0-.234-1.818h-9.534v3.863h5.487a4.5 4.5 0 0 1-2.09 2.989l3.27 2.473c1.878-1.706 3.1-4.248 3.1-7.507", clipRule: "evenodd" }));
});
export {
  SocialGoogle
};
