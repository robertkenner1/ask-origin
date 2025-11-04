# Changelog

## 7.0.0-beta.4

### Minor Changes

- 9d8e890: Added :focus-visible pseudo-class to Link and removed react-aria usage

### Patch Changes

- 338a3d5: Change focus styling for Radio component
- 3491933: Update Button, IconButton focus styling and keyboard interaction in shadow DOM
- b467c32: Change focus styling for Switch component

## 7.0.0-beta.3

### Minor Changes

- 3e26152d: Updated component specific tokens for the Genesis Theme.

## 7.0.0-beta.2

### Major Changes

- ea6bd5d: Created `ThemeProvider` component, a utility that configures the color mode and theme for all nested elements.
- b9e773b: Fixed Combobox behavior in Shadow DOM. It updates the component architecture to properly support Shadow DOM environments.

### Minor Changes

- 8d176fb: Component-specific tokens for Button, ButtonAsLink, and Icon Button are updated to point to new tokens.
- 760e13c: Fixed ButtonAsLink focus ring not showing up in Shadow DOM.
- ff73d74: Fixed build error in Button styles caused by arithmetic operators in Sass.

### Patch Changes

- c4e77f5: Changed focus styling for Checkbox and CheckboxGroup.
- 65347db: Fixed space key not working for clear button in SearchField.
- 760e13c: Fixed issue where RadioButton focus indicators do not show up in Shadow DOM.

## 7.0.0-beta.1

## 7.0.0-beta.0

## 6.44.0

### Minor Changes

- a6a0f39: Added new AI Rewriter agent icon

## 6.43.0

### Minor Changes

- f8be660: Add height and className props to Logo component

### Patch Changes

- e3a6dcd: Pass through form attribute to button from GDS Button component

## 6.42.0

### Minor Changes

- c1ffd0f: Added tokens for Agent icons to use the correct brand color and change color when switching between light and dark modes.
- 9f8649e: Add new size variant xxlarge to icon component
- 03a2e12: A component that displays all brand logos across the products in a variety of formats.
- f40df6d: Add an `onClose` hook to the menu.
- a06ecb8: Add new token for focus state and refactor all component focus states
- a14a843: Add new token for interactive element background and assign it to radio button and checkbox selected state background

### Patch Changes

- 9193c17: Refined `createIcon` to tag icons with an internal `__source` property, ensuring extra props (e.g., `resourcePrefix`) are only applied where intended.

## 6.41.0

## 6.40.0

### Minor Changes

- 7a24626: Add new Rating component to collect feedback via selectable star rating

### Patch Changes

- 9e760de: Adding a new "plus" icon

## 6.39.0

### Minor Changes

- 59af456: Adds a target property to <Modal target={document.body} /> which can also be set via
  <Modal.Provider value={document.body} />. The property determines the element the modal
  is rendered into. If not set the modal will render in-place.

## 6.38.0

### Minor Changes

- 564437e: Changed the size at which icons are displayed in the medium, large, and xlarge sizes of Button and ButtonAsLink"

### Patch Changes

- fe52001: Handling for shadow DOM events in Menu userInteractOutside callback
- 0ad0a69: Fix first focusable element getting skipped on initial Modal render and fix interactive elements with negative tab index in Modal being in tab order
- fce38e9: Avoid showing focus outline on mouse interactions in Button components

## 6.37.0

### Minor Changes

- 13cecf9: Added Plagiarism and Detect AI Text illustrations
  Added a Deep Writer placeholder Agent icon
  Removed placeholder Authorship and Tone Assistant Agent icons
  Modified the color of the AI Vocabulary placeholder Agent icon

### Patch Changes

- 22beb8a: Update MenuItem to accept other HTMLLIElement props and classname

## 6.36.0

### Minor Changes

- 42f9736: Adding the most recent Agent icons
- fd2b751: Updated Green40 to #15A694 making it achieve 3:1 contrast in more scenarios. Also added highlight tokens for text transforms.
- 7e63cb0: Added a 32px variant to the Icon component"

### Patch Changes

- c3cbc8c: Fix persistent focus state when Button is disabled
- 8810b04: Removed onPointer events from required props in Popover component

## 6.35.1

### Patch Changes

- 8e8e1f3: Recaculate truncation when Text.maxLines changes

## 6.35.0

### Minor Changes

- 1e95b2c: Adding placeholder Agents icons

## 6.34.1

### Patch Changes

- 57f4385: Fixed line-clamped right-aligned text on Chrome, the ellipsis was not showing.
- de6e7fe: Add tabindex to Switch to work around bug in Safari where focus is lost after clicking `<input>`: https://bugs.webkit.org/show_bug.cgi?id=229895

## 6.34.0

### Minor Changes

- 1a11451: Removed an outdated Coda logo and added all Coda logomark and logotype logos."
- 992ff75: Made visual update to Tag components.

### Patch Changes

- dd63a18: Fixed keyboard interaction in the Checkbox component to prevent repeated toggling when holding down the space key. Also fixed an issue where pressing the space key had no effect on Checkbox components inside a CheckboxGroup. It now correctly updates their state.
- f5ddf1f: Fix focus styling issue when resizing Textarea component

## 6.33.3

### Patch Changes

- 49594a6: Tooltip improvements, mouse interaction handling

## 6.33.2

### Patch Changes

- 4ff0bdc: Fix Switch disabled=false

## 6.33.1 [Deprecated: Contains bug fixed in 6.33.2]

### Patch Changes

- 859b8c7: Fix usages of useId hooks in Switch

## 6.33.0 [Deprecated: Contains bug fixed in 6.33.2]

### Patch Changes

- c8bcd11: Fix keyboard interaction for Switch when space key is held down
- a5a9e27: Pass aria-describedby attribute to Switch's underlying element
- 8c92618: Add focus styling for Switch within Shadow DOM (for browsers that support :has)

## 6.32.0

## 6.31.1

## 6.31.0

## 6.30.0

### Minor Changes

- 187557d: Add new Accordion component

### Patch Changes

- d740fc3: Improved focused element handleling with dynamically expanding modal forms

## 6.29.0

### Minor Changes

- cc77522: Add new sizes for Checkbox
- b7b0683: Add business and premium variants for legacy plans
- 417ee42: Add new sizes for RadioGroup

## 6.28.0

### Minor Changes

- 7f2618d: Add new sizes for Switch

### Patch Changes

- 02065d1: Fix bug when menu item has an href

## 6.27.0

### Patch Changes

- 01d444c: Added new sizes to SkeletonLoader's Button variant

## 6.26.0

### Minor Changes

- f0dba3e: Add illustration component
- 0b0dfcd: Add align-self property for Flex

### Patch Changes

- 440c830: Fix matchMedia usage in ColorSchemeProvider in Safari 13
- 60c2798: fixes accessibility issue with some components inside of modals.
- a3eccd4: Update star icon for Pro Tag

## 6.25.0

### Minor Changes

- c9615b3: Update Pro color tokens and components to use Gold
- 491db5b: Added illustration tokens and new illustration files

### Patch Changes

- 66d7736: Fix usePrefersReducedMotion hook in Safari 13

## 6.24.1

### Patch Changes

- fc6a4f3: Fix the liveannouncer css for shadowdom

## 6.24.0

### Patch Changes

- 8e06a78: Heading, Text: Add `maxLines` prop to add ... for long text
- 8fc4bd5: Update error message text size for inputs
- c7d4b34: Button: fix over-specified alignment when inside a flexbox (`align-self: start`)

## 6.23.0

### Minor Changes

- 0ee4302: Add new sizes for TextField and SearchField (will break visual snapshots)
- 0ce3ea3: New sizes and visual updates to Button, IconButton for WDK alignment

### Patch Changes

- 33ad068: Fix click event for menu in shadowDOM

## 6.22.0

### Minor Changes

- a1d6312: New Tab sizes and updated overflow pattern

### Patch Changes

- dd43e60: Remove hover and pressed states when Button is loading
- 58ff61d: Fix role for the overlay in Modal to improve a11y
- a66e99c: Tabs: fix focus order bug when keyboard navigating

## 6.21.1

### Patch Changes

- 9cfa1a0: Button: Add `isLoading` prop to show inner CircularLoader
- a699c30: CircularLoader: fix rotation bug in Firefox
- 632a4d7: ScreenReaderOnly: fix potential to cause scrollbars for layouts using 100vh

## 6.21.0

### Minor Changes

- dea0fd9: Add new Blur tokens

### Patch Changes

- a0ef518: Icon: improve contrast of semantically colored icons when variant is "inverse"
- a0ef518: Add tokens for `color-icon-delivery-default` and variations of `color-icon-*-inverse`
- 70297ef: Menu: fix keyboard navigation sometimes causing the page to scroll
- e3ae4c9: Menu: fix data attributes not being passed correctly
- a460960: Menu: improve a11y for menu component

## 6.20.0

### Minor Changes

- 39b5eba: Add Box utility component
- 3818f27: Add VerificationCode component
- 44607de8: Add Menu component

### Patch Changes

- 8c902adf: Icon: fix appearance of InterfaceOK and other semantically colored icons in dark mode
- ff03cdd: PlanTag: Fix minor CSS issues revealed by webkit visual tests
  SearchField: Fix minor CSS issues revealed by webkit visual tests
  Textarea: Fix minor CSS issues revealed by webkit visual tests

## 6.19.1

### Patch Changes

- eae1077: Add download prop to ButtonAsLink
- c27e58f: ACT-211: Adding property to center button icon for combobox
- 5663c5d: Modal: fix issues when appearing inside a shadom DOM

## 6.19.0

### Minor Changes

- eebf2839: Add Elevation prop to Flex
- bc208492: Add new ButtonAsLink component for Links that look like Buttons

### Patch Changes

- ff281e26: Fix type error in Loader props for children prop

## 6.18.0

### Minor Changes

- 33fd259: Add semantic elevation tokens with values that work better in dark mode
- 030dd9e: Add new Branded Loader component
- 9f08162: add liveAnnouncer component
- 601421b: Add EDU variant to PlanTag
- cb751a0: add live announcer support for loaders and toast

### Patch Changes

- 4d37d1e: Ensure spans inside custom Combobox items invert when focsued
- 030dd9e: Added progressbar role to SkeletonLoader
- 658e143: IconButton: fix contrast issue with ghost variant while hovering
- 6801e69: Fix className prop overriding badge classname
- 2380a0d: Heading: fix font-feature-settings so proper "a" character displays ("a" vs less readable "ɑ")
- ceffc21: Add @types/react as a dependency because we export dependent types
- 2380a0d: Text: fix font-feature-settings for Inter to disambiguate "I" from "l"
- 1bc0ed7: Ensure Badge stays at height of content

## 6.17.0

### Minor Changes

- 460de4b: Button: allow children prop for cases when string-only `text` is too restrictive
- df9a6bb: Add an interface sparkles icon: InterfaceSparklesIcon

## 6.16.1

### Patch Changes

- 34497df: Fix issue with missing Button CSS variables in shadow-dom
- 5d14f34: Update styling of annotations in Tooltips

## 6.16.0

### Minor Changes

- 327deae: Add Pro and Enterprise buttons
- 8efeacb: Add Pro variants of Tag and Badge
- 260392a: Add new Plan Tag component
- ebd2d8c: Add Sticker component

### Patch Changes

- f033efe: Add index.min.css file with minified CSS
- 156df3a: Checkbox: fix regression where `onChange` is not called when `labelDisplay` is `hidden`
- 3a79ba0: Switch: fix leaking `position: absolute` that causes major layout issue in Account Hub

## 6.15.0

### Minor Changes

- da03c6f: Add Select component
- 046cad1: Flex: Add color and paddingTop, paddingBottom, paddingLeft, paddingRight props

### Patch Changes

- 0009cb2: Checkbox: fix minor label alignment issues
- d2b99aa: SkeletonLoader: simplify linear gradient CSS to avoid Stylus issue in funnel
- 0009cb2: Form components: improve cursor consistency on hover
- b0d4bda: Lower minWidth of Popover to 225
- 0009cb2: SearchField: fix types to only allow useful props

## 6.14.0

### Minor Changes

- 25d642d: Tag: add `inline` prop for displaying inline instead of block
  Tag: fix undesirable inheritance of font-weight from parent
- 75378ea: Text: Allow more `weight` options
- 75378ea: Heading: Reduce font-weight to semibold at smaller sizes
- 2de0e5f: Tag: Add ability to add an icon at start of Tag

### Patch Changes

- 75378ea: Form components: Slightly increase label weight (regular => medium)
  FormFieldset: Increase legend weight and font size
- c0f14e4: Update `react-aria` dependency to be broader to help avoid duplication issues in Extension bundles
- 4949a1f: IconButtons: Ensure width of IconButton at each size

## 6.13.0

### Minor Changes

- 155487d: Add SkeletonLoader component
- b286ad2: Add Critical variant of Button
- 6740581: Update ColorSchemeProvider to account for nested modes

## 6.12.0

### Minor Changes

- 2a0b887: Add PortalContainerProvider component to configure outlets for different portals used in the components like Modal, Tooltip, etc.
- 004e37b: Tag: Add new Tip variant

## 6.11.0

### Minor Changes

- e56f33f: Add export for `fonts.css` to provide font-faces
- e56f33f: Add token `heading-xxsmall` token (similar to `text-small`)
- e56f33f: Heading: update to use Matter font, if available

### Patch Changes

- e56f33f: Popover: update `title` to use `heading-xxsmall`
- a470dc3: Popover: close even when you're clicking on other Buttons on the page
- 4dd202a: Modal, Popover: Add onShow and onHide event handlers to Modal and Popover
- a569d30: Form: Fix alignment on legend with optional or required indicator

## 6.10.1

### Patch Changes

- df3f5c1: Add token for elevated borders
  Update border color in light mode for Toast and Tooltip
- 89d3e3e: Add draft of ScreenReaderOnly component (aka VisuallyHidden)
- dcc7a26: Ensure kbd styles don't bleed into button styles
- 8642097: Button: adjust internal spacing to match Figma
- 903644a: Tooltip: add `onShow` and `onHide` props

## 6.10.0

### Minor Changes

- 3430a1e: Add Popover component to display rich content
- 5401282: Updated the Badge minimum width from 20px to 18px to make the shape circular when the number 1 is used.

### Patch Changes

- 16d2164: Fix bug where combobox announce menu closed on mount
- a51e69d: Icon: fix stroke/fill thickness issues with certain icons and variants
- b1e1f51: Tooltip: fix z-index issue when inside Modal

## 6.9.2

### Patch Changes

- 65a43e4: Add token `Color.Background.Base.Inverse`

## 6.9.1

### Patch Changes

- 015bd85: Add styling for inverted buttons
- 0e97ba8: Update colors used for Premium color tokens
- 5a2fdcf: Allow common HTML attributes like `data-*` on all components
- a538cdd: Update IconButton to remove duplicate label, add ability for separate aria and tooltip content

## 6.9.0

### Minor Changes

- c02e7ba: Deprecate Text<Size> and Heading<Size> typography in favor of Text and Heading components
- 11e986a: Update color tokens for Brand Refresh 2024

### Patch Changes

- 42a711e: Badge: improve accessibility for screen readers
- 2802d78: Preserve modules in `dist` to improve tree-shaking (especially in webpack)
- c02e7ba: Textarea: fix overflow issue with long words

## 6.8.0

### Minor Changes

- ac169b6: Update build target to es2019 from es2015.

### Patch Changes

- ac169b6: Improve tree-shaking for compound components like Modal and Tabs

## 6.7.0

### Minor Changes

- 6388bed: Add Link component

### Patch Changes

- 7f3ac83: Fix issue with Icon paths in inverse

## 6.6.0

### Minor Changes

- 7781290: Add new Tabs component

### Patch Changes

- 5954faa: Update cursor for RadioButton
- e0df48f: Add spacing between Modal heading and close button
- b201342: Icon: improve types for raw icons

## 6.5.0

### Patch Changes

- 5c9519f: Flex/Heading/Text: support short-hand `margin` values like `0 auto`
- 5c9519f: Button: update types to show that `onClick` is optional
- aa70912: Add defaultSelectedItem prop to Combobox
- 5c9519f: Checkbox: fix incorrect cursor on helper text
- e132e86: Update TSDoc for Checkbox
- 5c9519f: Flex: allow `gap` to specify only row or column
- 5c9519f: Checkbox: fix `errorMessage` preventing checking in some cases
- 5c9519f: Tag: allow `accessibilityLabel` prop
- cd5bcd6: TextField: allow `type` number, date, time, and datetime-local
  TextField: allow `spellCheck` prop
  Textarea: allow `spellCheck` prop
- 86edb51: Button, IconButton: add `accessibilityExpanded` prop
  TextField, SearchField: pass through aria attributes like `aria-controls`
- 5c9519f: Modal: tighten up header spacing
- 7b0a267: Update how `aria-describedby` is handled in Checkbox
- c46c666: Fix vertical layout and large scroll area of Combobox
- 0bd2b2f: Add missing component type exports
- 5c9519f: Badge: small style tweaks when count is low
- a967a78: Removing incorrect uses of figcaption replacing them with a paragraph tag and class.

## 6.4.1

### Patch Changes

- 711e119: Fix overflow in Combobox input

## 6.4.0

### Minor Changes

- 5c39d5b: Add 'inherit' variant to Icon

## 6.3.1

### Patch Changes

- 4ebb648: Fix workspace dependency issue

## 6.3.0

### Minor Changes

- 20c8e75: Add new Combobox component

### Patch Changes

- b3ba214: Add `bgColor` prop for adding background to Flex
- 52feed2: fixed toast alignment
- Updated dependencies [e5f41bf]
- Updated dependencies [6580ac2]
- Updated dependencies [85470f6]
  - icons@6.3.0
  - tokens@6.3.0
  - typography@6.3.0

## 6.2.0

### Minor Changes

- 46751c9: Add 7 new icons:

  - AppsHubspotIcon
  - AppsMondayIcon
  - AppsOneDriveIcon
  - AppsSharepointIcon
  - AppsSmartsheetIcon
  - AppsWrikeIcon
  - InterfaceHistoryIcon

- da011ef: Add Toast component
- d0aa133: Add Text and Heading convenience components

### Patch Changes

- b38b661: Fix dangling aria reference in some cases for Checkbox, RadioGroup and Switch
- 26f2cfd: Icon: improve accessibility and automatically control `aria-hidden`
- 9726ac4: Fix Button to avoid `all: unset`, which causes issues in some apps
- 6cf238e: Update Tooltip to have a border for better contrast

## 6.1.0

### Minor Changes

- 9d327fa: Add Switch component

### Patch Changes

- bddbf50: Fix firefox bug where selected radios don't appear selected
- f2a0a6b: Fix alignment of Checkbox and Radio Button inputs for screen reader focus indicator
- 4025a11: Update Checkbox and Switch labels to remain at full opacity even when disabled

## 6.0.0

### Major Changes

- e310212: Heading components: require the `as` prop for accessibility
- e310212: Remove class name tokens for Icon and Typography
- 17375f8: Rename `@dsk/core` to `@grammarly/design-system`

### Minor Changes

- 413a4a3: Add `Radius0` token for border-radius of 0
- a8a03bc: Update brand tokens and components to use green
- ed7d36d: Add a small size for Buttons and IconButtons

### Patch Changes

- ce036a2: Flex: allow `style` prop
- a8a03bc: Update Green60 to improve color contrast on gray backgrounds
- e310212: Include separate shadow.css for CSS variables under `:host`
- e310212: Remove unintentional export `useTooltip`
- e310212: Improve types for `as` prop in Text components

## 6.0.0-alpha.0

### Major Changes

- 17375f8: Rename `@dsk/core` to `@grammarly/design-system`

## 0.0.2-alpha.0

### Patch Changes

- 17375f8: chore: improve publish step

## 0.0.1

## 0.0.0

### Minor Changes

- 59f6a59: Update some type exports so they're named consistently after relevant component, and deprecate old names
- 59f6a59: Add merged index.css file

### Patch Changes

- 59f6a59: Add storybook
- fe8984d: Add changelog generation using changesets
