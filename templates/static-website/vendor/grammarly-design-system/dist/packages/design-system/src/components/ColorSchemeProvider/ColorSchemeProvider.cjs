"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
;/* empty css                          */
const ColorSchemeContext = /* @__PURE__ */ React.createContext({
  scheme: "auto",
  setScheme: () => {
  }
});
function ColorSchemeProvider(props) {
  const { scheme: schemeProp = "auto", children, target, ...rest } = props;
  const [scheme, setScheme] = React.useState(resolveScheme(schemeProp));
  const setSchemePublic = React.useCallback((scheme2) => {
    setScheme(resolveScheme(scheme2));
  }, []);
  React.useEffect(() => {
    setSchemePublic(schemeProp);
  }, [schemeProp, setSchemePublic]);
  React.useEffect(() => {
    const listener = (event) => {
      if (schemeProp === "auto") {
        setSchemePublic(event.matches ? "dark" : "light");
      }
    };
    const mediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener("change", listener);
      return () => {
        mediaWatcher.removeEventListener("change", listener);
      };
    } else {
      mediaWatcher.addListener(listener);
      return () => {
        mediaWatcher.removeListener(listener);
      };
    }
  }, [schemeProp, setSchemePublic]);
  React.useEffect(() => {
    if (target == null) return;
    target.dataset.gdsTheme = scheme;
    return () => {
      target.dataset.gdsTheme = void 0;
    };
  }, [scheme, target]);
  if (process.env.NODE_ENV !== "production") {
    console.warn(`ColorSchemeProvider is deprecated. Please use ThemeProvider instead.`);
  }
  return /* @__PURE__ */ React.createElement("div", { "data-gds-theme": target ? void 0 : scheme, ...rest }, /* @__PURE__ */ React.createElement(ColorSchemeContext.Provider, { value: { scheme, setScheme: setSchemePublic } }, children));
}
function resolveScheme(scheme) {
  if (scheme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } else return scheme;
}
function useColorScheme() {
  return React.useContext(ColorSchemeContext);
}
exports.ColorSchemeProvider = ColorSchemeProvider;
exports.useColorScheme = useColorScheme;
