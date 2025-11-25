# Switch

A Switch has two possible states: on and off.

Switches control the ability to turn on tone detection and automatic corrections in a Modal for
Settings.

## Usage

**Use when:**

* There is a choice to turn a single item on or off.
* The choice isn’t affected by other options.
* The state change takes effect immediately without the need for an additional Button to save changes.

**Do not use when:**

* A user needs to give their consent, such as when accepting terms and conditions. Instead, use a [Checkbox](/components/checkbox).
* A user can select options that take effect only after activating a Button that saves changes. Instead, use a [Checkbox](/components/checkbox) or [Radio Group](/components/radio-group).
* The option can be determined by other options, or turning on one option would turn off another in the same list. Instead, use a [Radio Group](/components/radio-group) or [Radio Button Group](/components/radio-button-group).
* A user can choose between two options other than on and off. For example, choosing to download a document as either a PDF or CSV file. Instead, use a [Radio Group](/components/radio-group) or [Radio Button Group](/components/radio-button-group).

### macOS, Windows, iOS, and Android

When necessary, a native Switch can be used on macOS, Windows, iOS, and Android. It will behave according to the rules set by the operating system. The design on these platforms does not need to match the web component, but you can use design system tokens to style it. [View the design tokens](/tokens).

## Anatomy

!\[Anatomy diagram of a Switch]\(/img/components/switch\_anatomy.svg)

LabelToggleHelper text (optional)

## Examples

### Default

By default, a Switch includes a `label` displayed to the left of the toggle. The spacing between the label and toggle varies based on the width of the label and overall container.

```tsx
<Switch label="Snippets" />
```

### Size

Use the `size` prop to scale the Switch control and its label. Size `medium` is the default.

```tsx

<Flex gap={3} direction="column" width={200}>
  <Switch
    label="Snippets"
    size="small"
  />
  <Switch
    label="Snippets"
    size="medium"
  />
  <Switch
    label="Snippets"
    size="large"
  />
  <Switch
    label="Snippets"
    size="xlarge"
  />
  </Flex>

```

### Right label

Use `labelDisplay="right"` to display the label on the right side of the toggle. Spacing is fixed at 8px between the label and toggle.

```tsx

  <Switch
    label="Snippets"
    labelDisplay="right"
  />

```

### Top label

Use `labelDisplay="top"` to display the label above the toggle.

```tsx

  <Switch
    label="Snippets"
    labelDisplay="top"
  />

```

### Hidden label

Use `labelDisplay="hidden"` to display the toggle without a visible label. A label is still required for people using a screen reader. [Learn about accessibility for hidden labels](#hidden-labels).

The width of a Switch with a hidden label is the width of the toggle.

```tsx

  <Switch
    label="Snippets"
    labelDisplay="hidden"
  />

```

### With helper text

Use `helperMessage` to provide additional details beyond the label of a Switch. Helper text always appears directly below the label, regardless of the label’s position.

```tsx

<Flex gap={4} wrap width={480}>
<Switch
  helperMessage="View, insert, and create snippets wherever you write using keyboard shortcuts."
  label="Snippets"
  labelDisplay="left"
/>
<Switch
  helperMessage="View, insert, and create snippets wherever you write using keyboard shortcuts."
  label="Snippets"
  labelDisplay="right"
/>
<Switch
  helperMessage="View, insert, and create snippets wherever you write using keyboard shortcuts."
  label="Snippets"
  labelDisplay="top"
/>
</Flex>

```

### Default selection

Specify `defaultSelected` to indicate a Switch is on when it is first presented to a user.

```tsx

  <Switch
    defaultSelected
    helperMessage="View, insert, and create snippets wherever you write using keyboard shortcuts."
    label="Snippets"
  />

```

### Events

The `onChange` event is called whenever a Switch is turned on or off.

```tsx
function ControlledSwitchExample() {
const [selected, setSelected] = React.useState(false);
return (
  <Switch
  label="Snippets"
    isSelected={selected}
    onChange={(isSelected) => {
      setSelected(isSelected)
      alert("Your selection was saved.")
    }}
  />
);
}
```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with a Switch.

```tsx

  <Switch
    isDisabled
    helperMessage="View, insert, and create snippets wherever you write using keyboard shortcuts."
    label="Snippets"
  />

```

## Behavior

### Width

The width of a Switch with a hidden label is the width of the toggle.

For Switches with a visible label, the Switch fills the width of its container up to a maximum of 480px. The label and helper text can wrap to a second line once the container or maximum width is reached.

!\[Three Switches are shown at a width of 480px, the maximum allowed. The examples demonstrate the maximum width for right, left, and top label variants.]\(/img/components/switch\_max\_width.svg)

### Click area

A user can click or tap anywhere on the label, helper message, toggle, or space between them to change the state of a Switch.

### Immediate effect

The effects of turning a Switch on or off are immediate. There is no need for an additional Button to save the selection.

### No error state

A Switch does not have an error state because it is always either on or off, both of which are valid states.

If other errors or issues arise, such as an issue with internet connectivity, deliver this information in a [Toast](/components/toast) or a [Modal](/components/modal), depending on the appropriate level of urgency and intrusion.

## Accessibility

### Status changes

When an `onChange` event occurs, status changes and any additional content or elements that appear must be announced for people using a screen reader. For example, a user needs to be made aware that a set of Checkboxes has appeared after activating a Switch.

Write the announcement to explain what just happened and name where a user can interact with new content or elements.

In the coded example we've provided, the announcement explains that toppings are either displayed or no longer available to add on. The new section is named "Add toppings" and the language aligns across both the announcement and legend so they're clearly related. You don't need to announce the individual Checkboxes because they will be read at the contextually relevant time after a user has moved focus into the Checkbox Group.

```tsx
function SwitchStatusChangeExample() {
  // State for the Switch
  const [selected, setSelected] = React.useState(false);

  // States for the Checkboxes
  const [almonds, setAlmonds] = React.useState(false);
  const [bananas, setBananas] = React.useState(false);

  // State that indicates whether the status-changes section should include content.
  // When the component is initially loaded or when the user interacts with a Checkbox,
  // the status-changes section should not include content.
  const [statusChanges, setStatusChanges] = React.useState(false);

  return (
    <>
      <Form onSubmit={() => {}}>
        <Flex gap={2}>
          <FormHeader
            heading="S'mores donut"
            description="Marshmallow frosting topped with graham crackers and chocolate"
          ></FormHeader>
          <img src={useBaseUrl("/img/components/switch_donut.png")} alt="" style={{ maxHeight: "60px" }}/>
        </Flex>

        <FormRow>
          <Switch
            label="Customize donut"
            isSelected={selected}
            onChange={isSelected => {
              setSelected(isSelected);
              setStatusChanges(true);
            }}
          />
        </FormRow>

        {selected ? (
          <FormRow>
            <CheckboxGroup legend="Add toppings">
              <Checkbox
                isSelected={almonds}
                onChange={isSelected => {
                  setAlmonds(isSelected);
                  setStatusChanges(false);
                }}
              >
                Almonds
              </Checkbox>
              <Checkbox
                isSelected={bananas}
                onChange={isSelected => {
                  setBananas(isSelected);
                  setStatusChanges(false);
                }}
              >
                Bananas
              </Checkbox>
            </CheckboxGroup>
          </FormRow>
        ) : null}

        <FormFooter>
          <Button onClick={() => {}} text="Add to order" type="submit" />
          <Button onClick={() => {}} text="Cancel" variant="tertiary" />
        </FormFooter>
      </Form>

      <VisuallyHidden id="status-changes" aria-live="assertive">
        {statusChanges && selected && <p>Toppings are now displayed for you to add on.</p>}
        {statusChanges && !selected && <p>Toppings are no longer displayed for you to add on.</p>}
      </VisuallyHidden>
    </>

);
}
```

### Hidden labels

A Switch’s label can only be plain text. In some cases, you may require custom styling beyond what’s available as part of the component. For example, you might want to add Tags to classify different Switches. This requires visually hiding a Switch’s label and adding a separate Text and Tag component nearby.

A `label` is still required, but `labelDisplay="hidden"` can be used to visually hide the label while maintaining accessibility for people using screen readers. Add an `onClick` event handler to the external, visible text that acts as the label so that it will toggle the Switch's state as intended.

```tsx
function SwitchStatusChangeExample() {
  // State for "Disable Switch with custom label" Switch
  const [disabled, setDisabled] = React.useState(false);

  // State for the Switch with custom label
  const [selected, setSelected] = React.useState(false);

  return (
    <Flex direction="column" gap={4}>
      <Switch
        label="Disable Switch with custom label"
        isSelected={disabled}
        onChange={setDisabled}
        helperMessage="Disable the Switch with the custom label to see disabled style and behavior that should be implemented"
      />

      <Flex gap={2} justify="space-between">
        <Flex
          direction="column"
          gap={1}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          <Text 
            as="span"
            variant="text-small"
            weight="medium"
            color="base-default"
            onClick={() => {
              if (!disabled) {
                setSelected(!selected);
              }
            }}
          >
            Switch with custom label{" "}
            <Tag label="Beta" variant="warning" inline />
          </Text>
          <Text
            as="p"
            variant="text-xsmall"
            color="base-subdued"
            id="custom-label-helper"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Flex>
        <Switch
          label="Switch with custom label (beta)"
          isSelected={selected}
          isDisabled={disabled}
          onChange={setSelected}
          labelDisplay="hidden"
          aria-describedby="custom-label-helper"
        />
      </Flex>
    </Flex>
  );
}
```

### Keyboard interaction

| Key              | Expected result                             |
| ---------------- | ------------------------------------------- |
| Tab   | Moves focus into the Switch.                |
| Space | Activates the toggle and changes the state. |

## Writing

We aim to keep a consistent writing style across components within [Forms](/patterns/forms).

### Referring to state changes

With a well-considered label, a Switch should be so intuitive that no additional explanation is necessary to understand how to interact with it. If such an explanation is required to make sense of the experience, reconsider the label’s wording or whether another component might better match our users’ expectations. Avoid explaining how to use a Switch in UI content.

Because Switches are used to control functionality across Superhuman's product offerings, in some cases it’s necessary to redirect a user to another location to change the state of a Switch. For example, you may need to direct a user to turn on a new feature while using the desktop assistant.

Do not use *toggle* as a noun or verb. Avoid using the verb *switch* in this context, too. Instead, use language that identifies turning an option on or off.

!\[An empty state explains that a feature, Style, is turned off. There is a Button that says 'Open Settings' with an arrow pointing to the Settings menu a user would be taken to. A mouse hand cursor hovers over the corresponding Switch in the Settings menu.]\(/img/components/switch\_writing\_state\_changes.svg)

An empty state in the assistant prompts a user to turn on a feature that detects writing style.
Because a user’s explicit permission is needed, they are taken to Settings, where the Switch
controlling the feature is displayed.

### Labels

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

### Writing best practices for Switch labels

| Do | Don't |
|----|-------|
| Use positive phrasing that clearly communicates what happens when the Switch is on. | Do not use negative phrasing, which can create a double negative with the off state. Instead, set the default value based on what most users will want. |
| Think about the label being in conversation with the toggle, and the toggle can answer only “on” or “off.” | Do not use phrasing like questions that require a response other than “on” or “off.” |
| Use three or fewer words when possible. In general, be brief but remain clear. | Do not describe the state change itself in the label. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Use internal punctuation when necessary. | Do not use end punctuation. |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. | Do not truncate text. |


### Helper text

Helper text takes different forms to fit specific needs. Some tell a user what to do using action verbs, while others define terms and requirements with punchy fragments of information.

### Writing best practices for helper text of a Switch.

| Do | Don't |
|----|-------|
| In human terms, explain how a user will benefit from an option when it is on. | Do not explain how to use a Switch. The interaction should be obvious when combined with a well-considered label. |
| Define terms that may not be clear. | Do not use jargon or overly technical language that hinders clarity. |
| Use “Example:” to offer a universal and inclusive example of an expected input. It’s OK to provide both instructions and an example if space allows. | Do not use “E.g.” or “I.e.” to indicate an example. |
| Be brief. Use 140 characters or fewer unless unavoidable. | Do not overexplain, which can slow down a user with surplus information. |
| Use sentence case. | Do not use Title Case or ALL CAPS. |
| Include end punctuation if it’s a complete sentence or to distinguish two fragments. | Do not use exclamation points or question marks. |


## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Switch component in JS.

```tsx
import { Switch } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | The label that will be displayed outside of the toggle. |
| `defaultSelected` | `boolean` | - | When true, indicates the Switch should be turned on by default. Use this property only with uncontrolled components. |
| `helperMessage` | `string` | - | Provides additional context for this Switch outside of the label. |
| `isDisabled` | `boolean` | - | When true, indicates that a user cannot focus, change, or interact with the Switch. |
| `isSelected` | `boolean` | - | When true, indicates that the Switch is in the on state. For a controlled component, use the \`onChange\` event handler to set this prop appropriately. Use this property only with controlled components. |
| `labelDisplay` | `'left' | 'right' | 'top' | 'hidden'` | left | Used to indicate where the label for the Switch is displayed. <ul><li>\`left\`: Indicates the label should be displayed to the left of the toggle.</li><li>\`right\`: Indicates the label should be displayed to the right of the toggle.</li><li>\`top\`: Indicates the label should be displayed on top of the toggle.</li><li>\`hidden\`: Indicates the label should be visually hidden because another element on the page is acting as the visual label for the Switch.</li></ul> |
| `name` | `string` | - | Defines the unique name of the input. Used when submitting an HTML form. <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname' target='_blank'>Learn more at MDN</a>. |
| `ref` | `React.Element<HTMLInputElement>` | - | \`ref\` that is forwarded to the underlying input element. |
| `size` | `'small' | 'medium' | 'large' | 'xlarge'` | medium | Controls the size of the Switch and label. |
| `value` | `string` | - | Used to identify the input when submitting an HTML form. <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue' target='_blank'>Learn more at MDN</a>. |
| `onChange` | `(isSelected: boolean) => void` | - | Event handler that is called whenever the Switch changes state. |


## Related components

- [Checkbox](/components/checkbox)
- [Radio Button Group](/components/radio-button-group)
- [Radio Group](/components/radio-group)
