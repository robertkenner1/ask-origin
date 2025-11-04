import React__default from "react";
import { useObjectRef as $df56164dff5785e2$export$4338b53315abf666 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { makeCompoundComponent } from "../../helpers/compound.js";
import { useHasHorizontalScrollbar } from "../../hooks/useHasHorizontalScrollbar.js";
/* empty css         */
import { InterfaceLeft } from "../../../../icons/generated/all/interface_left.js";
import { InterfaceRight } from "../../../../icons/generated/all/interface_right.js";
import { Text } from "../Text/Text.js";
import { IconButton } from "../IconButton/IconButton.js";
import { Flex } from "../Flex/Flex.js";
const TabsContext = /* @__PURE__ */ React__default.createContext({
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
  const [selectedTab, setSelectedTab] = React__default.useState(startingSelectedTab);
  const [focusedTab, setFocusedTab] = React__default.useState(startingSelectedTab);
  const onChangeHandler = (tabId) => {
    onChange && onChange(tabId.replace(/gds-tab-/, ""));
  };
  return /* @__PURE__ */ React__default.createElement("div", { className: "gds-tabs", ...rest }, /* @__PURE__ */ React__default.createElement(
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
  React__default.Children.forEach(props.children, (child) => {
    if (React__default.isValidElement(child) && child.type === TabList) {
      React__default.Children.forEach(child.props.children, (tab) => {
        if (React__default.isValidElement(tab) && tab.type === Tab) {
          tabIds.push(getTabId(tab.props.id));
        }
      });
    }
  });
  return tabIds;
}
const TabList = /* @__PURE__ */ React__default.forwardRef(
  function TabList2(props, forwardedRef) {
    const { bottomBorder = "default", width } = props;
    const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const tabListRef = React__default.useRef(null);
    const { hasHiddenLeftContent, hasHiddenRightContent } = useHasHorizontalScrollbar(tabListRef);
    const { setSelectedTab, setFocusedTab, onChangeHandler, focusedTab, tabIds, size } = React__default.useContext(TabsContext);
    const [overflowRightActive, setOverflowRightActive] = React__default.useState(false);
    const [overflowLeftActive, setOverflowLeftActive] = React__default.useState(false);
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
    React__default.useEffect(() => {
      setOverflowRightActive(hasHiddenRightContent);
      setOverflowLeftActive(hasHiddenLeftContent);
    }, [overflowRightActive, overflowLeftActive, hasHiddenLeftContent, hasHiddenRightContent]);
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      /* @__PURE__ */ React__default.createElement(
        "div",
        {
          ref,
          role: "tablist",
          "aria-orientation": "horizontal",
          "aria-label": props.accessibilityLabel,
          className: clsx(
            "gds-tabs-list-container",
            bottomBorder === "none" && "gds-tabs-border-none",
            width === "full" && "gds-tabs-full-width",
            `gds-tabs-list-container-${size}`
          ),
          onKeyDown
        },
        overflowLeftActive && /* @__PURE__ */ React__default.createElement(
          IconButton,
          {
            "aria-hidden": true,
            accessibilityLabel: "Show more tabs",
            className: "gds-tabs-list-overflow-button-left",
            size: size === "small" ? "small" : "medium",
            variant: "tertiary",
            icon: InterfaceLeft,
            tabIndex: -1,
            onClick: () => {
              tabListRef.current !== null ? tabListRef.current.scrollLeft -= 500 : null;
            }
          }
        ),
        /* @__PURE__ */ React__default.createElement(Flex, { gap: 3, align: "center", className: "gds-tabs-list", ref: tabListRef }, props.children),
        overflowRightActive && /* @__PURE__ */ React__default.createElement(
          IconButton,
          {
            "aria-hidden": true,
            accessibilityLabel: "Show more tabs",
            className: "gds-tabs-list-overflow-button-right",
            size: size === "small" ? "small" : "medium",
            variant: "tertiary",
            icon: InterfaceRight,
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
const Tab = /* @__PURE__ */ React__default.forwardRef(
  function Tab2(props, forwardedRef) {
    const { selectedTab, setSelectedTab, setFocusedTab, onChangeHandler, size } = React__default.useContext(TabsContext);
    const fullTabId = getTabId(props.id);
    const fullPanelId = getPanelId(props.id);
    const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const isSelected = selectedTab === fullTabId;
    const fontSizeMap = {
      small: "text-xsmall",
      medium: "text-small",
      large: "text-medium",
      xlarge: "text-large",
      auto: "text-medium"
    };
    return /* @__PURE__ */ React__default.createElement(
      "button",
      {
        "aria-selected": isSelected,
        "aria-controls": fullPanelId,
        className: clsx("gds-tabs-tab-container", props.className),
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
      /* @__PURE__ */ React__default.createElement(
        "div",
        {
          className: clsx("gds-tabs-tab", isSelected && "gds-tabs-tab-selected"),
          "data-text": props.label
        },
        props.label != null ? /* @__PURE__ */ React__default.createElement(Text, { weight: isSelected ? "semibold" : "normal", as: "span", variant: fontSizeMap[size] }, props.label) : props.children
      )
    );
  }
);
const TabPanel = /* @__PURE__ */ React__default.forwardRef(
  function TabPanel2(props, forwardedRef) {
    const { selectedTab } = React__default.useContext(TabsContext);
    const ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
    const fullTabId = getTabId(props.id);
    const fullPanelId = getPanelId(props.id);
    let isSelected = selectedTab === fullTabId;
    React__default.useEffect(() => {
      isSelected = selectedTab === fullTabId;
    }, [selectedTab]);
    return isSelected ? /* @__PURE__ */ React__default.createElement(
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
const TabsCompoundComponent = makeCompoundComponent(Tabs, "Tabs", {
  Panel: TabPanel,
  TabList,
  Tab
});
export {
  TabsCompoundComponent as Tabs
};
