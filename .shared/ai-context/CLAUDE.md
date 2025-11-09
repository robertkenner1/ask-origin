# AI Context Directory - Shared Resources for Prototypes.

This directory contains shared AI assistant resources and documentation used across all projects in the monorepo

> **Purpose**: Centralized knowledge base for Claude Code and other AI assistants working on frontend prototypes
>
> **Scope**: Monorepo-wide - available to all projects in `projects/`

## Directory Structure

```
ai-context/
├── CLAUDE.md              # This file - directory documentation
├── gds/                   # Legacy GDS documentation (deprecated)
└── gds-docs/              # Grammarly Design System documentation (current)
    ├── llm.txt            # Complete GDS reference for AI (40+ components)
    ├── components/        # Component documentation (MDX files)
    ├── foundations/       # Design foundations
    ├── tokens/            # Design tokens
    ├── patterns/          # UI patterns
    └── getting-started/   # Setup guides
```

## How This Directory Works

### For AI Assistants (Claude Code)

1. **Reference these files** when working on any prototype project
2. **Don't modify** files in this directory unless updating shared resources
3. **Use relative paths** from project directories: `@ai-context/gds/llms.txt`

### For Project Developers

1. **Read-only resources** - these are shared across all projects
2. **Don't copy to projects** - reference in place from ai-context/
3. **Use in project CLAUDE.md** - link to specific resources you need
4. **Keep updated** - periodically sync from upstream sources

## Available Resources

### 1. Grammarly Design System (GDS)

**Location**: `ai-context/gds-docs/`

**What's included:**
- Complete component library documentation (40+ components)
- Design tokens (colors, typography, spacing, shadows, etc.)
- Design foundations and principles
- UI patterns and best practices
- Getting started guides

**How to reference:**
```markdown
<!-- In your project's CLAUDE.md -->
## Design System

We use **Grammarly Design System**. See documentation:
- Full reference: Read(ai-context/gds-docs/llm.txt)
- Specific component: Read(ai-context/gds-docs/components/buttons/button.mdx)
- Design tokens: Read(ai-context/gds-docs/tokens/)
- Foundations: Read(ai-context/gds-docs/foundations/)
```

**Available components:**
Button, ButtonAsLink, IconButton, TextField, Textarea, Checkbox, RadioButton, RadioButtonGroup, RadioGroup, Switch, SearchField, Select, Combobox, VerificationCode, Flex, Box, Text, Heading, Link, Toast, Notification, Modal, Popover, Tooltip, OnboardingTooltip, Tabs, Menu, SegmentedControl, Badge, Tag, PlanTag, Rating, Accordion, CircularLoader, BrandedLoader, SkeletonLoader, Icon, Illustration, Logo, Sticker, SuggestionToggle, Form, and more.

**Documentation website:**
- https://uifoundation.gpages.io/grammarly-design-system

**Source code:**
- https://gitlab.grammarly.io/uifoundation/grammarly-design-system


## Design System Quick Reference

### Installation (for React/Next.js projects)

```bash
pnpm add @grammarly/design-system
```

### Import Pattern

```typescript
// Components
import { Button, TextField, Modal, Flex, Text } from '@grammarly/design-system';

// CSS (import once in your app entry)
import '@grammarly/design-system/dist/index.css';

// Design Tokens (optional)
import { Tokens } from '@grammarly/design-system';
```

### Common Patterns

**Layouts** (use Flex, not custom CSS):
```typescript
<Flex direction="column" gap={4} padding={6}>
  <Text variant="heading-large">Title</Text>
  <TextField label="Email" />
  <Button variant="primary" text="Submit" />
</Flex>
```

**Forms**:
```typescript
<Form onSubmit={handleSubmit}>
  <Flex direction="column" gap={4}>
    <TextField label="Email" type="email" />
    <TextField label="Password" type="password" />
    <Button type="submit" text="Sign In" />
  </Flex>
</Form>
```

**Modals**:
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  heading="Confirm Action"
>
  <Text>Are you sure?</Text>
  <Flex gap={2}>
    <Button variant="primary" text="Confirm" />
    <Button variant="tertiary" text="Cancel" onClick={() => setIsOpen(false)} />
  </Flex>
</Modal>
```

### Design Tokens

```typescript
import { Tokens } from '@grammarly/design-system';

// Colors
Tokens.Blue40      // Primary blue
Tokens.Green60     // Success green
Tokens.Red60       // Error red

// Typography - Use Text component instead
<Text variant="heading-large">Title</Text>

// Spacing - Use Flex component props
<Flex gap={4} padding={6}>...</Flex>
```

## Coding Guidelines

### DO ✅

- **Use GDS components** for all UI elements
- **Use Flex** for layouts instead of custom CSS
- **Import design tokens** instead of hardcoded colors
- **Follow TypeScript** best practices
- **Use semantic HTML** with GDS components
- **Test accessibility** with screen readers
- **Reference ai-context docs** instead of copying

### DON'T ❌

- **Don't create custom buttons** - use `Button` component
- **Don't use custom colors** - use design tokens
- **Don't use inline styles** - use component props
- **Don't skip accessibility** attributes
- **Don't hardcode spacing** - use Flex gap/padding props
- **Don't copy ai-context files** - reference in place

## File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Styles: `Component.module.css` (if custom CSS needed)

## Import Organization

```typescript
// 1. External dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 2. GDS components
import { Button, TextField, Flex } from '@grammarly/design-system';

// 3. Local components
import { UserCard } from './components/UserCard';

// 4. Utils and hooks
import { useAuth } from './hooks/useAuth';

// 5. Types
import type { User } from './types';

// 6. Styles (last)
import './App.css';
```

## Updating This Directory

### When to update ai-context/

1. **New GDS version released**: Update gds-docs/ documentation
2. **New shared resource needed**: Add to ai-context/
3. **Better AI guidance**: Update this file

### How to update

```bash
# Navigate to monorepo root
cd /path/to/ai-frontend-prototypes

# Update GDS documentation from latest release
# Copy updated docs to .shared/ai-context/gds-docs/
# Regenerate llm.txt if needed

# Commit changes
git add .shared/ai-context/
git commit -m "docs: Update GDS documentation to vX.X.X"
```

## Integration with Projects

### For Static Sites (HTML/CSS/JS)

Static sites typically don't use GDS directly, but can reference:
- Color values from design tokens
- Spacing patterns
- Component behavior patterns

### For React/Next.js Projects

Full GDS integration:
1. Install GDS: `pnpm add @grammarly/design-system`
2. Reference ai-context in project CLAUDE.md
3. Use components according to ai-context/gds-docs/ documentation

### Example Project CLAUDE.md

```markdown
# My Awesome Prototype

## Design System

Using Grammarly Design System. See:
- Read(ai-context/gds-docs/llm.txt) - Complete component reference
- Read(ai-context/gds-docs/components/buttons/button.mdx) - Specific component
- Read(ai-context/gds-docs/tokens/) - Design tokens

## Project-Specific Context

[Your custom context here]
```

## Finding Components

### Quick search patterns

**By name**:
```bash
# Find specific component
find ai-context/gds-docs/components -name "*button*"
grep -r "Button" ai-context/gds-docs/llm.txt
```

**By feature**:
```bash
# Find form components
find ai-context/gds-docs/components -name "*field*" -o -name "*input*"
```

**In llm.txt**:
```bash
# Search for component info
grep -A 5 "## Button" ai-context/gds-docs/llm.txt
```

## AI Assistant Usage

### For Claude Code

When working on a prototype:

1. **Check active project** first
2. **Read project CLAUDE.md** if it exists
3. **Reference ai-context/** for shared knowledge
4. **Use GDS components** when building UIs
5. **Follow patterns** from ai-context documentation

### Reference syntax

```markdown
<!-- In conversation or project docs -->
Read(ai-context/gds-docs/llm.txt)              # Full GDS reference
Read(ai-context/gds-docs/components/buttons/button.mdx)  # Specific component
Read(ai-context/gds-docs/tokens/)              # Design tokens
```

## Troubleshooting

### "Component not found in GDS"

1. Check ai-context/gds-docs/llm.txt for complete component list
2. Verify component is available in current GDS version
3. Search in ai-context/gds-docs/components/ for MDX file

### "Outdated component information"

1. Check GDS documentation site: https://uifoundation.gpages.io/grammarly-design-system
2. Update ai-context/gds-docs/ from latest GDS release if needed
3. Create issue if documentation needs updating

### "How do I use a specific component?"

1. Read ai-context/gds-docs/llm.txt for overview and quick reference
2. Read specific component MDX file in ai-context/gds-docs/components/
3. Check GDS documentation site for interactive examples

---

**Need help?**
- Complete GDS Reference: Read(ai-context/gds-docs/llm.txt)
- Documentation Site: https://uifoundation.gpages.io/grammarly-design-system
- GDS Source: https://gitlab.grammarly.io/uifoundation/grammarly-design-system
