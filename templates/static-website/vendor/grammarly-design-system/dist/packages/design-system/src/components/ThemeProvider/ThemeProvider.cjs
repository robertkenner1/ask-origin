"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
;/* empty css                    */
const ThemeProviderContext = /* @__PURE__ */ React.createContext({
  theme: "grammarly",
  updateTheme: () => {
  },
  mode: "auto",
  updateMode: () => {
  }
});
const getInitialSystemMode = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
function ThemeProvider(props) {
  const {
    theme: propTheme = "grammarly",
    mode: propMode = "auto",
    children,
    target,
    ...rest
  } = props;
  const parentContext = React.useContext(ThemeProviderContext);
  const [theme, setTheme] = React.useState(propTheme);
  const [mode, setMode] = React.useState(propMode);
  const [systemMode, setSystemMode] = React.useState(getInitialSystemMode);
  React.useEffect(() => {
    setMode(propMode);
  }, [propMode]);
  React.useEffect(() => {
    setTheme(propTheme);
  }, [propTheme]);
  const resolvedMode = (() => {
    if (mode === "auto") {
      if (parentContext.mode && parentContext.mode !== "auto") {
        return parentContext.mode;
      }
      return systemMode;
    }
    return mode;
  })();
  React.useEffect(() => {
    const colorModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleOSColorModeChange = (event) => {
      setSystemMode(event.matches ? "dark" : "light");
    };
    colorModeQuery.addEventListener("change", handleOSColorModeChange);
    return () => {
      colorModeQuery.removeEventListener("change", handleOSColorModeChange);
    };
  }, []);
  React.useEffect(() => {
    if (!target) return;
    target.dataset.gdsTheme = theme;
    target.dataset.gdsMode = resolvedMode;
    return () => {
      target.dataset.gdsTheme = void 0;
      target.dataset.gdsMode = void 0;
    };
  }, [theme, resolvedMode, target]);
  if (theme === "genesis" && process.env.NODE_ENV !== "production") {
    console.warn(
      "The 'genesis' theme is a placeholder intended for testing only and must not be used in production."
    );
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-gds-theme": target ? void 0 : theme,
      "data-gds-mode": target ? void 0 : resolvedMode,
      ...rest
    },
    /* @__PURE__ */ React.createElement(
      ThemeProviderContext.Provider,
      {
        value: { mode: resolvedMode, updateMode: setMode, theme, updateTheme: setTheme }
      },
      children
    )
  );
}
function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
exports.ThemeProvider = ThemeProvider;
exports.ThemeProviderContext = ThemeProviderContext;
exports.useTheme = useTheme;
