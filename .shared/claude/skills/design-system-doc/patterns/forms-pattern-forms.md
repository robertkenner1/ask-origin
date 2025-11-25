# Forms

A Form is a combination of inputs that collect information. [View the available Form components.](/components/form)

## Usage

Use when collecting structured data from a user, such as personal information or preferences. A Form is flexible so that it can be used in many contexts, such as sign-ups, settings, item creation, and item editing.

Check with your engineering team to understand the back-end infrastructure so you can choose inputs that align with the specific functionality.

## Anatomy

![Anatomy diagram of a Form](/img/components/forms_anatomy.svg)

Form headingHeading descriptionLabel (can include Optional or Required indicator)Text fieldFieldset legend (can include Optional or Required indicator)Legend descriptionFieldsetPrimary Button

## Building blocks

### Fieldsets and legends

#### Usage

Use a [Fieldset](/components/form#with-a-fieldset) to group closely related inputs. Always use a legend to label the set and style the legend in **Text Small Bold**.

![A Fieldset groups related inputs, such as the day, month, and year of a birth date, while a legend clearly labels the set.](/img/patterns/forms_fieldset_example.svg)

A Fieldset groups related inputs, such as the day, month, and year of a birth date, while a legend
clearly labels the set.

#### Required or Optional indicator

The Fieldset legend can include an "(Optional)" or a "(Required)" indicator. If the majority of the Fieldsets are one type, mark only the outliers.

If a user can add a large amount of optional information, we recommend creating a dedicated Fieldset for it. Mark the Fieldset legend as "(Optional)", rather than individual input labels, to avoid excessive repetition.

| Do | Example |
|----|---------|
| Group multiple optional fields in a Fieldset with a legend marked as "(Optional)" to avoid excessive repetition. | ![The entire shipping address is optional, so the inputs are grouped in a Fieldset with a legend marked as "(Optional)".](/img/patterns/forms_optional_section.svg) |

#### Writing

Fieldset legends help a user scan the sections of a Form. A legend should clearly describe the entire set of inputs.

**Writing best practices for Fieldset legends**

| Do | Example | Don't | Example |
|----|---------|-------|---------|
| Keep the writing structure and verb tense consistent within the entire Form. | ![2 fieldsets are shown with parallel style in the legend text - Shipping address and Billing address.](/img/patterns/fieldset_writing_DO_1.svg) | Do not mix writing structures or verb tenses within a Form. | ![2 fieldsets are shown with mis-matching style in the legend text - Shipping address and then Enter your billing address, too.](/img/patterns/fieldset_writing_DONT_1.svg) |
| Use sentence case. | ![A fieldset legend written in sentence case, Assign shortcuts, where only the first letter of the first word is capitalized.](/img/patterns/fieldset_writing_DO_2.svg) | Do not use Title Case or ALL CAPS. | ![A fieldset legend written in all caps, ASSIGN SHORTCUTS.](/img/patterns/fieldset_writing_DONT_2.svg) |
| Use internal punctuation when necessary. | ![A fieldset legend has a hyphen in it, which is an example of internal punctuation.](/img/patterns/fieldset_writing_DO_3.svg) | Do not use end punctuation, except for question marks in some cases. | ![A fieldset legend has an exclamation point at the end, which is discouraged along with periods.](/img/patterns/fieldset_writing_DONT_3.svg) |

### Labels

#### Accessibility

Use a persistent label on all components in a Form.

| Do | Don't |
|----|-------|
| ![Always pair a Form input, like Text Field, with a persistent label.](/img/components/text_field_do.svg)<br/>Always pair a Form input, like Text Field, with a persistent label. | ![Do not use a nonpersistent label or shrinking label inside a Form input.](/img/components/text_field_dont.svg)<br/>Do not use a nonpersistent label or shrinking label inside a Form input. |

In rare cases when surrounding text acts as the label of an input, the input’s label can be hidden, typically with the `labelDisplay` prop.

```tsx

  <Flex align="center" gap={4} width={400}>
    <TextSmall children="View snippet list"/>
    <TextField labelDisplay="hidden" label="Shortcut to view snippet list" defaultValue="/\"/>
  </Flex>

```

#### Required or Optional indicator

If the majority of the inputs are one type, mark only the inputs for outliers.

Try to limit the occurrence of optional inputs. When the majority of the inputs are optional, mark any required inputs with "(Required)". Do not mark optional inputs as "(Optional)".

When the majority of the inputs are required, mark any optional inputs with "(Optional)". Also include a note at the top of the form indicating that the other, unmarked inputs are required.

| Do | Example |
|----|---------|
| Mark only required inputs when the majority are optional. | ![Only one input is required, so it is marked as "(Required)". The others are understood to be optional.](/img/patterns/forms_optional.svg) |
| Mark only optional inputs when the majority are required, with a note at the top of the form. | ![The page subheading indicates all fields are required. The only optional input is marked as "(Optional)".](/img/patterns/forms_required.svg) |

#### Writing

Labels help a user scan the various inputs in a Form. A label should describe the purpose of an individual input while clearly distinguishing each input from one another.

**Writing best practices for input labels**

| Do | Example | Don't | Example |
|----|---------|-------|---------|
| Keep the writing structure and verb tense consistent within a set of Form components. | ![3 input fields are shown with labels that say Street address, City, and State. The style is parallel.](/img/patterns/label_writing_DO_1.svg) | Do not mix writing structures or verb tenses within a set of Form components. | ![3 input fields are shown with labels that say Street address, Enter your city, and Select state. The style is mistmatched.](/img/patterns/label_writing_DONT_1.svg) |
| Use language that adds specificity and builds on information given in other elements. | ![In a modal for adding a new term, 2 textareas are shown with labels that read Link and Display name. Above them is a callout to add any important documents relevant to the term.](/img/patterns/label_writing_DO_2.svg) | Do not unnecessarily repeat information given in nearby elements. | ![In a modal for adding a new term, 2 textareas are shown with labels that read Related link for term and Display name for related term. The labels are long and reference each other, as well as other text in the modal, which is confusing.](/img/patterns/label_writing_DONT_2.svg) |
| Use sentence case. | ![A Select component is labeled Primary language in sentence case, where only the first letter of the first word is capitalized.](/img/patterns/label_writing_DO_3.svg) | Do not use Title Case or ALL CAPS. | ![A Select component is labeled PRIMARY LANGUAGE in all caps.](/img/patterns/label_writing_DONT_3.svg) |
| Use internal punctuation when necessary. | ![A Text Field has a label, decision-maker's name, which has two examples of internal punctuation—a hyphen and an apostrophe.](/img/components/Textfield_label_writing_DO_5.svg) | Do not use end punctuation, except for question marks in some cases. | ![A Text Field has a label with an exclamation point at the end, which is discouraged in addition to periods.](/img/components/Textfield_label_writing_DONT_5.svg) |
| Use a single line for labels whenever possible. Text can wrap, but a shorter rewrite or helper text is preferable. | ![A Checkbox's label reads Show labels entirely, even long ones. Helper text says A little helper text can go a long way. It demonstrates showing all of the text for a long label.](/img/patterns/label_writing_DO_4.svg) | Do not truncate a label. | ![A Checkbox's label is shown truncated without all of the text content. It says Show long labels in their enti … but the end of the phrase is unfinished.](/img/patterns/label_writing_DONT_4.svg) |

### Helper text

#### Usage

Use helper text to provide instructions, indicate requirements, offer an example, or define a technical term used in a label.

If you're questioning whether a label is unclear, you may want to add helper text.

| Do | Don't |
|----|-------|
| ![Use helper text to add meaning or additional information.](/img/patterns/Helper_usage_DO.svg)<br/>Use helper text to add meaning or additional information. | ![Do not use helper text to repeat or summarize a label.](/img/patterns/Helper_usage_DONT.svg)<br/>Do not use helper text to repeat or summarize a label. |

#### Writing

Helper text takes different forms to fit specific needs. Some tell the user what to do with action verbs, while others define terms and requirements with punchy fragments of information.

**Writing best practices for helper text**

| Do | Example | Don't | Example |
|----|---------|-------|---------|
| In human terms, directly state how a user will benefit from giving their input or a reason we are requesting their input. | ![The helper text for a Switch says Save time by accepting similar suggestions all at once.](/img/patterns/helper_writing_DO_1.svg) | Do not use ambivalent or meandering language that softens feature benefits. | ![The helper text for a Switch says If turned on, you can choose to accept or dismiss bundles of similar suggestions all at once. It's long and somewhat unclear.](/img/patterns/helper_writing_DONT_1.svg) |
| Define terms that may not be clear. | ![The helper text for a Text Field input says Supplied by your identity provider. Verifies members when they enter their work credentials. to describe the label SAML 2.0 endpoint.](/img/patterns/helper_writing_DO_2.svg) | Do not use jargon or overly technical language that hinders clarity. | ![The helper text for a Text Field labeled SAML 2.0 endpoint doesn't help define the unclear label because it contains words like XML-based protocol, principal authority, and identity provider.](/img/patterns/helper_writing_DONT_2.svg) |
| Make requirements clear to help prevent errors before they happen. | ![The helper text for a Text Field for a phone number says enter exactly 10 digits, so that the user knows the requirement.](/img/patterns/helper_writing_DO_3.svg) | Do not assume that the user will understand how to complete an input without the addition of helper text. Inputs often have nuances that may confuse a user. | ![A text field for a phone number has no helper text, but the user may not use the right format unless we tell them what format we want.](/img/patterns/helper_writing_DONT_3.svg) |
| Use "Example:" to offer a universal and inclusive example of an expected input. It's OK to provide both instructions and an example if space allows. | ![Helper text says Example: 123 fake st.](/img/patterns/helper_writing_DO_4.svg) | Do not use "E.g." or "I.e." to indicate an example. | ![Helper text says E.g., 123 fake st. We want to avoid this and similar abbreviations so that context is clear.](/img/patterns/helper_writing_DONT_4.svg) |
| Be brief. Use 140 characters or fewer unless unavoidable. | ![Helper text for a select component to choose company size says it's OK to estimate.](/img/patterns/helper_writing_DO_5.svg) | Do not overexplain, which can slow down a user with surplus information. | ![Helper text for a select component to choose company size has a very long description over 140 characters that isn't needed for the user to understand how to interact with the product.](/img/patterns/helper_writing_DONT_5.svg) |
| Use sentence case. | ![Helper text is shown written in sentence case, where only the first letter of the first word is capitalized.](/img/patterns/helper_writing_DO_6.svg) | Do not use Title Case or ALL CAPS. | ![Helper text is shown written in all caps.](/img/patterns/helper_writing_DONT_6.svg) |
| Include punctuation if it's a complete sentence or to distinguish two fragments. | ![Helper text for a select component says Select the English dialect that you write in most often.](/img/patterns/helper_writing_DO_7.svg) | Do not use exclamation points. | ![Helper text for a Select component says Select the English dialect that you write in most often! With an exclamation point at the end, which we want to avoid.](/img/patterns/helper_writing_DONT_7.svg) |

### Placeholder text

#### Usage

In general, do not use placeholder text. To convey information necessary for understanding how to fill in a input, use helper text that is accessible to a screen reader. [Learn how to write helper text](#helper-text).

| Do | Don't |
|----|-------|
| ![Use placeholder text rarely and only for nonessential information.](/img/components/text_field_placeholder_do.svg)<br/>Use placeholder text rarely and only for nonessential information. | ![Do not use placeholder text for information necessary for understanding a Text Field or Area.](/img/components/text_field_placeholder_dont.svg)<br/>Do not use placeholder text for information necessary for understanding a Text Field or Area. |

#### Accessibility

We advise against using placeholder text because it is not reliably read aloud by screen readers. This can deprive a person with a vision disability from receiving content considered important enough to include.

Accessibility improvements are often holistic design improvements that benefit all users. In this case, placeholder text presents a universal usability issue, as it disappears after a user starts to type. This can lead to a loss of information for all users, including but not limited to someone with a vision disability.

### Error messages

Errors, mistakes, and issues happen. But you can influence how often errors occur and even prevent them through savvy design practices and healthy cross-discipline collaboration.

Learn more on how to handle [errors in forms](/patterns/forms-pattern/errors-in-forms).

## Related components

- [Checkbox](/components/checkbox)
- [Combobox](/components/combobox)
- [Form](/components/form)
- [Radio Group](/components/radio-group)
- [Select](/components/select)
- [Switch](/components/switch)
- [Textarea](/components/textarea)
- [TextField](/components/text-field)
