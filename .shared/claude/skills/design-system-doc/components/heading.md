# Heading

Heading is a utility component that structures content on a page.

Headings structure information in the writing progress page. The h1 and page title “Writing
progress” appears in a larger size than the h2 “Weekly summary.”

## Usage

Use when structuring the hierarchy and organization of content on a page, such as when introducing a new section or topic.

**Do not use when:**

* The text lacks a specific structural function on the page. Instead, use [Text](/components/text).
* The text is meant to be interactive or allow a user to take an action. Instead, use a [Button](/components/button) or [Link](/components/link).
* The text is meant to visually classify or focus attention on a nearby element. Instead, use a [Tag](/components/tag).

## Examples

### Semantic tag

A semantic tag is required and assigned with the `as` prop. By default, every Heading level appears in the `heading-medium` typography variant.

```tsx

<Flex direction="column" gap={4}>
<Heading as="h1">Profile</Heading>
<Heading as="h2">Email preferences</Heading>
<Heading as="h2">About you</Heading>
</Flex>

```

### Variants

Use the `variant` prop to adjust the font size of Headings. The size of Headings should decrease as you descend in the page hierarchy to maintain a logical visual hierarchy. [Learn about information hierarchy](#information-hierarchy).

```tsx

<Flex direction="column" gap={4}>
<Heading as="h1" variant="heading-large">Profile</Heading>
<Heading as="h2" variant="heading-small">Email preferences</Heading>
<Heading as="h2" variant="heading-small">About you</Heading>
</Flex>

```

### Alignment

Use the `align` prop to set the Heading’s horizontal alignment. [Learn about text-align on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).

```tsx

<Flex direction="column" gap={4} borderColor="base-default" width="300px">
<Heading as="h3">start</Heading>
<Heading as="h3" align="center">
  center
</Heading>
<Heading as="h3" align="end">
  end
</Heading>
</Flex>

```

### Margins

You can control margins around Headings, too. Use the props for `margin` (all sides), `marginBottom`, `marginTop`, `marginRight`, or `marginLeft` with one of the [spacing tokens](/tokens/space).

```tsx

<Flex direction="column" gap={4} align="start">
<Flex bgColor="magenta-10">
  <Heading as="h3">
    No margin
  </Heading>
</Flex>
<Flex bgColor="magenta-10">
  <Heading as="h3" marginBottom={4}>
    Bottom margin
  </Heading>
</Flex>
<Flex bgColor="magenta-10">
  <Heading as="h3" marginLeft={4}>
    Left margin
  </Heading>
</Flex>
</Flex>

```

## Best practices

The Heading component can function as a page title or a heading for a section of content.

### Typography

By default, Headings use a bold font weight and `heading-medium` font size. Although the same sizes are available in both the Heading and Text components, they are not interchangeable. It is important, particularly for users accessing content via screen readers, that components and typography tokens are used only for their stated purposes. [View typography tokens](/foundations/typography).

Rather than use a Heading component to make non-Heading text appear more prominent, use a [Text](/components/text) component and alter the font size or apply a bold weight to achieve the same effect.

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

Truncated Headings should be avoided whenever possible, as it prevents the user from getting the full context of a piece of text. However, if necessary, `maxLines` can be used to specify how many lines of the Heading are visible before an ellipsis is added and the content is truncated.

```tsx

<Flex direction="column" gap={4} width="25%">
<Heading as="h2" maxLines={1} variant="heading-small">My Resume Edited Version - Final Final - 02-15-24</Heading>
<Heading as="h2" maxLines={2} variant="heading-small">My Resume Edited Version - Final Final - 02-15-24</Heading>
<Heading as="h2" maxLines={3} variant="heading-small">My Resume Edited Version - Final Final - 02-15-24</Heading>
</Flex>

```

## Accessibility

Headings must use one of these semantic tags: `<code />`. There should be only one `h1` on a page.

Progress through the levels in hierarchical order from most to least important without skipping any. Use a Heading based on its level in the page hierarchy rather than on its size.

In general, follow this structure:

* Use `h1` for the page title.
* Use `h2` for the most important sections of a page.
* Use `h3` and `h4` Headings to divide the content within an `h2` Heading if needed.

:::tip Continue learning
[Watch an implementation without Headings on YouTube](https://www.youtube.com/watch?v=xaK6rlzhqHc)
:::

When it makes sense to start with something other than `h1`, it’s OK to progress nonsequentially. For example, this hierarchy starts with `h2` and is still well structured:

```
    h2 = main menu
h1 = title of an article
    h2 = subheading in the content of the article
        h3 = subheading of the h2
            h4 = subheading of the h3
            h4 = subheading of the h3
        h3 = subheading of the h2
    h2 = subheading in the content of the article
    h2 = Related articles (a row of tiles)
    h2 = Contact us (in the footer)
        h3 = Address (the address information)
        h3 = Follow us (social media links)`
```

## Writing

A heading’s purpose is to describe a section of related content. Headings often appear in Modals, settings menus, and wherever a page displays structured information.

### How to write and format headings in product UI

| Do | Don't |
|----|-------|
| Keep heading text short, descriptive, and scannable. | Do not use long text, such as an entire paragraph, as a heading. |
| Reduce internal and end punctuation when possible. Avoid colons and dashes. | Do not use end punctuation except for question marks (?) or an even more rare exclamation point (!). |
| Use sentence case. | Do not use Title Case or ALL CAPS. |


Headlines and post titles for ads, emails, landing pages, and blogs have other rules available as part of the [Superhuman Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarly-Style-Guide_suVxisx4).

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

3. Import the Heading component in JS.

```tsx
import { Heading } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The text that is displayed. |
| `color` | `string` | - | Applies a color from the [semantic color palette](/foundations/tokens/) to the Heading. |
| `margin, marginLeft, marginRight, marginTop, marginBottom` | `-20 | -18 | -16 | -14 | -12 | -10 | -8 | -6 | -5 | -4 | -3 | -2 | -1 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20  or string` | - | Applies margin to the Heading. The options are based on our available [spacing tokens](/foundations/tokens/#space). The scale is in 4px increments—a value of 8 is a 32px margin. |


## Related components

- [Button](/components/button)
- [Tag](/components/tag)
- [Text](/components/text)
