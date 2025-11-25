# Screen Reader Only

Screen Reader Only is a utility component that makes content visible only to screen readers and
other assistive technology (AT).

## Usage

**Use when:**

* Hiding text visually but keeping it available to assistive technologies like screen readers
* You need to add context for those who cannot perceive visual information. For example:
  * Visually hidden headings to page regions like navigation or footer
  * Visually hidden descriptions of HTML elements that do not support `aria-label`, such as code, caption, emphasis, paragraph, strong, or superscript
  * Column headings that are abbreviated or omitted, like M, T, W, Th, F on a calendar
  * Links that open in new windows

**Do not use when:**

* Content contains information that would be helpful to all users. Instead, present information as plain text on the page.
* You are adding a visually hidden name to an interactive element. Instead, use a hidden label associated with the interactive element with `aria-labelledby` when possible or an `aria-label` when it is not.
* You want to hide interactive elements that are intentionally hidden from all users.

## Example

### Providing visual context

In this example, Screen Reader Only provides extra context about a suggested change. It explains what will be deleted (“today” with a lowercase “t”) and what will be inserted instead (“Today” with a capitalized “T”).

This extra context is otherwise only conveyed visually using the font color and strikethrough. This kind of information must be clearly detailed for assistive technologies through Screen Reader Only.

```tsx

  <Flex
    gap={6}
    direction="column"
    padding={4}
    width={400}
    borderColor="base-subdued"
    borderRadius={2}
  >
    <Flex gap={2} align="center" marginLeft={-1}>
      <Icon icon={OutcomeCorrectnessIcon} size="medium" accessibilityLabel="Correctness Category" />
      <Text variant="text-small" as="p">Correctness</Text>
      <Text variant="text-small" as="span">‧</Text>
      <Text variant="text-small" as="p">Capitalize the word</Text>
      <IconButton
        accessibilityLabel="Details about this correction"
        icon={InterfaceInfoIcon}
        variant="tertiary"
        onClick={() => {}}
      />
    </Flex>
    <Flex gap={1}>
      <ScreenReaderOnly>delete "today (spelling t o d a y)"</ScreenReaderOnly>
      <Text aria-hidden={true} variant="text-medium" as="p" decoration="line-through">today</Text> 
      <ScreenReaderOnly>insert "Today (spelling capital T o d a y)"</ScreenReaderOnly>
      <Text aria-hidden={true} as="p" weight="bold">Today</Text> is a great day!
    </Flex>
    <Flex justify="space-between" align="center" gap={4} marginLeft={-2}>
      <Button variant="tertiary" text="Previous" accessibilityLabel="Back to previous step" />
      <Text as="p" variant="text-small">
        3 of 6<ScreenReaderOnly>Suggestions</ScreenReaderOnly>
      </Text>
      <Button text="Next" accessibilityLabel="Next step" />
    </Flex>
  </Flex>

```

## Accessibility

Screen Reader Only is the opposite of `aria-hidden`, which hides visible items from the accessibility tree.

## Writing

### Identify missing context

Start by identifying information that is apparent only from the visual design and is not otherwise explicitly communicated. Then, add this missing context in Screen Reader–Only content in a way that makes the most sense for your specific scenario.

Consider this example of a pricing discount where Screen Reader–Only text identifies the vital difference between two monetary amounts that would not otherwise be communicated.

```tsx

<Flex gap={2} direction="row">
  <Text as="p" decoration="line-through">$144</Text>
  <Text 
  as="code" 
  variant="text-small"
  >
    {\`<ScreenReaderOnly>discounted to</ScreenReaderOnly>\`}
  </Text>
  <Text as="p" weight="bold">$72 annually</Text>
</Flex>

```

A strikethrough on a price indicating a discount is a visual piece of information that is not communicated through screen readers. Supplementary content is needed to convey that the second price read aloud is what’s actually paid after any discounts.

**Do not include redundant or unnecessary information.** For example, it might be tempting to say “Review tone in Grammarly by pressing the button in the upper-left corner” in an attempt to capture more detail about what’s being pointed to. And yet, the spatial relations are irrelevant in the context of screen readers, so you can omit “in the upper-left corner” entirely. Instead, use Screen Reader-Only text and reference the name of the element to provide the context.

!\[A previous version of Grammarly’s shows an onboarding guide and an arrow that points to part of the suggestion card UI. In this case, the arrow points to tone detection. The text and arrow and separated, and a code block is shown with additional screen reader–only text that says “Review tone in Grammarly by pressing the button to see how your text may sound to readers”.]\(/img/utilities/screen\_reader\_only\_writing1.svg)

An arrow points to the Icon Button that invokes the tone detection UI. Since this information is conveyed visually, Screen Reader–Only text is necessary to announce the name of the interactive element they will be looking for inside of the assistant card.

### Be brief and straightforward

Use the fewest number of words possible to explain what a user needs to know. People who use screen readers need precise information that’s easy to digest. **Do not be wordy, cutesy, or abstract.**

Consider the important links that appear on Grammarly’s sign-in page. Since Grammarly’s and Google’s privacy policies are linked, we need to make the difference between similar link text more obvious for customers using a screen reader.

Any unnecessary embellishment like “Grammarly’s privacy policy—helpful information ahead!” is undesirable because it slows down a user’s progress.

```tsx

<Flex
        width={500}
        direction="column"
        gap={5}
        borderColor="base-subdued"
        borderRadius={2}
        padding={8}
      >
        <Flex width="360" direction="column" gap={6}>
          <Heading as="h1">Continue to Grammarly</Heading>
          <Flex gap={5} direction="column">
            <TextField label="Email" />
            <Button width="full" text="Continue with email" />
          </Flex>
          <Flex gap={2}>
            <Text as="p">New to Grammarly?</Text>
            <Link weight="bold">Sign up for free</Link>
          </Flex>
        </Flex>
        <Flex gap={3} direction="column">
          <Flex gap={1} direction="column">
            <Text as="code" variant="text-small">
              {\`<ScreenReaderOnly>Grammarly’s</ScreenReaderOnly>\`}
            </Text>
            <Link href="https://www.grammarly.com/terms" variant="secondary">
              Terms
            </Link>
          </Flex>
          <Flex gap={1} direction="column">
            <Text as="code" variant="text-small">
              {\`<ScreenReaderOnly>Grammarly’s</ScreenReaderOnly>\`}
            </Text>
            <Link href="https://www.grammarly.com/privacy-policy" variant="secondary">Privacy Policy</Link>
          </Flex>
          <Link href="https://oag.ca.gov/privacy/ccpa" variant="secondary">CA Privacy Notice</Link>
        </Flex>
        <Text as="p" variant="text-xsmall">
          This site is protected by reCAPTCHA and the Google{" "}
          <Link href="https://policies.google.com/privacy" variant="secondary">Privacy Policy</Link> and{" "}
          <Link href="https://policies.google.com/terms" variant="secondary">Terms of Service</Link> apply.{" "}
        </Text>
      </Flex>

```

Links to 3rd-party content often appear on grammarly.com, for example, Google’s privacy policy. Since it’s easy to confuse the identical link text for both Grammarly and Google, additional Screen Reader–Only information needs to be announced to help identify which company’s policy is linked.

### Reduce punctuation use

Only use end punctuation when multiple full sentences or fragments are contained within a block of Screen Reader–Only text. **Do not use end punctuation for a fragment or sentence by itself.**

Screen readers interpret punctuation and symbols but are not consistent or reliable in how they announce them. A screen reader user can also choose to have punctuation verbalized, but results vary.

Usually, periods, commas, semi-colons, colons, parentheses, brackets, dashes, and some other marks create a brief pause while reading. This can be undesirable if it slows down a user or gives the impression of finality before starting up again.

```tsx

<Flex gap={2} direction="column">
  <Flex gap={0} direction="row">
    <Text as="p">Mon</Text>
    <Text 
    as="code" 
    variant="text-small"
    >
      {\`<ScreenReaderOnly>day</ScreenReaderOnly>\`}
    </Text>
  </Flex>
  <Flex gap={0} direction="row">
    <Text as="p">Tues</Text>
    <Text 
    as="code" 
    variant="text-small"
    >
      {\`<ScreenReaderOnly>day</ScreenReaderOnly>\`}
    </Text>
  </Flex>
  <Flex gap={0} direction="row">
    <Text 
    as="code" 
    variant="text-small"
    >
      {\`<span aria-hidden="true">\`}
    </Text>
    <Text as="p">Weds</Text>
    <Text 
    as="code" 
    variant="text-small"
    >
      {\`</span> <ScreenReaderOnly>Wednesday</ScreenReaderOnly>\`}
    </Text>
  </Flex>
  <Flex gap={0} direction="row">
    <Text as="p">Thurs</Text>
    <Text 
    as="code" 
    variant="text-small"
    >
      {\`<ScreenReaderOnly>day</ScreenReaderOnly>\`}
    </Text>
  </Flex>
</Flex>

```

A period at the end of “Mon.” would create an undesirable pause between “Mon” and “day” when read aloud by a screen reader. Similarly, periods or other punctuation at the end of “day” would create unwanted pauses between each list item.

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the ScreenReaderOnly component in JS.

```tsx
import { ScreenReaderOnly } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.Node` | - | The content that will be visually hidden and only available to assistive technologies. |


## Related components

- [Link](/components/link)
- [Live Announcer](/utilities/live-announcer)
