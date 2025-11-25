# Box

Box is a primitive component with easy access to Origin tokens.

## Usage

Use when a UI would benefit from Origin tokens like colors, elevation, or spacing.

## Examples

### Background and borders

Box containers can have a background color (`bgColor`) as well as a border (using `borderColor` and `borderRadius`).

```tsx

  <Flex gap={12}>
    <Flex direction="column" gap={2}>
      <Box
        width={75}
        height={75}
        bgColor="background-brand-default"
        borderRadius={3}
      >
      </Box>
      <Text as="p" variant="text-small">
        bgColor="background-brand-default"
      </Text>
      <Text as="p" variant="text-small">
        {"borderRadius={3}"}
      </Text>
    </Flex>
    <Flex direction="column" gap={2}>
      <Box
        width={75}
        height={75}
        borderColor="base-subdued"
        borderRadius={1}
      >
      </Box>
      <Text as="p" variant="text-small">
        borderColor="base-subdued"
      </Text>
      <Text as="p" variant="text-small">
        {"borderRadius={1}"}
      </Text>
    </Flex>
  </Flex>

```

## Accessibility

By default, a Box container is rendered as a "div". However, the `as` and `accessibilityLabel` properties can be used to create a more semantic UI by changing the underlying element that gets rendered and adding an appropriate label.

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Box component in JS.

```tsx
import { Box } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for the contents of the Box container. |
| `accessibilityLabel` | `string` | - | Used to add an aria-label to the container. |
| `as` | `'article' | 'aside' | 'caption' | 'div' | 'figcaption' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary'` | div | Changes the underlying HTML element when needed for semantics and accessibility. |
| `bgColor` | `'blue-0' | 'blue-10' | 'blue-20' | 'blue-30' | … | 'background-success-default' | 'background-success-subdued' | 'background-warning-default' | 'background-warning-subdued'` | - | Defines the background color of the container, based on our [core or semantic colors](/foundations/tokens/#color). |
| `borderColor` | `'base-default' | 'base-subdued' | 'base-inverse'` | - | Defines the color of the border, based on our [semantic border colors](/foundations/tokens/#semantic_color__Color.Border.Base_default). |
| `borderRadius` | `0.5 | 1 | 2 | 3` | - | Defines the border radius, based on our available [border radius tokens](/foundations/tokens/#border-radius). |
| `color` | `'addition-default' | 'base-default' | 'base-subdued' | 'base-inverse' | 'brand-default' | 'business-default' | 'clarity-default' | 'correctness-default' | 'critical-default' | 'dark-default' | 'deletion-default' | 'delivery-default' | 'engagement-default' | 'light-default' | 'plagiarism-default' | 'premium-default' | 'success-default' | 'warning-default'` | - | Defines the color of the text within the container, based on our [semantic text colors](/foundations/tokens/#semantic_color__Color.Text.Addition.Default). |
| `elevation` | `'low' | 'medium' | 'high'` | - | Utilize elevation tokens to indicate elevation of the container. Adds both border and box-shadow. |
| `height` | `number | string` | - | Defines the height of the container. Can be a number for pixels or a string for percentages, like “75%”. |
| `margin, marginLeft, marginTop, marginBottom, marginRight` | `-20 | -18 | -16 | -14 | -12 | -10 | -8 | -6 | -5 | -4 | -3 | -2 | -1 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | 0 | Applies margin to the container. The options are based on our available [spacing tokens](//foundations/tokens/#space). The scale is in 4px increments - a value of 8 is equal to a 32px margin. |
| `padding, paddingLeft, paddingTop, paddingBottom, paddingRight` | ` 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | 0 | Applies padding within the container. The options are based on our available [spacing tokens](//foundations/tokens/#space). The scale is in 4px increments—a value of 8 is equal to 32px padding. |
| `width` | `number | string` | - | Defines the width of the container. Can be a number for pixels or a string for percentages, like “75%”. |


## Related components

- [Flex](/components/flex)
