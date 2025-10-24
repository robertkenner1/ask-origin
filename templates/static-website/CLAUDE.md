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

Available commands:
- `./scripts/build.sh` - Copies src/ to public/{{PROJECT_NAME}}/
- `./scripts/start.sh` - Starts development server on port 8181
- `./scripts/stop.sh` - Stops development server
- `./scripts/deploy.sh` - Deploys to GitLab Pages

Or use Makefile shortcuts:
- `make build` - Build project
- `make start` - Start dev server
- `make stop` - Stop dev server
- `make deploy` - Deploy to GitLab

### AI Context (Symlinked)

Located at: `./ai-context/` → `../../.shared/ai-context/`

**Grammarly Design System documentation:**
```
Read(ai-context/gds/llms.txt)              # Complete GDS reference
Read(ai-context/gds/llms/component-*.txt)  # Individual components
```

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
