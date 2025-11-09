import * as React from "react";
import * as AllExports from "@grammarly/design-system";
import Tippy, { useSingleton } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import CodeBlock from "@theme/CodeBlock";
import { Flex } from "@grammarly/design-system";

/**
 * TODO: GDS-766 - Filtering out the updated logos until v7 gets release.
 * 
 */
const v7Logos = [
  "LogoCodaMarkColorPrimaryIcon",
  "LogoCodaMarkColorSecondaryIcon",
  "LogoCodaMarkMonoInverseIcon",
  "LogoCodaMarkMonoLightIcon",
  "LogoCodaTypeColorPrimaryIcon",
  "LogoCodaTypeColorSecondaryIcon",
  "LogoCodaTypeMonoInverseIcon",
  "LogoCodaTypeMonoLightIcon",
  "LogoGrammarlyHorizontalColorPrimaryIcon",
  "LogoMailMarkMonoInverseIcon",
  "LogoMailMarkMonoLightIcon",
  "LogoSuperhumanHorizontalColorPrimaryIcon",
  "LogoSuperhumanHorizontalMonoInverseIcon",
  "LogoSuperhumanHorizontalMonoLightIcon",
  "LogoSuperhumanMarkColorPrimaryIcon",
  "LogoSuperhumanMarkMonoInverseIcon",
  "LogoSuperhumanMarkMonoLightIcon",
  "LogoSuperhumanStackedColorPrimaryIcon",
  "LogoSuperhumanStackedMonoInverseIcon",
  "LogoSuperhumanStackedMonoLightIcon",
  "LogoSuperhumanTypeMonoInverseIcon",
  "LogoSuperhumanTypeMonoLightIcon",
  "LogoGrammarlyHorizontalMonoInverseIcon",
  "LogoGrammarlyHorizontalMonoLightIcon",
  "LogoGrammarlyMarkColorPrimaryIcon",
  "LogoGrammarlyMarkMonoInverseIcon",
  "LogoGrammarlyMarkMonoLightIcon",
  "LogoGrammarlyStackedColorPrimaryIcon",
  "LogoGrammarlyStackedMonoInverseIcon",
  "LogoGrammarlyStackedMonoLightIcon",
];

const IconGrid = ({ group }) => {
  const [source, target] = useSingleton();
  const groupAssets = Object.entries(AllExports).filter(
    ([name],) => name.endsWith("Icon") && name.toLowerCase().startsWith(group),
  ).filter(([icon]) => {
    // Filters out v7 logos
    if(!group === "logo") return;
    return !v7Logos.includes(icon)
  })

  return (
    <div className="icon-grid">
      <Tippy
        singleton={source}
        delay={100}
        interactive={true}
        interactiveBorder={20}
        className="icon-tooltip"
      />
      {groupAssets.map(([name, Asset]) => {
        if (!name.toLowerCase().startsWith(group)) return null;

        const appKitName = name.toLowerCase().replace(group, "");
        let tokenName = "gds-icon" + name.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
        tokenName = tokenName.replace("g-g-o", "ggo");

        const shortName = name.toLowerCase().replace(group, "").replace(/icon$/i, "");
        const shortNameWithDashes = tokenName.replace(`gds-icon-${group}-`, "");

        const isInvertedIcon = shortName.indexOf("inverse") !== -1;
        const isLockupIcon = shortName.indexOf("lockup") !== -1;

        return (
          <Tippy
            key={name}
            singleton={target}
            content={
              <>
                <p>React:</p>
                <CodeBlock
                  language="tsx"
                  children={[
                    `import { Icon, ${name} } from '@grammarly/design-system'`,
                    `<Icon icon={${name}} accessibilityLabel="Meaning of icon" />`,
                  ].join("\n\n")}
                />
                {/* FIXME: bring back swift tokens once present in v6 */}
                {/* <p>AppKit:</p>
                  <CodeBlock language="ts" children={`Images.${group}(.${appKitName})`} />

                  <p>WPF:</p>
                  <CodeBlock
                    language="xml"
                    children={`<Image Source="{StaticResource ${tokenName}}" />`}
                  /> */}
              </>
            }
          >
            <div
              className="icon-tile"
              onClick={() =>
                navigator.clipboard.writeText(
                  `import { Icon, ${name} } from '@grammarly/design-system'`,
                )
              }
            >
              <Flex bgColor={isInvertedIcon && "neutral-gray-90"} padding={3}>
                <Asset width={isLockupIcon ? "6rem" : "3rem"} height="3rem" />
              </Flex>
              <p className="icon-label">{shortNameWithDashes}</p>
            </div>
          </Tippy>
        );
      })}
    </div>
  );
};

export default IconGrid;
