# Link

A Link navigates to another page or among sections of a page.

An inline Link navigates a user to a help center article about color-blind mode, while a
standalone Link takes a user to their account settings to manage suggestions.

## Usage

A Link can appear on its own, within a sentence or paragraph, or immediately following content.

Use when:

* Navigating to another page within the app or among sections within a page
* Navigating to an external website outside of the app
* Linking to emails and phone numbers

Do not use when:

* Allowing a user to perform an action. Instead, use a [Button](/components/button/).
* Allowing a user to alter how content on a page is displayed. Instead, use a [Button](/components/button/) or [Switch](/components/switch/).

### Is it a Link or a Button?

Links are used to navigate among pages, within sections of the same page, or to a location outside the app. They are also used for phone numbers and email addresses.

A [Button](/components/button/) allows a user to do something along their current path—it doesn't take them out of it like a Link does. Buttons perform actions like **Create**, **Save**, or **Delete**.

## Examples

### Variants

Link variants set only the color of the text in a Link. Style the underline, weight, and font size according to your use case. [View recommended styles](#styling) based on placement.

#### Primary

By default, our primary brand color is applied to Links.

```tsx

  <Link href="https://support.grammarly.com/">Visit the help center</Link>
  
```

#### Secondary

Use `variant="secondary"` in rare cases when a Link requires less visual prominence.

```tsx

    <Text as="p" color="base-subdued">
      This site is protected by reCAPTCHA. {" "}
      <Link href="https://policies.google.com/privacy" variant="secondary">
        Google’s Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="https://policies.google.com/terms" variant="secondary">
        Google’s Terms of Service
      </Link>{" "}
      apply.
    </Text>
  
```

#### Inherit

Use `variant="inherit"` to make the font color match the surrounding text.

```tsx

    <Flex bgColor="green-90" padding={4}>
      <Text as="span" color="base-inverse">
        We partner with the Cloud Security Alliance (CSA).{" "}
        <span className='no-wrap'>
          <Link
            href="https://cloudsecurityalliance.org"
            target="_blank"
            variant="inherit"
            display="inline"
          >
            <span class='normal-wrap'>Learn more about the Cloud Security </span>Alliance
            <Icon icon={InterfaceExternalLinkIcon} accessibilityLabel="" variant="inherit" className="inline-icon"/>
          </Link>
          .
        </span>
      </Text>
    </Flex>
  
```

### Underline

By default, a Link is displayed with an underline in all states to provide a clear visual cue. However, you can set the underline to appear only when a user hovers over the Link with `underline="hover"`.

```tsx

<Link
      href="https://account.grammarly.com/security/devices"
      underline="hover"
      variant="secondary"
      display="block"
    >
      <Flex gap={2} align="center">
        <Text as="span">See all device sessions</Text>
        <Icon icon={InterfaceRightIcon} accessibilityLabel="" variant="inherit" />
      </Flex>
    </Link>
  
```

### Weight and size

Add emphasis to a Link with `weight="bold"`.

To change the font size of a Link, use [Text](/components/text/) either inside or outside the Link. Set the Text component’s `variant` to your desired font size.

```tsx

    <Flex direction="column">
      <Heading as="h1" variant="heading-medium" marginBottom={5}>
        Communication
      </Heading>
      <Heading as="h2" variant="heading-small" marginBottom={3}>
        Email
      </Heading>

      <Flex gap={5}>
        <Text as="span" variant="text-small">
          Choose the types of email you want to receive.{" "}
        </Text>
        <Text as="span" variant="text-small">
          <Link
            href=""
            weight="bold"
            accessibilityLabel="Update email preferences"
          >
            Update preferences
          </Link>
        </Text>
      </Flex>
    </Flex>
  
```

### Icon

A Link will commonly include an [Icon](/components/icon/) alongside text. Both the Icon and any included text should activate the Link. Use [Flex](/components/flex/) to space apart the Icon and text as part of a Link.

Use an Icon on either the left or right side—but not both. An Icon should inherit the color of the Link’s text. [Learn about the icon for a new tab or window](#communicating-a-new-tab-or-window).

```tsx

<Link href="mailto:support@grammarly.com" display="inline-block">
      <Flex gap={2} align="center">
        <Text as="span">Contact Support</Text>
        <Icon icon={InterfaceInboxIcon} accessibilityLabel="" variant="inherit" />
      </Flex>
    </Link>
  
```

## Behavior

### Styling

Use different styles for a Link based on its placement.

#### Inline Links

An inline Link appears within a sentence or as the last sentence of a paragraph. An underline should always be present, which is the component’s default.

```tsx

      <Text as="p">
        Use different underline styles to {" "}
        <Link href="https://support.grammarly.com/hc/en-us/articles/360003474732-Grammarly-Editor-user-guide">
          indicate suggestion types
        </Link>{" "}
        (Correctness, Clarity, Engagement, and Delivery)
      </Text>
  
```

#### Standalone Links

A standalone Link appears on its own instead of inline with other text. Display the underline only when a user hovers over the Link.

Users can easily miss standalone Links. To improve scannability and usability, use visual cues like an Icon or bold text to make sure a Link commands attention. These visual cues are essential when a Link is placed between or adjacent to content.

In other rare cases, such as inside a table cell, you might apply this styling to Links to avoid obscuring the surrounding UI.

```tsx

    <Flex gap={4} direction="column">
      <Text as="p">
        The Cloud Security Alliance (CSA) is a non-profit organization that is dedicated to
        promoting best practices for security in cloud computing.
      </Text>
      <Link
        href="https://cloudsecurityalliance.org"
        display="block"
        target="_blank"
        underline="hover"
        weight="bold"
      >
        <Flex gap={2} align="center">
          <Text as="span">Learn about Cloud Security Alliance</Text>
          <Icon icon={InterfaceExternalLinkIcon} accessibilityLabel="" variant="brand" />
        </Flex>
      </Link>
      <Text as="p">
        The CSA was founded in 2008 and has since become a leading authority on cloud security,
        providing education, research, and guidance to help organizations secure their cloud
        environments.
      </Text>
    </Flex>
  
```

### Opening in a new tab or window

When you set `target=_blank`, a Link automatically:

* Sets `rel="noopener noreferrer"`. [Learn more at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
* Adds hidden text for screen readers that says, “Opens a new window.”
* Opens in a new tab or window based on a user’s browser settings.

Opening a Link in a new tab by default can cause accessibility issues and general user confusion. Open a new tab only when necessary, such as when:

* A user is allowed to choose this as their default preference.
* A user is navigating from within the product experience to an outside page, such as from the Grammarly Editor to a help center article.

## Accessibility

In general, a Link needs to:

* Stand out from adjacent content
* Accurately describe the destination or action

The color of a Link may vary but it must adhere to a 3:1 contrast ratio with the surrounding text unless an alternative method of identifying the Link is offered, such as underlining. Inline Links should always be underlined, regardless of color contrast, to afford a distinct visual indication for users, particularly those with low vision or who utilize a screen reader.

In rare cases, you may need to limit the length of Link text in a way that wouldn’t provide sufficient context on its own. To remain accessible, provide any context otherwise unavailable for a person using a screen reader through the `accessibilityLabel` prop. For example, a Link with the visible text **Update** in Settings may have an `accessibilityLabel='Update email preferences'` in addition to the automatically added hidden text indicating that a Link opens in a new window. This content now provides the entire context for a person using a screen reader.

### Communicating a new tab or window

If a Link always opens in a new tab or window, the Link should communicate this information to users.

Add the [External Link Icon](/tokens) to help users understand the interaction. When `target=_blank`, hidden text that says “Opens a new window” is already included, so you don’t need additional alt text for this Icon.

```tsx

    <Flex gap={4} direction="column">
      <Text as="p">
        The Cloud Security Alliance (CSA) is a non-profit organization that is dedicated to
        promoting best practices for security in cloud computing.
      </Text>
      <Link
        href="https://cloudsecurityalliance.org"
        display="block"
        target="_blank"
        underline="hover"
        weight="bold"
      >
        <Flex gap={2} align="center">
          <Text as="span">Learn about Cloud Security Alliance</Text>
          <Icon icon={InterfaceExternalLinkIcon} accessibilityLabel="" variant="brand" />
        </Flex>
      </Link>
    </Flex>
  
```

### Downloads

If a Link activates a download, the Link should communicate:

* That a file will be downloaded
* Name and type of file that will be downloaded
* Size of the file

Present all of this information in a Link’s visible text. For example, “Download Grammarly Style Guide PDF (English, 1.5 MB)”.

Incorporating an Icon into a Link can help users understand that it is a download. It can be a generic download Icon or a document-specific Icon for .pdf, .doc, and other formats. It’s not a requirement, but it enhances the experience. If the visible text already includes the action verb “download,” you don’t need additional alt text for such an Icon and should treat it as decorative.

### Keyboard interaction

| Key              | Expected result                                 |
| ---------------- | ----------------------------------------------- |
| Enter | Activates a Link and moves focus to the target |

## Writing

In as few words as possible, a Link’s text should make clear:

* Where a user will be taken, such as to a help center article
* What action will be performed, such as downloading a document

### Writing best practices for Link text

| Do | Don't |
|----|-------|
| Explain the benefit of visiting a destination before providing the Link itself. | Do not offer a Link until a user knows why it’s relevant. |
| Use up to five words in most cases. There is no strict limit to accommodate varied usage and maintain accessibility. | Do not use very long Link text without reason. If additional context is needed, include screen reader–only text. |
| Use sentence case almost always. | Do not use Title Case or ALL CAPS. |
| Use lowercase for URLs, but only use a URL when necessary to encourage recall of the destination. | Do not use end punctuation with a URL to avoid copy/paste issues. Avoid URLs in the middle of a paragraph for this reason. |
| Include a question mark in the Link text when it’s part of the page’s or article’s title. | Do not use a question mark set outside of the linked phrase. |


## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Link component in JS.

```tsx
import { Link } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | - | Destination for the Link. |
| `accessibilityLabel` | `string` | - | Descriptive text to be read by screen readers. Used if the Link text does not provide sufficient context. |
| `children` | `React.ReactNode` | - | The contents of the Link, most commonly a simple string with an optional Icon. |
| `download` | `string | boolean` | - | Indicates a file will be downloaded when the Link is activated. |
| `id` | `string` | - | The unique ID for the Link. |
| `onClick` | `React.MouseEventHandler <HTMLAnchorElement>` | - | Event handler called when a Link is activated by a user. |


## Related components

- [Button](/components/button)
- [Switch](/components/switch)
