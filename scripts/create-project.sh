#!/bin/bash
# Create a new project from templates

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get project name from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a project name:"
    read -p "Project name (kebab-case): " PROJECT_NAME
else
    PROJECT_NAME="$1"
fi

# Validate project name
if [ -z "$PROJECT_NAME" ]; then
    echo -e "${RED}❌ Project name cannot be empty${NC}"
    exit 1
fi

if [ -d "projects/$PROJECT_NAME" ]; then
    echo -e "${RED}❌ Project '$PROJECT_NAME' already exists${NC}"
    exit 1
fi

if [ ! -d "templates" ]; then
    echo -e "${RED}❌ Templates directory not found${NC}"
    exit 1
fi

echo "🚀 Creating project: $PROJECT_NAME"
echo ""

# Stash current changes
printf "%-40s" "Stashing current changes"
if git stash push -m "Auto-stash before creating $PROJECT_NAME" >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Switch to main branch
printf "%-40s" "Switching to main branch"
if git checkout main >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Pull latest changes
printf "%-40s" "Pulling latest changes"
if git pull origin main >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Create new branch
printf "%-40s" "Creating new branch from main"
if git checkout -b "$PROJECT_NAME" >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Restore stashed changes
printf "%-40s" "Restoring stashed changes"
if git stash pop >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}\n"
fi

# Create project structure
printf "%-40s" "Creating project structure"
if mkdir -p "projects/$PROJECT_NAME/src" "projects/$PROJECT_NAME/prompts"; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Generate project metadata
printf "%-40s" "Creating files from templates"
PROJECT_TITLE=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2)); print}')
PROJECT_CLASS=$(echo "$PROJECT_NAME" | sed 's/-//g' | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')
PROJECT_VAR=$(echo "$PROJECT_NAME" | sed 's/-//g' | tr '[:upper:]' '[:lower:]')
PROJECT_TYPE="Frontend Prototype"
PROJECT_DESCRIPTION="Frontend prototype for $PROJECT_NAME"
PROJECT_NOTES="Add your project-specific notes here"

# Copy and process templates
for template in templates/*; do
    filename=$(basename "$template")

    # Determine target location
    if [ "$filename" = "initial-prompt.md" ]; then
        target="projects/$PROJECT_NAME/prompts/$filename"
    elif [ "$filename" = "CLAUDE.md" ]; then
        target="projects/$PROJECT_NAME/$filename"
    else
        target="projects/$PROJECT_NAME/src/$filename"
    fi

    # Process template with variable substitution
    sed -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
        -e "s/{{PROJECT_TITLE}}/$PROJECT_TITLE/g" \
        -e "s/{{PROJECT_CLASS}}/$PROJECT_CLASS/g" \
        -e "s/{{PROJECT_VAR}}/$PROJECT_VAR/g" \
        -e "s/{{PROJECT_TYPE}}/$PROJECT_TYPE/g" \
        -e "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" \
        -e "s/{{PROJECT_NOTES}}/$PROJECT_NOTES/g" \
        "$template" > "$target"
done
printf "${GREEN}✅${NC}\n"

# Build project
printf "%-40s" "Building project"
if npm run build:sitemap >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Stop existing dev server
printf "%-40s" "Stopping existing dev server"
if lsof -t -i:8181 >/dev/null 2>&1; then
    kill -9 $(lsof -t -i:8181) >/dev/null 2>&1
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}  (not running)\n"
fi

# Start dev server in background
npm run dev >/dev/null 2>&1 &

echo ""
echo -e "${GREEN}✅ Project '$PROJECT_NAME' created successfully${NC}"
echo "   📁 Local: http://localhost:8181/$PROJECT_NAME/"
echo "   🌿 Branch: $PROJECT_NAME"
echo ""

# Launch Claude Code
claude
