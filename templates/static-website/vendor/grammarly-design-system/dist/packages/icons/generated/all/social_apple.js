import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const SocialApple = /* @__PURE__ */ createIcon("nocolor", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", "data-icon": "SocialApple", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#0E101A", d: "M20.144 17.586a11 11 0 0 1-1.085 1.933q-.857 1.21-1.398 1.674-.836.763-1.797.784-.69 0-1.659-.392t-1.786-.392q-.856 0-1.838.392-.982.394-1.587.413-.92.04-1.837-.805-.586-.505-1.462-1.733-.94-1.31-1.546-3.043Q3.5 14.545 3.5 12.79q0-2.01.878-3.465a5.1 5.1 0 0 1 1.838-1.842A5 5 0 0 1 8.7 6.788q.73.002 1.922.443 1.19.443 1.525.444.251 0 1.69-.523 1.359-.484 2.298-.404 2.549.202 3.822 1.994-2.277 1.369-2.255 3.827.021 1.915 1.4 3.181a4.6 4.6 0 0 0 1.397.909q-.167.482-.356.927M16.249 2.4q0 1.5-1.103 2.799c-.887 1.027-1.96 1.621-3.124 1.527A3 3 0 0 1 12 6.347c0-.96.422-1.987 1.17-2.828q.562-.638 1.427-1.061.864-.418 1.632-.458.022.2.021.4" }));
});
export {
  SocialApple
};
