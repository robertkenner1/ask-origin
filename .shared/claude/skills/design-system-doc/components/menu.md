# Menu

A Menu presents additional actions or navigation options where there are space constraints.

Less frequently used options, like reporting inaccuracies or offensive content,
are accessed in a Menu after activating the **More** Icon Button.

## Usage

**Use when:**

* Providing navigation options or actions and there’s not enough space to display them all at once.
* Providing actions that will take effect immediately.
* Items in the Menu cannot be filtered.

**Do not use when:**

* Providing the primary or secondary navigation elements within a surface, such as page links in a header or sidebar. Instead, use a navigation element. For information about the Account Hub navigation, visit the local team’s documentation.
* You need an input that allows a user to choose a single option from a predefined list. Instead, use a [Select](/components/select).
* You need an input that allows a predefined list containing content beyond simple names, such as helper text or icons. Instead, use a [Combobox](/components/combobox).

### Ordering Menu items

Menu items should be organized in one of these standard methods, listed in order of preference:

1. Strategic importance (most to least)
2. Industry convention
3. Alphabetical order (A to Z)

## Anatomy

!\[Anatomy diagram of a Menu]\(/img/components/menu\_anatomy.svg)

Activator (required)Section labelSectionSeparatorIconItem label (required)

## Examples

### Default

An `activator` is required to open a Menu. You must have at least two Menu items.

There are two built-in activators that display a **More** Icon Button:

* `activator="more-vertical"`
* `activator="more-horizontal"`

```tsx

  <Menu activator="more-vertical">
    <Menu.Item key="duplicate">Duplicate</Menu.Item>
    <Menu.Item key="move">Move</Menu.Item>
  </Menu>

```

### Custom activator

You can provide a Button or Icon Button as the `activator` to customize the text label, variant, and other props.

```tsx

  <Menu activator={<Button variant="primary" iconEnd={InterfaceDropdownArrowDownIcon}>Add term</Button>}>
    <Menu.Item key="individual">Add individual term</Menu.Item>
    <Menu.Item key="preset">Add preset terms</Menu.Item>
    <Menu.Item key="import">Import list</Menu.Item>
  </Menu>

```

### With icons

Use the `icon` prop to add an icon from the [Iconography library](/foundations/iconography) at the start of an item’s label. It is recommended to use icons on either all or none of the items.

```tsx

  <Menu activator="more-vertical">
    <Menu.Item key="copy" icon={InterfaceCopyIcon}>Copy</Menu.Item>
    <Menu.Item key="cut" icon={InterfaceCutIcon}>Cut</Menu.Item>
    <Menu.Item key="paste" icon={InterfacePasteIcon}>Paste</Menu.Item>
  </Menu>

```

### Disabled item

Use `isDisabled="true"` to prevent a user from activating a Menu item. Disabled items are still focusable—use the down arrow on your keyboard to reach the disabled item in the example.

```tsx

  <Menu activator="more-vertical">
    <Menu.Item key="copy" icon={InterfaceCopyIcon}>Copy</Menu.Item>
    <Menu.Item key="cut" icon={InterfaceCutIcon}>Cut</Menu.Item>
    <Menu.Item key="paste" icon={InterfacePasteIcon} isDisabled="true">Paste</Menu.Item>
  </Menu>

```

### With a section

The `Menu.Section` sub-component organizes items into distinct groups.

A `label` is required for each section, but `labelDisplay="hidden"` can be used to visually hide the label while still offering the necessary context for people who navigate using a screen reader.

```tsx

  <Menu activator="more-vertical">
    <Menu.Section label="kai.williams@grammarly.com">
      <Menu.Item key="account" icon={InterfaceUserIcon}>Your account</Menu.Item>
      <Menu.Item key="logout" icon={InterfaceLogoutIcon}>Sign out</Menu.Item>
    </Menu.Section>
  </Menu>

```

### With a separator

The `Menu.Separator` sub-component adds a dividing line. You can place a separator between sections or between items within a section.

```tsx

  <Menu activator="more-vertical">
    <Menu.Item key="off" icon={InterfaceMuteIcon}>Turn off suggestions like this</Menu.Item>
    <Menu.Separator />
    <Menu.Item key="incorrect" icon={InterfaceReportIcon}>Incorrect suggestion</Menu.Item>
    <Menu.Item key="offensive" icon={InterfaceReportIcon}>Offensive suggestion</Menu.Item>
  </Menu>

```

### With links

Use the `href` prop on `Menu.Item` to turn an item into a link. The `target` prop can be used to specify where the link will open.

```tsx

  <Menu activator="more-vertical">
      <Menu.Item
        href="https://www.grammarly.com"
        key="settings"
        onClick={() => {}}
        icon={InterfaceSettingsIcon}
      >
        Settings
      </Menu.Item>
      <Menu.Separator />
      <Menu.Item key="terms" target="_blank" href="https://www.grammarly.com" onClick={() => {}}>
        View Terms & Conditions
      </Menu.Item>
      <Menu.Item key="support" href="https://www.grammarly.com" onClick={() => {}} isDisabled>
        Contact Support
      </Menu.Item>
    </Menu>

```

## Behavior

### Width

The menu width defaults to hug its contents.

### Elevation

Dropdown menus appear in front of all other permanent UI elements.

### Position

A Menu aligns with the element that generates it. It will appear above or below the activator depending on where space is available.

## Accessibility

Certain actions in a Menu may lead to an immediate response, such as deleting a table row. It is a best practice to provide an alert in a [Modal](/components/modal) to allow the user to confirm the action. This helps avoid a `<a href="https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/consistent-behavior-unpredictable-change.html#context-changedef" className="external" target="_blank" />` for users who may have made an accidental selection.

!\[Confirming the delete action from the Snippets table.]\(/img/components/menu\_action\_confirmation.svg)

A warning within a Modal allows a user to pause and confirm their action to delete a snippet. This prevents deletion and data loss caused by accidental clicks.

### Keyboard navigation

| Key                   | Expected result                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Esc        | Closes the Menu and returns focus to the `activator`.                                                                                                                                               |
| Enter or Space      | When focus is on the `activator`, opens the Menu.`<br />``<br />`When focus is on a Menu item, activates that item’s action or link.                                                                                            |
| Tab        | Closes the Menu and advances to the next focusable element.                                                                                      |
| Down Arrow | When focus is on the `activator`, opens the Menu.`<br />``<br />`When focus is in the Menu, moves focus down through the items. When focus reaches the end of the list, it loops back to the start.|
| Up Arrow   | When focus is in the Menu, moves focus up through the items. When focus reaches the start of the list, it loops back to the end. |

## Writing

### Compound items (“and” or “&”)

Spell out “and” whenever possible within the character constraints. Avoid ampersands and slashes when joining names in a Menu.

If you absolutely must use an ampersand because of the character limit, avoid using it in a way that suggests the Menu item is a proper feature name.

### Dos and don’ts

Clear and purposeful labels help a user navigate a Menu with ease.

When used for navigation, **a Menu item’s label should exactly match the name of the page where the user is taken**. Avoid labels that wouldn't make sense as both a page title and a Menu item.

Be brief without sacrificing clarity. Don’t use up the entire space if you can avoid it. It’s important to consider how machine or AI translations by third-party apps and browser extensions could affect our product. These tools can expand text content by 20-30%.

| Do ✅ | Don't ❌ |
|-------|----------|
| Choose labels that align with the language and mental model of our users. ![A section label says "More options" and the user is provided with two list items—documents and apps.](/img/components/menu_writing_do1.svg) | Don't use labels that are too similar to each other or repeat information that the user has already navigated through. ![A section label says "More options" and the user is provided with repetitive menu items—more documents and more apps.](/img/components/menu_writing_dont1.svg) |
| Use "your" when a pronoun is absolutely necessary to avoid confusion or ambiguity within the navigation. ![A menu shows an option to open "your account"](/img/components/menu_writing_do2.svg) | Don't use "my" as a personal pronoun and avoid pronouns in general. ![A menu shows an option to open "my account".](/img/components/menu_writing_dont2.svg) |
| Use sentence case. ![A menu has three options for copy, move, and delete all written in sentence case where the first letter of each word is capitalized.](/img/components/menu_writing_do3.svg) | Do not use Title Case or ALL CAPS. ![A menu has three options for COPY, MOVE, and DELETE. Each option is written in ALL CAPS and gives the impression of shouting.](/img/components/menu_writing_dont3.svg) |
| Use internal punctuation when necessary. ![A menu shows options for a security review where the user can indicate that a specific sign in was not them. Punctuation is not used on menu items.](/img/components/menu_writing_do4.svg) | Do not use end punctuation except for question marks in rare cases. ![A menu is shown with an option to indicate "That wasn't me!" and the exclamation point makes it seem quite serious.](/img/components/menu_writing_dont4.svg) |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite is preferable. ![A menu has a long label for one item that wraps to a second line.](/img/components/menu_writing_do5.svg) | Do not truncate a label or allow lines to break mid-word. ![A menu has two truncated items that are unclear—"Incorrect s …" and "Offensive c …".](/img/components/menu_writing_dont5.svg) |

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Menu component in JS.

```tsx
import { Menu } from "@superhuman/origin";
```

## API

### Menu

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `activator` | `"more-horizontal" \| "more-vertical" \| React.ReactElement` | Yes | - | A Button or Icon Button that opens the Menu. For convenience, there are two predefined Icon Buttons built into the Menu component. |
| `children` | `React.ReactNode` | Yes | - | The content to render in the Menu. |
| `accessibilityLabel` | `string` | No | `"More"` | Describes the Icon Button's purpose. |

### Menu.Item

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The content to render in the Menu item. |
| `key` | `string \| number \| Key` | Yes | - | Unique identifier for the Menu item. |
| `href` | `string` | No | - | If specified, children are rendered as a Link to the provided destination. |
| `icon` | `ReactNode` | No | - | Icon to display at the start of the Menu item. |
| `isDisabled` | `boolean` | No | - | When true, indicates that the Menu item cannot be activated. Disabled Menu items are still focusable. |
| `target` | `"_blank" \| "_self" \| "_parent" \| "_top"` | No | - | Determines where the Link will be opened. When target is set to `_blank`, the Link component will automatically set `rel="noopener noreferrer"` and add hidden text for screen readers that says "Opens a new window". |
| `onClick` | `() => void` | No | - | Event handler that determines what action the Menu item takes. |

### Menu.Section

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The items to render in the section. |
| `label` | `string` | Yes | - | Label for the section. |
| `labelDisplay` | `"visible" \| "hidden"` | No | `"visible"` | Can be used to visually hide the label. |

### Menu.Separator

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `role` | `"separator" \| "none"` | No | `"none"` | The role attribute defines the semantic meaning of the menu separator. `"separator"`: Represents a visual or logical division between groups of menu items. `"none"`: No specific role or behavior is applied. |

## Related components

- [Combobox](/components/combobox)
- [Select](/components/select)
