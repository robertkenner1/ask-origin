# Component conventions

Refer to the following guidelines whenever you're adding or updating a component.

## Prop API rules

### Positive vs. negative prop names

Prop names should be positive by default to avoid double negatives. For example, use `showTooltip`, with a default of `true`, instead of a negative name like `removeTooltip` and setting it to `false`, which creates a double-negative.

### Booleans vs. lists

Avoid booleans for related properties whenever possible. For example, instead of `isRowLayout` and `isColumnLayout`, use a declarative prop, like `layout: 'row' | 'column'`, which allows for better scalability and easier comprehension.

### Mirroring HTML naming

In general, aim to match the HTML property name instead of creating a new name. For example, instead of using `linesOfText` for a Textarea component, keep the naming consistent with the HTML element and use the name `rows`.

### Add a `ref` prop

The underlying, interactive elements of components should support being referenced through a [React `ref`](https://react.dev/learn/manipulating-the-dom-with-refs). This commonly applies to any inputs or buttons.

### Style and class names

We allow `style` and `className` properties to be passed down to components in order to support experimentation and minor customizations.

### Localization

While we don't officially support localization yet, we aim to pass all text data for components through string properties. For example, consider an Icon Button that closes a Modal. The Button label is set using the property `accessibilityCloseButtonLabel`. The English default for this property is "Close." If the label needs to be translated, we can easily replace the English default by passing in the translated text to that property.

## Accessibility

Verify full support for keyboards and screen readers early and often while developing components. Make sure visible indicators are available for focus, hover, active, and deactivated states. [Learn more about accessibility best practices.](https://grammarly.atlassian.net/wiki/spaces/DP/pages/2991259676/Accessibility+A11y)

## Animation

### Support `prefers-reduced-motion`

Make sure that any animation in components respects the user's `prefers-reduced-motion` setting. If this setting is on, all animations should be removed.

## CSS conventions

### Directional properties

Always favor CSS properties that respond to right-to-left languages. For example, use `margin-inline-start` instead of `margin-left` anytime a margin should adjust for right-to-left languages.

### Design tokens

Our [design tokens](/tokens) should be used whenever possible. Do not hard code values if an appropriate token exists for the same value.
