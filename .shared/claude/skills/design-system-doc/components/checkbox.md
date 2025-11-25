# Checkbox

Checkboxes offer a range of selections—zero, one, and many.

This Checkbox allows a user to select a rule in a table.

## Usage

**Use when:**

* It’s possible to select zero, one, or many options in a set.
* Asking a user to agree to something, such as terms and conditions.
* Asking a user to select an item, such as a row in a table.

**Do not use when:**

* It’s possible to pick only one option from a set. Instead, use a [Radio Group](/components/radio-group).
* Checking one option would uncheck another option in the list. Instead, use a [Radio Group](/components/radio-group) or [Radio Button Group](/components/radio-button-group).
* A single item can be turned on and off independently from other options and effects of the state change are immediate. Instead, use a [Switch](/components/switch).

## Anatomy

!\[Anatomy diagram of a Checkbox and Checkbox Group]\(/img/components/checkbox\_anatomy.svg)

Checkbox (required)Label (required)Optional or Required indicator Helper textError messageLegend (required for a Checkbox Group)Checkbox Group

## Examples

### Standalone Checkbox

By default, a Checkbox includes the Checkbox input and a `label`.

```tsx
<Checkbox>Remember me</Checkbox>
```

### Checkbox Group

Checkboxes are often used to display a set of options in a [Form](/patterns/forms-pattern/forms). Labels must be visible for each Checkbox in a group.

#### Column layout

The default `layout` for multiple Checkboxes in a group is a two-column layout.

```tsx
<CheckboxGroup legend="What are your writing goals?"><CheckboxItem value="readability">Improve readability</CheckboxItem><CheckboxItem value="vocabulary">Expand vocabulary</CheckboxItem><CheckboxItem value="confidence">Feel confident</CheckboxItem><CheckboxItem value="plagiarism">Detect plagiarism</CheckboxItem></CheckboxGroup>
```

#### Row layout

A Checkbox Group can use a row layout by setting `layout="row"`. Use when there are only two or three Checkboxes or when a row layout is preferable to save vertical space.

```tsx
<CheckboxGroup layout="row" legend="What are your writing goals?"><CheckboxItem value="readability">Improve readability</CheckboxItem><CheckboxItem value="vocabulary">Expand vocabulary</CheckboxItem><CheckboxItem value="confidence">Feel confident</CheckboxItem><CheckboxItem value="plagiarism">Detect plagiarism</CheckboxItem></CheckboxGroup>
```

### With helper text

Use `helperMessage` to provide additional details beyond the legend of a Checkbox Group. A standalone Checkbox or a Checkbox inside a Checkbox Group can also use `helperMessage` to provide more context.

```tsx

<Flex gap={14} wrap>
<Checkbox helperMessage="Not suggested on public computers">Remember me</Checkbox>
<CheckboxGroup
  layout="column"
  legend="What are your writing goals?"
  helperMessage="Tell us what you hope to get out of using Grammarly."
>
  <CheckboxItem
    value="readability"
    helperMessage="Covers grammar, sentence structure, brevity, and more"
  >
    Improve readability
  </CheckboxItem>
  <CheckboxItem
    value="vocabulary"
    helperMessage="Identifies stronger synonyms and alternative phrasing"
  >
    Expand vocabulary
  </CheckboxItem>
  <CheckboxItem
    value="confidence"
    helperMessage="Improves tone and ensures strong sentence structure"
  >
    Feel confident
  </CheckboxItem>
</CheckboxGroup>
</Flex>

```

### With an error

Use `errorMessage` to change the color of the checkbox’s outline to red and display an error message.

```tsx
<Checkbox errorMessage="You must agree to continue.">I agree to the Terms and Conditions.</Checkbox>
```

### Required or optional indicator​

Use `isRequired` or `isOptional` to add an indicator to the `legend` or `label`. Follow the Form pattern to decide when to note a field is required or optional. [Learn about required and optional indicators](/patterns/forms-pattern/forms#required-or-optional-indicator-1).

```tsx
<><Checkbox isRequired>Remember me</Checkbox><Checkbox isOptional>Remember me</Checkbox></>
```

### Size

Both individual Checkboxes and Checkbox Groups can be resized using the `size` property. The default size is `medium`.

```tsx

<Flex gap={8} direction="column">
<Checkbox size="medium" helperMessage="Not suggested on public computers">Remember me</Checkbox>
<Checkbox size="large" helperMessage="Not suggested on public computers">Remember me</Checkbox>
<Checkbox size="xlarge" helperMessage="Not suggested on public computers">Remember me</Checkbox>
</Flex>

```

```tsx

<Flex gap={14} direction="column">
<CheckboxGroup
  layout="column"
  legend="What are your writing goals?"
  helperMessage="Tell us what you hope to get out of using Grammarly."
  size="medium"
>
  <CheckboxItem
    value="readability"
    helperMessage="Covers grammar, sentence structure, brevity, and more"
  >
    Improve readability
  </CheckboxItem>
  <CheckboxItem
    value="vocabulary"
    helperMessage="Identifies stronger synonyms and alternative phrasing"
  >
    Expand vocabulary
  </CheckboxItem>
  <CheckboxItem
    value="confidence"
    helperMessage="Improves tone and ensures strong sentence structure"
  >
    Feel confident
  </CheckboxItem>
</CheckboxGroup>  
<CheckboxGroup
  layout="column"
  legend="What are your writing goals?"
  helperMessage="Tell us what you hope to get out of using Grammarly."
  size="large"
>
  <CheckboxItem
    value="readability"
    helperMessage="Covers grammar, sentence structure, brevity, and more"
  >
    Improve readability
  </CheckboxItem>
  <CheckboxItem
    value="vocabulary"
    helperMessage="Identifies stronger synonyms and alternative phrasing"
  >
    Expand vocabulary
  </CheckboxItem>
  <CheckboxItem
    value="confidence"
    helperMessage="Improves tone and ensures strong sentence structure"
  >
    Feel confident
  </CheckboxItem>
</CheckboxGroup> 
<CheckboxGroup
  layout="column"
  legend="What are your writing goals?"
  helperMessage="Tell us what you hope to get out of using Grammarly."
  size="xlarge"
>
  <CheckboxItem
    value="readability"
    helperMessage="Covers grammar, sentence structure, brevity, and more"
  >
    Improve readability
  </CheckboxItem>
  <CheckboxItem
    value="vocabulary"
    helperMessage="Identifies stronger synonyms and alternative phrasing"
  >
    Expand vocabulary
  </CheckboxItem>
  <CheckboxItem
    value="confidence"
    helperMessage="Improves tone and ensures strong sentence structure"
  >
    Feel confident
  </CheckboxItem>
</CheckboxGroup> 
</Flex>

```

### Default selection

Specify the `defaultSelected` property if a Checkbox needs to be selected by default when it is first presented to a user. Use the `defaultValue` property to indicate which Checkboxes within a group should be selected by default.

```tsx

<Flex gap={14} wrap>
<Checkbox defaultSelected>Remember me</Checkbox>
<CheckboxGroup
  defaultValue={['vocabulary', 'confidence']}
  layout="column"
  legend="What are your writing goals?"
  helperMessage="Tell us what you hope to get out of using Grammarly."
>
  <CheckboxItem
    value="readability"
    helperMessage="Covers grammar, sentence structure, brevity, and more"
  >
    Improve readability
  </CheckboxItem>
  <CheckboxItem
    value="vocabulary"
    helperMessage="Identifies stronger synonyms and alternative phrasing"
  >
    Expand vocabulary
  </CheckboxItem>
  <CheckboxItem
    value="confidence"
    helperMessage="Improves tone and ensures strong sentence structure"
  >
    Feel confident
  </CheckboxItem>
</CheckboxGroup>
</Flex>

```

### Events

The `onChange` event is called whenever the Checkbox is checked or unchecked.

```tsx
function ControlledCheckboxExample() {
const [selected, setSelected] = React.useState(false);
return (
  <Checkbox
    isSelected={selected}
    onChange={(isSelected) => {
      setSelected(isSelected)
      alert("Your selection was saved.")
    }}
  >
    Remember me
  </Checkbox>
);
}
```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Checkbox or Checkbox Group.

```tsx
<Checkbox defaultSelected isDisabled>Remember me</Checkbox>
```

## Behavior

### Indeterminate state​

A Checkbox is in the indeterminate state when it is neither checked nor unchecked and the system can’t determine which state to display. This scenario usually happens when a single Checkbox controls a group of Checkboxes, as in a table, and some but not all of the Checkboxes in the group are selected.

!\[Checkbox group in a table showing an indeterminate state]\(/img/components/checkbox\_indeterminate.svg)

The Checkbox at the top of the column appears in the indeterminate state because the group of
Checkboxes that it controls aren’t uniformly checked or unchecked.

## Accessibility

### Hidden legend​

A Checkbox Group’s legend can only be plain text. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want to make the text **bold**. This requires visually hiding a Checkbox Group’s legend and adding a separate Text component nearby.

A `legend` is still required, but use `legendDisplay="hidden"` to visually hide the legend while maintaining accessibility for people using screen readers. The hidden legend must include the visible text while providing any additional context if needed.

### Hidden labels

In rare cases, it is appropriate to hide the label of an individual Checkbox. This most commonly applies in tables, where a Checkbox selects a row. A `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Add an `onClick` event handler to the external, visible text that acts as the label. That `onClick` handler should call `.focus()` on the input.

Structure the hidden label to provide a meaningful description of the selection, such as “Row: Rule to correct spelling of Grammarly.”

!\[Checkbox with a hidden label]\(/img/components/checkbox\_hidden\_label.svg)

A single row in the table is selected. The Checkbox does not need an additional visible label
because the rule name “Grammerly, grammarly, gr … → Grammarly” is listed in the table.

### Disabling options​

Use `isDisabled` on a Checkbox Group to indicate that all options within the group are unavailable. When only one or a few options are unavailable, use `isDisabled` on the individual Checkbox.

When a Checkbox has the `isDisabled` attribute, it’s skipped in the keyboard navigation order. Users navigating this way will not know there is an unavailable item.

### Keyboard interaction

| Key              | Expected result                                                                                                                                                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab   | Moves focus into the Checkbox or group of Checkboxes.`<br />``<br />`If a Checkbox is already selected, moves focus to that Checkbox. If a Checkbox is not selected, the focus lands on the first Checkbox (or last if moving backward through focus order). |
| Space | Selects or deselects the currently focused Checkbox.                                                                                                                                                                                                           |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms-pattern/forms).

### Legend​ and labels

For a group of Checkboxes, include a legend that clearly describes the purpose of the entire set. An individual Checkbox label is more specific and should clearly distinguish each option from one another.

### Writing best practices for Checkbox Group legends and Checkbox labels

| Do | Don't |
|----|-------|
| Keep the writing structure and verb tense consistent within a list of Checkboxes or other Form components. | Do not mix writing structures or verb tenses within a list of Checkboxes or other Form components. |
| Use language that adds specificity and builds on information given in other elements. | Do not unnecessarily repeat information given in nearby elements. |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. | Do not truncate text. |


### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do using action verbs, while others define terms and requirements with punchy fragments of information. [View examples of helper text](/patterns/forms-pattern/forms#helper-text).

### Writing best practices for helper text

| Do | Don't |
|----|-------|
| In human terms, directly state how a user will benefit from giving their input or a reason we are requesting their input. | Do not use ambivalent or meandering language that softens feature benefits. |
| Define terms that may not be clear. | Do not use jargon or overly technical language that hinders clarity. |
| Make requirements clear to help prevent errors before they happen. | Do not assume that a user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. |
| Be brief. Use 140 characters or fewer unless unavoidable. | Do not overexplain, which can slow down a user with surplus information. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Include end punctuation if it’s a complete sentence or to distinguish two fragments. | Do not use exclamation points. |


### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Checkbox, CheckboxGroup and CheckboxItem components in JS.

```tsx
import { Checkbox, CheckboxGroup, CheckboxItem } from "@superhuman/origin";
```

## API

### Checkbox props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `ReactNode` | - | Used to display the label of a Checkbox. |
| `defaultSelected` | `boolean` | - | Defines whether the Checkbox is selected by default (uncontrolled). |
| `errorMessage` | `string` | - | Indicates the Checkbox is in an error state, adds error message below the Checkbox, and adds a red border. |
| `helperMessage` | `string` | - | Provides additional context for this Checkbox outside of the label. <br></br> An HTML element is automatically created to contain the helper text. By default, \`aria-describedby\` points to this HTML element. <br></br> If both \`aria-describedby\` and \`helperMessage\` are set, \`aria-describedby\` will point to the helper text since it was provided. |
| `isDisabled` | `boolean` | - | When true, indicates that the Checkbox cannot be focused, changed, or interacted with. |
| `isIndeterminate` | `boolean` | - | When true, indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the label. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” to the label and marks input as required. Cannot be combined with \`isOptional\`. |
| `isSelected` | `boolean` | - | When true, indicates that the Checkbox is checked. For a controlled component, use the \`onChange\` event handler to set this property appropriately. Do not use this property for uncontrolled components. |
| `labelDisplay` | `'visible' | 'hidden'` | visible | Used to visually hide the label when appropriate. [Read hidden label guidelines](#hidden-labels). |
| `labelIndicatorForOptional` | `string` | (Optional) | Used to override the content for the optional indicator. |
| `labelIndicatorForRequired` | `string` | (Required) | Used to override the content for the required indicator. |
| `name` | `string` | - | Defines the unique name of the input. Used when submitting an HTML form. <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname' target='_blank'>Learn more at MDN</a>. |
| `size` | `'medium' | 'large' | 'xlarge'` | medium | Controls the size of the Checkbox and label. |
| `value` | `string` | - | Used to identify the input when submitting an HTML form. <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value' target='_blank'>Learn more at MDN</a>. |
| `onChange` | `(isSelected: boolean) => void` | - | Event handler that is called whenever the Checkbox is checked or unchecked. |


### CheckboxGroup props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `CheckboxItem[]` | - | Used for the contents of the Checkbox Group. Must be Checkbox items. |
| `legend` | `string` | - | Used to display the legend for a Checkbox Group. |
| `defaultValue` | `string[]` | - | Indicates any Checkboxes that should be checked by default. Must match the \`value\` of the Checkbox. |
| `errorMessage` | `string` | - | Indicates the Checkbox Group is in an error state, adds error message below the Checkboxes, and adds a single red border around the entire group. |
| `helperMessage` | `string` | - | Provides additional context for this Checkbox Group outside of the legend. |
| `isDisabled` | `boolean` | - | When true, indicates that all Checkboxes within this Checkbox Group cannot be focused, changed, or interacted with. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the legend. Cannot be combined with \`isRequired\`. |
| `isReadOnly` | `boolean` | - | When true, a user can’t change whether a Checkbox is checked or unchecked. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” to the legend and marks input as required. Cannot be combined with \`isOptional\`. |
| `layout` | `'column' | 'row'` | column | Used to specify a column or row layout. |
| `legendDisplay` | `'visible' | 'hidden'` | visible | Used to visually hide the label when appropriate. [Read hidden legend guidelines](#hidden-legend). |
| `legendIndicatorForOptional` | `string` | (Optional) | Used to override the content for the optional indicator. |
| `legendIndicatorForRequired` | `string` | (Required) | Used to override the content for the required indicator. |
| `size` | `'medium' | 'large' | 'xlarge'` | medium | Controls the size of the Checkboxes within the group and the legend. |
| `value` | `string` | - | Indicates the current value of the input (controlled). |
| `onChange` | `(value: string[]) => void` | - | Event handler that is called whenever a Checkbox in the Checkbox Group is checked or unchecked. |


## Related components

- [Radio Group](/components/radio-group)
- [Switch](/components/switch)
