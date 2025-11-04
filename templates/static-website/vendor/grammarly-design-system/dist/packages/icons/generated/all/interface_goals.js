import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceGoals = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", "data-icon": "InterfaceGoals", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { stroke: "#646B81", strokeLinecap: "round", d: "M9.047 8.5c0 1.243-.938 2.25-2.094 2.25S4.86 9.743 4.86 8.5s.938-2.25 2.093-2.25m0 2.25L10 5.25m0 0V3.5m0 1.75h1.628M11.372 2v1.75H13M4.163 14l.928-1.75m0 0a3.72 3.72 0 0 0 3.725 0m-3.725 0C3.847 11.534 3 10.123 3 8.5c0-2.347 1.77-4.25 3.953-4.25.55 0 1.072.12 1.547.337M9.744 14l-.928-1.75m0 0c1.244-.716 2.091-2.127 2.091-3.75 0-.616-.122-1.201-.341-1.73" }));
});
export {
  InterfaceGoals
};
