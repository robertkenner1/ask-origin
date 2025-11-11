# AI Frontend Experiments

A monorepo for rapid UI prototyping with AI assistance.

## Prerequisites

**Configure GitLab and Git access** - Before you begin, ensure you have GitLab access and SSH keys configured. See [docs/setup_gitlab.md](./docs/setup_gitlab.md) for detailed setup instructions.

**Configure npm to access Artifactory packages** - If you plan to use Grammarly Design System (GDS) or other internal packages, you need to configure npm to access Artifactory:

```bash
./repo-scripts/setup-artifactory-npm.sh
```


**IDE Setup** - This setup works best with [Claude Code CLI](https://docs.claude.com/en/docs/claude-code). If you use Cursor, VS Code, or JetBrains IDEs, consider using the Claude Code plugin:
- [VS Code/Cursor Extension](https://docs.claude.com/en/docs/claude-code/vs-code)
- [JetBrains Plugin](https://docs.claude.com/en/docs/claude-code/jetbrains)

**Vercel Account** - Corporate Vercel account is required for deployments. As we are in PoC stage with Vercel, please contact artur.kiryiak to add you to the Vercel PoC program.

## Quick Start

```bash
git clone git@ssh.gitlab.grammarly.io:sandbox/ai-frontend-prototypes.git
cd ./ai-frontend-prototypes
make
```

That's it! Now follow the steps provided by the script to finish with your project setup. 

During the development you can preview result here: http://127.0.0.1:3000/ (Open in Incognito to avoid cache issue)

Once you're ready to deploy your prototype, type `/push` in your claude code session. This command will send your code to the GitLab repository, where GitLab CI will manage the deployment process.

**📖 For detailed workflows (new projects, iterations, deployments), see [Development Workflows](./docs/flows.md)**

## Vercel Deployment

This repository uses Vercel for automated deployments. All projects are deployed to the Grammarly Vercel team.

**Team Information:**
- **Team Name:** Grammarly
- **Team ID:** `grammarly-0ad4c188`
- **Team Dashboard:** https://vercel.com/grammarly-0ad4c188

### Environment Variables

If your project requires environment variables (API keys, configuration values, etc.), you'll need to configure them in the Vercel dashboard:

1. Navigate to your project: https://vercel.com/grammarly-0ad4c188/[your-project-name]
2. Go to **Settings** → **Environment Variables**
3. Add or link environment variables as needed

**Documentation:** Follow the official [Vercel Environment Variables Guide](https://vercel.com/docs/environment-variables) for detailed instructions on:
- Adding environment variables
- Scoping variables by environment (Production, Preview, Development)
- Using environment variables in your code
- Linking shared environment variables across projects

## What This Repo Provides

### 🛠️ Automated Development Tools
`make` installs: Node.js, http-server, Vercel CLI, and MCP servers automatically.

### 📦 Project Templates
- **static-website** - HTML/CSS/JS for simple prototypes
- **ai-editor** - Next.js for interactive applications
- **other-vercel** - Allows users to create projects using any framework supported by Vercel.


### 🤖 AI Development Context

**Claude Code Skills**
 - **GDS Documentation** - Complete Grammarly Design System docs with 40+ components optimized for AI parsing.

**MCP Servers** - Pre-configured in `.claude/claude_mcp_config.json`:
- **Playwright** - Browser automation, testing, screenshots
- **Sourcegraph** - Code search across Grammarly repos
- **next-devtools** - NextJS debug and coding
- **Figma** - Design integration (requires manual setup)

**Claude Slash Commands** - Custom workflows in `.shared/.claude/commands/`:
- `/deploy` - Deploy project to Vercel with environment variables
- `/push [message]` - Git add, commit, and push changes

**CLAUDE.md Files** - AI instructions at repo, project, and template levels with architecture, workflows, and tool usage guidelines.

### 🚀 Deployment

**GitLab Pages** - Automatic on merge to `main` → https://ai-frontend-prototypes-c8939b.gpages.io/

**Vercel Deployment** - Automatic deployment via CI with:
- Automatic deployment on branch push (triggered by file changes in project directory)
- Production environment with SSO protection enabled
- Per-project deployment URLs: `https://[project-name]-grammarly-0ad4c188.vercel.app/`


## Live Demo

🚀 **GitLab Pages:** https://ai-frontend-prototypes-c8939b.gpages.io/
🚀 **Vercel:** https://vercel.com/grammarly-0ad4c188

## Known Issues

### Vercel Environment Variables

**Manual Configuration Required** - Shared environment variables in Vercel need to be manually attached to each project:

1. Navigate to your project in Vercel dashboard: https://vercel.com/grammarly-0ad4c188/[your-project]
2. Go to **Settings** → **Environment Variables**
3. Link existing shared environment variables or create project-specific ones
4. Redeploy if variables are needed for build/runtime

**Note:** This is a current limitation of Vercel's API - environment variables cannot be automatically linked during project creation via CLI or API.

---

Happy prototyping! 🚀