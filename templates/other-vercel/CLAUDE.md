# {{PROJECT_TITLE}} - Vercel Template Project

## Architecture Note

This project was initialized from a Vercel template and integrated into the monorepo with **symlinked resources**:

```
{{PROJECT_NAME}}/
├── src/              # 📄 Your project files (edit these)
├── scripts/          # 🔗 Symlink → ../../.shared/scripts/
├── .claude/          # 🔗 Symlink → ../../.shared/claude/
├── .mcp.json         # 📄 MCP servers (customizable)
├── package.json      # 📄 From Vercel template
├── CLAUDE.md         # 📄 This file
└── [other files from Vercel template]
```

**Symlinks appear as regular directories** but actually point to shared resources.

## Project Origin

This project was created using:
1. **Vercel Template**: Initialized via `vercel init` (you selected this interactively)
2. **Monorepo Integration**: Standard monorepo files overlaid on top

## Available Resources

### Scripts (Symlinked)

Located at: `./scripts/` → `../../.shared/scripts/`

Shared scripts are available but **npm scripts are recommended** for most tasks.

**Use npm scripts directly** (depends on your Vercel template):
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
```

Check `package.json` for available scripts specific to your template.

### Claude Code Skills (Symlinked)

Located at: `./.claude/` → `../../.shared/claude/`

This symlink provides access to:
- **Skills** - Claude Code skills (including GDS skill)
- **Commands** - Custom slash commands
- **Settings** - Claude configuration templates

#### Grammarly Design System (GDS) Skill

The **GDS Skill automatically activates** when you work on UI components, forms, layouts, or any interface implementation. You don't need to explicitly reference documentation.

**Available through GDS Skill:**
- 40+ React components (Button, TextField, Modal, Flex, Text, etc.)
- Design tokens (colors, spacing, typography, elevation)
- Design foundations and accessibility guidelines
- UI patterns and best practices
- Content guidelines (voice, tone, terminology)

**When GDS activates:**
- Creating Grammarly-style or professional interfaces
- Building production-quality UI with established patterns
- Implementing React components
- Working with forms, layouts, or any UI elements

To use GDS components, they need to be properly installed (depends on your template framework).

### Customization

To customize shared resources (not recommended):
1. Remove symlink: `rm scripts` or `rm .claude`
2. Create real directory: `mkdir scripts` or `mkdir .claude`
3. Copy files: `cp -r ../../.shared/scripts/* ./scripts/`

## Deployment Options

This project supports two deployment methods:

### 1. Vercel Deployment (Recommended)

From repository root:
```bash
make deploy-vercel PROJECT={{PROJECT_NAME}}
```

Or from project directory:
```bash
vercel --prod
```

**Automatic deployment**: GitLab CI deploys to Vercel preview on branch push.

### 2. GitLab Pages Deployment

From repository root:
```bash
make deploy MESSAGE="Deploy {{PROJECT_NAME}}"
```

This commits and pushes changes, triggering GitLab Pages deployment.

## Development Workflow

### Starting Development
```bash
cd projects/{{PROJECT_NAME}}
npm run dev
```

### Making Changes
1. Edit source files (depends on your Vercel template structure)
2. Test locally with `npm run dev`
3. Build with `npm run build` to verify production build
4. Commit and deploy

### Environment Variables

If your template requires environment variables:
1. Copy `.env.example` to `.env.local` (if provided)
2. Configure required variables
3. Restart dev server

## Template-Specific Notes

**Framework**: Check `package.json` dependencies to identify the framework (Next.js, React, Vue, etc.)

**Directory Structure**: Depends on the Vercel template you selected
- Next.js: typically `app/` or `pages/` directory
- React: typically `src/` directory
- Vue: typically `src/` directory

**Documentation**: Refer to the original template's README or documentation for framework-specific details.

## Common Commands

From project directory:
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter (if available)
npm run test         # Run tests (if available)

# Deployment
vercel               # Deploy to Vercel preview
vercel --prod        # Deploy to Vercel production
```

From repository root:
```bash
make build           # Build all projects
make start           # Start dev server
make deploy          # Git commit and push
make deploy-vercel PROJECT={{PROJECT_NAME}}  # Deploy to Vercel
```

## Troubleshooting

### Port Already in Use
```bash
# From repo root
make stop
# Or manually
lsof -ti:3000 | xargs kill -9  # Replace 3000 with your port
```

### Build Errors
1. Ensure dependencies are installed: `npm install`
2. Check Node.js version compatibility
3. Review Vercel template documentation

### Symlink Issues
If symlinks break:
```bash
# Re-create from project directory
ln -sf ../../.shared/scripts ./scripts
ln -sf ../../.shared/claude ./.claude
```

## Need Help?

- **Vercel Template Docs**: Check the original template's documentation
- **Monorepo Structure**: See root `CLAUDE.md` and `ARCHITECTURE.md`
- **Claude Code**: Consult `.claude/` skills and commands
- **GitLab CI**: Check `.gitlab-ci/deploy.yml` for deployment config
