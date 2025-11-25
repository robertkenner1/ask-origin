# Text Field

A Text Field accepts a single line of text, numbers, and symbols.

Text Fields give a user a way to update their first and last names in a Modal.

## Usage​

Use when a short, typed response is required from a user.

**Do not use when:**

* The expected input is long-form content wrapped into multiple lines. Instead, use a [Textarea](/components/textarea).
* A user can search for an item on a website, on a page, or within a component. Instead, use a [Search Field](/components/search-field).

## Anatomy

!\[Anatomy diagram of a Text Field]\(/img/components/text\_field\_anatomy.svg)

Label (required)Optional or Required indicatorHelper textIcon start Icon Button endError message

## Examples

### Default

By default, a Text Field includes the input field and a `label`. The default `size` is `medium`.

```tsx

  <TextField label="First name"/>

```

### With helper text

Use `helperMessage` to display additional details beyond the label of a Text Field.

```tsx

  <TextField label="Username" helperMessage="Must be at least one character"/>

```

### With an error

Use `errorMessage` to change the color of the field’s outline to red and display an error message.

```tsx

  <TextField label="Username" errorMessage="That username is taken. Try a different one."/>

```

### Icon Start

An icon placed at the start can help demonstrate what type of information is expected. `iconStart` is hidden from a screen reader, so always include context in the `label` or `helperMessage`.

```tsx

  <TextField iconStart={InterfaceFolderIcon} label="Email address"/>

```

### Required or optional indicator

Use `isRequired` or `isOptional` to add an indicator to the `label`. Follow the Form pattern to decide when to note a field is required or optional. [Learn about required and optional indicators](/patterns/forms#required-or-optional-indicator-1).

```tsx

  <Flex gap={4}>
    <TextField isRequired label="First name"/>
    <TextField isOptional label="Nickname" />
  </Flex>

```

### Default value

You can specify the `defaultValue` for an input when it’s useful.

```tsx

  <TextField label="Username" defaultValue="Pepper09"/>

```

### Controlled value

The `value` of a Text Field can also be maintained through state.

```tsx

function Example() {
const [inputValue, setInputValue] = React.useState("pepper@bestpet.com");
  return (
  <Flex align="center" gap={8}>
      <TextField 
        label="Email address" 
        onChange={setInputValue}
        value={inputValue}
      />
    <Flex gap={3}>
      <Button onClick={() => setInputValue("ellie@bestpet.com")} text="Switch email"/>
      <Button text="Reset" variant="tertiary" onClick={() => setInputValue("pepper@bestpet.com")}/>
    </Flex>
  </Flex>
  )
}

```

### Password

If `type="password"`, an Icon Button is automatically added to allow a user to view or obscure the password content.

:::caution Form submission
When a password field is submitted, the `type` of the Text Field *must* be set back to `type="password"` to ensure the browser is not storing the password in plain text.
:::

```tsx

  <TextField label="New password" type="password"/>

```

### Events

The `onChange` event can be used to track changes to the input’s value.

```tsx

  <TextField 
    label="New username" 
    onChange={( value ) => {
      alert("on change: " + value);
    }}
  />

```

### With a ref

A `ref` can be set on a Text Field, which can help with focus management.

```tsx

function Example() {
  const inputRef = React.useRef(null);
  return (
    <Flex direction="column" gap={3}>
      <TextField 
        ref={inputRef}
        label="New username"
      />
    <Button variant="secondary" text="Focus input" onClick={() => inputRef.current.focus()}/>
  </Flex>
  )
}

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Text Field.

```tsx

  <TextField label="Old password" isDisabled/>

```

### In a form

Text Field includes properties like `type`, `autocomplete`, and `name` that can be used to track data in a form.

```tsx

  <TextField label="Current password" type="password" autocomplete="current-password" name="current-password"/>

```

## Behavior

### Size

The container of a Text Field determines its width. The height of the Text Field can be changed using the `size` property.

```tsx

  <Flex gap={4} direction="column">
    <div style={{width: '200px'}}>
      <TextField type="password" label="New password" />
    </div>
    <div style={{width: '400px'}}>
      <TextField type="password" label="New password" />
    </div>
    <div style={{width: '400px'}}>
      <TextField size="large" type="password" label="New password" />
    </div>
    <div style={{width: '400px'}}>
      <TextField size="xlarge" type="password" label="New password" />
    </div>
  </Flex>

```

### Interaction

* Icons at the start of the input should always be static.
* Icons at the end of the input are interactive Icon Buttons.

```tsx

  <Flex gap={4}>
    <TextField iconStart={InterfaceFolderIcon} label="Email address"/>
    <TextField type="password" label="New password" />
  </Flex>

```

## Accessibility

### Hidden labels

A Text Field’s label can only be plain text placed above the input. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want to place the label to the side of the input instead of on top of it. This requires visually hiding a Text Field’s label and adding a separate Text component nearby.

A `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Add an `onClick` event handler to the external, visible text that acts as the label. That `onClick` handler should call `.focus()` on the input.

```tsx

  <Flex align="center" justify="space-between" width={400} gap={2}>
    <Text as="p" variant="text-small">View snippet list</Text>
    <TextField labelDisplay="hidden" label="Shortcut to view snippet list" defaultValue="/\"/>
  </Flex>

```

### Actions

If `type="password"`, an Icon Button is automatically added to allow a user to view or obscure the password content. To ensure this action is accessible, include default labels for the button in both states. This helps users understand the action that will be taken when the Icon Button is activated.

Extra context or localization can occur by overriding `accessibilityLabelShowPassword` and `accessibilityLabelHidePassword`. For example, “Show password” and “Hide password” may be overridden with “Show new password” and “Hide new password” when there are multiple password fields in a form.

```tsx

  <Flex gap={4}>
    <TextField type="password" label="Old password" accessibilityLabelShowPassword="Show old password" accessibilityLabelHidePassword="Hide old password"/>
    <TextField type="password" label="New password" accessibilityLabelShowPassword="Show new password" accessibilityLabelHidePassword="Hide new password"/>
  </Flex>

```

### Icons

Icons at the start of the input are purely decorative and will not be announced to a screen reader. If the `iconStart` adds context around the expected input for a Text Field, include that context in the `label` or `helperMessage`.

### Keyboard interaction

| Key                                  | Expected result                                                                                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tab                       | Focuses the Text Field input.`<br />``<br />`If the focus is already in the input, moves focus to any Icon Button at the end of the input. If there is no Icon Button, moves focus to next focusable item. |
| Enter or Space | If the focus is on the Text Field’s Icon Button, activates the action of the Icon Button and moves focus back to the input.                                                                                  |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms).

### Labels

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

| Do ✅ | Don't ❌ |
|-------|----------|
| Keep the writing structure and verb tense consistent within a set of Form components. ![3 input fields are shown with labels that say Street address, City, and State. The style is parallel.](/img/patterns/label_writing_DO_1.svg) | Do not mix writing structures or verb tenses within a set of Form components. ![3 input fields are shown with labels that say Street address, Enter your city, and Select state. The style is mistmatched.](/img/patterns/label_writing_DONT_1.svg) |
| Use language that adds specificity and builds on information given in other elements. ![In a modal for adding a new term, 2 text fields are shown with labels that read Link and Display name. Above them is a callout to add any important documents relevant to the term.](/img/patterns/label_writing_DO_2.svg) | Do not unnecessarily repeat information given in nearby elements. ![In a modal for adding a new term, 2 text fields are shown with labels that read Related link for term and Display name for related term. The labels are long and reference each other, as well as other text in the modal, which is confusing.](/img/patterns/label_writing_DONT_2.svg) |
| Use sentence case. ![A Text Field for a first and last name has a label written in sentence case, where only the first letter of the first word is capitalized.](/img/components/Textfield_label_writing_DO_3.svg) | Do not use Title Case or ALL CAPS. ![A Text Field for a first and last name has a label written in all caps.](/img/components/Textfield_label_writing_DONT_3.svg) |
| Use internal punctuation when necessary. ![A Text Field has a label, decision-maker's name, which has two examples of internal punctuation—a hyphen and an apostrophe.](/img/components/Textfield_label_writing_DO_5.svg) | Do not use end punctuation, except for question marks. ![A Text Field has a label with an exclamation point at the end, which is discouraged in addition to periods.](/img/components/Textfield_label_writing_DONT_5.svg) |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. ![A Text Fields's label reads Show labels entirely, even long ones. Helper text says A little helper text can go a long way. It demonstrates showing all of the text for a long label.](/img/components/Textfield_label_writing_DO_4.svg) | Do not truncate a label. ![A Text Fields's label is shown truncated without all of the text content. It says Show long labels in their entirety, even … but the end of the phrase is unfinished.](/img/components/Textfield_label_writing_DONT_4.svg) |

### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do with action verbs, while others define terms and requirements with punchy fragments of information.

| Do ✅ | Don't ❌ |
|-------|----------|
| In human terms, directly state how a user will benefit from their giving their input or a reason we are requesting their input. ![The helper text for a Text Field collecting a user's first and last name lets them know we use it in the product to greet them.](/img/components/textfield_helper_writing_DO_1.svg) | Do not use ambivalent or meandering language that softens feature benefits. ![The helper text for a Text Field says If you add your name, you can see it in Grammarly as a way to identify your account. It's long and somewhat unclear.](/img/components/textfield_helper_writing_DONT_1.svg) |
| Define terms that may not be clear. ![The helper text for a Text Field input says Supplied by your identity provider. Verifies members when they enter their work credentials. to describe the label SAML 2.0 endpoint.](/img/patterns/helper_writing_DO_2.svg) | Do not use jargon or overly technical language that hinders clarity. ![The helper text for a Text Field labeled SAML 2.0 endpoint doesn't help define the unclear label because it contains words like XML-based protocol, principal authority, and identity provider.](/img/patterns/helper_writing_DONT_2.svg) |
| Make requirements clear to help prevent errors before they happen. ![The helper text for a Text Field for a phone number says enter exactly 10 digits, so that a user knows the requirement.](/img/patterns/helper_writing_DO_3.svg) | Do not assume that a user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. ![A Text Field for a phone number has no helper text, but a user may not use the right format unless we tell them what format we want.](/img/patterns/helper_writing_DONT_3.svg) |
| Use "Example:" to offer a universal and inclusive example of an expected input. It's OK to provide both instructions and an example if space allows. ![Helper text says Example: 123 fake st.](/img/patterns/helper_writing_DO_4.svg) | Do not use "E.g." or "I.e." to indicate an example. ![Helper text says E.g., 123 fake st. We want to avoid this and similar abbreviations so that context is clear.](/img/patterns/helper_writing_DONT_4.svg) |
| Be brief. Use 140 characters or fewer unless unavoidable. ![Helper text for a personal dictionary entry field lets users know they could add words, names, or acronyms.](/img/components/textfield_helper_writing_DO_5.svg) | Do not overexplain, which can slow down a user with surplus information. ![Helper text for a personal dictionary entry field has a very long description over 140 characters that isn't needed for a user to understand how to interact with the product.](/img/components/textfield_helper_writing_DONT_5.svg) |
| Use sentence case. ![Helper text is shown written in sentence case, where only the first letter of the first word is capitalized.](/img/components/textfield_helper_writing_DO_6.svg) | Do not use Title Case or ALL CAPS. ![Helper text is shown written in all caps.](/img/components/textfield_helper_writing_DONT_6.svg) |
| Include punctuation if it's a complete sentence or to distinguish two fragments. ![Helper text says you can change this anytime in Settings.](/img/components/textfield_helper_writing_DO_7.svg) | Do not use exclamation points. ![Helper text has an exclamation point at the end, which we want to avoid.](/img/components/textfield_helper_writing_DONT_7.svg) |

### Placeholder text

In general, do not use placeholder text. To convey information necessary for understanding how to fill in a Text Field, use helper text that is accessible to a screen reader. [Learn how to write helper text](#helper-text).

| Do ✅ | Don't ❌ |
|-------|----------|
| Use placeholder text rarely and only for nonessential information. ![](/img/components/text_field_placeholder_do.svg) | Do not use placeholder text for information necessary for understanding a Text Field. ![](/img/components/text_field_placeholder_dont.svg) |

### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Text Field component in JS.

```tsx
import { TextField } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Displays the text label for the Text Field. |
| `accessibilityLabelHidePassword` | `string` | Hide password | Used to override the aria-label on the Hide Password Icon Button. |
| `accessibilityLabelShowPassword` | `string` | Show password | Used to override the aria-label on the Show Password Icon Button. |
| `autocomplete` | `'bday' | 'current-password' | 'email' | 'new-password' | 'username' | 'url' | 'on' | 'off'` | - | Used to tell browsers when to offer autocomplete suggestions. |
| `defaultValue` | `string` | - | Used to add prefilled text in a Text Field. |
| `errorMessage` | `string` | - | Indicates the Text Field is in an error state, adds error message below the Text Field, and adds a red border. |
| `helperMessage` | `string` | - | Provides additional context for this Text Field outside of the label. |
| `iconStart` | `ReactNode | undefined` | undefined | Icon to place at the start of the Text Field. Icon is decorative and will be hidden from screen readers. |
| `isDisabled` | `boolean` | - | When true, indicates that the Text Field cannot be focused, changed, or interacted with. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the label. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with \`isOptional\`. |
| `labelDisplay` | `'visible' | 'hidden'` | visible | Can be used to visually hide the label when another element on the page is acting as the visual label for the Text Field. |
| `labelIndicatorForOptional` | `string` | (Optional) | Used to override the content for the optional indicator. |
| `labelIndicatorForRequired` | `string` | (Required) | Used to override the content for the required indicator. |
| `name` | `string` | - | Identifies the unique name for this Text Field. Used for form validation. |
| `size` | `'medium' | 'large' | 'xlarge'` | medium | Controls the height of the text field. |
| `type` | `'text' | 'url' | 'tel' | 'email' | 'password' | 'number' | 'date' | 'time' | 'datetime-local'` | text | Used to indicate specific types of Text Field. |
| `value` | `string` | - | Indicates the current value of the input (controlled). Used for form validation.<br></br><br></br>For a controlled component, use the \`onChange\` event handler to set this prop appropriately. Do not use this property for uncontrolled components. |
| `onChange` | `(value: T) => void` | - | Event handler that is called when the Text Field value changes. |
| `onFocus` | `(e: FocusEvent<Target>) => void` | - | Event handler that is called when the Text Field receives focus. |


## Related components

- [Search Field](/components/search-field)
- [Textarea](/components/textarea)
