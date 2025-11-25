# ButtonAsLink

A ButtonAsLink visually looks like a Button—but functions like a Link, allowing for navigation among pages or URLs.

*Links to sign up for or into a user's account are styled as Buttons within the Desktop app.*

## Usage

ButtonAsLink semantically functions like a Link and takes a user to a new URL while visually achieving the style and behavior of a Button. However, use this component with caution because assistive technology, like screen readers, will group ButtonAsLink with other Links in the screen reader tree.

**Use when the context warrants a Button-style visual affordance and you are:**

* Presenting a navigational element to another page or URL
* Presenting a navigational element to an external website
* Providing a link to an email or phone number

**Do not use when:**

* Allowing a user to perform an action on the same page. Instead, use a [Button](/components/button).
* Allowing a user to alter how content on a page is displayed. Instead, use a [Button](/components/button) or [Switch](/components/switch).

### Is it a Link or a Button?

ButtonAsLink, just like [Link](/components/link), is used to navigate among pages, within sections of the same page, or to a location outside the app. It is also used for phone numbers and email addresses.

[Buttons](/components/button) allow a user to do something along their current path—it doesn't take them out of it like a Link does. Buttons perform actions like **Create snippet**, **Open settings**, or **Accept changes**.

## Examples

### Variants

By default, a ButtonAsLink will appear as the primary variant. However, you should use only a single primary ButtonAsLink per surface to call attention to the highest-priority action available.

```tsx
<Flex gap={4} wrap>
<ButtonAsLink text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink variant="pro" href="https://grammarly.com" text="Get Pro"  />
<ButtonAsLink variant="secondary" text="Contact support" href="mailto:percival@gds.com" target="_blank" />
<ButtonAsLink variant="tertiary" text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink variant="ghost" href="https://grammarly.com" text="Visit documentation"  />
<ButtonAsLink variant="enterprise" text="Contact support" href="mailto:percival@gds.com" target="_blank" />
</Flex>
```

### Size

ButtonAsLinks come in `small`, `medium`, `large`, and `xlarge` sizes. Medium is the default and preferred; however, you might consider a small ButtonAsLinks in compact UI or larger sizes where more space is available.

These sizes are available for all variants.

```tsx
<Flex gap={4}>
<ButtonAsLink size="small" text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink size="large" text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink size="xlarge" text="See plans" href="https://grammarly.com/plans"  />
</Flex>
```

### With an Icon

Use the `iconStart` or `iconEnd` prop to display an Icon inside a ButtonAsLink. [View the Iconography library](/foundations/iconography/).

```tsx
<Flex gap={4}>
<ButtonAsLink iconEnd={InterfaceExternalLinkIcon} target="_blank" text="See plans" href="https://grammarly.com/plans"  />
<ButtonAsLink iconEnd={InterfaceExternalLinkIcon} target="_blank" variant="secondary" text="Contact support" href="https://grammarly.com"  />
</Flex>
```

### Events

The `onClick` callback is what performs the intended action.

```tsx

<ButtonAsLink onClick={() => alert("Opening Settings page")} variant="secondary" href="https://grammarly.com" text="Manage settings"  />

```

## Behavior

### Width

#### Flexible width

ButtonAsLinks are flexible in width by default.

They have a standard Icon size, font size, and padding. The width flexes to accommodate text as written and an Icon if used. Text can wrap to the following line so that it will not truncate.

```tsx
<Flex wrap gap={4}>
<ButtonAsLink href="https://grammarly.com" iconStart={InterfaceSettingsIcon} text="Antidisestablishmentarianism"  />
<ButtonAsLink href="https://grammarly.com" text="Supercalifragilisticexpialidocious"  />
<ButtonAsLink href="https://grammarly.com" text="Uncopyrightable" iconEnd={InterfaceSettingsIcon}  />
</Flex>
```

#### Full width

Some smaller surfaces and specific components, such as Popover, use a full-width ButtonAsLink. Text can wrap to the following line so that it will not truncate.

You can add a secondary or tertiary ButtonAsLink below a primary ButtonAsLink. You can stack up to two full-width ButtonAsLinks.

```tsx
<Flex direction="column" gap={3} width={350}>
<ButtonAsLink href="https://grammarly.com" width="full" text="Primary full-width action"  />
<ButtonAsLink href="https://grammarly.com" width="full" text="Secondary full-width action" variant="secondary" />
</Flex>
```

### Alignment

Tertiary and ghost ButtonAsLinks lack a visual border and their labels may appear misaligned when displayed with other content.

To align a ButtonAsLink with its surrounding content, wrap it in a [Flex container](/components/flex#margin-and-padding) component and use the `marginLeft` or `marginRight` props to make incremental adjustments.

#### Alignment to content

Use the surrounding content to determine how to align the content of a tertiary or ghost ButtonAsLink.

| Do ✅ | Don't ❌ |
|-------|----------|
| Align the label or Icon of a tertiary or ghost ButtonAsLink to the surrounding content. | Do not allow staggered alignment with surrounding content. |

#### Alignment to primary and secondary ButtonAsLinks

When stacking a tertiary or ghost ButtonAsLink below a primary or secondary ButtonAsLink, do **not** change the margins. This allows the label or Icon to remain visually aligned.

| Do ✅ | Don't ❌ |
|-------|----------|
| Align the edge of a tertiary or ghost ButtonAsLink with a primary or secondary ButtonAsLink above it. | Do not change the margins of a tertiary or ghost button to align with the surrounding content. |

## Accessibility​

A ButtonAsLink is accessible to screen readers and included in a surface’s focus order. The label should clearly describe the action.

### Labels

Use the `accessibilityLabel` prop to explain any visually communicated information for people who use screen readers. For example, a **Contact support** ButtonAsLink on a Pro-specific page may have an `accessibilityLabel` that says "Contact Grammarly Pro support team.”

### Keyboard interaction​

| Key                                  | Expected result            |
| ------------------------------------ | -------------------------- |
| Tab                       | Moves focus to the ButtonAsLink. |
| Enter | Activates  the ButtonAsLink and moves focus to the target.      |

## Writing

A ButtonAsLink’s label needs to clearly describe the action that happens when a user activates it.

Capitalize the plan name (“Pro” or “Enterprise”) if used in a ButtonAsLink’s text. For more information about plan names, [visit the Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarlys-Plans_su4UNXs7).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the ButtonAsLink component in JS.

```tsx
import { ButtonAsLink } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | - | Destination for the ButtonAsLinkLink. |
| `text` | `string` | - | Used for the ButtonAsLink’s label. |
| `children` | `React.Node` | - | Used for the ButtonAsLink’s label when more flexibility is needed outside of a simple string. |
| `accessibilityLabel` | `string | undefined` | undefined | Describes the ButtonAsLink when more context is needed outside of the \`text\`. |
| `download` | `string | boolean` | - | Indicates a file will be downloaded when the ButtonAsLink is activated. |
| `iconEnd` | `ReactNode | undefined` | - | Icon placed at the end of the ButtonAsLink. Icon is decorative and will be hidden from screen readers. For premium ButtonAsLinks, only the premium Icon is allowed. |
| `iconStart` | `ReactNode | undefined` | - | Icon placed at the start of the ButtonAsLink. Icon is decorative and will be hidden from screen readers. For premium ButtonAsLinks, only the premium Icon is allowed. |
| `size` | `'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge' | '4xlarge'` | medium | Determines the height of the ButtonAsLink. The 2x, 3x, and 4x sizes should only be used on external web surfaces, not within the product. |
| `variant` | `'primary' | 'ghost' | 'secondary' | 'tertiary' | 'critical' | 'premium' | 'pro' | 'enterprise' ` | primary | Styles the ButtonAsLink according to its use and required prominence. |
| `width` | `'full' | 'fixed'` | fixed | Determines the width of the ButtonAsLink. Full width will stretch the ButtonAsLink to fit its container. |
| `onClick` | `(React.MouseEvent<HTMLButtonElement>) => void | <T>(e?: React.MouseEvent<HTMLElement>) => Promise<T>` | - | Event handler that is called when the ButtonAsLink is clicked. Promise can be used to display loading state of the ButtonAsLink. |


## Related components

- [Button](/components/button)
- [Icon Button](/components/icon-button)
- [Link](/components/link)
