import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const LogoLogomarkMonochromeDefault = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, fill: "none", viewBox: "0 0 32 32", "aria-hidden": "true", "data-icon": "LogoLogomarkMonochromeDefault", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "var(--color-background-base-inverse)", d: "M0 16C0 7.163 7.162 0 16.001 0s16 7.163 16 16c0 7.732-5.482 14.183-12.773 15.676-1.042.213-2.121.324-3.222.324H0z" }), /* @__PURE__ */ React.createElement("path", { fill: "var(--color-background-base-default)", d: "m19.876 14.484-1.788 2.94h6.02c-.93 5.116-6.62 8.599-12.304 5.653a6.7 6.7 0 0 1-2.861-2.834c-3.27-6.226 1.197-12.49 7.093-12.49a8.19 8.19 0 0 1 6.2 2.839l1.58-2.6a11.08 11.08 0 0 0-8.566-3.148c-5.562.384-10.071 4.994-10.342 10.56-.309 6.393 4.8 11.688 11.124 11.688s11.14-4.999 11.14-11.14c0-.5-.038-.989-.1-1.468z" }));
});
export {
  LogoLogomarkMonochromeDefault
};
