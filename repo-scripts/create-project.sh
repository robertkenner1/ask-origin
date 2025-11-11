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

# Stash current changes if needed
if ! git diff --quiet || ! git diff --cached --quiet; then
    exec_with_status "Stashing current changes" "git stash push -m 'Auto-stash before creating $PROJECT_NAME'"
else
    print_status "Stashing current changes" "note" "nothing to stash"
fi

# Switch to main branch
exec_with_status "Switching to main branch" "git checkout main"

# Pull latest changes
exec_with_status "Pulling latest changes" "git pull origin main" || print_status "Pulling latest changes" "warning"

# Create new branch with proj- prefix
exec_with_status "Creating new branch: $BRANCH_NAME" "git checkout -b '$BRANCH_NAME'"

# Restore stashed changes if any exist
if git stash list | grep -q "Auto-stash before creating $PROJECT_NAME"; then
    exec_with_status "Restoring stashed changes" "git stash pop"
else
    print_status "Restoring stashed changes" "note" "nothing to restore"
fi

# Create project directory
exec_with_status "Creating project directory" "mkdir -p '$PROJECTS_DIR/$PROJECT_NAME'"

# Special handling for Vercel templates
if [ "$TEMPLATE_NAME" = "other-vercel" ]; then
    # Check if vercel CLI is installed
    if ! command -v vercel >/dev/null 2>&1; then
        log_error "❌ Vercel CLI not found. Please install it first:"
        echo ""
        echo "  npm install -g vercel"
        echo ""
        exit 1
    fi

    # Create temporary directory for vercel init
    TEMP_DIR="/tmp/vercel-init-$(date +%s)-$PROJECT_NAME"
    mkdir -p "$TEMP_DIR"

    # Set up cleanup trap
    cleanup_temp() {
        if [ -d "$TEMP_DIR" ]; then
            rm -rf "$TEMP_DIR"
        fi
    }
    trap cleanup_temp EXIT ERR

    echo ""
    log_info "🎯 Initializing from Vercel template..."
    log_info "   Please select a template from the interactive menu"
    echo ""

    # Run vercel init interactively
    if ! (cd "$TEMP_DIR" && vercel init); then
        log_error "❌ Vercel init failed or was cancelled"
        exit 1
    fi

    # Find the created directory (first subdirectory in temp)
    VERCEL_TEMPLATE_DIR=$(find "$TEMP_DIR" -mindepth 1 -maxdepth 1 -type d | head -1)

    if [ -z "$VERCEL_TEMPLATE_DIR" ] || [ ! -d "$VERCEL_TEMPLATE_DIR" ]; then
        log_error "❌ No template directory found. Vercel init may have failed."
        exit 1
    fi

    echo ""
    log_info "📦 Copying Vercel template to project directory..."

    # Copy vercel template contents to project directory
    exec_with_status "Copying Vercel template files" "cp -r '$VERCEL_TEMPLATE_DIR'/* '$PROJECTS_DIR/$PROJECT_NAME/'"

    # Now overlay monorepo template files on top
    exec_with_status "Overlaying monorepo files" "cp -r '$TEMPLATE_DIR'/* '$PROJECTS_DIR/$PROJECT_NAME/'"

    echo ""
else
    # Standard template copy for non-Vercel templates
    exec_with_status "Copying template files" "cp -r '$TEMPLATE_DIR'/* '$PROJECTS_DIR/$PROJECT_NAME/'"
fi

# Create symlinks to shared resources
exec_with_status "Creating symlink: scripts/" "ln -s '../../.shared/scripts' '$PROJECTS_DIR/$PROJECT_NAME/scripts'"

# Create .claude directory structure with selective symlinks
exec_with_status "Creating .claude directory" "mkdir -p '$PROJECTS_DIR/$PROJECT_NAME/.claude'"
exec_with_status "Creating symlink: .claude/commands/" "ln -s '../../../.shared/claude/commands' '$PROJECTS_DIR/$PROJECT_NAME/.claude/commands'"
exec_with_status "Creating symlink: .claude/skills/" "ln -s '../../../.shared/claude/skills' '$PROJECTS_DIR/$PROJECT_NAME/.claude/skills'"
exec_with_status "Copying settings.local.json" "cp '.shared/claude/settings.local.json' '$PROJECTS_DIR/$PROJECT_NAME/.claude/settings.local.json'"

# Create .project.json from template
if [ -f "$TEMPLATE_DIR/.project.json.template" ]; then
    # Use template if exists
    exec_with_status "Creating project metadata" "sed -e 's/{{PROJECT_NAME}}/$PROJECT_NAME/g' \
        -e 's/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g' \
        -e 's/{{CREATED_DATE}}/$CREATED_DATE/g' \
        -e 's/{{BRANCH_NAME}}/$BRANCH_NAME/g' \
        -e 's/{{VERCEL_TEAM_SLUG}}/$VERCEL_TEAM_SLUG/g' \
        '$TEMPLATE_DIR/.project.json.template' > '$PROJECTS_DIR/$PROJECT_NAME/.project.json'"
else
    # Create default .project.json
    print_status "Creating project metadata" ""
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
    print_status "Creating project metadata" "success"
fi

# Generate GitLab CI deploy file from template
if [ -f "$TEMPLATE_DIR/.gitlab-ci/deploy.yml.template" ]; then
    exec_with_status "Generating GitLab CI configuration" "mkdir -p '$PROJECTS_DIR/$PROJECT_NAME/.gitlab-ci' && sed -e 's/{{PROJECT_NAME}}/$PROJECT_NAME/g' '$TEMPLATE_DIR/.gitlab-ci/deploy.yml.template' > '$PROJECTS_DIR/$PROJECT_NAME/.gitlab-ci/deploy.yml'"
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

# Create temp file for logs
DEV_LOG_FILE=$(mktemp)

# Start dev server in background and capture output
npm run dev > "$DEV_LOG_FILE" 2>&1 &
DEV_SERVER_PID=$!

# Wait a bit for server to start
sleep 2

# Check if process is still running
if ! kill -0 $DEV_SERVER_PID 2>/dev/null; then
    # Process died - show error
    print_status "Development server startup" "warning"
    log_warning "Server failed to start. Last 20 lines of output:"
    echo ""
    tail -20 "$DEV_LOG_FILE"
    echo ""
else
    log_success "✅ Development server started at http://localhost:$DEV_SERVER_PORT"
    echo ""
fi

# Clean up temp log file
rm -f "$DEV_LOG_FILE"

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
