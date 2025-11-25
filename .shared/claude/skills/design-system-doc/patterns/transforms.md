# Text Transforms, Underlines and Highlights

Text transforms show suggested edits inside the card, while underlines and highlights appear on the user’s text to indicate where the suggestions apply.

:::info

Some of the semantic color tokens used in Text Tranforms, Highlights, and Underlines will be only available in the upcoming Superhuman theme release.

:::

The transforms highlighted in the suggestion card tell the user what will change when the
suggestion is accepted.

## Text Transforms

### Deletions

The deletion transform indicates that there is a suggestion to remove text.

!\[Deletion transforms have a strikethrough and a gray background color.]\(/img/patterns/transforms\_deletions.svg)

#### Deletion Styles

Deletion text has a strikethrough text style. The text color uses `color.text.deletion` to meet contrast requirements against the highlight. Borders are added around the markers to improve visibility.

!\[Deletion text is gray with a strikethrough.]\(/img/patterns/transforms\_deletions\_styles.svg)

Deletion highlights are rendered as a background color on the text. The highlight color uses `color.highlight.deletion.default`.

!\[Deletion highlights are a transparent gray background around the text.]\(/img/patterns/transforms\_deletions\_highlights.svg)

### Additions

The addition transform indicates that there is a suggestion to add text.

!\[Addition transforms have bolded text and a green background color.]\(/img/patterns/transforms\_additions.svg)

#### Addition Styles

Addition text has semibold text style. The text color uses `color.color.text.addition`. Borders are added around the markers to improve visibility.

!\[Addition text is green and bolded.]\(/img/patterns/transforms\_additions\_styles.svg)

Addition highlights are rendered as a background color on the text. The highlight color uses `color.highlight.addition.default`.

!\[Addition highlights are a transparent gray background around the text.]\(/img/patterns/transforms\_additions\_highlights.svg)

## Underlines and highlights

Underlines highlight the text where changes are being suggested. When hovering over an underline, a highlight is added in order to bring focus to the specific section. The design system supports three categories of underlines: [critical](#critical), [non-critical](#non-critical) and [Pro](#pro).

!\[Three types of underlines color on a text paragraph.]\(/img/patterns/transforms\_all\_underlines.svg)

Highlights and underlines must be legible across all color modes, regardless of whether the global mode is set to light or dark. This is because:

* The app surface may not reflect the global theme (e.g., the app doesn’t support dark mode or overrides it).
* The surface underneath the text is often not under our control and may vary its ability switch modes.

### Critical

We use a red underline to show suggestions that are critical, such as grammatical errors.

!\[Critical highlights and underlines in red on a paragraph of text.]\(/img/patterns/transforms\_critical\_underlines.svg)

#### Underline

The underline color uses the token `color.underline.critical.default`, which is the `red.40` primitive token value. The same color value is used in both light/dark modes.

#### Highlight

The highlight color uses `color.highlight.critical.default`, which is 20% of the `red.40` primitive token value. The same color value is used in both light/dark modes.

### Non-critical

!\[Non-critical highlights and underlines in blue on a paragraph of text.]\(/img/patterns/transforms\_non-critical\_underlines.svg)

#### Underline

The underline color uses the token color.underline.noncritical.default, which is the blue.40 primitive token value. The same color value is used in both light/dark modes.

#### Highlight

The highlight color uses the token color.highlight.noncritical.default, which is 20% of the blue.40 primitive token value. The same color value is used in both light/dark modes.

### Pro

!\[Pro highlights and underlines in yellow on a paragraph of text.]\(/img/patterns/transforms\_pro\_underlines.svg)

#### Underline

The Pro underline has two colors to ensure both aesthetic and accessibility. Underline color uses the tokens `color.underline.pro.default` and `color.underline.pro.subdued`, which are the `yellow.80` and `yellow.40` primitive token values. The same color values are used in both light/dark modes.

#### Highlight

The highlight color uses the token `color.highlight.pro.default`, which is 20% of the `yellow.40` primitive value. The same color value is used in both light/dark modes.

## Accessibility

The `del` (removing text), `ins` (inserting text) , and `mark` (highlighting text) elements are not announced with screen reading technology in an effort reduce verbosity. Instead, ensure the [Screen Reader Only](/utilities/screen-reader-only) utility component is used to identify information that is apparent only from the visual design and not otherwise explicitly communicated.

## References

* [Text transforms, underlines and highlights component (Figma)](https://www.figma.com/design/boHs6JzXxhzm1QCiMLUSYi/GDS-Design-Toolkit?node-id=31330-507)
* [Inline Assist System (Figma)](https://www.figma.com/design/3uVQ894qui9k05PNT1c9It/Inline-Assist-System?node-id=1907-10606\&t=5rLzqttiiofAgq0v-0)
