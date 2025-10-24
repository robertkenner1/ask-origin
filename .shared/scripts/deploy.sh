#!/bin/bash
# Shared deploy script for GitLab Pages
# Builds, commits, and pushes project to current branch

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Ensure we're in a project directory
ensure_project_dir || exit 1

# Resolve paths
REPO_ROOT=$(resolve_repo_root) || exit 1
PROJECT_NAME=$(detect_project_name)

# Get commit message from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a commit message:"
    read -p "Commit message: " COMMIT_MSG
else
    COMMIT_MSG="$1"
fi

# Validate commit message
if [ -z "$COMMIT_MSG" ]; then
    log_error "❌ Commit message cannot be empty"
    exit 1
fi

log_info "🚀 Deploying project: $PROJECT_NAME"
echo ""

# Load project config
load_project_config

# Build project
exec_with_status "Building project" "./scripts/build.sh" || {
    log_error "Build failed"
    exit 1
}

# Go to repo root for git operations
cd "$REPO_ROOT"

# Build master index
exec_with_status "Building sitemap" "npm run build:sitemap"

# Add changes
exec_with_status "Adding changes" "git add ."

# Create commit
print_status "Creating commit" ""
if git commit -m "$COMMIT_MSG" >/dev/null 2>&1; then
    print_status "Creating commit" "success"
else
    print_status "Creating commit" "note" "nothing to commit"
fi

# Push to remote
exec_with_status "Pushing to remote" "git push -u origin HEAD"

echo ""
log_success "✅ Deployment complete"

# Get remote URL from config or construct it
GITLAB_PAGES_BASE=$(get_config "GITLAB_PAGES_URL_BASE" "https://ai-frontend-prototypes-c8939b.gpages.io")
REMOTE_URL=$(get_config "REMOTE_URL" "$GITLAB_PAGES_BASE/$PROJECT_NAME/")

log_info "   🌐 Live: $REMOTE_URL"
