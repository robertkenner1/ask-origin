# Shared Claude Code Settings

This directory contains the shared Claude Code settings template that gets copied to new projects.

## Purpose

The `settings.local.json.template` file defines default permissions and MCP server configurations that will be copied to each new project's `.claude/settings.local.json` file during project creation.

## What This Enables

When copied to a project, the settings file grants Claude Code permission to:

### 1. Read AI Context
```json
"Read(ai-context/**)"
```
- Allows reading all files in the `ai-context/` directory (symlinked from `.shared/ai-context/`)
- Provides access to Grammarly Design System documentation

### 2. Read Scripts
```json
"Read(scripts/**)"
```
- Allows reading all files in the `scripts/` directory (symlinked from `.shared/scripts/`)
- Enables Claude to understand available automation scripts

### 3. Execute Scripts
```json
"Bash(./scripts/*.sh:*)"
```
- Allows executing any shell script in the `scripts/` directory
- Enables Claude to run build, start, stop, deploy scripts

### 4. Run Make Commands
```json
"Bash(make:*)"
```
- Allows executing any make command from the project's Makefile
- Quick access to common development tasks

### 5. Git Operations
```json
"Bash(git add:*)",
"Bash(git reset:*)",
"Bash(git commit:*)",
"Bash(git status:*)",
"Bash(git diff:*)",
"Bash(git log:*)",
"Bash(git branch:*)",
"Bash(git checkout:*)"
```
- Full git workflow support
- Enables Claude to commit changes, check status, view diffs

### 6. Package Management
```json
"Bash(npm:*)",
"Bash(pnpm:*)"
```
- Install and manage dependencies
- Run package scripts

### 7. Deployment
```json
"Bash(vercel:*)"
```
- Deploy to Vercel
- Manage Vercel deployments

### 8. MCP Servers
```json
"enabledMcpjsonServers": [
  "playwright",
  "sourcegraph",
  "figma-dev-mode-mcp-server"
]
```
- **Playwright**: Browser automation and testing
- **Sourcegraph**: Code search across repositories
- **Figma**: Design-to-code workflows

## How It Works

1. **Template Storage**: The template lives at `.shared/.claude/settings.local.json.template`
2. **Project Creation**: When running `./repo-scripts/create-project.sh`, the script:
   - Creates `projects/[name]/.claude/` directory
   - Copies the template to `projects/[name]/.claude/settings.local.json`
3. **Usage**: When Claude Code runs in a project directory, it automatically uses the project's settings file

## Customization

### Per-Project Customization
To customize settings for a specific project:
1. Navigate to the project: `cd projects/[project-name]/`
2. Edit `.claude/settings.local.json`
3. Add project-specific permissions or MCP servers

### Global Template Update
To update settings for all new projects:
1. Edit `.shared/.claude/settings.local.json.template`
2. All projects created after this will use the updated settings
3. Existing projects are not affected

## Security Notes

- These permissions are scoped to the project directory
- Symlinked paths (`scripts/`, `ai-context/`) are relative to the project
- Git operations are limited to the commands listed
- No file system operations outside the project directory

## Verifying Settings

To verify Claude Code is using the correct settings:
1. Start Claude Code in a project directory
2. Claude will have access to commands and files as configured
3. Check `.claude/settings.local.json` in your project to see active permissions

## Example Project Structure

```
projects/my-project/
├── .claude/
│   └── settings.local.json     # Copied from shared template
├── scripts/                     # Symlink to ../../.shared/scripts/
├── ai-context/                  # Symlink to ../../.shared/ai-context/
├── src/
└── .project.json
```

## Related Documentation

- **Architecture**: See `/ARCHITECTURE.md` for complete symlink architecture
- **Scripts**: See `.shared/scripts/README.md` for available scripts
- **AI Context**: See `.shared/ai-context/README.md` for GDS documentation
