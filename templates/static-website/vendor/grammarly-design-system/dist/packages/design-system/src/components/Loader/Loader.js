import React__default, { useEffect } from "react";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { BrandedLoader } from "./BrandedLoader.js";
import { CircularLoader } from "./CircularLoader.js";
import { liveAnnouncer } from "../LiveAnnouncer/liveAnnouncer.js";
const Loader = ({
  accessibilityLabel = "Loading",
  shouldFocus = false,
  onLoaded,
  children,
  ...rest
}) => {
  const loaderRef = React__default.useRef(null);
  useEffect(() => {
    var _a;
    if (shouldFocus) {
      (_a = loaderRef.current) == null ? void 0 : _a.focus();
    }
    return () => {
      onLoaded == null ? void 0 : onLoaded();
      liveAnnouncer.clear("polite");
    };
  }, []);
  useEffect(() => {
    accessibilityLabel && liveAnnouncer.announce(accessibilityLabel, "polite");
  }, [accessibilityLabel, liveAnnouncer]);
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref: loaderRef,
      role: "progressbar",
      "aria-label": accessibilityLabel,
      "aria-valuetext": "In progress",
      ...rest
    },
    children
  );
};
const LoaderComponentCompound = makeCompoundComponent(Loader, "Loader", {
  Circular: CircularLoader,
  Branded: BrandedLoader
});
export {
  LoaderComponentCompound as Loader
};
