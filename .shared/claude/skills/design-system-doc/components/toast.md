# Toast

A Toast displays immediate feedback in response to a user’s action.

When a user inserts a scheduling link using the Calendly app action, a Toast appears to confirm that the requested action has been completed. The user can then confidently return to the primary task of sending an email.

## Usage

A Toast provides feedback without interrupting a user or requiring their input. The message should be brief, usually fewer than 5 words and no more than 10.

**Do not use when:**

* A user’s interaction or consent is required for a critical or destructive action. Instead, place the content directly on the page or use a [Modal](/components/modal).
* Guiding a user through a task. Instead, use a [Popover](/components/popover).
* Displaying a short, inline description of an element’s purpose. Instead, use a [Tooltip](/components/tooltip).

### Optional actions

Because Toasts are ephemeral, it can be frustrating for a user when the included actions disappear. A user may have unintentionally dismissed a Toast or dismissed it before realizing its utility.

Consider the whole experience to make sure necessary functionality is still available, even after dismissing the Toast.

| Do ✅ | Don't ❌ |
|-------|----------|
| Include actions only for optional actions that can be initiated elsewhere in the experience. | Don't make requests of a user that require a response. Instead, put this kind of content on the page or use a Modal. |

## Anatomy

!\[Anatomy diagram of a Toast]\(/img/components/toast\_anatomy.svg)

IconText (required)Primary actionSecondary actionClose Icon Button (required)

## Examples

### Default

By default, a Toast includes text and a **Close** Icon Button. You must define what happens when the `onClose` event handler is called.

```tsx
<Toast text="Moved to trash." onClose={() => {}} />
```

### Variants

Variants change the semantic meaning, the assertiveness for screen readers, and the Icon being displayed.

#### Success

Use `variant="success"` to communicate the successful completion of an action or task.

```tsx
<Toast text="Password saved." variant="success" onClose={() => {}} />
```

#### Warning

Use `variant="warning"` to signal an issue is not critical and that a user can proceed with caution.

```tsx
<Toast text="Couldn't load analytics. Check your connection and refresh the page." variant="warning" onClose={() => {}} />
```

#### Critical

Use `variant="critical"` to communicate an error or failure without blocking the user’s progress or inputs.

```tsx
<Toast text="The document was removed or the URL is no longer active." variant="critical" onClose={() => {}} />
```

#### Loading

Use `variant="loading"` to communicate an action that’s currently in progress.

```tsx
<Toast text="Copying document …" variant="loading" onClose={() => {}} />
```

### With an action

Using the `primaryAction` and `secondaryAction` props, add up to 2 nonessential actions or links. An important action can still be considered nonessential if it is available elsewhere after the Toast is dismissed.

* **For a single action:** Use `variant="ghost"` as your default choice. In rare cases, it might make sense to use `variant="primary"` to emphasize a high-priority action.
* **For two actions:** Use `variant="ghost"` for both actions to maintain a consistent style within the surface.

For more information about variants, [review the Button documentation](/components/button#variants).

```tsx

<Toast
text="Task created."
variant="success"
primaryAction={
  <Button
    text="Copy link"
    variant="ghost"
    onClick={() => {}}
  />
}
secondaryAction={
  <ButtonAsLink
    text="View task"
    iconEnd={InterfaceOuterLinkIcon}
    variant="ghost"
    onClick={() => {}}
  />
}
onClose={() => {}}
></Toast>


```

## Behavior

The component does not include animations or placement. You will need to define placement, animation, and persistence timing.

### Width

The length of the text determines a Toast’s width. Once the text reaches the maximum width, it wraps to the following line.

* Minimum width: 210px
* Maximum width: 400px

## Accessibility

Usually, the first focusable item of a Toast will be the **Close** Icon Button.

### Live Announcer

Toast has [Live Announcer](/utilities/live-announcer) built into the component because users need to know when a notification has been made available. When no actions are offered and the message is not critical, a Toast will be automatically announced with `assertiveness="polite"`.

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

### Keyboard navigation

| Key                                    | Expected result                                    |
| -------------------------------------- | -------------------------------------------------- |
| Tab                  | Moves focus through interactive elements within a Toast.  |
| Esc                    | If focus is within the Toast, closes the Toast.         |
| Enter or Space | Activates the focused element.                       |

## Writing

### Text

Although there is no length restriction, the text content of a Toast must be quickly scannable.

* Limit yourself to 5 words or fewer in most cases. 10 words maximum.
* A user should be able to read the entire text and actions in under 3 seconds.

#### Be brief and write simply

Consider how machine or AI translations by third-party apps and browser extensions could affect our product. Look for what could be misunderstood and edit it for complete clarity.

Avoid using colloquialisms that may be difficult to understand. Translation apps often incorrectly translate casual expressions; for example, “ready to go” translated as meaning literally prepared to leave or depart from a physical location.

#### Articles and pronouns

Reduce the use of articles (*a* and *the*), personal pronouns (*your*), and adverbs (*successfully*). By removing these elements from your writing, the message becomes more straightforward and faster to read.

#### Verb tense

Write in the simple past to describe an action or task that already happened.

Only use -ing verbs to indicate an action that’s in progress. [Learn how to format ellipses](/content/style/punctuation#ellipses).

#### Punctuation

Always use end punctuation for fragments and sentences, even if it’s a single fragment by itself. Exclamation points can read as shouting or overexcitement, so it’s recommended to avoid them unless it’s a moment of genuine celebration.

**Do not use question marks.** Because they are ephemeral, Toasts should never demand a user’s attention or engagement. Direct or rhetorical questions can cause a user to question themself about why additional intervention is necessary.

### Action labels

Follow the [Button](/components/button#writing) or [Link](/components/link#writing) writing documentation for primary and secondary actions in a Toast.

The built-in **Close** Icon Button already has a Tooltip with a label reading “Close”. [Learn more about describing Icons](/content/style/formatting#mentioning-ui-elements).

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Toast component in JS.

```tsx
import { Toast } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | - | The text shown in the Toast. |
| `onClose` | `() => void` | - | Event handler that is called when the **Close** Icon Button is activated. |
| `primaryAction` | `ReactNode` | - |  |
| `secondaryAction` | `ReactNode` | - |  |
| `variant` | `'default' | 'critical' | 'loading' | 'success' | 'warning'` | default | Changes the icon to convey a system status. |


## Related components

- [Modal](/components/modal)
- [Popover](/components/popover)
- [Tooltip](/components/tooltip)
