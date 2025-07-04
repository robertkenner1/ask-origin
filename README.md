# AI Frontend Experiments

A monorepo for rapid UI prototyping with AI assistance.

## Quick Start

```bash
git clone git@ssh.gitlab.grammarly.io:eng-shared/ai-frontend-prototypes.git
cd ./ai-frontend-prototypes
make
```

That's it! This will:
- Check prerequisites
- Install MCP servers
- Create your first project
- Start the development server

## Live Demo

🚀 **Deployed at:** https://ai-frontend-prototypes-c8939b.gpages.io/

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

The setup automatically installs:
- **Playwright** - Browser automation
- **Sourcegraph** - Code search
- **Figma** - Design system integration (manual setup required)

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