# Flex

Flex is a utility component to help achieve various flexible layouts with easy access to Origin tokens.

## Usage

Use when a flexbox layout is needed to create consistent spacing and arrangements within a UI.

To learn more about flexbox alignment:

* [Read the flexbox documentation on CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Try out the Flexbox Froggy game](https://flexboxfroggy.com/) for a bit of fun!

## Examples

### Direction

By default, items inside Flex will be rendered in a row, like the Buttons below. Use `direction="column"` to render contents in a column, as shown with the heading, description, and buttons. We do not allow `row-reverse` or `column-reverse` as options due to their [negative effects on accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns).

```tsx

  <Flex direction="column" gap={6}>
      <Heading variant="heading-medium" as="h2">Snippets</Heading>
      <Text as="p" variant="text-medium">Snippets are reusable phrases, sentences, and even whole paragraphs that you can easily insert into your text to save you time.</Text>
      <Flex gap={4}>
          <Button variant="secondary" text="Create snippet"/>
          <Button text="Create collection"/>
      </Flex> 
  </Flex>

```

### Gap

The `gap` property determines the spacing between children inside of Flex. For consistent spacing between both rows and columns, specify a single number, like `gap={4}`. For different spacing between rows and columns, specify an object, like `gap={row: 4, column: 8}`. The values for `gap` correspond to our spacing tokens, and work in increments of 4px. For example, a value of `gap={4}` will add 16px between each child.

```tsx

  <Flex
    width={350}
    borderColor="base-subdued"
    borderRadius={1}
    gap={8}
    direction="column"
    padding={3}
  >
      <Flex wrap gap={{row: 3, column: 2}}>
        <Button text="Break the ice" onClick={() => {}} variant="secondary"/>
        <Button text="Pose an interesting question" onClick={() => {}} variant="secondary"/>
        <Button text="Write a project progress report" onClick={() => {}} variant="secondary"/>
        <Button text="More" onClick={() => {}} variant="secondary"/>
      </Flex>

      <Flex wrap gap={2}>
        <Button text="Add a GIF from GIPHY" variant="secondary" onClick={() => {}} />
        <Button text="Add an image from Unsplash" variant="secondary" onClick={() => {}} />
        <Button text="G Drive" variant="secondary" onClick={() => {}} />
      </Flex>
  </Flex>


```

### Content layout

The `justify` and `align` properties determine how the children of Flex will be laid out. These properties are based on CSS flexbox.

`justify` will affect how items should be aligned on the main axis. If items are in a row, then this affects the horizontal alignment. If items are in a column, this affects the vertical alignment.

`align` defines how items should be aligned on the cross axis. If items are in a row, then this affects the vertical alignment. If items are in a column, this affects the horizontal alignment. `align-self` can be used to override this property for a single item within a flexbox.

To learn more about flexbox alignment:

* [Read the flexbox documentation on CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Try out the Flexbox Froggy game](https://flexboxfroggy.com/)

```tsx

function Example() {
const justifyContent = [
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];

const alignItems = ["start", "end", "center", "baseline", "stretch"];

return (

<Flex gap={{ row: 8, column: 6 }} justify="center" wrap>
{justifyContent.map(justifyOption =>
  alignItems.map(alignOption => (
    <Flex key={justifyOption + alignOption} direction="column" width={150} gap={2}>
      <Flex
        height={150}
        borderColor="base-subdued"
        justify={justifyOption}
        align={alignOption}
        gap={2}
      >
        <Flex bgColor="magenta-40" width={20} height={40} />
        <Flex bgColor="magenta-40" width={20} height={60} />
        <Flex bgColor="magenta-40" width={20} height={20} />
      </Flex>
      <Text as="p" variant="text-small">
        justify="{justifyOption}"
      </Text>
      <Text as="p" variant="text-small">
        align="{alignOption}"
      </Text>
    </Flex>
  )),
)}
</Flex>
); } 
```

### Wrapping

By default, Flex contents will not wrap onto a another line if they exceed their parent container. Specifying `wrap="true"` will force items to wrap onto new lines.

```tsx

  <Flex
    width={350}
    borderColor="base-subdued"
    borderRadius={1}
    gap={8}
    direction="column"
    padding={3}
  >
      <Flex direction="column" gap={2}>
          <Text variant="text-small" as="p">Without wrapping</Text>
          <Flex gap={{row: 3, column: 2}}>
              <Button text="Break the ice" onClick={() => {}} variant="secondary"/>
              <Button text="Pose an interesting question" onClick={() => {}} variant="secondary"/>
              <Button text="Write a project progress report" onClick={() => {}} variant="secondary"/>
          </Flex>
      </Flex>
      <Flex direction="column" gap={2}>
          <Text variant="text-small" as="p">With wrapping</Text>
          <Flex wrap gap={2}>
              <Button text="Add a GIF from GIPHY" variant="secondary" onClick={() => {}} />
              <Button text="Add an image from Unsplash" variant="secondary" onClick={() => {}} />
              <Button text="G Drive" variant="secondary" onClick={() => {}} />
          </Flex>
      </Flex>
  </Flex>

```

### Sizing

The size of a Flex container can be adjusted using the `flex`, `width`, and `height`, properties.

`flex` determines how a flex container shrinks or grows. It is a shorthand for the flex-grow, flex-shrink, and flex-basis CSS properties. [Learn about the various options for `flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

`width` and `height` can be either a number, which will be converted to a pixel value, or a string, like `width="50%"`.

```tsx

  <Flex direction="column" gap={6}>
      <Heading variant="heading-medium" as="h2">Snippets</Heading>
      <Text as="p" variant="text-medium">
          Snippets are reusable phrases, sentences, and even whole paragraphs that you
          can easily insert into your text to save you time.
      </Text>
      <Flex gap={4} flex="1 1 auto" justify="end">
          <Button variant="secondary" text="Create snippet" />
          <Button text="Create collection" />
      </Flex>
      <Flex height={150}>
        <Flex borderColor="base-subdued" width="25%">
          Column 1 at 25%
        </Flex>
        <Flex borderColor="base-subdued" flex="1 1 auto">
          Column 2 will grow
        </Flex>
        <Flex borderColor="base-subdued">
          Column 3  
        </Flex>
      </Flex>
  </Flex>

```

### Margin and padding

Margin and padding can be set based on our available [spacing tokens](/tokens/space). The scale is in 4px increments, so a value of 8 is equal to 32px.

`margin` can be used to set the same margin on all sides, or `marginLeft`, `marginRight`, `marginTop`, or `marginBottom` can be used to set specific margins. Margins can also be a negative version of a spacing token, which can help with alignment.

`padding` can be used to set the same padding on all sides, or `paddingLeft`, `paddingRight`, `paddingTop`, or `paddingBottom` can be used to set specific paddings.

```tsx

  <Flex
    gap={4}
    direction="column"
    padding={4}
    width={500}
    borderColor="base-subdued"
    borderRadius={2}
  >
    <Flex gap={2} align="center" marginLeft={-1}>
      <Icon icon={OutcomeCorrectnessIcon} size="medium" accessibilityLabel="Correctness Category" />
      <Text variant="text-small" as="p">Correctness</Text>
      <Text variant="text-small" as="p">‧</Text>
      <Text variant="text-small" as="p">Replace the word</Text>
      <IconButton
        accessibilityLabel="Details about this correction"
        icon={InterfaceInfoIcon}
        variant="tertiary"
        onClick={() => {}}
      />
    </Flex>
    <Text as="p" variant="text-medium">
      Have a <Text as="span" variant="text-medium" weight="bold">great</Text> day today!
    </Text>
    <Flex marginLeft={-2} gap={2}>
      <Button text="Dismiss" variant="tertiary" onClick={() => {}} />
    </Flex>
  </Flex>

```

### Background and borders

Flex containers can have a background color (`bgColor`) as well as a border (using `borderColor` and `borderRadius`).

```tsx

  <Flex gap={12} wrap>
    <Flex direction="column" gap={2}>
      <Flex
        width={75}
        height={75}
        bgColor="background-brand-default"
        borderRadius={3}
      >
      </Flex>
      <Text as="p" variant="text-small">
        bgColor="background-brand-default"
      </Text>
      <Text as="p" variant="text-small">
        {"borderRadius={3}"}
      </Text>
    </Flex>
    <Flex direction="column" gap={2}>
      <Flex
        width={75}
        height={75}
        borderColor="base-subdued"
        borderRadius={1}
      >
      </Flex>
      <Text as="p" variant="text-small">
        borderColor="base-subdued"
      </Text>
      <Text as="p" variant="text-small">
        {"borderRadius={1}"}
      </Text>
    </Flex>
  </Flex>

```

### Text color

Use `color` to set a color for all text within a Flex container.

```tsx

  <Flex
    color="brand-default"
    borderColor="base-subdued"
    borderRadius={1}
    padding={4}
    direction="column"
    gap={2}
  >
    <Text as="p" variant="text-small">
      This text will pick up the color set within Flex.
    </Text>
    <Text as="p" variant="text-small" color="critical-default">
      The color can also be overridden within Text.
    </Text>
  </Flex>


```

## Accessibility

By default, a Flex container is rendered as a "div". However, the `as` and `accessibilityLabel` properties should be used to create a more semantic UI by changing the underlying element that gets rendered and adding an appropriate label.

```tsx

  <Flex as="nav" accessibilityLabel="Site map" direction="column" gap={6}>
      <Text as="p" variant="text-medium" bold>Get Grammarly</Text>
      <Flex gap={2} direction="column">
          <a href="#">Grammarly for Desktop</a>
          <a href="#">Grammarly for Windows</a>
          <a href="#">Grammarly for Mac</a>
          <a href="#">Grammarly for Chrome</a>
          <a href="#">Grammarly for Mobile</a>
          <a href="#">Grammarly for Google Docs</a>
      </Flex>
  </Flex>

```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Flex component in JS.

```tsx
import { Flex } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for the contents of the Flex container. |
| `accessibilityLabel` | `string` | - | Used to add an aria-label to the container. |
| `align` | `'start' | 'end' | 'center' | 'baseline' | 'stretch'` | stretch | Defines how items should be aligned on the cross-axis by setting align-items. If items are in a row, then this affects the vertical alignment. If items are in a column, this affects the horizontal alignment. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items). |
| `as` | `'article' | 'aside' | 'caption' | 'div' | 'figcaption' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary'` | div | Changes the underlying HTML element when needed for semantics and accessibility. By default, Flex containers are rendered as a \`div\`. |
| `bgColor` | `'blue-0' | 'blue-10' | 'blue-20' | 'blue-30' | … | 'background-success-default' | 'background-success-subdued' | 'background-warning-default' | 'background-warning-subdued'` | - | Defines the background color of the container, based on our [core or semantic colors](../tokens/color). |
| `borderColor` | `'base-default' | 'base-subdued' | 'base-inverse'` | - | Defines the color of the border, based on our [semantic border colors](../tokens/color). |
| `borderRadius` | `0.5 | 1 | 2 | 3` | - | Defines the border radius, based on our available [border radius tokens](../tokens). |
| `color` | `'addition-default' | 'base-default' | 'base-subdued' | 'base-inverse' | 'brand-default' | 'business-default' | 'clarity-default' | 'correctness-default' | 'critical-default' | 'dark-default' | 'deletion-default' | 'delivery-default' | 'engagement-default' | 'light-default' | 'plagiarism-default' | 'premium-default' | 'success-default' | 'warning-default'` | - | Defines the color of the text within the container, based on our [semantic text colors](../tokens/color). |
| `direction` | `'row' | 'column'` | row | Whether items should be placed in a row or a column. |
| `elevation` | `'low' | 'medium' | 'high'` | - | Utilize elevation tokens to indicate elevation of the container. Adds both border and box-shadow. |
| `flex` | `string` | - | A shorthand property that sets how a flex item will grow or shrink to fit the space available in its flex container. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex). |
| `gap` | `Gap | {row?: Gap, column?: Gap}, where Gap is one of 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20` | 0 | Defines the spacing between items. Can be set to different values for row or columns. |
| `height` | `number | string` | - | Defines the height of the container. Can be a number for pixels or a string for percentages, like “75%”. |
| `justify` | `'start' | 'end' | 'center' | 'space-between' | 'space=around' | 'space-evenly'` | start | Defines how items should be aligned on the main axis by setting [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content). If items are in a row, then this affects the horizontal alignment. If items are in a column, this affects the vertical alignment. |
| `margin, marginLeft, marginTop, marginBottom, marginRight` | `-20 | -18 | -16 | -14 | -12 | -10 | -8 | -6 | -5 | -4 | -3 | -2 | -1 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | 0 | Applies margin to the container. The options are based on our available [spacing tokens](../tokens/space). The scale is in 4px increments - a value of 8 is equal to a 32px margin. |
| `padding, paddingLeft, paddingTop, paddingBottom, paddingRight` | ` 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | 0 | Applies padding within the container. The options are based on our available [spacing tokens](../tokens/space). The scale is in 4px increments—a value of 8 is equal to 32px padding. |
| `width` | `number | string` | - | Defines the width of the container. Can be a number for pixels or a string for percentages, like “75%”. |
| `wrap` | `boolean` | - | Defines whether or not the contents should wrap onto another line when the container width is reached. |


## Related components

- [Box](/components/box)
