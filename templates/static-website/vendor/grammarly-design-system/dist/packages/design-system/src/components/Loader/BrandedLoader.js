import React__default from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { useTheme } from "../ThemeProvider/ThemeProvider.js";
/* empty css                  */
import shLoaderMp4 from "./sh_loader.mp4.js";
import shLoaderPoster from "./sh_loader.png.js";
const BrandedLoader = ({
  size = "medium",
  variant = "default",
  className,
  ...rest
}) => {
  const { theme, mode } = useTheme();
  const isGenesisTheme = theme === "genesis";
  const isDarkMode = mode === "dark";
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: clsx(
        "gds-branded-loader-container",
        `gds-branded-loader-container-size-${size.toLowerCase()}`,
        `gds-branded-loader-variant-${variant}`,
        className
      ),
      ...rest
    },
    isGenesisTheme ? isDarkMode ? /* @__PURE__ */ React__default.createElement(
      "img",
      {
        className: "gds-branded-loader-video",
        src: shLoaderPoster,
        alt: "",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ React__default.createElement(
      "video",
      {
        className: "gds-branded-loader-video",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-hidden": "true",
        poster: shLoaderPoster,
        src: shLoaderMp4
      }
    ) : /* @__PURE__ */ React__default.createElement(
      "svg",
      {
        viewBox: "0 0 128 128",
        fill: `var(--color-icon-base-${variant})`,
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React__default.createElement(
        "path",
        {
          className: "gds-branded-loader-bobble gds-branded-loader-top-left",
          d: "M59.7334 38.4C59.7334 26.6179 50.1821 17.0667 38.4001 17.0667C26.618 17.0667 17.0667 26.6179 17.0667 38.4C17.0667 50.1821 26.618 59.7333 38.4001 59.7333H59.7334V38.4Z"
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "path",
        {
          className: "gds-branded-loader-bobble gds-branded-loader-bottom-left",
          d: "M59.7334 98.1333C59.7334 114.628 46.3616 128 29.8667 128C13.3718 128 6.48499e-05 114.628 6.48499e-05 98.1333C6.48499e-05 81.6384 13.3718 68.2667 29.8667 68.2667H59.7334V98.1333Z"
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "path",
        {
          className: "gds-branded-loader-bobble gds-branded-loader-top-right",
          d: "M68.2666 29.8667C68.2666 13.3718 81.6384 0 98.1333 0C114.628 0 128 13.3718 128 29.8667C128 46.3616 114.628 59.7333 98.1333 59.7333H68.2666V29.8667Z"
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "path",
        {
          className: "gds-branded-loader-bobble gds-branded-loader-bottom-right",
          d: "M68.2666 89.6C68.2666 101.382 77.8179 110.933 89.5999 110.933C101.382 110.933 110.933 101.382 110.933 89.6C110.933 77.8179 101.382 68.2667 89.5999 68.2667H68.2666V89.6Z"
        }
      )
    )
  );
};
export {
  BrandedLoader
};
