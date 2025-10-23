#!/bin/bash
# Create a new project from templates

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Constants
VERCEL_TEAM_SLUG="grammarly-0ad4c188"

# Function to slugify project name
slugify() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Function to list available templates
list_templates() {
    echo -e "${BLUE}📦 Available Templates:${NC}"
    echo ""

    local i=1
    for template_dir in templates/*/; do
        if [ -d "$template_dir" ]; then
            local template_name=$(basename "$template_dir")
            local template_json="$template_dir/template.json"

            echo -e "  ${GREEN}$i)${NC} $template_name"

            # Show description if template.json exists
            if [ -f "$template_json" ]; then
                local description=$(cat "$template_json" | grep -o '"description": *"[^"]*"' | sed 's/"description": *"\(.*\)"/\1/' || echo "")
                if [ -n "$description" ]; then
                    echo "     $description"
                fi
            fi
            echo ""

            ((i++))
        fi
    done
}

# Get project name from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a project name:"
    read -p "Project name (will be slugified): " PROJECT_INPUT
else
    PROJECT_INPUT="$1"
fi

# Slugify project name
PROJECT_NAME=$(slugify "$PROJECT_INPUT")

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

# List available templates
list_templates

# Prompt for template selection
echo "Select a template:"
read -p "Enter template number or name: " TEMPLATE_CHOICE

# Resolve template choice to directory
TEMPLATE_DIR=""
if [[ "$TEMPLATE_CHOICE" =~ ^[0-9]+$ ]]; then
    # User entered a number
    i=1
    for template_dir in templates/*/; do
        if [ -d "$template_dir" ]; then
            if [ $i -eq $TEMPLATE_CHOICE ]; then
                TEMPLATE_DIR="$template_dir"
                break
            fi
            ((i++))
        fi
    done
else
    # User entered a name
    TEMPLATE_DIR="templates/$TEMPLATE_CHOICE"
fi

# Validate template selection
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo -e "${RED}❌ Template not found: $TEMPLATE_CHOICE${NC}"
    exit 1
fi

TEMPLATE_NAME=$(basename "$TEMPLATE_DIR")

echo ""
echo "🚀 Creating project: $PROJECT_NAME"
echo "📦 Using template: $TEMPLATE_NAME"
echo ""

# Prompt for project description
read -p "Project description (optional): " PROJECT_DESCRIPTION
if [ -z "$PROJECT_DESCRIPTION" ]; then
    PROJECT_DESCRIPTION="Project created from $TEMPLATE_NAME template"
fi

# Generate project metadata
BRANCH_NAME="proj-$PROJECT_NAME"
CREATED_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
PROJECT_TITLE=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2)); print}')

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

# Create new branch with proj- prefix
printf "%-40s" "Creating new branch: $BRANCH_NAME"
if git checkout -b "$BRANCH_NAME" >/dev/null 2>&1; then
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

# Create project directory
printf "%-40s" "Creating project directory"
if mkdir -p "projects/$PROJECT_NAME"; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Copy template to project directory
printf "%-40s" "Copying template files"
if cp -r "$TEMPLATE_DIR"/* "projects/$PROJECT_NAME/"; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Create .project.json from template
printf "%-40s" "Creating project metadata"
if [ -f "$TEMPLATE_DIR/.project.json.template" ]; then
    # Use template if exists
    sed -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
        -e "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" \
        -e "s/{{CREATED_DATE}}/$CREATED_DATE/g" \
        -e "s/{{BRANCH_NAME}}/$BRANCH_NAME/g" \
        -e "s/{{VERCEL_TEAM_SLUG}}/$VERCEL_TEAM_SLUG/g" \
        "$TEMPLATE_DIR/.project.json.template" > "projects/$PROJECT_NAME/.project.json"
else
    # Create default .project.json
    cat > "projects/$PROJECT_NAME/.project.json" <<EOF
{
  "name": "$PROJECT_NAME",
  "description": "$PROJECT_DESCRIPTION",
  "deployment": "static",
  "created": "$CREATED_DATE",
  "repository": {
    "branch": "$BRANCH_NAME"
  },
  "urls": {
    "local": "http://localhost:8181/$PROJECT_NAME/",
    "remote": "https://ai-frontend-prototypes-c8939b.gpages.io/$PROJECT_NAME/"
  }
}
EOF
fi
printf "${GREEN}✅${NC}\n"

# Process template variables in all files
printf "%-40s" "Processing template variables"
find "projects/$PROJECT_NAME" -type f \( -name "*.md" -o -name "*.html" -o -name "*.js" -o -name "*.json" -o -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' \
    -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
    -e "s/{{PROJECT_TITLE}}/$PROJECT_TITLE/g" \
    -e "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" \
    -e "s/{{CREATED_DATE}}/$CREATED_DATE/g" \
    -e "s/{{BRANCH_NAME}}/$BRANCH_NAME/g" \
    -e "s/{{VERCEL_TEAM_SLUG}}/$VERCEL_TEAM_SLUG/g" \
    {} \; 2>/dev/null
printf "${GREEN}✅${NC}\n"

# Determine if this is a static or Next.js project
if [ -f "projects/$PROJECT_NAME/package.json" ]; then
    # Next.js or Node project - install dependencies
    printf "%-40s" "Installing dependencies"
    (cd "projects/$PROJECT_NAME" && npm install >/dev/null 2>&1) && printf "${GREEN}✅${NC}\n" || printf "${YELLOW}⚠️${NC}\n"

    # Build project if needed
    if [ -f "projects/$PROJECT_NAME/next.config.ts" ] || [ -f "projects/$PROJECT_NAME/next.config.js" ]; then
        # Don't build Next.js projects yet
        echo ""
        echo -e "${BLUE}ℹ️  Next.js project created. Use 'cd projects/$PROJECT_NAME && npm run dev' to start${NC}"
    fi
else
    # Static website - build sitemap
    printf "%-40s" "Building sitemap"
    if npm run build:sitemap >/dev/null 2>&1; then
        printf "${GREEN}✅${NC}\n"
    else
        printf "${RED}❌${NC}\n"
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
fi

echo ""
echo -e "${GREEN}✅ Project '$PROJECT_NAME' created successfully${NC}"
echo ""
echo -e "${BLUE}📋 Project Details:${NC}"
echo "   📦 Template: $TEMPLATE_NAME"
echo "   🌿 Branch: $BRANCH_NAME"
echo "   📁 Location: projects/$PROJECT_NAME/"

# Show URLs based on project type
if [ -f "projects/$PROJECT_NAME/package.json" ]; then
    PROJECT_JSON="projects/$PROJECT_NAME/.project.json"
    if [ -f "$PROJECT_JSON" ]; then
        LOCAL_URL=$(cat "$PROJECT_JSON" | grep -o '"local": *"[^"]*"' | sed 's/"local": *"\(.*\)"/\1/' || echo "")
        if [ -n "$LOCAL_URL" ]; then
            echo "   🌐 Local: $LOCAL_URL"
        fi
    fi
else
    echo "   🌐 Local: http://localhost:8181/$PROJECT_NAME/"
fi

echo ""

# Launch Claude Code
claude
