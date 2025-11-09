import React from "react";
import { Flex, Tag } from "@grammarly/design-system";
import { marked } from "marked";

const PropsTable = ({ properties, caption, headers = ["Name", "Description", "Type"] }) => (
  <table className="props-table">
    <caption className="table-caption">{caption}</caption>
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {properties?.map(property => {
        const descriptionHTML = marked.parseInline(property?.description);

        return (
          <tr key={property.propertyName} style={{ verticalAlign: "top" }}>
            <td>
              <Flex direction="column" align="flex-start" gap={3}>
                <code>{property?.propertyName}</code>
                {property?.isRequired && <Tag variant="warning" label="Required" />}
                {property?.isDeprecated && <Tag variant="critical" label="Deprecated" />}
              </Flex>
            </td>
            <td style={{ width: "500px" }} dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
            <td style={{ width: "200px" }}>
              <Flex direction="column" gap={4}>
                {property?.typeDefinition}
                {property?.defaultValue != null && <p>Defaults to: {property?.defaultValue}</p>}
              </Flex>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default PropsTable;
