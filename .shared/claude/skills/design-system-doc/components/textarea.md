# Textarea

A Textarea accepts multiple lines of text, numbers, or symbols.

A Textarea captures the text used in a Snippet, which can range from short, direct messages to
long-form emails depending on a user’s need.

## Usage

Use when the expected text input is long-form content wrapped into multiple lines.

**Do not use when** a short, typed response is expected, such as an email address or password. Instead, use a [Text Field](/components/text-field).

## Anatomy

!\[Anatomy diagram of a Textarea]\(/img/components/textarea\_anatomy.svg)

Label (required)Helper textOptional or required indicatorTextarea input (required)Error message

## Examples

### Default

By default, a Textarea is resizable, displays space for three rows of text in the input field, and includes a `label`.

```tsx

  <Textarea label="Snippet content"/>

```

### Resizing

Use `resizable="off"` to prevent resizing of the input when it’s helpful for a user’s experience. You can also allow resizing in a single direction by specifying either `resizable="vertical"` or `resizable="horizontal"`.

```tsx

  <Flex gap={3}>
    <Textarea label="Snippet content" helperMessage="Not resizable" resizable="off"/>
    <Textarea label="Snippet content" helperMessage="Vertically resizable" resizable="vertical"/>
    <Textarea label="Snippet content" helperMessage="Horizontally resizable" resizable="horizontal"/>
  </Flex>

```

### With helper text

Use `helperMessage` to display additional details beyond the label of a Textarea.

```tsx

  <Textarea label="Snippet content" helperMessage="Maximum: 5,000 characters"/>

```

### With an error

Use `errorMessage` to change the color of the field’s outline to red and display an error message.

```tsx

  <Textarea label="Job description" isRequired errorMessage="Add a few examples of what you do."/>

```

### Required or optional indicator

Use `isRequired` or `isOptional` to add an indicator to the `label`. Follow the Form pattern to decide when to note a field is required or optional. [Learn about required and optional indicators](/patterns/forms#required-or-optional-indicator-1).

```tsx

  <Flex gap={8}>
    <Textarea label="Snippet content" isRequired/>
    <Textarea label="Snippet content" isOptional/>
  </Flex>

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Textarea.

```tsx

  <Textarea label="Job description" isDisabled/>

```

### Default value

You can specify the `defaultValue` for an input when it’s useful.

```tsx

  <Textarea label="Snippet content" defaultValue="All the best, GDS"/>

```

### Controlled value

The `value` of a Textarea can also be maintained through state.

```tsx

  <Textarea label="Improve it" value="The quick brown fox jumps over the lazy dog."/>

```

### Events

The `onChange` event can be used to track changes to the input’s value. The `onFocus` event is called whenever a Textarea receives focus.

```tsx

  <Textarea 
    label="Tell us more"
    helperMessage="Add details about your issue." 
    onChange={( value ) => {
      alert("on change: " + value);
    }}
  />

```

### With a ref

A `ref` can be set on a Textarea, which can help with focus management.

```tsx

function Example() {
  const inputRef = React.useRef(null);
  return (
    <Flex gap={3} direction="column">
      <Textarea 
        ref={inputRef}
        label="About you"
      />
      <Button variant="secondary" text="Focus input" onClick={() => inputRef.current.focus()}/>
    </Flex>
  )
}

```

### In a form

A Textarea includes properties like `name` that can be used to track data in a form.

```tsx

  <Textarea name="improve-content" label="Improve it" value="The quick brown fox jumps over the lazy dog."/>

```

## Behavior

### Size

The container of a Textarea determines its width.

By default, a Textarea displays space for three rows of text. Use the `rows` prop to set the initial height based on how much text a user is expected to write.

A Textarea does not automatically resize to display a user’s entire text as they type; however, a user can manually change the width and height of a Textarea by default. You can set `resizable="off"` to prevent resizing or alternatively allow resizing in a single direction by specifying either `resizable="vertical"` or `resizable="horizontal"`.

```tsx

  <Textarea rows={6} label="Improve it" resizable="horizontal"/>

```

## Accessibility

### Hidden labels

A Textarea's label can only be plain text placed above the input. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want to place the label to the side of the input instead of on top of it. This requires visually hiding a Textarea's label and adding a separate Text component nearby.

A `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Add an `onClick` event handler to the external, visible text that acts as the label. That `onClick` handler should call `.focus()` on the input.

```tsx

  <Flex gap={8} direction="column">
    <div style={{display: 'grid', gap: "36px", gridTemplateColumns: "1fr 200px"}}>
      <Text as="p" variant="text-small">Snippet name</Text>
      <TextField labelDisplay="hidden" label="Unique name for this snippet"/>
    </div>
    <div style={{display: 'grid', gap: "36px", gridTemplateColumns: "1fr 200px"}}>
      <Text as="p" variant="text-small">Snippet description</Text>
      <Textarea labelDisplay="hidden" label="Snippet description"/>
    </div>
  </Flex>

```

### Keyboard interaction

| Key            | Expected result                    |
| -------------- | ---------------------------------- |
| Tab | Moves focus to the Textarea input. |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms).

### Labels

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

### Writing best practices for Textarea labels

| Do | Don't |
|----|-------|
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Use internal punctuation when necessary. | Do not use end punctuation, except for question marks. |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. | Do not truncate a label. |


### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do with action verbs, while others define terms and requirements with punchy fragments of information.

### Writing best practices for helper text

| Do | Don't |
|----|-------|
| In human terms, directly state how a user will benefit from their giving their input or a reason we are requesting their input. | Do not use ambivalent or meandering language that softens feature benefits. |
| Define terms that may not be clear. | Do not use jargon or overly technical language that hinders clarity. |
| Make requirements clear to help prevent errors before they happen. | Do not assume that a user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. |
| Be brief. Use 140 characters or fewer unless unavoidable. | Do not overexplain, which can slow down a user with surplus information. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Include punctuation if it’s a complete sentence or to distinguish two fragments. | Do not use exclamation points. |


### Placeholder text

In general, do not use placeholder text. To convey information necessary for understanding how to fill in a Textarea, use helper text that is accessible to a screen reader. [Learn how to write helper text](#helper-text).

| Do ✅ | Don't ❌ |
|-------|----------|
| Use placeholder text rarely and only for nonessential information. | Do not use placeholder text for information necessary for understanding a Textarea. |

### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Textarea component in JS.

```tsx
import { Textarea } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Displays the text label for a Textarea. |
| `defaultValue` | `string` | - | Used to add prefilled text in a Textarea. |
| `errorMessage` | `string` | - | Indicates a Textarea is in an error state, adds error message below the Textarea, and adds red border. When an error message is present, it is read by a screen reader after the label. |
| `helperMessage` | `string` | - | Additional context for this Textarea outside of the label. The recommended max length for helper text is 140 characters.<br></br>\`Aria-describedby\` points to helper text (handled by \`react-aria\`). |
| `isDisabled` | `boolean` | - | When true, indicates that the Textarea cannot be focused, changed, or interacted with. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the label. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with \`isOptional\`. |
| `labelDisplay` | `'visible' | 'hidden'` | visible | Can be used to visually hide the label when another element on the page is acting as the visual label for the Textarea. |
| `labelIndicatorForOptional` | `string` | (Optional) | Used to override the content for the optional indicator. |
| `labelIndicatorForRequired` | `string` | (Required) | Used to override the content for the required indicator. |
| `name` | `string` | - | Indicates the unique name for an input. Used for form validation. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname). |
| `placeholderMessage` | `string` | - | Used to display placeholder text in a Textarea. Not recommended because this text disappears when a user starts to type. |
| `resizable` | `'on' | 'off' | 'vertical' | 'horizontal'` | on | Controls whether the Textarea is resizable and in which directions. |
| `rows` | `number` | - | Sets the number of visible rows. |
| `value` | `string` | - | Indicates the current value of the input (controlled). Used for form validation.<br></br><br></br>For a controlled component, use the \`onChange\` event handler to set this prop appropriately. Do not use this property for for uncontrolled components. |
| `onChange` | `(value: T) => void` | - | Event handler that is called when the Textarea value changes. |
| `onFocus` | `(e: FocusEvent<Target>) => void` | - | Event handler that is called when the Textarea receives focus. |


## Related components

- [Text Field](/components/text-field)
