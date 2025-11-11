# Development Workflows

This document describes the two main workflows for working with AI Frontend Prototypes: creating new projects and continuing development on existing projects.

---

## New Project Creation

Create a new frontend prototype from scratch with automated setup and deployment.

### 1. Initialize Project

Run the initialization command:

```bash
make
```

This command will automatically:
- ✅ Install prerequisites (Homebrew, Node.js, Vercel CLI, dependencies)
- ✅ Create git branch: `proj-{project-name}`
- ✅ Scaffold project from template (HTML/CSS/JS or Next.js)
- ✅ Set up AI assistant context (GDS documentation, slash commands, skills)
- ✅ Configure CI/CD pipeline for Vercel deployment
- ✅ Start development server at `http://localhost:3000`


### 2. Develop with AI Assistant

Navigate to your project and launch Claude Code:

```bash
cd projects/{project-name}/
claude
```

If you prefer Cursor/VSCode, we still recommend install Claude Code extension and after that do:
```bash
cd projects/{project-name}/
cursor .
```
And launch Claude Clode plugin rightside

**During development:**
- 💻 Write code with AI assistant guidance
- 🔍 Preview locally: `http://localhost:3000` (use Incognito to avoid cache)
- 🎨 Use Playwright for visual testing and comparison
- 📚 GDS Skill auto-activates for Grammarly-style components

### 3. Deploy Changes

When ready to deploy, use the `/push` slash command:

```bash
/push
```

This will:
- 📝 Analyze changes and generate commit message
- ✅ Stage, commit, and push to remote
- 🚀 Trigger CI/CD deployment (takes 1-2 minutes)
- 📦 Deploy to: `https://{project-name}-grammarly-0ad4c188.vercel.app/`
- 🔗 Show MR link or creation URL
- 📊 Provide CI/CD tracking link

**Output example:**
```
✅ Pushed to proj-my-app

📦 Deployment URLs:
   🌐 App: https://my-app-grammarly-0ad4c188.vercel.app/
   🔧 CI/CD: https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs

🔗 Merge Request:
   Create MR: https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/merge_requests/new

⏱️  Deployment takes 1-2 minutes. Track progress at the CI/CD link above.
```

### 4. Iterate

Continue developing and deploying:

```bash
# Make changes in your project
# Then deploy again
/push
```

Repeat steps 2-3 until satisfied with the result.

### 5. Merge to Main

When your prototype is complete:

1. Visit the Merge Request URL from step 3
2. Review changes in GitLab UI
3. Approve and merge to `main` branch
4. Your project is now live on both:
   - GitLab Pages: `https://ai-frontend-prototypes-c8939b.gpages.io/{project-name}/`
   - Vercel: `https://{project-name}-grammarly-0ad4c188.vercel.app/`

---

## Continue Development

Update an existing project that has already been merged to main (new iteration, bug fixes, enhancements).

### 1. Sync with Main

Start by syncing with the latest changes:

```bash
git checkout main
git pull origin main
```

### 2. Create Iteration Branch

Create a new branch for your updates:

```bash
git checkout -b proj-{project-name}-{suffix}
```

**Branch naming options:**
- **Date suffix**: `proj-my-app-20250111` (for time-based iterations)
- **Feature suffix**: `proj-my-app-refactor` (for specific features)

**Example:**
```bash
git checkout -b proj-my-app-20250111
```

### 3. Develop with AI Assistant

Navigate to the existing project and launch Claude Code:

```bash
cd projects/{project-name}/
claude
```

**During development:**
- 💻 Make updates with AI assistant
- 🔍 Preview locally: `http://localhost:3000`
- 🎨 Test changes with Playwright
- 📚 Access GDS Skill for component updates

### 4. Deploy Changes

Use the `/push` slash command to deploy:

```bash
/push
```

This provides the same deployment flow as new projects:
- Commits and pushes to remote
- CI/CD deploys automatically (1-2 minutes)
- Shows deployment URLs and MR link
- Tracks CI/CD progress

### 5. Iterate & Merge

Continue the develop-deploy cycle:

```bash
# Make more changes
/push
# Repeat until done
```

When complete:
1. Visit the Merge Request URL
2. Review changes
3. Merge to `main` branch

---

## Quick Reference

### Commands

| Command | Purpose |
|---------|---------|
| `make new PROJECT=name` | Create new project with scaffolding |
| `cd projects/{name}/ && claude` | Start AI assistant in project |
| `/push` | Commit, push, and deploy changes |
| `git checkout main && git pull` | Sync with latest main branch |
| `git checkout -b proj-name-suffix` | Create iteration branch |

### URLs

| Type | URL Pattern |
|------|-------------|
| Local preview | `http://localhost:3000` |
| Vercel deployment | `https://{project-name}-grammarly-0ad4c188.vercel.app/` |
| GitLab Pages | `https://ai-frontend-prototypes-c8939b.gpages.io/{project-name}/` |
| CI/CD tracking | `https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs` |
| Vercel dashboard | `https://vercel.com/grammarly-0ad4c188` |

### Branch Naming

| Scenario | Branch Format | Example |
|----------|---------------|---------|
| New project | `proj-{name}` | `proj-my-app` |
| Continue (date) | `proj-{name}-{YYYYMMDD}` | `proj-my-app-20250111` |
| Continue (feature) | `proj-{name}-{feature}` | `proj-my-app-refactor` |

### Deployment

- **Time**: 1-2 minutes after push
- **Trigger**: Automatic on git push (CI/CD detects file changes)
- **Environment**: Production with SSO protection enabled
- **Tracking**: CI/CD link provided in `/push` output

---

## Tips

### Environment Variables

If your project needs environment variables (API keys, etc.):

1. Navigate to: `https://vercel.com/grammarly-0ad4c188/{your-project}`
2. Go to **Settings** → **Environment Variables**
3. Add or link variables
4. Redeploy if needed for build/runtime

See [Vercel Environment Variables Guide](https://vercel.com/docs/environment-variables) for details.

### AI Assistant Context

Each project has:
- **Slash commands**: `/push` for deployment
- **GDS Skill**: Auto-activates for UI components
- **MCP Servers**: Playwright (browser), Sourcegraph (code search), Next.js DevTools
- **Symlinked resources**: Updates to `.shared/` propagate to all projects

### Project Structure

```
projects/{project-name}/
├── src/                 # Your source code
├── scripts/             # 🔗 Shared build/deploy scripts
├── .claude/             # AI assistant configuration
│   ├── commands/        # 🔗 Shared slash commands
│   ├── skills/          # 🔗 Shared skills (GDS docs)
│   └── settings.local.json  # Project-specific settings
├── .mcp.json            # MCP server configuration
└── CLAUDE.md            # Project-specific instructions
```

### Troubleshooting

**Dev server won't start:**
- Check port 3000 isn't already in use
- Look for errors in last 20 lines of startup log

**Deployment failed:**
- Check CI/CD link for error details
- Verify all required files are committed
- Ensure environment variables are configured (if needed)

**MR not created:**
- Look for MR URL in git push output
- Manually create at: `https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/merge_requests/new`

---

## Additional Resources

- **Architecture**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed system design
- **README**: See [README.md](../README.md) for setup and overview
- **Templates**: Browse `templates/` directory for available project types
- **Claude Guide**: See [CLAUDE.md](../CLAUDE.md) for AI assistant instructions
