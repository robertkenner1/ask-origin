# Vercel Deploy Monorepo Component

Monorepo-specific wrapper for Vercel deployment that validates `.project.json` configuration before delegating to the generic vercel-deploy component.

## Purpose

This component adds monorepo-specific logic on top of the generic [vercel-deploy](../vercel-deploy/) component:
- Validates `projects/$PROJECT_NAME` directory exists
- Validates `.project.json` file exists and is properly formatted
- Checks if "vercel" is in the `deployments` array
- Extracts team slug from `.project.json` config
- Exits gracefully if Vercel deployment is not enabled

## Usage

### In Template Files

Used in project template `.gitlab-ci/deploy.yml.template` files:

```yaml
# Include monorepo-specific Vercel deployment component
include:
  - local: .gitlab-ci/components/vercel-deploy-monorepo/template.yml
    inputs:
      project-name: "{{PROJECT_NAME}}"
      environment: "preview"
    rules:
      - if: $CI_COMMIT_BRANCH != "main" && $VERCEL_TOKEN
        changes:
          - projects/{{PROJECT_NAME}}/**/*
```

### In Existing Projects

For existing projects, update `.gitlab-ci/deploy.yml`:

```yaml
include:
  - local: .gitlab-ci/components/vercel-deploy-monorepo/template.yml
    inputs:
      project-name: "my-project"
      environment: "preview"
```

## Inputs

| Input | Description | Default | Required |
|-------|-------------|---------|----------|
| `project-name` | Project name (must match directory in `projects/`) | - | ✅ |
| `environment` | Deployment environment (`preview` or `production`) | `preview` | ❌ |
| `node-version` | Node.js version | `20` | ❌ |

## How It Works

```
1. Validate monorepo structure
   ├── Check projects/$PROJECT_NAME exists
   ├── Check .project.json exists
   └── Parse .project.json

2. Check deployment configuration
   ├── Extract deployments array
   ├── Verify "vercel" is included
   └── Exit if not enabled

3. Extract configuration
   ├── Get team slug from .project.json
   └── Export for generic component

4. Call generic vercel-deploy component
   └── Inherits deployment logic
```

## Example .project.json

```json
{
  "name": "my-project",
  "description": "Project description",
  "deployments": ["vercel", "gitlab-pages"],
  "config": {
    "vercelTeam": "grammarly-0ad4c188",
    "port": 3000
  }
}
```

## Environment Variables

Requires the following GitLab CI/CD variables:

- `VERCEL_TOKEN` (required) - Vercel authentication token
- `ARTIFACTORY_USER` (optional) - For private npm packages
- `ARTIFACTORY_PASSWORD` (optional) - Artifactory API token

## Differences from Generic Component

| Feature | Generic Component | Monorepo Component |
|---------|-------------------|-------------------|
| Portability | ✅ Can use in any repo | ❌ Monorepo-specific |
| .project.json | ❌ Not required | ✅ Required |
| Path handling | Manual (`project-path` input) | ✅ Automatic (`projects/$PROJECT_NAME`) |
| Deployment check | ❌ Always deploys | ✅ Checks deployments array |
| Team slug | Manual input | ✅ Auto-extracted from config |

## Architecture

```
Per-Project CI File
    ↓ includes
Monorepo Component (this)
    ├── Validates .project.json
    ├── Extracts configuration
    ↓ extends
Generic Component
    └── Deploys to Vercel
```

## Troubleshooting

### Deployment skipped

```
⚠️  Vercel deployment not enabled for this project
   Configured deployments: gitlab-pages
```

**Solution:** Update `.project.json` to include "vercel" in deployments array:
```json
{
  "deployments": ["vercel", "gitlab-pages"]
}
```

### Project directory not found

```
❌ ERROR: Project directory not found: projects/my-project
```

**Solution:** Ensure the project directory exists and the `project-name` input matches exactly.

### .project.json not found

```
❌ ERROR: .project.json not found in projects/my-project
```

**Solution:** Create `.project.json` file in the project directory with required configuration.

## See Also

- [Generic Vercel Deploy Component](../vercel-deploy/) - Portable component for any repository
- [Component Documentation](./../vercel-deploy/README.md) - Full component reference
