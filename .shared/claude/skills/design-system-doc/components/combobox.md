# Combobox

A Combobox allows browsing or filtering a list to select an item.

A Combobox allows a user to browse projects in a dropdown list or filter the list by typing.

## Usage

**Use when:**

* A user can type a word or phrase to filter the list of items.
* A user can select a single item from a provided list.
* The items contain content beyond a simple name, such as helper text or Icons.

**Do not use when:**

* The items can easily be presented all at once. Instead, use a [Select](/components/select) or [Radio Group](/components/radio-group).
* The items are simple words or phrases without extra content. Instead, use a [Select](/components/select).
* It’s possible to select multiple items in a set. Instead, use [Checkboxes](/components/checkbox).
* The goal is to collect text that usually varies from user to user. Instead, use a [Text Field](/components/text-field).
* The intention is to search a website, page, or nearby element. Instead, use a [Search Field](/components/search-field).
* Items in the list are navigation elements that cannot be filtered. Instead, use a [Menu](/components/menu).

## Anatomy

## Examples

### Default

By default, a Combobox includes the input field, a dropdown list, and a `label`.

```tsx

  <Combobox
    label="Primary language"
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="french">French</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="korean">Korean</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
    <ComboboxItem value="turkish">Turkish</ComboboxItem>
  </Combobox>

```

### With helper text

Use `helperMessage` to display additional details beyond the label of a Combobox.

```tsx

  <Combobox
    label="Primary language"
    helperMessage="Tailor writing suggestions to your personal language background."
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="french">French</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="korean">Korean</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
    <ComboboxItem value="turkish">Turkish</ComboboxItem>
  </Combobox>

```

### With an error

Use `errorMessage` to change the color of the field’s outline to red and display an error message.

```tsx

  <Combobox
    label="Primary language"
    helperMessage="Tailor writing suggestions to your personal language background."
    errorMessage="Select a language."
    isRequired
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="french">French</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="korean">Korean</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
    <ComboboxItem value="turkish">Turkish</ComboboxItem>
  </Combobox>

```

### Required or optional indicator

Use `isRequired` or `isOptional` to add an indicator to the label. Follow the Form pattern to decide when to note a field is required or optional. [Learn about required and optional indicators](/docs/patterns/forms-pattern/forms#required-or-optional-indicator-1).

```tsx

<Flex direction="column" gap={4}>
  <Combobox
    label="Primary language"
    isRequired
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
  </Combobox>
  <Combobox
    label="Second language"
    isOptional
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
  </Combobox>
  </Flex>

```

### Dynamic options

If you don’t know the entire set of items, you can set the list of what initially appears with `defaultItems`.

```tsx

function Example() {
const languages = [

{id: "arabic", name: "Arabic"},
{id: "bengali", name: "Bengali"},
{id: "english", name: "English"},
{id: "french", name: "French"},
{id: "german", name: "German"},
{id: "hindi", name: "Hindi/Urdu"},
{id: "japanese", name: "Japanese"},
{id: "javanese", name: "Javanese"},
{id: "mandarin", name: "Mandarin Chinese"},
{id: "portuguese", name: "Portuguese"},
{id: "punjabi", name: "Punjabi"},
{id: "spanish", name: "Spanish"},
{id: "telugu", name: "Telugu"},
{id: "vietnamese", name: "Vietnamese"}
];

return (

<Combobox
label="Primary language"
helperMessage="Tailor writing suggestions to your personal language background."
defaultItems={languages}
>
{item => (
  <ComboboxItem key={item.id} value={item.id}>
    {item.name}
  </ComboboxItem>
)}
</Combobox>
);

} 
```

### Complex options

Use `textValue` when a `ComboboxItem` includes content beyond just text.

```tsx

function Example() {
const options = [

{id: "comms", name: "Communications", description: "Handle public relations, information output, and media requests"},
{id: "support", name: "Customer Support", description: "Process complaints and issues related to products or services"},
{id: "eng", name: "Engineering", description: "Build, test, and maintain applications or products"},
{id: "hr", name: "HR and Recruiting", description: "Find and attract qualified applicants for open positions"},
{id: "pm", name: "Product management", description: "Gather and prioritize product and customer requirements"},
{id: "sales", name: "Sales", description: "Selling products and meeting customer needs"},
];

return (

<Combobox
label="Job role"
defaultItems={options}
helperMessage="We tailor features based on what you do for work."
>
{item => (
  <ComboboxItem value={item.id} textValue={item.name}>
    <Flex direction="column" gap={0.5} padding={0.5}>
      <Text as="p" variant="text-small">
        {item.name}
      </Text>
      <Text as="p" variant="text-xsmall" color="base-subdued">
        {item.description}
      </Text>
    </Flex>
  </ComboboxItem>
)}
</Combobox>
);

}

```

### Disabled options

Use `disabledItems` to prevent a user from focusing, interacting with, or choosing one or more items in the list.

```tsx

  <Combobox
    label="Primary language"
    helperMessage="Tailor writing suggestions to your personal language background."
    disabledItems={["bengali", "french"]}
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="french">French</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="korean">Korean</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
    <ComboboxItem value="turkish">Turkish</ComboboxItem>
  </Combobox>

```

### No results

`noResultsMessage` displays text to a user indicating there aren’t results that match the typed input. The default text is “No matching results,” which you can customize if needed.

```tsx

  <Flex gap={4}>
    <Combobox
      label="Job role"
      helperMessage="Type “tk” to see the built-in default."
    >
      <ComboboxItem value="comms">Communications</ComboboxItem>
      <ComboboxItem value="customer support">Customer support</ComboboxItem>
      <ComboboxItem value="edu">Education</ComboboxItem>
      <ComboboxItem value="eng">Engineering</ComboboxItem>
      <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
      <ComboboxItem value="it">IT</ComboboxItem>
      <ComboboxItem value="marketing">Marketing</ComboboxItem>
      <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
      <ComboboxItem value="sales">Sales</ComboboxItem>
    </Combobox>
    <Combobox
      label="Job role"
      helperMessage="Type “tk” to see a custom message."
      noResultsMessage="No matching roles found"
    >
      <ComboboxItem value="comms">Communications</ComboboxItem>
      <ComboboxItem value="customer support">Customer support</ComboboxItem>
      <ComboboxItem value="edu">Education</ComboboxItem>
      <ComboboxItem value="eng">Engineering</ComboboxItem>
      <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
      <ComboboxItem value="it">IT</ComboboxItem>
      <ComboboxItem value="marketing">Marketing</ComboboxItem>
      <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
      <ComboboxItem value="sales">Sales</ComboboxItem>
    </Combobox>
  </Flex>

```

### Events

The `onInputChange` event can track changes to the input’s value. The `onSelection` event is called whenever a user selects an item from the list.

```tsx

function Example() {
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const [currentSelection, setCurrentSelection] = React.useState("");

  return (
    <Flex gap={12} width="100%" direction="row" wrap>
      <Combobox
        label="Job role"
        helperMessage="We tailor features based on what you do for work."
        onInputChange={(value) => setCurrentInputValue(value)}
        onSelection={(value) => setCurrentSelection(value)}
      >
        <ComboboxItem value="comms">Communications</ComboboxItem>
        <ComboboxItem value="customer support">Customer support</ComboboxItem>
        <ComboboxItem value="edu">Education</ComboboxItem>
        <ComboboxItem value="eng">Engineering</ComboboxItem>
        <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
        <ComboboxItem value="it">IT</ComboboxItem>
        <ComboboxItem value="marketing">Marketing</ComboboxItem>
        <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
        <ComboboxItem value="sales">Sales</ComboboxItem>
      </Combobox>
      <Flex direction="column" gap={4}>
        <Flex gap={2}>
          <Text as="p">Current input value:</Text>
          {currentInputValue}
        </Flex>
        <Flex gap={2}>
          <Text as="p">Current selection: </Text>
          {currentSelection}
        </Flex>
      </Flex>
    </Flex>
  )

}

```

### With a ref

A `ref` can be set on a Combobox, which can help with focus management.

```tsx

function Example() {
  const inputRef = React.useRef(null);
  return (
    <Flex direction="column" gap={3}>
      <Combobox
        label="Job role"
        helperMessage="We tailor features based on what you do for work."
        ref={inputRef}
        defaultSelectedItem="edu"
      >
        <ComboboxItem value="comms">Communications</ComboboxItem>
        <ComboboxItem value="customer support">Customer support</ComboboxItem>
        <ComboboxItem value="edu">Education</ComboboxItem>
        <ComboboxItem value="eng">Engineering</ComboboxItem>
        <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
        <ComboboxItem value="it">IT</ComboboxItem>
        <ComboboxItem value="marketing">Marketing</ComboboxItem>
        <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
        <ComboboxItem value="sales">Sales</ComboboxItem>
      </Combobox>
    <Button variant="secondary" text="Focus input" onClick={() => inputRef.current.focus()}/>
  </Flex>
  )
}

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Combobox.

```tsx

  <Combobox
    label="Job role"
    helperMessage="We tailor features based on what you do for work."
    isDisabled
  >
    <ComboboxItem value="comms">Communications</ComboboxItem>
    <ComboboxItem value="customer support">Customer support</ComboboxItem>
    <ComboboxItem value="edu">Education</ComboboxItem>
    <ComboboxItem value="eng">Engineering</ComboboxItem>
    <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
    <ComboboxItem value="it">IT</ComboboxItem>
    <ComboboxItem value="marketing">Marketing</ComboboxItem>
    <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
    <ComboboxItem value="sales">Sales</ComboboxItem>
  </Combobox>

```

### Listbox positioning

If the Combobox is near the bottom of the page or container (such as a modal), use `listboxDisplay="top"` to position the listbox (ComboboxItem dropdown) above the text input, so that it does not get cut off.

```tsx

 <Flex direction="row" paddingTop="150px" width="100%">
  <Combobox
    label="Primary language"
    listboxDisplay="top"
  >
    <ComboboxItem value="arabic">Arabic</ComboboxItem>
    <ComboboxItem value="bengali">Bengali</ComboboxItem>
    <ComboboxItem value="english">English</ComboboxItem>
    <ComboboxItem value="french">French</ComboboxItem>
    <ComboboxItem value="german">German</ComboboxItem>
    <ComboboxItem value="hindi">Hindi</ComboboxItem>
    <ComboboxItem value="japanese">Japanese</ComboboxItem>
    <ComboboxItem value="korean">Korean</ComboboxItem>
    <ComboboxItem value="mandarin">Mandarin Chinese</ComboboxItem>
    <ComboboxItem value="spanish">Spanish</ComboboxItem>
    <ComboboxItem value="turkish">Turkish</ComboboxItem>
  </Combobox>
</Flex>

```

## Behavior

### Filtering the list

The filter displays matches as soon as a user types the first character in the input.

By default, the filter finds matches both at the beginning of and within an item. If you type “an” into a Combobox asking you to choose your favorite animal, the results could include Anaconda and Kangaroo.

### Making a selection

A user can select only a single item from the list, and there are different ways to interact with a Combobox.

A user can:

* Type the item’s full name
* Partially type a word to filter the list
* Open the dropdown list and browse the complete list of items

### No results and custom values

A user can select only from predefined items by default. When nothing matches a user’s input, text appears indicating there aren’t matching results.

Specify `allowsCustomValue` to allow a user to enter custom values. In this case, the Combobox acts like a Text Field to accept a text input that wasn’t in the predefined set.

```tsx

  <Combobox
    label="Job role"
    helperMessage="We tailor features based on what you do for work."
    allowsCustomValue
  >
    <ComboboxItem value="comms">Communications</ComboboxItem>
    <ComboboxItem value="customer support">Customer support</ComboboxItem>
    <ComboboxItem value="edu">Education</ComboboxItem>
    <ComboboxItem value="eng">Engineering</ComboboxItem>
    <ComboboxItem value="hr">HR and recruiting</ComboboxItem>
    <ComboboxItem value="it">IT</ComboboxItem>
    <ComboboxItem value="marketing">Marketing</ComboboxItem>
    <ComboboxItem value="owner">Owner or company leadership</ComboboxItem>
    <ComboboxItem value="sales">Sales</ComboboxItem>
  </Combobox>

```

## Accessibility

### Hidden labels

A Combobox’s label can only be plain text. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want to make the text bold. This requires visually hiding a Combobox label and adding a separate Text component nearby.

A `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Add an `onClick` event handler to the external, visible text that acts as the label. That `onClick` handler should call `.focus()` on the input.

### Keyboard navigation

| Key                                    | Expected result                                                                                                                                                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Down arrow                  | If focus is in the input, opens the dropdown list and puts focus on the first item.`<br />``<br />`If a user keeps pressing the down arrow, the focus continues down the list. At the end of the list, it stops and does not loop back to the top. |
| Up arrow                    | If focus is in the input, opens the dropdown list and puts focus on the last item.`<br />``<br />`If a user keeps pressing the up arrow, the focus continues up the list.                                                                          |
| Enter                       | Selects a highlighted item once inside the dropdown list.                                                                                                                                                                                            |
| Esc                         | Closes the dropdown lists and returns focus to the input field.                                                                                                                                                                                      |
| Tab or Shift+Tab | Closes the dropdown list and moves focus to the next or previous focusable element.                                                                                                                                                                  |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms-pattern/forms).

### Labels

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

| Do ✅ | Don't ❌ |
|-------|----------|
| Keep the writing structure and verb tense consistent within a set of Form components. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-1.svg) | Do not mix writing structures or verb tenses within a set of Form components. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-1.svg) |
| Use the singular form of nouns since a user can select only one item. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-2.svg) | Do not use plural nouns, which would indicate the possibility of multiple selections. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-2.svg) |
| Use language that adds specificity and builds on information given in other elements. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-3.svg) | Do not unnecessarily repeat information given in nearby elements. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-3.svg) |
| Use sentence case. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-4.svg) | Do not use Title Case or ALL CAPS. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-4.svg) |
| Use internal punctuation when necessary. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-5.svg) | Do not use end punctuation except for question marks. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-5.svg) |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. ![3 comboboxes have parallel labels: month, day, and year.](/img/components/combobox-label-do-6.svg) | Do not truncate a label. ![3 comboboxes have mismatched labels: Select a month, day, and year of expiration. Select a month has a period, while the other don't.](/img/components/combobox-label-dont-6.svg) |

### List items

When a user filters a list, results need to be predictable and relevant. For this reason, it’s important to:

* Alphabetize list items
* Prioritize brevity and consistency over brand voice for each item’s name

A user’s typed input yields all and only exact matches from the list. A user won’t see results for related items nor results for an autocorrected spelling. In the same way, a user doesn’t want results that match an irrelevant word in an item’s name.

| Do ✅ | Don't ❌ |
|-------|----------|
| Remove any unnecessary words to alphabetize items predictably and filter more efficiently. ![](/img/components/combobox-do-list-items.svg) | Do not vary structure or verb tense within list items, as this introduces uncertainty in ordering and filtering. ![](/img/components/combobox-dont-list-items.svg) |

### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do with action verbs, while others define terms and requirements with punchy fragments of information.

| Do ✅ | Don't ❌ |
|-------|----------|
| Make it obvious how a user can interact with a Combobox by offering context clues, requirements, and limitations. These help prevent errors from happening. ![A combobox asks a user to add their favorite snack food. Helper text says the user can find an item by brand or type.](/img/components/combobox-helper-do-1.svg) | Do not assume that a user will understand how to interact with a Combobox without the addition of helper text. This input has nuances that may confuse a user. ![A combobox asks a user to add their favorite snack food. There is no helper text and the various different ways to interact are not obvious.](/img/components/combobox-helper-dont-1.svg) |
| Use human language to directly state how a user will benefit from giving their input or a reason we are requesting their input. ![A user can choose a zoo excursion. Helper text says to choose an add-on and prompts them to pick a time in the next step.](/img/components/combobox-helper-do-2.svg) | Do not use ambivalent or meandering language that softens feature benefits. ![A user can choose a zoo excursion. Helper text has overly flimsy language and says if you want you can choose to optionally ad on an extra excursion while you visit the zoo.](/img/components/combobox-helper-dont-2.svg) |
| Define terms that may need to be clarified. ![A Combobox uses a technical term, occupation, which may require definition out of context. Helper text simply asks what the user does for work.](/img/components/combobox-helper-do-3.svg) | Do not use jargon or overly technical language that hinders clarity. ![Helper text has flowerly language, explaining an occupation is the principal activity that you engage in regularly as a means of earning a livelihood or income.](/img/components/combobox-helper-dont-3.svg) |
| Use "Example:" to offer a universal and inclusive example of an expected input. If space allows, you can provide both instructions and an example. ![A user can choose a pastry in a Combobox. Helper text lists croissant, churro, or donut as example selections.](/img/components/combobox-helper-do-4.svg) | Do not use "E.g." or "I.e." to indicate an example. ![Examples of pastries are preceeded by e.g. This latin abbreviation is not preferred.](/img/components/combobox-helper-dont-4.svg) |
| Be brief. Use 140 characters or fewer unless unavoidable. ![A user can add a topping to some dessert via a Combobox. Helper text explains this is to sweeten the dessert with a special addition.](/img/components/combobox-helper-do-5.svg) | Do not overexplain, which can slow down a user with surplus information. ![Helper text for a Combobox lists too many examples of item types and over explains the process of how to use a nearby Button.](/img/components/combobox-helper-dont-5.svg) |
| Use sentence case. ![A Combobox allows a user to select a favorite vegetable. Helper text explains they can pick tomatoes or other culinary vegetables.](/img/components/combobox-helper-do-6.svg) | Do not use Title Case or ALL CAPS. ![Helper text explains a user can select tomatoes and other culinary vegetables in a favorite vegetable picker; however, the text in is all caps and makes it appear as though we are shouting at the user.](/img/components/combobox-helper-dont-6.svg) |
| Include punctuation if it's a complete sentence or to distinguish two fragments. ![A Combobox allows a user to select a location. Helper text explains they can find a store by city.](/img/components/combobox-helper-do-7.svg) | Do not use exclamation points. ![Helper text explains the user can find a store by city, but there is an unnecessary and overly emphatic exclamation point used as end punctuation.](/img/components/combobox-helper-dont-7.svg) |

### Placeholder text

In general, do not use placeholder text. To convey information necessary for understanding how to fill in a Combobox, use helper text that is accessible to a screen reader. [Learn how to write helper text.](/components/combobox#helper-text)

### Error messages

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Combobox component in JS.

```tsx
import { Combobox, ComboboxItem } from "@superhuman/origin";
```

## API

### Combobox props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | The list of predefined items. |
| `label` | `string` | - | The label displayed above the input. |
| `defaultItems` | `string[]` | - | The data for the initial list of ComboboxItems. |
| `disabledItems` | `string[]` | - | A list of values for any \`ComboboxItems\` a user cannot focus or interact with. |
| `errorMessage` | `string` | - | Indicates a Combobox is in an error state, adds error message below the input, and adds red border. When an error message is present, it is read by a screen reader after the label. |
| `helperMessage` | `string` | - | Provides additional context for the Combobox outside of the label. |
| `inputDecoration` | `React.Node` | - | Can be used to display an Icon or symbol at the start of the input after an item has been selected. |
| `inputValue` | `string` | - | Can be used to manually control the content of the input. |
| `isDisabled` | `boolean` | - | When true, indicates that a user cannot focus, change, or interact with the Combobox. |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” to the label. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” indicator to the label and marks input as required. Cannot be combined with \`isOptional\`. |
| `labelIndicatorForOptional` | `string` | - | Used to override the content for the optional indicator. |
| `labelIndicatorForRequired` | `string` | - | Used to override the content for the required indicator. |
| `noResultsMessage` | `string` | - | The message displayed when no items meet filter criteria. |
| `placeholder` | `string` | - | Used to display placeholder text in a Combobox input. Not recommended because this text disappears when a user starts to type. |
| `onInputChange` | `(value: string) => void` | - | Event handler that is called whenever the value of the input changes. To track updates, it's preferential to use \`onSelection\` instead. |
| `onSelection` | `(value: string) => void` | - | Event handler that is called whenever a selection is made. |


### ComboboxItem props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `string | React.Node` | - | The contents of the \`ComboboxItem\`. It is usually a simple string value, but it can be a React Node. |
| `value` | `string` | - | A unique value used to identify each \`ComboboxItem\`. |
| `textValue` | `string` | - | Specifies a text-only value to appear in the input after selection when a \`ComboboxItem\` is more than just text. Needed only for custom content. |


## Related components

- [Menu](/components/menu)
- [Radio Group](/components/radio-group)
- [Search Field](/components/search-field)
- [Select](/components/select)
- [Text Field](/components/text-field)
