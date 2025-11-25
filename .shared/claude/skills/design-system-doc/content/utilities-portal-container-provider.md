# Portal Container Provider

Portal Container Provider is a utility component that specifies where portals for overlay components should be rendered.

## Usage

Use Portal Container Provider to specify where overlay components should be rendered. It’s useful when the default overlay component placement does not meet your needs.

While overlay components—[Modal](/components/modal), [Popover](/components/popover), [Tooltip](/components/tooltip)—are by default appended to the body of the page, the Portal Container Provider lets you decide where they should be rendered. For instance, this utility lets you render an overlay component inside a shadow DOM so the correct styles are applied.

## Examples

Here’s a simple scenario of a Tooltip and Portal Container Provider.

```tsx

function Example() {
const [target, setTarget] = React.useState();
const [, setShown] = React.useState(false); // force re-render after tooltip shows

return (
  <Flex direction="row" align="center" gap={1}>
    <div id="my-portal" ref={ref => setTarget(ref)} style={{ maxWidth: 350 }}>
      Notice that the Tooltip is appended to this div instead of the body of the page.
    </div>
    {target && (
      <PortalContainerProvider default={target}>
        <Flex justify="center">
          <Tooltip onShow={() => setShown(true)} initialOpen>
            <TooltipTrigger asChild>
              <button class="tertiary-button"></button>
            </TooltipTrigger>
            <TooltipContent root={undefined}>This Tooltip is inside a Portal Container Provider.</TooltipContent>
          </Tooltip>
        </Flex>
      </PortalContainerProvider>
    )}
  </Flex>
);
}

```

## Behavior

When a single container is specified using `default`, all overlay components will appear inside that container.
For even more control, you can specify containers for `tooltip`, `popover`, and `modal`.

## Installation

Import the component in JS.

```tsx
import { PortalContainerProvider } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `default` | `HTMLElement` | - | The default outlet where portals should be rendered. |
| `modal` | `HTMLElement` | - | The outlet where Modal portals should be rendered. Leave empty to use \`default\`. |
| `popover` | `HTMLElement` | - | The outlet where Popover portals should be rendered. Leave empty to use \`default\`. |
| `tooltip` | `HTMLElement` | - | The outlet where Tooltip portals should be rendered. Leave empty to use \`default\`. |


## Related components

- [Modal](../components/modal)
- [Popover](../components/popover)
- [Tooltip](../components/tooltip)
