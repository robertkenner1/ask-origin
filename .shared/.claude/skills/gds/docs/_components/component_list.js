import React from "react";

const ComponentList = ({ components }) => (
  <ul className="related-components-container">
    {components.sort((a, b) => a.label.localeCompare(b.label)).map(component => {
      return (
        <li key={component.href}>
          <a href={component.href}>{component.label}</a>
        </li>
      );
    })}
  </ul>
);

export default ComponentList;
