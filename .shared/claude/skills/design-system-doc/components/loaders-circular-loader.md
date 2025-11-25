# Circular Loader

A Circular Loader shows an animated, spinning circle indicating content on a page is loading or a user’s request is being processed.

```tsx

<Flex 
  direction="column"
  elevation="high" 
  borderRadius={2} 
  bgColor="background-base-default" 
  width={400} 
  height={275} 
  align="center" 
  justify="start"
  padding={4}
  gap={4}
>
  <Flex justify="space-between" width="100%" >
      <Flex gap={2} align="center">
        <Logo accessibilityLabel="superhuman mark logo" brand="superhuman" height={20} />
        <Text variant="text-xsmall" color="base-subdued" as="p">DeepL Translate</Text>
      </Flex>
      <Flex>
        <Icon accessibilityLabel="" icon={InterfaceCloseIcon} size="small"/>
      </Flex>
    </Flex>
  <Flex width="100%" gap={2} align="end">
    <Select label="From">
      <Select.Option value="dl" label="Detect language" />
    </Select>
    <Icon style={{marginBottom: "8px"}} accessibilityLabel="" icon={InterfaceSortHorizontalIcon} size="small"/>
    <Select label="To">
      <Select.Option value="eng" label="English" />
    </Select>
  </Flex>
  <Flex width="100%">
    <Textarea label="Detected language" value="Der schnelle braune Fuchs sprang über den faulen Hund"/>
  </Flex>
  <Flex gap={2} justify="start" width="100%">
    <Loader accessibilityLabel="Translating text">
      <Loader.Circular />
    </Loader>
    <Text as="p" color="base-subdued" variant="text-xsmall">Translating …</Text>
  </Flex>
</Flex>

```

Certain actions, like translating text and generating AI responses, will introduce delays into the product. In cases like these requests, a Circular Loader appears to indicate that activity is happening.

## Usage

A Circular Loader gives feedback indicating that the system is working on a task. By communicating this status to a user, it lessens confusion or frustration they may feel when an immediate response is not possible. [Learn about perceived performance on MDN](https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance).

**Use when**:

* You want to indicate to a user that the system is loading data or processing their request, such as generating the response to a user’s AI prompt.
* It’s unhelpful to provide an abstract preview of underlying content, such as a video, before it loads fully.

**Do not use when**:

* You are providing a visual representation of the expected information hierarchy before the content loads fully. Instead, use a [Skeleton Loader](/docs/components/skeleton-loader/).
* Underlying content often takes longer than 10 seconds to load. Instead, use a progress bar to indicate loading.

## Examples

### Default

By default, a Circular Loader appears at `medium` size. The `accessibilityLabel` prop is recommended to provide context regarding what is currently loading.

```tsx

  <Loader accessibilityLabel="Loading analytics table">
    <Loader.Circular  />
  </Loader>

```

### Size

Circular Loader is available in three sizes: `small` (16 x 16px), `medium` (20 x 20px), and `large` (24 x 24px).

```tsx

  <Flex gap={4}>
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="small"/>
      </Loader>
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="medium"/>
      </Loader>
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="large" />
      </Loader>
  </Flex>

```

### Variants

Use `variant="inverse"` to manually control the appearance of a Circular Loader. Otherwise, it uses [Theme Provider](/utilities/theme-provider) to appear in its `default` or `inverse` color based on context.

```tsx

  <Flex gap={4} bgColor="background-base-inverse" padding={4} width={300} align="center" justify="center">
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="small" variant="inverse"/>
      </Loader>
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="medium" variant="inverse"/>
      </Loader>
      <Loader accessibilityLabel="Loading analytics table">
          <Loader.Circular size="large" variant="inverse"/>
      </Loader>
  </Flex>

```

## Accessibility

### Labeling

The Circular Loader component intentionally lacks a visible label; however, the `accessibilityLabel` prop is required to supply the value of `aria-label`. This is what communicates the context of what is currently loading to people using a screen reader. If a separate [Text](/components/text) component labels the Circular Loader, repeat the same or similar content in the `accessibilityLabel`.

```tsx

  <Flex direction="column" align="space-between" padding={4} gap={4} borderRadius={2} borderColor="base-subdued" width={400}>
      <Flex justify="space-between">
          <Flex gap={2}>
              <LogoLogomarkColorDefaultIcon
                  style={{ height: 20, width: "auto" }}
                  aria-label="Grammarly logo"
                  aria-hidden={false}
              />
              <Text variant="text-small" as="p" color="base-subdued">Neutral</Text>
          </Flex>
          <Flex>
              <Text variant="text-small" as="p" color="base-subdued">10 prompts</Text>
          </Flex>
      </Flex>
      <Flex borderRadius={1} borderColor="base-subdued" padding={4} gap={2}>
          <Loader accessibilityLabel="Working on generating prompt options">
              <Loader.Circular />
          </Loader>
          <Text variant="text-small" as="p" color="base-subdued">Working on it … </Text>
      </Flex>
      <TextField labelDisplay="hidden" label="Write a prompt" />
  </Flex>

```

### User settings for contrast and motion

A Circular Loader will account for a user’s browser or system settings with regard to contrast and motion.

| User setting                     | Loader response                                     |
| -------------------------------- | ------------------------------------------------------------ |
| No preferences set               | Show the animation                                  |
| Reduced motion                   | Turn off the animation                              |

## Writing

Although a Circular Loader does not have a visible label, you can add explanatory context nearby. For example, you can use [Flex](/components/flex) to position a complementary [Text](/components/text) component next to a Circular Loader.

Follow these guidelines when writing adjoining content:

* Start with an *-ing* verb in most cases.
* Focus on the action in progress or the object being loaded.
* Write in a neutral, direct tone and maintain our brand voice principles.
* Avoid unnecessary courtesies like “Please wait” and overly forceful phrases like “Hold on.”
* Aspire to use five words or less.

**Examples**

If used, format an ellipsis as the horizontal ellipsis Unicode character “…”, which is three periods in a row. Insert a space between the ellipsis and any adjacent text. In HTML, the code for a horizontal ellipsis is `&hellip;`. [Learn more about ellipses](/docs/content/style/punctuation#ellipses).

**Examples**

## Installation

### Javascript (Standard)

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Loader component in JS, which includes Loader.Circular.

```tsx
import { Loader } from "@superhuman/origin";
```

### With LottieFiles

Lottie animations are a good solution for native clients, but can be used anywhere as needed. Follow the implementation instructions for your scenario.

* HTML
* React
* Swift
* Android

#### Self-hosted

Download the Lottie files if you need a self-hosted solution.

## API

### Loader props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | Content that is one of the types of loaders, either Branded or Circular. |
| `accessibilityLabel` | `string` | No | `'Loading'` | Sets `aria-label` to convey the context of visible text related to a Circular Loader. The `accessibilityLabel` and any nearby visible text should be the same or align closely. |
| `shouldFocus` | `boolean` | No | `false` | When true, moves focus to the progress container when loading starts. Only needed when multiple Circular Loaders appear together on a page. |
| `onLoaded` | `() => void` | No | - | Event handler that is called when a Circular Loader is unmounted. Can be used to move focus to a relevant element when loading is complete. This prop should be set in most cases to make sure a user lands at the correct place in the UI. Do not use this prop when multiple Circular Loaders appear together on a page. |

### Loader.Circular props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `"small" \| "medium" \| "large"` | No | `'medium'` | Determines the size of the Circular Loader to be displayed. |
| `variant` | `"default" \| "inverse"` | No | `"default"` | Determines the color of the Circular Loader. |

## Related components

- [Branded Loader](/components/branded-loader)
- [Skeleton Loader](/components/skeleton-loader)
