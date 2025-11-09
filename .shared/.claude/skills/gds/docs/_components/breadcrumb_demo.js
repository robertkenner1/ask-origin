import { Icon, InterfaceRightIcon, Text } from "@grammarly/design-system";
import React from "react";
import { useBreadcrumbItem, useBreadcrumbs } from "react-aria";
import clsx from "clsx";

function RABreadcrumbs(props) {
  let { navProps } = useBreadcrumbs(props);
  let childCount = React.Children.count(props.children);

  return (
    <nav {...navProps}>
      <ol style={{ display: "flex", listStyle: "none", alignItems: "end", margin: 0, padding: 0 }}>
        {React.Children.map(props.children, (child, i) =>
          React.cloneElement(child, { isCurrent: i === childCount - 1 }),
        )}
      </ol>
    </nav>
  );
}

function RABreadcrumbItem(props) {
  let ref = React.useRef(null);
  let { itemProps } = useBreadcrumbItem({ ...props, elementType: "span" }, ref);
  return (
    <li>
      <span
        {...itemProps}
        ref={ref}
        style={{
          color: props.isDisabled ? "#6f6f6f" : "#0040ff",
          textDecoration: props.isCurrent || props.isDisabled ? "none" : "underline",
          fontWeight: props.isCurrent ? "bold" : null,
          cursor: props.isCurrent || props.isDisabled ? "default" : "pointer",
          fontFamily: "Arial",
          fontSize: "12px",
        }}
      >
        {props.children}
      </span>
      {!props.isCurrent && (
        <span aria-hidden="true" style={{ padding: "0 5px" }}>
          {"›"}
        </span>
      )}
    </li>
  );
}

const BreadcrumbsReactAriaDemo = () => (
  <RABreadcrumbs>
    <RABreadcrumbItem onPress={() => alert("Pressed Folder 1")}>Folder 1</RABreadcrumbItem>
    <RABreadcrumbItem isDisabled onPress={() => alert("Pressed Folder 2")}>
      Folder 2
    </RABreadcrumbItem>
    <RABreadcrumbItem>Folder 3</RABreadcrumbItem>
  </RABreadcrumbs>
);

function GDSBreadcrumbs(props) {
  let { navProps } = useBreadcrumbs(props);
  let childCount = React.Children.count(props.children);

  return (
    <nav {...navProps}>
      <ol
        style={{
          display: "flex",
          listStyle: "none",
          alignItems: "end",
          margin: 0,
          padding: 0,
          gap: "var(--space-1)",
        }}
      >
        {React.Children.map(props.children, (child, i) =>
          React.cloneElement(child, { isCurrent: i === childCount - 1 }),
        )}
      </ol>
    </nav>
  );
}

function GDSBreadcrumbItem(props) {
  let ref = React.useRef(null);
  let { itemProps } = useBreadcrumbItem({ ...props, elementType: "span" }, ref);
  return (
    <li
      className={clsx(
        "custom-breadcrumb-list-item",
        !props.isCurrent && !props.isDisabled ? "custom-breadcrumb-list-item-active" : null,
      )}
    >
      <Text
        as="span"
        variant="text-small"
        weight={props.isCurrent ? "bold" : null}
        {...itemProps}
        ref={ref}
        style={{
          color: props.isDisabled
            ? "var(--color-text-base-subdued)"
            : "var(--color-text-brand-default)",
          cursor: props.isCurrent || props.isDisabled ? "default" : "pointer",
        }}
      >
        {props.children}
      </Text>
      {!props.isCurrent && <Icon size="small" accessibilityLabel="" icon={InterfaceRightIcon} />}
    </li>
  );
}

const BreadcrumbsExample = () => (
  <GDSBreadcrumbs>
    <GDSBreadcrumbItem onPress={() => alert("Pressed Folder 1")}>Folder 1</GDSBreadcrumbItem>
    <GDSBreadcrumbItem isDisabled onPress={() => alert("Pressed Folder 2")}>
      Folder 2
    </GDSBreadcrumbItem>
    <GDSBreadcrumbItem>Folder 3</GDSBreadcrumbItem>
  </GDSBreadcrumbs>
);

export { BreadcrumbsReactAriaDemo, BreadcrumbsExample };
