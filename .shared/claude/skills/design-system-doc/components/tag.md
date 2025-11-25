# Tag

A Tag labels, classifies, or draws attention to nearby elements.

Tags are used in a card to classify tones as on-brand or off-brand.

## Usage

Use when it’s helpful to visually classify or focus attention on an element. Tags can contribute to the visual noise on a screen, so use them in moderation.

**Do not use when:**

* The text is meant to be interactive or to allow a user to take an action. Instead, use a [Button](/components/button) or [Link](/components/link).
* Displaying numerical data next to a label or an Icon. Instead, use a [Badge](/components/badge).

## Anatomy

!\[Anatomy diagram of a Tag]\(/img/components/tag\_anatomy.svg)

LabelIcon start (optional)

## Examples

### Default

By default, a Tag appears in the neutral variant and only has text content inside it.

```tsx
<Tag label="Your rules" />
```

### Variants

Use the `variant` prop to change a Tag’s appearance based on your use case. Options include `brand`, `critical`, `deletion`, `neutral`, `premium`, `pro`, `success`, `tip`, and `warning`.

```tsx
<Flex gap={3} wrap>
  <Tag variant="neutral" label="Neutral" />
  <Tag variant="premium" label="Premium" />
  <Tag variant="pro" label="Pro" />
  <Tag variant="tip" label="Tip" />
  <Tag variant="success" label="Success" />
  <Tag variant="critical" label="Critical" />
  <Tag variant="warning" label="Warning" />
  <Tag variant="inverse" label="Inverse"/>
  <Tag variant="brand" label="Brand"/>
</Flex>
```

### With an Icon

Use the `iconStart` prop to display an Icon inside a Tag. [View the Iconography library](/foundations/iconography/).

```tsx
<Flex gap={3}>
  <Tag label="New goals" iconStart={InterfaceGoalsIcon}/>
  <Tag variant="success" label="Trending" iconStart={InterfaceInsightsIcon} />
</Flex>
```

#### Predefined Icons

The Premium, Pro, and tip variants have predefined Icons that are not customizable. To hide the Icon in these variants, use `showIcon={false}`.

```tsx
<Flex gap={3}>
  <Tag variant="premium" label="Premium"/>
  <Tag variant="premium" label="Premium" showIcon={false}/>
  <Tag variant="pro" label="Pro"/>
  <Tag variant="pro" label="Pro" showIcon={false}/>
  <Tag variant="tip" label="Tip"/>
  <Tag variant="tip" label="Tip" showIcon={false}/>
</Flex>
```

## Behavior

### Inline positioning

* A Tag appears near the element it highlights. Use `inline` to display the Tag inline with other elements, like a [Heading](/components/heading).
* A user may confuse a Tag for an interactive component, so be careful about placing it where you might typically find a [Button](/components/button).

```tsx

<Flex direction="column" gap={3}>
<Heading as="h2">
  Generative AI{' '}
  <Tag variant="warning" label="Beta" inline/>
</Heading>
<p>Brainstorm, write, and rewrite with Grammarly’s generative AI assistance.</p>
</Flex>
```

## Accessibility

A Tag is treated as plain text and is accessible to screen readers.

Content should be self-evident and clear. Color alone should not be used to communicate information, such as a success or failure state.

## Writing

A Tag should contain only one or two words, such as a keyword or metadata. Use sentence case.

**Do not use** end punctuation since a Tag is almost always a fragment.

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Tag component in JS.

```tsx
import { Tag } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Used for the content of a Tag. |
| `accessibilityLabel` | `string` | - | Describes the Tag when more context is needed outside of the \`label\`. |
| `iconStart` | `ReactNode | undefined` | - | Icon placed at the start of the Tag. Will not apply to Premium or Tip Tags. |
| `inline` | `boolean` | false | When true, Tag displays inline with other elements. |
| `showIcon` | `boolean` | true | Useful only for Premium and Tip variants. When false, removes the default Icon from the Tag. |


## Related components

- [Badge](/components/badge)
- [Button](/components/button)
- [Link](/components/link)
