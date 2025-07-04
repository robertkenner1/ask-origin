# AI Frontend Experiments

A monorepo for rapid UI prototyping with AI assistance.

## Quick Start

```bash
git clone git@ssh.gitlab.grammarly.io:eng-shared/ai-frontend-prototypes.git
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