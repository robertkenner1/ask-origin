# Accordion

An Accordion is a container that can be expanded to reveal additional content or collapsed to hide
the content.

*An Accordion is used in the Consent Management introduction screen to show summaries about how
Superhuman handles user data.*

## Usage

**Use when:**

* Organizing content into collapsible sections. For example, FAQs or other groups of information that aren't essential and may be hidden.
* Grouping related information, such as product specifications or step-by-step instructions, into collapsible sections for better readability.

**Do not use when:**

* Providing critical information that must remain visible.
* The content is brief and doesn't require organization. In these cases, an Accordion may add unnecessary complexity.

## Anatomy

!\[Anatomy diagram of a Accordion]\(/img/components/accordion\_anatomy.svg)

Header icon (optional)TitleArrow iconContent

## Examples​

### Default

* All Accordions should be in a collapsed state by default.
* All Accordions are expandable and collapsible.
* The included arrow points down when the Accordion container is closed, and it points up when the container is open.

```tsx

  <Accordion>
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
  </Accordion>
  
```

### Size

Accordions are available in sizes `small`, `medium`, and `large`. Size `medium` is the default.

```tsx

<Flex direction="column" gap={4} width="100%">
    <Accordion size="small">
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p" variant="text-xsmall">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
  </Accordion>

  <Accordion size="medium">
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p" variant="text-small">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete.
          </Text>
      </Accordion.Item>
  </Accordion>

  <Accordion size="large">
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete.
          </Text>
      </Accordion.Item>
  </Accordion>
  </Flex>
  
```

### Background color

Accordions are available with background color options `base-default` (default) or `base-subdued`.

```tsx

<Flex direction="row" gap={4} width="100%" justify="start" align="start">
  <Accordion>
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  
  <Accordion bgColor="base-subdued">
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
</Flex>

```

### With icons

Use the `iconStart` prop to add an icon from the Iconography library at the start of an item’s label.
It is recommended to use icons on either all or none of the items.

```tsx

  <Flex width="50%">
  <Accordion>
      <Accordion.Item iconStart={ConsentSafeIcon} title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item iconStart={ConsentTransparentIcon} title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  </Flex>

```

### Width

By default, each Accordion has a dynamic width based on the width of the parent container.

```tsx

<Flex width={400}>
  <Accordion>
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  </Flex>

```

### Arrow icon position

By default, the arrow icon appears at the right of the container.
Alternatively, use the Accordion item property `arrowPosition=inline` to position the arrow inline with the end of the text. This is ideal for cases where a single accordion is used.

```tsx

<Flex direction="row" gap={4} width="100%" justify="start" align="start">
  <Accordion>
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  <Accordion>
      <Accordion.Item title="We’ll keep your data safe" arrowPosition="inline">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data" arrowPosition="inline">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
</Flex>

```

### Separators

By default, each Accordion Item in a list, except for the last one, has a bottom separator. Borders may be removed with `hasSeparators={false}`.

```tsx

  <Flex width={400}>
  <Accordion hasSeparators={false}>
      <Accordion.Item title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  </Flex>

```

### Open by default

An Accordion item can be open by default using the `isExpanded` prop.

```tsx

  <Flex width={400}>
  <Accordion>
      <Accordion.Item isExpanded title="We’ll keep your data safe">
          <Text as="p">
          We’ll encrypt and securely store your data with our cloud providers. If you turn a feature off, we’ll stop collecting and storing the data needed for that feature. We’ll also delete existing data stored for that feature. This process can take up to 30 days to complete. 
          </Text>
      </Accordion.Item>
      <Accordion.Item title="We're transparent about data">
          <Text as="p">
          When you use Grammarly, we’ll collect and store some data, such as:
              <ul>
                  <li>The text you write and check using Grammarly</li>
                  <li>Your commonly used words and phrases</li>
                  <li>Your email address</li>
                  <li>Applications and websites where you use Grammarly</li>
              </ul>
              Information about what data is needed for each tailored assistance feature can be found by clicking the link under each feature in your account settings. You can see the data associated with your account by requesting a personal data report. 
          </Text>
      </Accordion.Item>
  </Accordion>
  </Flex>

```

## Behavior

### Vertical scroll

If an Accordion expands to be taller than the available height:

* On a regular page, the page scrolls to accommodate the content including expanded Accordion containers.
* In a smaller container like the Mac/Win Onboarding window, the parent container would scroll.

*Note: Never add a scroll within an Accordion itself.*

## Accessibility

### Keyboard interaction​

| Key                                  | Expected result                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab                       | When focus moves into the Accordion list, it focuses on the active Accordion element. `<br />``<br />`In an Accordion list, focus moves sequentially through the Accordions from top to bottom. |
| Space or Enter | Expands or collapses the focused Accordion.                                                                                                                                                 |

## Writing

* There is no minimum or maximum width for the content of a Accordion panel.
* We recommend a width of 45–85 characters as a baseline. This corresponds to the most commonly recommended range for web-content line length. Aspire to make the information in the Accordion panel as scannable and easy to read as possible.
* Avoid situations where UI elements seem distant from each other.
* If an H1 exists on the page, use another heading size like H2 or H3 in the Accordion panel. [Learn more about using headers to create information hierarchy](/components/heading#information-hierarchy).

| Do ✅ | Don't ❌ |
|-------|----------|
| Use labels that clearly describe the content in each Accordion. ![The first Accordion says 'Take a tour,' the second says 'Try writing with Grammarly,' and the third says 'Explore other products.'](/img/components/Accordion_writing_DO_1.svg) | Do not use labels that are so short that they cause confusion about what's in each Accordion. ![The first Accordion says 'Tour,' the second says 'Try it,' and the third says 'Explore.'](/img/components/Accordion_writing_DONT_1.svg) |
| Use a unique label for each Accordion to distinguish them at a glance. Labels should differentiate the sections beneath them. ![The first Accordion says, 'We're transparent about data,' the second says 'We'll keep your data safe,' and the third says 'You're always in control.'](/img/components/Accordion_writing_DO_2.svg) | Do not use repetitive labels that are hard to scan. ![The first Accordion says 'Data transparency,' the second says 'Data safety, and the third says 'Data control.'](/img/components/Accordion_writing_DONT_2.svg) |
| Use sentence case. ![The first Accordion says 'Who can use Grammarly's Authorship feature,' the second says 'What platform does Authorship work in?,' and the third says 'What does it mean that Authorship is in beta?'](/img/components/Accordion_writing_DO_3.svg) | Do not use Title Case or ALL CAPS. ![The first Accordion says 'Try Writing Now' and the second says 'Explore All Products' using Title Case. Another Accordion list shows the same labels in all caps.](/img/components/Accordion_writing_DONT_3.svg) |
| Order Accordions by priority from top to bottom. The first Accordion should contain the most frequently accessed content. ![The first Accordion says 'Get started with Grammarly,' the second says 'Learn the basics,' and the third says 'Explore other products.'](/img/components/Accordion_writing_DO_4.svg) | Do not number Accordions. ![The first Accordion says '1. Getting started with Grammarly,' the second says '2. Learn the basics,' and the third says '3. Explore other products.'](/img/components/Accordion_writing_DONT_4.svg) |

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Accordion components in JS.

```tsx
import { Accordion } from "@superhuman/origin";
```

## API

### Accordion props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Used for the contents of the Accordion. |
| `accessibilityLabelledBy` | `string` | - | Used to add an aria-labelledby to the container that matches the ID of a nearby heading that describes this Accordion's context. |
| `hasSeparators` | `boolean` | true | Determines whether a border appears between Accordion Items. |
| `onExpandedChange` | `(expandedIndices: number[]) => void` | - | Callback function that is called when the expanded state changes. \`expandedIndices\` is an array of numbers representing the indices of the expanded items. |


### Accordion.Item props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Used for the contents of the Accordion Item details. |
| `title` | `string` | - | Text that appears for the button that opens the Accordion item. |
| `iconStart` | `IconProps` | - | Icon to display inside on the left of the title. |
| `isExpanded` | `boolean` | false | Determines whether the Accordion item is expanded by default. |
