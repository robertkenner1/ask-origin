# Sticker

A Sticker displays a temporary or time-sensitive offer.

*A scalloped Sticker appears in a promotional email advertising a 50% discount.*

## Usage

Use a Sticker as an accent to offer a time-sensitive discount on Grammarly’s Pro plan. For further guidance about usage, [visit the Brand Vault](https://brand.grammarly.com/d/uR4A97A21vRU/brand-guidelines#/visual-language/plan-tags).

### Placement

The sticker should extend 30% of its vertical width beyond the image and 20% of its horizontal width beyond an image. ﻿When used in email, the sticker should always be displayed in the top-right corner of an image.

Do not rotate a Sticker.

!\[Diagram showing the correct spacing requirements of a Sticker when placed over an image.]\(/img/components/sticker\_space.svg)

*Stickers typically appear over a promotional image and extend beyond the image by 30% of its vertical width beyond the image and 20% of its horizontal width.*

### Color contrast

A contrast ratio of 3:1 is recommended between the background color and a Sticker so that the Sticker stands out and achieves the intended impact.

## Examples

### Default

By default, a Sticker appears in the `circle` variant at `medium` size.

```tsx
<Sticker><Sticker.Discount discount={50} /></Sticker>
```

### Variants

Use the `variant` prop to change a Sticker’s appearance between `circle` and `scallop`.

```tsx
<Flex gap={3} wrap>
  <Sticker variant="circle"><Sticker.Discount discount={50} /></Sticker>
  <Sticker variant="scallop"><Sticker.Discount discount={50} /></Sticker>
</Flex>
```

### Sizes

Stickers come in three sizes: `small`, `medium`, and `large`.

```tsx

  <Flex gap={3} wrap>
      <Sticker variant="scallop" size="small"><Sticker.Discount discount={50} /></Sticker>
      <Sticker variant="scallop"><Sticker.Discount discount={50} /></Sticker>
      <Sticker variant="scallop" size="large"><Sticker.Discount discount={50} /></Sticker>
  </Flex>
```

### Discount

Use the `discount` prop to set a whole number percentage between 10 and 90. Decimals, fractions, and single-digit discounts are not allowed.

```tsx
<Sticker variant="scallop"><Sticker.Discount discount={25} /></Sticker>
```

## Accessibility

A Sticker is treated as plain text and is accessible to screen readers.

## Writing

The only customizable text is the discount percentage. The value should be a whole number between 10% and 90%. Do not use decimals, fractions, or single-digit discounts. For more information about plans, visit the [Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarly-Style-Guide_suVxisx4).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Sticker component in JS.

```tsx
import { Sticker } from "@superhuman/origin";
```

## API

### Sticker props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | No | `'medium'` | Determines the size of a Sticker. |
| `variant` | `'circle' \| 'scallop'` | No | `'circle'` | Determines the shape of a Sticker. |

### Sticker.Discount props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `discount` | `number` | - | A whole number that specifies the discount percentage. |


## Related Components

- [Plan Tag](/components/plan-tag)
- [Tag](/components/tag)
