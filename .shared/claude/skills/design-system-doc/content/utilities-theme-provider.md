# Theme Provider

Theme Provider is a utility component that sets the color scheme for all contained
elements.

:::caution Beta
Custom themes are still in beta and we’re in the process of putting together guidelines to help you use them effectively.
:::

## Usage

The Theme Provider composes a mode (i.e. light or dark) for either a specific section of or the entirety of an app.

By default, the color mode is automatically detected based on the user’s OS settings. You can override this using the `mode` prop.

The `theme` is, by default, set to `superhuman`. This theme should be used for new feature development and *should not* change unless you are supporting a legacy experience.

Child components can use custom hooks like the `useTheme` to access the current color mode.

## Examples

### Basic usage

Wrap your app in `ThemeProvider` to set the color mode for all contained elements. The `useTheme` lets you change the color mode dynamically.

```tsx

function ExampleContent({ setting }) {

const { mode, updateMode } = useTheme();

return (
  <Box bgColor="background-base-default" padding={4}>
    <Box
      bgColor="background-base-default"
      borderRadius={3}
      width="300px"
      borderColor="base-default"
      padding={4}
      paddingBottom={8}
    >
      <Box
        borderColor="base-default"
        bgColor="background-base-subdued"
        borderRadius={1}
        height="200px"
      ></Box>
      <Flex gap={2} direction="column">
        <Flex justify="space-between" paddingTop={3}>
          <Box>
            <Text as="span" weight="bold">
              Product Name
            </Text>
          </Box>
          <Box>
            <Text as="span" weight="bold">
              $1.23
            </Text>
          </Box>
        </Flex>
        <Box>
          <Switch
            isSelected={mode === "dark"}
            label="Toggle dark mode"
            onChange={() => {
              updateMode(mode === "dark" ? "light" : "dark");
            }}
          />
        </Box>
        <Flex direction="column" gap={2} marginBottom={4}>
          <Box>
            <Text as="p" weight="medium">
              The color mode is {mode}.
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Button width="full" size="large" onClick={() => updateMode("dark")}>
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  </Box>
);
}

render(<>
<ThemeProvider mode="dark">
<ExampleContent />
</ThemeProvider>
</>)

```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the component in JS.

```tsx
import { ThemeProvider } from "@superhuman/origin";
```

## API

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | Contents that make use of the theme provider. |
| `mode` | `'light' \| 'dark' \| 'auto'` | No | `'auto'` | Specify the color mode to use. If not provided, the value is detected based on the user's OS settings ('auto'). |
| `theme` | `'grammarly'` | No | `'grammarly'` | Specify the theme to use. If not provided, will default to the Grammarly color palette. |
| `target` | `HTMLElement` | No | - | Custom target to attach `data-gds-mode` attributes. Defaults to a container div if not provided. |
