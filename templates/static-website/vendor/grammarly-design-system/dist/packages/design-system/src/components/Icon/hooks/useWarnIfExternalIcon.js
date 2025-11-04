import React__default from "react";
import { isProduction } from "../../../helpers/env.js";
const EXTERNAL_ICON_WARNING = `⚠️ [Icon] The icon is not from the GDS library.  
Please use only GDS SVG icons within <Icon /> to avoid <defs> collisions when multiple instances of the same icon are rendered.  

If you need to request a new icon, reach out in #gds-support.  

Support for non-GDS icons will be removed in the next major GDS release.`;
const warnExternalIconUsage = (icon) => {
  console.log(EXTERNAL_ICON_WARNING);
  console.groupCollapsed("Icon source");
  console.log(icon);
  console.groupEnd();
};
const useWarnIfExternalIcon = (icon, isGDSIcon) => {
  const isWarningEmitted = React__default.useRef(false);
  React__default.useEffect(() => {
    if (isProduction) return;
    if (!icon || isGDSIcon) return;
    if (isWarningEmitted.current) return;
    isWarningEmitted.current = true;
    warnExternalIconUsage(icon);
  }, [icon, isGDSIcon]);
};
export {
  EXTERNAL_ICON_WARNING,
  useWarnIfExternalIcon
};
