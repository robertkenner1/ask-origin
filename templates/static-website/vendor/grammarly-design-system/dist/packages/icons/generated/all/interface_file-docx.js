import * as React from "react";
import { createIcon } from "../createIcon.js";
import { generateId } from "../helpers.js";
const InterfaceFileDocx = /* @__PURE__ */ createIcon("color", ({
  title,
  titleId,
  desc,
  descId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resourcePrefix = generateId(),
  ...props
}) => {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", viewBox: "0 0 20 20", "aria-hidden": "true", "data-icon": "InterfaceFileDocx", stroke: "transparent", "aria-labelledby": titleId, "aria-describedby": descId, ...props }, desc ? /* @__PURE__ */ React.createElement("desc", { id: descId }, desc) : null, title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React.createElement("path", { fill: "#707070", fillRule: "evenodd", d: "M5.68 2.499h-.5v6.586h1V3.499h4.164v3.689H13.9v1.897h1V6.186l-.133-.144-3.133-3.383-.148-.16H5.68m5.664 3.689V3.816l2.196 2.372zM2.58 9.875h-.5v7.75h16.107v-7.75H2.58m.5 6.75v-5.75h14.107v5.75zm5.644-1.258c.848 0 1.499-.597 1.499-1.644s-.65-1.644-1.499-1.644c-.853 0-1.498.597-1.498 1.644 0 1.042.645 1.644 1.498 1.644m0-2.69c.49 0 .813.368.813 1.046s-.322 1.045-.813 1.045c-.492 0-.812-.367-.812-1.045s.32-1.045.812-1.045m4.691.566h-.684c-.052-.351-.319-.565-.69-.565-.494 0-.82.38-.82 1.045 0 .684.33 1.045.816 1.045.361 0 .63-.197.694-.539l.684.003c-.073.59-.568 1.135-1.389 1.135-.856 0-1.49-.6-1.49-1.644 0-1.047.645-1.644 1.49-1.644.74 0 1.3.425 1.39 1.164m.92-1.12.645 1.09h.025l.648-1.09h.764l-.977 1.6.999 1.6h-.778l-.656-1.092h-.025l-.657 1.092h-.775l1.002-1.6-.983-1.6zm-8.988 3.2H4.213v-3.2h1.144c.965 0 1.556.6 1.556 1.597 0 1-.59 1.603-1.566 1.603m-.458-.58h.43c.602 0 .919-.31.919-1.023 0-.711-.317-1.017-.917-1.017h-.432z", clipRule: "evenodd" }));
});
export {
  InterfaceFileDocx
};
