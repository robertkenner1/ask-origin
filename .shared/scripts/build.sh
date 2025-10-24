#!/bin/bash
# Shared build script for projects
# Auto-detects project type and builds accordingly

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
PUBLIC_DIR="$REPO_ROOT/public/$PROJECT_NAME"

log_info "🔨 Building project: $PROJECT_NAME"
echo ""

# Load project config if available
load_project_config

# Build based on project type
case "$PROJECT_TYPE" in
    nextjs)
        log_info "⚡ Next.js project detected"
        exec_with_status "Running npm run build" "npm run build" || {
            log_error "Build failed. Run 'npm run build' to see errors."
            exit 1
        }
        ;;

    nodejs)
        log_info "📦 Node.js project detected"
        exec_with_status "Running npm run build" "npm run build" || {
            print_status "Running npm run build" "note" "no build script"
        }
        ;;

    static)
        log_info "📁 Static project detected"
        exec_with_status "Cleaning public directory" "rm -rf '$PUBLIC_DIR' && mkdir -p '$PUBLIC_DIR'"
        exec_with_status "Copying files to public" "cp -r src/* '$PUBLIC_DIR/'"
        ;;

    *)
        log_error "⚠️  Unknown project type"
        log_info "   Expected: package.json OR src/ directory"
        exit 1
        ;;
esac

echo ""
log_success "✅ Build complete"
