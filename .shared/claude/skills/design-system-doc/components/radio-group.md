# Radio Group

A Radio Group allows a single selection from two or more options.

A Radio Group allows a user to set the visibility of the style guide on different websites.

## Usage

Use a Radio Group when a user can select a single option out of a set and it’s advantageous for them to see every option available.

**Do not use when:**

* It’s possible to select zero, one, or many options in a list. Instead, use [Checkboxes](/components/checkbox).
* There are more than six options. Instead, use [Select](/components/select).
* A single item can be turned on and off independently from other options and effects of the state change are immediate. Instead, use a [Switch](/components/switch).

## Anatomy

!\[Anatomy diagram of a Radio Group]\(/img/components/radio\_group\_anatomy.svg)

Legend (required)Optional or Required indicator Helper textRadio Group (required)Error message

## Examples

### Column layout

The default `layout` for multiple Radio Buttons in a Radio Group is a two-column layout.

```tsx

  <RadioGroup legend="Visibility">
    <RadioButton value="all">All websites</RadioButton>
    <RadioButton value="select">Select websites only</RadioButton>
    <RadioButton value="popular">Popular websites only</RadioButton>
    <RadioButton value="editor">Editor websites only</RadioButton>
    <RadioButton value="blocked">Blocked websites only</RadioButton>
  </RadioGroup>

```

### Row layout

A Radio Group can use a row layout by setting `layout="row"` when there are only two or three Radio Buttons or it’s preferable to save vertical space.

```tsx

  <RadioGroup legend="Visibility" layout="row">
    <RadioButton value="all">All websites</RadioButton>
    <RadioButton value="select">Select websites only</RadioButton>
    <RadioButton value="popular">Popular websites only</RadioButton>
  </RadioGroup>

```

### With helper text

Use `helperMessage` to display additional details beyond the legend of the Radio Group. Each Radio Button within a Radio Group can also use `helperMessage` to provide more context.

```tsx

  <RadioGroup legend="Change your plan" layout="column" helperMessage="Select how you pay for Grammarly.">
    <RadioButton helperMessage="Billed once per year for $139.95" value="annual">Annually</RadioButton>
    <RadioButton helperMessage="Billed each quarter for $59.95" value="quarter">Quarterly</RadioButton>
    <RadioButton helperMessage="Billed each month for $29.98" value="monthly">Monthly</RadioButton>
  </RadioGroup>

```

### With an error

Use `errorMessage` to display a red outline around the entire Radio Group and display an error message.

```tsx

  <RadioGroup legend="Visibility" errorMessage="Choose where this style guide is visible.">
    <RadioButton value="all">All websites</RadioButton>
    <RadioButton value="select">Select websites only</RadioButton>
    <RadioButton value="popular">Popular websites only</RadioButton>
    <RadioButton value="editor">Editor websites only</RadioButton>
    <RadioButton value="blocked">Blocked websites only</RadioButton>
  </RadioGroup>

```

### Size

Use `size` to control the size of the Radio Group. The default size is `medium`.

```tsx

<Flex gap={8} direction="column">
  <Flex gap={8}>
    <Text as="p">Medium</Text>
    <RadioGroup legend="Visibility" size="medium">
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
  </Flex>
  <Flex gap={8}>
    <Text as="p">Large</Text>
    <RadioGroup legend="Visibility" size="large">
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
  </Flex>
  <Flex gap={8}>
    <Text as="p">Xlarge</Text>
    <RadioGroup legend="Visibility" size="xlarge">
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
  </Flex>
</Flex>

```

### Required or optional indicator

Use `isRequired` or `isOptional` to add an indicator to the `legend`. Follow the Form pattern to decide when to note a field is required or optional. [Learn about required and optional indicators](/patterns/forms-pattern/forms#required-or-optional-indicator-1).

```tsx

  <Flex direction="column" gap={4}>
    <RadioGroup legend="Visibility" layout="row" isRequired>
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
    <RadioGroup legend="Visibility" layout="row" isOptional>
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
  </Flex>

```

### Default selected item

Use `defaultValue` to set a Radio Button to be selected by default. This must match the `value` set on the Radio Button.

```tsx

  <RadioGroup legend="Visibility" defaultValue="select">
    <RadioButton value="all">All websites</RadioButton>
    <RadioButton value="select">Select websites only</RadioButton>
    <RadioButton value="popular">Popular websites only</RadioButton>
    <RadioButton value="editor">Editor websites only</RadioButton>
    <RadioButton value="blocked">Blocked websites only</RadioButton>
  </RadioGroup>

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Radio Button or the entire Radio Group.

```tsx

  <Flex gap={6}>
    <RadioGroup legend="Visibility" isDisabled>
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
    <RadioGroup legend="Visibility" >
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select" isDisabled>Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
    </RadioGroup>
  </Flex>

```

## Accessibility

### Hidden legends

A Radio Group’s legend can only be plain text. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want the text to be a Heading. This requires visually hiding a Radio Group’s legend and adding a separate Heading component nearby.

A `legend` is still required, but use `legendDisplay="hidden"` to visually hide the legend while maintaining accessibility for people using screen readers. The hidden legend must include the visible text while providing any additional context if needed.

```tsx

  <div>
    <h3>Choose style guide visibility</h3>
    <RadioGroup legend="Visibility" legendDisplay="hidden">
      <RadioButton value="all">All websites</RadioButton>
      <RadioButton value="select">Select websites only</RadioButton>
      <RadioButton value="popular">Popular websites only</RadioButton>
      <RadioButton value="editor">Editor websites only</RadioButton>
      <RadioButton value="blocked">Blocked websites only</RadioButton>
    </RadioGroup>
  </div>

```

### Disabling options

Use `isDisabled` on a Radio Group to indicate that all options within the group are unavailable. Use `isDisabled` on an individual Radio Button when only one or a few options are unavailable.

When a Radio Button or Group has the `isDisabled` attribute, it’s skipped in the keyboard navigation order. Users navigating this way will not know there is an unavailable item.

### Keyboard interaction

| Key                                             | Expected result                                                                                                                                                                                                                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab or Shift+Tab          | Moves focus into the Radio Group.`<br />``<br />`If a Radio Button is already selected, moves focus to that Radio Button. If a Radio Button is not selected, the focus lands on the first Radio Button (or last if moving backward through focus order). |
| Down arrow or Right arrow | Moves focus to the next Radio Button and selects the newly focused Radio Button.                                                                                                                                                                           |
| Up arrow or Left arrow    | Moves focus to the previous Radio Button and selects the newly focused Radio Button.                                                                                                                                                                       |
| Space                                | Selects or deselects the currently focused Radio Button.                                                                                                                                                                                                   |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms).

### Legend and labels

Include a legend that clearly describes the purpose of the entire Radio Group. The individual Radio Button labels are more specific and should clearly distinguish each choice from one another.

### Writing best practices for Radio Group legends and Radio Button labels

| Do | Don't |
|----|-------|
| Keep the writing structure and verb tense consistent within a Radio Group or other Form components. | Do not mix writing structures or verb tenses within a Radio Group or other Form components. |
| Use language that adds specificity and builds on information given in other elements. | Do not unnecessarily repeat information given in nearby elements. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Use internal punctuation when necessary. | Do not use end punctuation, except for question marks in a legend. |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. | Do not truncate text. |


### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do using action verbs, while others define terms and requirements with punchy fragments of information. [View examples of helper text](/patterns/forms-pattern/forms/#helper-text).

### Writing best practices for helper text

| Do | Don't |
|----|-------|
| In human terms, directly state how a user will benefit from giving their input or a reason we are requesting their input. | Do not use ambivalent or meandering language that softens feature benefits. |
| Define terms that may not be clear. | Do not use jargon or overly technical language that hinders clarity. |
| Make requirements clear to help prevent errors before they happen. | Do not assume that a user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. |
| Be brief. Use 140 characters or fewer unless unavoidable. | Do not overexplain, which can slow down a user with surplus information. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Include punctuation if it’s a complete sentence or to distinguish two fragments. | Do not use exclamation points. |


### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Radio Group and Radio Button components in JS.

```tsx
import { RadioGroup, RadioButton } from "@superhuman/origin";
```

## API

### RadioGroup props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Most commonly will be a set of Radio Button components. Can be custom Radio Buttons only if absolutely necessary. |
| `legend` | `string` | - | Describes the purpose of the Radio Group. Can be visually hidden with \`legendDisplay\`. |
| `defaultValue` | `string` | - | Defines if a Radio Button should be selected by default. |
| `errorMessage` | `string` | - | Indicates the entire Radio Group is in an error state, adds error message below the input, and adds red border. |
| `helperMessage` | `string` | - | Provides additional context outside of the legend of the Radio Group. |
| `isDisabled` | `boolean` | - | When true, indicates that all Radio Buttons within this Radio Group cannot be focused, changed, or interacted with. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the legend. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” to the legend and marks input as required. Cannot be combined with \`isOptional\`. |
| `layout` | `'column' | 'row'` | column | Used to specify a column or row layout. In column format, will disperse Radio Buttons across two columns. |
| `legendDisplay` | `'visible' | 'hidden'` | visible | Can be used to visually hide the legend when another element on the page is acting as the visual label for the Radio Group. |
| `size` | `'medium' | 'large' | 'xlarge'` | medium | Controls the size of the Radio group and label. |
| `onChange` | `(value: T) => void` | - | Event handler that is called when a Radio Button is selected. |


### RadioButton props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `string | React.ReactNode` | - | Used for the content of the Radio Button. When a string is passed, it will render using the typography token \`text-small\`. When passing a Node, please match the style of any text by using \`text-small\` when applicable. |
| `value` | `string` | - | Used to identify this particular Radio Button. Must be unique within its sibling Radio Buttons. |
| `helperMessage` | `string` | - | Provides additional context outside the label of an individual Radio Button. |
| `isDisabled` | `boolean` | - | When true, indicates that an individual Radio Button cannot be focused, changed, or interacted with. |


## Related components

- [Checkbox](/components/checkbox)
- [Combobox](/components/combobox)
- [Form](/components/form)
- [Select](/components/select)
- [Switch](/components/switch)
