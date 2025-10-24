#!/bin/bash
# List all available projects

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "📂 Available projects:"
echo ""

if [ -d "projects" ]; then
    for dir in projects/*/; do
        if [ -d "$dir" ]; then
            project_name=$(basename "$dir")
            echo "  🎨 $project_name"
            echo "     📁 http://localhost:8181/$project_name/"

            if [ -f "$dir/CLAUDE.md" ]; then
                echo "     📋 Has project settings"
            fi

            echo ""
        fi
    done
else
    echo "  No projects found"
fi

echo "🌐 Main directory: http://localhost:8181/index.html"
