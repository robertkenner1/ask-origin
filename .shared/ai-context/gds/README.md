# GDS AI Context Files

This directory contains LLM-friendly documentation extracted from the Grammarly Design System Storybook.

## 📁 Files

- **`llms.txt`** - Main summary with all 43 components, import patterns, and quick links
- **`llms/component-*.txt`** - Individual files for each component with detailed information
- **`components.json`** - Machine-readable JSON with all component metadata

## 🚀 Usage with AI Coding Assistants

### Claude Code

**Option 1: Reference in CLAUDE.md**
```markdown
# Your Project

## Design System
@ai-context/gds/llms.txt

Use components from @grammarly/design-system for all UI.
```

**Option 2: Copy to your prototype project**
```bash
# Copy to your prototype monorepo
cp -r ai-context/gds /path/to/your-prototype-repo/ai-context/
```

### Cursor

**Add to `.cursor/rules/gds.mdc`**
```markdown
---
title: Grammarly Design System
tags: [design-system, components, ui]
---

Use Grammarly Design System (@grammarly/design-system) for all UI components.

Full documentation: @ai-context/gds/llms.txt
```

### v0.dev / Other Tools

Reference the live Storybook: https://uifoundation.gpages.io/grammarly-design-system

## 📦 Package Information

- **Package**: `@grammarly/design-system`
- **Installation**: `pnpm add @grammarly/design-system`
- **CSS Import**: `import '@grammarly/design-system/dist/index.css';`

## 🔄 Updating Documentation

Regenerate the documentation when GDS is updated:

```bash
# From the GDS repo root
node scripts/scrape-gds-storybook.js
```

This will:
1. Fetch latest component info from the live Storybook
2. Regenerate all documentation files
3. Update components.json with metadata

## 📚 Component Categories

### Actions
- Button, ButtonAsLink, IconButton

### Forms
- TextField, Textarea, Checkbox, RadioGroup, Switch, SearchField, Select, Combobox, VerificationCode

### Layout
- Flex, Box

### Typography
- Text, Heading

### Feedback
- Toast, Modal, Popover, Tooltip

### Navigation
- Tabs, Menu, Link

### Data Display
- Badge, Tag, PlanTag, Rating, Accordion

### Loading States
- CircularLoader, BrandedLoader, SkeletonLoader

### Media
- Icon, Illustration, Logo, Sticker

### Utilities
- ColorSchemeProvider, PortalContainerProvider, LiveAnnouncer, ScreenReaderOnly, Form

## 🤖 AI Assistant Tips

### When creating components:
1. **Always import from GDS first**: Check if a component exists before creating custom ones
2. **Use design tokens**: Access via `Tokens.Blue40`, `Tokens.Space4`, etc.
3. **Reference examples**: Ask AI to check `llms/component-{name}.txt` for usage patterns
4. **Check Storybook**: For complex usage, refer to the live Storybook URLs in the docs

### Common patterns:
```typescript
// Import components
import { Button, TextField, Flex, Modal } from '@grammarly/design-system';
import '@grammarly/design-system/dist/index.css';

// Use Flex for layouts
<Flex direction="column" gap={4}>
  <TextField label="Email" />
  <Button variant="primary" text="Submit" />
</Flex>

// Access design tokens
import { Tokens } from '@grammarly/design-system';
const primaryColor = Tokens.Blue40;
```

## 🔗 Links

- **Storybook**: https://uifoundation.gpages.io/grammarly-design-system
- **Documentation Site**: https://designsystem.grammarly.io
- **Package**: https://artifactory.grammarly.io/artifactory/api/npm/common-npm/@grammarly/design-system

---

Generated: ${new Date().toISOString().split('T')[0]}
