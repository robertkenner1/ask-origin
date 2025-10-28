import { Text } from "@grammarly/design-system";
import React from "react";

/*
Example usage:

<RecommendationsTable
  caption="Writing best practices for error messages"
  recommendations={[
    {      
      recommendationDo: "Use simple, plain language to explain what the issue is.",
      exampleDo: <TextXSmall className="text-error-message-styling" children="Password must be at least 10 characters."/>,
      recommendationDont: "Use jargon or overly technical terms that hinder clarity.",
      exampleDont: <TextXSmall className="text-error-message-styling" children="Access denied. Invalid SSO token."/>,
    },
    {      
      recommendationDo: "Use simple, plain language to explain what the issue is.",
      exampleDo: <TextXSmall className="text-error-message-styling" children="Password must be at least 10 characters."/>,
      recommendationDont: "Use jargon or overly technical terms that hinder clarity.",
      exampleDont: <TextXSmall className="text-error-message-styling" children="Access denied. Invalid SSO token."/>,
    },
    {add a block for every row}
  ]}
/>

*/

const RecommendationsTable = ({
  recommendations,
  caption,
  showBackground = false,
  textOnly = false,
}) => (
  <table className="recommendations-table">
    <caption className="table-caption">{caption}</caption>
    <thead>
      <tr>
        <th className="rec-table-do" colSpan={textOnly ? 1 : 2}>
          Do
        </th>
        <th className="rec-table-dont" colSpan={textOnly ? 1 : 2}>
          Don’t
        </th>
      </tr>
    </thead>
    <tbody>
      {recommendations.map((recommendation, idx) => (
        <tr key={`rec-${idx}`}>
          <td>
            <Text as="div">{recommendation?.recommendationDo || ""}</Text>
          </td>
          {recommendation?.exampleDo && (
            <td className={showBackground ? "table-shaded-cell" : ""}>
              {recommendation?.exampleDo}
            </td>
          )}
          <td>
            <Text as="div">{recommendation?.recommendationDont || ""}</Text>
          </td>
          {recommendation?.exampleDont && (
            <td className={showBackground ? "table-shaded-cell" : ""}>
              {recommendation?.exampleDont}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default RecommendationsTable;
