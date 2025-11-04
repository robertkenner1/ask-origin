import React__default, { useEffect, useContext } from "react";
import { useLayoutEffect as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, isIOS as $c87311424ea30a05$export$fedb369cb70207f1, chain as $ff5963eb1fccf552$export$e08e3b67e392101e, getScrollParent as $62d8ded9296f3872$export$cfa2225e87938781 } from "../../../../../@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { isElementInChildOfActiveScope as $9bf71ea28793e738$export$1258395f99bf9cbf } from "../../../../../@react-aria_focus@3.14.0_react@18.2.0/external/@react-aria/focus/dist/import.js";
import { useInteractOutside as $e0b6e0b68ec7f50f$export$872b660ac5a1ff98, useFocusWithin as $9ab94262bd0047c7$export$420e68273165f4ec } from "../../../../../@react-aria_interactions@3.17.0_react@18.2.0/external/@react-aria/interactions/dist/import.js";
import "react-dom";
const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
  let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
  useEffect(() => {
    if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
    return () => {
      let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
      if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
    };
  }, [
    isOpen,
    ref
  ]);
  let onHide = () => {
    if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
  };
  let onInteractOutsideStart = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  };
  let onInteractOutside = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
        e.stopPropagation();
        e.preventDefault();
      }
      onHide();
    }
  };
  let onKeyDown = (e) => {
    if (e.key === "Escape" && !isKeyboardDismissDisabled) {
      e.stopPropagation();
      e.preventDefault();
      onHide();
    }
  };
  $e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
    ref,
    onInteractOutside: isDismissable ? onInteractOutside : null,
    onInteractOutsideStart
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !shouldCloseOnBlur,
    onBlurWithin: (e) => {
      if (e.relatedTarget && $9bf71ea28793e738$export$1258395f99bf9cbf(e.relatedTarget)) return;
      if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
    }
  });
  let onPointerDownUnderlay = (e) => {
    if (e.target === e.currentTarget) e.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown,
      ...focusWithinProps
    },
    underlayProps: {
      onPointerDown: onPointerDownUnderlay
    }
  };
}
const $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
const $49c51c25361d4cd2$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
  let { isDisabled } = options;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (isDisabled) return;
    $49c51c25361d4cd2$var$preventScrollCount++;
    if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
      if ($c87311424ea30a05$export$fedb369cb70207f1()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
      else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
    }
    return () => {
      $49c51c25361d4cd2$var$preventScrollCount--;
      if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
    };
  }, [
    isDisabled
  ]);
}
function $49c51c25361d4cd2$var$preventScrollStandard() {
  return $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"));
}
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
  let scrollable;
  let lastY = 0;
  let onTouchStart = (e) => {
    scrollable = $62d8ded9296f3872$export$cfa2225e87938781(e.target);
    if (scrollable === document.documentElement && scrollable === document.body) return;
    lastY = e.changedTouches[0].pageY;
  };
  let onTouchMove = (e) => {
    if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
      e.preventDefault();
      return;
    }
    let y = e.changedTouches[0].pageY;
    let scrollTop = scrollable.scrollTop;
    let bottom = scrollable.scrollHeight - scrollable.clientHeight;
    if (bottom === 0) return;
    if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
    lastY = y;
  };
  let onTouchEnd = (e) => {
    let target = e.target;
    if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
      e.preventDefault();
      target.style.transform = "translateY(-2000px)";
      target.focus();
      requestAnimationFrame(() => {
        target.style.transform = "";
      });
    }
  };
  let onFocus = (e) => {
    let target = e.target;
    if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
      target.style.transform = "translateY(-2000px)";
      requestAnimationFrame(() => {
        target.style.transform = "";
        if ($49c51c25361d4cd2$var$visualViewport) {
          if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight)
            requestAnimationFrame(() => {
              $49c51c25361d4cd2$var$scrollIntoView(target);
            });
          else
            $49c51c25361d4cd2$var$visualViewport.addEventListener("resize", () => $49c51c25361d4cd2$var$scrollIntoView(target), {
              once: true
            });
        }
      });
    }
  };
  let onWindowScroll = () => {
    window.scrollTo(0, 0);
  };
  let scrollX = window.pageXOffset;
  let scrollY = window.pageYOffset;
  let restoreStyles = $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"), $49c51c25361d4cd2$var$setStyle(document.body, "marginTop", `-${scrollY}px`));
  window.scrollTo(0, 0);
  let removeEvents = $ff5963eb1fccf552$export$e08e3b67e392101e($49c51c25361d4cd2$var$addEvent(document, "touchstart", onTouchStart, {
    passive: false,
    capture: true
  }), $49c51c25361d4cd2$var$addEvent(document, "touchmove", onTouchMove, {
    passive: false,
    capture: true
  }), $49c51c25361d4cd2$var$addEvent(document, "touchend", onTouchEnd, {
    passive: false,
    capture: true
  }), $49c51c25361d4cd2$var$addEvent(document, "focus", onFocus, true), $49c51c25361d4cd2$var$addEvent(window, "scroll", onWindowScroll));
  return () => {
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
  let cur = element.style[style];
  element.style[style] = value;
  return () => {
    element.style[style] = cur;
  };
}
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
  target.addEventListener(event, handler, options);
  return () => {
    target.removeEventListener(event, handler, options);
  };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
  let root = document.scrollingElement || document.documentElement;
  while (target && target !== root) {
    let scrollable = $62d8ded9296f3872$export$cfa2225e87938781(target);
    if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
      let scrollableTop = scrollable.getBoundingClientRect().top;
      let targetTop = target.getBoundingClientRect().top;
      if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
    }
    target = scrollable.parentElement;
  }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
  return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
const $337b884510726a0d$export$a2200b96afd16271 = /* @__PURE__ */ React__default.createContext(null);
function $337b884510726a0d$export$14c98a7594375490() {
  let ctx = useContext($337b884510726a0d$export$a2200b96afd16271);
  let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    setContain === null || setContain === void 0 ? void 0 : setContain(true);
  }, [
    setContain
  ]);
}
export {
  $a11501f3d1d39e6c$export$ea8f71083e90600f as useOverlay,
  $337b884510726a0d$export$14c98a7594375490 as useOverlayFocusContain,
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18 as usePreventScroll
};
