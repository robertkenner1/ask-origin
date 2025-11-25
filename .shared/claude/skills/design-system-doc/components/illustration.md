# Illustration

The Illustration component is a container that can display an illustration from the Illustration library and
manipulate it with properties. [View the Illustration library](/foundations/illustrations).

## Best practices

* Use illustrations for their intended purposes. For example, only use empty state illustrations for scenarios that involve an empty state.
* Use titles, headings, links, captions, or other text content to provide context about the experience to a user since illustrations are typically decorative.

## Examples

### Size

Illustrations are provided in `small` (32x32), `medium` (56x56), `large` (80x80), and `xlarge` (96x96) sizes. Size `medium` is the default.

If you need an illustration of a size larger than the Illustration component supports, contact the Design System team in the [#ask-origin-design-system](https://grammarly.enterprise.slack.com/archives/C03MNHYDT5E) Slack channel.

```tsx

<Flex gap={6}>
  <Illustration type="empty-birding" size="small" />
  <Illustration type="empty-birding"  />
  <Illustration type="empty-birding" size="large" />
  <Illustration type="empty-birding" size="xlarge" />
</Flex>
```

### Colors modes

SVG illustrations use a mix of [core color tokens](/tokens/color) tokens and [semantic color tokens](/tokens/color) to allow illustrations to display properly when switching between light and dark modes.

PDF and XAML illustration formats have individual files saved to accommodate each mode.

Use the `colorMode` property if you need to override the color mode that the Illustration will render in. Otherwise, it will automatically pick up the color mode from the rest of the application or surface.

```tsx

function DarkModeToggle() {
  const { mode, updateMode } = useTheme();
  const onToggle = () => {
    updateMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <Switch
      isSelected={mode === "dark"}
      label="Dark mode"
      onChange={() => onToggle()}
    />
  );
}

render(
  <ThemeProvider>
    <Flex padding={8} bgColor="background-base-default" direction="column">
      <DarkModeToggle />
      <Flex gap={10} marginTop={10}>
        <Flex bgColor="background-base-subdued" padding={3} gap={6} direction="column" align="center">
          <Illustration type="empty-hat" colorMode="auto" size="large" />
          <Text as="p">Color mode: auto</Text>
        </Flex>
        <Flex bgColor="purple-90" padding={3} gap={6} direction="column" align="center">
          <Illustration type="empty-hat" colorMode="dark" size="large" />
          <Text as="p" color="light-default">Color mode: dark</Text>
        </Flex>
      </Flex>
    </Flex>
  </ThemeProvider>
)

```

### Empty states

[Empty states](/patterns/empty-state) commonly pair an Illustration with a Heading and Text to provide context about the experience, since Illustrations alone are typically decorative.

```tsx

    <Flex
      direction="column"
      padding={6}
      gap={4}
      align="center"
      justify="center"
      bgColor="background-base-default"
      borderColor="base-subdued"
      borderRadius="2"
    >
      <Illustration type="empty-work" colorMode="auto" accessibilityLabel="" />
      <Box>
        <Heading as="h3" variant="heading-small" align="center">
          Suggestions will appear here.
        </Heading>
        <Text as="p" variant="text-small" color="base-subdued" align="center">
          Let's get to work.
        </Text>
      </Box>
    </Flex>

```

### Types

All available Illustrations can be found in the [Illustration library](/foundations/illustrations).

## Accessibility

Provide an empty `accessibilityLabel` to hide decorative illustrations from assistive technologies.

If an illustration provides context, that means it is not decorative. In a success message, a meaningful `accessibilityLabel` is necessary for comprehension by people using a screen reader.

```tsx

    <Flex
      direction="column"
      padding={6}
      gap={4}
      align="center"
      justify="center"
      bgColor="background-base-default"
      borderColor="base-subdued"
      borderRadius="2"
    >
      <Illustration type="success-sand" colorMode="auto" accessibilityLabel="Success" />
      <Box>
        <Heading as="h3" variant="heading-small" align="center">
          There are no more suggestions.
        </Heading>
        <Text as="p" variant="text-small" color="base-subdued" align="center">
          Looking good!
        </Text>
      </Box>
    </Flex>

```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Illustration component in JS.

```tsx
import { Illustration } from "@superhuman/origin";

…

<Illustration type="success-cactus" size="large" />
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `Any illustration from @superhuman/origin` | - | Defines what illustration is displayed. Must be an illustration name from Origin Illustration library. [View the Illustration library](/foundations/iillustrations). |
| `accessibilityLabel` | `string` | - |  |
| `size` | `'small' | 'medium' | 'large' | 'xlarge'` | medium | Defines the size of the illustration. Small (32x32), Medium (56x56), Large (80x80) or XLarge (96x96) |


## Related

- [Icon](/components/icon)
- [Logo](/components/logo)
