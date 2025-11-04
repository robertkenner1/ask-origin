import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceFingerprint = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFingerprint", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M13.995 12.392c-1.254 0-2.524-.852-2.524-2.48 0-1.024-.791-1.56-1.571-1.56a1.43 1.43 0 0 0-1.016.394c-.305.305-.468.763-.468 1.33 0 2.786 1.435 4.422 4.519 5.165a.534.534 0 1 1-.249 1.038c-3.542-.848-5.332-2.935-5.332-6.203 0-1.089.428-1.739.786-2.092a2.5 2.5 0 0 1 1.76-.7c1.712 0 2.637 1.354 2.637 2.627 0 .978.733 1.414 1.458 1.414.404.004.797-.139 1.104-.401a1.58 1.58 0 0 0 .494-1.22c0-3.279-2.985-5.303-5.75-5.303-1.828 0-3.386.798-4.393 2.244C4.277 8.33 4.079 10.678 4.9 12.92a.534.534 0 0 1-1 .365c-.95-2.571-.697-5.284.676-7.257a6.32 6.32 0 0 1 5.266-2.695c1.947 0 3.72.72 4.994 2.025a6.32 6.32 0 0 1 1.829 4.35 2.6 2.6 0 0 1-.855 2.012 2.7 2.7 0 0 1-1.816.671M9.737 5.258c2.36-.143 4.81 1.692 4.81 4.52a.534.534 0 0 1-1.067 0 3.44 3.44 0 0 0-2.331-3.282 3.4 3.4 0 0 0-1.412-.17c-1.665.152-3.32 1.273-3.394 3.66-.084 2.653.898 4.466 2.827 5.697a.535.535 0 0 1-.288.984.5.5 0 0 1-.285-.084c-2.235-1.426-3.402-3.585-3.32-6.597.081-3.096 2.292-4.595 4.46-4.728m-.284 4.728a.534.534 0 1 1 1.067 0c0 1.015.346 1.853 1 2.42.807.701 2.048.954 3.59.735a.533.533 0 1 1 .152 1.057 8.5 8.5 0 0 1-1.18.087c-1.33 0-2.438-.363-3.26-1.068-.884-.768-1.369-1.915-1.369-3.23z", clipRule: "evenodd" }));
});
export {
  InterfaceFingerprint
};
