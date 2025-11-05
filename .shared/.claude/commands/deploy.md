---
description: Deploy environment variables to Vercel and deploy the project
allowed-tools: Bash(./scripts/push-env-to-vercel.sh:*), Bash(./scripts/deploy-vercel.sh:*), Bash(test:*), Bash(cat:*), Read
---

Deploy the current project to Vercel with environment variables.

**Instructions:**
1. Verify you are in a project directory (must have `.project.json`)
2. Check if `.env.local` exists:
   - If yes: Run `./scripts/push-env-to-vercel.sh` to push environment variables to Vercel
   - If no or if all values are already pushed: Skip this step
3. Run `./scripts/deploy-vercel.sh` to deploy the project to Vercel
4. Display the deployment URL from the output

**Important:**
- Always run both scripts from the project root directory
- If `push-env-to-vercel.sh` fails, continue with deployment anyway (env vars might already be set)
- Extract and highlight the preview URL from deployment output
- Show both the preview URL and the configured production URL (from `.project.json`)

**Error Handling:**
- If not in a project directory: Show error and list available projects
- If deployment fails: Show the error and suggest checking Vercel authentication
