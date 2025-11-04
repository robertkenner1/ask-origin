# {{PROJECT_TITLE}} - Static Website Project

## Architecture Note

This project uses **symlinked resources** from the monorepo:

```
{{PROJECT_NAME}}/
├── src/              # 📄 Your project files (edit these)
├── scripts/          # 🔗 Symlink → ../../.shared/scripts/
├── ai-context/       # 🔗 Symlink → ../../.shared/ai-context/
├── .mcp.json         # 📄 MCP servers (customizable)
├── Makefile          # 📄 Build commands (customizable)
└── CLAUDE.md         # 📄 This file
```

**Symlinks appear as regular directories** but actually point to shared resources.

## Available Resources

### Scripts (Symlinked)

Located at: `./scripts/` → `../../.shared/scripts/`

Shared scripts are available but **npm scripts are recommended** for most tasks.

**Use npm scripts directly:**
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Serve production build
```

### AI Context (Symlinked)

Located at: `./ai-context/` → `../../.shared/ai-context/`

#### Grammarly Design System Documentation

The `ai-context/gds-docs/` directory contains complete Grammarly Design System documentation optimized for AI consumption.

**Quick reference:**
```bash
# Read complete GDS reference (40+ components)
Read(ai-context/gds-docs/llm.txt)

# List all component docs
Glob(ai-context/gds-docs/components/**/*.mdx)

# Read specific component
Read(ai-context/gds-docs/components/buttons/button.mdx)
Read(ai-context/gds-docs/components/modal.mdx)
```

**Available components:** Button, ButtonAsLink, IconButton, TextField, Textarea, Checkbox, RadioButton, RadioButtonGroup, RadioGroup, Switch, SearchField, Select, Combobox, VerificationCode, Flex, Box, Text, Heading, Link, Toast, Notification, Modal, Popover, Tooltip, OnboardingTooltip, Tabs, Menu, SegmentedControl, Badge, Tag, PlanTag, Rating, Accordion, CircularLoader, BrandedLoader, SkeletonLoader, Icon, Illustration, Logo, Sticker, SuggestionToggle, Form, and more.

#### How to Use GDS in Your Project

1. **For HTML/CSS prototypes** (static projects):
   - Read component docs to understand structure and styling
   - Reference design tokens (colors, spacing, typography)
   - Replicate component patterns in vanilla HTML/CSS

   Example workflow:
   ```bash
   # 1. Read button component docs
   Read(ai-context/gds-docs/components/buttons/button.mdx)

   # 2. Implement button with GDS styling
   # - Use exact colors from design tokens
   # - Match spacing, typography, interactions
   # - Follow accessibility patterns
   ```

2. **For React projects** (if using @grammarly/design-system):
   - Import components directly from the package
   - Reference docs for prop APIs and usage patterns

   ```typescript
   import { Button, Text, Flex } from '@grammarly/design-system';

   <Flex direction="column" gap="medium">
     <Text variant="heading-large">Title</Text>
     <Button variant="primary" onClick={handleClick}>
       Action
     </Button>
   </Flex>
   ```

#### GDS Design Tokens

```bash
# Read full design system reference for:
Read(ai-context/gds-docs/llm.txt)

# Read tokens documentation
Read(ai-context/gds-docs/tokens/)

# Read foundations
Read(ai-context/gds-docs/foundations/)
```

Contains:
- **Colors:** Primary, secondary, semantic colors (success, error, warning)
- **Typography:** Font families, sizes, weights, line heights
- **Spacing:** Consistent spacing scale (4px base unit)
- **Border radius:** Standard corner radius values
- **Shadows:** Elevation shadows for depth
- **Breakpoints:** Responsive design breakpoints

#### Common GDS Patterns

**Buttons:**
- Primary, secondary, tertiary variants
- Sizes: small, medium, large
- States: default, hover, active, disabled, loading

**Colors:**
- Primary: Green (#15C39A)
- Text: Dark gray (#1C1C1C)
- Background: White, light grays
- Semantic: Success (green), Error (red), Warning (yellow)

**Spacing:**
- Base unit: 4px
- Scale: xs=4px, sm=8px, md=16px, lg=24px, xl=32px, xxl=48px

**Typography:**
- Font family: Inter, system fonts fallback
- Heading scales: xs, sm, md, lg, xl, xxl
- Body text: regular, medium, bold weights

**Note:** Symlinked files won't appear in @ autocomplete, use explicit `Read()` or `Glob()`.

## Development Workflow

This project uses **npm** for all development tasks, with http-server for local preview.

### Quick Start
```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev
# Opens http://localhost:3000

# Build for production
npm run build

# Serve production build
npm start
```

### Available npm Scripts
- `npm run dev` - Start http-server on src/ directory (port 3000, auto-open)
- `npm run build` - Copy src/ to public/ directory
- `npm start` - Serve production build from public/
- `npm run clean` - Remove public/ directory

### Stopping the Dev Server
To stop the development server:
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## Project Structure

```
{{PROJECT_NAME}}/
├── src/                # 📄 Source files (edit these)
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Styles
│   └── script.js       # JavaScript
├── public/             # 📦 Build output (generated, gitignored)
├── package.json        # npm scripts and dependencies
├── .project.json       # Project metadata
└── CLAUDE.md           # This file
```

### Development Notes
- **Edit files in `src/` directory** - Changes are served live via http-server
- **Build output goes to `public/`** - This directory is gitignored locally
- **Port 3000** - All projects (static and Next.js) use the same port
- **http-server features** - Auto-refresh, no caching (-c-1 flag)

## Customizing This Project

### Custom Build Script

If you need custom build logic:
```bash
# Remove symlink
rm scripts
mkdir scripts

# Copy and customize
cp ../../.shared/scripts/build.sh scripts/
vim scripts/build.sh
```

**Warning:** Once you break the symlink, you won't get automatic updates from `.shared/scripts/`.

### Custom MCP Servers

`.mcp.json` is already a real file (not symlinked), so edit freely:
```bash
vim .mcp.json
```

## Important Notes

1. **Don't edit symlinked files directly** - This affects ALL projects
2. **Use `Read(path)` explicitly** - Symlinked files don't autocomplete with @
3. **Scripts are executable** - Run with `./scripts/build.sh` or `make build`
4. **Build before viewing** - Run `make build` to copy src/ to public/

## Grammarly/Superhuman Style Prototypes

When building Grammarly-style or Superhuman-style clean, modern interfaces:

1. **Use Grammarly Design System:**
   ```
   Read(ai-context/gds-docs/llm.txt)
   ```

2. **Check component docs:**
   ```
   Glob(ai-context/gds-docs/components/**/*.mdx)
   ```

3. **Read design foundations:**
   ```
   Read(ai-context/gds-docs/foundations/)
   ```

4. **Reference logos and assets:** Check Icon, Illustration, Logo components

## Common Issues

### "File not found: ai-context/..."
```bash
# Check symlink exists
ls -la ai-context

# Should show: ai-context -> ../../.shared/ai-context

# If broken, recreate:
ln -s ../../.shared/ai-context ai-context
```

### "Script not executable"
```bash
chmod +x scripts/*.sh
```

### "Can't find file in @ autocomplete"
Symlinked files don't show in autocomplete. Use explicit commands:
```
Read(ai-context/gds-docs/llm.txt)
Glob(ai-context/gds-docs/components/**/*.mdx)
```

## See Also

- **Repository architecture:** `../../ARCHITECTURE.md`
- **Other templates:** `../../templates/`
- **Shared scripts:** `../../.shared/scripts/`
