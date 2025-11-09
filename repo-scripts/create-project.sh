#!/bin/bash
# Create a new project from templates

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Visual separator
print_separator "📦 Create New Project" "Generate project from template"

# Get configuration
VERCEL_TEAM_SLUG=$(get_config "VERCEL_TEAM_SLUG" "grammarly-0ad4c188")
TEMPLATES_DIR=$(get_config "TEMPLATES_DIR" "templates")
PROJECTS_DIR=$(get_config "PROJECTS_DIR" "projects")
DEV_SERVER_PORT="3000"

# Function to slugify project name
slugify() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Function to list available templates
list_templates() {
    log_info "📦 Available Templates:"
    echo ""

    local i=1
    for template_dir in $TEMPLATES_DIR/*/; do
        if [ -d "$template_dir" ]; then
            local template_name=$(basename "$template_dir")
            local template_json="$template_dir/.project.json.template"

            echo -e "  ${GREEN}$i)${NC} $template_name"

            # Show description if .project.json.template exists
            if [ -f "$template_json" ]; then
                local description=$(jq -r '.template.description // empty' "$template_json" 2>/dev/null || echo "")
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
    log_error "❌ Project name cannot be empty"
    exit 1
fi

if [ -d "$PROJECTS_DIR/$PROJECT_NAME" ]; then
    log_error "❌ Project '$PROJECT_NAME' already exists"
    exit 1
fi

if [ ! -d "$TEMPLATES_DIR" ]; then
    log_error "❌ Templates directory not found"
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
    for template_dir in $TEMPLATES_DIR/*/; do
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
    TEMPLATE_DIR="$TEMPLATES_DIR/$TEMPLATE_CHOICE"
fi

# Validate template selection
if [ ! -d "$TEMPLATE_DIR" ]; then
    log_error "❌ Template not found: $TEMPLATE_CHOICE"
    exit 1
fi

TEMPLATE_NAME=$(basename "$TEMPLATE_DIR")

echo ""
log_info "🚀 Creating project: $PROJECT_NAME"
log_info "📦 Using template: $TEMPLATE_NAME"
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
exec_with_status "Stashing current changes" "git stash push -m 'Auto-stash before creating $PROJECT_NAME'" || print_status "Stashing current changes" "note" "nothing to stash"

# Switch to main branch
exec_with_status "Switching to main branch" "git checkout main"

# Pull latest changes
exec_with_status "Pulling latest changes" "git pull origin main" || print_status "Pulling latest changes" "warning"

# Create new branch with proj- prefix
exec_with_status "Creating new branch: $BRANCH_NAME" "git checkout -b '$BRANCH_NAME'"

# Restore stashed changes
exec_with_status "Restoring stashed changes" "git stash pop" || print_status "Restoring stashed changes" "note" "nothing to restore"

# Create project directory
exec_with_status "Creating project directory" "mkdir -p '$PROJECTS_DIR/$PROJECT_NAME'"

# Copy template source files to project directory
exec_with_status "Copying template files" "cp -r '$TEMPLATE_DIR'/* '$PROJECTS_DIR/$PROJECT_NAME/'"

# Create symlinks to shared resources
exec_with_status "Creating symlink: scripts/" "ln -s '../../.shared/scripts' '$PROJECTS_DIR/$PROJECT_NAME/scripts'"
exec_with_status "Creating symlink: .claude/" "ln -s '../../.shared/.claude' '$PROJECTS_DIR/$PROJECT_NAME/.claude'"

# Create .project.json from template
print_status "Creating project metadata" ""
if [ -f "$TEMPLATE_DIR/.project.json.template" ]; then
    # Use template if exists
    sed -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
        -e "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" \
        -e "s/{{CREATED_DATE}}/$CREATED_DATE/g" \
        -e "s/{{BRANCH_NAME}}/$BRANCH_NAME/g" \
        -e "s/{{VERCEL_TEAM_SLUG}}/$VERCEL_TEAM_SLUG/g" \
        "$TEMPLATE_DIR/.project.json.template" > "$PROJECTS_DIR/$PROJECT_NAME/.project.json"
else
    # Create default .project.json
    cat > "$PROJECTS_DIR/$PROJECT_NAME/.project.json" <<EOF
{
  "name": "$PROJECT_NAME",
  "description": "$PROJECT_DESCRIPTION",
  "deployments": ["gitlab-pages"],
  "created": "$CREATED_DATE",
  "repository": {
    "branch": "$BRANCH_NAME"
  }
}
EOF
fi
print_status "Creating project metadata" "success"

# Generate GitLab CI deploy file from template
print_status "Generating GitLab CI configuration" ""
if [ -f "$TEMPLATE_DIR/.gitlab-ci/deploy.yml.template" ]; then
    mkdir -p "$PROJECTS_DIR/$PROJECT_NAME/.gitlab-ci"
    sed -e "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" \
        "$TEMPLATE_DIR/.gitlab-ci/deploy.yml.template" > "$PROJECTS_DIR/$PROJECT_NAME/.gitlab-ci/deploy.yml"
    print_status "Generating GitLab CI configuration" "success"
else
    print_status "Generating GitLab CI configuration" "note" "template not found"
fi

# Process template variables in all files
exec_with_status "Processing template variables" "find '$PROJECTS_DIR/$PROJECT_NAME' -type f \\( -name '*.md' -o -name '*.html' -o -name '*.js' -o -name '*.json' -o -name '*.ts' -o -name '*.tsx' \\) -exec sed -i '' -e 's/{{PROJECT_NAME}}/$PROJECT_NAME/g' -e 's/{{PROJECT_TITLE}}/$PROJECT_TITLE/g' -e 's/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g' -e 's/{{CREATED_DATE}}/$CREATED_DATE/g' -e 's/{{BRANCH_NAME}}/$BRANCH_NAME/g' -e 's/{{VERCEL_TEAM_SLUG}}/$VERCEL_TEAM_SLUG/g' {} \\;"

# All projects now have package.json - install dependencies
exec_with_status "Installing dependencies" "(cd '$PROJECTS_DIR/$PROJECT_NAME' && npm install)" || print_status "Installing dependencies" "warning"

# Generate .env.local from template variables if defined
ENV_VARS_TO_CONFIGURE=""
if [ -f "$PROJECTS_DIR/$PROJECT_NAME/.project.json" ]; then
    # Parse variables array once and store as JSON string
    VARIABLES_JSON=$(jq -c '.variables // []' "$PROJECTS_DIR/$PROJECT_NAME/.project.json" 2>/dev/null || echo "[]")
    VARIABLES_COUNT=$(echo "$VARIABLES_JSON" | jq 'length')

    if [ "$VARIABLES_COUNT" -gt 0 ]; then
        print_status "Generating .env.local" ""

        # Create .env.local file
        ENV_FILE="$PROJECTS_DIR/$PROJECT_NAME/.env.local"
        echo "# Environment Variables" > "$ENV_FILE"
        echo "# Generated on $(date)" >> "$ENV_FILE"
        echo "" >> "$ENV_FILE"

        # Extract each variable from stored JSON and add to .env.local
        echo "$VARIABLES_JSON" | jq -r '.[] | "\(.name)=PLACEHOLDER"' >> "$ENV_FILE"

        print_status "Generating .env.local" "success"

        # Store variables info for final message display (using same JSON)
        ENV_VARS_TO_CONFIGURE=$(echo "$VARIABLES_JSON" | jq -r '.[] | "   • \(.name): \(.description)"')
    fi
fi

echo ""
log_success "✅ Project '$PROJECT_NAME' created successfully"
echo ""

# Change to project directory
cd "$PROJECTS_DIR/$PROJECT_NAME"

log_info "📋 Project Details:"
echo "   📦 Template: $TEMPLATE_NAME"
echo "   🌿 Branch: $BRANCH_NAME"
echo "   📁 Location: $(pwd)"

# Show URLs
echo "   🌐 Local: http://localhost:$DEV_SERVER_PORT"

echo ""

# Check if port is already in use
if is_port_in_use "$DEV_SERVER_PORT"; then
    print_status "Port $DEV_SERVER_PORT already in use" "warning"
    log_info "Stopping existing process on port $DEV_SERVER_PORT..."
    kill_port "$DEV_SERVER_PORT"
    sleep 1
    echo ""
fi

# Start dev server for the project
log_info "🚀 Starting development server..."
echo ""
npm run dev 2>&1 >/dev/null &
sleep 2
log_success "✅ Development server started at http://localhost:$DEV_SERVER_PORT"
echo ""

# Show next steps
log_info "📝 Next Steps:"
echo ""
echo -e "   ${CYAN}cd projects/$PROJECT_NAME${NC}"
echo ""

# Show environment variable configuration if needed
if [ -n "$ENV_VARS_TO_CONFIGURE" ]; then
    echo "   Then:"
    echo "   1. Configure environment variables in .env.local:"
    echo ""
    echo "$ENV_VARS_TO_CONFIGURE"
    echo ""
    echo "   2. Start coding with your favorite AI tool!"
else
    echo "   Then start coding with your favorite AI tool!"
fi

echo ""
echo -e "   💡 Prefer Claude Code? Just type: ${GREEN}claude${NC}"
echo ""
