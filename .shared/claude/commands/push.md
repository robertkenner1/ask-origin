---
description: Git add, commit, and push changes with a clear message
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git branch:*)
---

Add all changes, create a commit, and push to the remote repository.

**Instructions:**
1. Run `git status` and `git diff` to analyze changes
2. Generate a clear, concise commit message based on the changes:
   - If $ARGUMENTS is provided, use it as context/guidance for the commit message
   - Analyze what files changed and what the changes accomplish
   - Keep the message concise (1-2 lines) and descriptive
   - Follow conventional commit style if appropriate (feat:, fix:, refactor:, etc.)
3. Run `git add .` to stage all changes
4. Create a commit with the generated message
5. Push to the remote with `git push -u origin HEAD`
6. Show deployment information:
   - Display: "✅ Pushed to [branch-name]"
   - Extract project name from current branch (remove "proj-" prefix if present)
   - Show Vercel deployment URL: https://[project-name]-grammarly-0ad4c188.vercel.app/
   - Show GitLab CI jobs URL: https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs

**Important:**
- Always analyze the actual changes before generating a message
- If $ARGUMENTS is provided (e.g., "fix login bug"), incorporate that context
- After successful push, show deployment information in this format:
  ```
  ✅ Pushed to [branch-name]

  📦 Deployment URLs:
     🌐 App: https://[project-name]-grammarly-0ad4c188.vercel.app/
     🔧 CI/CD: https://gitlab.grammarly.io/sandbox/ai-frontend-prototypes/-/jobs
  ```
