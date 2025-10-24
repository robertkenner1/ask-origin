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

All scripts use a common library with:
- Unified status printing and logging
- Robust path resolution (works via symlinks)
- Configuration hierarchy: **ENV vars > .project.json > defaults**

**Available scripts:**
- `./scripts/build.sh` - Auto-detects project type, builds accordingly
- `./scripts/start.sh` - Starts dev server with auto-detection
- `./scripts/stop.sh` - Stops dev server gracefully
- `./scripts/deploy.sh` - Builds, commits, pushes to GitLab Pages
- `./scripts/deploy-vercel.sh` - Deploys Next.js projects to Vercel

**Makefile shortcuts:**
- `make build` - Build project
- `make start` - Start dev server
- `make stop` - Stop dev server
- `make deploy MESSAGE="..."` - Deploy to GitLab
- `make deploy-vercel` - Deploy to Vercel (Next.js only)

#### How Scripts Work

**build.sh:**
- Detects if project is static (src/) or Node.js (package.json)
- Static: Copies src/ to public/{{PROJECT_NAME}}/
- Node.js: Runs `npm run build`
- Auto-resolves repository root via git

**start.sh:**
- Static projects: Builds first, then serves on http://localhost:8181
- Node.js projects: Runs `npm run dev`
- Port configurable via .project.json or PROJECT_DEV_SERVER_PORT env var

**stop.sh:**
- Kills dev server on configured port (default 8181)
- Uses port from .project.json config.port or PROJECT_DEV_SERVER_PORT

**deploy.sh:**
- Runs build.sh to build project
- Builds master sitemap (npm run build:sitemap)
- Git add, commit (with your message), and push
- Displays GitLab Pages URL from .project.json

#### Configuration Override

Change behavior via environment variables:
```bash
# Use different port
PROJECT_DEV_SERVER_PORT=9000 ./scripts/start.sh

# Custom GitLab Pages URL
PROJECT_GITLAB_PAGES_URL_BASE="https://custom.url" ./scripts/deploy.sh

# All config values follow pattern: PROJECT_<KEY>
```

Or edit `.project.json`:
```json
{
  "config": {
    "port": 9000,
    "vercelTeam": "your-team-slug"
  }
}
```

### AI Context (Symlinked)

Located at: `./ai-context/` → `../../.shared/ai-context/`

#### Grammarly Design System Documentation

The `ai-context/gds/` directory contains complete Grammarly Design System documentation optimized for AI consumption.

**Quick reference:**
```bash
# Read complete GDS reference (all components)
Read(ai-context/gds/llms.txt)

# List all component docs
Glob(ai-context/gds/llms/component-*.txt)

# Read specific component
Read(ai-context/gds/llms/component-button.txt)
Read(ai-context/gds/llms/component-modal.txt)
```

**Available components:** Button, Text, Heading, Box, Flex, Modal, Popover, Tooltip, TextField, TextArea, Select, Checkbox, RadioGroup, Icon, Badge, Tag, Toast, Tabs, Accordion, Menu, and more.

#### How to Use GDS in Your Project

1. **For HTML/CSS prototypes** (static projects):
   - Read component docs to understand structure and styling
   - Reference design tokens (colors, spacing, typography)
   - Replicate component patterns in vanilla HTML/CSS

   Example workflow:
   ```bash
   # 1. Read button component docs
   Read(ai-context/gds/llms/component-button.txt)

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
Read(ai-context/gds/llms.txt)
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

### Starting Development
```bash
# From repository root, create and enter project
make new PROJECT={{PROJECT_NAME}}
cd projects/{{PROJECT_NAME}}/

# Start Claude Code
claude
```

### Building
```bash
make build
# Copies src/ to public/{{PROJECT_NAME}}/
```

### Development Server
```bash
make start
# Opens http://localhost:8181/{{PROJECT_NAME}}/
```

### Deploying
```bash
make deploy MESSAGE="Your commit message"
# Builds, commits, pushes to GitLab
# Live at: https://ai-frontend-prototypes-c8939b.gpages.io/{{PROJECT_NAME}}/
```

## Project Structure

```
src/
├── index.html    # Main HTML file
├── styles.css    # Styles
└── script.js     # JavaScript
```

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

## Grammarly Style Prototypes

When building Grammarly-style interfaces:

1. **Use Grammarly Design System:**
   ```
   Read(ai-context/gds/llms.txt)
   ```

2. **Check component docs:**
   ```
   Glob(ai-context/gds/llms/component-*.txt)
   ```

3. **Reference logos and assets:** Available in ai-context/gds/

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
Read(ai-context/gds/llms.txt)
Glob(ai-context/**/*.txt)
```

## See Also

- **Repository architecture:** `../../ARCHITECTURE.md`
- **Other templates:** `../../templates/`
- **Shared scripts:** `../../.shared/scripts/`
