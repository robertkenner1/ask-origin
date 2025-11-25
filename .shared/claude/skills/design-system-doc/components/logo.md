# Logo

Logo is a component that enables the display of different variants of Superhuman, Grammarly, Coda, and Mail logos.

*A logo is typically placed at the top of a page or in a window as a brand identifier. In a case like this, it may also act as a link.*

## Usage

Use when:
A logo is needed in an experience to identify a product’s brand.

Do not use when:
An interactive element requires special styling, functionality, or states not supported by the component. For example, the [Grammarly widget](/patterns/grammarly-widget/) requires special interactive states. Instead, use an SVG from the [Iconography library](/foundations/iconography).

## Examples

Each brand’s logo has different variants and lockups, all of which are supported through component properties.

### Orientation

#### Mark

A mark, also known as a logomark, is a distinct graphic symbol that represents a brand. This is available for all brands.

```tsx

  <Flex direction="row" gap={10}>
      <Flex gap={3}>
          <Logo 
              accessibilityLabel="superhuman mark logo"
              brand="superhuman"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo 
              accessibilityLabel="grammarly mark logo"
              brand="grammarly"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo 
              accessibilityLabel="coda mark logo"
              brand="coda"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo 
              accessibilityLabel="mail mark logo"
              brand="mail"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="go mark logo variant"
              brand="go"
              variant="color-secondary"
          />
      </Flex>
  </Flex>
```

#### Type

Type, also known as logotype, is the standalone textual graphic element that represents a brand.

```tsx

  <Flex direction="row" gap={10} justify="center" align="center">
      <Flex gap={3}>
          <Logo
              accessibilityLabel="superhuman type logo"
              brand="superhuman"
              composition="type"
              variant="color-secondary"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="coda type logo"
              brand="coda"
              composition="type"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="go type logo"
              brand="go"
              composition="type"
              variant="color-secondary"
          />
      </Flex>
  </Flex>
```

#### Lockup

Logo lockups combine both the mark and type into a single logo. They can be displayed in either `horizontal` or `stacked` orientations.

```tsx

  <Flex gap={10} direction="column" wrap="true">
      <Flex direction="row" gap={20}>
          <Flex gap={3} width="50%">
              <Logo
                  accessibilityLabel="superhuman lockup logo horizontal orientation"
                  brand="superhuman"
                  composition="lockup"
                  orientation="horizontal"
              />
          </Flex>
          <Flex gap={3} width="50%"> 
              <Logo
                  accessibilityLabel="grammarly lockup logo horizontal orientation"
                  brand="grammarly"
                  composition="lockup"
                  orientation="horizontal"
              />
          </Flex>
          <Flex gap={3} width="50%"> 
              <Logo
                  accessibilityLabel="go lockup logo horizontal orientation"
                  brand="go"
                  composition="lockup"
                  orientation="horizontal"
                  variant="color-secondary"
              />
          </Flex>
      </Flex>
      <Flex direction="row" gap={10}>
          <Flex gap={3} width="50%"> 
              <Logo
                  accessibilityLabel="superhuman lockup logo stacked orientation"
                  brand="superhuman"
                  composition="lockup"
                  orientation="stacked"
              />
          </Flex>
          <Flex gap={3} width="50%" justify="center"> 
              <Logo
                  accessibilityLabel="grammarly lockup logo stacked orientation"
                  brand="grammarly"
                  composition="lockup"
                  orientation="stacked"
              />
          </Flex>
          <Flex gap={3} width="50%" justify="center"> 
              <Logo
                  accessibilityLabel="go lockup logo stacked orientation"
                  brand="go"
                  composition="lockup"
                  orientation="stacked"
                  variant="color-secondary"
              />
          </Flex>
      </Flex>
  </Flex>
```

### Variant

Variants applie to all logos available for the brands displayed in each section. Not all logos have all `mark`, `type`, and `lockup` compositions.

#### Color Primary

```tsx

  <Flex direction="row" gap={10}>
      <Flex gap={3}>
          <Logo 
              accessibilityLabel="superhuman mark logo color primary variant"
              brand="superhuman"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo 
              accessibilityLabel="grammarly mark logo color primary variant"
              brand="grammarly"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo 
              accessibilityLabel="coda mark logo color primary variant"
              brand="coda"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="mail mark logo color primary variant"
              brand="mail"
          />
      </Flex>
  </Flex>
```

#### Color Secondary

```tsx

  <Flex direction="row" gap={10}>
      <Flex gap={3}>
          <Logo
              accessibilityLabel="superhuman mark logo color secondary variant"
              brand="superhuman"
              variant="color-secondary"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="coda mark logo color secondary variant"
              brand="coda"
              variant="color-secondary"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="go mark logo color secondary variant"
              brand="go"
              variant="color-secondary"
          />
      </Flex>
  </Flex>
```

#### Mono Inverse

The `mono-inverse` variant displays a logo using a single dark color value in light mode and `white` in dark mode.

```tsx

  <Flex direction="row" gap={10}>
      <Flex gap={3}>
          <Logo
              accessibilityLabel="grammarly mark logo mono inverse variant"
              brand="grammarly"
              variant="mono-inverse"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="coda mark logo mono inverse variant"
              brand="coda"
              variant="mono-inverse"
          />
      </Flex>
      <Flex gap={3}> 
          <Logo
              accessibilityLabel="mail mark logo mono inverse variant"
              brand="mail"
              variant="mono-inverse"
          />
      </Flex>
  </Flex>
```

#### Mono Light

The `mono-light` variant displays a logo using `white` in both light and dark modes.

```tsx

  <Flex direction="row" gap={10} padding={4} borderRadius={2} bgColor="background-base-inverse">
      <Flex gap={3}>
          <Logo
              accessibilityLabel="superhuman mark logo mono light variant"
              brand="superhuman"
              variant="mono-light"
          />
      </Flex>
      <Flex gap={3}>
          <Logo
              accessibilityLabel="grammarly mark logo mono light variant"
              brand="grammarly"
              variant="mono-light"
          />
      </Flex>
      <Flex gap={3}>
          <Logo
              accessibilityLabel="coda mark logo mono light variant"
              brand="coda"
              variant="mono-light"
          />
      </Flex>
      <Flex gap={3}>
          <Logo
              accessibilityLabel="mail mark logo mono light variant"
              brand="mail"
              variant="mono-light"
          />
      </Flex>
  </Flex>
```

## Behavior

### Size

* Logos scale proportionally based on the `width` or `height` value provided. You can specify either `width` or `height`, but not both.
* When `width` is set, the height adjusts automatically to maintain aspect ratio.
* When `height` is set, the width adjusts automatically to maintain aspect ratio.
* Select the logo orientation that scales appropriately for the available space. For example, a horizontal lockup may be too small for a sidebar and require the default variant instead.

```tsx

  <Flex direction="column" gap={6}>
      <Flex direction="column" gap={3}>
          <Text as="p">Custom width (200px):</Text>
          <Logo
              accessibilityLabel="Grammarly logo with custom width"
              brand="grammarly"
              composition="lockup"
              orientation="horizontal"
              width={200}
          />
      </Flex>
      <Flex direction="column" gap={3}>
          <Text as="p">Custom height (60px):</Text>
          <Logo
              accessibilityLabel="Grammarly logo with custom height"
              brand="grammarly"
              composition="lockup"
              orientation="horizontal"
              height={60}
          />
      </Flex>
  </Flex>
```

## Accessibility

### Accessibility label

#### Decorative logo

Logos that don’t add information to the content of a page are considered to be decorative. Provide an empty accessibilityLabel to hide them from assistive technologies. [Learn more about accessibilty labels for decorative images](https://www.w3.org/WAI/tutorials/images/decorative/).

**Example**

!\[A Grammarly logo next to the VBar card title is purely decorative.]\(/img/components/logo-decorative.svg)

```
<Logo
    accessibilityLabel=""
    brand="grammarly"
    composition="mark"
/>
```

#### Logos as standalone links

For [logos used as standalone links](https://www.w3.org/WAI/tutorials/images/functional/#example-1-image-used-alone-as-a-linked-logo), provide the title of the page being linked as the `accessibilityLabel`.

**Example**

!\[The Superhuman logo at the top of a page can be a link back to the homepage.]\(/img/components/logo-standalone-link.svg)

```
<Link href="https://app.superhuman.com">
    <Logo
        accessibilityLabel="Superhuman Dashboard"
        brand="grammarly"
        composition="mark"
    />
</Link>
```

#### Logos with link list

For [logos accompanying text in links](https://www.w3.org/WAI/tutorials/images/functional/#logo-image-within-link-text), use `accessibilityLabel=""`.

**Example**

!\[The Superhuman logo at the top of a page can be a link back to the homepage.]\(/img/components/logo-link-list.svg)

```
<Flex direction="column" gap={4}>
    <Flex gap={3}>
        <Link href="https://app.grammarly.com">
            <Logo
                accessibilityLabel="Sign in with Grammarly"
                brand="grammarly"
                composition="mark"
            />
        </Link>
        <Text as="span">Continue with Grammarly</Text>
    </Flex>
    <Flex gap={3}>
        <Link href="https://app.grammarly.com">
            <Logo
                accessibilityLabel="Sign in with Coda"
                brand="coda"
                composition="mark"
            />
        </Link>
        <Text as="span">Continue with Coda</Text>
    </Flex>
    <Flex gap={3}>
        <Link href="https://app.grammarly.com">
            <Logo
                accessibilityLabel="Sign in with Superhuman Mail"
                brand="mail"
                composition="mark"
            />
        </Link>
        <Text as="span">Continue with Superhuman Mail</Text>
    </Flex>
</Flex>
```

#### Informative logos

For [logos that are informative](https://www.w3.org/WAI/tutorials/images/informative/), like lists of logos showing different brands as in previous sections of this document, provide a short phrase or sentence that conveys the meaning of the logo in context.

**Example**

!\[Brand logos are displayed in a row to indicate which products are included in each plan.]\(/img/components/logo-informative.svg)

```
<Flex direction="row" gap={4}>
    <Flex gap={3}>
        <Logo
        accessibilityLabel="Grammarly is included in the free plan"
        brand="grammarly"
        composition="mark"
        />
    </Flex>
    <Flex gap={3}>
        <Logo
        accessibilityLabel="Superhuman is included in the free plan"
        brand="superhuman"
        composition="mark"
        />
    </Flex>
    <Flex gap={3}>
        <Logo
        accessibilityLabel="Coda is included in the free plan"
        brand="coda"
        composition="mark"
        />
    </Flex>
</Flex>
```

## Installation

1. Import the CSS (if not done already).

```css
@import "@superhuman/origin";
```

2. Import the Logo component in JS.

```tsx
import { Logo } from "@superhuman/origin";
```

## API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accessibilityLabel` | `string` | - |  |
| `brand` | `'superhuman' | 'grammarly' | 'coda' | 'mail'` | superhuman | Determines which brand of the logo will display. |
| `composition` | `'mark' | 'type' | 'lockup'` | mark | Determines whether the logo mark, type, or lockup combination is will display. |
| `orientation` | `'horizontal' | 'stacked'` | horizontal (when composition is 'lockup', otherwise undefined) | Determines which lockup orientation of the logo will display. Only applicable when composition is 'lockup'. |
| `width` | `number` | - | Sets a custom pixel width for the logo. The height adjusts automatically to maintain aspect ratio. Cannot be used together with <code>height</code>. |
| `height` | `number` | - | Sets a custom pixel height for the logo. The width adjusts automatically to maintain aspect ratio. Cannot be used together with <code>width</code>. |
| `variant` | `'color-primary' | 'color-secondary' | 'mono-inverse' | 'mono-light'` | color-primary (color-secondary for 'go' brand) | Determines which color of the logo will display. Not all variants are available for all brands. |


## Related components

- [Icon](/components/icon)
- [Illustration](/components/illustration)
