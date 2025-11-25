# Icon Button

An Icon Button provides a way to take action in compact surfaces.

## Usage

Because an Icon Button represents its behavior with only an Icon, the Icon's meaning must be immediately clear and recognizable. [View the Iconography library](/foundations/iconography).

**Use when:**

* A user can take an action, usually without leaving the page or surface
* Space is limited

**Do not use when:**

* Offering navigation among sections within a page or to an external website. Instead, use a [Link](/components/link).
* It’s preferable to include a text label in addition to an Icon. Instead, use a [Button](/components/button).

## Examples

### Primary

Use a primary Icon Button to call attention to the highest-priority action available. Use only one per surface.

```tsx
<Flex gap={4}>
  <IconButton accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton accessibilityLabel="More options" icon={InterfaceMoreIcon} />
  <IconButton accessibilityLabel="Open notifications" icon={InterfaceBellIcon} />
</Flex>
```

### Ghost primary

Use `variant="ghost"` to call attention to a high-priority action that appears more than once on a surface. It is also used when the same style of Icon Button would maintain a consistent experience.

```tsx
<Flex gap={4}>
  <IconButton variant="ghost" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton variant="ghost" accessibilityLabel="More options" icon={InterfaceMoreIcon} />
</Flex>
```

### Secondary

Use `variant="secondary"` to give a medium level of emphasis to one or more actions that complement a primary action.

```tsx
<Flex gap={4}>
  <IconButton variant="secondary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton variant="secondary" accessibilityLabel="More options" icon={InterfaceMoreIcon} />
</Flex>
```

### Tertiary

Use `variant="tertiary"` to give the least emphasis to one or more actions that are not critical to completing the primary task.

```tsx
<Flex gap={4}>
  <IconButton variant="tertiary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton variant="tertiary" accessibilityLabel="More options" icon={InterfaceMoreIcon} />
</Flex>
```

### Custom icon

You can also use custom Icons in an Icon Button. Import the icon, then pass the icon entity through the component’s `icon` prop.

```tsx
import {CustomSparkleIcon} from "./sparkle-icon.svg";
<IconButton variant="primary" accessibilityLabel="Open tools for admins" icon={CustomSparkleIcon}  />
```

### Disabled

Use `isDisabled` to indicate that a user cannot focus or interact with an Icon Button.

```tsx
<Flex gap={4}>
  <IconButton isDisabled variant="primary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton isDisabled variant="ghost" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton isDisabled variant="secondary" accessibilityLabel="More options" icon={InterfaceMoreIcon} />
  <IconButton isDisabled variant="tertiary" accessibilityLabel="More options" icon={InterfaceMoreIcon} />
</Flex>
```

### Events

The `onClick` callback performs the intended action.

```tsx

  <IconButton onClick={() => alert("Navigating to settings")} variant="secondary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />

```

## Behavior

### Size

IconButtons come in sizes: `small`,`medium` (default), `large`, `xlarge`. These sizes are available for all variants.

```tsx
<Flex gap={4}>
  <IconButton size="small" variant="primary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton variant="primary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton size="large" variant="primary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />
  <IconButton size="xlarge" variant="primary" accessibilityLabel="User settings" icon={InterfaceSettingsIcon} />

</Flex>
```

### Tooltips

All Icon Buttons automatically come with a [Tooltip](/components/tooltip) to provide context to a user regarding the action that will be taken. An annotation can also be provided via `tooltipProps` if a keyboard shortcut applies for the Icon Button.

```tsx
<div>
  <IconButton variant="secondary" tooltipProps={{initialOpen: true, annotation: "⌘ + I"}} tooltipContentProps={{children: <span>Italic</span>}} accessibilityLabel="Italicize content" icon={InterfaceItalicIcon} />
</div>
```

## Accessibility​

An Icon Button is accessible to screen readers and included in a surface’s focus order. An Icon Button’s `accessibilityLabel` should clearly describe the action.

### Labels

Use the `accessibilityLabel` prop to explain any visually communicated information for people who use screen readers. For example, a **Remove** Icon Button in a table may have an `accessibilityLabel` that says "Remove Microsoft Teams from blocked list.” By default, the `accessibilityLabel` populates the Tooltip content. To have separate values for the Tooltip and the `accessibilityLabel`, use `tooltipContentProps` to specify the Tooltip content.

```tsx

  <IconButton 
    accessibilityLabel="Remove Microsoft Teams from blocked list" 
    tooltipContentProps={{children: "Remove"}} 
    variant="secondary" 
    icon={InterfaceIgnoreIcon}  
    onClick={() => {}}
  />

```

### Focus order

On rare occasions, it may be helpful to alter the `tabIndex` of an Icon Button. If the tab order is altered, it should follow a logical order that follows the visual order throughout the page: top to bottom and left to right. Consider the visual layout and a user’s expectations when altering the tab order of an Icon Button.

### Icon Buttons for pop-ups

If an Icon Button is used to show a dialog, like a Popover or Modal, the `accessibilityHasPopup` and `accessibilityControls` properties must be applied. The `accessibilityControls` property should match the ID of the dialog, and `accessibilityHasPopup` should be `true`.

```tsx

function Example() {
  return (
  <div>
    <IconButton variant="secondary" icon={InterfaceAppsIcon} accessibilityLabel="Add new applications" onClick={() => document.getElementById('dialog-apps-add').showModal() } accessibilityHasPopup={true} accessibilityControls="dialog-apps-add"/>
    <dialog id="dialog-apps-add">
      <p>You need administrator access to add apps to your organization. Please context your administrator.</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  </div>
  )
}

```

### Keyboard interaction​

| Key                                  | Expected result                                                                                                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab                       | Moves focus to the Icon Button.                                                                                                                                                |
| Space or Enter | Activates the Icon Button.                                                                                                                                                            |
| Esc                       | Dismisses the Tooltip associated with the Icon Button but does not dismiss any related overlay UI, such as a Modal. When the Tooltip is closed, the focus returns to the Icon Button. |

## Writing

The text value of the `accessibilityLabel` is displayed in the visible Tooltip when a user hovers on an Icon Button.

Describe an Icon Button’s function rather than what an Icon looks like. [Read the full guide to writing about Icons and emoji](/content/style/formatting#mentioning-ui-elements).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the IconButton component in JS.

```tsx
import { IconButton } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accessibilityLabel` | `string | undefined` | undefined | Describes the Icon Button’s purpose. Also populates the Tooltip, unless otherwise changed through \`tooltipContentProps\`. |
| `icon` | `ReactNode | undefined` | undefined | Icon to place inside the Icon Button. |
| `accessibilityControls` | `string | undefined` | - | ID of the element that this Icon Button controls, like a Menu or Modal. |
| `accessibilityHasPopup` | `'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' |  'true' | 'false'` | - | Indicates the availability and type of interactive pop-up element that can be activated by the Icon Button. |
| `isDisabled` | `boolean` | - | When true, removes the Icon Button from the tab order and prevents interaction. |
| `size` | `'small' | 'medium' | 'large' | 'xlarge'` | medium | Determines the height of the IconButton. |
| `variant` | `'primary' | 'ghost' | 'secondary' | 'tertiary' | 'premium' ` | primary | Styles the Icon Button according to its use and required prominence. |
| `onClick` | `(React.MouseEvent<HTMLButtonElement>) => void | <T>(e?: React.MouseEvent<HTMLElement>) => Promise<T>` | - | Event handler that is called when the Icon Button is clicked. Promise can be used to display loading state of the Icon Button. |


## Related components

- [Button](/components/button)
- [Modal](/components/modal)
- [Popover](/components/popover)
