# Iconography

Icons are used throughout our products to add clarity to the overall experience. Emoji that
communicate tone, UI icons indicating actions and navigation, and icons signalling an alert are
examples of how we use icons with the purpose of helping users achieve their goals.

Our icon sets are available through a dedicated Figma library of iconography.

In code, all icons can be used through our [Icon component](/components/icon).

## Adding new icons

If there are no icons in the system below that fit your need and you'd like to discuss an addition to the system, contact the Design System team in the [#ask-origin-design-system Slack channel](https://grammarly.slack.com/archives/C03MNHYDT5E).

## Available icons

Hover an icon to see the usage as the React-component, Swift-image or WPF-asset.

### Logos

Token names: gds-icon-logo-\[icon-name]

For more context see the [Superhuman Brand Vault](https://brand.grammarly.com/document/6#/visual-language/logo-2).

#### Usage

If you need to use a logo at a size larger than the [Icon component](/components/icon) allows, use the icon SVG directly.

```tsx

<LogoLockupColorHorizontalDefaultIcon style={{ height: 50, width: "auto" }} aria-label="Grammarly logo" aria-hidden={false} />

```

### Interface

Token names: gds-icon-interface-\[icon-name]

### Agents

Token names: gds-icon-agents-\[icon-name]

### Apps

Token names: gds-icon-apps-\[icon-name]

### Authorship

Token names: gds-icon-authorship-\[icon-name]

### Consent

Token names: gds-icon-consent-\[icon-name]

### Emoji

Token names: gds-icon-emoji-\[icon-name]

### Flag

Flag icons act as an additional visual indicator to support the label in language preference selectors.

* Flag icons may be used to identify a country. Always include alternate text with the icon for screen readers.
* Never use a flag icon alone to identify a language. Always pair flag icons with text that identifies both the country and language. (e.g., American English or British English).

Token names: gds-icon-flag-\[icon-name]

### Outcome

Token names: gds-icon-outcome-\[icon-name]

### Social

Token names: gds-icon-social-\[icon-name]

### Grammarly Button (deprecated)

Token names: gds-icon-g-button-\[icon-name]

### Grammarly GO (deprecated)

Token names: gds-icon-ggo-\[icon-name]
