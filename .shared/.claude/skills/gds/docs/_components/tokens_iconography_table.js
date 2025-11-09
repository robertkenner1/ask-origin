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
        <IconographyTokens platform={platform} />
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

const ElevationTokens = ({ platform }) => {
  let elevationOrder = ["ElevationLow", "ElevationMedium", "ElevationHigh"];

  return (
    <TokenTable>
      {Object.keys(Tokens.Elevation)
        .sort((a, b) => elevationOrder.indexOf(a) - elevationOrder.indexOf(b))
        .map(elevation => {
          const tokenName = defaultTransformTokenNameByPlatform(elevation, platform);
          const cssVarName = elevation.endsWith(0)
            ? tokenName.toLowerCase()
            : Strings.dasherize(elevation);

          const hint = {
            csharp: `<Border Style="{ StaticResource ${tokenName} }"></Border>`,
            web: `// JS:
import { Tokens } from '@grammarly/design-system'
const styles = {
  boxShadow: Tokens.Elevation.${tokenName}.boxShadow
  border: Tokens.Elevation.${tokenName}.border
}

// CSS:
box-shadow: var(--${cssVarName}-shadow);
border: var(--${cssVarName}-border);
`,
            swift: `view.setElevation(.${tokenName})`,
          };

          const value = Tokens.Elevation[elevation];
          const nameColumnContent = tokenName.endsWith(0) ? (
            <>
              <TokenName name={tokenName} />
              <Flex marginTop={2} align="center" gap={1} marginLeft={1}>
                <Text as="p" variant="text-xsmall" color="critical-default">
                  Deprecated:{" "}
                  <Link variant="inherit" href="/whats-new">
                    View the v6.18.0 release notes
                  </Link>{" "}
                  for details.
                </Text>
              </Flex>
            </>
          ) : (
            <TokenName name={tokenName} />
          );

          return (
            <TokenValue
              key={elevation}
              name={elevation}
              type="elevation"
              children1={nameColumnContent}
              children2={
                <ul style={{ margin: 0, paddingLeft: "var(--space-3)" }}>
                  <li>boxShadow: {value.boxShadow}</li>
                  <li>border: {value.border}</li>
                </ul>
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

const SpaceTokens = ({ platform }) => {
  return (
    <TokenTable>
      {Object.keys(Tokens.Space)
        .map(key => ({ name: key, value: getRemPxValue(Tokens.Space[key]) }))
        .sort((a, b) => a.value.asRem - b.value.asRem)
        .map(space => {
          const tokenName = defaultTransformTokenNameByPlatform(space.name, platform);
          const cssVariable = `var(--space-${tokenName.replace("Space", "").toLowerCase()})`;
          const hint = {
            csharp: `<Setter Property="<property_name>" Value="{x:Static gds:Spaces.${tokenName}}"></Setter> />`,
            web: `// JS:
import { Tokens } from '@grammarly/design-system'
Tokens.Space.${tokenName} // number representing a rem value

// CSS:
padding: ${cssVariable};
`,
            swift: `$0.setSpacing(.${tokenName})`,
          };

          return (
            <TokenValue
              name={space.name}
              key={space.name}
              type="space"
              children1={<TokenName name={tokenName} />}
              children2={`${space.value.asRem} rem / ${space.value.asPxUnit} px`}
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

const BlurTokens = ({ platform }) => {
  let blurOrder = ["BlurLow", "BlurMedium", "BlurHigh"];

  return (
    <TokenTable>
      {Object.keys(Tokens.Blur)
        .sort((a, b) => blurOrder.indexOf(a) - blurOrder.indexOf(b))
        .map(blur => {
          const tokenName = defaultTransformTokenNameByPlatform(blur, platform);
          const cssVariable = `var(--blur-${tokenName.replace("Blur", "").toLowerCase()})`;
          const hint = {
            web: `// JS:
import { Tokens } from '@grammarly/design-system'
Tokens.Blur.${tokenName} // number representing a px value

// CSS:
filter: blur(${cssVariable});
`,
          };

          const value = Tokens.Blur[blur];

          return (
            <TokenValue
              name={blur}
              key={blur}
              type="blur"
              children1={<TokenName name={tokenName} />}
              children2={`${value}`}
              CopyButton={
                <CopyHint
                  className="token-value-icon-wrapper token-value-copy-icon"
                  web={platform === "web" ? hint.web : undefined}
                />
              }
            />
          );
        })}
    </TokenTable>
  );
};

// source: tags in Figma (cleaned up a little)
const iconKeywords = {
  EmojiAccusatory: ["accuse", "thumbs down"],
  EmojiAdmiring: ["admire", "heart eyes"],
  EmojiAnalytical: ["bar chart"],
  EmojiAnticipatory: ["fingers crossed"],
  EmojiApologetic: ["apology", "crying"],
  EmojiAppreciative: ["appreciate"],
  EmojiAssertive: ["finger point"],
  EmojiConfident: ["confidence", "shaking hands"],
  EmojiConstructive: ["wave"],
  EmojiCuriousThoughtful: ["thinking"],
  EmojiDefensive: ["shield"],
  EmojiDiplomatic: ["diplomacy"],
  EmojiDirect: ["bullseye", "target"],
  EmojiEmpathetic: ["empathy", "halo"],
  EmojiEncouraging: ["encourage", "thumbs up"],
  EmojiExcited: ["star eyes"],
  EmojiExpressionless: ["no expression"],
  EmojiFormal: ["collared shirt"],
  EmojiGloomyDepressing: ["depressed"],
  EmojiImpersonal: ["blue avatar"],
  EmojiInformal: ["green shirt"],
  EmojiInformative: ["nerdy"],
  EmojiInspirational: ["light bulb"],
  EmojiJoyful: ["smile"],
  EmojiKeyPoint: ["key-point", "megaphone"],
  EmojiLoving: ["love", "heart smile"],
  EmojiObjective: ["scale"],
  EmojiOptimistic: ["peace fingers"],
  EmojiRead: ["shifty eyes"],
  EmojiSad: ["frown"],
  EmojiSkip: ["zzz"],
  EmojiSmiling: ["smile"],
  EmojiUncertain: ["shrug"],
  EmojiUrgent: ["alarm clock"],
  EmojiWorried: ["worry"],
  FlagAu: ["australia"],
  FlagCa: ["canada"],
  FlagGb: ["great britain", "england", "UK"],
  FlagIn: ["india"],
  FlagUs: ["united states"],
  GGOActionAnnouncement: ["megaphone"],
  GGOActionBrainstorm: ["cloud", "lightning"],
  GGOActionEvaluateCategory: ["magnifying glass"],
  GGOActionFixErrors: ["wrench"],
  GGOActionGenerateIdeasCategory: ["light bulb"],
  GGOActionIdentifyGaps: ["binoculars"],
  GGOActionImprove: ["pencil"],
  GGOActionInspireMe: ["star"],
  GGOActionInterested: ["speech bubble"],
  GGOActionLengthen: ["ruler"],
  GGOActionMakeItPersonal: ["flower"],
  GGOActionMakeItProfessional: ["briefcase"],
  GGOActionNotInterested: ["speech bubble"],
  GGOActionReviseCategory: ["highlighter", "markup"],
  GGOActionShorten: ["scissors"],
  GGOActionSimplify: ["broom"],
  GGOActionSummarize: ["document"],
  GGOActionSurpriseMe: ["gift", "present"],
  GGOActionWriteStory: ["feather", "quill"],
  GGOEmojiPersonGesturingNo: ["gesture", "no"],
  GGOInterfaceIgnore: ["trash"],
  GGOInterfaceImproveWriting: ["pencil"],
  GGOInterfaceLightBolt: ["info", "lightning bolt"],
  GGOInterfacePaperPlane: ["airplane", "send"],
  GGOInterfacePlus: ["new"],
  GGOInterfaceStyleCasual: ["style-casual", "t-shirt"],
  GGOInterfaceStyleFormal: ["style-format", "dress shirt"],
  GGOInterfaceStyleNeutral: ["style-neutral", "smiley"],
  GGOInterfaceTone: ["double-smiley", "two-smiley"],
  GGOInterfaceVoiceMiddle: ["sound-waves", "sound"],
  InterfaceBell: ["notification"],
  InterfaceBold: ["text-style"],
  InterfaceClear: ["text-style"],
  InterfaceClose: ["x"],
  InterfaceCollapseRight: ["double chevron right"],
  InterfaceColorPickerActive: ["color-picker", "selected", "radio button"],
  InterfaceColorPickerInactive: ["color-picker", "deselected", "radio button"],
  InterfaceControls: ["filter"],
  InterfaceCut: ["scissors"],
  InterfaceDictionary: ["book"],
  InterfaceDot: ["bullet"],
  InterfaceDown: ["chevron down"],
  InterfaceEdit: ["pencil"],
  InterfaceExportXls: ["excel", "document"],
  InterfaceExternalLink: ["outer link"],
  InterfaceFeedback: ["chat bubble"],
  InterfaceGoals: ["target", "bullseye"],
  InterfaceHeading1: ["h1", "large heading"],
  InterfaceHeading2: ["h2", "medium heading"],
  InterfaceHelp: ["question-mark"],
  InterfaceHide: ["eye closed"],
  InterfaceIgnore: ["trash", "delete"],
  InterfaceInbox: ["tray"],
  InterfaceInfo: ["i-icon"],
  InterfaceInProgress: ["incomplete", "partial"],
  InterfaceInsights: ["chart"],
  InterfaceLeft: ["chevron left", "back", "previous"],
  InterfaceLink: ["chain"],
  InterfaceLock: ["locked"],
  InterfaceLogout: ["logout", "signout", "power"],
  InterfaceMoney: ["dollar sign"],
  InterfaceMore: ["ellipsis", "horizontal dots"],
  InterfaceMoreVertical: ["ellipsis", "vertical dots"],
  InterfaceNew: ["plus"],
  InterfaceNewTeam: ["people"],
  InterfaceOk: ["alert"],
  InterfaceOrderedList: ["numbered list"],
  InterfacePaste: ["clipboard"],
  InterfacePlagiarism: ["quotes"],
  InterfacePremium: ["diamond"],
  InterfacePrint: ["printer"],
  InterfaceRemove: ["delete", "cancel"],
  InterfaceReport: ["flag"],
  InterfaceRight: ["chevron right", "forward", "next"],
  InterfaceSearch: ["magnifying glass"],
  InterfaceSecurity: ["shield"],
  InterfaceSettings: ["gear"],
  InterfaceShow: ["eye open"],
  InterfaceSnooze: ["clock"],
  InterfaceSort2: ["both", "unsorted", "ascending", "descending", "direction"],
  InterfaceSortAscending: ["direction"],
  InterfaceSortDescending: ["direction"],
  InterfaceSortHorizontal: ["direction"],
  InterfaceStar: ["pro plan"],
  InterfaceSuggestionsSettings: ["dictionary", "book"],
  InterfaceTip: ["lightbulb"],
  InterfaceTransform: ["arrow"],
  InterfaceUnorderedList: ["bulleted list"],
  InterfaceUp: ["chevron up"],
  InterfaceWarning: ["triangle", "alert"],
};

const IconographyTokens = ({ platform }) => {
  const icons = Object.entries(GDS).filter(([name]) => name.endsWith("Icon") && name !== "Icon");
  return (
    <>
      <div className="hide-section">Total: {icons.length}</div>

      <table>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Token name</th>
            <th>Value</th>
            <th>Keywords</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {icons.map(([name, Asset]) => {
            const tokenName = iconographyTransformTokenNameByPlatform(name, platform);
            const hint = {
              csharp: `<Image Source="{StaticResource ${tokenName}}" />`,
              web: `import { Icon, ${tokenName} } from '@grammarly/design-system'\n\n<Icon icon={${tokenName}} accessibilityLabel="Meaning of icon" />`,
              swift: `Images${tokenName}`,
            };

            const withoutSuffix = tokenName.replace(/Icon$/, "");
            const keywords = iconKeywords[withoutSuffix] == null ? [] : iconKeywords[withoutSuffix];
            const iconAsset = (
              <Flex
                bgColor={name.includes("Inverse") ? "neutral-gray-90" : undefined}
                padding={name.startsWith("Logo") ? 3 : undefined}
              >
                {/* enlarged to show texture */}
                <Asset height="2rem" width="auto" />
              </Flex>
            );

            return (
              <TokenValueFourColumn
                name={name}
                key={name}
                type="iconography"
                children1={<TokenName name={tokenName} />}
                children2={iconAsset}
                children3={
                  keywords.length > 0 && (
                    <Text as="p" variant="text-small" color="base-subdued">
                      {keywords.join(", ")}
                    </Text>
                  )
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
        </tbody>
      </table>
    </>
  );
};
