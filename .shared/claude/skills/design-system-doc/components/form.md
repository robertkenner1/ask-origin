# Form

A Form is a combination of inputs that collect information.

A Form collects the various inputs for a Jira issue, such as Project, Issue type, and Summary.

## Usage

Use when collecting structured data from a user, such as personal information or preferences. A Form is flexible so that it can be used in many contexts, such as sign-ups, settings, item creation, and item editing.

## Anatomy

!\[Anatomy diagram of a Form]\(/img/components/forms\_anatomy.svg)

Form headingHeading descriptionLabel (can include Optional or Required indicator)Text FieldFieldset legend (can include Optional or Required indicator)Legend descriptionFieldsetPrimary Button

## Examples

### Default

A Form creates a consistent layout for the inputs inside it, such as a Text Field and Radio Group.

```tsx

  <Form>
      <FormHeader
        heading="Settings"
      />
      <FormRow>
        <TextField label="First name" />
        <TextField label="Last name" />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preference"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>

```

### Footer actions

The Button that submits the form must have `type="submit"` in order to automatically call the `onSubmit` function of Form.

```tsx

function Example() {

  return (
    <Form onSubmit={() => {
      alert("Your changes were saved.")
    }}>
      <FormHeader
        heading="Settings"
      />
      <FormRow>
        <TextField isRequired label="First name" />
        <TextField isRequired label="Last name" />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preference"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button type="submit" text="Save" />
        <Button text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>
  )

}

```

### Rows and spacing

The Form Row component spaces out inputs evenly across the horizontal row. All content, except the heading and footer, should be contained within either a row or Fieldset.

```tsx

  <Form>
      <FormHeader
        heading="Your name"
      />
      <FormRow>
          <TextField label="First name" />
          <TextField label="Last name" />
      </FormRow>
      <FormRow>
          <TextField label="First name" />
          <TextField label="Middle name" />
          <TextField label="Last name" />
      </FormRow>
      <FormRow>
          <TextField label="Nickname" />
      </FormRow>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>


```

### With a heading description

Use `description` to display additional details beyond the `heading` in the Form Header component. Follow the [writing guidelines for helper text](/patterns/forms-pattern/forms/#writing-2) for heading descriptions, too.

```tsx

  <Form>
      <FormHeader
        heading="Settings"
        description="Update your name and contact preference"
      />
      <FormRow>
        <TextField label="First name" />
        <TextField label="Last name" />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preferences"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>

```

### With a custom heading

Form Header also allows for custom content outside of the `description`.

```tsx

  <Form>
      <FormHeader
        heading="Settings"
      >
        <Text as="p">Update your name and contact preferences. <a href="grammarly.com">Learn about communications from Grammarly.</a></Text>
      </FormHeader>
      <FormRow>
        <TextField label="First name" />
        <TextField label="Last name" />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preferences"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>

```

### With a Fieldset

Use the Form Fieldset component to group closely related inputs, like the parts of a shipping address, in an accessible manner. A `legend` is required for a Form Fieldset.

```tsx

  <Form>
      <FormHeader
        heading="Settings"
        description="Update your information and contact preference"
      />
      <FormRow>
        <TextField label="First name" />
        <TextField label="Last name" />
      </FormRow>
      <FormFieldset legend="Birthday" description="Used for a surprise gift">
        <FormRow>
          <TextField label="Month" />
          <TextField label="Day" />
          <TextField label="Year" />
        </FormRow>
      </FormFieldset>
      <FormRow>
        <RadioGroup
          legend="Contact preference"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFieldset legend="Shipping address" isOptional>
        <FormRow>
          <TextField label="Street address" />
        </FormRow>
        <FormRow>
          <TextField label="City" />
          <TextField label="State" />
        </FormRow>
      </FormFieldset>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>

```

### Layout density

There are three available density settings: Compact, Standard, and Spacious. Use `compact` spacing when vertical space is limited, such as within cards. Use `spacious` when there is ample vertical space available, as in a desktop view.

```tsx

  <Flex gap={8} wrap>
      <Form spacing="compact">
          <FormHeader
              heading="Compact"
          />
          <FormRow><TextField label="Name" /></FormRow>
          <FormRow><TextField label="Email" /></FormRow>
          <FormFooter>
              <Button onClick={() => {}} text="Save" type="submit" />
              <Button onClick={() => {}} text="Cancel" variant="tertiary" />
          </FormFooter>
      </Form>
      <Form>
          <FormHeader
              heading="Standard"
          />
          <FormRow><TextField label="Name" /></FormRow>
          <FormRow><TextField label="Email" /></FormRow>
          <FormFooter>
              <Button onClick={() => {}} text="Save" type="submit" />
              <Button onClick={() => {}} text="Cancel" variant="tertiary" />
          </FormFooter>
      </Form>
      <Form spacing="spacious">
          <FormHeader
              heading="Spacious"
          />
          <FormRow><TextField label="Name" /></FormRow>
          <FormRow><TextField label="Email" /></FormRow>
          <FormFooter>
              <Button onClick={() => {}} text="Save" type="submit" />
              <Button onClick={() => {}} text="Cancel" variant="tertiary" />
          </FormFooter>
      </Form>
  </Flex>

```

### Width

Forms have a maximum of 650px. Inputs within a row stack on top of one another when the Form is within a narrow container or when the window is resized to a smaller view by a user.

```tsx

<div style={{width: "250px"}}>
  <Form>
      <FormHeader
        heading="Settings"
        description="Update your information and contact preference"
      />
      <FormRow>
        <TextField label="First name" />
        <TextField label="Last name" />
      </FormRow>
      <FormFieldset legend="Birthday" description="Used for a surprise gift">
        <FormRow>
          <TextField label="Month" />
          <TextField label="Day" />
          <TextField label="Year" />
        </FormRow>
      </FormFieldset>
      <FormRow>
        <RadioGroup
          legend="Contact preferences"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFieldset legend="Shipping address">
        <FormRow>
          <TextField label="Street address" />
        </FormRow>
        <FormRow>
          <TextField label="City" />
          <TextField label="State" />
        </FormRow>
      </FormFieldset>
      <FormFooter>
        <Button onClick={() => {}} text="Save" type="submit" />
        <Button onClick={() => {}} text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>
  </div>

```

## Behavior

### Validation and errors

When a user submits a Form, validate any required fields or expected formats. Present an error message for each input that has an issue. [Learn how to write validation error messages.](/patterns/forms-pattern/errors-in-forms)

```tsx

function Example() {
  const [firstNameError, setFirstNameError] = React.useState(undefined);
  const [lastNameError, setLastNameError] = React.useState(undefined);
  const inputRefFirst = React.useRef(null);
  const inputRefLast = React.useRef(null);

  return (
    <Form onSubmit={() => {
      inputRefFirst.current.value === "" && setFirstNameError("Add your first name.")
      inputRefLast.current.value === "" && setLastNameError("Add your last name.")
    }}>
      <FormHeader
        heading="Settings"
      />
      <FormRow>
        <TextField ref={inputRefFirst} isRequired label="First name" errorMessage={firstNameError} />
        <TextField ref={inputRefLast} isRequired label="Last name" errorMessage={lastNameError} />
      </FormRow>
      <FormRow>
        <RadioGroup
          legend="Contact preferences"
          helperMessage="Used for product notifications and marketing"
          layout="row"
        >
          <RadioButton value="emails">Emails only</RadioButton>
          <RadioButton value="text">Texts only</RadioButton>
          <RadioButton value="both">Emails and texts</RadioButton>
        </RadioGroup>
      </FormRow>
      <FormFooter>
        <Button type="submit" text="Save" />
        <Button text="Cancel" variant="tertiary" />
      </FormFooter>
    </Form>
  )
}

```

## Accessibility

Apply the accessibility guidelines in the Form pattern, where you’ll find specific information and examples of accessible Forms. [Learn about Form accessibility.](/patterns/forms)

### Form headings

Form Header allows you to override the semantic heading level depending on the page the Form is placed within. The `heading` is an H2 by default but should be overriden to follow a logical order. For example, if the context surrounding the Form has an H1 and H2 already, override the `headingLevel` to be `h3`, as shown below.

```tsx

function Example() {
  return (
  <Flex gap={4} direction="column">
    <Heading variant="heading-large" as="h1" style={{ borderBottom: "1px solid #efefef" }}>Account Settings</Heading>
    <Heading variant="heading-medium" as="h2">Writing style</Heading>
    <Text as="p">Understanding how you use Grammarly helps us tailor experiences to your needs.</Text>
    <Form onSubmit={() => {}}>
      <FormHeader
        heading="About you"
        headingLevel="h3"
        headingSize="small"
      />
      <FormRow>
        <RadioGroup
          legend="Most of my writing is for:"
          layout="row"
          defaultValue="work"
        >
          <RadioButton value="school">School</RadioButton>
          <RadioButton value="work">Work</RadioButton>
          <RadioButton value="other">Other</RadioButton>
        </RadioGroup>
      </FormRow>
       <FormRow>
        <RadioGroup
          legend="My primary function is:"
          layout="row"
        >
          <RadioButton value="school">Marketing</RadioButton>
          <RadioButton value="work">Engineering</RadioButton>
          <RadioButton value="other">Sales</RadioButton>
          <RadioButton value="other">Leadership</RadioButton>
        </RadioGroup>
      </FormRow>
    </Form>
  </Flex>
  )
}

```

### Keyboard interaction

| Key                                  | Expected result                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| Tab                       | Moves focus through the inputs and Footer actions inside the Form.                    |
| Enter or Space | If focus is on the **Submit** Button, activates the `onSubmit` callback for the Form. |

## Writing

Apply the writing guidelines from the Form pattern, where you’ll find specific information and examples of how to write labels, legends, helper text, and error messages. [Learn how to write a Form.](/patterns/forms)

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Form components in JS.

```tsx
import { Form, FormHeader, FormRow, FormFooter, FormFieldset } from "@superhuman/origin";
```

## API

### Form props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for contents of the Form. Everything should be contained in one of the subcomponents: FormHeader, FormRow, FormFieldset, or FormFooter. |
| `maxWidth` | `number` | - | Sets a width on the content of the Form in pixels. |
| `name` | `string` | - | Used to identify this Form. |
| `spacing` | `'spacious' | 'standard' | 'compact'` | standard | Adjusts the vertical spacing between parts of the Form. |


### FormHeader props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for contents of the header, if more functionality is needed outside of the heading and description. Places content after the title and description. |
| `heading` | `string` | - | Used for the title of the Form. Labels the Form with \`aria-labelledby\`. |
| `description` | `string` | - | Adds detail about the purpose or goal of this Form. |
| `headingLevel` | `'h1' | 'h2' | 'h3' | 'h4'` | h2 | Changes the underlying semantic element used for the heading. |
| `headingSize` | `'small' | 'medium' | 'large'` | large | Changes the font size of the heading according to our Typography tokens. |


### FormFieldset props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for contents of the Fieldset. Should be closely related inputs, such as the parts of an address. |
| `legend` | `string` | - | Displays the text legend of the Fieldset. |
| `legendIndicatorForOptional` | `string` | (Optional) | Legend indicator for optional. |
| `legendIndicatorForRequired` | `string` | (Required) | Legend indicator for required. |
| `description` | `string` | - | Adds detail about the Fieldset |
| `isOptional` | `boolean` | - | When true, adds “(Optional)” indicator to the legend. Cannot be combined with \`isRequired\`. |
| `isRequired` | `boolean` | - | When true, adds “(Required)” indicator to the legend and marks fieldset as required. Cannot be combined with \`isOptional\`. |


### FormRow props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for contents of a row in a Form. Adds spacing between each child. |


### FormFooter props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | Used for contents of the footer, typically a single primary Button with a secondary or tertiary Button if needed. Spacing is automatically added between children. |


## Related components

- [Button](/components/button)
- [Checkbox Group](/components/checkbox)
- [Radio Group](/components/radio-group)
- [Select](/components/select)
- [Text Field](/components/text-field)
- [Textarea](/components/textarea)
