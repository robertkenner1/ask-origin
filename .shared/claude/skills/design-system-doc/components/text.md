# Text

Text is a utility component used to display various types of text.

The body content of a Modal uses the Text component to inform a user what happens when they remove
all of their accounts.

## Usage

Use when plain text is displayed to a user. Some common use cases include:

* Instructions or long-form text
* Text explaining required and critical tasks
* Body text in a Modal

**Do not use when:**

* The text is meant to be a heading or title. Instead, use a [Heading](/components/heading).
* The text is meant to be interactive or allow a user to take an action. Instead, use a [Button](/components/button) or [Link](/components/link).
* The text is meant to visually classify or focus attention on an element. Instead, use a [Tag](/components/tag).

## Examples

### Semantic tag

A semantic tag is required and assigned with the `as` prop. By default, text appears in the `text-medium` typography variant.

```tsx

<Flex direction="column" gap={4}>
<Text as="span">This is a span.</Text>
<Text as="p">This is a paragraph that includes <Text as="strong">strong text</Text>.</Text>
</Flex>

```

### Variants

Use the `variant` prop to adjust the font size of a Text component. [Learn about information hierarchy](#information-hierarchy).

```tsx

<Flex direction="column" gap={1}>
<Text as="small" variant="text-xxsmall">Eyebrow text</Text>
<Heading as="h1" variant="heading-large">Heading</Heading>
<Text as="p" variant="text-large">This is a paragraph of large text that includes <Text as="strong" variant="text-large">strong text</Text>, too.</Text>
</Flex>

```

### Color

Use the `color` prop to assign a color from the semantic color palette to the text. [View the semantic color palette](/tokens/color).

```tsx

<Flex direction="column" gap={4}>
<Text as="p" color="base-subdued">base-subdued</Text>
<Text as="p" color="critical-default">critical-default</Text>
</Flex>

```

### Style

* Adjust the font weight by using the `weight` prop in either `medium`, `semibold`, or `bold`
* Add italics with the `italic` prop
* Apply a strikethrough with the `decoration` prop

```tsx

<Flex direction="column" gap={4}>
<Text as="p">normal</Text>
<Text as="p" weight="medium">medium</Text>
<Text as="p" weight="semibold">semibold</Text>
<Text as="p" weight="bold">bold</Text>
<Text as="p" italic>italic</Text>
<Text as="p" decoration="line-through">strikethrough</Text>
</Flex>

```

### Alignment

Use the `align` prop to set the text’s horizontal alignment. [Learn about text-align at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).

```tsx

<Flex direction="column" gap={4}>
<Text as="p">start</Text>
<Text as="p" align="center">
  center
</Text>
<Text as="p" align="end">
  end
</Text>
<Text as="p" align="justify">
  justify—The design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
  The design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
</Text>
</Flex>

```

### Margins

You can control margins around Text, too. Use the props for `margin` (all sides), `marginBottom`, `marginTop`, `marginRight`, or `marginLeft` with one of the [spacing tokens](/tokens/space).

```tsx

<Flex direction="column" gap={4} align="start">
<Flex bgColor="magenta-10">
  <Text as="p">
    This paragraph has no margin.
  </Text>
</Flex>
<Flex bgColor="magenta-10">
  <Text as="p" marginBottom={4}>
    This paragraph has a bottom margin.
  </Text>
</Flex>
<Flex bgColor="magenta-10">
  <Text as="p" marginLeft={4}>
    This paragraph has a left margin.
  </Text>
</Flex>
</Flex>

```

## Best practices

### Color

* Use `text.base.default` for most text, including Headings and body text.
* For text that is secondary in importance or visual hierarchy, you can use `text.base.subdued`.
* When applying other colors to text, use a semantic color that visually aligns with the text's functional meaning in context. For additional guidance, [browse the semantic color palette](/tokens/color) and [learn about color combinations that pass contrast](/foundations/color#combining-colors-and-accessibility).

### Style

Use styles in moderation.

Bolding everything dilutes the emphasis given to individual elements—when all the text is emphasized, nothing is emphasized. Additionally, large sections of italicized text may be challenging to read for people with disabilities like dyslexia.

* Use **bold** to add emphasis or indicate changes to text.
* Use *italics* to signify an example.
* Use ~strikethrough~ to indicate changes, such as text to be removed.
* Use a block quote to reference a long passage of text.

### Information hierarchy

Heading defaults to `heading-medium`, and Text defaults to `text-medium`, so it’s likely you will customize typography using the `variant` prop. To make sure that visual hierarchy aligns with information hierarchy:

* Choose a Heading’s semantic tag based only on its position in the page hierarchy.
* Use a smaller font size in Text compared to its related Heading.
* Larger text should appear before, be more important than, and sit at a higher level in the page’s hierarchy than smaller text. A style, such as bold font weight, can also indicate importance.
* Smaller text should follow, be less important than, and sit at a lower level in the page’s hierarchy than larger text.
* In rare cases, smaller text can appear above larger text. For example, an eyebrow text element is a short phrase meant to set context without overwhelming the more important Heading below it.

!\[Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.]\(/img/components/type-heading-hierarchy.svg)

Headings for “Profile” and “Email preferences” have more emphasis than the text underneath them.

### Truncation

Truncated text should be avoided whenever possible, as it prevents the user from getting the full context of a piece of text. However, if necessary, `maxLines` can be used to specify how many lines of text are visible before an ellipsis is added and the text is truncated.

```tsx

<Flex direction="column" gap={4} width="25%">
<Text as="p" maxLines={1}>The quick brown fox jumps over the lazy dog. And the quicker arctic fox jumps over the brown fox.</Text>
<Text as="p" maxLines={2}>The quick brown fox jumps over the lazy dog. And the quicker arctic fox jumps over the brown fox.</Text>
<Text as="p" maxLines={3}>The quick brown fox jumps over the lazy dog. And the quicker arctic fox jumps over the brown fox.</Text>
<Text as="p" maxLines={4}>The quick brown fox jumps over the lazy dog. And the quicker arctic fox jumps over the brown fox.</Text>
</Flex>

```

## Accessibility

The `as` property is required because it provides semantic meaning for sections of text and makes it easier to navigate with assistive technology. For example, a user can quickly jump between paragraphs using a screen reader.

### Color

Always check that text passes a contrast ratio of 4.5:1 compared to the background color. [Learn about color combinations that pass contrast](/foundations/color#combining-colors-and-accessibility).

### Nesting

* `p` tags can be nested inside of `span` tags and vice versa.
* `small`, `strong`, and `abbr` tags can be nested inside any other HTML element, including `p` and `span` tags.
* `pre` tags can contain any other HTML element, but they cannot be nested inside another HTML element.
* `legend` tags can be included only inside of `fieldset` elements.

These are the basic rules for nesting these tags. Consult the [HTML documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for additional exceptions and caveats.

## Writing

The Text component covers many use cases, including blog posts, instructional content, and beyond. Depending on what you’re writing, you may need guidance from:

* Origin Design System for in-product content
  * Writing for specific components and patterns, such as [body content in a Modal](/components/modal/#body) or [instructions for a Form](/patterns/forms#writing-2)
  * General resources for Content Design, including [Voice and Tone](/content/voice-and-tone), [Terminology](/content/terminology), and [Style](/content/style/)
* The [Superhuman Company Brand Style Guide](https://coda.io/d/Superhuman-Style-Guide_dNw1zZnMEND/Superhuman-Copy-Style-Guide_suVxisx4#_luGMEq6C) for writing outside the product
  * Ads, emails, or landing pages
  * Blog posts and social media
  * Support articles

The Company Brand Style Guide also includes resources about inclusive language and a broader word list than what's in GDS. If you’ve checked both resources and can’t find the information you need, contact a member of the Content Design team via [#ama-content-design on Slack](https://grammarly.slack.com/archives/C02LBAV6JDP).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the fonts (if not already provided in your repository).

   * [Learn more about loading fonts and performance impacts](/getting-started/engineers/web#optional-fonts)

```css
@import "@superhuman/origin/dist/fonts.css";
```

3. Import the Text component in JS.

```tsx
import { Text } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The text that is displayed. |
| `color` | `string` | - | Applies a text color from the [semantic color palette](/foundations/tokens/#semantic-color). Example: \`base-subdued\` results in \`--color-text-base-subdued\`. |
| `italic` | `boolean` | - | When true, styles the text in italics. |
| `margin, marginLeft, marginRight, marginTop, marginBottom` | `-20 | -18 | -16 | -14 | -12 | -10 | -8 | -6 | -5 | -4 | -3 | -2 | -1 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | 0 | Applies margin to the text. The options are based on our available [spacing tokens](/foundations/tokens?current-os=web#space). The scale is in 4px increments—a value of 8 is a 32px margin. |


## Related components

- [Button](/components/button)
- [Heading](/components/heading)
- [Tag](/components/tag)
