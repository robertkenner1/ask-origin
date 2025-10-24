# GitLab CI Scripts

This directory contains helper scripts used by GitLab CI pipelines.

## Scripts

### prepare-vercel-deployment.sh

**Purpose:** Validates project configuration and environment before Vercel deployment

**Usage in CI:**
```yaml
before_script:
  - chmod +x .gitlab-ci/scripts/prepare-vercel-deployment.sh
  - ./.gitlab-ci/scripts/prepare-vercel-deployment.sh
```

**What it does:**
1. Extracts project name from `$CI_COMMIT_BRANCH` (removes "proj-" prefix)
2. Validates project directory exists (`projects/$PROJECT_NAME/`)
3. Validates `.project.json` exists
4. Checks deployment type is "vercel"
5. Installs Vercel CLI
6. Validates `$VERCEL_TOKEN` environment variable is set
7. Exports `PROJECT_NAME` to `deploy.env` for subsequent jobs

**Environment Variables Required:**
- `CI_COMMIT_BRANCH` - GitLab CI variable (auto-provided)
- `VERCEL_TOKEN` - Must be set in GitLab CI/CD settings

**Exit Codes:**
- `0` - Success or graceful skip (non-vercel deployment)
- `1` - Validation error (missing directory, file, or token)

**Example Output:**
```
🚀 Vercel Deployment Pipeline

Branch: proj-my-app
Project: my-app

Deployment type: vercel

📦 Installing Vercel CLI...
✅ VERCEL_TOKEN is configured
```

## Local Testing

You can test these scripts locally by setting environment variables:

```bash
# Test prepare-vercel-deployment.sh
export CI_COMMIT_BRANCH="proj-my-app"
export VERCEL_TOKEN="your-token-here"
./.gitlab-ci/scripts/prepare-vercel-deployment.sh
```

## Adding New Scripts

When adding new CI scripts:

1. **Create the script** in `.gitlab-ci/scripts/`
2. **Make it executable**: `chmod +x .gitlab-ci/scripts/your-script.sh`
3. **Use clear output**: Echo status messages with emojis
4. **Handle errors**: Use `set -e` and validate inputs
5. **Document usage**: Add section to this README
6. **Test locally**: Verify script works before committing

## Related Files

- **`.gitlab-ci.yml`** - Main CI configuration
- **`.gitlab-ci/*.yml`** - Job definitions (build, deploy)
- **`.shared/scripts/`** - Shared scripts for projects and CI
