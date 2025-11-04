import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const GGOLogoGoMarkDefault = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 22, height: 23, fill: "none", viewBox: "0 0 22 23", "aria-hidden": "true", "data-icon": "GGOLogoGoMarkDefault", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: `url(#${resourcePrefix}-faulta)`, fillRule: "evenodd", d: "M14.86 17c.175-.783.664-1.472 1.253-2.037 1.32-1.268 2.137-3.023 2.137-4.963 0-3.866-3.246-7-7.25-7s-7.25 3.134-7.25 7c0 1.94.817 3.695 2.137 4.963.589.565 1.078 1.254 1.253 2.037zm-7.568 1.5h7.416l-.055.666A2 2 0 0 1 12.66 21H9.34a2 2 0 0 1-1.993-1.834z", clipRule: "evenodd" }), /* @__PURE__ */ React.createElement("g", { filter: `url(#${resourcePrefix}-faultb)` }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M14.507 10.61a3.84 3.84 0 0 0-2.855 2.828l-.018.074c-.158.652-1.09.65-1.246-.002l-.012-.052a3.84 3.84 0 0 0-2.847-2.836l-.037-.009c-.656-.156-.656-1.085 0-1.242l.037-.008a3.84 3.84 0 0 0 2.847-2.836l.008-.037c.157-.653 1.09-.653 1.247 0l.009.037a3.84 3.84 0 0 0 2.846 2.836l.022.005c.657.156.656 1.087-.001 1.242" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: `${resourcePrefix}-faulta`, cx: 0, cy: 0, r: 1, gradientTransform: "matrix(0 9 -10.0074 0 11 10)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.345, stopColor: "#03D2B0" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.893, stopColor: "#02927F" })), /* @__PURE__ */ React.createElement("filter", { id: `${resourcePrefix}-faultb`, width: 20, height: 20, x: 1, y: 0, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 3 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.00392157 0 0 0 0 0.513726 0 0 0 0 0.454902 0 0 0 1 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_3846" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_3846", result: "shape" }))));
});
export {
  GGOLogoGoMarkDefault
};
