"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../@react-aria_ssr@3.7.1_react@18.2.0/external/@react-aria/ssr/dist/import.cjs");
const clsx_m = require("../../../../../clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? React.useLayoutEffect : () => {
};
function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = React.useState(defaultValue);
  let valueRef = React.useRef(value);
  let effect = React.useRef(null);
  let nextIter = React.useCallback(() => {
    let newValue = effect.current.next();
    while (!newValue.done && valueRef.current === newValue.value)
      newValue = effect.current.next();
    if (newValue.done) {
      effect.current = null;
      return;
    }
    setValue(newValue.value);
    valueRef.current = newValue.value;
  }, [
    setValue,
    valueRef,
    effect
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (effect.current) nextIter();
  });
  let queue = React.useCallback((fn) => {
    effect.current = fn(valueRef.current);
    nextIter();
  }, [
    nextIter,
    effect,
    valueRef
  ]);
  return [
    value,
    queue
  ];
}
let $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = React.useState(defaultId);
  let nextId = React.useRef(null);
  let res = _import.useSSRSafeId(value);
  let updateValue = React.useCallback((val) => {
    nextId.current = val;
  }, []);
  $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let r = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r);
    };
  }, [
    res
  ]);
  React.useEffect(() => {
    let newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
  let updateId = React.useCallback(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : void 0;
    });
  }, [
    id,
    setResolvedId
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx_m.clsx(a, b);
      else if (key === "id" && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
      else result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  if (refs.length === 1) return refs[0];
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function") ref(value);
      else if (ref != null) ref.current = value;
    }
  };
}
const $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, propNames } = opts;
  let filteredProps = {};
  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
  return filteredProps;
}
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
let $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
let $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  let onTransitionStart = (e) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      id,
      ...labelledBy.trim().split(/\s+/)
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = React.useRef();
  return React.useMemo(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function") forwardedRef(value);
      else if (forwardedRef) forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [
    context,
    ref
  ]);
}
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
  if ($62d8ded9296f3872$export$2bb74740c4e19def(node)) node = node.parentElement;
  while (node && !$62d8ded9296f3872$export$2bb74740c4e19def(node)) node = node.parentElement;
  return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$export$2bb74740c4e19def(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = React.useRef(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return React.useCallback((...args) => {
    const f = ref.current;
    return f(...args);
  }, []);
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
  let resetValue = React.useRef(initialValue);
  let handleReset = $8ae05eaa5c114e9c$export$7f54fc3180508a52(() => {
    if (onReset) onReset(resetValue.current);
  });
  React.useEffect(() => {
    var _ref_current;
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
    return () => {
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
    };
  }, [
    ref,
    handleReset
  ]);
}
exports.chain = $ff5963eb1fccf552$export$e08e3b67e392101e;
exports.filterDOMProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f;
exports.focusWithoutScrolling = $7215afc6de606d6b$export$de79e2c695e052f3;
exports.getScrollParent = $62d8ded9296f3872$export$cfa2225e87938781;
exports.isAndroid = $c87311424ea30a05$export$a11b0059900ceec8;
exports.isIOS = $c87311424ea30a05$export$fedb369cb70207f1;
exports.isIPad = $c87311424ea30a05$export$7bef049ce92e4224;
exports.isIPhone = $c87311424ea30a05$export$186c6964ca17d99;
exports.isMac = $c87311424ea30a05$export$9ac100e40613ea10;
exports.isScrollable = $62d8ded9296f3872$export$2bb74740c4e19def;
exports.isVirtualClick = $6a7db85432448f7f$export$60278871457622de;
exports.mergeIds = $bdb11010cef70236$export$cd8c9cb68f842629;
exports.mergeProps = $3ef42575df84b30b$export$9d1611c77c2fe928;
exports.mergeRefs = $5dc95899b306f630$export$c9058316764c140e;
exports.runAfterTransition = $bbed8b41f857bcc0$export$24490316f764c430;
exports.useEffectEvent = $8ae05eaa5c114e9c$export$7f54fc3180508a52;
exports.useFormReset = $99facab73266f662$export$5add1d006293d136;
exports.useId = $bdb11010cef70236$export$f680877a34711e37;
exports.useLabels = $313b98861ee5dd6c$export$d6875122194c7b44;
exports.useLayoutEffect = $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c;
exports.useObjectRef = $df56164dff5785e2$export$4338b53315abf666;
exports.useSlotId = $bdb11010cef70236$export$b4cc09c592e8fdb8;
exports.useSyncRef = $e7801be82b4b2a53$export$4debdb1a3f0fa79e;
exports.useValueEffect = $1dbecbe27a04f9af$export$14d238f342723f25;
