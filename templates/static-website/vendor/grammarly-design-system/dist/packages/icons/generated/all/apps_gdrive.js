import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsGdrive = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsGdrive", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("g", { clipPath: `url(#${resourcePrefix}-gdrivea)` }, /* @__PURE__ */ React.createElement("path", { fill: "#0066DA", d: "m3.776 14.679.647 1.117c.134.235.327.42.554.554l2.31-3.998h-4.62c0 .26.067.52.202.756z" }), /* @__PURE__ */ React.createElement("path", { fill: "#00AC47", d: "M10 7.648 7.69 3.65c-.227.134-.42.319-.554.554l-4.267 7.392c-.132.23-.202.49-.202.756h4.62z" }), /* @__PURE__ */ React.createElement("path", { fill: "#EA4335", d: "M15.023 16.35c.227-.134.42-.319.554-.554l.27-.462 1.284-2.226c.135-.235.202-.496.202-.756h-4.62l.983 1.932z" }), /* @__PURE__ */ React.createElement("path", { fill: "#00832D", d: "m10 7.648 2.31-3.998a1.5 1.5 0 0 0-.756-.202H8.446c-.269 0-.53.076-.756.202z" }), /* @__PURE__ */ React.createElement("path", { fill: "#2684FC", d: "M12.713 12.352H7.287l-2.31 3.998c.227.135.487.202.756.202h8.534c.269 0 .53-.076.756-.202z" }), /* @__PURE__ */ React.createElement("path", { fill: "#FFBA00", d: "m14.998 7.9-2.134-3.696a1.5 1.5 0 0 0-.554-.554L10 7.648l2.713 4.704h4.612c0-.26-.068-.52-.202-.756z" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: `${resourcePrefix}-gdrivea` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M2 3h16v14H2z" }))));
});
export {
  AppsGdrive
};
