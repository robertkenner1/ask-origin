# Search Field

A Search Field refines a list of options based on a matching word or phrase.

A user can search for images on Unsplash in a Card.

## Usage

**Use when:**

* It’s more efficient to find something in a large set by searching.
* A user can search through an entire website at a global level.
* A user can search for content on a specific page.
* A user can search for data within a nearby component, such as a table.

**Do not use when:**

* Collecting a short text input, such as a name or an email. Instead, use a [Text Field](/components/text-field).
* There are fewer than eight options, or the options can easily be presented all at once. Instead, use a [Select](/components/select) or [Radio Group](/components/radio-group).
* A user can browse or filter a predefined list to select a single item. Instead, use a [Combobox](/components/combobox).

## Anatomy

!\[Anatomy diagram of a Search Field]\(/img/components/search\_field\_anatomy.svg)

Label (optional)Search iconPlaceholder text (optional unless the label is hidden)Input textClear Icon Button

## Examples

### Default

By default, a Search Field includes a visually hidden label and a search icon. Use `placeholder` to help a user understand what to search for or how to search. The default `size` is `medium`.

```tsx

  <SearchField label="Search Unsplash. Press Enter to search." placeholder="Search images"/>

```

### Visible label

Whenever possible, the label should be made visible to more clearly indicate what a user can search for.

```tsx

  <SearchField label="Search skills" labelDisplay="visible"/>

```

### Default value

You can specify the `defaultValue` for an input when it’s useful.

```tsx

  <SearchField label="Search Jira" labelDisplay="visible" defaultValue="GDS-405: New Icons"/>

```

### Controlled value

The `value` of the Search Field can also be maintained through state.

```tsx

function Example() {
const [inputValue, setInputValue] = React.useState("Unsplash");
  return (
    <Flex direction="column" gap={3}>
      <SearchField 
        label="Search skills" 
        onChange={setInputValue}
        value={inputValue}
      />
    <Flex gap={3}>
      <Button onClick={() => setInputValue("JIRA")} text="Switch to JIRA"/>
      <Button text="Reset" variant="tertiary" onClick={() => setInputValue("Unsplash")}/>
    </Flex>
  </Flex>
  )
}

```

### Events

The `onSubmit` event is called when a user hits the Enter key, and the `onClear` event will be called whenever a user clears the search value.

```tsx

  <SearchField 
      label="Search Jira" 
      labelDisplay="visible" 
      onSubmit={ (value) => alert("You submitted: " + value)}
      onClear={() => alert("You cleared the search.")}
  />

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Search Field.

```tsx

  <SearchField label="Search Unsplash. Press Enter to search." placeholder="Search images" isDisabled/>

```

### Sizes

The height of the Search Field can be altered through the `size` property.

```tsx

  <Flex direction="column" gap={6}>
    <SearchField 
      size="medium"
      label="Search skills" 
      labelDisplay="visible"
    />
    <SearchField 
      size="large"
      label="Search skills" 
      labelDisplay="visible"
    />
    <SearchField 
      size="xlarge"
      label="Search skills" 
      labelDisplay="visible"
    />

  </Flex>

```

## Behavior

### Activating a search

A user can start a search by pressing the Enter key while focused within the Search Field.

We recommend avoiding dynamic or autocomplete search, where the search results get updated after each keystroke. There is a lot involved to make sure that results are surfaced and updated in an accessible way.

```tsx

function Example() {
const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
      <SearchField 
        label="Search skills" 
        onSubmit={ (value) => setInputValue(value)}
      />
    <p>You searched for: {inputValue}</p>
  </div>
  )
}

```

## Accessibility

### Visible or hidden label

The label for a Search Field is visually hidden by default to account for surfaces where vertical space is limited. When the label is hidden, use strategic writing to make sure a Search Field's interaction remains accessible and clear to users. [Learn how to write the label](#writing).

### Placeholder text

Placeholder text may be visible or hidden based on context.

* If you use a visible label, you do not have to use placeholder text.
* If you hide the label, placeholder text is required. Although placeholder text is generally discouraged as it’s not reliably read aloud by screen readers, it is used in this case to compensate for the hidden label.

```tsx

  <Flex gap={8} align="end">
    <SearchField label="Search Unsplash images" labelDisplay="visible"/>
    <SearchField label="Search Unsplash" placeholder="Search all images"/>
  </Flex>

```

### Actions

When a value is present in a Search Field, an Icon Button to clear the input value is automatically added at the end. A default label for the button that says “Clear search” is included to make sure the action is accessible. This label helps a user understand what will happen when the Icon Button is activated.

Extra context or localization can occur by overriding `accessibilityLabelClearButton`. For example, “Clear search” may be overridden with “Clear Unsplash search” when there are multiple Search Fields in a Form.

```tsx

  <Flex gap={4}>
    <SearchField label="Search Unsplash" placeholder="Search all images" accessibilityLabelClearButton="Clear Unsplash search"/>
  </Flex>

```

### Keyboard interaction

| Key              | Expected result                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab   | Focuses the Search Field input.`<br />``<br />`If the focus is already in the input and a value is present, moves focus to the **Clear** Icon Button at the end of the input. If there is no Icon Button, moves focus to next focusable item. |
| Enter | If focus is on the **Clear** Icon Button, clears the value and moves focus back to the input. If the focus is on the input, activates the `onSubmit` callback.                                                                                  |
| Space | If focus is on the **Clear** Icon Button, clears the value and moves focus back to the input.                                                                                                                                                   |
| Esc   | Clears the input of any search value.                                                                                                                                                                                                           |

## Writing

### Visible or hidden label

For a visually hidden label:

* Structure the label content as “Search \[items]. Press Enter to search.”
* Replace \[items] with a meaningful description of what a user can search for. For example, in a help center you might say “Search support articles. Press Enter to search.”

For a visible label, follow the Label writing guidelines from the Form pattern. [Learn how to write a Form input label](/patterns/forms-pattern/forms#labels).

### Placeholder text

Placeholder text in a Search Field has two common styles. For both, use sentence case and do not include end punctuation.

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Search Field component in JS.

```tsx
import { SearchField } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Used for the input’s label. Required for screen reader users, but visually hidden by default. Should be “Search [items]. Press Enter to search.” |
| `accessibilityLabelClearButton` | `string` | Clear search | Used to override the aria-label on the Clear Icon Button. |
| `defaultValue` | `string` | - | Used to add prefilled text in the Search Field input. |
| `isDisabled` | `boolean` | - | When true, indicates that the Search Field cannot be focused, changed, or interacted with. |
| `labelDisplay` | `'visible' | 'hidden'` | hidden | Used to visually hide the label when another element on the page is acting as the visual label for the Search Field. The label is hidden by default in Search Field. |
| `name` | `string` | - | Indicates the unique name for this input. Used for Form validation. |
| `placeholder` | `string` | - | Adds placeholder text to the input. Should be “Search [items]” or “Example: [item]”. |
| `size` | `'medium' | 'large' | 'xlarge'` | medium | Controls the height of the Search Field. |
| `value` | `string` | - | To implement as controlled component, the \`value\` prop can be used to maintain the input’s value. |
| `onChange` | `(value: T) => void` | - | Event handler that is called when the input value changes. |
| `onClear` | `() => void` | - | Event handler that is called when the Clear Icon Button is activated. |
| `onFocus` | `(e: FocusEvent<Target>) => void` | - | Event handler that is called when the input receives focus. |
| `onSubmit` | `(value: string) => void` | - | Event handler that is called when the Enter key is pressed and focus is within the input. |


## Related components

- [Combobox](/components/combobox)
- [Radio Group](/components/radio-group)
- [Textarea](/components/textarea)
- [Text Field](/components/text-field)
