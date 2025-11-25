---
name: design-system-doc
description: Origin design system expert for building UI components and interfaces. The new Superhuman design system replacing deprecated Grammarly Design System (GDS). Activates when working with React components, forms, buttons, modals, layouts, typography, design tokens, accessibility, Superhuman and Grammarly brandings, or implementing any user interface. Provides 47 production-ready React components (Button, TextField, Modal, Flex, etc.), design foundations (colors, spacing, typography), UI patterns, and accessibility best practices. Use for component selection, implementation guidance, design token lookups, and Origin best practices. Migrate from GDS to Origin for all new projects.
---

# Origin Design System Skill

This skill provides expert knowledge of the Origin design system - a comprehensive React component library and design foundation used across Superhuman products.

## ⚠️ Important: Design System Migration

### Origin is the NEW Superhuman Design System

**Origin** is the new, modern design system that replaces the deprecated **Grammarly Design System (GDS)**.

#### What Changed?
| Aspect | Old (GDS) | New (Origin) |
|--------|-----------|--------------|
| **Package** | `@grammarly/design-system` | `@superhuman/origin` |
| **Status** | ❌ Deprecated | ✅ Active & Maintained |
| **Components** | Legacy | 47 Modern Components |
| **Documentation** | Old website | Updated resources |
| **Export** | Multiple paths | Single top-level export |

#### Migration Required
If you're using **Grammarly Design System (GDS)** or **`@grammarly/design-system`**:
- ⛔ **Stop** - GDS is no longer maintained
- 🔄 **Migrate** - Switch to Origin (`@superhuman/origin`)
- ✅ **Use** - This skill for all new development


**All new projects MUST use Origin. GDS is end-of-life.**

## What is Origin?

The Origin design system empowers teams to build high-quality, cohesive product experiences at scale. It includes:

- **47 React Components**: Button, TextField, Modal, Flex, Text, Accordion, Menu, Tabs, and more
- **Design Tokens**: Colors, spacing, typography, elevation, border radius, blur
- **Design Foundations**: Accessibility, iconography, illustrations, color system, dark and light modes
- **UI Patterns**: Forms, feedback, empty states, disabled states, transforms
- **Content Guidelines**: Voice, tone, terminology, writing best practices, accessibility

**Package**: `@superhuman/origin`
**Documentation**: https://uifoundation.gpages.io/origin
**Source**: https://gitlab.grammarly.io/uifoundation/origin

## When This Skill Activates

This skill automatically activates when you need to:

- Build or implement React UI components
- Design forms, layouts, or interfaces
- Select appropriate Origin components for a use case
- Look up design tokens (colors, spacing, typography)
- Implement accessible UI patterns
- Follow Superhuman design and branding standards
- Work with buttons, inputs, modals, tooltips, or any UI element
- Implement feedback patterns (toasts, notifications, error states)
- Find content and writing guidelines

## Origin Principles

- **Tools over rules**: Flexible toolbox encouraging creativity
- **Everyone has a seat**: Cross-discipline collaboration
- **Be completely inclusive**: Accessibility integrated everywhere
- **Design with scale**: Reusable components reduce debt

## Quick Start

### Installation
```bash
npm install @superhuman/origin
# or
pnpm add @superhuman/origin
```

### Basic Import Pattern
```typescript
import { Button, TextField, Modal, Flex, Text } from '@superhuman/origin';
import '@superhuman/origin/dist/index.css';
```

### Common Layout Pattern
```typescript
<Flex direction="column" gap={4} padding={6}>
  <Text variant="heading-large">Title</Text>
  <TextField label="Email" type="email" />
  <Button variant="primary" text="Submit" />
</Flex>
```

## Documentation Navigation

### Complete Component Reference (47 Components)

For a comprehensive overview of all components with usage guidance:

**Browse**: `components/overview.md` - Components overview and index

#### Component Categories

**Buttons** (3 components):
- `components/buttons-button.md` - Primary action button with variants
- `components/buttons-buttonaslink.md` - Button styled as link
- `components/buttons-icon-button.md` - Icon-only button

**Form Controls** (12 components):
- `components/checkbox.md` - Checkbox selection
- `components/combobox.md` - Searchable select
- `components/form.md` - Form wrapper
- `components/radio-button.md` - Radio button
- `components/radio-group.md` - Radio group
- `components/radio-button-group.md` - Alternative radio implementation
- `components/search-field.md` - Search input
- `components/select.md` - Dropdown select
- `components/switch.md` - Toggle switch
- `components/text-field.md` - Text input
- `components/textarea.md` - Multiline text
- `components/verification-code.md` - Verification code input

**Feedback & Notifications** (5 components):
- `components/badge.md` - Status indicator
- `components/modal.md` - Dialog overlay
- `components/notification.md` - System notifications
- `components/toast.md` - Temporary messages
- `components/tooltip.md` - Hover hints

**Loaders** (3 components):
- `components/loaders-branded-loader.md` - Branded animation
- `components/loaders-circular-loader.md` - Spinner
- `components/loaders-skeleton-loader.md` - Content placeholder

**Navigation & Organization** (5 components):
- `components/accordion.md` - Expandable sections
- `components/link.md` - Navigation link
- `components/menu.md` - Dropdown menu
- `components/tabs.md` - Tab navigation
- `components/segmented-control.md` - View toggle

**Content Display** (9 components):
- `components/heading.md` - Heading typography
- `components/text.md` - Body text
- `components/icon.md` - Icon component
- `components/illustration.md` - Illustration
- `components/logo.md` - Logo component
- `components/sticker.md` - Decorative sticker
- `components/tag.md` - Label/category
- `components/plan-tag.md` - Plan indicator
- `components/rating.md` - Star rating

**Layout & Structure** (2 components):
- `components/box.md` - Generic wrapper
- `components/flex.md` - Flexbox layout (primary choice)

**Interactive & Tools** (4 components):
- `components/component-playground.md` - Component testing
- `components/component-status.md` - Component status
- `components/popover.md` - Floating content
- `components/onboarding-tooltip.md` - Onboarding hints

### Design Tokens & Foundations

**Colors and semantic tokens**: `foundations/color.md`
**Spacing system**: `tokens/space.md`
**Typography**: `foundations/typography.md`
**Iconography**: `foundations/iconography.md`
**Illustrations**: `foundations/illustrations.md`
**Elevation/shadows**: `foundations/elevation.md`

**All tokens directory**: `tokens/`

### UI Patterns

**Forms pattern overview**: `patterns/forms-pattern-overview.md`
**Complete forms guide**: `patterns/forms-pattern-forms.md`
**Error handling**: `patterns/forms-pattern-errors-in-forms.md`
**Empty states**: `patterns/empty-state.md`
**Disabled states**: `patterns/disabled-state.md`
**Feedback patterns**: `patterns/feedback-pattern.md`
**Pro plan branding**: `patterns/pro-plan-branding.md`
**Transforms & animations**: `patterns/transforms.md`

### Content Guidelines

**Voice and tone**: `content/voice-and-tone.md`
**Terminology**: `content/terminology.md`
**Accessible content**: `content/accessible-content.md`
**Writing process**: `content/writing-process.md`
**Style formatting**: `content/style-formatting.md`
**Grammar guide**: `content/style-grammar.md`
**Numbers & formatting**: `content/style-numbers.md`
**Punctuation**: `content/style-punctuation.md`
**AI content patterns**: `content/ai-in-product-content.md`

### Getting Started & Setup

**For engineers**: `getting-started/engineers-overview.md`
- Web/React: `getting-started/engineers-web.md`
- Swift/iOS: `getting-started/engineers-swift.md`
- C#: `getting-started/engineers-csharp.md`
- Custom components: `getting-started/engineers-styling-custom-components.md`

**For designers**: `getting-started/designers.md`

**For contributors**: `getting-started/contributing-overview.md`
- Component conventions: `getting-started/contributing-component-conventions.md`
- Documentation template: `getting-started/contributing-template.md`
- Writing conventions: `getting-started/contributing-writing-conventions.md`

**Reference**: `getting-started/glossary.md`

## Component Selection Guide

Use this decision tree to quickly find the right component:

### Need a button?
- **Action (submit, save, delete)** → `Button` (components/buttons-button.md)
- **Navigation** → `ButtonAsLink` or `Link` (components/buttons-buttonaslink.md or components/link.md)
- **Icon only** → `IconButton` (components/buttons-icon-button.md)

### Need text input?
- **Short text** (email, name) → `TextField` (components/text-field.md)
- **Long text** (comments, bio) → `Textarea` (components/textarea.md)
- **Search** → `SearchField` (components/search-field.md)
- **Select from list** → `Select` (components/select.md)
- **Searchable select** → `Combobox` (components/combobox.md)
- **Verification code** → `VerificationCode` (components/verification-code.md)

### Need selection control?
- **On/off toggle** → `Switch` (components/switch.md)
- **Multiple options** → `Checkbox` (components/checkbox.md)
- **Single choice** → `RadioButton` / `RadioGroup` (components/radio-button.md or components/radio-group.md)

### Need a container?
- **Layout with flexbox** → `Flex` (components/flex.md - primary choice)
- **Generic wrapper** → `Box` (components/box.md)

### Need overlay/dialog?
- **Important interaction** → `Modal` (components/modal.md)
- **Contextual info** → `Popover` (components/popover.md)
- **Hover hint** → `Tooltip` (components/tooltip.md)
- **Temporary message** → `Toast` (components/toast.md)
- **Persistent alert** → `Notification` (components/notification.md)

### Need navigation?
- **Tabs** → `Tabs` (components/tabs.md)
- **Dropdown menu** → `Menu` (components/menu.md)
- **View toggle** → `SegmentedControl` (components/segmented-control.md)

### Need loading state?
- **Spinner** → `CircularLoader` (components/loaders-circular-loader.md)
- **Branded animation** → `BrandedLoader` (components/loaders-branded-loader.md)
- **Content placeholder** → `SkeletonLoader` (components/loaders-skeleton-loader.md)

## Best Practices

### DO ✅
- **Use Flex for layouts** - Primary layout component, not custom CSS
- **Use semantic HTML** - Origin components provide proper semantics
- **Follow accessibility** - Built into all components
- **Use design tokens** - Import from Origin, don't hardcode
- **Compose small components** - Build complex UIs from primitives
- **Read component docs** - Check props and variants before implementing

### DON'T ❌
- **Don't create custom buttons** - Use `Button` with variants
- **Don't use inline styles** - Use component props instead
- **Don't hardcode colors** - Use design tokens
- **Don't skip form labels** - Accessibility requirement
- **Don't use divs for interactive elements** - Use semantic components
- **Don't guess component APIs** - Read the docs in `components/`

## Workflow for Using This Skill

1. **Identify UI need** - What component or pattern do you need?
2. **Select component** - Use the selection guide above or browse `components/overview.md`
3. **Read component docs** - Read `components/[name].md` for detailed API
4. **Check patterns** - For complex UIs, check `patterns/` for established patterns
5. **Implement** - Use component with proper props and accessibility
6. **Reference tokens** - Use `tokens/` for colors, spacing, etc.

## Example: Building a Form

1. **Read form pattern**: `patterns/forms-pattern-forms.md`
2. **Read form component**: `components/form.md`
3. **Read input components**: `components/text-field.md`, `components/checkbox.md`
4. **Read button component**: `components/buttons-button.md`
5. **Check error handling**: `patterns/forms-pattern-errors-in-forms.md`

Then implement:
```typescript
<Form onSubmit={handleSubmit}>
  <Flex direction="column" gap={4}>
    <TextField label="Email" type="email" required />
    <TextField label="Password" type="password" required />
    <Checkbox label="Remember me" />
    <Button type="submit" variant="primary" text="Sign In" />
  </Flex>
</Form>
```

## File Structure

All documentation is organized and cleaned for easy navigation:

```
.claude/skills/design-system-doc/
├── SKILL.md                      ← This file
├── components/                   ← 47 component documentation files
├── content/                      ← 21 content and writing guides
├── foundations/                  ← 7 foundation documentation files
├── getting-started/              ← 12 getting started guides
├── patterns/                     ← 13 UX pattern files
└── tokens/                       ← 9 design token files
```

**Total: 108 markdown documentation files**, all markdown-formatted and AI-friendly (zero JSX components).

## Resources

- **Online Documentation**: https://uifoundation.gpages.io/origin
- **Complete Component List**: `components/overview.md`
- **Component Details**: Browse `components/` directory
- **Design Tokens**: Explore `tokens/` directory
- **UI Patterns**: Check `patterns/` directory
- **Content Guidelines**: Read `content/` files
- **Setup Guides**: See `getting-started/` directory

## Getting Help

When you need information:

- **Overview** → Read `components/overview.md` or `patterns/overview.md`
- **Specific component** → Read `components/[component-name].md`
- **Design tokens** → Read files in `tokens/`
- **Patterns** → Read files in `patterns/`
- **Setup/Getting started** → Browse `getting-started/`
- **Writing/Content** → Read files in `content/`

This progressive approach ensures you only load the documentation you need for your current task.

## Team

**Maintained by**: Superhuman Design Foundations Team

**Key Contributors**:
- Rebecca McMillin - Design Director
- Tammy Sun - Design Program Manager
- Denys Kulyk - Product Manager
- Brian Hinton - Accessibility Lead
- Yejia Chen - Accessibility Technologist

**Last Updated**: November 2024
