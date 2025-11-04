"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const compound = require("../../helpers/compound.cjs");
const useHasHorizontalScrollbar = require("../../hooks/useHasHorizontalScrollbar.cjs");
;/* empty css           */
const interface_left = require("../../../../icons/generated/all/interface_left.cjs");
const interface_right = require("../../../../icons/generated/all/interface_right.cjs");
const Text = require("../Text/Text.cjs");
const IconButton = require("../IconButton/IconButton.cjs");
const Flex = require("../Flex/Flex.cjs");
const TabsContext = /* @__PURE__ */ React.createContext({
  selectedTab: "",
  setSelectedTab() {
  },
  focusedTab: "",
  setFocusedTab() {
  },
  onChangeHandler() {
  },
  tabIds: [""],
  size: "medium"
});
const getTabId = (id) => {
  return `gds-tab-${id}`;
};
const getPanelId = (id) => {
  return `gds-tab-panel-${id}`;
};
const Tabs = (props) => {
  const tabIds = getTabIdsFromChildren(props);
  const { defaultSelectedTab, children, size = "medium", onChange, ...rest } = props;
  const startingSelectedTab = defaultSelectedTab ? getTabId(defaultSelectedTab) : tabIds[0];
  const [selectedTab, setSelectedTab] = React.useState(startingSelectedTab);
  const [focusedTab, setFocusedTab] = React.useState(startingSelectedTab);
  const onChangeHandler = (tabId) => {
    onChange && onChange(tabId.replace(/gds-tab-/, ""));
  };
  return /* @__PURE__ */ React.createElement("div", { className: "gds-tabs", ...rest }, /* @__PURE__ */ React.createElement(
    TabsContext.Provider,
    {
      value: {
        selectedTab,
        setSelectedTab,
        setFocusedTab,
        onChangeHandler,
        focusedTab,
        tabIds,
        size
      }
    },
    children
  ));
};
function getTabIdsFromChildren(props) {
  const tabIds = [];
  React.Children.forEach(props.children, (child) => {
    if (React.isValidElement(child) && child.type === TabList) {
      React.Children.forEach(child.props.children, (tab) => {
        if (React.isValidElement(tab) && tab.type === Tab) {
          tabIds.push(getTabId(tab.props.id));
        }
      });
    }
  });
  return tabIds;
}
const TabList = /* @__PURE__ */ React.forwardRef(
  function TabList2(props, forwardedRef) {
    const { bottomBorder = "default", width } = props;
    const ref = _import.useObjectRef(forwardedRef);
    const tabListRef = React.useRef(null);
    const { hasHiddenLeftContent, hasHiddenRightContent } = useHasHorizontalScrollbar.useHasHorizontalScrollbar(tabListRef);
    const { setSelectedTab, setFocusedTab, onChangeHandler, focusedTab, tabIds, size } = React.useContext(TabsContext);
    const [overflowRightActive, setOverflowRightActive] = React.useState(false);
    const [overflowLeftActive, setOverflowLeftActive] = React.useState(false);
    const onKeyDown = (event) => {
      const count = tabIds.length;
      const focusedTabIndex = tabIds.indexOf(focusedTab);
      const updateFocusedTab = (tabId) => {
        var _a;
        setFocusedTab(tabId);
        (_a = document.getElementById(tabId)) == null ? void 0 : _a.focus();
      };
      const nextTab = () => {
        const nextFocusedTab = tabIds[(focusedTabIndex + 1) % count];
        updateFocusedTab(nextFocusedTab);
      };
      const prevTab = () => {
        const nextFocusedTab = tabIds[(focusedTabIndex - 1 + count) % count];
        updateFocusedTab(nextFocusedTab);
      };
      const selectTab = () => {
        setSelectedTab(focusedTab);
        onChangeHandler(focusedTab);
      };
      const keyMap = {
        ArrowRight: nextTab,
        ArrowLeft: prevTab,
        Enter: selectTab
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action();
      }
    };
    React.useEffect(() => {
      setOverflowRightActive(hasHiddenRightContent);
      setOverflowLeftActive(hasHiddenLeftContent);
    }, [overflowRightActive, overflowLeftActive, hasHiddenLeftContent, hasHiddenRightContent]);
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref,
          role: "tablist",
          "aria-orientation": "horizontal",
          "aria-label": props.accessibilityLabel,
          className: clsx_m.clsx(
            "gds-tabs-list-container",
            bottomBorder === "none" && "gds-tabs-border-none",
            width === "full" && "gds-tabs-full-width",
            `gds-tabs-list-container-${size}`
          ),
          onKeyDown
        },
        overflowLeftActive && /* @__PURE__ */ React.createElement(
          IconButton.IconButton,
          {
            "aria-hidden": true,
            accessibilityLabel: "Show more tabs",
            className: "gds-tabs-list-overflow-button-left",
            size: size === "small" ? "small" : "medium",
            variant: "tertiary",
            icon: interface_left.InterfaceLeft,
            tabIndex: -1,
            onClick: () => {
              tabListRef.current !== null ? tabListRef.current.scrollLeft -= 500 : null;
            }
          }
        ),
        /* @__PURE__ */ React.createElement(Flex.Flex, { gap: 3, align: "center", className: "gds-tabs-list", ref: tabListRef }, props.children),
        overflowRightActive && /* @__PURE__ */ React.createElement(
          IconButton.IconButton,
          {
            "aria-hidden": true,
            accessibilityLabel: "Show more tabs",
            className: "gds-tabs-list-overflow-button-right",
            size: size === "small" ? "small" : "medium",
            variant: "tertiary",
            icon: interface_right.InterfaceRight,
            tabIndex: -1,
            onClick: () => {
              tabListRef.current !== null ? tabListRef.current.scrollLeft += 500 : null;
            }
          }
        )
      )
    );
  }
);
const Tab = /* @__PURE__ */ React.forwardRef(
  function Tab2(props, forwardedRef) {
    const { selectedTab, setSelectedTab, setFocusedTab, onChangeHandler, size } = React.useContext(TabsContext);
    const fullTabId = getTabId(props.id);
    const fullPanelId = getPanelId(props.id);
    const ref = _import.useObjectRef(forwardedRef);
    const isSelected = selectedTab === fullTabId;
    const fontSizeMap = {
      small: "text-xsmall",
      medium: "text-small",
      large: "text-medium",
      xlarge: "text-large",
      auto: "text-medium"
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        "aria-selected": isSelected,
        "aria-controls": fullPanelId,
        className: clsx_m.clsx("gds-tabs-tab-container", props.className),
        id: fullTabId,
        ref,
        role: "tab",
        tabIndex: isSelected ? 0 : -1,
        onClick: () => {
          setSelectedTab(fullTabId);
          setFocusedTab(fullTabId);
          onChangeHandler(fullTabId);
        },
        onFocus: () => {
          setFocusedTab(fullTabId);
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: clsx_m.clsx("gds-tabs-tab", isSelected && "gds-tabs-tab-selected"),
          "data-text": props.label
        },
        props.label != null ? /* @__PURE__ */ React.createElement(Text.Text, { weight: isSelected ? "semibold" : "normal", as: "span", variant: fontSizeMap[size] }, props.label) : props.children
      )
    );
  }
);
const TabPanel = /* @__PURE__ */ React.forwardRef(
  function TabPanel2(props, forwardedRef) {
    const { selectedTab } = React.useContext(TabsContext);
    const ref = _import.useObjectRef(forwardedRef);
    const fullTabId = getTabId(props.id);
    const fullPanelId = getPanelId(props.id);
    let isSelected = selectedTab === fullTabId;
    React.useEffect(() => {
      isSelected = selectedTab === fullTabId;
    }, [selectedTab]);
    return isSelected ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "gds-tabs-panel",
        role: "tabpanel",
        id: fullPanelId,
        "aria-labelledby": fullTabId,
        ref,
        tabIndex: 0
      },
      props.children
    ) : null;
  }
);
const TabsCompoundComponent = compound.makeCompoundComponent(Tabs, "Tabs", {
  Panel: TabPanel,
  TabList,
  Tab
});
exports.Tabs = TabsCompoundComponent;
