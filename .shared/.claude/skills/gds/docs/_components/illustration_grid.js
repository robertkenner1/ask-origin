import * as React from "react";
import { Flex, Illustration, Text } from "@grammarly/design-system";
import * as AllExports from "@grammarly/design-system";

export const IllustrationGridEmptySuccess = () => {
  const groupAssets = Object.entries(AllExports).filter(
    ([name]) =>
      name.endsWith("Icon") &&
      name.toLowerCase().startsWith(`illustration`) &&
      (name.includes("Empty") || name.includes("Success")),
  );
  const sortBySuffix = (a, b) => {
    const suffixA = a[0].toLowerCase().replace(/illustration|empty|success|icon/g, "");
    const suffixB = b[0].toLowerCase().replace(/illustration|empty|success|icon/g, "");

    return suffixA.localeCompare(suffixB);
  };

  let sortedAssets = groupAssets.sort(sortBySuffix);

  // Filter out success-check anomaly
  sortedAssets = sortedAssets.filter(([name]) => name !== "IllustrationSuccessCheckIcon");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 150px)",
        gap: "40px",
        rowGap: "80px",
      }}
    >
      {sortedAssets.map(([name]) => {
        let illustrationTypeName = name
          .toLowerCase()
          .replace("illustration", "")
          .replace("icon", "")
          .replace("empty", "empty-")
          .replace("success", "success-");

        return (
          <Flex key={`illustration-${name}`} direction="column" gap={4} align="center">
            <Illustration type={illustrationTypeName} size="large" />
            <Text as="p">{illustrationTypeName}</Text>
          </Flex>
        );
      })}
      <Flex key={`illustration-success-check`} direction="column" gap={4} align="center">
        <Illustration type={"success-check"} size="large" />
        <Text as="p">success-check</Text>
      </Flex>
    </div>
  );
};

export const IllustrationGrid = ({ type }) => {
  const groupAssets = Object.entries(AllExports).filter(
    ([name]) => name.endsWith("Icon") && name.toLowerCase().startsWith(`illustration${type}`),
  );
  console.log(groupAssets);
  return (
    <Flex wrap gap={20} marginBottom={20} marginTop={10}>
      {groupAssets.map(([name]) => {
        let illustrationTypeName = name
          .replace("Illustration", "")
          .replace("Icon", "")
          .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
          .toLowerCase();

        return (
          <Flex key={`illustration-${name}`} direction="column" gap={4} align="center">
            <Illustration type={illustrationTypeName} size="large" />
            <Text as="p">{illustrationTypeName}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
