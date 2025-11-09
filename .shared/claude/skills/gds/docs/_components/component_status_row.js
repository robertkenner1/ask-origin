import React from "react";

import { componentStatusData } from "./component_status_data";
import {
  AppsFigmaIcon,
  Flex,
  Icon,
  InterfaceInProgressIcon,
  InterfaceMinusIcon,
  InterfaceMuteIcon,
  InterfaceOkIcon,
  Link,
  Tag,
  Text,
} from "@grammarly/design-system";
import StorybookIcon from "/static/img/components/storybook-icon.svg";
import * as Strings from "@dsk/transpiler/esm/strings";

export const ComponentStatusRow = ({ name }) => {
  const status = componentStatusData.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (!status) return null;

  const componentPath = status.subgroup
    ? `gds-${status.subgroup}-${Strings.pascalCase(name)}`
    : `gds-${Strings.pascalCase(name)}`;

  return (
    <Flex justify="space-between" align="center">
      <Flex gap={4} align="center" marginTop={5} marginBottom={5}>
        <Flex align="center" gap={1}>
          <Text as="span" weight="bold">
            Web:
          </Text>
          <ComponentStatusItem status={status.status.webReact} />
        </Flex>
        <Flex align="center" gap={1}>
          <Text as="span" weight="bold">
            Accessibility:
          </Text>
          <ComponentStatusItem status={status.status.accessibility || "available"} />
        </Flex>
      </Flex>
      <Flex gap={4} align="center">
        {status.status.figma === "available" && (
          <Link
            accessibilityLabel={`Figma reference for ${name}`}
            target="_blank"
            href="https://www.figma.com/design/boHs6JzXxhzm1QCiMLUSYi/GDS-Base-Components?node-id=8616-22968"
          >
            <Flex gap={1} align="center">
              <Icon accessibilityLabel="" icon={AppsFigmaIcon} size="medium" />
              Figma
            </Flex>
          </Link>
        )}
        {(status.status.webReact === "available" || status.status.webReact === "inBeta") && (
          <Link
            accessibilityLabel={`Storybook docs for ${name}`}
            target="_blank"
            href={`https://uifoundation.gpages.io/grammarly-design-system/?path=/docs/${componentPath}--docs`}
          >
            <Flex gap={1} align="center">
              <Icon accessibilityLabel="" icon={StorybookIcon} size="small" />
              Storybook
            </Flex>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

/**
 * @typedef {'available' | 'inProgress' | 'notAvailable' | 'notApplicable'} ComponentStatus
 * @typedef {'Figma' | 'React' | undefined} ComponentType
 */

/**
 * @param {ComponentStatus} status
 * @param {ComponentType} type
 */
function getStatusText(status, type) {
  if (status === "available") return `${type ?? ""} component is available`;
  else if (status === "inProgress") return `${type ?? ""} component is in progress`;
  else if (status === "notApplicable") return `${type ?? ""} component is not applicable`;

  return `Component is not available ${type ? `for ${type}` : ""}`;
}

/**
 * @param {{ status: ComponentStatus, type: ComponentType }} props
 */
export const ComponentStatusItem = ({ status, type, size = "medium" }) => {
  if (status === "inBeta") return <Tag variant="warning" label="Beta" />;

  const icon =
    status === "available"
      ? InterfaceOkIcon
      : status === "inProgress"
      ? InterfaceInProgressIcon
      : status === "notApplicable"
      ? InterfaceMuteIcon
      : InterfaceMinusIcon;
  return (
    <Icon
      size={size}
      icon={icon}
      accessibilityLabel={getStatusText(status, type)}
      isDecorative={false}
    />
  );
};
