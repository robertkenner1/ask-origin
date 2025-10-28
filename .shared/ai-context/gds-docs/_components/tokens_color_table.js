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
          { value: "Color", id: "color", level: 2 },
          { value: "Semantic Color", id: "semantic-color", level: 3 },
          { value: "Core Color", id: "core-color", level: 3 },
       
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
  
        <h3 id="semantic-color">Semantic Color</h3>
        <SemanticColorTokens platform={platform} />
        <br />
        <br />
        <h3 id="core-color">Core Color</h3>
        <CoreColorTokens platform={platform} />
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

const CoreColorTokens = ({ platform }) => {
  return (
    <TokenTable>
      {Object.entries(Tokens.Color)
        .map(([key, value]) => ({ name: key, hex: value }))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
        .map(color => {
          const tokenName = defaultTransformTokenNameByPlatform(color.name, platform);
          const hint = {
            csharp: `Foreground="{x:Static gds:CoreBrushes.${tokenName}}"`,
            web: `// JS:
import { Tokens } from '@grammarly/design-system'
Tokens.Color.${tokenName}

// CSS:
color: var(--${Strings.dasherize(tokenName)});
`,
            swift: `Color.palette(.${tokenName})`,
          };

          if (Tokens._deprecatedColorsV6.some(prefix => tokenName.includes(prefix))) {
            return null;
          }

          return (
            <TokenValue
              key={color.name}
              name={color.name}
              type="core-color"
              children1={<TokenName name={tokenName} />}
              children2={
                <Flex>
                  <ColorTile hex={color.hex} />
                  <div>{color.hex}</div>
                </Flex>
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

function getSemanticColors() {
  const isBrowser = useIsBrowser();
  if (!isBrowser) return null; // SSR doesn't have getComputedStyle

  const style = getComputedStyle(document.body);
  const semanticColors = Object.values(Tokens.SemanticColor.Color).flatMap(elementEntry => {
    return Object.values(elementEntry)
      .flatMap(roleEntry => Object.values(roleEntry))
      .map(variantColorValue => {
        // semantic variants are not defined as hex values
        // so we compute the hex values from page styles using the referenced CSS variable
        // var(--color-background-addition-default) => Color.Background.Addition.Default
        const cssVariable = variantColorValue.replace(/^var\(/, "").replace(/\)$/, "");
        const name = cssVariable
          .replace(/^--/, "")
          .replace(/-/g, ".")
          .replace(/(^\w{1})|(\.\w{1})/g, letter => letter.toUpperCase());
        return { name, css: variantColorValue, value: style.getPropertyValue(cssVariable).trim() };
      });
  });

  return semanticColors;
}

const DeprecatedColorTokens = ({ platform }) => {
  const isBrowser = useIsBrowser();
  if (!isBrowser) return null; // SSR doesn't have getComputedStyle

  const semanticColors = getSemanticColors();

  return (
    <TokenTable>
      {Object.entries(Tokens._deprecatedColorsV6)
        .map(([idx, value]) => ({ idx: idx, name: value }))
        .map(color => {
          const tokenName = defaultTransformTokenNameByPlatform(color.name, platform);
          const colorValue = Tokens.Color[color.name]
            ? Tokens.Color[color.name]
            : semanticColors.filter(color => color.name === tokenName)[0].value;

          return (
            <TokenValue
              key={color.name}
              name={color.name}
              type="deprecated-tokens"
              children1={<TokenName name={tokenName} />}
              children2={
                <Flex>
                  <ColorTile hex={colorValue} />
                  <div>{colorValue.toUpperCase()}</div>
                </Flex>
              }
            />
          );
        })}
    </TokenTable>
  );
};

const DarkModeColorCell = ({ tokenValue }) => {
  const [colorLabel, setColorLabel] = React.useState("Loading");
  const computeColorLabel = React.useCallback(node => {
    if (node !== null) {
      const label = window
        .getComputedStyle(node)
        .getPropertyValue(`--color-${tokenValue}`)
        .toUpperCase();
      setColorLabel(label);
    }
  }, []);

  return (
    <Flex
      padding={2}
      data-gds-theme="dark"
      bgColor="background-base-default"
      ref={computeColorLabel}
    >
      <ColorTile bgColor={tokenValue} />
      <div>{colorLabel}</div>
    </Flex>
  );
};

const SemanticColorTokens = ({ platform }) => {
  const isBrowser = useIsBrowser();
  if (!isBrowser) return null; // SSR doesn't have getComputedStyle

  const semanticColors = getSemanticColors();

  return (
    <TokenTable isSemanticColorTable>
      {semanticColors.map(color => {
        const tokenName = semanticColorTransformTokenNameByPlatform(color.name, platform);
        const bgColor = color.css.replace("var(--color-", "").replace(")", "");

        if (Tokens._deprecatedColorsV6.some(prefix => tokenName.includes(prefix))) {
          return null;
        }

        const hint = {
          csharp: `<SolidColorBrush Color="{x:Static gds:SemanticColors.${tokenName}}" />`,
          web: `// JS:
import { Tokens } from '@grammarly/design-system'
const styles = { color: Tokens.SemanticColor.${tokenName} }

// CSS:
color: ${color.css};
`,
          swift: `Color.${tokenName})`,
        };

        return (
          <TokenValueFourColumn
            key={color.name}
            name={color.name}
            type="semantic_color"
            children1={<TokenName name={tokenName} />}
            children2={
              <Flex padding={2}>
                <ColorTile bgColor={bgColor} />
                <div>{color.value.toUpperCase()}</div>
              </Flex>
            }
            children3={<DarkModeColorCell tokenValue={bgColor} />}
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

function getRemPxValue(valueInRem) {
  return { asRem: valueInRem, asPxUnit: valueInRem * 16 };
}


