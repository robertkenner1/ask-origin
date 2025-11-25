# Verification Code

Verification Code accepts a one-time code containing only numbers or both letters and numbers.

A six-digit verification code is entered to securely connect a user's Facebook and Grammarly accounts.

## Usage

**Use for:**

* One-time passwords (throwaway)
* 2-factor authentication (2FA)
* Integrations or connectors with third-party services

**Do not use for:**

* Password entry where privacy is crucial, such as for an account password. Instead, use the `password` type of [Text Field](/components/text-field#password) so that the characters are hidden as they are typed, protecting the password from being seen by others.
* 4-digit PINs using only numbers that should be hidden as they are typed.
* Text inputs other than codes, such as a name or email address. Instead, use [Text Field](/components/text-field).

## Examples

### Default

By default, the Verification Code component has a 6-digit input in `size="large"` and only accepts numbers.

```tsx

    <VerificationCode legend="Security code" />

```

### Type

#### Numbers only

Restrict inputs to only numbers with `type="number"`. This is also the default.

```tsx

    <VerificationCode type="number" legend="Security code" />

```

#### Text

Restrict inputs to letters and numbers with `type="text"`.

```tsx

    <VerificationCode type="text" legend="Security code" />

```

### Size

The Verification Code input comes in three sizes: `small`, `medium`, and `large`. Large is the default and preferred for browser-based experiences; however, you might consider the small size in compact UI.

```tsx

  <Flex gap={4} direction="column">
    <Text as="p">Large (default)</Text>
    <VerificationCode legend="Security code" name="auth" />
    <Text as="p">Medium</Text>
    <VerificationCode size="medium" legend="Security code" name="auth" />
    <Text as="p">Small</Text>
    <VerificationCode size="small" legend="Security code" name="auth" />
  </Flex>

```

### Controlled value

The `value` of a Verification Code component can be maintained by using React state.

```tsx

function Example() {
const [value, setValue] = React.useState("987654");

  return (
    <Flex direction="column" gap={6}>
      <Flex gap={2}>
          <Button variant="secondary" onClick={() => setValue("")}>
              Clear code
          </Button>
          <Button variant="secondary" onClick={() => setValue("123456")}>
              Set code to “123456”
          </Button>
      </Flex>
      <VerificationCode legend="Security code" name="auth" value={value} />
    </Flex>
  );
}

```

### Error

Use `errorMessage` to change the outline color to red and display an error message.

```tsx

    <VerificationCode errorMessage="Required to connect accounts. Check your email for a one-time code." legend="Security code" />

```

### Disabled

Use `isDisabled` to indicate that a user cannot focus, change, or interact with any of the Verification Code inputs.

```tsx

    <VerificationCode isDisabled legend="Security code" />

```

## Behavior

### Entering values

Codes can be entered in two ways with slight differences in behavior:

* When typing with the keyboard, the cursor advances to the next field after a user enters a digit or letter.
* When pasting a code with ⌘+V on Mac or Ctrl+V on Windows, the entire copied code will be entered across the set of fields.

In either case, existing values in any of the fields field will be overwritten as a user types or as values are pasted.

### Error states

The Verification Code component has two types:

* When `type="number"`, the input accepts only numerical digits
* When `type="text"`, the input accepts either numbers or letters

Although the component provides built-in styling for errors and a prop to display an error message, **you need to decide how to:**

* Inform a user of any requirements
* Implement any relevant error states

It’s recommended to display helper text or a description nearby to identify requirements. This can help prevent errors before they happen. For example, this instructional text adds value and clarity to keep a user moving forward with confidence: “Enter the code sent to kai.williams@grammarly.com using only numbers 0–9.”

## Accessibility

### Legend

A `legend` is required to clearly describe the purpose of the entire Verification Code fieldset (the group of related, combined fields). It is always visually hidden because additional content before the input fields should provide instructions about where the code was sent. Each individual input also has a built-in label to indicate the current location within the code by announcing “Digit # of 6”.

```tsx

  <Form onSubmit={() => {}}>
      <Flex gap={2} direction="column">
          <Heading variant="heading-small" as="h1" >Sign in securely by connecting your Facebook and Grammarly accounts</Heading>
          <Text as="p" color="base-subdued">Enter the code sent to kai.williams@grammarly.com</Text>
          <VerificationCode legend="Security code" name="auth" />
          <Button text="Connect account" type="submit" onClick={() => {}}/>
      </Flex>
  </Form>

```

### Keyboard interaction​

| Key                                  | Expected result                                                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab                       | Moves focus to next input. When in the last input, moves focus to the next active element. |
| Cmd + v or Ctrl + v (aka Paste) | Pastes from clipboard. Inputs are filled in from left to right in order. |                                                                                                                      |
| Backspace                       | Deletes the value in the focused input. If the current input is already empty, moves focus to the previous input and then deletes the value. |
| Enter                       | Submits the parent form. |

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the VerificationCode component in JS.

```tsx
import { VerificationCode } from "@superhuman/origin";
```

## API

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `legend` | `string` | Yes | - | Describes the purpose of the Verification Code. |
| `errorMessage` | `string` | No | - | Used to describe why this Verification Code has an error. |
| `isDisabled` | `boolean` | No | `false` | When true, indicates that none of the Verification Code inputs can be focused, changed, or interacted with. |
| `numberOfDigits` | `number` | No | `6` | Determines the number of individual inputs. |
| `size` | `"small" \| "medium" \| "large"` | No | `"large"` | Determines the height of the inputs. |
| `type` | `"text" \| "number"` | No | `"number"` | Determines what characters can be entered for the code. |
| `value` | `string` | No | - | Used to programmatically set the value of the inputs. |
| `onChange` | `(value: string) => void` | No | - | Event handler that is called when the value changes. |
| `onFocus` | `React.FocusEventHandler<HTMLInputElement>` | No | - | Event handler that is called when an input is focused. |

## Related components

- [Text Field](/components/text-field)
