# Live Announcer

The Live Announcer utility component provides real-time updates to users who rely on assistive technologies such as screen readers.

:::caution Beta
Live Announcer is still in Beta and is being tested within GDS.
:::

*Live Announcer is used to convey how many search results are available. This allows a person using a screen reader to understand changes that would otherwise be available only visually.*

## Usage

In situations when its use is deemed necessary, Live Announcer is a valuable tool because it improves the following elements:

* **User experience:** It provides a seamless experience for users with disabilities, informing them about critical real-time updates.
* **Inclusivity:** Live Announcer ensures that applications are more inclusive by catering to the needs of all users, including those with visual impairments.
* **Compliance:** Helps in meeting accessibility standards and regulations, such as the Web Content Accessibility Guidelines (WCAG).

Live Announcer should be used based on individual circumstances and only when a new element that appears will not receive focus, will not be interacted with, or would be out of context.

**Do not use when:**

* Focus moves to the new element as it appears.
* A user will interact with an element after it appears.
* A user will be in the context of an element when it appears.

## Examples

### Search results

The Search Field component does not have a built-in way to announce search results, so the implementation team must use the Live Announcer to make the experience accessible.

When the search results load, the Live Announcer is used to inform a user of the number of corresponding results. The text should clearly describe what has changed. For example, “`{count}` results match your search.”

```tsx

function Example() {
const [inputValue, setInputValue] = React.useState("");
  return (
    <Flex direction="column" gap={4}>
      <Flex direction="column" gap={2}>
          <Text as="p">Try searching for "mice"</Text>
          <SearchField 
            onClear={() => setInputValue("")}
            label="Search library" 
            labelDisplay="visible"
            onSubmit={ (value) => {
              setInputValue(value);
              liveAnnouncer.announce("3 books found matching mice");
            }}
          />
          {inputValue === "mice" && <Text as="p" variant="text-xsmall" color="base-subdued"> 3 results found</Text>}
      </Flex>
      {inputValue === "mice" && <Text as="p">Screen reader says: "3 books found matching mice"</Text>}
    </Flex>
  )
}

```

### Loaders

When a loading state transitions to active content, the change needs to be communicated. Our Loader components—[Branded Loader](/components/branded-loader), [Circular Loader](/components/circular-loader), and [Skeleton Loader](/components/branded-loader)—already have the Live Announcer built in so that these announcements are handled in an accessible way.

```tsx

function Example() {
  const [showLoader, setShowLoader] = React.useState(false);

  return (
    <Flex
      padding={3}
      gap={3}
      align="center"
      bgColor="background-base-default"
      direction="column"
      
    >
    <Flex direction="row" gap={3}>
      <Button onClick={() => setShowLoader(!showLoader)}>
        <Text as="span" weight="bold">{showLoader ? "Hide" : "Show"} Loader</Text>
      </Button>
      <Button variant="tertiary" onClick={() => liveAnnouncer.clear("polite")}><Text as="span" weight="normal">Clear Announcer</Text></Button>
      {showLoader && (
        <Loader accessibilityLabel="Loading analytics page">
          <Loader.Circular size="medium" />
        </Loader>
      )}
      </Flex>
      {showLoader && <Text as="p">Screen readers says: "Loading analytics page"</Text>}
    </Flex>
  )
}

```

### Notifications

[Toast](/components/toast/) has Live Announcer built in to the component because users need to know when a notification has been made available. When no actions are offered and the message is not critical, a Toast will be automatically announced with `assertiveness="polite"`.

```tsx

function Example() {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <Flex
      padding={3}
      gap={6}
      align="center"
      bgColor="background-base-default"
      direction="column"
    >
      <Flex direction="row" gap={3}>
        <Button onClick={() => setShowToast(!showToast)} text={showToast ? "Hide toast" : "Create task"}/>
        <Button variant="tertiary" onClick={() => liveAnnouncer.clear("polite")}><Text as="span" weight="normal">Clear Announcer</Text></Button>
        {showToast && (
          <Toast variant="success" text="Task created."/>
        )}
      </Flex>
      {showToast && <Text as="p">Screen readers says: "Success: Task created"</Text>}
    </Flex>
  )
}

```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the component in JS.

```tsx
import { LiveAnnouncer } from "@superhuman/origin";
```

## API

### announce()

Announces the provided message to users who rely on assistive technologies such as screen readers.

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | `string` | Yes | - | The message content to announce. |
| `assertiveness` | `'assertive' \| 'polite'` | No | `'polite'` | Controls the urgency of the announcement (whether or not to interrupt the user). |
| `timeout` | `number` | No | `7000` | How quickly to remove the message from the DOM. |

### clear()

Stops all queued announcements of the specified assertiveness.

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `assertiveness` | `'assertive' \| 'polite'` | Yes | - | The level of announcements to stop. |

### destroy()

Removes the announcer from the DOM.

## Related components

- [Loaders](/components/loaders)
- [Search Field](/components/search-field)
- [Toast](/components/toast)
