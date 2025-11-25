# Icon

The Icon component is a container that can display any icon in the Iconography library and
manipulate them with properties. [View the Iconography library](/foundations/iconography).

## Best practices

* Use icons that are universally understood, such as print, help, and search.
* Use icons that help a user understand the content. The icon should not rely on the content to explain what it is.
* Avoid adding icons to titles, headings, links, and captions for decorative purposes.

## Examples

### Categories

```tsx

<Flex gap={4}>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" />
  <Icon icon={EmojiAdmiringIcon} accessibilityLabel="Admiring!" />
  <Icon icon={OutcomeStyleGuidePlaceholderIcon} accessibilityLabel="Styleguide"/>
  <Icon icon={InterfaceWarningIcon} accessibilityLabel="Warning" />
  <Icon icon={FlagAuIcon} accessibilityLabel="Australia" />
  <Icon icon={SocialGoogleIcon} accessibilityLabel="Google" />
</Flex>
```

### Size

Interface icons are provided in `small` (16x16), `medium` (20x20), `large` (24x24), `xlarge` (32x32), and `xxlarge` (40x40) sizes. Size `medium` is the default.

All other icons including emojis, flags, logos, and outcome icons are provided at the sizes they're intended to be used in design.

```tsx

<Flex gap={4}>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" size="small"/>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings"/>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" size="large"/>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" size="xlarge"/>
  <Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" size="xxlarge"/>
  <Icon icon={InterfaceKnowledgeHubIcon} accessibilityLabel="Settings" size="small"/>
  <Icon icon={InterfaceKnowledgeHubIcon} accessibilityLabel="Settings"/>
  <Icon icon={InterfaceKnowledgeHubIcon} accessibilityLabel="Settings" size="large"/>
  <Icon icon={InterfaceKnowledgeHubIcon} accessibilityLabel="Settings" size="xlarge"/>
  <Icon icon={InterfaceKnowledgeHubIcon} accessibilityLabel="Settings" size="xxlarge"/>
</Flex>
```

### Color

Icon uses the icon-specific token colors through the `variant` property. If you need an icon to match the color of surrounding text, use the `inherit` variant. [View the token colors](/tokens/color).

The default color of icons is `Color.Icon.Base.Default`. Only interface icons can be adjusted to different colors, as all other icons are provided with color already applied.

```tsx

<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px"}}>
  {["default", "brand", "business", "addition", "critical", "success", "deletion", "premium", "warning", "inherit"].map(variant => (
    <Flex gap={2} key={variant}>
      <Icon
        accessibilityLabel="Settings"
        icon={InterfaceSettingsIcon}
        variant={variant}
        size="large"
      />
      {variant}
    </Flex>
  ))}
  <Flex gap={2}>
    <Flex bgColor="background-neutral-default">
      <Icon
        accessibilityLabel="Settings"
        icon={InterfaceSettingsIcon}
        variant="inverse"
        size="large"
      />
    </Flex>
     inverse
  </Flex>
</div>
```

## Accessibility

Provide an empty `accessibilityLabel` to hide decorative Icon components from assistive technologies.

For example, the icon in a Button is decorative and should not be announced by a screen reader. The meaning of the Button's action should be included in the visible label. If you're using an Icon Button, the meaning should be made clear in the required Tooltip.

If an icon provides context, that means it is not decorative. In a warning message, a meaningful `accessibilityLabel` is necessary for comprehension by people using a screen reader.

```tsx

<Flex direction="column" gap={4}>
  <Flex gap={3}> 
    <Icon icon={InterfaceHomeIcon} accessibilityLabel="" size="large"/>
    <Text as="p">My Grammarly</Text>
  </Flex>
  <Flex gap={3}> 
    <Icon icon={InterfaceIgnoreIcon} accessibilityLabel="" size="large"/>
    <Text as="p">Trash</Text>
  </Flex>
  <Flex gap={3}> 
    <Icon icon={InterfaceUserIcon} accessibilityLabel="" size="large"/>
    <Text as="p">Account</Text>
  </Flex>
  <Flex align="center" gap={2} marginTop={2}>
    <Icon icon={InterfaceWarningIcon} accessibilityLabel="Warning: "/>
    <Text as="p" variant="text-small">Your account is out of sync</Text>
  </Flex>
</Flex>
```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Icon component and relevant icon in JS.

```tsx
import { Icon, InterfaceSettingsIcon } from "@superhuman/origin";

…

<Icon icon={InterfaceSettingsIcon} accessibilityLabel="Settings" />
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accessibilityLabel` | `string` | - |  |
| `icon` | `Any icon from @superhuman/origin` | - | Defines what icon is displayed. Must be an icon name from Origin Iconography tokens. [View the Iconography tokens](/foundations/iconography). |
| `size` | `'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'` | medium | Defines the size of the Icon (only applies to Interface icons). Small (16x16), Medium (20x20), Large (24x24), XLarge (32x32), and XXLarge (40x40) |
| `resourcePrefix` | `string` | - |  |
| `isDecorative` | `boolean` | - |  |


## Related

- [Badge](/components/badge)
- [Illustration](/components/illustration)
- [Logo](/components/logo)
