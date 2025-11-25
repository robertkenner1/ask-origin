# JavaScript

The JavaScript library includes React components as well as tokens that can be used directly in code or as CSS variables.

## Installation

Using your favorite npm package manager:

```bash
yarn/npm/pnpm install @superhuman/origin
```

### Installing beta versions

Beta versions allow you to test upcoming features before they're released as stable:

```bash
# Always get the latest beta
pnpm install @superhuman/origin@beta

# Or pin to a specific beta version
pnpm install @superhuman/origin@7.0.0-beta.4
```

### Styles

You'll also want to include the Origin styles within one of your CSS files:

```css
/** for modern bundlers **/
@import '@superhuman/origin' 

/** OR for webpack (MiniCssExtractPlugin) **/ 
@import '~@superhuman/origin/dist/index.css'
```

### Optional: fonts

You will also need the following if your app doesn't already provide the Inter and Matter fonts:

```css
import '@superhuman/origin/dist/fonts.css'
```

If your app doesn't already set the font-family for the body, you may also need to add the following CSS:

```css
body {
  font-family: var(--font-stack-inter);
}
```

For optimal performance, and to avoid a flash of unstyled text, we recommend preloading the fonts:

```html
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/inter-regular.woff2"
/>
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/inter-medium.woff2"
/>
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/inter-semibold.woff2"
/>
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/inter-bold.woff2"
/>
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/matter-semibold.woff2"
/>
<link
  rel="preload"
  as="font"
  crossorigin
  href="https://static-web.grammarly.com/shared/fonts/product/v1/matter-bold.woff2"
/>
```

### Optional: shadow DOM styles

By default, Origin attaches CSS variables to `:root`. If your app uses shadow DOM, you probably also need them on `:host`:

```css
import '@superhuman/origin/dist/shadow.css'
```

## Components

Components are provided via the `@superhuman/origin` package. They are built with React and Typescript.

See [Components Status](/components/component-status) for the complete list of available components and relevant version information.

Sample usage:

```tsx
import { Tag } from "@superhuman/origin";

<Tag variant="warning" label="Beta" />;
```

## Tokens

The design system tokens are available as individual values in `@superhuman/origin`. TypeScript types are also included.

CSS variables are also available, as demonstrated in the following sections.

### Border Radius

#### CSS

```css
.someSelector {
  border-radius: var(--radius-1);
}
```

#### JavaScript

```tsx
import { Tokens } from "@superhuman/origin";

function Example() {
  return (
    <div
      style={{
        borderRadius: `${Tokens.Radius.RadiusHalf}rem`,
      }}
    ></div>
  );
}
```

### Color

Most designs will use the Semantic palette with some additional colors pulled from the Core palette when necessary.

#### CSS

```css
.someSelector {
  background: var(--color-background-base-default); /* semantic palette */
  color: var(--blue-40); /* core palette */
}
```

#### JavaScript

```tsx
import { Tokens } from "@superhuman/origin";

function Example() {
  return (
    <div
      style={{
        background: Tokens.SemanticColor.Color.Background.Base.Default,
        color: Tokens.Color.Blue40,
      }}
    ></div>
  );
}
```

### Elevation

#### CSS

```css
.elevation-high {
  border: var(--elevation-high-border);
  box-shadow: var(--elevation-high-shadow);
}
```

#### JavaScript

```tsx
import { Tokens } from "@superhuman/origin";

const styles = {
  boxShadow: Tokens.Elevation.ElevationHigh.boxShadow,
  border: Tokens.Elevation.ElevationHigh.border,
};
```

### Iconography

React-components based on `.svg` assets are available. All icons are `aria-hidden=true` and `role="img"` by default. See [all available icons](/foundations/iconography).

#### Examples

Basic usage:

Override any SVG element props:

Override colors on some state (hover, active, etc.):

Add special a11y tags:

### Space

#### CSS

```css
.someSelector {
  padding: var(--space-1);
}
```

#### JavaScript

```tsx
import { Tokens } from "@superhuman/origin";

function Example() {
  return (
    <div
      style={{
        padding: `${Tokens.Space.Space1}rem`,
      }}
    ></div>
  );
}
```

### Typography

[Typography](/foundations/typography) is accessible as React components ([Heading](/components/heading) and [Text](/components/text)).

The necessary fonts and `@font-face` rules are available with the following import (since version 6.11.0):

```css
import '@superhuman/origin/dist/fonts.css'
```

The following CSS variables are also available as a convenience:

* `--font-stack-inter`
* `--font-stack-matter`

For example, you could set the default font for your app like this:

```css
body {
  font-family: var(--font-stack-inter);
}
```

#### Usage

With [additional typography](/foundations/typography#style) styles:

* [Granimals](https://gitlab.grammarly.io/uifoundation/gds-sample-app)
* [Extension](https://gitlab.grammarly.io/extensions/extension/-/merge_requests/6437)
* [Grammarly Editor](https://gitlab.grammarly.io/features/denali/-/merge_requests/6101)
