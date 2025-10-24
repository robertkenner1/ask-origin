#!/bin/bash
# Deploy projects to Vercel

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Constants
VERCEL_TEAM_SLUG="grammarly-0ad4c188"

# Get project name from argument or auto-detect from branch
PROJECT_NAME=""
if [ -n "$1" ]; then
    PROJECT_NAME="$1"
else
    # Auto-detect from git branch (proj-* pattern)
    BRANCH_NAME=$(git branch --show-current 2>/dev/null || echo "")
    if [[ "$BRANCH_NAME" =~ ^proj-(.+)$ ]]; then
        PROJECT_NAME="${BASH_REMATCH[1]}"
        echo -e "${BLUE}ℹ️  Auto-detected project from branch: $PROJECT_NAME${NC}"
        echo ""
    fi
fi

# Validate project name
if [ -z "$PROJECT_NAME" ]; then
    echo -e "${RED}❌ Error: Project name not provided and could not auto-detect from branch${NC}"
    echo ""
    echo "Usage:"
    echo "  $0 [project-name]"
    echo ""
    echo "Examples:"
    echo "  $0 my-ai-editor"
    echo "  $0  # Auto-detect from git branch (proj-* pattern)"
    exit 1
fi

PROJECT_DIR="projects/$PROJECT_NAME"
PROJECT_JSON="$PROJECT_DIR/.project.json"

echo "🚀 Vercel Deployment: $PROJECT_NAME"
echo ""

# Validate project directory exists
printf "%-40s" "Checking project directory"
if [ ! -d "$PROJECT_DIR" ]; then
    printf "${RED}❌${NC}\n"
    echo -e "${RED}Error: Project directory not found: $PROJECT_DIR${NC}"
    exit 1
fi
printf "${GREEN}✅${NC}\n"

# Validate .project.json exists
printf "%-40s" "Checking project metadata"
if [ ! -f "$PROJECT_JSON" ]; then
    printf "${RED}❌${NC}\n"
    echo -e "${RED}Error: .project.json not found in $PROJECT_DIR${NC}"
    exit 1
fi
printf "${GREEN}✅${NC}\n"

# Check if deployment type is vercel
printf "%-40s" "Validating deployment type"
DEPLOYMENT_TYPE=$(cat "$PROJECT_JSON" | grep -o '"deployment": *"[^"]*"' | sed 's/"deployment": *"\(.*\)"/\1/' || echo "")
if [ "$DEPLOYMENT_TYPE" != "vercel" ]; then
    printf "${YELLOW}⚠️${NC}\n"
    echo -e "${YELLOW}Warning: Project deployment type is '$DEPLOYMENT_TYPE', not 'vercel'${NC}"
    echo -e "${YELLOW}Skipping deployment${NC}"
    exit 0
fi
printf "${GREEN}✅${NC}\n"

# Validate package.json exists (Next.js project)
printf "%-40s" "Checking package.json"
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    printf "${RED}❌${NC}\n"
    echo -e "${RED}Error: package.json not found in $PROJECT_DIR${NC}"
    echo -e "${RED}Only Next.js projects can be deployed to Vercel${NC}"
    exit 1
fi
printf "${GREEN}✅${NC}\n"

# Check Vercel CLI is installed
printf "%-40s" "Checking Vercel CLI"
if ! command -v vercel >/dev/null 2>&1; then
    printf "${RED}❌${NC}\n"
    echo -e "${RED}Error: Vercel CLI not installed${NC}"
    echo -e "${BLUE}Install with: brew install vercel-cli${NC}"
    exit 1
fi
printf "${GREEN}✅${NC}\n"

# Check Vercel authentication
printf "%-40s" "Checking Vercel authentication"
VERCEL_AUTH_ARGS=""
if [ -n "$VERCEL_TOKEN" ]; then
    # Token provided - use it
    VERCEL_AUTH_ARGS="--token $VERCEL_TOKEN"
    printf "${GREEN}✅${NC} (using token)\n"
elif vercel whoami >/dev/null 2>&1; then
    # Already logged in
    CURRENT_USER=$(vercel whoami 2>/dev/null | tail -1)
    printf "${GREEN}✅${NC} (logged in as $CURRENT_USER)\n"
else
    # Not authenticated
    printf "${RED}❌${NC}\n"
    echo -e "${RED}Error: Not authenticated with Vercel${NC}"
    echo ""
    echo "Please either:"
    echo "  1. Login: vercel login"
    echo "  2. Or set VERCEL_TOKEN: export VERCEL_TOKEN=your_token_here"
    echo ""
    echo "Get a token from: https://vercel.com/account/tokens"
    exit 1
fi

echo ""
echo -e "${BLUE}📋 Vercel Project Details:${NC}"

# Get project name from .project.json
VERCEL_PROJECT_NAME=$(cat "$PROJECT_JSON" | grep -o '"name": *"[^"]*"' | head -1 | sed 's/"name": *"\(.*\)"/\1/' || echo "$PROJECT_NAME")
echo "   📦 Project: $VERCEL_PROJECT_NAME"
echo "   📁 Directory: $PROJECT_DIR"
echo "   👥 Team: $VERCEL_TEAM_SLUG"

echo ""
echo -e "${BLUE}🔍 Checking Vercel project status...${NC}"

# Check if project already exists on Vercel
PROJECT_EXISTS=false
printf "%-40s" "Listing Vercel projects"

# Try to get project list
if vercel project ls --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS >/tmp/vercel-projects.txt 2>&1; then
    printf "${GREEN}✅${NC}\n"

    # Check if our project is in the list
    if grep -q "$VERCEL_PROJECT_NAME" /tmp/vercel-projects.txt; then
        PROJECT_EXISTS=true
        echo -e "   ${GREEN}✓ Project exists on Vercel${NC}"
    else
        echo -e "   ${YELLOW}⚠ Project not found on Vercel${NC}"
    fi
else
    printf "${YELLOW}⚠️${NC}\n"
    echo -e "${YELLOW}Warning: Could not list Vercel projects${NC}"
fi

# If project doesn't exist, we'll let vercel link handle the creation
if [ "$PROJECT_EXISTS" = false ]; then
    echo ""
    echo -e "${BLUE}📦 Project will be created during linking${NC}"
fi

echo ""
echo -e "${BLUE}🔗 Linking project to Vercel...${NC}"

# Link project (creates .vercel folder with project metadata)
# This will create the project if it doesn't exist
printf "%-40s" "Linking project"
cd "$PROJECT_DIR"
if vercel link --yes --project "$VERCEL_PROJECT_NAME" --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    cd ../..
    echo -e "${RED}Error: Failed to link project to Vercel${NC}"
    exit 1
fi
cd ../..

echo ""
echo -e "${BLUE}🔨 Building project locally...${NC}"

# Build locally with vercel build (handles private npm packages)
printf "%-40s" "Running vercel build"
cd "$PROJECT_DIR"
if vercel build --yes >/tmp/vercel-build.log 2>&1; then
    printf "${GREEN}✅${NC}\n"
    cd ../..
else
    printf "${RED}❌${NC}\n"
    cd ../..
    echo ""
    echo -e "${RED}Error: Local build failed${NC}"
    echo -e "${YELLOW}Build log:${NC}"
    tail -50 /tmp/vercel-build.log
    rm -f /tmp/vercel-build.log
    exit 1
fi

echo ""
echo -e "${BLUE}🚀 Deploying prebuilt to Vercel preview...${NC}"

# Deploy prebuilt to Vercel (NO --prod flag = preview deployment)
printf "%-40s" "Deploying project"
DEPLOY_OUTPUT=$(mktemp)
cd "$PROJECT_DIR"
if vercel deploy --prebuilt --scope "$VERCEL_TEAM_SLUG" $VERCEL_AUTH_ARGS 2>&1 | tee "$DEPLOY_OUTPUT"; then
    printf "${GREEN}✅${NC}\n"
    cd ../..
    echo ""

    # Extract deployment URL from output
    DEPLOYMENT_URL=$(grep -o 'https://[^ ]*vercel\.app' "$DEPLOY_OUTPUT" | head -1 || echo "")

    if [ -n "$DEPLOYMENT_URL" ]; then
        echo -e "${GREEN}✅ Deployment successful!${NC}"
        echo ""
        echo -e "${BLUE}🌐 Preview URL:${NC}"
        echo "   $DEPLOYMENT_URL"
        echo ""

        # Also show the production URL from .project.json if available
        PRODUCTION_URL=$(cat "$PROJECT_JSON" | grep -o '"remote": *"[^"]*"' | sed 's/"remote": *"\(.*\)"/\1/' || echo "")
        if [ -n "$PRODUCTION_URL" ]; then
            echo -e "${BLUE}📋 Configured URL (from .project.json):${NC}"
            echo "   $PRODUCTION_URL"
            echo ""
        fi
    else
        echo -e "${YELLOW}⚠️  Deployment completed but URL not found in output${NC}"
    fi

    rm -f "$DEPLOY_OUTPUT"
    rm -f /tmp/vercel-build.log
else
    printf "${RED}❌${NC}\n"
    cd ../..
    echo ""
    echo -e "${RED}Error: Deployment failed${NC}"
    echo -e "${YELLOW}Check output above for details${NC}"
    rm -f "$DEPLOY_OUTPUT"
    rm -f /tmp/vercel-build.log
    exit 1
fi

# Cleanup
rm -f /tmp/vercel-projects.txt

echo -e "${GREEN}✅ Vercel deployment complete!${NC}"
