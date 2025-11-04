#!/bin/bash
# Deploy changes to GitLab

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Visual separator
print_separator "🚀 Deploy to GitLab" "Build, commit, and push to remote"

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

# Build projects
exec_with_status "Building projects" "npm run build:sitemap"

# Add changes
exec_with_status "Adding changes" "git add ."

# Create commit
print_status "Creating commit" ""
if git commit -m "$COMMIT_MSG" >/dev/null 2>&1; then
    print_status "Creating commit" "success"
else
    print_status "Creating commit" "error"
    exit 1
fi

# Push to remote
exec_with_status "Pushing to remote" "git push -u origin HEAD"

echo ""
log_success "✅ Deployment complete"

# Get GitLab Pages URL from config
GITLAB_PAGES_BASE=$(get_config "GITLAB_PAGES_URL_BASE" "https://ai-frontend-prototypes-c8939b.gpages.io")
log_info "   🌐 Live: $GITLAB_PAGES_BASE/"
