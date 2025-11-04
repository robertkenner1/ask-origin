import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsAuth0 = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsAuth0", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#EB5424", d: "m13.673 14.537-1.339-4.12L15.84 7.87c.863 2.643 0 5.093-2.167 6.667M15.84 7.87 14.5 3.75h-4.334l1.332 4.12zm-5.673-4.12H5.833L4.501 7.87h4.334zM4.494 7.87c-.856 2.643 0 5.093 2.167 6.667l1.332-4.12zm2.167 6.667 3.506 2.546 3.506-2.546-3.506-2.547z" }));
});
export {
  AppsAuth0
};
