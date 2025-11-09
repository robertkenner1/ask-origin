/* eslint-disable react/prop-types */
import * as React from "react";
import Link from "@docusaurus/Link";
// TODO: use our Link, but hook into the docusaurus routing to avoid full page refreshes
// import { Link } from "@grammarly/design-system";

export const ChangelogItem = ({
  component,
  components = [],
  message,
  subgroup,
  commit,
  status,
}) => {
  return (
    <>
      <ComponentPrefix
        components={[component, ...components].filter(Boolean)}
        status={status}
        subgroup={subgroup}
      />
      <span
        dangerouslySetInnerHTML={{
          __html: message.replace(/`([A-Za-z0-9-_.]+)`/g, "<code>$1</code>"),
        }}
      />
      {commit ? (
        <>
          {" ("}
          <Link
            href={`https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/commit/${commit}`}
            target="_blank"
          >
            {commit}
          </Link>
          {")"}
        </>
      ) : null}
    </>
  );
};

const utilityMap = {
  ColorSchemeProvider: true,
  PortalContainerProvider: true,
  ScreenReaderOnly: true,
  LiveAnnouncer: true,
};

// eg SkeletonLoader => skeleton-loader
function dasherize(name) {
  return name.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
}

function getComponentUrl(componentName, subgroup) {
  const path = utilityMap[componentName] ? "utilities" : "components";
  if (subgroup) {
    return `/${path}/${subgroup}/${dasherize(componentName)}`;
  }
  return `/${path}/${dasherize(componentName)}`;
}

function ComponentPrefix({ components, status, subgroup }) {
  if (!components.length) return null;

  return (
    <>
      {components.map((component, i) => (
        <>
          <Link key={i} to={getComponentUrl(component, subgroup)}>
            {component}
          </Link>
          <span>{i < components.length - 1 ? ", " : ""}</span>
        </>
      ))}
      {status === "beta" ? " (Beta)" : ""}
      {": "}
    </>
  );
}

export function SimpleList(props) {
  return <ul style={{ listStyleType: "none" }} {...props} />;
}
