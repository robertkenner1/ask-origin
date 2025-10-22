#!/bin/bash
# Delete a project and its associated branch

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get project name from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a project name:"
    read -p "Project name to delete: " PROJECT_NAME
else
    PROJECT_NAME="$1"
fi

# Validate project name
if [ -z "$PROJECT_NAME" ]; then
    echo -e "${RED}❌ Project name cannot be empty${NC}"
    exit 1
fi

if [ ! -d "projects/$PROJECT_NAME" ]; then
    echo -e "${RED}❌ Project '$PROJECT_NAME' does not exist${NC}"
    exit 1
fi

echo -e "${YELLOW}⚠️  WARNING: Permanent Deletion${NC}"
echo ""
echo "This will permanently delete:"
echo "   📁 projects/$PROJECT_NAME/ (project files)"
echo "   📁 public/$PROJECT_NAME/ (built files)"
echo "   🌿 $PROJECT_NAME branch (if exists)"
echo ""
read -p "Are you sure? (y/N): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo -e "${YELLOW}❌ Deletion cancelled${NC}"
    exit 1
fi

echo ""
echo "🗑️  Deleting project: $PROJECT_NAME"
echo ""

# Remove project files
printf "%-40s" "Removing project files"
if rm -rf "projects/$PROJECT_NAME"; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Remove built files
printf "%-40s" "Removing built files"
if rm -rf "public/$PROJECT_NAME"; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Switch to main branch
printf "%-40s" "Switching to main branch"
if git checkout main >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Delete local branch
printf "%-40s" "Deleting local branch"
if git branch -D "$PROJECT_NAME" >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Delete remote branch
printf "%-40s" "Deleting remote branch"
if git push origin --delete "$PROJECT_NAME" >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Rebuild sitemap
printf "%-40s" "Rebuilding sitemap"
if npm run build:sitemap >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Project '$PROJECT_NAME' deleted successfully${NC}"
