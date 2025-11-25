# Branded Loader

A Branded Loader displays pulsating brand shapes to indicate an action in progress or loading content.

```tsx

<Flex 
  direction="column"
  borderRadius={2} 
  bgColor="background-base-default" 
  width={400} 
  height={200} 
  align="center" 
  justify="start"
>
  <Flex justify="space-between" width="100%" padding={4}>
      <Flex gap={2}>
        
      </Flex>
      <Flex>
        <Icon accessibilityLabel="" icon={InterfaceCloseIcon} size="small"/>
      </Flex>
    </Flex>
  <Flex marginTop={8}>
    <Loader accessibilityLabel="Loading page">
      <Loader.Branded />
    </Loader>
  </Flex>
</Flex>

```

A Branded Loader appears while the content of a sign-in Modal is loading.

## Usage

A Branded Loader gives feedback indicating that the system is working on a task. By communicating this status to a user, it lessens the confusion or frustration they may feel when an immediate response is not possible. [Learn about perceived performance on MDN](https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance).

**Use when**:

* A full page or a large section of content is loading.
* A branded animation enhances the experience.
* It’s unhelpful to provide an abstract preview of underlying content, such as a video, before it loads fully.

**Do not use when**:

* A branded animation would distract from other, more important content. Instead, use a [Circular Loader](/components/circular-loader).
* Multiple elements in a surface or page are loading at the same time, such as in a dashboard view. Instead, use multiple [Circular Loaders](/components/circular-loader).
* You are providing a visual representation of the expected information hierarchy before the content loads fully. Instead, use a [Skeleton Loader](/components/skeleton-loader).
* Underlying content often takes longer than 10 seconds to load. Instead, use a progress bar to indicate loading.

## Examples

### Default

By default, a Branded Loader appears at `medium` size. The `accessibilityLabel` prop is recommended to provide context regarding what is currently loading.

```tsx

  <Loader accessibilityLabel="Loading page">
    <Loader.Branded />
  </Loader>

```

### Size

Branded Loader is available in two sizes: `small` (24 x 24px) and `medium` (64 x 64px).

```tsx

<Flex gap={4}>
  <Loader accessibilityLabel="Loading page">
    <Loader.Branded size="small" />
  </Loader>
  <Loader accessibilityLabel="Loading page">
    <Loader.Branded  />
  </Loader>
</Flex>

```

### Variants

Use `variant="inverse"` to manually control the appearance of a Branded Loader. Otherwise, it uses Color Scheme Provider to appear in its `default` or `inverse` color based on context.

```tsx

  <Flex direction="column" bgColor="background-brand-default" gap={2} align="center" padding={4}>
    <Loader accessibilityLabel="Loading page">
      <Loader.Branded variant="inverse" />
    </Loader>
    <Text as="p" color="base-inverse">Loading page …</Text>
  </Flex>

```

## Accessibility

### Labeling

The Branded Loader component intentionally lacks a visible label; however, the `accessibilityLabel` prop is required to supply the value of `aria-label`. This is what communicates the context of what is currently loading to people using a screen reader. If a separate [Text](/components/text) component labels the Branded Loader, repeat the same or similar content in the `accessibilityLabel`.

```tsx

  <Flex align="center" gap={4}>
    <Loader accessibilityLabel="Loading analytics data">
      <Loader.Branded  />
    </Loader>
    <Text as="p">Loading analytics data …</Text>
  </Flex>

```

### User settings for contrast and motion

A Branded Loader will account for a user’s browser or system settings with regard to contrast and motion.

| User setting                     | Loader response                                     |
| -------------------------------- | ------------------------------------------------------------ |
| No preferences set               | Shows the animation                                  |
| Reduced motion                   | Pauses the animation for 5 seconds before starting it again                             |

## Writing

Although a Branded Loader does not have a visible label, you can add explanatory context nearby. For example, you can use [Flex](/components/flex) to position a complementary [Text](/components/text) component next to a Branded Loader.

Follow these guidelines when writing adjoining content:

* Start with an *-ing* verb in most cases.
* Focus on the action in progress or the object being loaded.
* Write in a neutral, direct tone and maintain our brand voice and tone.
* Avoid unnecessary courtesies like “Please wait” and overly forceful phrases like “Hold on.”
* Aspire to use five words or less.

**Examples**

If using an ellipsis, format it as the horizontal ellipsis Unicode character “…”, which is three periods in a row. Insert one space between the ellipsis and any adjacent text. In HTML, the code for a horizontal ellipsis is `&hellip;`. [Learn more about ellipses](/content/style/punctuation#ellipses).

**Examples**

## Installation

### JavaScript (Standard)

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Loader component in JS, which includes Loader.Branded.

```tsx
import { Loader } from "@superhuman/origin";
```

### With only HTML and CSS (Alternative)

In rare cases when you need to render Branded Loader before JavaScript is available, a version with only HTML and CSS is also available.

### With LottieFiles

Lottie animations are a good solution for native clients, but can be used anywhere as needed. Follow the implementation instructions for your scenario.

* HTML
* React
* Swift
* Android

#### Self-hosted

Download the Lottie files if you need a self-hosted solution.

#### Hosted

If you're interested in a hosted version of the files, please contact us in the [#ask-origin-design-system](https://grammarly.slack.com/archives/C03MNHYDT5E) Slack channel.

## API

### Loader props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | Content that is one of the types of loaders, either Branded or Circular. |
| `accessibilityLabel` | `string` | No | `'Loading'` | Sets `aria-label` to convey the context of visible text related to a Branded Loader. The `accessibilityLabel` and any nearby visible text should be the same or align closely. |
| `shouldFocus` | `boolean` | No | `false` | When true, moves focus to the progress container when loading starts. Only needed when multiple Branded Loaders appear together on a page. |
| `onLoaded` | `() => void` | No | - | Event handler that is called when a Branded Loader is unmounted. Can be used to move focus to a relevant element when loading is complete. This prop should be set in most cases to make sure a user lands at the correct place in the UI. Do not use this prop when multiple Branded Loaders appear together on a page. |

### Loader.Branded props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `"small" \| "medium"` | No | `'medium'` | Determines the size of the Branded Loader to be displayed. |
| `variant` | `"default" \| "inverse"` | No | `"default"` | Determines the color of the Branded Loader. |

## Related components

- [Circular Loader](/components/circular-loader)
- [Skeleton Loader](/components/skeleton-loader)
