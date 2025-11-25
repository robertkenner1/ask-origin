# Windows and Mac

How the Grammarly widget works through our desktop apps.

:::caution Editor’s note:
Your Grammarly widget will differ from the end user’s experience due to internal experiments. Origin documents address the current user-facing UI.
:::

## Anatomy

!\[Anatomy diagram of a Grammarly widget for Windows and Mac]\(/img/patterns/widget/widget-mac-win-anatomy.svg)

WidgetDrag handle iconGenerative AI Icon ButtonG logomark Icon ButtonSettings Icon Button

## Position

In Grammarly for Windows and Mac, a user controls the position of the Grammarly widget in each app.

Anchor points appear close to the writing surface when a user clicks and drags the widget. A user can then drop it in a convenient location—away from their content and app controls.

!\[Diagram showing the Grammarly widget location anchor positions that are available.]\(/img/patterns/widget/widget-mac-win-position.svg)

Within a messaging app, for example, a user might move the widget to different anchor points to
avoid covering content or controls at different window sizes relative to their screen.

!\[Diagram showing the Grammarly widget location anchor positions that are available.]\(/img/patterns/widget/widget-mac-win-position-application.svg)

Applications where writing doesn’t occur in a specific text field, such as Excel and Powerpoint, offer anchor points in locations that won’t interfere with the writing surface.

## States

### Active

When no suggestions are available, the widget appears in the active state and displays only the G logomark Icon Button.

!\[The Grammarly widget displays the generative AI icon and Grammarly logomark icon in green when active.]\(/img/patterns/widget/widget-mac-win-active.svg)

### Expanded

When a user hovers on or moves focus to the widget, it expands to display the generative AI lightbulb Icon Button. With a longer pause, a settings Icon Button also appears and allows a user to activate a menu with tools for managing the widget.

!\[The expanded state of the Grammarly widget shows the settings icon that when clicked opens a menu.]\(/img/patterns/widget/widget-mac-win-expanded.svg)

The settings Icon Button appears on hover or focus. A user gets a list of options when they
activate it, including the ability to turn off Grammarly or open a settings Modal.

### Suggestions counts

When suggestions are available, the G logomark changes to a circular outline around a count of the suggestions. Activating the count displays more detail about suggestions for a user to review.

A single color communicates a category for all of the suggestions. A gradient indicates suggestions from multiple categories.

| State                                                                                                                                                                             | Description                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| !\[A blue circle indicates clarity suggestions]\(/img/patterns/widget/widget-mac-win-clarity.svg)                                                     | Clarity                    |
| !\[A red circle indicates correctness suggestions]\(/img/patterns/widget/widget-mac-win-correctness.svg)                                              | Correctness                |
| !\[A purple circle indicates delivery suggestions]\(/img/patterns/widget/widget-mac-win-delivery.svg)                                                 | Delivery                   |
| !\[A green circle indicates engagement suggestions]\(/img/patterns/widget/widget-mac-win-engagement.svg)                                              | Engagement                 |
| !\[A red and purple gradient circle indicates correctness and delivery suggestions]\(/img/patterns/widget/widget-mac-win-correctness-delivery.svg)    | Correctness and Delivery   |
| !\[A red and green gradient circle indicates correctness and engagement suggestions]\(/img/patterns/widget/widget-mac-win-correctness-engagement.svg) | Correctness and Engagement |

### Maximum value

The suggestion count can display up to four digits. For all values after 999, the widget displays 999+. The font size decreases as the number of digits increases so that the text fits within the circular outline.

!\[Suggestion counts showing how the font size gets smaller as it increases from one to four characters.]\(/img/patterns/widget/widget-mac-win-counter.svg)

### Tone detection

When Grammarly detects a tone in the user’s writing, an emoji replaces the G logomark Icon Button. Activating the emoji Icon Button displays more information and any additional tones that are detected.

!\[A smiley face emoji replaces the G logomark Icon Button to indicate that tone suggestions are available.]\(/img/patterns/widget/widget-mac-win-tone.svg)

### Inactive

When the widget is inactive, the G logomark appears with a subdued background.

!\[A gray G logomark Icon Button indicates that the Grammarly widget is inactive.]\(/img/patterns/widget/widget-mac-win-inactive.svg)

#### Causes of inactive state

Different conditions can cause the widget to become inactive on each operating system. These conditions can be system or application related or caused by the user or the organization administrator. The most common causes are an app error or the user choosing to temporarily block suggestions for an app or website.

## Related resources

- [Brand Vault](https://brand.grammarly.com/)
- [Iconography](/foundations/iconography)
