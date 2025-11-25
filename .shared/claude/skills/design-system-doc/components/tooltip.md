# Tooltip

A Tooltip displays short, informative text when a user hovers over or focuses on an element.

## Usage

Use when a short, text-only, inline description of an element's purpose is needed. [Learn how to write effective Tooltips](/components/tooltip#writing).

Because they are often used to describe an IconButton's purpose, [Tooltips are automatically built into the IconButton component](/components/icon-button#primary).

**Do not use when:**

- A user needs to take action or advance through steps. Instead, use a [Popover](/components/popover).
- An image or long, descriptive text is required. Instead, use a [Popover](/components/popover).
- The goal is to focus a user's attention on the content in a layer. Instead, use a [Modal](/components/modal).
- The content repeats visible UI text, such as a label on a [Button](/components/button).

### macOS, Windows, iOS, and Android

macOS, Windows, iOS, and Android use a native Tooltip, which behaves according to the rules set by the operating system. The design on these platforms does not need to match the Web component, but you can use design system tokens to style it. [View the design tokens](/tokens).

## Anatomy

Anatomy diagram of a Tooltip

1. Content
2. Keyboard shortcut (optional)
3. Pointer

## Examples

### Variants

| Example | Variant |
| --- | --- |
| Default Tooltip | Default |
| Tooltip with keyboard shortcut | With a keyboard shortcut |

## Behavior

### Position

- By default, a Tooltip appears above the element that it's paired with.
- If there isn't enough space above an element to accommodate a Tooltip, it will automatically display in another available position. Position priority follows this order: top, right, bottom, left.
- The pointer is always centered on an element and touches its edge.

#### Example positions

The bounding box in each example represents the viewport boundary.

Hover over each icon to see the position of the Tooltip.
