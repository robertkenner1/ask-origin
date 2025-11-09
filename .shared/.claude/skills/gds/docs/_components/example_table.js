import React from "react";

const ExampleTable = ({
  variants,
  caption,
  showBackground = false,
  headers = ["Example", "Variant"],
}) => (
  <table>
    <caption className="table-caption">{caption}</caption>
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {variants.map(variant => (
        <tr key={variant.variantName}>
          <td className={showBackground ? "table-shaded-cell" : ""}>
            {variant?.component ? variant.component : <img src={variant?.image} alt="" />}
          </td>
          <td>{variant?.variantName || ""}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExampleTable;
