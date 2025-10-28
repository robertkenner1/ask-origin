#!/bin/bash
# Deploy projects to Vercel

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Get Vercel team slug from config
VERCEL_TEAM_SLUG=$(get_config "VERCEL_TEAM_SLUG" "grammarly-0ad4c188")

# Get project name from argument or auto-detect from branch
PROJECT_NAME=""
if [ -n "$1" ]; then
    # If argument starts with "proj-", extract the project name
    if [[ "$1" =~ ^proj-(.+)$ ]]; then
        PROJECT_NAME="${BASH_REMATCH[1]}"
    else
        PROJECT_NAME="$1"
    fi
else
    # Auto-detect from git branch (proj-* pattern)
    BRANCH_NAME=$(get_current_branch)
    if [[ "$BRANCH_NAME" =~ ^proj-(.+)$ ]]; then
        PROJECT_NAME="${BASH_REMATCH[1]}"
        log_info "ℹ️  Auto-detected project from branch: $PROJECT_NAME"
        echo ""
    fi
fi

# Validate project name
if [ -z "$PROJECT_NAME" ]; then
    log_error "❌ Error: Project name not provided and could not auto-detect from branch"
    echo ""
    echo "Usage:"
    echo "  $0 [project-name]"
    echo ""
    echo "Examples:"
    echo "  $0 my-ai-editor"
    echo "  $0  # Auto-detect from git branch (proj-* pattern)"
    exit 1
fi

# Resolve paths
REPO_ROOT=$(resolve_repo_root) || exit 1
PROJECT_DIR="$REPO_ROOT/projects/$PROJECT_NAME"
PROJECT_JSON="$PROJECT_DIR/.project.json"

log_info "🚀 Vercel Deployment: $PROJECT_NAME"
echo ""

# Validate project directory exists
exec_with_status "Checking project directory" "[ -d '$PROJECT_DIR' ]" || {
    log_error "Error: Project directory not found: $PROJECT_DIR"
    exit 1
}

# Validate .project.json exists
exec_with_status "Checking project metadata" "[ -f '$PROJECT_JSON' ]" || {
    log_error "Error: .project.json not found in $PROJECT_DIR"
    exit 1
}

# Check if deployment type is vercel
print_status "Validating deployment type" ""
DEPLOYMENT_TYPE=$(get_config "DEPLOYMENT" "vercel")
if [ "$DEPLOYMENT_TYPE" != "vercel" ]; then
    print_status "Validating deployment type" "note" "type is '$DEPLOYMENT_TYPE'"
    log_warning "Warning: Project deployment type is '$DEPLOYMENT_TYPE', not 'vercel'"
    log_warning "Skipping deployment"
    exit 0
fi
print_status "Validating deployment type" "success"

# Validate package.json exists (Next.js project)
exec_with_status "Checking package.json" "[ -f '$PROJECT_DIR/package.json' ]" || {
    log_error "Error: package.json not found in $PROJECT_DIR"
    log_error "Only Next.js projects can be deployed to Vercel"
    exit 1
}

# Check Vercel CLI is installed
exec_with_status "Checking Vercel CLI" "command -v vercel >/dev/null 2>&1" || {
    log_error "Error: Vercel CLI not installed"
    log_info "Install with: brew install vercel-cli"
    exit 1
}

# Check Vercel authentication
print_status "Checking Vercel authentication" ""
VERCEL_AUTH_ARGS=""
if [ -n "$VERCEL_TOKEN" ]; then
    # Token provided - use it
    VERCEL_AUTH_ARGS="--token $VERCEL_TOKEN"
    print_status "Checking Vercel authentication" "success"
    log_info "   (using token)"
elif vercel whoami >/dev/null 2>&1; then
    # Already logged in
    CURRENT_USER=$(vercel whoami 2>/dev/null | tail -1)
    print_status "Checking Vercel authentication" "success"
    log_info "   (logged in as $CURRENT_USER)"
else
    # Not authenticated
    print_status "Checking Vercel authentication" "error"
    log_error "Error: Not authenticated with Vercel"
    echo ""
    echo "Please either:"
    echo "  1. Login: vercel login"
    echo "  2. Or set VERCEL_TOKEN: export VERCEL_TOKEN=your_token_here"
    echo ""
    echo "Get a token from: https://vercel.com/account/tokens"
    exit 1
fi

echo ""
log_info "📋 Vercel Project Details:"

# Get project name from config
VERCEL_PROJECT_NAME=$(get_config "NAME" "$PROJECT_NAME")
echo "   📦 Project: $VERCEL_PROJECT_NAME"
echo "   📁 Directory: $PROJECT_DIR"
echo "   👥 Team: $VERCEL_TEAM_SLUG"

echo ""
log_info "🔍 Checking Vercel project status..."

# Check if project already exists on Vercel
PROJECT_EXISTS=false
print_status "Listing Vercel projects" ""

# Try to get project list
if vercel project ls --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS >/tmp/vercel-projects.txt 2>&1; then
    print_status "Listing Vercel projects" "success"

    # Check if our project is in the list
    if grep -q "$VERCEL_PROJECT_NAME" /tmp/vercel-projects.txt; then
        PROJECT_EXISTS=true
        log_success "   ✓ Project exists on Vercel"
    else
        log_warning "   ⚠ Project not found on Vercel"
    fi
else
    print_status "Listing Vercel projects" "warning"
    log_warning "Warning: Could not list Vercel projects"
fi

# If project doesn't exist, we'll let vercel link handle the creation
if [ "$PROJECT_EXISTS" = false ]; then
    echo ""
    log_info "📦 Project will be created during linking"
fi

echo ""
log_info "🔗 Linking project to Vercel..."

# Link project (creates .vercel folder with project metadata)
print_status "Linking project" ""
cd "$PROJECT_DIR"
if vercel link --yes --project "$VERCEL_PROJECT_NAME" --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS >/dev/null 2>&1; then
    print_status "Linking project" "success"
else
    print_status "Linking project" "error"
    cd "$REPO_ROOT"
    log_error "Error: Failed to link project to Vercel"
    exit 1
fi
cd "$REPO_ROOT"

echo ""
log_info "🔨 Building project locally..."

# Build locally with vercel build (handles private npm packages)
print_status "Running vercel build" ""
cd "$PROJECT_DIR"
if vercel build --yes $VERCEL_AUTH_ARGS >/tmp/vercel-build.log 2>&1; then
    print_status "Running vercel build" "success"
    cd "$REPO_ROOT"
else
    print_status "Running vercel build" "error"
    cd "$REPO_ROOT"
    echo ""
    log_error "Error: Local build failed"
    log_warning "Build log:"
    tail -50 /tmp/vercel-build.log
    rm -f /tmp/vercel-build.log
    exit 1
fi

echo ""
log_info "🚀 Deploying prebuilt to Vercel preview..."

# Deploy prebuilt to Vercel (NO --prod flag = preview deployment)
print_status "Deploying project" ""
DEPLOY_OUTPUT=$(mktemp)
cd "$PROJECT_DIR"
if vercel deploy --prebuilt --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS 2>&1 | tee "$DEPLOY_OUTPUT"; then
    print_status "Deploying project" "success"
    cd "$REPO_ROOT"
    echo ""

    # Extract deployment URL from output
    DEPLOYMENT_URL=$(grep -o 'https://[^ ]*vercel\.app' "$DEPLOY_OUTPUT" | head -1 || echo "")

    if [ -n "$DEPLOYMENT_URL" ]; then
        log_success "✅ Deployment successful!"
        echo ""
        log_info "🌐 Preview URL:"
        echo "   $DEPLOYMENT_URL"
        echo ""

        # Also show the production URL from config if available
        PRODUCTION_URL=$(get_config "REMOTE_URL" "")
        if [ -n "$PRODUCTION_URL" ]; then
            log_info "📋 Configured URL (from .project.json):"
            echo "   $PRODUCTION_URL"
            echo ""
        fi
    else
        log_warning "⚠️  Deployment completed but URL not found in output"
    fi

    rm -f "$DEPLOY_OUTPUT"
    rm -f /tmp/vercel-build.log
else
    print_status "Deploying project" "error"
    cd "$REPO_ROOT"
    echo ""
    log_error "Error: Deployment failed"
    log_warning "Check output above for details"
    rm -f "$DEPLOY_OUTPUT"
    rm -f /tmp/vercel-build.log
    exit 1
fi

# Cleanup
rm -f /tmp/vercel-projects.txt

log_success "✅ Vercel deployment complete!"
