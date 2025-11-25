# Select

A Select allows a user to choose a single item from a list of options.

The customization settings use a Select to allow a user to indicate the dialect of English they
usually write in.

## Usage

Although Select and Combobox offer similar functionality, Select is preferable because of its simplicity and cross-platform benefits.

**Use when:**

* There are at least two predefined options.
* The options cannot be easily presented all at once.
* Only one option can be selected at a time.
* The options are simple words or phrases without extra content or decoration.

**Do not use when:**

* The options can be easily presented all at once. Instead, use a [Radio Group](/components/radio-group).
* A user can select multiple options from the list. Instead, use a [Checkbox Group](/components/checkbox/#checkbox-group).
* Options in the list contain content beyond a simple name, such as helper text or icons. Instead, use a [Combobox](/components/combobox).
* Options in the list perform actions that take immediate effect. Instead, use a [Button](/components/button) or a [Menu](/components/menu).
* Options in the list navigate to another page or among sections within a page. Instead, use a [Link](/components/link) or a [Menu](/components/menu).

## Anatomy

!\[Anatomy diagram of a Select]\(/img/components/select\_anatomy.svg)

LabelOptional or Required indicatorHelper text (optional)Input fieldSelected optionList of optionsExpand Icon Button

## Examples

### Default

By default, a Select includes the input field, a `label`, and at least two selectable items.

```tsx

  <Select label="Sort by">
    <Select.Option value="name" label="Name" />
    <Select.Option value="count" label="Count" />
    <Select.Option value="recent" label="Most recent" />
  </Select>

```

### With helper text

Use the `helperMessage` prop to display additional details beyond the label.

```tsx

  <Select label="Company size" helperMessage="Estimate how many people you work with.">
    <Select.Option value="me" label="Just me" />
    <Select.Option value="20" label="2-20" />
    <Select.Option value="50" label="21-50" />
    <Select.Option value="100" label="51-100" />
    <Select.Option value="250" label="101-250" />
  </Select>

```

### With an error

Use the `errorMessage` prop to change the color of the field’s outline to red and display an error message.

```tsx

function Example() {
const [value, setValue] = React.useState("");
return (
  <Flex width={250}>
  <Select
    label="Date range"
    value={value}
    onChange={setValue}
    errorMessage={Boolean(value) ? null : "Select a date range to view results."}
  >
    <Select.Option value="" label="Select an option" />
    <Select.Option value="week" label="Last 7 days" />
    <Select.Option value="month" label="Last 30 days" />
    <Select.Option value="custom" label="Custom range" />
  </Select>
  </Flex>
);
}

```

### Hidden label

Set `labelDisplay="hidden"` to display a Select without a visible label. A label is still required for people using a screen reader. [Learn about accessibility for hidden labels](/components/switch#hidden-labels).

```tsx

  <Select label="Date range" labelDisplay="hidden">
    <Select.Option value="week" label="Last 7 days" />
    <Select.Option value="month" label="Last 30 days" />
    <Select.Option value="custom" label="Custom range" />
  </Select>

```

### Required or optional indicator

Use the `isRequired` or `isOptional` props to add an indicator to the label. Follow the Form pattern to decide when to indicate a field is required or optional. [Learn about required and optional indicators](/patterns/forms#required-or-optional-indicator).

```tsx

  <Select label="Date range" isRequired>
    <Select.Option value="week" label="Last 7 days" />
    <Select.Option value="month" label="Last 30 days" />
    <Select.Option value="custom" label="Custom range" />
  </Select>

```

### Disabled

Use the `isDisabled` prop on an entire Select component to indicate that a user cannot focus, change, or interact with the Select.

```tsx

  <Select label="Date range" isDisabled>
    <Select.Option value="week" label="Last 7 days" />
    <Select.Option value="month" label="Last 30 days" />
    <Select.Option value="custom" label="Custom range" />
  </Select>

```

### Disabled options

Use the `disabled` prop on an individual list option to prevent a user from focusing, interacting with, or choosing it.

```tsx

  <Select label="Date range">
    <Select.Option value="week" label="Last 7 days" />
    <Select.Option value="month" label="Last 30 days" />
    <Select.Option value="custom" label="Custom range" disabled />
  </Select>

```

## Behavior

### Opening and closing the option list

A user can click or tap a Select's input field to open the list of options.

The list is closed when a user does any of the following actions:

* Chooses an option in the list
* Clicks or taps anywhere outside of the list
* Presses the Esc key

## Accessibility

An independent affordance should be available for a user to consciously save the Select’s current value in the system. For actions that take immediate effect or for navigation to another page, use a [Button](/components/button), a [Link](/components/link), or a [Menu](/components/menu) instead.

This is recommended for two reasons:

* **It prevents accidental saving:** A Select is typically used to allow a user to choose from a predefined set of options. If a user accidentally selects an option from the list, it could lead to data unintentionally being saved. This can be frustrating for a user, especially if there is no confirmation step.
* **A Select lacks confirmation:** Since selecting an option from a dropdown menu is quick, it’s not ideal for actions with significant consequences, like saving data.

A typical example of the recommended interaction is a **Save** Button at the end of a Form with multiple Selects or other inputs. The Form data is stored only after the user activates **Save**.

| Do ✅ | Don't ❌ |
|-------|----------|
| Always provide a way to save selections that is independent from the Select. ![](/img/components/select_do.svg) | Do not use a Select for actions that take immediate effect. ![](/img/components/select_dont.svg) |

### Hidden labels

A Select’s label can only be plain text without any rich formatting. Because of this, it may sometimes be necessary to hide the label visually. For example, if you need to use custom styling like adding a Tag.

In this case, a `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Use `aria-labelledby` to associate the visible text with the control so that the text serves as the label.

### Keyboard navigation

| Key                                          | Expected result                                                                                                                                                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab                               | Moves focus to the Select input.                                                                                                                                                                                    |
| Up Arrow or Down Arrow | Opens the list of options when focus is on the input.`<br />``<br />`If the list is open, navigates among items in the list. When focus reaches the top or bottom of the list, it does not loop to the other end. |
| Page Up or Page Down   | If the list is open, moves focus within the list in increments of 10 items.                                                                                                                                         |
| Letter and number keys                       | If the list is open, selects the first matching option as if searching. For example, in a list of countries, typing “c” could select “Canada” initially, but typing “c” then “o” would select “Colombia.”           |
| Enter                             | If the list is open, selects the currently focused option and closes the list.                                                                                                                                      |
| Space                             | If the list is open, selects the currently focused option and closes the list. If the list is closed, opens the list.                                                                                               |
| Esc                               | Closes the list of options if open.                                                                                                                                                                                 |
| Home                              | If the list is open, moves focus to the first option.                                                                                                                                                               |
| End                               | If the list is open, moves focus to the last option.                                                                                                                                                                |

## Writing

### Labels

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

| Do ✅ | Don't ❌ |
|-------|----------|
| Keep the writing structure and verb tense consistent within a set of Form components. ![3 select components have parallel labels: month, day, and year.](/img/components/select_writing_do_01.svg) | Do not mix writing structures or verb tenses within a set of Form components. ![3 select components have mismatched labels: Month, which day?, and Select a year. Select a year has a period, while the other don't.](/img/components/select_writing_dont_01.svg) |
| Use the singular form of nouns since a user can select only one item. ![A Select component asks a user what their favorite color is.](/img/components/select_writing_do_02.svg) | Do not use plural nouns, which would indicate the possibility of multiple selections. ![A Select component asks a user what their favorite colors (plural) are, which is impossible since a Select only accepts 1 selection.](/img/components/select_writing_dont_02.svg) |
| Use language that adds specificity and builds on information given in other elements. ![A fieldset reads Profession, and then there are 2 select components. The first select asks for an occupation and the second asks for the employee's role.](/img/components/select_writing_do_03.svg) | Do not unnecessarily repeat information given in nearby elements. ![A fieldset reads Profession, and then there are 2 select components. The first select asks for a professional occupation and the second asks for a professional role. The redundant language harms clarity of purpose here.](/img/components/select_writing_dont_03.svg) |
| Use sentence case. ![A Select component has a label reading, Remind me later, with only the initial R capitalized.](/img/components/select_writing_do_04.svg) | Do not use Title Case or ALL CAPS. ![A Select component has a label reading, REMIND ME LATER, in all capital letters.](/img/components/select_writing_dont_04.svg) |
| Use internal punctuation when necessary. ![There are 2 Select components. One is for a first-choice vote and the other is for a second-choice vote. First-choice and second-choice are both using internal punctuation (hyphens) correctly.](/img/components/select_writing_do_05.svg) | Do not use end punctuation except for question marks. ![A select component has a label reading, Date range, with two exclamation points after the text.](/img/components/select_writing_dont_05.svg) |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. ![A Select component has a label reading—Show entire labels, even long ones.](/img/components/select_writing_do_06.svg) | Do not truncate a label. ![A Select component has a label reading—Show entire labels, even … The ellipsis would make it unclear what the field is for.](/img/components/select_writing_dont_06.svg) |

### List of options

A user can scan the list item by item to select an option.

They can also type letters or numbers as they would for a search. For example, in a list of countries, typing “c” could jump to “Canada” initially, but typing “c” then “o” would go to “Colombia.”

To make sure that lists are predictable and options are relevant, it’s important to:

* Alphabetize list items (a, b, c) and list numbers in ascending order (1, 2, 3)
* Prioritize brevity and consistency over brand voice for each item’s name

| Do ✅ | Don't ❌ |
|-------|----------|
| Remove any unnecessary words to alphabetize items predictably and search more efficiently. ![](/img/components/select_list_items_do.svg) | Do not vary structure or verb tense within list items, as this introduces uncertainty in ordering and searching. ![](/img/components/select_list_items_dont.svg) |

### Helper text

Helper text takes different forms to fit specific needs. Some helper text tells a user what to do using action verbs, while other helper text defines terms and requirements with punchy fragments of information. [View examples of helper text](/patterns/forms-pattern/forms/#helper-text).

### Writing best practices for helper text

| Do | Don't |
|----|-------|
| In human terms, directly state how a user will benefit from giving their input or a reason we are requesting their input. | Do not use ambivalent or meandering language that softens feature benefits. |
| Define terms that may not be clear. | Do not use jargon or overly technical language that hinders clarity. |
| Make requirements clear to help prevent errors before they happen. | Do not assume that a user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. |
| Be brief. Use 140 characters or fewer unless unavoidable. | Do not give a user more information than they need in that particular moment, which can slow down or overwhelm them. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Include punctuation if it’s a complete sentence or to distinguish two fragments. | Do not use exclamation points. |


### Unselected option

You can choose to present a Select component without a default selection. For the unselected option, it is recommended to use one of the following labels:

* **In compact spaces:** “Select”
* **When space allows:** “Select an option”
* **In any surface:** A blank option without text

Use the same unselect option consistently within a Form or workflow. Otherwise said, don’t switch the labels of the unselected options in Select components that appear near each other.

To convey information necessary for a user to understand their selection’s impact, use the Select component’s label or helper text that is accessible to a screen reader.

| Do ✅ | Don't ❌ |
|-------|----------|
| Use a label or helper text for crucial information. If an unselected option has a label, the text cannot be essential to understanding how to fill in a Select. ![](/img/components/select_placeholder_do.svg) | Do not offer crucial information about the Select in the unselected option's label. ![](/img/components/select_placeholder_dont.svg) |

### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Select component in JS.

```tsx
import { Select } from "@superhuman/origin";
```

## API

### Select props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | The label displayed above the Select. |
| `errorMessage` | `string` | - | Indicates a Select is in an error state, adds error message below the input, and adds red border. When an error message is present, it is read by a screen reader after the label. |
| `helperMessage` | `string` | - | Provides additional context for the Select outside of the label. |
| `isDisabled` | `boolean` | - | When true, indicates that the Select cannot be focused, changed, or interacted with. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the label. Cannot be combined with isRequired. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with isOptional. |
| `labelIndicatorForOptional` | `string` | '(Optional)' | Used to override the content for the optional indicator. |
| `labelIndicatorForRequired` | `string` | '(Required)' | Used to override the content for the required indicator. |
| `name` | `string` | - | The name of the Select element that is used when submitting an HTML form. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#name). |
| `value` | `string` | - | To implement as controlled component, the \`value\` prop can be used to maintain the Select’s value.\n |
| `onChange` | `(value: string) => void` | - | Event handler that is called when the Select value changes. |


### Select.Option props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string | number` | - | The value to be used when submitting the Select in a form. |
| `disabled` | `boolean` | - | When true, the option cannot be selected and will appear subdued. |
| `label` | `string` | - | The description of the option. If not specified, the text inside the option is used instead. |


## Related components

- [Button](/components/button)
- [Checkbox](/components/checkbox)
- [Combobox](/components/combobox)
- [Link](/components/link)
- [Menu](/components/menu)
- [Radio Group](/components/radio-group)
