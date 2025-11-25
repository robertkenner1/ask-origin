# Tabs

Tabs navigate among panels of related content.

Tabs allow a user to switch between various security settings for their account.

## Usage

**Use when:**

* It’s preferable to separate related content to save vertical space.
* The contents of each Tab are related but can be logically spread out in separate views.
* A user can complete any task without needing to navigate to another Tab.

**Do not use when:**

* The content requires only one Tab. Instead, use a [Heading](/components/heading/).
* The pieces of content are unrelated. Instead, organize content on a full page with [Headings](/components/heading/).
* The Tabs would be the primary navigation for a website. Instead, use a [Menu](/components/menu/).
* A user would need to switch between Tabs to perform a single task. Instead, use a complete [Form](/components/form/) on a single page.
* A user needs to compare pieces of content side by side to decide. Instead, use a table. [Learn about tables at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).
* Scrolling needs to be reduced or avoided to accommodate information being displayed in a small space. Instead, use an accordion. [Learn about accordions at W3C](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### Tabs within Tabs

Avoid nested Tabs. Tabs used within a Tab panel can make it challenging to determine which Tab controls which piece of content.

| Do ✅ | Don't ❌ |
|-------|----------|
| Place content on separate pages so that only one Tabs component controls the area within a Tab panel. ![](/img/components/tabs-in-tabs_do.svg) | Do not allow nested Tabs within a Tab panel. ![](/img/components/tabs-in-tabs_dont.svg) |

### Tab quantity and alternatives

Apply these minimum and maximum limits to Tabs:

* There must be at least two Tabs in a Tab list.
* Using 5 or fewer Tabs is recommended, but there is no maximum. [Learn how overflow is handled](#overflow).

If you find that your content requires an abundance of Tabs, ask yourself whether this is the best solution for your needs. Origin does not offer a table component, but you can use react-aria components styled with tokens. If you have questions about implementing a react-aria component, reach out in #ask-origin-design-system on Slack.

| Alternative | Type of content                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tables      | Tables are an effective way to compare related information organized in columns and rows. [Learn about tables at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).                            |
| Accordion   | Accordions help reduce or eliminate scrolling and can be useful when you need to display a few brief pieces of information in limited space.  [Learn about accordions at W3C](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). |
| On page     | In cases where the information is related and shouldn’t be obscured inside Tabs, the best choice may be to display all of the content on the page and allow scrolling.                                             |

### Anatomy

!\[Anatomy diagram of Tabs]\(/img/components/tabs\_anatomy.svg)

Tab listSelected TabUnselected TabBottom border (optional) Tab panel

## Examples

### Default

By default, Tabs appear at `size="medium"` and include a bottom border that stretches the entire width of the Tab panel. There must be at least two items in the Tab list.

The first item in the Tab list is preselected, so it should contain the most critical or frequently accessed content. Order Tabs by priority so a user experiences a logical progression from first to last.

```tsx

  <Tabs>
    <Tabs.TabList accessibilityLabel="Settings">
      <Tabs.Tab id="profile" label="Profile" />
      <Tabs.Tab id="password" label="Password" />
      <Tabs.Tab id="email" label="Email preferences" />
    </Tabs.TabList>
    <Tabs.Panel id="profile">
        <Text as="span" variant="heading-xsmall">
          Profile panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="password">
        <Text as="span" variant="heading-xsmall">
          Password panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="email">
        <Text as="span" variant="heading-xsmall">
          Email panel content
        </Text>
    </Tabs.Panel>
  </Tabs>

```

### Size

Tabs are available in four sizes: `small`, `medium`, `large`, and `xlarge`.

```tsx

function Example() {
  const sizes = ["small", "medium", "large", "xlarge"];
  const tabNames = ["Profile", "Password", "Email"];

  return (
    <Flex gap={20} direction="column" flex="1 1 auto">
    {sizes.map(size => 
      <Flex key={size} gap={4} direction="row" align="start">
        <Box width={100}>
          <Text as="p">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
        </Box>
        <Tabs size={size}>
          <Tabs.TabList accessibilityLabel="Account settings">
            {tabNames.map(tabName => (
              <Tabs.Tab
                id={tabName}
                label={tabName}
                key={tabName}
              />
            ))}
          </Tabs.TabList>
          {tabNames.map(tabName => (
            <Tabs.Panel id={tabName} key={tabName}>
              <Text as="p">Tab panel content</Text>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Flex>
    )}
  </Flex>
  )
}

```

### Width

By default, each Tab has a dynamic width based on the length of the label.

Alternatively, use `width="full"` to stretch the Tabs across the entire container. Labels are centered in full-width Tabs.

```tsx

<Flex gap={20} direction="column" width="100%">
  <Tabs>
    <Tabs.TabList accessibilityLabel="Settings">
      <Tabs.Tab id="profile" label="Profile" />
      <Tabs.Tab id="password" label="Password" />
      <Tabs.Tab id="email" label="Email preferences" />
    </Tabs.TabList>
    <Tabs.Panel id="profile">
        <Text as="span" variant="heading-xsmall">
          Profile panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="password">
        <Text as="span" variant="heading-xsmall">
          Password panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="email">
        <Text as="span" variant="heading-xsmall">
          Email panel content
        </Text>
    </Tabs.Panel>
  </Tabs>
  <Tabs>
    <Tabs.TabList accessibilityLabel="Settings" width="full">
      <Tabs.Tab id="profile" label="Profile" />
      <Tabs.Tab id="password" label="Password" />
      <Tabs.Tab id="email" label="Email preferences" />
    </Tabs.TabList>
    <Tabs.Panel id="profile">
        <Text as="span" variant="heading-xsmall">
          Profile panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="password">
        <Text as="span" variant="heading-xsmall">
          Password panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="email">
        <Text as="span" variant="heading-xsmall">
          Email panel content
        </Text>
    </Tabs.Panel>
  </Tabs>
</Flex>

```

### No bottom border

When `bottomBorder="none"`, the Tab list appears without the subdued horizontal line below it.

```tsx

  <Tabs>
    <Tabs.TabList accessibilityLabel="Settings" bottomBorder="none">
      <Tabs.Tab id="profile" label="Profile" />
      <Tabs.Tab id="password" label="Password" />
      <Tabs.Tab id="email" label="Email preferences" />
    </Tabs.TabList>
    <Tabs.Panel id="profile">
        <Text as="span" variant="heading-xsmall">
          Profile panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="password">
        <Text as="span" variant="heading-xsmall">
          Password panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="email">
        <Text as="span" variant="heading-xsmall">
          Email panel content
        </Text>
    </Tabs.Panel>
  </Tabs>

```

### Default selected Tab

Overriding the first Tab as the default selection is not recommended. If there is no alternative in your scenario, use `defaultSelectedTab` to set a different Tab as the preselected default.

In the code example below, the second Tab, **Password**, is set as the default. However, it should usually be the first tab, **Profile**.

```tsx

  <Tabs defaultSelectedTab="password">
    <Tabs.TabList accessibilityLabel="Settings">
      <Tabs.Tab id="profile" label="Profile" />
      <Tabs.Tab id="password" label="Password" />
      <Tabs.Tab id="email" label="Email preferences" />
    </Tabs.TabList>
    <Tabs.Panel id="profile">
        <Text as="span" variant="heading-xsmall">
          Profile panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="password">
        <Text as="span" variant="heading-xsmall">
          Password panel content
        </Text>
    </Tabs.Panel>
    <Tabs.Panel id="email">
        <Text as="span" variant="heading-xsmall">
          Email panel content
        </Text>
    </Tabs.Panel>
  </Tabs>

```

### Custom content

Tabs can contain content beyond simple strings, such as icons, text with styling, and other customizations. Set size="auto" if you are customizing the height of the Tab List.

```tsx

<Tabs size="auto">
    <Tabs.TabList accessibilityLabel="Settings">
      <Tabs.Tab id="suggestions">
        <Flex
          direction="column"
          gap={2}
          align="start"
          justify="center"
          width={150}
          padding={4}
          style={{ textWrap: "wrap" }}
        >
          <Icon icon={LogoLogomarkColorDefaultIcon} accessibilityLabel="" />
          <Text as="span" variant="text-small" align="start">
            Review Suggestions
          </Text>
        </Flex>
      </Tabs.Tab>
      <Tabs.Tab id="ai">
        <Flex
          direction="column"
          gap={2}
          align="start"
          justify="center"
          width={150}
          padding={4}
          style={{ textWrap: "wrap" }}
        >
          <Icon icon={GGOLogoGoMarkDefaultIcon} accessibilityLabel="" />
          <Text as="span" variant="text-small" align="start">
            Write with Generative AI
          </Text>
        </Flex>
      </Tabs.Tab>
      <Tabs.Tab id="plagiarism">
        <Flex
          direction="column"
          gap={2}
          align="start"
          justify="center"
          width={150}
          padding={4}
          style={{ textWrap: "wrap" }}
        >
          <Icon icon={GGOActionRewriteCategoryIcon} accessibilityLabel="" />
          <Text as="span" variant="text-small" align="start">
            Check for AI Text & Plagiarism
          </Text>
        </Flex>
      </Tabs.Tab>
    </Tabs.TabList>
    <Tabs.Panel id="suggestions">
      <Flex direction="column" gap={3}>
        <Text as="span" variant="heading-xsmall">
          Suggestions panel content
        </Text>
        <Button variant="primary" text="Save" onClick={() => {}} />
      </Flex>
    </Tabs.Panel>
    <Tabs.Panel id="ai">
      <Flex direction="column" gap={3}>
        <Text as="span" variant="heading-xsmall">
          Write with AI Content
        </Text>
        <Button variant="primary" text="Save" onClick={() => {}} />
      </Flex>
    </Tabs.Panel>
    <Tabs.Panel id="plagiarism">
      <Flex direction="column" gap={3}>
        <Text as="span" variant="heading-xsmall">
          Plagiarism panel content
        </Text>
        <Button variant="primary" text="Save" onClick={() => {}} />
      </Flex>
    </Tabs.Panel>
  </Tabs>

```

## Behavior

### Overflow

The Tabs component has a built-in overflow mechanism for when the list of Tabs is longer than its container. For example, when labels are lengthy or when there are a large number of tabs.

In this case, Tabs will automatically add:

* Icon Buttons to move the view left or right
* A scrollbar to drag

```tsx

function Example() {
  const tabNames = ["Security overview", "Your devices", "Recent Activity", "Two-step verification", "Privacy"];

  return (
    <Flex align="center" justify="center">
      <Flex gap={20} direction="column" width="75%">
        <Tabs >
          <Tabs.TabList accessibilityLabel="Account settings">
            {tabNames.map(tabName => (
              <Tabs.Tab
                id={tabName}
                label={tabName}
                key={tabName}
              />
            ))}
          </Tabs.TabList>
          {tabNames.map(tabName => (
            <Tabs.Panel id={tabName} key={tabName}>
              <Text as="p">Tab panel content</Text>
            </Tabs.Panel>
          ))}
        </Tabs>
    </Flex>
  </Flex>
  )
}

```

### Placement and alignment

Tabs have two placements based on the area that they control.

In both cases, the Tab list is:

* Aligned with the farthest left edge of its Tab panel
* Always above the Tab panel

#### Full-page Tabs

Tabs usually control all or most content on a page.

Place full-page Tabs directly under a page’s title or `h1` heading. This is how Tabs are commonly used in Settings.

!\[Diagram showing Tabs below a Heading. The Tabs control all of the content on the Page.]\(/img/components/tabs-full-page.svg)

#### Partial-page Tabs

Tabs can also control just part of a page.

In this case, place the Tabs component where it makes logical sense to display information. The Tab list always remains above the Tab panel. Be conscious to avoid [Tabs within Tabs](#tabs-within-tabs) in partial-page use.

!\[Diagram showing Tabs mid-way down a page. There is some content above the Tabs, but they only control what’s below the Tab List in the Tab Panel.]\(/img/components/tabs-partial-page.svg)

### Tab panel width

There is no minimum or maximum width for the content of a Tab panel.

We recommend a width of 45–85 characters as a baseline. This corresponds to the most commonly recommended range for web-content line length. Aspire to make the information in the Tab panel as scannable and easy to read as possible.

Avoid situations where UI elements seem distant from each other.

## Accessibility

### Keyboard navigation

| Key                                  | Expected result                                                                                                                                                                                                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tab                       | When focus moves into the Tab list, puts focus on the active Tab element.`<br />``<br />`When the Tab list has focus, moves focus to the next element in the page’s Tab sequence. This is usually the Tab panel. Otherwise, it should be the first element containing meaningful content inside the Tab panel. |
| Enter or Space | Selects the focused Tab if it’s not already selected.                                                                                                                                                                                                                                                                       |
| Right arrow               | Moves focus to the next Tab on the right.`<br />``<br />`If the focus is on the right-most Tab, moves focus to the Tab on the far left.                                                                                                                                                                          |
| left arrow                | Moves focus to the next Tab on the left.`<br />``<br />`If the focus is on the left-most Tab, moves focus to the Tab on the far right.                                                                                                                                                                           |

## Writing

| Do ✅ | Don't ❌ |
|-------|----------|
| Keep labels short and meaningful. Aim for one to two words. ![The first Tab says 'Language' and the second says 'Writing preferences'.](/img/components/Tabs_writing_Do_1.svg) | Do not abbreviate or truncate Tab labels. ![The first Tab says 'Lang.' which is an abbreviation for Language. The second Tab is truncated and says 'Writing pref …'.](/img/components/Tabs_writing_DONT_1.svg) |
| Use nouns or noun phrases for labels. ![The first Tab says 'Members' and the second says 'Groups'.](/img/components/Tabs_writing_Do_2.svg) | Do not use verb phrases for labels. ![The first Tab says 'Manage members' and the second says 'Manage groups'.](/img/components/Tabs_writing_DONT_2.svg) |
| Use a unique label for each Tab to distinguish them at a glance. Labels should differentiate the sections beneath them. ![The first Tab says 'Style' and the second says 'Tone'.](/img/components/Tabs_writing_Do_3.svg) | Do not use repetitive labels that are hard to scan. ![The first Tab says 'Organization style' and the second says 'Organization tone', which makes it hard to parse at a glance.](/img/components/Tabs_writing_DONT_3.svg) |
| Order Tabs by priority from left to right. The first Tab should contain the most critical or frequently accessed content. ![The first Tab says 'Profile' and the second says 'Password'.](/img/components/Tabs_writing_Do_4.svg) | Do not number Tabs. ![The Tabs are numbered 1. Profile and 2. Password, which is not necessary in the context of a UI Tabs component.](/img/components/Tabs_writing_DONT_4.svg) |
| Use sentence case. ![The Tab says 'All members' where only the initial 'a' is capitalized and the second says 'Requests' where only the 'r' is capitalized.](/img/components/Tabs_writing_Do_5.svg) | Do not use Title Case or ALL CAPS. ![The first Tab says 'ALL MEMBERS' and the second says 'REQUESTS' but both are written in all capitalized letters which can seem like shouting.](/img/components/Tabs_writing_DONT_5.svg) |
| Use internal punctuation when necessary. ![The first Tab says 'Two-step verification' where 'two-step' is hyphenated. A second tab says 'Privacy'.](/img/components/Tabs_writing_Do_6.svg) | Do not use end punctuation. ![The first Tab says 'Two-step verification.' with an out-of-place period at the end. A second Tab says 'Privacy?' with a question mark, which is not appropriate in this context](/img/components/Tabs_writing_DONT_6.svg) |

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Tabs component in JS.

```tsx
import { Tabs } from "@superhuman/origin";
```

## API

### Tabs props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Passes the Tab list and Tab panels. |
| `defaultSelectedTab` | `string` | - | The first Tab is activated by default unless using this property to override the value. This corresponds with the Tab \`id\` prop.<br></br>Overriding this behavior is not recommended. |
| `onChange` | `(id: string) => void` | - | Event handler that is called when a Tab is selected. |


### Tabs.TabList props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accessibilityLabel` | `string` | - | Used to describe the theme of the entire set of Tabs. |
| `children` | `React.ReactNode` | - | Used for the Tab subcomponents. Must include at least two. |


### Tabs.Tab props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | - | A unique ID that must match to the corresponding \`TabPanel\`. |
| `label` | `string` | - | Used for the text displayed in an individual Tab. |


### Tabs.Panel props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Used for the main content of the \`TabPanel\`. |
| `id` | `string` | - | A unique ID that must match to the corresponding \`Tab\`. |


## Related components

- [Form](/components/form)
- [Heading](/components/heading)
- [Menu](/components/menu)
