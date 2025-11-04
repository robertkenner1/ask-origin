import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceRewards = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceRewards", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#646B81", d: "m6.281 5.556.176-.468zM8.74 3.258l-.473.161zm-3.252-.567.387.316zm8.23 2.865-.175-.468zM11.26 3.258l.473.161zm3.252-.567-.387.316zM2 10.637h-.5a.5.5 0 0 0 .5.5zm0-3.682v-.5a.5.5 0 0 0-.5.5zm16 0h.5a.5.5 0 0 0-.5-.5zm0 3.682v.5a.5.5 0 0 0 .5-.5zM2.941 18h-.5a.5.5 0 0 0 .5.5zm14.118 0v.5a.5.5 0 0 0 .5-.5zm0-7.363v-.5zm-6.883-4.15-3.719-1.4-.352.937 3.719 1.399zm-1.91-3.068 1.26 3.697.947-.323-1.26-3.696zm-2.391-.412c.688-.84 2.05-.591 2.392.412l.946-.322c-.6-1.762-2.938-2.158-4.112-.723zm.582 2.08c-.875-.328-1.155-1.38-.582-2.08L5.1 2.374c-1.017 1.243-.496 3.086 1.004 3.65zm3.719 2.336 3.719-1.4-.352-.935-3.719 1.399zm.61-4.326-1.26 3.696.947.323 1.26-3.697zm4.113-.723c-1.174-1.435-3.512-1.039-4.112.723l.946.322c.342-1.003 1.704-1.252 2.392-.412zm-1.004 3.65c1.5-.564 2.02-2.407 1.004-3.65l-.774.633c.573.7.293 1.752-.582 2.08zM2.94 10.137H2v1h.941zm-.441.5V6.955h-1v3.682zM2 7.455h16v-1H2zm15.5-.5v3.682h1V6.954zM2.441 10.637V18h1v-7.363zm14.618.5H18v-1h-.941zm.5 6.863v-7.363h-1V18zM2.94 11.137H17.06v-1H2.94zM9.5 6.955V18h1V6.955zM2.941 18.5H10v-1H2.941zm7.059 0h7.059v-1H10z" }));
});
export {
  InterfaceRewards
};
