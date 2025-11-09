import React from 'react';
import Tokens from "../_components/tokens_table.js";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {
  Button, 
  ButtonAsLink,
  Flex
} from "@grammarly/design-system";



export default function TokensTab(props) {
  const variantOverrides = props.variantOverrides || {};

  const links = [
    { text: 'All tokens', href: '/tokens#all-tokens' },
    { text: 'Color', href: '/tokens/color' },
    { text: 'Border radius', href: '/tokens/border-radius' },
    { text: 'Elevation', href: '/tokens/elevation' },
    { text: 'Space', href: '/tokens/space' },
    { text: 'Blur radius', href: '/tokens/blur-radius' },
    { text: 'Iconography', href: '/tokens/iconography' },
    { text: 'Deprecated tokens', href: '/tokens/deprecated_tokens' },
  ];

  return (
<Flex wrap gap={2}>
      {links.map(({ text, href }) => (
        <ButtonAsLink
          key={text}
          variant={variantOverrides[text] || 'secondary'}
          size="xlarge"
          text={text}
          href={useBaseUrl(href)}
        />
      ))}
    </Flex>
  );
}