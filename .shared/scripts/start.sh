#!/bin/bash
# Shared start script for development server
# Auto-detects project type and starts appropriate dev server

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get project info
PROJECT_DIR=$(pwd)
PROJECT_NAME=$(basename "$PROJECT_DIR")
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo "../..")

echo -e "${BLUE}🚀 Starting development server: $PROJECT_NAME${NC}"
echo ""

# Check if this is a Node.js project with dev script
if [ -f "package.json" ]; then
    # Check if package.json has dev script
    if grep -q '"dev":' package.json; then
        echo "📦 Starting Node.js dev server"
        echo ""
        npm run dev
    else
        echo -e "${YELLOW}⚠️  No dev script found in package.json${NC}"
        exit 1
    fi

elif [ -d "src" ]; then
    # Static project - build and serve
    PORT=8181

    # Build first
    ./scripts/build.sh

    # Check if server is already running
    if lsof -t -i:$PORT >/dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Server already running on port $PORT${NC}"
        echo "   Stopping existing server..."
        kill -9 $(lsof -t -i:$PORT) >/dev/null 2>&1
    fi

    # Start server from public directory
    echo ""
    echo -e "${GREEN}🌐 Server starting:${NC} http://localhost:$PORT/$PROJECT_NAME/"
    echo "   Press Ctrl+C to stop"
    echo "────────────────────────────────────"

    cd "$REPO_ROOT/public"
    npx http-server . -p $PORT -o "/$PROJECT_NAME/"

else
    echo -e "${RED}❌ Unknown project type${NC}"
    echo "   Expected: package.json OR src/ directory"
    exit 1
fi
