#!/bin/bash
# Shared start script for development server
# Auto-detects project type and starts appropriate dev server

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Ensure we're in a project directory
ensure_project_dir || exit 1

# Resolve paths
REPO_ROOT=$(resolve_repo_root) || exit 1
PROJECT_NAME=$(detect_project_name)
PROJECT_TYPE=$(detect_project_type)

log_info "🚀 Starting development server: $PROJECT_NAME"
echo ""

# Load project config
load_project_config

# Get port configuration
PORT=$(get_config "DEV_SERVER_PORT" "8181")

# Start based on project type
case "$PROJECT_TYPE" in
    nextjs|nodejs)
        # Check if package.json has dev script
        if ! grep -q '"dev":' package.json 2>/dev/null; then
            log_error "⚠️  No dev script found in package.json"
            exit 1
        fi

        log_info "📦 Starting Node.js dev server"
        echo ""
        npm run dev
        ;;

    static)
        # Build first
        ./scripts/build.sh

        # Check if server is already running
        if is_port_in_use "$PORT"; then
            log_warning "⚠️  Server already running on port $PORT"
            log_info "   Stopping existing server..."
            kill_port "$PORT"
        fi

        # Get local URL from config or construct it
        LOCAL_URL=$(get_config "LOCAL_URL" "http://localhost:$PORT/$PROJECT_NAME/")

        # Start server from public directory
        echo ""
        log_success "🌐 Server starting: $LOCAL_URL"
        log_info "   Press Ctrl+C to stop"
        echo "────────────────────────────────────"

        cd "$REPO_ROOT/public"
        npx http-server . -p "$PORT" -o "/$PROJECT_NAME/"
        ;;

    *)
        log_error "❌ Unknown project type"
        log_info "   Expected: package.json OR src/ directory"
        exit 1
        ;;
esac
