# Unified Platform Experience

Superhuman's products are delivered on the web, Mac, Windows, Android, and iOS platforms. The Unified Platform Experience ensures that our products maintain a cohesive brand identity while maintaining some platform conventions users expect. This document will assist you in making decisions about when to align to the brand or platform-specific conventions in nuanced scenarios.

## Why this is important

Superhuman users work across platforms in their everyday workflow. We want to enable growth and engagement through a unified brand experience to maintain and grow our product cross-platform presence.

### Additional benefits include:

* Better user experience based on a strong, cohesive brand story
* Lower design and engineering maintenance costs
* Improves accessibility by providing consistent interactions across devices
* Less time spent designing elements across platforms that should align
* Faster design handoff and engineering iterations

## When to use brand conventions

Brand conventions, including foundation styles, components, writing conventions, and interaction patterns, should be prioritized over platform-specific conventions in most cases.

### Exceptions

Some exceptions will help our products feel native and more familiar to users on each platform. Some examples include:

#### Style

* Foundation styles that are an essential part of the product appearing native to a platform.
* Icons used for the same purpose but are visually different across platforms and recognized by users.

!\[Mac window on the desktop showing a Grammarly AI chat interface.]\(/img/patterns/upl-mac-window.png)

Mac Finder windows use opacity for translucency to visually communicate a separation between layers.

!\[The iOS and Android share icons have contrasting designs.]\(/img/patterns/upl-icons.png)

iOS and Android use different icons to mean “share.”

#### Native Components

* When accessibility benefits that would be difficult or impossible to replicate with custom components.
* Native components that provide significantly better user engagement when tested or more engineering reusability.

!\[A calendar component with a green highlight on June 4.]\(/img/patterns/upl-calendar.png)

Date pickers are complex to build while maintaining accessibility.

!\[The Android settings panel for Grammarly showing a native switch component.]\(/img/patterns/upl-components.png)

Components like the native switch are used in the Android Settings menu.

#### Placement

Moving the placement of key actions on certain platforms will cause user confusion.

!\[Mac and windows controls for windows sit on oppositive sides of the header bar.]\(/img/patterns/upl-icon-placement.png)

Close, collapse, and expand buttons appear on the left or right side of a window in Mac and Windows.

#### Interactions

Motion, transitions, and native gestures unique to a platform are naturally expected to function normally.

## Examples

In these examples, toolbars and other app controls remain consistent across the platforms to align with user expectations. Alternatively, the Unified Platform Experience is used for all other elements of the UI to emphasize the Superhuman brand across platforms.

These are notional designs to illustrate how the Assistant might appear across platforms.

!\[Assistant examples across all web and native platforms snow the Unified Platform Experience at work.]\(/img/patterns/upl-notional-design.png)

## Related

* [Foundations](/foundations)
* [Components](/components)
* [Patterns](/patterns)
* [Content](/content)
