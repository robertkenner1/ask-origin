/* eslint-disable react/prop-types */
import * as React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import * as Strings from "@dsk/transpiler/esm/strings";
import { Flex, Tokens, Link, Text } from "@grammarly/design-system";
import * as GDS from "@grammarly/design-system";
import { LinkHint, CopyHint } from "./copy_hint.js";

export default {
  TokenPage({ platform, label, toc, Link }) {
    React.useEffect(() => {
      // populate table of contents so sidebar appears
      if (!toc.length) {
        toc.push(

        );
      }

      const [, additional] = location.hash.split("__");
      if (additional) {
        scrollAndHighlight(additional);
      }
    }, []);

    return (
      <>
        <Link label={label} urlValue={platform} />
        <br />
        <br />
        <BorderRadiusTokens platform={platform} />
        <br />
        <br />
      </>
    );
  },
};

function highlightById(id) {
  const e = document.getElementById(id);

  setTimeout(() => {
    const highlight = "table-row-highlight";
    e?.classList.add(highlight);

    setTimeout(() => {
      e?.classList.remove(highlight);
    }, 2000);
  }, 300);
}

function scrollAndHighlight(id) {
  const e = document.getElementById(id);
  e?.scrollIntoView({
    block: "start",
  });

  highlightById(id);
}

const TokenValue = ({ type, name, children1, children2, CopyButton }) => (
  <tr key={name} id={name} className="token-row-wrapper">
    <td>{children1}</td>
    <td>
      <div className="token-value-wrapper">
        {children2}
        <div className="token-value-actions-wrapper">
          <LinkHint
            className="token-value-icon-wrapper token-value-link-icon"
            onClick={() => {
              location.hash = `#${type}__${name}`;

              highlightById(name);
            }}
          />
          {CopyButton}
        </div>
      </div>
    </td>
  </tr>
);

const TokenValueFourColumn = ({ type, name, children1, children2, children3, CopyButton }) => (
  <tr key={name} id={name} className="token-row-wrapper">
    <td>{children1}</td>
    <td>
      <Flex gap={3} wrap align="center">
        {children2}
      </Flex>
    </td>
    <td>{children3}</td>
    <td style={{ width: "100px" }}>
      <Flex gap={2} justify="center">
        <LinkHint
          className="token-value-icon-wrapper token-value-link-icon"
          onClick={() => {
            location.hash = `#${type}__${name}`;

            highlightById(name);
          }}
        />
        {CopyButton}
      </Flex>
    </td>
  </tr>
);

function defaultTransformTokenNameByPlatform(name, platform) {
  switch (platform) {
    case "web":
      return name;
    case "swift":
      return Strings.lowercaseFirstLetter(Strings.pascalCase(name));
    case "csharp":
      return Strings.pascalCase(name);
  }
}

function semanticColorTransformTokenNameByPlatform(name, platform) {
  switch (platform) {
    case "web":
      return defaultTransformTokenNameByPlatform(name, platform);
    case "csharp":
      return defaultTransformTokenNameByPlatform(name, platform);
    case "swift":
      return (
        // semantic(.interface(.successAndAddition(.secondary(.default))))

        (
          `semantic(` +
          name
            // semantic(
            .split(".")
            // .interface(.successAndAddition(.secondary(.default(
            .map(token => `.${Strings.lowercaseFirstLetter(token)}(`)
            .join("") +
          // .interface(.successAndAddition(.secondary(.default()
          ")"
        )
          // .interface(.successAndAddition(.secondary(.default())))
          .replace("()", "))))")
      );
  }
}

function iconographyTransformTokenNameByPlatform(name, platform) {
  switch (platform) {
    case "web":
      return defaultTransformTokenNameByPlatform(name, platform);
    case "csharp":
      return "gds-icon" + name.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    case "swift":
      const [group, ...tokens] = name.split(/(?=[A-Z])/);
      return `.${Strings.lowercaseFirstLetter(
        group === "G" ? "gButton" : group,
      )}(.${Strings.lowercaseFirstLetter(
        group === "G" ? tokens.slice(1).join("") : tokens.join(""),
      )})`;
  }
}

const ColorTile = ({ bgColor, hex }) => {
  const colorProps = {};
  if (hex) {
    colorProps.style = { backgroundColor: hex };
  } else if (bgColor) {
    colorProps.bgColor = bgColor;
  }
  return (
    <Flex borderColor="base-subdued" width={24} height={24} marginRight={3} {...colorProps}></Flex>
  );
};

const TokenName = ({ name }) => (
  <span
    style={{
      background: Tokens.SemanticColor.Color.Background.Base.Subdued,
      borderRadius: `${Tokens.Radius.Radius2}rem`,
      padding: `${Tokens.Space.Space1}rem`,
    }}
  >
    <span style={{ color: Tokens.Color.Blue80 }}>{name}</span>
  </span>
);

const TokenTable = ({ children, isSemanticColorTable }) => (
  <table>
    <thead>
      <tr>
        <th style={{ width: "25%" }}>Token name</th>
        <th>Value</th>
        {isSemanticColorTable && <th>Dark mode value (Beta)</th>}
        {isSemanticColorTable && <th>Actions</th>}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);


function getRemPxValue(valueInRem) {
  return { asRem: valueInRem, asPxUnit: valueInRem * 16 };
}

const BorderRadiusTokens = ({ platform }) => {
  return (
    <TokenTable>
      {Object.keys(Tokens.Radius)
        .map(key => ({ name: key, value: getRemPxValue(Tokens.Radius[key]) }))
        .sort((a, b) => a.value.asRem - b.value.asRem)
        .map(radius => {
          const tokenName = defaultTransformTokenNameByPlatform(radius.name, platform);

          const hint = {
            csharp: `CornerRadius="{Binding Source={x:Static gds:BorderRadius.${tokenName}}}"`,
            web: `// JS:
import { Tokens } from '@grammarly/design-system'
Tokens.Radius.${tokenName} // number representing a rem value

// CSS:
border-radius: var(--radius-${tokenName.replace("Radius", "").toLowerCase()});
`,
            swift: `layer?.setCornerRadius(.${tokenName})`,
          };

          return (
            <TokenValue
              key={radius.name}
              name={radius.name}
              type="border-radius"
              children1={<TokenName name={tokenName} />}
              children2={
                <>
                  {radius.value.asRem} rem / {radius.value.asPxUnit} px
                </>
              }
              CopyButton={
                <CopyHint
                  className="token-value-icon-wrapper token-value-copy-icon"
                  web={platform === "web" ? hint.web : undefined}
                  swift={platform === "swift" ? hint.swift : undefined}
                  csharp={platform === "csharp" ? hint.csharp : undefined}
                />
              }
            />
          );
        })}
    </TokenTable>
  );
};

