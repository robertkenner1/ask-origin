# AI Frontend Experiments

A monorepo for rapid UI prototyping with AI assistance.

## Prerequisites

**Configure GitLab and Git access** - Before you begin, ensure you have GitLab access and SSH keys configured. See [docs/setup_gitlab.md](./docs/setup_gitlab.md) for detailed setup instructions.

**Configure npm to access Artifactory packages** - If you plan to use Grammarly Design System (GDS) or other internal packages, you need to configure npm to access Artifactory:

```bash
./.shared/scripts/setup-artifactory-npm.sh
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

That's it! Now you can ask Claude to help you with your prototype.
For example:
```
create a prototype of the web page with demo text at the center and popup window that appear when user hovering cursor over the text. Popup window should be 100% the same like in figma:
  https://www.figma.com/design/JqBLpfjQnFwef7BiXzMA2u/Clean-UX-UI?node-id=2028-891&t=3xIpuQ8XOUW2Pg1L-4, with excatly the same grammarly logo svg and fonts that you can find in desygn systems.
  iterate how many times you need and use Playwright mcp to compare result and original.
  After that modify the popup window, so it will look like the thinking cloud.
```

And that what we have in result from one prompt: https://ai-frontend-prototypes-c8939b.gpages.io/thinking-grammarly/

During the development you can preview result here: http://127.0.0.1:8181/ (Open in Incognito to avoid cache issue)

When you finish development ask claude to publish the result or just run "make publish", finish MR creation and merge it.


## What This Repo Provides

### 🛠️ Automated Development Tools
`make` installs: Node.js, http-server, Vercel CLI, and MCP servers automatically.

### 📦 Project Templates
- **static-website** - HTML/CSS/JS for simple prototypes
- **ai-editor** - Next.js for interactive applications

```bash
make new PROJECT=my-prototype
```

### 🤖 AI Development Context

**GDS Documentation** - Complete Grammarly Design System docs in `.shared/ai-context/gds-docs/` with 40+ components optimized for AI parsing.

**MCP Servers** - Pre-configured in `.claude/claude_mcp_config.json`:
- **Playwright** - Browser automation, testing, screenshots
- **Sourcegraph** - Code search across Grammarly repos
- **Figma** - Design integration (requires manual setup)

**Claude Slash Commands** - Custom workflows in `.shared/.claude/commands/`:
- `/deploy` - Deploy project to Vercel with environment variables
- `/push [message]` - Git add, commit, and push changes

**CLAUDE.md Files** - AI instructions at repo, project, and template levels with architecture, workflows, and tool usage guidelines.

### 🚀 Deployment

**GitLab Pages** - Automatic on merge to `main` → https://ai-frontend-prototypes-c8939b.gpages.io/

**Vercel** - Conditional per-project deployment on feature branches. Configure in `.project.json`:
```

## Live Demo

🚀 **GitLab Pages:** https://ai-frontend-prototypes-c8939b.gpages.io/
🚀 **Vercel:** https://vercel.com/grammarly-0ad4c188

## Project Structure

```
ai-frontend-prototypes/
├── projects/                  # Source files
│   └── my-project/
│       ├── src/              # Edit files here
│       ├── prompts/          # AI prompts
│       └── CLAUDE.md         # Project settings
├── public/                   # Built files (auto-generated)
├── templates/                # Project templates
└── Makefile                  # Build automation
```

## Commands

```bash
make                         # Full setup (first time)
make new PROJECT=my-project  # Create new project
make start                   # Build and start server
make build                   # Build all projects
make list                    # List all projects
make deploy                  # Git commit and push
```

## Creating Projects

### With Make (Recommended)
```bash
make new PROJECT=button-animations
```

### With AI
Ask: "Create a new project called 'grammarly-tooltip' with hover effects"

## Development

- **Edit files in:** `projects/[project-name]/src/`
- **Local server:** http://localhost:8181
- **Auto-builds:** Changes in `src/` → `public/`

## MCP Servers

Pre-configured in `.claude/claude_mcp_config.json`:
- **Playwright** - Browser automation and testing
- **Sourcegraph** - Code search across repositories
- **Figma** - Design integration (manual setup required)

See [`.claude/README.md`](./.claude/README.md) for detailed documentation.

## Git Workflow

`make new` automatically:
1. Stashes current changes
2. Switches to main branch
3. Pulls latest changes
4. Creates new branch from main
5. Restores stashed changes

## Troubleshooting

**Project not appearing?**
```bash
make build
```

**Development server issues?**
```bash
make start
```

---

Happy prototyping! 🚀