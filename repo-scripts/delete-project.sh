#!/bin/bash
# Delete a project and its associated branch

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Get configuration
PROJECTS_DIR=$(get_config "PROJECTS_DIR" "projects")
PUBLIC_DIR=$(get_config "PUBLIC_DIR" "public")

# Get project name from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a project name:"
    read -p "Project name to delete: " PROJECT_NAME
else
    PROJECT_NAME="$1"
fi

# Validate project name
if [ -z "$PROJECT_NAME" ]; then
    log_error "❌ Project name cannot be empty"
    exit 1
fi

if [ ! -d "$PROJECTS_DIR/$PROJECT_NAME" ]; then
    log_error "❌ Project '$PROJECT_NAME' does not exist"
    exit 1
fi

log_warning "⚠️  WARNING: Permanent Deletion"
echo ""
echo "This will permanently delete:"
echo "   📁 $PROJECTS_DIR/$PROJECT_NAME/ (project files)"
echo "   📁 $PUBLIC_DIR/$PROJECT_NAME/ (built files)"
echo "   🌿 proj-$PROJECT_NAME branch (if exists)"
echo ""
read -p "Are you sure? (y/N): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    log_warning "❌ Deletion cancelled"
    exit 1
fi

echo ""
log_info "🗑️  Deleting project: $PROJECT_NAME"
echo ""

# Remove project files
exec_with_status "Removing project files" "rm -rf '$PROJECTS_DIR/$PROJECT_NAME'"

# Remove built files
if [ -d "$PUBLIC_DIR/$PROJECT_NAME" ]; then
    exec_with_status "Removing built files" "rm -rf '$PUBLIC_DIR/$PROJECT_NAME'"
else
    print_status "Removing built files" "note" "not found"
fi

# Switch to main branch
if is_git_repo; then
    exec_with_status "Switching to main branch" "git checkout main" || print_status "Switching to main branch" "note" "already on main"

    # Delete local branch
    BRANCH_NAME="proj-$PROJECT_NAME"
    if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
        exec_with_status "Deleting local branch" "git branch -D '$BRANCH_NAME'" || print_status "Deleting local branch" "warning"
    else
        print_status "Deleting local branch" "note" "not found"
    fi

    # Delete remote branch
    if git ls-remote --heads origin "$BRANCH_NAME" | grep -q "$BRANCH_NAME"; then
        exec_with_status "Deleting remote branch" "git push origin --delete '$BRANCH_NAME'" || print_status "Deleting remote branch" "warning"
    else
        print_status "Deleting remote branch" "note" "not found"
    fi
fi

# Rebuild sitemap
exec_with_status "Rebuilding sitemap" "npm run build:sitemap"

echo ""
log_success "✅ Project '$PROJECT_NAME' deleted successfully"
