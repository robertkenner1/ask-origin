#!/bin/bash
# Shared build script for projects
# Auto-detects project type and builds accordingly

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
PUBLIC_DIR="$REPO_ROOT/public/$PROJECT_NAME"

echo -e "${BLUE}🔨 Building project: $PROJECT_NAME${NC}"
echo ""

# Check if this is a Node.js project
if [ -f "package.json" ]; then
    echo "📦 Detected Node.js project"

    # Check for Next.js
    if [ -f "next.config.ts" ] || [ -f "next.config.js" ] || [ -f "next.config.mjs" ]; then
        echo "⚡ Next.js project detected"
        printf "%-40s" "Running npm run build"
        if npm run build >/dev/null 2>&1; then
            printf "${GREEN}✅${NC}\n"
        else
            printf "${RED}❌${NC}\n"
            echo -e "${RED}Build failed. Run 'npm run build' to see errors.${NC}"
            exit 1
        fi
    else
        # Generic Node.js build
        printf "%-40s" "Running npm run build"
        if npm run build >/dev/null 2>&1; then
            printf "${GREEN}✅${NC}\n"
        else
            printf "${YELLOW}⚠️${NC}  (no build script)\n"
        fi
    fi

elif [ -d "src" ]; then
    # Static project - copy to public
    echo "📁 Detected static project"

    printf "%-40s" "Cleaning public directory"
    rm -rf "$PUBLIC_DIR"
    mkdir -p "$PUBLIC_DIR"
    printf "${GREEN}✅${NC}\n"

    printf "%-40s" "Copying files to public"
    cp -r src/* "$PUBLIC_DIR/"
    printf "${GREEN}✅${NC}\n"

else
    echo -e "${YELLOW}⚠️  Unknown project type${NC}"
    echo "   Expected: package.json OR src/ directory"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Build complete${NC}"
