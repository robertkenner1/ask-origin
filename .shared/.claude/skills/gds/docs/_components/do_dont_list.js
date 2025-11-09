import React from "react";
import { Icon, Text, Flex } from "@grammarly/design-system";
import DontIcon from "/static/img/components/negative-x.svg";
import DoIcon from "/static/img/components/positive-check.svg";

const ListItem = ({ content, type, spaceAbove }) => {
  return (
    <li>
      <Flex as="span" align="start" marginTop={spaceAbove && 6} gap={1}>
        <Flex flex="0 0 auto">
          <Icon
            accessibilityLabel={type === "do" ? "Do: " : "Don't: "}
            icon={type === "do" ? DoIcon : DontIcon}
            size="large"
          />
        </Flex>
        {typeof content === "string" ? <Text as="p">{content}</Text> : content}
      </Flex>
    </li>
  );
};

const DoDontList = ({ items }) => (
  <ul className="docs-do-dont-list">
    {items.map((item, idx) => (
      <ListItem
        key={`rec-list-${idx}`}
        content={item.content}
        type={item.type}
        spaceAbove={item.spaceAbove}
      />
    ))}
  </ul>
);

export default DoDontList;
