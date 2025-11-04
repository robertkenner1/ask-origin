#!/bin/bash
# Push environment variables from .env.local to Vercel project

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Visual separator
print_separator "🔐 Push Environment Variables" "Upload .env.local to Vercel"

# Get project directory (resolve through symlink if needed)
PROJECT_DIR="$(pwd)"
if [ -L "$0" ]; then
    # Script was called through symlink, we're in a project directory
    PROJECT_ROOT="$PROJECT_DIR"
else
    # Script called directly from .shared/scripts
    PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo "$PROJECT_DIR")"
fi

# Check if .env.local exists
ENV_FILE="$PROJECT_ROOT/.env.local"
if [ ! -f "$ENV_FILE" ]; then
    log_error "❌ .env.local not found in $PROJECT_ROOT"
    exit 1
fi

# Check if vercel CLI is available
if ! command -v vercel &> /dev/null; then
    log_error "❌ Vercel CLI not found. Install with: brew install vercel-cli"
    exit 1
fi

# Check Vercel authentication
check_vercel_auth || exit 1
echo ""

# Get project name from .project.json
PROJECT_JSON="$PROJECT_ROOT/.project.json"
if [ -f "$PROJECT_JSON" ]; then
    PROJECT_NAME=$(jq -r '.name // empty' "$PROJECT_JSON" 2>/dev/null || echo "")
    VERCEL_TEAM=$(jq -r '.vercelTeam // empty' "$PROJECT_JSON" 2>/dev/null || echo "")
else
    PROJECT_NAME=$(basename "$PROJECT_ROOT")
    VERCEL_TEAM=""
fi

if [ -z "$PROJECT_NAME" ]; then
    log_error "❌ Could not determine project name"
    exit 1
fi

log_info "📦 Project: $PROJECT_NAME"
if [ -n "$VERCEL_TEAM" ]; then
    log_info "👥 Team: $VERCEL_TEAM"
fi
echo ""

# Parse .env.local and push each variable
VAR_COUNT=0
SKIPPED_COUNT=0

while IFS= read -r line; do
    # Skip empty lines and comments
    if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
        continue
    fi

    # Parse variable name and value
    if [[ "$line" =~ ^([A-Za-z_][A-Za-z0-9_]*)=(.*)$ ]]; then
        VAR_NAME="${BASH_REMATCH[1]}"
        VAR_VALUE="${BASH_REMATCH[2]}"

        # Skip if value is PLACEHOLDER
        if [ "$VAR_VALUE" = "PLACEHOLDER" ]; then
            print_status "Skipping $VAR_NAME" "warning" "value is PLACEHOLDER"
            ((SKIPPED_COUNT++))
            continue
        fi

        # Check if variable already exists in Vercel
        print_status "Checking $VAR_NAME" ""

        VERCEL_LS_CMD="vercel env ls $VERCEL_AUTH_ARGS"
        if [ -n "$VERCEL_TEAM" ]; then
            VERCEL_LS_CMD="$VERCEL_LS_CMD --scope $VERCEL_TEAM"
        fi

        if $VERCEL_LS_CMD 2>/dev/null | grep -q "^$VAR_NAME "; then
            print_status "Checking $VAR_NAME" "skip" "already exists"
            ((SKIPPED_COUNT++))
            continue
        fi

        # Push to Vercel (production and preview)
        print_status "Pushing $VAR_NAME" ""

        # Build vercel command (production and preview)
        VERCEL_CMD="vercel env add $VAR_NAME production preview $VERCEL_AUTH_ARGS"
        if [ -n "$VERCEL_TEAM" ]; then
            VERCEL_CMD="$VERCEL_CMD --scope $VERCEL_TEAM"
        fi

        # Push the variable (echo value to handle special characters)
        if echo "$VAR_VALUE" | $VERCEL_CMD >/dev/null 2>&1; then
            print_status "Pushing $VAR_NAME" "success"
            ((VAR_COUNT++))
        else
            print_status "Pushing $VAR_NAME" "error"
        fi
    fi
done < "$ENV_FILE"

echo ""
if [ $VAR_COUNT -gt 0 ]; then
    log_success "✅ Pushed $VAR_COUNT variable(s) to Vercel"
else
    log_warning "⚠️  No variables pushed to Vercel"
fi

if [ $SKIPPED_COUNT -gt 0 ]; then
    echo ""
    log_info "ℹ️  Skipped $SKIPPED_COUNT PLACEHOLDER variable(s)"
    log_info "   Update values in .env.local and run again"
fi

echo ""
log_info "💡 To verify: vercel env ls"
echo ""
