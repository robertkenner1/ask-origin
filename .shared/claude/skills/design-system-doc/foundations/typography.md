# Typography

Typography is a fundamental design element in our product. When applied systematically, type establishes visual hierarchy and gives structure to content. It also maximizes readability when paired with Superhuman's signature editorial markup.

## Fonts

Superhuman's product offerings use Matter for headings and Inter for body text. Our bespoke font Glyph may be be used for brand and marketing purposes—as well as in the Growth focus area. We know that in some instances, there needs to be clarity about whether to use Glyph or Inter for body font.

**Use Inter:**

- When a user is signed in to the product
- In product demos, even if a user is signed out
- Static product images used for promotional purposes

**Use Glyph:**

- For signed-out experiences that are not examples of the product
- In marketing or sales websites and collateral

[Visit the Brand Vault page on typography](https://brand.grammarly.com/document/6#/visual-language/typography-1/brand-body) for more information. If you have a question about a specific scenario, [reach out to the Growth design team at #growth](https://app.slack.com/client/E06GHNPFX4L/C02GQUFQN).

### Matter

ABCDEFGHIJKLMNOPQRSTUVWXYZ
The quick brown fox jumps over the lazy dog.
!@#$%^&*() 0123456789

### Inter

ABCDEFGHIJKLMNOPQRSTUVWXYZ
The quick brown fox jumps over the lazy dog.
!@#$%^&*() 0123456789

## Sizes

Superhuman's product offerings use a 14px (0.875rem) font size by default. This differs from the browser default of 16px; however, the smaller size has proven to scale well in the UI. This 14px font is juxtaposed with the large text size (Text Large) where users apply a majority of their focus.

## Text color

Apply color to text according to the purpose assigned to the color. Never use color for decoration or visual appeal. Following the information provided in [our Color documentation](/foundations/color), text should always meet the accessible contrast ratio of 4.5:1.

Color isn't defined in the text specification, but rather applied on a per-component basis. This is done to account for each specific state in the experience where color is necessary. For example, Buttons use white, brand green, and neutral gray depending on the type of Button.

## Variants

| Example | Style | Attributes | Code |
|---------|-------|------------|------|
| Easier said. Done. | Heading Large | font-size: 2rem (28px)<br/>line-height: 2.286rem (32px)<br/>font-weight: 700<br/>letter-spacing: -0.0025em | `import { Heading } from "@superhuman/origin"\n\n<Heading variant="heading-large" as="h1" />` |
| Easier said. Done. | Heading Medium | font-size: 1.714rem (24px)<br/>line-height: 2.286rem (32px)<br/>font-weight: 700<br/>letter-spacing: -0.002em | `import { Heading } from "@superhuman/origin"\n\n<Heading variant="heading-medium" as="h2" />` |
| Easier said. Done. | Heading Small | font-size: 1.429rem (20px)<br/>line-height: 1.714rem (24px)<br/>font-weight: 600 | `import { Heading } from "@superhuman/origin"\n\n<Heading variant="heading-small" as="h3" />` |
| Easier said. Done. | Heading XSmall | font-size: 1.143rem (16px)<br/>line-height: 1.714rem (24px)<br/>font-weight: 600 | `import { Heading } from "@superhuman/origin"\n\n<Heading variant="heading-xsmall" as="h4" />` |
| Easier said. Done. | Heading XXSmall | font-size: 1rem (14px)<br/>line-height: 1.5rem (21px)<br/>font-weight: 600 | `import { Heading } from "@superhuman/origin"\n\n<Heading variant="heading-xxsmall" as="h5" />` |
| Easier said. Done. | Text Large | font-size: 1.286rem (18px)<br/>line-height: 2.286rem (32px)<br/>font-weight: 400 | `import { Text } from "@superhuman/origin"\n\n<Text variant="text-large" as="p" />` |
| Easier said. Done. | Text Medium | font-size: 1.143rem (16px)<br/>line-height: 1.714rem (24px)<br/>font-weight: 400 | `import { Text } from "@superhuman/origin"\n\n<Text variant="text-medium" as="p" />` |
| Easier said. Done. | Text Small | font-size: 1rem (14px)<br/>line-height: 1.5rem (21px)<br/>font-weight: 400 | `import { Text } from "@superhuman/origin"\n\n<Text variant="text-small" as="p" />` |
| Easier said. Done. | Text XSmall | font-size: 0.86rem (12px)<br/>line-height: 1.286rem (18px)<br/>font-weight: 400 | `import { Text } from "@superhuman/origin"\n\n<Text variant="text-xsmall" as="p" />` |

### Style

Apply bolding with `weight`, italics with `italic`, and a strikethrough with `decoration`.

```tsx
<Flex direction="column" gap={4}>
  <Text as="p">normal</Text>
  <Text as="p" weight="medium">medium</Text>
  <Text as="p" weight="semibold">semibold</Text>
  <Text as="p" weight="bold">bold</Text>
  <Text as="p" italic>italic</Text>
  <Text as="p" decoration="line-through">strikethrough</Text>
</Flex>
```
