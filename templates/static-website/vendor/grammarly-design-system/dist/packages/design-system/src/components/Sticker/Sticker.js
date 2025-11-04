import * as React from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
/* empty css            */
import { ScreenReaderOnly } from "../ScreenReaderOnly/ScreenReaderOnly.js";
import { Flex } from "../Flex/Flex.js";
const CircleSVG = /* @__PURE__ */ React.createElement(
  "svg",
  {
    "aria-hidden": "true",
    className: "gds-sticker-background",
    width: "144",
    height: "144",
    viewBox: "0 0 144 144",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M142.84 59.042C136.605 59.0375 115.547 58.2452 95.9582 42.6465C76.0546 26.7971 70.6682 6.01375 69.3342 0.00404358C30.8049 1.40676 0 33.0934 0 71.9777C0 110.862 32.2354 144 72 144C111.765 144 144 111.755 144 71.9777C144 67.5616 143.602 63.2385 142.84 59.042Z",
      fill: "var(--color-background-pro-default)"
    }
  )
);
const FlapSVG = /* @__PURE__ */ React.createElement(
  "svg",
  {
    "aria-hidden": "true",
    className: "gds-sticker-background gds-sticker-flap",
    width: "144",
    height: "144",
    viewBox: "0 0 144 144",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M69.3282 1.52588e-05C70.6577 5.99266 76.0813 26.8105 95.9863 42.6608C115.43 58.5195 136.46 59.0474 142.86 59.0474L69.3282 1.52588e-05Z",
      fill: "var(--gold-60)"
    }
  )
);
const ScallopSVG = /* @__PURE__ */ React.createElement(
  "svg",
  {
    "aria-hidden": "true",
    className: "gds-sticker-background",
    width: "144",
    height: "144",
    viewBox: "0 0 144 144",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M55.364 7.22238C64.3643 -2.40754 79.6357 -2.40754 88.636 7.22238C93.125 12.0254 99.4708 14.6539 106.041 14.4318C119.215 13.9866 130.013 24.7852 129.568 37.9587C129.346 44.5292 131.975 50.8749 136.778 55.3639C146.407 64.3642 146.407 79.6357 136.778 88.636C131.975 93.1249 129.346 99.4707 129.568 106.041C130.013 119.215 119.215 130.013 106.041 129.568C99.4708 129.346 93.125 131.974 88.636 136.777C79.6357 146.407 64.3643 146.407 55.364 136.777C50.875 131.974 44.5292 129.346 37.9588 129.568C24.7852 130.013 13.9867 119.215 14.4319 106.041C14.6539 99.4707 12.0254 93.1249 7.22244 88.636C-2.40748 79.6357 -2.40748 64.3642 7.22244 55.3639C12.0254 50.8749 14.6539 44.5292 14.4319 37.9587C13.9867 24.7852 24.7852 13.9866 37.9588 14.4318C44.5292 14.6539 50.875 12.0254 55.364 7.22238Z",
      fill: "var(--color-background-pro-default)"
    }
  )
);
const Sticker = (props) => {
  const { children, size = "medium", variant = "circle", className, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx("gds-sticker", `gds-sticker-${size}`, `gds-sticker-${variant}`, className),
      ...rest
    },
    variant === "circle" ? CircleSVG : ScallopSVG,
    children,
    variant === "circle" && FlapSVG
  );
};
const StickerDiscount = (props) => {
  const { discount } = props;
  return /* @__PURE__ */ React.createElement("div", { className: "gds-sticker-discount" }, /* @__PURE__ */ React.createElement(ScreenReaderOnly, null, " ", `${discount} percent off a Grammarly Pro Plan`), /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Flex, { align: "center", justify: "center", gap: 1 }, /* @__PURE__ */ React.createElement("p", { className: "gds-sticker-discount-text" }, discount), /* @__PURE__ */ React.createElement(Flex, { direction: "column" }, /* @__PURE__ */ React.createElement("p", { className: "gds-sticker-percent-text" }, "%"), /* @__PURE__ */ React.createElement("p", { className: "gds-sticker-off-text" }, "Off"))), /* @__PURE__ */ React.createElement("p", { className: "gds-sticker-plan-text" }, "Grammarly Pro")));
};
const StickerCompound = makeCompoundComponent(Sticker, "Sticker", {
  Discount: StickerDiscount
});
export {
  StickerCompound as Sticker
};
