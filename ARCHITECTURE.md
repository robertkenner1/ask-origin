# Architecture: Self-Sufficient Projects with Symlinks

## Overview

This monorepo uses **symlinks** to create self-sufficient projects that can work independently while avoiding duplication of shared resources. This architecture is specifically designed for AI assistants (like Claude Code) that work within a project directory.

## The Problem We Solved

**AI Assistant Working Directory Constraint:**
```bash
# When user starts AI assistant in a project:
cd projects/my-project/
claude

# AI can only access files within this directory
# AI CANNOT access:
../../scripts/          # Outside working directory
../../ai-context/       # Outside working directory
../../.mcp.json         # Outside working directory
```

**Requirements:**
1. ✅ Projects must be self-sufficient (AI works in project dir)
2. ✅ Avoid massive duplication (328KB ai-context × N projects)
3. ✅ Easy updates (fix once, propagate automatically)
4. ✅ Template-specific configs (different Makefiles, MCP servers)

## The Solution: Selective Symlinks

Use symlinks for **large, shared, read-only resources** while copying **small, customizable configs**.

---

## Repository Structure

```
ai-frontend-prototypes/
│
├── .shared/                    # 🔗 Shared resources (source of truth)
│   ├── scripts/               # Executable scripts for all projects
│   │   ├── build.sh          # Auto-detects & builds any project type
│   │   ├── start.sh          # Starts dev server
│   │   ├── stop.sh           # Stops dev server
│   │   ├── deploy.sh         # Deploys to GitLab Pages
│   │   └── deploy-vercel.sh  # Deploys to Vercel
│   │
│   └── ai-context/           # AI documentation (328KB)
│       ├── CLAUDE.md
│       └── gds/              # Grammarly Design System docs
│           ├── llms.txt
│           ├── components.json
│           └── llms/
│
├── repo-scripts/              # 📦 Repository management scripts
│   ├── create-project.sh     # Creates new project with symlinks
│   ├── list-projects.sh      # Lists all projects
│   ├── delete-project.sh     # Deletes project & branch
│   └── ...
│
├── templates/                 # 📋 Project templates
│   ├── static-website/
│   │   ├── src/              # Template source files
│   │   ├── Makefile          # Static website Makefile
│   │   ├── .mcp.json         # MCP servers for static projects
│   │   └── CLAUDE.md         # Template instructions
│   │
│   └── ai-editor/
│       ├── src/
│       ├── Makefile          # Next.js Makefile (different!)
│       ├── .mcp.json         # Different MCP servers
│       └── CLAUDE.md         # Next.js-specific instructions
│
├── projects/                  # 🎨 Active projects
│   └── my-project/           # ✅ Self-sufficient project
│       ├── src/              # 📄 Real files (project source)
│       ├── scripts/          # 🔗 Symlink → ../../.shared/scripts/
│       ├── ai-context/       # 🔗 Symlink → ../../.shared/ai-context/
│       ├── .mcp.json         # 📄 Real file (from template)
│       ├── .project.json     # 📄 Real file (project metadata)
│       ├── Makefile          # 📄 Real file (from template)
│       └── CLAUDE.md         # 📄 Real file (project instructions)
│
├── public/                    # 🌐 Built/deployed projects
├── Makefile                   # Repository-level commands
├── build-sitemap.js           # Master index generator
└── package.json
```

---

## What Gets Symlinked vs Copied

| Resource | Strategy | Size | Reason | Updates |
|----------|----------|------|--------|---------|
| **scripts/** | 🔗 Symlink | ~50KB | Executables, shared logic | Automatic |
| **ai-context/** | 🔗 Symlink | 328KB | Read-only docs, large | Automatic |
| **.mcp.json** | 📄 Copy | <1KB | Template-specific servers | Manual |
| **Makefile** | 📄 Copy | <5KB | Template-specific commands | Manual |
| **CLAUDE.md** | 📄 Copy | <10KB | Project instructions | Manual |
| **.project.json** | 📄 Generate | <1KB | Project metadata | N/A |
| **src/** | 📄 Copy/Create | Varies | Project source code | N/A |

---

## How It Works

### 1. Creating a New Project

```bash
# From repository root
make new PROJECT=my-awesome-project

# What happens:
# 1. Prompts for template (static-website or ai-editor)
# 2. Creates projects/my-awesome-project/
# 3. Copies template files (src, Makefile, .mcp.json, CLAUDE.md)
# 4. Creates symlink: scripts/ → ../../.shared/scripts/
# 5. Creates symlink: ai-context/ → ../../.shared/ai-context/
# 6. Generates .project.json with metadata
# 7. Creates git branch: proj-my-awesome-project
# 8. Launches Claude Code in project directory
```

### 2. Working in a Project

```bash
# User navigates to project
cd projects/my-awesome-project/

# Start Claude Code (or any AI assistant)
claude

# AI sees this structure:
my-awesome-project/
├── src/              # ✅ Real project files
├── scripts/          # ✅ Via symlink (appears as directory)
│   ├── build.sh
│   ├── deploy.sh
│   └── start.sh
├── ai-context/       # ✅ Via symlink (appears as directory)
│   └── gds/
├── .mcp.json         # ✅ MCP servers load
├── Makefile          # ✅ Available commands
└── CLAUDE.md         # ✅ Project instructions
```

**AI Assistant can:**
- ✅ Execute scripts: `./scripts/build.sh`
- ✅ Read AI context: `Read(ai-context/gds/llms.txt)`
- ✅ Use MCP servers defined in `.mcp.json`
- ✅ Run Make commands: `make build`

**AI Assistant CAN'T access:**
- ❌ Other projects in `../other-project/`
- ❌ Repository scripts in `../../repo-scripts/`
- ❌ Templates in `../../templates/`

**Result: Perfect isolation!**

### 3. Updating Shared Resources

**Scenario: Fix bug in build.sh**

```bash
# 1. Edit shared script
vim .shared/scripts/build.sh

# 2. Change propagates immediately to ALL projects
cd projects/any-project/
./scripts/build.sh  # ← Uses updated script automatically!
```

**Scenario: Update Grammarly Design System docs**

```bash
# 1. Update docs
cp new-gds-docs.txt .shared/ai-context/gds/llms.txt

# 2. All projects see updated docs immediately
cd projects/any-project/
cat ai-context/gds/llms.txt  # ← Shows new content
```

---

## Symlink Behavior with Claude Code

### ✅ What Works

1. **Read Tool**
   ```bash
   Read(ai-context/gds/llms.txt)
   # ✅ Works perfectly, reads through symlink
   ```

2. **Bash Commands**
   ```bash
   cat scripts/build.sh
   ./scripts/build.sh
   # ✅ All shell commands follow symlinks
   ```

3. **MCP Configuration**
   ```bash
   # .mcp.json can be symlinked
   # ✅ MCP servers load correctly
   ```

4. **Script Execution**
   ```bash
   make build  # Calls ./scripts/build.sh
   # ✅ Executes through symlink
   ```

### ⚠️ What Doesn't Work

1. **Autocomplete @ Mentions**
   ```
   @ai-context/gds/llms.txt
   # ❌ Symlinked files don't appear in autocomplete
   ```

   **Workaround:** Explicitly tell Claude the path:
   ```
   "Read ai-context/gds/llms.txt"
   # ✅ Works even without autocomplete
   ```

2. **File Browser UI**
   - Symlinked directories may not expand in UI
   - **Solution:** Use Glob, Grep, or explicit Read commands

---

## Project Types & Templates

### Static Website Template

**Use for:** HTML/CSS/JS prototypes, landing pages

**Includes:**
- Simple src/ structure (index.html, styles.css, script.js)
- Makefile with static build commands
- Basic MCP servers (Playwright, Sourcegraph)
- Port 8181 dev server

**Build process:**
```bash
make build  # Copies src/ to public/my-project/
make start  # Starts http-server on :8181
```

### AI Editor Template

**Use for:** Next.js applications, React apps

**Includes:**
- Next.js project structure
- TypeScript, Tailwind, React
- Makefile with Next.js commands
- Additional MCP servers
- Port 2345 dev server

**Build process:**
```bash
make build  # Runs npm run build
make start  # Runs npm run dev
```

---

## Common Operations

### Building a Project

```bash
# From project directory
cd projects/my-project/
make build

# Or directly call script
./scripts/build.sh

# What it does:
# - Auto-detects project type (package.json or src/)
# - Next.js: runs npm run build
# - Static: copies src/ to public/my-project/
```

### Starting Dev Server

```bash
cd projects/my-project/
make start

# Next.js projects: npm run dev (port from package.json)
# Static projects: http-server on :8181
```

### Deploying to GitLab Pages

```bash
cd projects/my-project/
make deploy MESSAGE="Add new feature"

# What it does:
# 1. Builds project
# 2. Builds master sitemap
# 3. Git add + commit + push
# 4. Deployed to: https://ai-frontend-prototypes-c8939b.gpages.io/my-project/
```

### Deploying to Vercel

```bash
cd projects/my-project/
make deploy-vercel

# Only for Next.js projects (.project.json deployment: "vercel")
# Creates preview deployment
```

---

## Customizing a Project

### Custom Build Script

If a project needs custom build logic:

```bash
cd projects/my-project/

# 1. Remove symlink
rm scripts
mkdir scripts

# 2. Copy scripts you want to customize
cp ../../.shared/scripts/build.sh scripts/
cp ../../.shared/scripts/deploy.sh scripts/

# 3. Edit custom build
vim scripts/build.sh

# 4. Keep other scripts as symlinks (optional)
ln -s ../../../.shared/scripts/start.sh scripts/start.sh
```

**Note:** Once you break the symlink, updates to `.shared/scripts/` won't propagate to this project.

### Custom MCP Servers

```bash
# .mcp.json is already a real file (not symlinked)
vim .mcp.json

# Add project-specific MCP server
{
  "mcpServers": {
    "playwright": {...},        # From template
    "custom-server": {          # Project-specific
      "type": "http",
      "url": "http://localhost:9000"
    }
  }
}
```

### Custom Makefile

```bash
# Makefile is already a real file (not symlinked)
vim Makefile

# Add custom targets
custom-task:
    @echo "Running custom task"
    @./scripts/custom.sh
```

---

## Git Workflow

### Branch Strategy

Each project = one git branch:

```bash
# Branch name format
proj-{project-name}

# Examples
proj-my-button-component
proj-golden-path-redesign
proj-customer-support-agent
```

### Working on a Project

```bash
# 1. Create project (auto-creates branch)
make new PROJECT=my-feature

# 2. Work in project directory
cd projects/my-feature/
claude

# 3. Deploy when ready
make deploy MESSAGE="Implement feature"

# 4. Create merge request (manual)
# Visit GitLab and create MR from proj-my-feature → main
```

---

## Troubleshooting

### Symlink appears broken

```bash
# Check symlink target
ls -la scripts
# Should show: scripts -> ../../.shared/scripts

# If broken, recreate
rm scripts
ln -s ../../.shared/scripts scripts
```

### AI can't find ai-context files

```bash
# Check symlink exists
ls -la ai-context

# Explicitly tell Claude the path
"Read ai-context/gds/llms.txt"

# Or use Glob to discover files
"Glob ai-context/**/*.txt"
```

### Script not executable

```bash
# Make scripts executable
chmod +x scripts/*.sh

# Or fix in shared location (affects all projects)
chmod +x .shared/scripts/*.sh
```

### MCP servers not loading

```bash
# Check .mcp.json exists and is valid JSON
cat .mcp.json | jq .

# Restart Claude Code
# MCP servers load on startup
```

---

## Disk Usage Comparison

### Old Approach (Full Copy)
```
projects/project-1/
  ├── scripts/         ~50KB
  ├── ai-context/      328KB
  ├── .mcp.json        <1KB
  ├── Makefile         <5KB
  Total: ~383KB overhead per project

10 projects = 3.83MB duplication
```

### New Approach (Symlinks)
```
projects/project-1/
  ├── scripts/         <1KB (symlink)
  ├── ai-context/      <1KB (symlink)
  ├── .mcp.json        <1KB
  ├── Makefile         <5KB
  Total: ~7KB overhead per project

10 projects = 70KB duplication
Shared: 378KB (one copy in .shared/)

Total: 448KB (vs 3.83MB) = 88% savings!
```

---

## Benefits

### ✅ For Projects
- **Self-sufficient**: AI can work entirely within project directory
- **Isolated**: Can't accidentally modify other projects
- **Up-to-date**: Automatically get script/doc updates
- **Customizable**: Can override when needed

### ✅ For Repository
- **DRY**: 378KB shared resources stored once
- **Easy updates**: Fix once, propagate everywhere
- **Clear separation**: Repo-wide vs project-specific
- **Template flexibility**: Each template has own configs

### ✅ For Development
- **Fast project creation**: Symlinks are instant
- **Consistent tooling**: All projects use same scripts
- **Easy debugging**: Fix script once for all projects
- **Git-friendly**: Symlinks tracked in git

---

## Best Practices

### 1. Don't Edit Symlinked Files Directly

```bash
# ❌ DON'T
vim projects/my-project/scripts/build.sh
# This edits .shared/scripts/build.sh affecting ALL projects

# ✅ DO (if you need custom logic)
rm projects/my-project/scripts  # Remove symlink
mkdir projects/my-project/scripts
cp .shared/scripts/build.sh projects/my-project/scripts/
vim projects/my-project/scripts/build.sh  # Now project-specific
```

### 2. Document Symlinked Resources in CLAUDE.md

```markdown
## Available Resources (Symlinked)

- **Scripts**: `./scripts/` → `../../.shared/scripts/`
- **AI Context**: `./ai-context/` → `../../.shared/ai-context/`

These are symlinks to shared resources. Changes in .shared/ affect all projects.

## Grammarly Design System

Reference with: `Read(ai-context/gds/llms.txt)`
```

### 3. Test Scripts in Multiple Project Types

When updating shared scripts, test with both:
- Static website project (src/ directory)
- Next.js project (package.json)

### 4. Keep Templates Lightweight

Templates should only include:
- Source file structure
- Template-specific configs (Makefile, .mcp.json)
- Template instructions (CLAUDE.md)

Don't include scripts or ai-context (added via symlinks).

---

## Migration Guide

### For Existing Projects

Existing projects created before this architecture don't have symlinks. To migrate:

```bash
cd projects/old-project/

# 1. Backup existing scripts (if customized)
mv scripts scripts.backup

# 2. Create symlink
ln -s ../../.shared/scripts scripts

# 3. Same for ai-context
mv ai-context ai-context.backup  # If it exists
ln -s ../../.shared/ai-context ai-context

# 4. Test
./scripts/build.sh
make build
```

**Note:** Migration is optional. Old projects can continue working without symlinks.

---

## Summary

This architecture provides the **best of both worlds**:

1. **Projects are self-sufficient** ← AI assistants can work in project dir
2. **Zero duplication of large resources** ← Symlinks to .shared/
3. **Automatic updates** ← Fix once, all projects benefit
4. **Template flexibility** ← Each template has own Makefile, MCP servers
5. **Customization when needed** ← Break symlink, customize away

**The key insight:** Symlinks make resources *appear* inside the project directory while actually living in one shared location.
