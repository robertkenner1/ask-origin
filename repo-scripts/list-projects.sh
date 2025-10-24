#!/bin/bash
# List all available projects

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Get configuration
PORT=$(get_config "REPO_DEV_SERVER_PORT" "8181")
PROJECTS_DIR=$(get_config "PROJECTS_DIR" "projects")

log_info "📂 Available projects:"
echo ""

if [ -d "$PROJECTS_DIR" ]; then
    for dir in $PROJECTS_DIR/*/; do
        if [ -d "$dir" ]; then
            project_name=$(basename "$dir")
            echo "  🎨 $project_name"
            echo "     📁 http://localhost:$PORT/$project_name/"

            if [ -f "$dir/CLAUDE.md" ]; then
                echo "     📋 Has project settings"
            fi

            echo ""
        fi
    done
else
    echo "  No projects found"
fi

log_info "🌐 Main directory: http://localhost:$PORT/index.html"
