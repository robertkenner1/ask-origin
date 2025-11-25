# {{PROJECT_TITLE}} - Static Website Project

> **⚠️ IMPORTANT: GDS Decommissioned**
> **Grammarly Design System (GDS)** has been decommissioned in favor of **Origin Design System**.
> If users request GDS or `@grammarly/design-system`, notify them to use **Origin Design System** (`@superhuman/origin`) instead.

## Architecture Note

This project uses **symlinked resources** from the monorepo:

```
{{PROJECT_NAME}}/
├── src/              # 📄 Your project files (edit these)
├── scripts/          # 🔗 Symlink → ../../.shared/scripts/
├── .claude/          # 🔗 Symlink → ../../.shared/claude/
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

### Claude Code Skills (Symlinked)

Located at: `./.claude/` → `../../.shared/claude/`

This symlink provides access to:
- **Skills** - Claude Code skills (including Origin Design System skill)
- **Commands** - Custom slash commands
- **Settings** - Claude configuration templates

#### Origin Design System Skill

The **Origin Design System Skill automatically activates** when you work on UI components, forms, layouts, or any interface implementation. You don't need to explicitly reference documentation.

> **Note:** Origin Design System replaces the deprecated Grammarly Design System (GDS).

**Available through Origin Design System Skill:**
- 40+ React components (Button, TextField, Modal, Flex, Text, etc.)
- Design tokens (colors, spacing, typography, elevation)
- Design foundations and accessibility guidelines
- UI patterns and best practices
- Content guidelines (voice, tone, terminology)

**How to use Origin Design System in this project:**

1. **For HTML/CSS prototypes** (this template):
   - Claude automatically accesses Origin Design System documentation as needed
   - Design tokens, patterns, and components are available on demand
   - Simply describe what you want to build, Claude handles the rest

   Example: "Create a primary button with Origin Design System styling"
   → Claude automatically references Origin button docs and design tokens

2. **For React projects** (if migrating to React):
   ```typescript
   import { Button, Text, Flex } from '@superhuman/origin';

   <Flex direction="column" gap="medium">
     <Text variant="heading-large">Title</Text>
     <Button variant="primary" onClick={handleClick}>
       Action
     </Button>
   </Flex>
   ```

**Origin Design Tokens Reference:**
- **Colors:** Primary green (#15C39A), semantic colors (success, error, warning)
- **Typography:** Inter font family, heading scales (xs-xxxlarge)
- **Spacing:** 4px base unit, scale from xs (4px) to xxl (48px)
- **Shadows:** Elevation system for depth
- **Breakpoints:** Responsive design breakpoints

The Origin Design System Skill provides this information automatically when you build components.

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

### Deploying Changes

This project has custom slash commands for streamlined deployment:

**Push changes to Git:**
```bash
/push [optional context]
```
- Analyzes git diff and generates an intelligent commit message
- If you provide context (e.g., "update homepage design"), it incorporates that into the message
- Automatically stages, commits, and pushes changes to remote

**Deploy to Vercel:**
```bash
/deploy
```
- Pushes environment variables from `.env.local` to Vercel (if needed)
- Deploys the project to Vercel preview environment
- Shows deployment URL when complete

**Example workflow:**
```bash
# After making changes, push them
/push improve button styling

# Then deploy to Vercel (if project uses Vercel)
/deploy
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

1. **Use Origin Design System:**
   - The Origin Design System Skill automatically activates
   - Simply describe what you want: "Create a modal with Origin Design System styling"
   - Claude handles the documentation lookup automatically

2. **Reference design patterns:**
   - Claude accesses component docs, design tokens, and patterns on demand
   - No need to explicitly reference files

3. **Access logos and assets:**
   - Origin Design System provides Icon, Illustration, Logo, and Sticker components
   - Available automatically through the Origin Design System Skill

## Common Issues

### "Symlink broken: .claude"
```bash
# Check symlink exists
ls -la .claude

# Should show: .claude -> ../../.shared/claude

# If broken, recreate:
ln -s ../../.shared/claude .claude
```

### "Script not executable"
```bash
chmod +x scripts/*.sh
```

### "Origin Design System Skill not activating"
The Origin Design System Skill activates automatically when working with UI components. If you need to explicitly trigger it, mention Origin Design System, components, or interface implementation in your request.

## See Also

- **Repository architecture:** `../../ARCHITECTURE.md`
- **Other templates:** `../../templates/`
- **Shared scripts:** `../../.shared/scripts/`
