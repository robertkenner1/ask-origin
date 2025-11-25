# Button

A Button provides a way to take action.

*Buttons in a Card allow various actions, such as accepting or dismissing a suggestion.*

## Usage

Use when it’s possible for a user to take an action.

**Do not use when:**

* Offering navigation among sections within a page or to an external website. Instead, use a [Link](/components/link).
* It’s preferable to have a Button with only an Icon and no text label. Instead, use an [Icon Button](/components/icon-button).

### Is it a Link or a Button?

[Links](/components/link) are used to navigate among pages, within sections of the same page, or to a location outside the app. They are also used for phone numbers and email addresses. If the URL in your browser changes after activating it, it's a Link. If you need a Link that has the visual appearance of a Button, use [ButtonAsLink](/components/button-as-link).

A Button allows a user to do something along their current path—it doesn't take them out of it like a Link does. Buttons perform actions like **Create snippet**, **Open settings**, or **Accept changes**.

## Examples

### Variants

#### Primary

By default, a Button will appear as the primary variant. However, you should use only a single primary Button per surface to call attention to the highest-priority action available.

```tsx
<Flex gap={4}>
<Button iconStart={InterfaceUploadIcon} text="Upload"  />
<Button text="Upload"  />
<Button text="Upload" iconEnd={InterfaceUploadIcon}  />
</Flex>
```

##### In product

!\[In Cards, the primary button indicates accepting a suggestion as the main action. While many cards may be visible, only one primary Button is used on each card.]\(/img/components/button\_primary-example.svg)

*A primary Button is used for accepting a suggestion, the primary action within this Card. Although
many Cards are visible, only one primary Button appears on each Card.*

#### Ghost primary

Use `variant="ghost"` to call attention to a high-priority action that appears more than once on a surface. It can also be used to style Buttons consistently within a surface or workflow.

```tsx
<Flex gap={4}>
<Button variant="ghost" iconStart={InterfaceSettingsIcon} text="Manage"  />
<Button variant="ghost" text="Manage"  />
<Button variant="ghost" text="Manage" iconEnd={InterfaceSettingsIcon}  />
</Flex>
```

##### In product

!\[Ghost buttons are used to show how to remove multiple items in the settings block list. In another case where a primary action of signing out is shown, a ghost button can be used for the action of managing a subscription.]\(/img/components/button\_ghost-examples.svg)

*A ghost primary Button is used for removing applications from the block list, a repeated,
high-priority action. Using a transparent primary Button to manage a subscription maintains a
consistent visual experience across Tabs in Settings.*

#### Secondary

Use `variant="secondary"` to give a medium level of emphasis to one or more actions that complement a primary Button.

```tsx
<Flex gap={4}>
<Button variant="secondary" iconStart={InterfaceExternalLinkIcon} text="Learn more"  />
<Button variant="secondary" text="Learn more"  />
<Button variant="secondary" text="Learn more" iconEnd={InterfaceExternalLinkIcon}  />
</Flex>
```

##### In product

!\[In Grammarly for Business, creating a snippet is a complementary task to creating a collection of snippets.]\(/img/components/button-secondary-examples.svg)

*A secondary button is used in Grammarly Business for creating a snippet, a complementary task to
creating a collection.*

#### Tertiary

Use `variant="tertiary"` to reduce the emphasis on one or more actions that are not critical to completing the primary task.

```tsx
<Flex gap={4}>
<Button variant="tertiary" iconStart={InterfaceDictionaryIcon} text="Add to dictionary"  />
<Button variant="tertiary" text="Add to dictionary"  />
<Button variant="tertiary" text="Add to dictionary" iconEnd={InterfaceDictionaryIcon}  />
</Flex>
```

##### In product

!\[In Cards, tertiary buttons are used for actions lower in importance like dismissing a Card.]\(/img/components/button-tertiary-examples.svg)

*A tertiary Button is used to dismiss a suggestion, a low-priority action in a Card.*

#### Critical

Use `variant="critical"` to indicate a permanent or risky action, such as deleting something without any options for recovery.

```tsx
<Flex gap={4}>
<Button variant="critical" iconStart={InterfaceIgnoreIcon} text="Delete"  />
<Button variant="critical" text="Delete"  />
<Button variant="critical" text="Delete" iconEnd={InterfaceIgnoreIcon}  />
</Flex>
```

#### Pro

Use `variant="pro"` to indicate a feature or action that is associated with a Pro plan. Only use the **filled Star** icon in this variant.

```tsx
<Flex gap={4} wrap>
<Button variant="pro" iconStart={InterfaceStarFilledIcon} text="Get Grammarly Pro"  />
<Button variant="pro" text="Get Pro"  />
</Flex>
```

#### Enterprise

Use `variant="enterprise"` to indicate a feature or action that is associated with an Enterprise plan. This variant intentionally does not allow for an Icon.

```tsx

<Button variant="enterprise" text="Get Grammarly Enterprise"  />

```

#### Premium

:::caution
The Premium and Business plan names were deprecated in 2024. New users received the latest messaging and visuals for Pro or Enterprise plans after August 28, 2024.
:::

Use `variant="premium"` to indicate a feature or action that is associated with a Premium plan. The **Premium** Icon shaped like a diamond is only used in this context.

```tsx
<Flex gap={4} wrap>
<Button variant="premium" iconStart={InterfacePremiumIcon} text="Unlock Premium"  />
<Button variant="premium" text="Unlock Premium"  />
<Button variant="premium" text="Unlock Premium" iconEnd={InterfacePremiumIcon}  />
</Flex>
```

### Size

Buttons come in `small`, `medium`, `large`, and `xlarge` sizes. Medium is the default and preferred; however, you might consider a small Button in compact UI or larger sizes where more space is available.

These sizes are available for all variants.

```tsx
<Flex gap={4}>
<Button size="small" variant="primary" text="Settings"  />
<Button variant="primary" text="Settings"  />
<Button size="large" variant="primary" text="Settings"  />
<Button size="xlarge" variant="primary" text="Settings"  />
</Flex>
```

### With an Icon

Use the `iconStart` or `iconEnd` prop to display an Icon inside a Button. [View the Iconography library](/foundations/iconography/).

```tsx
<Flex gap={4} wrap>
<Button variant="tertiary" iconStart={InterfaceFolderMoveIcon} text="Move"  />
<Button variant="tertiary" text="Move" iconEnd={InterfaceFolderMoveIcon}  />
</Flex>
```

### With a shortcut

Use the `shortcut` prop to note a keyboard shortcut that activates a Button’s action.

```tsx
<Flex gap={4} wrap>
<Button shortcut="⌘ + S" variant="primary" text="Settings"  />
<Button shortcut="⌘ + S" variant="ghost" text="Settings"  />
<Button shortcut="⌘ + S" variant="secondary" text="Settings"  />
<Button shortcut="⌘ + S" variant="tertiary" text="Settings"  />
</Flex>
```

### Loading state

Use the `isLoading` prop to display a Circular Loader in place of all Button content. This state provides a signal that the requested action needs time to complete.

```tsx


function Example() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Flex 
    width={350}
    direction="column"
    gap={4}
    >
      <Text as="p">Press <Text as="strong">Save changes</Text> to see the loading state.</Text>
      <Flex
      width="100%"
      padding={8}
      borderColor="base-subdued"
      borderRadius={2}
      justify="center"
      align="center"
      >
        <Text as="p">
        Form content.
        </Text>
      </Flex>
      <Flex 
      width="100%"
      direction="column"
      gap={2}
      >
        <Button 
          width="full"
          isLoading={isLoading}
          text="Save changes"  
          onClick={() => {
            setIsLoading(true);
          }}
        />
        <Button
          width="full"
          text="Reset"
          variant="tertiary"
          onClick={() => {
            setIsLoading(false);
          }}
        />
      </Flex>
    </Flex>
  )
}

```

### Disabled

Use the `isDisabled` prop to indicate that a user cannot focus or interact with a Button.

```tsx
<Flex gap={4} wrap>
<Button isDisabled variant="primary" iconStart={InterfaceSettingsIcon} text="Settings"  />
<Button isDisabled variant="ghost" text="Settings"  />
<Button isDisabled variant="secondary" text="Settings"  />
<Button isDisabled variant="tertiary" text="Settings" iconEnd={InterfaceSettingsIcon}  />
<Button isDisabled variant="critical" text="Delete"  />
<Button isDisabled variant="premium" text="Premium"  />
</Flex>
```

### Events

The `onClick` callback is what performs the intended action.

```tsx

<Button onClick={() => alert("Opening Settings Modal")} variant="tertiary" iconStart={InterfaceSettingsIcon} text="Settings"  />

```

## Behavior

### Width

#### Flexible width

Buttons are flexible in width by default.

They have a standard Icon size, font size, and padding. The width flexes to accommodate text as written and an Icon if used. Text can wrap to the following line so that it will not truncate.

```tsx
<Flex wrap gap={4}>
<Button iconStart={InterfaceSettingsIcon} text="Antidisestablishmentarianism"  /><Button text="Supercalifragilisticexpialidocious"  /><Button text="Uncopyrightable" iconEnd={InterfaceSettingsIcon}  />
</Flex>
```

#### Full width

Some smaller surfaces and specific components, such as Popover, use a full-width Button. Text can wrap to the following line so that it will not truncate.

You can add a secondary or tertiary Button below a primary Button. You can stack up to two full-width Buttons.

```tsx
<Flex direction="column" gap={3} width={350}>
<Button width="full" text="Primary full-width action"  /><Button width="full" text="Secondary full-width action" variant="secondary" />
</Flex>
```

### Alignment

Tertiary and ghost Buttons lack a visual border and their labels may appear misaligned when displayed with other content.

To align a Button with its surrounding content, wrap it in a [Flex container](/components/flex#margin-and-padding) component and use the `marginLeft` or `marginRight` props to make incremental adjustments.

#### Alignment to content

Use the surrounding content to determine how to align the content of a tertiary or ghost Button.

**Do:** Align the label or Icon of a tertiary or ghost Button to the surrounding content.

![Align the label or Icon of a tertiary or ghost Button to the surrounding content.](/img/components/button-alignment-to-content-do.svg)

**Don't:** Do not allow staggered alignment with surrounding content.

![Do not allow staggered alignment with surrounding content.](/img/components/button-alignment-to-content-dont.svg)

#### Alignment to primary and secondary buttons

When stacking a tertiary or ghost Button below a primary or secondary Button, do **not** change the margins. This allows the label or Icon to remain visually aligned.

**Do:** Align the edge of a tertiary or ghost Button with a primary or secondary Button above it.

![Align the edge of a tertiary or ghost Button with a primary or secondary Button above it.](/img/components/button-alignment-to-primary-button-do.svg)

**Don't:** Do not change the margins of a tertiary or ghost button to align with the surrounding content.

![Do not change the margins of a tertiary or ghost button to align with the surrounding content.](/img/components/button-alignment-to-primary-button-dont.svg)

## Accessibility​

A Button is accessible to screen readers and included in a surface’s focus order. The label should clearly describe the action.

### Labels

Use the `accessibilityLabel` prop to explain any visually communicated information for people who use screen readers. For example, a **Remove** Button in a table may have an `accessibilityLabel` that says "Remove Microsoft Teams from blocked list.”

```tsx

<Flex width={250} direction="column" gap={4}>
  <Text as="p" variant="text-small" weight="bold">Blocked by you</Text>
  <Flex justify="space-between" align="center">
    <Text as="p" variant="text-small">Microsoft Teams</Text>
    <Button variant="ghost" text="Remove" accessibilityLabel="Remove Microsoft Teams from blocked list"/>
  </Flex>
</Flex>
```

### Focus order

On rare occasions, it may be helpful to alter the `tabIndex` of a Button. If the tab order is altered, it should follow a logical order that follows the visual order throughout the page: top to bottom and left to right. Consider the visual layout and a user’s expectations when altering the tab order of a Button.

### Buttons for pop-ups

If a Button is used to show a dialog, like a Popover or Modal, the `accessibilityHasPopup` and `accessibilityControls` props must be applied.

* `accessibilityControls` should match the ID of the dialog.
* `accessibilityHasPopup` should be `true`.

```tsx

function Example() {
  return (
  <div>
    <Button text="Open dialog" onClick={() => document.getElementById('dialog-hello-1').showModal() } accessibilityHasPopup={true} accessibilityControls="dialog-hello-1"/>
    <dialog id="dialog-hello-1">
      <p>Hey, you look great today!</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  </div>
  )
}

```

### Keyboard interaction​

| Key                                  | Expected result            |
| ------------------------------------ | -------------------------- |
| Tab                       | Moves focus to the Button. |
| Space or Enter | Activates the Button.      |

## Writing

A Button’s label needs to clearly describe the action that happens when a user activates it.

Capitalize the plan name (“Pro” or “Enterprise”) if used in a Button’s text. For more information about plan names, [visit the Company Brand Style Guide](https://coda.io/d/Grammarly-Style-Guide_dNw1zZnMEND/Grammarlys-Plans_su4UNXs7).

### Writing best practices for Button labels.

| Do | Don't |
|----|-------|
| Use an imperative verb with a noun to provide clarity. | Do not use adverbs like “now” that don’t provide additional context to a command. |
| Use clear and distinct actions in paired Buttons. | Do not use vague or similar words for opposing actions in a pair. |
| Use a single action per Button. | Do not combine two distinct actions in a single Button. |
| Use commands that put a user in control, such as Accept, Back, Cancel, Close, Dismiss, Done, or OK. | Do not use phrases that put a user in a passive state or erode their sense of agency. |


## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Button component in JS.

```tsx
import { Button } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | - | Used for the Button’s label. |
| `children` | `React.Node` | - | Used for the Button’s label when more flexibility is needed outside of a simple string. |
| `accessibilityControls` | `string | undefined` | undefined | ID of the element that this Button controls, like a Menu or Modal. |
| `accessibilityExpanded` | `boolean` | - | When true, indicates if the control associated with the Button is expanded or collapsed. |
| `accessibilityHasPopup` | `'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' |  'true' | 'false'` | - | Indicates the availability and type of interactive pop-up element that can be activated by the Button. |
| `accessibilityLabel` | `string | undefined` | undefined | Describes the Button when more context is needed outside of the \`text\`. |
| `iconEnd` | `ReactNode | undefined` | - | Icon placed at the end of the Button. Icon is decorative and will be hidden from screen readers. For premium Buttons, only the premium Icon is allowed. |
| `iconStart` | `ReactNode | undefined` | - | Icon placed at the start of the Button. Icon is decorative and will be hidden from screen readers. For premium Buttons, only the premium Icon is allowed. |
| `isDisabled` | `boolean` | - | When true, removes the Button from the tab order and prevents interaction. |
| `isLoading` | `boolean` | false | Whether to show a circular loader, such as when the associated Form has been submitted. |
| `shortcut` | `string` | - | Used to add a keyboard shortcut annotation within the Button. Does not apply to premium Buttons. |
| `size` | `'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge' | '4xlarge'` | medium | Determines the height of the Button. The 2x, 3x, and 4x sizes should only be used on external web surfaces, not within the product. |
| `tabIndex` | `number` | 0 | Determines the focus order for the Button. Should be changed only in rare cases. |
| `type` | `'button' | 'submit'` | button | When a Button is used to submit a form, type must be set to 'submit'. |
| `variant` | `'primary' | 'ghost' | 'secondary' | 'tertiary' | 'critical' | 'premium' | 'pro' | 'enterprise' ` | primary | Styles the Button according to its use and required prominence. |
| `width` | `'full' | 'fixed'` | fixed | Determines the width of the Button. Full width will stretch the Button to fit its container. |
| `onClick` | `(React.MouseEvent<HTMLButtonElement>) => void | <T>(e?: React.MouseEvent<HTMLElement>) => Promise<T>` | - | Event handler that is called when the Button is clicked. Promise can be used to display loading state of the Button. |


## Related components

- [Icon Button](/components/icon-button)
- [Modal](/components/modal)
- [Popover](/components/popover)
- [Tabs](/components/tabs)
