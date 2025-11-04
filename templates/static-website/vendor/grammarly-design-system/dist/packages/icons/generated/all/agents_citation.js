import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const AgentsCitation = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "AgentsCitation", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: citation") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M9.26 15.55c-1.154-.744-2.468-1.588-4.82-1.588q-.478 0-1.03.05V4.219a9 9 0 0 1 1.03-.058c1.85 0 2.804.612 3.9 1.323.16.1.31.199.469.298q.151.097.326.157A4.22 4.22 0 0 0 5.93 8.222c-1.013 2.051-.15 4.524 1.926 5.525a4.208 4.208 0 0 0 4.713-.72l1.941.935c-2.075.1-3.29.885-4.377 1.58l-.444.281-.444-.281zm4.605-5.112a4.13 4.13 0 0 0-2.327-4.11 4.2 4.2 0 0 0-1.273-.38c.11-.042.218-.092.319-.158.159-.1.318-.198.477-.306 1.096-.711 2.05-1.323 3.9-1.323.319 0 .67.016 1.03.058v7.237l-2.126-1.026z" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M14.961 4.988h.184v5.145l-.427-.207a4.96 4.96 0 0 0-2.51-4.186c.77-.454 1.506-.752 2.753-.752m-10.514 0c1.24 0 1.984.298 2.754.752a5 5 0 0 0-2.009 2.118 4.91 4.91 0 0 0 .678 5.376 9.4 9.4 0 0 0-1.423-.107h-.184v-8.14zm10.514-1.655c-2.386 0-3.516.935-4.821 1.754a.83.83 0 0 1-.871 0c-1.314-.819-2.436-1.753-4.822-1.753-.343 0-.711.016-1.113.057a.83.83 0 0 0-.745.828v9.793a.82.82 0 0 0 .82.827h.084q.503-.05.954-.05c2.386 0 3.516.935 4.822 1.754a.83.83 0 0 0 .87 0c1.315-.82 2.436-1.754 4.822-1.754.293 0 .603.017.938.042h.075a.8.8 0 0 0 .527-.199c.226-.19.16-.546-.1-.678l-4.035-1.944a3.36 3.36 0 0 1-2.679 1.324c-.493 0-.987-.108-1.464-.331a3.303 3.303 0 0 1-1.54-4.425c.577-1.175 1.774-1.853 3.013-1.853.494 0 .996.107 1.465.339a3.295 3.295 0 0 1 1.758 3.838l3.29 1.588a.4.4 0 0 0 .184.041.417.417 0 0 0 .418-.413v-7.9a.836.836 0 0 0-.745-.827 11 11 0 0 0-1.105-.058" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M9.696 11.274a1.2 1.2 0 0 1-.544-.124 1.22 1.22 0 0 1-.636-.711 1.2 1.2 0 0 1 .059-.943 1.27 1.27 0 0 1 1.674-.57c.301.14.527.396.636.71a1.2 1.2 0 0 1-.059.943c-.209.422-.652.695-1.13.695" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-icon-agent-default)", d: "M9.704 9.628c.06 0 .126.017.176.042.1.05.176.132.21.24a.41.41 0 0 1-.394.545.4.4 0 0 1-.176-.041.4.4 0 0 1-.209-.24.42.42 0 0 1 .017-.314.41.41 0 0 1 .376-.232m0-1.654c-.778 0-1.523.43-1.883 1.158a2.057 2.057 0 0 0 .963 2.763c.293.14.602.206.912.206.779 0 1.524-.43 1.884-1.158a2.07 2.07 0 0 0 .1-1.58 2.04 2.04 0 0 0-1.063-1.182 2.1 2.1 0 0 0-.913-.207" }));
});
export {
  AgentsCitation
};
