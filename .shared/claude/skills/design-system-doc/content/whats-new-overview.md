# What's new

## Origin v0

### 0.2.0 (November 20, 2025)

Updated
- Icon: Added Translator and Explainer agents icons
- Link: Standardized Link component prop types
- ThemeProvider: Added Superhuman theme and removed Genesis theme

### 0.1.0 (November 17, 2025)

Fixed
- Combobox: Fixed tokens usage for hover state
- Link: Fixed focus styling and keyboard interaction in Shadow DOM
- RadioGroup: Fixed focus styling
- Button: Fixed focus styling and keyboard interaction in Shadow DOM
- IconButton: Fixed focus styling and keyboard interaction in Shadow DOM
- Switch: Fixed focus styling and keyboard interaction in Shadow DOM

Updated
- Removed support completely for the `ColorSchemeProvider`

## Version 7.x (Beta)

:::info
Version 7.x is currently in beta. [Learn more about installing beta versions](/getting-started/engineers/web#installing-beta-versions).
:::

### 7.0.0-beta.4 (October 28, 2025)

Fixed
- Link: Fixed focus styling in Shadow DOM
- Button: Fixed focus styling and keyboard interaction in Shadow DOM
- IconButton: Fixed focus styling and keyboard interaction in Shadow DOM

Updated
- RadioGroup: Updated focus styling
- Switch: Updated focus styling

### 7.0.0-beta.3 (October 17, 2025)

Updated
- Refined component-specific tokens for the Genesis Theme

### 7.0.0-beta.2 (October 14, 2025)

New
- Introduced `ThemeProvider` for color mode and theme configuration

Updated
- Refreshed tokens for `Button`, `ButtonAsLink`, and `IconButton`
- Checkbox: Fixed focus styling for `Checkbox` and `CheckboxGroup`

Fixed
- Combobox: Improved behavior in Shadow DOM
- ButtonAsLink: Resolved focus state in Shadow DOM
- Button: Fixed SaaS build errors
- SearchField: Corrected Space key behavior in `SearchField` clear button
- RadioButton: Fix focus indicator in Shadow DOM

---

## Version 6.x

### 6.44.0 (October 28, 2025)

New
- Icon: Added new AI Rewriter agent icon

### 6.43.0 (October 13, 2025)

Updated
- Logo: Add `height` and styling props to the Logo component
- Button: Allow linking Button to a form

### 6.42.0 (October 9, 2025)

New
- Logo: A Logo component that displays all brand logos across products in multiple formats
- Added new token for focus state and refactor all component focus states
- Added new token for interactive element background and assign it to radio button and checkbox selected state background

Updated
- Icon: Brand-color tokens for Agent icons that automatically adjust between light and dark modes
- Icon: New size variant `xxlarge` to icon component
- Menu: Added an `onClose` hook

Fixed
- Icon: Refined `createIcon` to include an internal `__source` tag, ensuring extra props like `resourcePrefix` are applied only when appropriate

### 6.41.0 (September 12, 2025)

New
- Icon: Added Superhuman and Superhuman Mail logos

Updated
- Icon: Updated Grammarly and Coda logos with new names and updated tokens for color modes

### 6.40.0 (September 4, 2025)

New
- Rating: A component to collect feedback via selectable star rating
- Icon: Added Plus icon
- Icon: Added Go Chat Agent icon
- Added new tokens for Grammarly and Coda logos and updated the SVG file to use them correctly

Updated
- Icon: Agent SVG icons now use CSS variables for brand colors to improve dark mode compatibility

### 6.39.0 (August 21, 2025)

New
- Modal: Added a `target` prop to allow a `Modal` to render into a specified element

Fixed
- Icon: Fixed issue where hiding the first instance of an Icon breaks rendering of subsequent instances

### 6.38.0 (August 12, 2025)

Updated
- Button: Updated icon sizing in the `medium`, `large`, and `xlarge` variants of `Button` and `ButtonAsLink` for improved visual alignment

Fixed
- Button: Avoided showing focus outline on mouse interactions
- Menu: Improved handling for shadow DOM events in `Menu`'s `userInteractOutside` callback
- Modal: Fixed first focusable element getting skipped on initial render and the interactive elements with negative `tabIndex` being in tab order

### 6.37.0 (July 31, 2025)

New
- Icon: Added Plagiarism, Detect AI Text, and Deep Writer placeholder Agent illustrations

Fixed
- Icon: Updated the color for AI Vocabulary placeholder Agent icon
- Icon: Removed placeholder Authorship and Tone Assistant Agent icons
- Menu: Updated `MenuItem` to accept other `HTMLLIElement` props and `className`

### 6.36.0 (July 17, 2025)

New
- `Green40` updated to `#15A694` for 3:1 contrast. Added text highlight tokens
- Icon: Added latest Agent icons
- Icon: Added StatusCheck icon
- Icon: Added Credit Card icon and fixed positioning in Rounded Lock icon
- Icon: Added a 32px variant

Fixed
- Popover: Removed `onPointer` events from required props
- Button: Fixed persistent focus state when disabled

### 6.35.1 (June 23, 2025)

Fixed
- Text: Recalculate truncation when maxLines changes

### 6.35.0 (June 17, 2025)

New
- Icon: Adding placeholder Agents icons

### 6.34.0 (June 5, 2025)

New
- Icon: Added Chess and Rewrite icons for AI Control settings
- Icon: Removed outdated Coda logo and added all Coda logomark and logotype logos

Fixed
- Tag: Visual updates to variants by deprecating `business` `addition` and `deletion` and adding `brand` and `inverse`
- Textarea: Fixed focus styling issue when resizing
- Checkbox: Fixed keyboard interaction

### 6.33.3 (May 29, 2025)

Fixed
- Tooltip: Fix hover effect for mouse input

### 6.33.2 (Apr 25, 2025)

Fixed
- Switch: Fix Switch disabled=false

### 6.33.1 (Apr 25, 2025) (Deprecated)

:::danger
Deprecated. Contains bug in Switch component that was fixed in 6.33.2.
:::

New
- Icon: Adding a globe interface icon

Fixed
- Switch: Fix usages of useId hooks in Switch

### 6.33.0 (Apr 17, 2025) (Deprecated)

:::danger
Deprecated. Introduced bugs with Switch component fixed in 6.33.1 and 6.33.2.
:::

New
- Icon: Adding spot illustrations for MEG targeted uphooks

[Switch](/components/switch)

- Fix keyboard interaction for Switch when space key is held down
- Pass aria-describedby attribute to Switch's underlying element
- Add focus styling for Switch within Shadow DOM (for browsers that support :has)

### 6.32.0 (Mar 26, 2025)

New
- Added additional radius token values for 6px, 10px, 16px, 20px, 24px, and 100px
- Icon: Adding new App, Authorship, Interface, and Logo icons
- Add 14 new Interface icons [View all Iconography](/foundations/iconography)

### 6.31.1 (Mar 21, 2025)

New
- Icon: Added 'off' state icons for Personalized Insights and Smart Dictionary.
- Add 2 new icons. [View all Iconography](/foundations/iconography)

### 6.31.0 (Mar 19, 2025)

New
- Icon: Updated and added Consent Management icons
- Add 4 new icons. [View all Iconography](/foundations/iconography)

- Update 3 icons. [View all Iconography](/foundations/iconography)

### 6.30.0 (Feb 27, 2025)

New
- Accordion: Add new component for expanding and hiding content
- Icon: Added icons for new file types and Authorship
- Illustration: Added new spot Illustrations for Locked UI

Fixed
- Modal: Improved focused element handling with dynamically expanding Modal forms

### 6.29.0 (Feb 20, 2025)

New
- Checkbox: Add new sizes `large` and `xlarge`
- RadioGroup: Add new sizes `large` and `xlarge`
- PlanTag: Add `business` and `premium` variants for legacy plans

### 6.28.0 (Feb 13, 2025)

New
- Switch: Add new sizes (`small`, `large`, `xlarge`) for Switch

Fixed
- Menu: Fix a bug where clicking a menu item with an `href` fails to navigate to the URL

### 6.27.0 (Feb 05, 2025)

New
- SkeletonLoader: Add new `large` and `xlarge` sizes to SkeletonLoader's Button variant
- Illustration: Add new illustrations for celebration and issues

### 6.26.0 (Jan 22, 2025)

New
- Illustration: Add new Illustration component to show larger illustrations within product
- Flex: Add `align-self` property for items inside a Flex

Fixed
- ColorSchemeProvider: Fix matchMedia usage in ColorSchemeProvider in Safari 13
- Modal: Fix accessibility issue with some components inside of modals
- Tag: Update star icon for Pro Tag

### 6.25.0 (Jan 08, 2025)

Happy New Year!

New
- Update Pro color tokens and components to use new Gold color palette. This affects the Pro variant of Button, Badge, Tag, Plan Tag, and Sticker. Please note that the design updates of this change may break visual snapshots.
- Icon: Add filetype icons for TXT, PDF, and DOC

Fixed
- Fix usePrefersReducedMotion hook in Safari 13

### 6.24.1 (Dec 13, 2024)

Fixed
- LiveAnnouncer: Fix CSS issue when LiveAnnouncer is used in shadow DOM

### 6.24.0 (Nov 27, 2024)

New
- Text: Add `maxLines` prop to truncate Text or Heading content
- Icon: Update logo Icons to account for light and dark mode
- Icon: Add new filled star icon to represent Pro accounts

Fixed
- Button: Fix over-specified alignment when inside a flexbox (removed `align-self: start`)
- TextField: Update error message styling for Inputs and VerificationCode

### 6.23.0 (Nov 07, 2024)

New
- TextField: Add new sizes for TextField and SearchField. Please note that the design updates of this change may break visual snapshots.
- Button: Add new sizes and visual updates to Button, IconButton, and ButtonAsLink for WDK alignment. Please note that the design updates of this change may break visual snapshots.

Fixed
- Menu: Fix issue with click events not firing for Menu in shadow DOM

### 6.22.0 (Oct 23, 2024)

New
- Tabs: New Tab sizes and updated overflow pattern to support larger UI surfaces, in partnership with WDK
- Add 3 new icons. [View all Iconography](/foundations/iconography)

Fixed
- Button: Remove hover and pressed states when Button is loading
- Modal: Fix role for the overlay in Modal to improve accessibility
- Tabs: Fix focus order bug when keyboard navigating

### 6.21.1 (Oct 08, 2024)

New
- Button: Add `isLoading` prop to show inner CircularLoader

Fixed
- CircularLoader: Fix rotation bug in Firefox
- ScreenReaderOnly: Fix potential issue causing scrollbars for layouts using 100vh

### 6.21.0 (Sep 25, 2024)

New
- [Tokens](/tokens): Add new Blur tokens to obscure UI at varying levels

Fixed
- Menu: Multiple improvements to the keyboard navigation, structure, and screen reader support. Menu is no longer in beta.
- Icon: Improve contrast of semantically colored icons when variant is `inverse`
- [Tokens](/tokens): Update elevation token border values for light and dark modes

### 6.20.0 (Sep 5, 2024)

New
- Menu: Add new Menu component for showing actions or navigation where there are space constraints
- VerificationCode: Add new VerificationCode component for accepting a one-time code
- Box: Add new Box primitive component for easy access to GDS tokens

Fixed
- Icon: Fix appearance of InterfaceOK and other semantically colored icons in dark mode
- PlanTag, SearchField, Textarea: Fix minor CSS issues revealed by webkit visual tests

### 6.19.1 (Aug 14, 2024)

Fixed
- ButtonAsLink: Fix issue where `download` prop wasn't properly passed through to the anchor
- Combobox: Fix issue with the alignment of the clear icon button
- Modal: Fix styling and usability issues when appearing inside a shadow DOM

### 6.19.0 (Aug 06, 2024)

New
- ButtonAsLink: Add new ButtonAsLink component for Links that look like Button
- Flex: Add `elevation` prop to Flex
- LiveAnnouncer: Add LiveAnnouncer functionality into Toast and Loaders

Fixed
- Loaders: Fix type error in Loader props for `children` prop

### v6.18.0 (July 23, 2024)

New

#### New components
- BrandedLoader: Add new Branded Loader component to enhance full-page loading with a captivating flourish
- CircularLoader: Add new Circular Loader component to indicate content on a page is loading or a user's request is being processed
- LiveAnnouncer: Add LiveAnnouncer utility component that provides real-time updates to users, particularly those who rely on assistive technologies such as screen readers

#### New features

- Tokens: Add refreshed semantic elevation tokens with values that behave better in dark mode
- PlanTag: Add new EDU variant for Education
- Icon: Add no-connection icon to the interface icon set

Fixed
- Badge: Fix className prop application in Badge and ensure height is set to inner content height
- Combobox: Ensure spans inside custom Combobox items get correct text color when focused
- IconButton: Fix contrast issue with ghost variant while hovering
- Heading: Fix font-feature-settings so characters display in a more readable format
- SkeletonLoader: Added progressbar role to SkeletonLoader for a more accessible experience
- Text: Fix font-feature-settings for Inter to disambiguate similar letters
- Add @types/react as a dependency because we export dependent types

### v6.17.0 (July 03, 2024)

New
- Button: allow children prop for cases when string-only `text` is too restrictive
- Add an interface sparkles icon: InterfaceSparklesIcon

### v6.16.1 (June 26, 2024)

Fixed
- Button: Fix issue with missing CSS variables in shadow DOM
- Tooltip: Update styling of annotations

### v6.16.0 (June 13, 2024)

New
- Button: Add Pro and Enterprise variants
- PlanTag: Add new Plan Tag component
- Sticker: Add new Sticker component
- Tag: Add Pro variants of Tag and Badge

- Add 3 new icons. [View all Iconography](/foundations/iconography)

Fixed
- Checkbox: Fix regression where `onChange` is not called when `labelDisplay` is `hidden`
- Switch: Fix leaking `position: absolute` that causes major layout issue in Account Hub
- Add `index.min.css` file with minified CSS

### v6.15.0 (May 30, 2024)

New

- Select: Add Select component for choosing a single item from a list of options
- Flex: Add `color` and `paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight` props
- Icon: Add an app icon for Grammarly Translate

Fixed
- Checkbox: Fix minor label alignment issues
- Form components: Improve cursor consistency on hover
- Popover: Lower minWidth of Popover to 225px
- SearchField: Fix types to only allow useful props
- SkeletonLoader: Simplify linear gradient CSS to avoid Stylus issue in funnel

### v6.14.0 (Apr 30, 2024)

New
- Introduce `semibold` and `medium` font-weights across components [View all Typography styles](/foundations/typography)
  - Small, xsmall, and xxsmall Headings change to `semibold` (large and medium remain `bold`)
  - Labels for Checkbox, Combobox, Radio, Select, Switch, Textarea, and Text Field change to `medium`
  - Checkbox Group legends and Radio Group legends change to `semibold`
  - Fieldset legends change to `semibold` and font-size increases to 16px
- Fonts: Add additional font-faces at new font-weights for preloading
  - [Learn more about loading fonts and performance impacts](/getting-started/engineers/web#optional-fonts)
- Tag: Add an `iconStart` prop to allow for icons within Tags and add an `inline` prop to properly align Tags near Text and Headings

Fixed
- IconButton: Fix an issue where IconButtons with certain icons are too narrow

### v6.13.0 (Apr 17, 2024)

New
- SkeletonLoader: Add new component that provides an abstract preview of loading content
- ColorSchemeProvider: Add utility component to make it easy to convert UI between light and dark modes
- Button: Add `critical` variant to indicate destructive or risky actions

- Add 5 new icons. [View all Iconography](/foundations/iconography)

### v6.12.0 (Apr 10, 2024)

New
- Tag: New `Tip` variant to Tag that signals an insight or tip to users. You can use it with or without an icon.
- [ScreenReaderOnly](/utilities/screen-reader-only): Add context for assistive technologies with the new Screen Reader Only utility component. Now you don't have to import the Visually Hidden component from React Aria.
- [PortalContainerProvider](/utilities/portal-container-provider) (Beta): Add utility component that globally configures the portal for components like Modal and Tooltip using a React context. Particularly useful when working in shadow DOM situations.

### v6.11.0 (Mar 14, 2024)

New
- Heading: Update to use Matter font, if available
- Heading: Add `heading-xxsmall` variant (similar to `text-small`)
- Add export for `fonts.css` to provide font-faces
  - [Learn more about loading fonts and performance impacts](/getting-started/engineers/web#optional-fonts)
- Modal, Popover: Add `onShow` and `onHide` event handlers

Fixed
- Popover: Fix issue with dismissing when clicking other Buttons on the page
- Popover: Update `title` to use `heading-xxsmall`
- Form: Fix alignment on legend with optional or required indicator

### v6.10.1 (Mar 5, 2024)

New
- [Tooltip](/components/tooltip): Add `onShow` and `onHide` props
- Add a token `color-border-elevated-default`

Fixed
- [Toast](/components/toast), [Tooltip](/components/tooltip): Update the border color
- [Button](/components/button): Ensure app `<kbd>` styles don't bleed in
- [Button](/components/button): Adjust internal spacing to match Figma

### v6.10.0 (Feb 28, 2024)

New
- Add the [Popover](/components/popover) component to display rich content in relation to another element on the screen
- Add [Content guidelines and best practices](/content) to reference when writing within the Superhuman product

Fixed
- [Badge](/components/badge): Update the minimum width from 20px to 18px to make the shape circular when the number 1 is used
- [Combobox](/components/combobox): Fix an accessibility bug where the screen reader announced "Menu closed" for every Combobox on mount
- [Icon](/components/icon): Fix stroke/fill thickness issues when certain Icons use non-default variants
- [Tooltip](/components/tooltip): Fix z-index issue when inside a Modal

### v6.9.2 (Feb 21, 2024)

New
- Add a new token `color-background-base-inverse` to support dark mode
- Add a new icon for Account Hub. [View all Iconography](/foundations/iconography)

### v6.9.1 (Feb 6, 2024)

Fixed
- Allow common HTML attributes like `data-*` on all components
- [Badge](/components/badge), [Tag](/components/tag): update colors used for premium variants
- [Button](/components/button): improve styling for inverted buttons
- [IconButton](/components/icon-button): remove duplicate label, add ability for separate aria and tooltip content
- [Toast](/components/toast): improve styling

### v6.9.0 (Jan 24, 2024)

New

**This update to GDS introduces the new colors for the 2024 Brand Refresh.**

All color tokens have been updated to align with the new Brand palettes, and a [codemod](https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/blob/main/codemods/README.md?ref_type=heads#brand-refresh-color-tokens-2024-v680-v690) is available to help update deprecated core tokens.
While this is not a breaking change, _visual tests may fail_, so plan for extra time to update those tests.

**⚠️ Deprecated color tokens:**

- All BlueGray tokens
- All Magenta tokens
- NeutralGray 5, 35, 50, and 70

If you are using GDS, update at your earliest convenience to get the token and component updates automatically.

If you are not using GDS, use the [Color Mapping Spreadsheet](https://docs.google.com/spreadsheets/d/1y65dTkQIkSK7Ig0X7kqX_g7ADWV3CppENizAqzgVOUs/edit?usp=sharing) to make manual updates. The new hex values are listed for every core color token. Replacement tokens are listed for deprecated ones. If you have also declared the semantic colors locally, the cells highlighted in green in the second sheet indicate changes made.

Fixed
- [Badge](/components/badge): improve accessibility for screen readers
- [Textarea](/components/textarea): fix overflow issue with long words
- Deprecate `Text<Size>` and `Heading<Size>` typography in favor of [Text](/components/text) and [Heading](/components/heading) components
- Bundle size improvements:
  - Improve tree-shaking (especially for Webpack) by preserving modules
  - Optimize generated icon SVGs

### v6.8.0 (Jan 9, 2024)

Happy New Year!

New
- New Grammarly logos for the 2024 brand refresh are now available as [icons in our Iconography library](/foundations/iconography#logos-2024-brand-refresh).

Fixed
- Improve tree-shaking for compound components like Modal and Tabs
- Update build target to es2019 from es2015

### v6.7.0 (Dec 19, 2023)

New
- Add the [Link](/components/link) component for navigating to another page or among sections of a page

Fixed
- [Icon](/components/icon): fix issue with some SVG content when inverted

### v6.6.0 (Dec 12, 2023)

New
- Add the [Tabs](/components/tabs) component for navigating among related panels of content within a page

Fixed
- [Modal](/components/modal): update the spacing between the Heading and close Icon Button
- [RadioGroup](/components/radio-group): fix the cursor style on hover of RadioButtons
- [Icon](/components/icon): improve types for raw icons

### v6.5.0 (Dec 5, 2023)

New
- [Button](/components/button), [IconButton](/components/icon-button): add `accessibilityExpanded` prop
- [Combobox](/components/combobox): add `defaultSelectedItem` prop to Combobox
- [Flex](/components/flex): allow `gap` to specify only row or column
- [Flex](/components/flex)/[Heading](/components/heading)/[Text](/components/text): support short-hand `margin` values like `0 auto`
- [Tag](/components/tag): add `accessibilityLabel` prop
- [TextField](/components/text-field): allow `type` number, date, time, and datetime-local
- [TextField](/components/text-field), [Textarea](/components/textarea): allow `spellCheck` prop
- [TextField](/components/text-field), [SearchField](/components/search-field): pass through ARIA attributes like `aria-controls`

- We've added three new icons. [View all Iconography](/foundations/iconography)

Fixed
- [Badge](/components/badge): small style tweaks when count is low
- [Button](/components/button): update types to show that `onClick` is optional
- [Checkbox](/components/checkbox):
  - Fix incorrect cursor on helper text
  - Fix `errorMessage` preventing checking in some cases
  - Update how `aria-describedby` is handled in Checkbox
- [Combobox](/components/combobox): fix vertical layout and large scroll area
- [Modal](/components/modal): tighten up header spacing

### v6.4.1 (Nov 15, 2023)

Fixed
- Fix overflow issue within Combobox input

### v6.4.0 (Nov 14, 2023)

New
- Added the [Combobox](/components/combobox) component for selecting an item by browsing or filtering a list.
- [Icon](/components/icon) now has an `inherit` variant for easily matching the surrounding text color.

### v6.3.1 (Nov 7, 2023)

Fixed
- Fix workspace dependency issue

### v6.3.0 (Nov 7, 2023)

New

- [Flex](/components/flex) now supports the `bgColor` prop for adding a background color.

- We've added six new icons. [View all Iconography](/foundations/iconography)

Fixed
- [Toast](/components/toast) now has proper spacing regardless of inherited line-height.

### v6.2.0 (Oct 17, 2023)

New

- Added 3 new components:

  - [Toast](/components/toast)
    - Toast is used for temporary confirmations, updates, or warnings. We'll follow up soon with improvements like stacking, duration, accessibility announcements, and more.
  - [Text](/components/text) and [Heading](/components/heading)
    - These utility components include variants that make applying the colors, sizing, and spacing from our tokens easy.

- We've added six new app icons and two new interface icons. [View all Iconography](/foundations/iconography)

Fixed
- [Tooltips](/components/tooltip) now include a border for better contrast against dark backgrounds.
- The [Icon](/components/icon) component's `aria-hidden` property is now automatically adjusted based on the content of the `accessibilityLabel` prop. [Learn more about Icon accessibility](/components/icon#accessibility).
- [Button](/components/button) no longer uses the CSS `all: unset`, which was causing issues in some apps.
- We've removed a dangling aria reference in some cases for [Checkbox](/components/checkbox), [RadioGroup](/components/radio-group), and [Switch](/components/switch).

### v6.1.0 (Sep 26, 2023)

New
- [Switch component](/components/switch)
  - Switch is now available in code for options that can be turned on or off instantaneously
- [Storybook URL](https://uifoundation.gpages.io/origin/)
  - Bookmark the new home address of GDS components in Storybook

Fixed
- [Radio Buttons](/components/radio-group) in Firefox now appear visually correct in the selected state.
- Labels and helper text for [Checkboxes](/components/checkbox) and Radio Groups in the `isDisabled` state now have the correct 100% opacity.
- For screen reader users, the focus indicator alignment has been improved for Checkboxes or Radio Groups.

### v6.0.0 (Sep 13, 2023)

Breaking changes

This release includes several breaking changes. We're sorry for the inconvenience, but we believe they will make GDS easier to use in the future.

As always, a [codemod is available](https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/codemods/package-rename-v6) to make the transition smoother.

Let us know in [#ask-origin-design-system (Slack)](https://grammarly.slack.com/archives/C03MNHYDT5E) if there's anything else we can do to ease the migration process.

- New package name! This release and all future ones will be published as `@superhuman/origin`
  instead of `@dsk/core`

  - We know this is a big change, but it was necessary because we don't own [@dsk](https://www.npmjs.com/~dsk) (potential supply chain attack) and the DSK acronym was confusing

  ```diff
  - import { Button } from '@dsk/core/components'
  + import { Button } from '@superhuman/origin'
  ```

- All components are now exported from the top-level package instead of subdirectories

  - We made this change to avoid exposing internals and to simplify your import statements

  ```diff
  - import { Button } from "@dsk/core/components/button";
  - import { Icon } from "@dsk/core/components/icon";
  - import { TextSmall } from '@dsk/core/typography'
  + import { Button, Icon, TextSmall } from "@superhuman/origin";
  ```

- CSS styles are now bundled into a single file for convenience

  - `index.css` (or simply `@import "@superhuman/origin"`) file for normal uses cases
  - `shadow.css` for cases where `:host` is preferable to `:root` ([learn more](/getting-started/engineers/web#installation))

  ```diff
  - /* foundation styles */
  - @import url("@dsk/core/tokens/colors");
  - @import url("@dsk/core/tokens/semantic_colors");
  - @import url("@dsk/core/tokens/space");
  - @import url("@dsk/core/tokens/radius");
  - @import url("@dsk/core/typography/inter.css");
  - /* component styles */
  - @import url("@dsk/core/components/button/index.css");
  + @import "@superhuman/origin";
  ```

- Icons are now top-level exports just like components, and include a suffix of "Icon" for ease of autocompleting (and to distinguish from components)

  ```diff
  - import { EmojiAdmiring } from '@dsk/core/icons'
  - import { Icon } from '@dsk/core/components'
  + import { Icon, EmojiAdmiringIcon } from '@superhuman/origin'

  - <Icon icon={EmojiAdmiring} />
  + <Icon icon={EmojiAdmiringIcon} />
  ```

- Heading components now require the `as` prop for accessibility reasons
- Removed components and tokens that were previously deprecated (`HeadingLevel1`, `SemanticBrushes.ColorBackgroundAddDefault`, etc)
- Removed tokens for Icon and Typography that were simply class names
- Removed unintentional non-component exports such as `useTooltip`

New
- Added `Radius0` token for border-radius of 0
- Added a small size for Button and IconButton

Fixed
- Updated brand tokens (such as `Color.Background.Brand.Default`) and components to use green according to latest brand guidelines
- Updated value of [Green60](/tokens/color#core-color__Green60) to improve color contrast on gray backgrounds
- Updated Flex to allow the `style` prop
- Added types that consistently match the component name (e.g., `TextFieldProps`) and deprecated old ones (e.g., `GDSTextFieldProps`)

:::info
The 6.0.0 release doesn't yet include Swift and C# tokens. We're working on it and will release them soon.
:::

### v5.4.1 (Aug 31, 2023)

Fixed
- Added an option to access deprecated icons

### v5.4.0 (Aug 16, 2023)

New

New and updated components for Web:

- [Flex component](/components/flex)
  - Flex makes it easy to create layouts based on CSS flexbox
- [Premium Buttons](/components/button#premium)
  - New variant for Buttons and IconButtons related to the Premium version of Grammarly
- [RadioGroup](/components/radio-group) and [CheckboxGroup](/components/checkbox)
  - Added ability to specify `helperMessage` on individual RadioButtons or individual Checkboxes within a CheckboxGroup
- [Icons](/components/icon)
  - Added new icons for [Apps](/foundations/iconography#apps), [GGO actions](/foundations/iconography#grammarly-go-ggo), and [InterfaceSortHorizontal](/tokens)

Fixed
- Added an option to access deprecated tokens

### v5.3.0 (Jul 19, 2023)

New

Added 4 new components for Web:

- [Checkbox components](/components/checkbox)
  - Checkbox Group offers a range of options to a user where they can select zero, one, or many, while a standalone Checkbox can be used to acknowledge an item.
- [Form components](/components/form)
  - Use the Form components to automatically lay out rows of inputs, as well as header and footer content. Available in compact, standard, and spacious densities.
- [Modal component](/components/modal)
  - Allows for completing tasks or displaying information without navigating to a new page.
- [Textarea component](/components/textarea)
  - Accepts multiple lines of text, numbers, or symbols for long-form data entry.

Added new [Contributing to GDS guidelines](/getting-started/contributing)

- Curious about contributing components? We've added sections to the docs to describe the process, highlight the docs template, and detail some of our writing conventions.

Fixed
- Updated Tertiary and Ghosts Buttons to remove a white border when placed on a non-white background
