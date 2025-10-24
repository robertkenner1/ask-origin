# Scripts Directory

This directory contains reusable shell scripts extracted from the main Makefile for better maintainability and reusability.

## Philosophy

- **Modularity**: Each script handles one specific task
- **Reusability**: Scripts can be called from Makefile or directly
- **Maintainability**: Easier to debug and update individual scripts
- **Project-level usage**: Scripts can be used in project-specific Makefiles

## Available Scripts

### Setup Scripts

#### `check-prereqs.sh`
Check and install system prerequisites.

**Usage:**
```bash
./scripts/check-prereqs.sh
# or
make prereqs
```

**What it checks:**
- Homebrew (macOS package manager)
- Node.js
- Git
- Claude Code CLI
- Vercel CLI (for deployment)
- Project dependencies (npm install)

**Auto-install:** Will attempt to install missing prerequisites automatically.

---

#### `install-mcps.sh`
Check MCP server configuration status.

**Usage:**
```bash
./scripts/install-mcps.sh
# or
make install
```

**What it checks:**
- `.claude/claude_mcp_config.json` exists
- Lists pre-configured MCP servers:
  - Playwright MCP (browser automation)
  - Sourcegraph MCP (code search)
  - Cortex MCP (service catalog)
  - Workflows MCP (engineering workflows)
- Provides Figma MCP manual installation instructions

**Note:** MCP servers are pre-configured in `.claude/claude_mcp_config.json` and will be automatically loaded by Claude Code when running in this directory

---

### Project Management Scripts

#### `create-project.sh`
Create a new project from available templates.

**Usage:**
```bash
./scripts/create-project.sh [project-name]
# or
make new PROJECT=my-project
```

**What it does:**
1. Lists available templates (static-website, ai-editor, etc.)
2. Prompts for template selection
3. Slugifies project name (lowercase, hyphens)
4. Creates branch with `proj-` prefix: `proj-my-project`
5. Copies selected template to `projects/[name]/`
6. Generates `.project.json` with metadata
7. Processes template variables
8. Installs dependencies (if Node.js project)
9. Starts appropriate dev server
10. Launches Claude Code

**Arguments:**
- `$1` - Project name (optional, will prompt if not provided)
  - Name will be slugified automatically
  - Example: "My Project" → "my-project"

**Branch naming:**
- Convention: `proj-{slugified-name}`
- Example: "My Cool Project" → branch `proj-my-cool-project`

**Project metadata:**
- Creates `.project.json` with deployment info
- Includes Vercel URLs for Next.js projects
- Includes GitLab Pages URLs for static sites
- Template variables replaced: `{{PROJECT_NAME}}`, `{{PROJECT_DESCRIPTION}}`, `{{BRANCH_NAME}}`, etc.

**Template selection:**
- Interactive menu shows all templates
- Select by number or name
- Each template has specific deployment target

---

#### `delete-project.sh`
Delete a project and its associated resources.

**Usage:**
```bash
./scripts/delete-project.sh [project-name]
# or
make delete PROJECT=my-project
```

**What it deletes:**
- Project files in `projects/[name]/`
- Built files in `public/[name]/`
- Local git branch
- Remote git branch

**Safety:** Requires confirmation before deletion.

**Arguments:**
- `$1` - Project name (optional, will prompt if not provided)

---

### Development Scripts

#### `list-projects.sh`
List all available projects in the monorepo.

**Usage:**
```bash
./scripts/list-projects.sh
# or
make list
```

**Output:**
- Project names
- Local URLs
- Project settings indicator

---

#### `start-server.sh`
Build projects and start development server.

**Usage:**
```bash
./scripts/start-server.sh
# or
make start
```

**What it does:**
1. Stops existing dev server (port 8181)
2. Builds all projects
3. Starts dev server

**Server:** http://localhost:8181

---

#### `stop-server.sh`
Stop the development server.

**Usage:**
```bash
./scripts/stop-server.sh
# or
make stop
```

**Port:** 8181 (default)

---

### Deployment Scripts

#### `deploy.sh`
Build, commit, and push changes to GitLab.

**Usage:**
```bash
./scripts/deploy.sh "Commit message"
# or
make deploy MESSAGE="Commit message"
```

**What it does:**
1. Builds all projects
2. Adds all changes to git
3. Creates commit with provided message
4. Pushes to remote branch

**Arguments:**
- `$1` - Commit message (optional, will prompt if not provided)

---

#### `deploy-vercel.sh`
Deploy Next.js projects to Vercel preview environments.

**Usage:**
```bash
./scripts/deploy-vercel.sh [project-name]
# or
make deploy-vercel PROJECT=my-ai-editor
# or (auto-detect from branch)
make deploy-vercel
```

**What it does:**
1. Auto-detects project from git branch (proj-* pattern) or uses provided name
2. Validates project directory and `.project.json` exist
3. Checks deployment type is "vercel"
4. Verifies Vercel CLI and `VERCEL_TOKEN` are available
5. Checks if Vercel project already exists
6. Links project to Vercel (creates project if needed)
7. Deploys to Vercel preview (NOT production)
8. Displays deployment URL

**Arguments:**
- `$1` - Project name (optional, auto-detects from branch if not provided)

**Environment Variables:**
- `VERCEL_TOKEN` (optional for local, required for CI/CD) - Vercel authentication token
  - Local: Not needed if already logged in with `vercel login`
  - Get token from: https://vercel.com/account/tokens
  - For manual use with token: `export VERCEL_TOKEN=your_token`
  - For GitLab CI: Add as masked CI/CD variable (required)

**Branch Detection:**
- Branch `proj-my-app` → deploys `projects/my-app/`
- Only works for branches starting with `proj-`

**Requirements:**
- Vercel CLI installed (`brew install vercel-cli`)
- Authentication: Either logged in (`vercel login`) OR `VERCEL_TOKEN` set
- Project has `.project.json` with `"deployment": "vercel"`
- Project has `package.json` (Next.js project)

**GitLab CI Integration:**
- Automatically runs on `proj-*` branches
- Requires `VERCEL_TOKEN` in GitLab CI/CD variables
- Creates preview deployment URL in job output
- Environment: `vercel-preview/$PROJECT_NAME`

**Example Output:**
```
🚀 Vercel Deployment: my-ai-editor

Checking project directory              ✅
Checking project metadata               ✅
Validating deployment type              ✅
Checking package.json                   ✅
Checking Vercel CLI                     ✅
Checking Vercel authentication          ✅ (logged in as your-username)

📋 Vercel Project Details:
   📦 Project: my-ai-editor
   📁 Directory: projects/my-ai-editor
   👥 Team: grammarly-0ad4c188

🔍 Checking Vercel project status...
Listing Vercel projects                 ✅
   ✓ Project exists on Vercel

🔗 Linking project to Vercel...
Linking project                         ✅

🚀 Deploying to Vercel preview...
Deploying project                       ✅

✅ Deployment successful!

🌐 Preview URL:
   https://my-ai-editor-git-proj-my-ai-editor-grammarly-0ad4c188.vercel.app
```

**Notes:**
- Deployments are ALWAYS preview (branch) deployments, never production
- Preview URLs follow pattern: `https://[project]-git-[branch]-[team].vercel.app`
- Creates `.vercel/` folder in project directory (gitignored)
- Vercel team slug: `grammarly-0ad4c188`

---

## Script Features

### Color-Coded Output

All scripts use consistent color coding:
- ✅ **Green** - Success
- ❌ **Red** - Error
- ⚠️ **Yellow** - Warning

### Error Handling

Scripts use `set -e` to exit on error, ensuring safe execution.

### Progress Indicators

Formatted output with consistent 40-character column width:
```
Checking Node.js                         ✅
Installing dependencies                  ✅
```

## Using Scripts in Project Makefiles

Scripts can be called from project-level Makefiles:

```makefile
# Example: projects/my-project/Makefile

.PHONY: deploy

deploy:
	@../../scripts/deploy.sh "Update my-project"
```

## Using Scripts Directly

All scripts are executable and can be run directly:

```bash
cd /path/to/ai-frontend-prototypes
./scripts/list-projects.sh
./scripts/create-project.sh my-new-project
./scripts/deploy.sh "Add new feature"
```

## Extending Scripts

When adding new scripts:

1. **Create script** in `scripts/` directory
2. **Make executable**: `chmod +x scripts/your-script.sh`
3. **Add shebang**: `#!/bin/bash`
4. **Use error handling**: `set -e`
5. **Add colors**: Use RED, GREEN, YELLOW variables
6. **Format output**: 40-character column width
7. **Add to Makefile**: Create target that calls your script
8. **Document here**: Add to this README

### Script Template

```bash
#!/bin/bash
# Description of what this script does

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get arguments
ARG1="${1:-default_value}"

echo "🚀 Script Name"
echo ""

# Main logic
printf "%-40s" "Doing something"
if some_command >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

echo ""
echo "${GREEN}✅ Success message${NC}"
```

## Troubleshooting

### "Permission denied" Error

Make script executable:
```bash
chmod +x scripts/your-script.sh
```

### Script Not Found

Ensure you're running from repository root:
```bash
cd /path/to/ai-frontend-prototypes
./scripts/your-script.sh
```

Or use absolute path:
```bash
/absolute/path/to/scripts/your-script.sh
```

### "Command not found" Error

Check prerequisites:
```bash
make prereqs
```

---

**Maintained by:** AI Frontend Prototyping Team
**Last updated:** 2025-10-22
