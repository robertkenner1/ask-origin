import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoGrammarlyMarkMonoInverse = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoGrammarlyMarkMonoInverse", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, desc === void 0 ? /* @__PURE__ */ React.createElement("desc", { id: descId }, "Vector graphic: grammarly mark mono inverse") : desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-logo-grammarly-default)", fillRule: "evenodd", d: "M16.001 0C24.839 0 32 7.163 32 16.001c0 7.732-5.482 14.182-12.772 15.675a16 16 0 0 1-3.223.324H0V16.001C0 7.163 7.163 0 16.001 0m7.683 7.867a11.08 11.08 0 0 0-8.434-3.021c-5.562.383-10.071 4.993-10.342 10.56-.308 6.392 4.8 11.687 11.124 11.688 6.324 0 11.14-5 11.14-11.14 0-.5-.038-.99-.1-1.47h-7.21l-1.698 2.942h5.945c-.931 5.115-6.62 8.598-12.304 5.652a6.7 6.7 0 0 1-2.862-2.833c-3.27-6.226 1.198-12.491 7.093-12.491 2.43 0 4.62 1.064 6.123 2.752z", clipRule: "evenodd" }));
});
export {
  LogoGrammarlyMarkMonoInverse
};
