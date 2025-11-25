# Badge

A Badge displays numeric values, such as tallies that are calculated programmatically.

*These Badges show Premium suggestion tallies by category.*

## Usage

Use when displaying numerical data related to a paired element, such as a label or Icon.

**Do not use when** displaying text. Instead, use a [Tag](/components/tag).

| Do ✅ | Don't ❌ |
|-------|----------|
| Use numbers to add helpful data. | Do not display text in a Badge. |

## Examples

```tsx

<Flex gap={4}>
<Badge variant="neutral" count={10} getAriaLabelText={count => count + ' suggestions'}  />
<Badge
  count={5}
  variant="addition"
  specialCharBefore="+"
  getAriaLabelText={(count) => count + " new suggestions"}
/>
<Badge
  count={10}
  variant="critical"
  specialCharBefore="-"
  specialCharAfter="%"
  getAriaLabelText={(count) => count + " percent decrease in accuracy"}
/>
</Flex>
```

### Variants

Use the `variant` prop to change a Badge's appearance based on your use case. Options include `addition`, `business`, `clarity`, `correctness`, `critical`, `deletion`, `delivery`, `engagement`, `neutral`, `plagiarism`, `premium`, `pro`, `success`, and `warning`.

```tsx
<Flex gap={3} wrap>
  <Badge count={10} variant="addition" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="business" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="clarity" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="correctness" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="critical" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="deletion" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="delivery" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="engagement" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="neutral" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="plagiarism" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="premium" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="pro" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="success" getAriaLabelText={count => count + ' suggestions'} />
  <Badge count={10} variant="warning" getAriaLabelText={count => count + ' suggestions'} /> 
</Flex>
```

## Behavior

### Position

Position a Badge so that it’s clear to a user what it quantifies. Typical alignments include:

* Left of its related element
* Right of its related element
* Overlapping the top-right corner of its related element, ensuring that the underlying element remains clear

!\[Badge examples showing different placement options.]\(/img/components/badge\_alignment.svg)

### Maximum value

A Badge can have up to two digits, and the maximum tally is 99. A Badge displays 99+ for values after 99, then 1K+ for all values after 1,000.

Percentages can have up to three digits and a percentage sign (%).

!\[Examples of a Badge displaying maximum values in the browser extension.]\(/img/components/badge\_maximums.svg)

## Accessibility

For Badges that display 99+ or 1K+, make sure that screen readers read the displayed value followed by the actual count. For example, 99+ should be read as “99+ suggestions, 107 suggestions in total.”

```tsx

  'function Example() { const total = 107; return <Badge variant="neutral" count={total} getAriaLabelText={count => `${count} suggestions, ${total} suggestions in total`}  /> }'

```

## Writing

When you design, we recommend using the badge with its maximum value or character count to avoid potential breaks or readability issues.

### Accepted characters

A Badge should only contain numbers and the special characters +, -, %, or K.

```tsx

<Flex gap={4}>
  <Badge count={3000} variant="neutral" getAriaLabelText={count => count + ' suggestions, 3000 suggestions total'}  />
  <Badge count={5} variant="addition" specialCharBefore="+" getAriaLabelText={count => count + ' new suggestions'}  />
  <Badge count={10} variant="critical" specialCharBefore="-" specialCharAfter="%" getAriaLabelText={count => count + ' percent decrease in accuracy'}  />
</Flex>

```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Badge component in JS.

```tsx
import { Badge } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `count` | `number` | - | Defines the count to display with formatting rules. If \`specialCharBefore\` or \`specialCharAfter\` are passed, the raw count value will be displayed unformatted. |
| `getAriaLabelText` | `(count: string | number,specialCharBefore?: string,specialCharAfter?: string) => string` | - | Used to format aria label on the Badge component for screen reader announcement. If a special character is passed, the raw count value is passed as number and special character. Otherwise, the count will be formatted and passed as a string. |
| `specialCharAfter` | `'%'` | - | Defines a special character to display after the count. |
| `specialCharBefore` | `'+' | '-'` | - | Defines a special character to display before the count. |
| `variant` | `'neutral' | 'business' | 'addition' | 'clarity' | 'correctness' | 'critical' | 'deletion' | 'delivery' | 'engagement' | 'plagiarism' | 'premium' | 'pro' | 'success' | 'warning'` | neutral | Styles the Badge according to its use. |


## Related components

- [Icon](/components/icon)
- [Tag](/components/tag)
