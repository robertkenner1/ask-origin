#!/bin/bash
# Prepare Vercel deployment in GitLab CI
# This script validates the project and environment before deployment
#
# Usage: prepare-vercel-deployment.sh <branch-name>
#   Example: prepare-vercel-deployment.sh proj-my-app

set -e

BRANCH_NAME="$1"

if [ -z "$BRANCH_NAME" ]; then
    echo "❌ Error: Branch name is required"
    echo "Usage: $0 <branch-name>"
    exit 1
fi

echo "🚀 Vercel Deployment Pipeline"
echo ""
echo "Branch: $BRANCH_NAME"

# Extract project name from branch (remove "proj-" prefix)
export PROJECT_NAME=$(echo "$BRANCH_NAME" | sed 's/^proj-//')
echo "Project: $PROJECT_NAME"
echo ""

# Validate project directory exists
if [ ! -d "projects/$PROJECT_NAME" ]; then
    echo "❌ Error: Project directory not found: projects/$PROJECT_NAME"
    exit 1
fi

# Validate .project.json exists
if [ ! -f "projects/$PROJECT_NAME/.project.json" ]; then
    echo "❌ Error: .project.json not found in projects/$PROJECT_NAME"
    echo "⚠️  This project may not be configured for deployment"
    exit 1
fi

# Check deployment type
DEPLOYMENT_TYPE=$(cat "projects/$PROJECT_NAME/.project.json" | grep -o '"deployment": *"[^"]*"' | sed 's/"deployment": *"\(.*\)"/\1/' || echo "")
echo "Deployment type: $DEPLOYMENT_TYPE"

if [ "$DEPLOYMENT_TYPE" != "vercel" ]; then
    echo "⚠️  Project deployment type is '$DEPLOYMENT_TYPE', not 'vercel'"
    echo "⚠️  Skipping Vercel deployment"
    exit 0
fi

echo ""
echo "📦 Installing Vercel CLI..."
npm install -g vercel@latest

# Validate VERCEL_TOKEN
if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: VERCEL_TOKEN not set in GitLab CI/CD variables"
    echo ""
    echo "Add VERCEL_TOKEN as a masked variable in GitLab CI/CD settings:"
    echo "  Settings > CI/CD > Variables > Add Variable"
    echo "  Key: VERCEL_TOKEN"
    echo "  Value: <your-token-from-https://vercel.com/account/tokens>"
    echo "  Flags: Masked"
    exit 1
fi

echo "✅ VERCEL_TOKEN is configured"
echo ""

# Export PROJECT_NAME for subsequent jobs
echo "PROJECT_NAME=$PROJECT_NAME" >> deploy.env
