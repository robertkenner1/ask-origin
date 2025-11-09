---
name: gds
description: Grammarly Design System expert for building UI components and interfaces. Activates when working with React components, forms, buttons, modals, layouts, typography, design tokens, accessibility, Grammarly branding, or implementing any user interface. Provides 40+ production-ready React components (Button, TextField, Modal, Flex, etc.), design foundations (colors, spacing, typography), UI patterns, and accessibility best practices. Use for component selection, implementation guidance, design token lookups, and GDS best practices.
---

# Grammarly Design System (GDS) Skill

This skill provides expert knowledge of the Grammarly Design System - a comprehensive React component library and design foundation used across Grammarly products.

## What is GDS?

The Grammarly Design System empowers teams to build high-quality, cohesive product experiences at scale. It includes:

- **40+ React Components**: Button, TextField, Modal, Flex, Text, and more
- **Design Tokens**: Colors, spacing, typography, elevation, border radius
- **Design Foundations**: Accessibility, iconography, illustrations, color system
- **UI Patterns**: Forms, feedback, empty states, disabled states
- **Content Guidelines**: Voice, tone, terminology, writing best practices

**Package**: `@grammarly/design-system`
**Documentation**: https://uifoundation.gpages.io/grammarly-design-system
**Source**: https://gitlab.grammarly.io/uifoundation/grammarly-design-system

## When This Skill Activates

This skill automatically activates when you need to:

- Build or implement React UI components
- Design forms, layouts, or interfaces
- Select appropriate GDS components for a use case
- Look up design tokens (colors, spacing, typography)
- Implement accessible UI patterns
- Follow Grammarly design and branding standards
- Work with buttons, inputs, modals, tooltips, or any UI element
- Implement feedback patterns (toasts, notifications, error states)

## GDS Principles

- **Tools over rules**: Flexible toolbox encouraging creativity
- **Everyone has a seat**: Cross-discipline collaboration
- **Be completely inclusive**: Accessibility integrated everywhere
- **Design with scale**: Reusable components reduce debt

## Quick Start

### Installation
```bash
npm install @grammarly/design-system
# or
pnpm add @grammarly/design-system
```

### Basic Import Pattern
```typescript
import { Button, TextField, Modal, Flex, Text } from '@grammarly/design-system';
import '@grammarly/design-system/dist/index.css';
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

### Complete Component Reference
For a complete overview of all 40+ components with usage guidance:

**Read: `docs/llm.txt`**

This file provides:
- Alphabetical component list
- Component descriptions and use cases
- Quick reference for component selection
- Links to detailed component documentation

### Detailed Component Documentation
For in-depth information about a specific component:

**Read: `docs/components/[component-name].mdx`**

Examples:
- `docs/components/buttons/button.mdx` - Button component
- `docs/components/text-field.mdx` - TextField component
- `docs/components/modal.mdx` - Modal component
- `docs/components/flex.mdx` - Flex layout component

Browse available components:
**Glob: `docs/components/**/*.mdx`**

### Design Tokens & Foundations

**Colors and tokens**: `docs/tokens/color.mdx`
**Spacing system**: `docs/tokens/space.mdx`
**Typography**: `docs/foundations/typography.mdx`
**Iconography**: `docs/foundations/iconography.mdx`
**All tokens**: `docs/tokens/` directory

### UI Patterns

**Forms**: `docs/patterns/forms-pattern/`
**Empty states**: `docs/patterns/empty-state.mdx`
**Feedback patterns**: `docs/patterns/feedback-pattern.mdx`
**Disabled states**: `docs/patterns/disabled-state.mdx`

### Content Guidelines

**Voice and tone**: `docs/content/voice-and-tone.mdx`
**Terminology**: `docs/content/terminology.mdx`
**Accessibility**: `docs/content/accessible-content.mdx`

## Component Selection Guide

Use this decision tree to quickly find the right component:

### Need a button?
- **Action (submit, save, delete)** → `Button`
- **Navigation** → `ButtonAsLink` or `Link`
- **Icon only** → `IconButton`

### Need text input?
- **Short text** (email, name) → `TextField`
- **Long text** (comments, bio) → `Textarea`
- **Search** → `SearchField`
- **Select from list** → `Select`
- **Searchable select** → `Combobox`
- **Verification code** → `VerificationCode`

### Need selection control?
- **On/off toggle** → `Switch`
- **Multiple options** → `Checkbox`
- **Single choice** → `RadioButton` / `RadioGroup`

### Need a container?
- **Layout with flexbox** → `Flex` (primary choice)
- **Generic wrapper** → `Box`

### Need overlay/dialog?
- **Important interaction** → `Modal`
- **Contextual info** → `Popover`
- **Hover hint** → `Tooltip`
- **Temporary message** → `Toast`
- **Persistent alert** → `Notification`

### Need navigation?
- **Tabs** → `Tabs`
- **Dropdown menu** → `Menu`
- **View toggle** → `SegmentedControl`

### Need loading state?
- **Spinner** → `CircularLoader`
- **Branded animation** → `BrandedLoader`
- **Content placeholder** → `SkeletonLoader`

## Best Practices

### DO ✅
- **Use Flex for layouts** - Primary layout component, not custom CSS
- **Use semantic HTML** - GDS components provide proper semantics
- **Follow accessibility** - Built into all components
- **Use design tokens** - Import from GDS, don't hardcode
- **Compose small components** - Build complex UIs from primitives
- **Read component docs** - Check props and variants before implementing

### DON'T ❌
- **Don't create custom buttons** - Use `Button` with variants
- **Don't use inline styles** - Use component props instead
- **Don't hardcode colors** - Use design tokens
- **Don't skip form labels** - Accessibility requirement
- **Don't use divs for interactive elements** - Use semantic components
- **Don't guess component APIs** - Read the docs in `docs/components/`

## Workflow for Using This Skill

1. **Identify UI need** - What component or pattern do you need?
2. **Select component** - Use the selection guide above or read `docs/llm.txt`
3. **Read component docs** - Read `docs/components/[name].mdx` for detailed API
4. **Check patterns** - For complex UIs, check `docs/patterns/` for established patterns
5. **Implement** - Use component with proper props and accessibility
6. **Reference tokens** - Use `docs/tokens/` for colors, spacing, etc.

## Example: Building a Form

1. **Read form pattern**: `docs/patterns/forms-pattern/forms.mdx`
2. **Read form component**: `docs/components/form.mdx`
3. **Read input components**: `docs/components/text-field.mdx`, `docs/components/checkbox.mdx`
4. **Read button component**: `docs/components/buttons/button.mdx`
5. **Check error handling**: `docs/patterns/forms-pattern/errors-in-forms.mdx`

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

## Resources

- **Online Documentation**: https://uifoundation.gpages.io/grammarly-design-system
- **Complete Component List**: Read `docs/llm.txt`
- **Component Details**: Browse `docs/components/`
- **Design Tokens**: Explore `docs/tokens/`
- **UI Patterns**: Check `docs/patterns/`

## Getting Help

When you need information:
- **Overview** → Read `docs/llm.txt`
- **Specific component** → Read `docs/components/[component-name].mdx`
- **Design tokens** → Read files in `docs/tokens/`
- **Patterns** → Read files in `docs/patterns/`
- **Find a component** → Glob `docs/components/**/*.mdx` then read relevant file

This progressive approach ensures you only load the documentation you need for your current task.
