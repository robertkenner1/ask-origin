# Vercel Deploy Component

Universal GitLab CI component for deploying Node.js applications to Vercel with flexible configuration.

## Features

- ✅ **Preview and production deployments** to Vercel
- ✅ **Artifactory integration** - Automatic authentication for private npm packages
- ✅ **Local prebuild support** for complex build environments
- ✅ **Monorepo and standalone** project support
- ✅ **Flexible authentication** via CI/CD variables
- ✅ **Comprehensive validation** with helpful error messages
- ✅ **Automatic URL extraction** from deployment output

## Quick Start

```yaml
# .gitlab-ci.yml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
```

## Prerequisites

1. **Vercel Account** - Active Vercel account with project created
2. **Vercel Token** - API token from https://vercel.com/account/tokens
3. **GitLab CI/CD Variables** - Add in Settings → CI/CD → Variables:
   - `VERCEL_TOKEN` (required) - Vercel authentication token
   - `ARTIFACTORY_USER` (optional) - For private npm packages from Artifactory
   - `ARTIFACTORY_PASSWORD` (optional) - Artifactory API token
4. **Node.js Project** - Project must have `package.json`

## Inputs

| Input | Description | Default | Required |
|-------|-------------|---------|----------|
| `vercel-token` | Vercel authentication token | - | ✅ |
| `project-name` | Vercel project name | - | ✅ |
| `team-slug` | Vercel team/organization slug | `grammarly-0ad4c188` | ❌ |
| `project-path` | Path to project directory | `.` | ❌ |
| `prebuild` | Run local prebuild (for private packages) | `true` | ❌ |
| `stage` | GitLab CI stage | `deploy` | ❌ |
| `node-version` | Node.js version | `20` | ❌ |
| `vercel-cli-version` | Vercel CLI version | `latest` | ❌ |

## Usage Examples

### Basic Deployment

Deploy a standalone project in repository root:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
```

### Monorepo Project

Deploy a specific project from a monorepo:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
      project-path: "projects/my-app"
```

### Without Local Prebuild

For projects without private npm packages:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
      prebuild: false
```

### Custom Node Version

Use a specific Node.js version:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
      node-version: "18"
```

### With Rules

Deploy only on specific branches with file changes:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
      project-path: "projects/my-app"
    rules:
      - if: $CI_COMMIT_BRANCH != "main" && $VERCEL_TOKEN
        changes:
          - projects/my-app/**/*
```

### Multiple Projects

Deploy multiple projects in parallel:

```yaml
# Deploy Project A
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "project-a"
      project-path: "projects/project-a"

# Deploy Project B
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "project-b"
      project-path: "projects/project-b"
```

## Configuration Details

### Artifactory Authentication

The component automatically configures npm to use Artifactory for private packages if credentials are provided.

**To enable Artifactory authentication:**

1. Add GitLab CI/CD variables:
   - `ARTIFACTORY_USER` - Your Grammarly email
   - `ARTIFACTORY_PASSWORD` - Your Artifactory API token

2. Get your API token:
   - Visit: [Artifactory Getting Started Guide](https://grammarly.atlassian.net/wiki/spaces/PL/pages/657948789/Artifactory+Getting+Started+Guide)
   - Follow instructions to generate API token

3. The component will automatically:
   - Configure npm registry to point to Artifactory
   - Authenticate with your credentials
   - Allow installation of private `@grammarly/*` packages

**When Artifactory is configured:**
- Vercel CLI installed from Artifactory
- Project dependencies installed from Artifactory during build
- Supports Grammarly Design System and other internal packages

**When Artifactory is not configured:**
- Falls back to default npm registry
- Only public packages available
- Shows informational message (not an error)

### Prebuild Option

**When to use `prebuild: true` (default):**
- Project uses private npm packages
- Needs Artifactory authentication
- Custom `.npmrc` configuration required
- Complex build setup

**When to use `prebuild: false`:**
- Only public npm packages
- Simple build process
- Want to use Vercel's build environment
- Faster for basic projects

**With prebuild:**
```
vercel link → vercel build → vercel deploy --prebuilt
```

**Without prebuild:**
```
vercel link → vercel deploy (builds remotely)
```

### Team Slug

For **team/organization projects**, use the team slug:
```yaml
team-slug: "my-team-slug"
```

For **personal projects**, leave empty or omit:
```yaml
team-slug: ""
```

Find your team slug in Vercel dashboard URL:
```
https://vercel.com/[team-slug]/project-name
```

### Project Path

**Standalone repository:**
```yaml
project-path: "."
```

**Monorepo:**
```yaml
project-path: "projects/my-app"
```

**Nested structure:**
```yaml
project-path: "apps/frontend"
```

## Deployment Flow

1. **Setup** - Install system dependencies and Vercel CLI
2. **Validation** - Check token, project directory, and package.json
3. **Link** - Connect to Vercel project
4. **Build** (optional) - Run local prebuild if enabled
5. **Deploy** - Push to Vercel (with or without prebuild)
6. **Output** - Extract and display deployment URL

## Error Messages

### Missing Token
```
❌ ERROR: vercel-token is required
Please set VERCEL_TOKEN in GitLab CI/CD variables
```

**Solution:** Add `VERCEL_TOKEN` in Settings → CI/CD → Variables

### Missing Project Name
```
❌ ERROR: project-name is required
```

**Solution:** Add `project-name` to component inputs

### Directory Not Found
```
❌ ERROR: Project directory does not exist: projects/my-app
```

**Solution:** Verify `project-path` is correct and directory exists

### No package.json
```
❌ ERROR: No package.json found in projects/my-app
```

**Solution:** Ensure the project is a valid Node.js project with package.json

## Troubleshooting

### Deployment fails with authentication error

Check that `VERCEL_TOKEN` is:
- Set in GitLab CI/CD variables
- Not expired (regenerate if needed)
- Has access to the project and team

### Build fails with private package errors

**If you see errors like:**
- `404 Not Found - GET https://registry.npmjs.org/@grammarly/...`
- `E401 Unable to authenticate`
- `npm ERR! code E404`

**Solution:**

1. **Enable Artifactory authentication:**
   - Add `ARTIFACTORY_USER` to GitLab CI/CD variables
   - Add `ARTIFACTORY_PASSWORD` to GitLab CI/CD variables
   - Use your Grammarly email and Artifactory API token

2. **Verify credentials:**
   - Check that `ARTIFACTORY_PASSWORD` is your API token (not your login password)
   - Token not expired (regenerate if needed from Artifactory)
   - Variables are not protected (unless deploying from protected branches)

3. **Ensure prebuild is enabled:**
   - `prebuild: true` is set (this is the default)
   - Prebuild runs in CI environment with access to Artifactory

4. **Check project dependencies:**
   - Verify `package.json` lists correct package names
   - Ensure packages exist in Artifactory registry

### Wrong Vercel project linked

Verify:
- `project-name` matches exactly in Vercel dashboard
- `team-slug` is correct for team projects
- Project exists in Vercel before deploying

### Deployment URL not extracted

The deployment succeeded, but URL extraction failed. Check:
- Pipeline logs for the actual URL
- Vercel dashboard for deployment details

## Advanced Usage

### Pinning Vercel CLI Version

For reproducible builds, pin the CLI version:

```yaml
vercel-cli-version: "33.0.0"
```

### Custom CI Stage

Place deployment in a different pipeline stage:

```yaml
stage: "staging"
```

### Combining with Other Jobs

Use `needs` to control job order:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
    needs:
      - build
      - test
```

## Migration from Existing Template

**Before (using `.deploy_vercel_template`):**
```yaml
deploy-vercel-my-app:
  extends: .deploy_vercel_template
  variables:
    PROJECT_NAME: "my-app"
```

**After (using component):**
```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy/template.yml
    inputs:
      vercel-token: $VERCEL_TOKEN
      project-name: "my-app"
      project-path: "projects/my-app"
```

## Support

- **Component Issues** - Open issue in this repository
- **Vercel Documentation** - https://vercel.com/docs
- **GitLab Components Docs** - https://docs.gitlab.com/ci/components/

## Changelog

### Version 1.0.0 (Initial)
- Universal Vercel deployment component
- Support for prebuild and remote build
- Monorepo and standalone project support
- Comprehensive validation and error handling
