# Plan Tag

A Plan Tag signals or classifies content related to one of Grammarly’s different plans—Free, Pro, Enterprise, or EDU.

*The Editor’s navigation panel in the web experience uses a Plan Tag to indicate a user’s current plan.*

## Usage

Use a Plan Tag when classifying or decorating content related to one of the different plan options, for example, when comparing features, functionality, or pricing. For further guidance about usage, [visit the Brand Vault](https://brand.grammarly.com/d/uR4A97A21vRU/brand-guidelines#/visual-language/plan-tags).

**Do not use when:**

* Visually classifying or focusing attention on an element unrelated to a plan. Instead, use a normal [Tag](/components/tag).
* The text is meant to be interactive or to allow a user to take an action. Instead, use a [Button](/components/button) or [Link](/components/link).

### Placement

A buffer of space should exist between a Plan Tag and images, text, or other graphics that could compromise its impact and visibility.

The minimum space between a Plan Tag and nearby elements like images, text, UI elements should equal half of the tag’s height. There may be exceptions to this rule in short landscape environments.

Do not rotate a Plan Tag.

!\[Diagram showing the minimum space requirements around a Plan Tag.]\(/img/components/plan\_tag\_space.svg)

*The "x" in these examples indicates a value that is half of the Plan Tag’s height. This value will change depending on the size of the Plan Tag displayed.*

### Color contrast

A contrast ratio of 3:1 is recommended between the background color and a Plan Tag so that the Plan Tag stands out and achieves the intended impact.

## Anatomy

!\[Anatomy diagram of a Plan Tag.]\(/img/components/plan\_tag\_anatomy.svg)

Brand shapeIcon (Pro only)Label

## Examples

### Default

By default, a Plan Tag appears in the `free` variant at `medium` size.

```tsx
<PlanTag/>
```

### Variants

For each plan, there is a corresponding variant. Different colors are assigned to each for a reason, and they must be consistent. The text is not customizable.

The Plan Tag for Pro also includes a single **Star** Icon to highlight the value of this specific plan.

```tsx
<Flex gap={{row: 8, column: 4}} wrap>
    <PlanTag/>
  <PlanTag variant="business"/>
  <PlanTag variant="pro"/>
  <PlanTag variant="premium"/>
  <PlanTag variant="enterprise"/>
  <PlanTag variant="edu"/>
</Flex>
```

### Sizes

Plan Tags are available in four sizes: `xsmall` (22px high), `small` (32px high), `medium` (48px high), and `large` (72px high).

```tsx
<Flex gap={3} wrap>
  <PlanTag size="xsmall" variant="pro"/>
  <PlanTag size="small" variant="pro"/>
  <PlanTag size="medium" variant="pro"/>
  <PlanTag size="large" variant="pro"/>
</Flex>
```

## Behavior

A user may confuse a Plan Tag for an interactive component, so be careful about placing it where you might typically find a [Button](/components/button).

## Accessibility

### Title

By default, each variant has an accessibility title that matches the name of the plan—“Free,” “Pro,” or “Enterprise.” The `title` prop can be used to add extra context, for instance when labeling something as a “Pro feature.”

```tsx
<PlanTag variant="pro" title="Pro Feature"/>
```

### Icon

The **Star** Icon is hidden from screen readers and treated as decorative.

## Writing

The visible text in a Plan Tag is not customizable. For more information about plan names, visit the [Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarly-Style-Guide_suVxisx4).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Plan Tag component in JS.

```tsx
import { PlanTag } from "@superhuman/origin";
```

## API

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large'` | No | `'medium'` | Determines the size of a Plan Tag. |
| `title` | `string` | No | Based on variant | Used to create a more specific accessibility title for the Plan Tag. Default value is "Business", "Free", "Premium", "Pro", "Enterprise", or "EDU" based on variant. |
| `variant` | `'business' \| 'free' \| 'premium' \| 'pro' \| 'enterprise' \| 'edu'` | No | `'free'` | Styles a Plan Tag to indicate one of Grammarly's plans—Free, Pro, EDU, or Enterprise. |

## Related Components

- [Button](/components/button)
- [Link](/components/link)
- [Sticker](/components/sticker)
- [Tag](/components/tag)
