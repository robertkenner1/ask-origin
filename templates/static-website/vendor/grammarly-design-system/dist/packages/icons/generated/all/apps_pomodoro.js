import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AppsPomodoro = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AppsPomodoro", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 10, r: 8.333, fill: "#fff" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 9.418, cy: 12.068, fill: "#F16357", rx: 7.582, ry: 6.203 }), /* @__PURE__ */ React.createElement("path", { fill: "#0CAA12", d: "M6.152 3.342 8.11 7.387A29 29 0 0 0 6.422 8c-.68.281-.43 1.172-.27 1.242.161.07 2.538.703 3.173.75s1.18-.117 1.678-.562c.5-.445 4.99-3.914 5.67-4.383s.226-1.312-.68-1.195c-.726.094-3.819.598-5.274.838L7.457 1.993c-.652-.674-1.957 0-1.305 1.349" }));
});
export {
  AppsPomodoro
};
