# Radio Button Group

A Radio Button Group is an alternative to a Radio Group that allows users to make a single selection from two or more options.

## Examples

### Variants

| Image | Variant |
| --- | --- |
| Radio Button Group with text only | Text only |
| Radio Button Group with text and icon | Text and icon |

## Design

### Anatomy

Anatomy diagram of a Radio Button Group

1. Label (required)
2. Optional or Required indication
3. Helper text
4. Selected option
5. Deselected option
6. Error message

## Usage

Use a Radio Button Group to allow a user to make a single selection from a set of options on a page, especially when a user would benefit from a reduction in cognitive load.

**Do not use when:**

- Displaying more than six options (instead, use a [Radio Group](/components/radio-group))
- Allowing a user to make multiple selections from a set of options (instead, use [Checkboxes](/components/checkbox))
- Displaying content in different views (instead, use [Tabs](/components/tabs))
- Displaying binary options, such as on and off (instead, use a [Switch](/components/switch))

### Consistency

Use the same controls throughout a single form, including a multi-step form. Mixing Radio Button Groups and Radio Groups increases cognitive load.

Do this: Always use the same component within the context of a form. In this example, Radio Button Groups are used for both questions.

Do not do this: Never mix the use of different components within the context of a form. In this example, Radio Groups and Radio Button Groups are both used.

## Behavior

### Option states
