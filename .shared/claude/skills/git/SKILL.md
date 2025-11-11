---
name: git
description: Git push workflow expert. Activates when pushing code, creating commits, or deploying changes. Provides guidance on analyzing changes, generating commit messages, and tracking deployments.
---

# Git Push Workflow Skill

Expert knowledge of the git push workflow for the AI Frontend Prototypes monorepo.

## When This Skill Activates

This skill automatically activates when you need to:
- Push code to remote repository
- Create commits with proper messages
- Generate merge request links

## What This Skill Provides

### Push Workflow
Step-by-step process for committing and pushing changes:
1. Analyze changes with `git status` and `git diff`
2. Generate clear, concise commit messages
3. Stage changes with `git add .`
4. Create commit with proper format
5. Push to remote with deployment tracking

### Commit Message Guidelines
- Follow conventional commit style: `feat:`, `fix:`, `refactor:`, `docs:`
- Keep messages concise (1-2 lines)
- Include Claude Code co-authorship footer
- Focus on what was accomplished

### Deployment Information
After successful push, provide:
- Vercel deployment URL: `https://[project-name]-grammarly-0ad4c188.vercel.app/`
- GitLab CI/CD tracking: `https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs`
- Merge request link (from git push output)
- Deployment timing note (1-2 minutes)

## Quick Reference

### Push Command
```bash
git add .
git commit -m "message"
git push -u origin HEAD
```

### Deployment Output Format
```
✅ Pushed to [branch-name]

📦 Deployment URLs:
   🌐 App: https://[project-name]-grammarly-0ad4c188.vercel.app/
   🔧 CI/CD: https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs

🔗 Merge Request:
   [MR URL or Create MR link]

⏱️  Deployment takes 1-2 minutes. Track progress at the CI/CD link above.

💡 If app doesn't work: check .env.local vars are configured in Vercel
   https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/blob/main/docs/flows.md#environment-variables
```

## Integration

**See also:** `.shared/claude/commands/push.md` for automated push command
