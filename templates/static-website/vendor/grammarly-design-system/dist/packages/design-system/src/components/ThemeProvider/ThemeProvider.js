import React__default, { useContext, createContext, useState, useEffect } from "react";
/* empty css                  */
const ThemeProviderContext = /* @__PURE__ */ createContext({
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
  const parentContext = useContext(ThemeProviderContext);
  const [theme, setTheme] = useState(propTheme);
  const [mode, setMode] = useState(propMode);
  const [systemMode, setSystemMode] = useState(getInitialSystemMode);
  useEffect(() => {
    setMode(propMode);
  }, [propMode]);
  useEffect(() => {
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
  useEffect(() => {
    const colorModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleOSColorModeChange = (event) => {
      setSystemMode(event.matches ? "dark" : "light");
    };
    colorModeQuery.addEventListener("change", handleOSColorModeChange);
    return () => {
      colorModeQuery.removeEventListener("change", handleOSColorModeChange);
    };
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ React__default.createElement(
    "div",
    {
      "data-gds-theme": target ? void 0 : theme,
      "data-gds-mode": target ? void 0 : resolvedMode,
      ...rest
    },
    /* @__PURE__ */ React__default.createElement(
      ThemeProviderContext.Provider,
      {
        value: { mode: resolvedMode, updateMode: setMode, theme, updateTheme: setTheme }
      },
      children
    )
  );
}
function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export {
  ThemeProvider,
  ThemeProviderContext,
  useTheme
};
