#!/bin/bash
# Deploy changes to GitLab

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get commit message from argument or prompt
if [ -z "$1" ]; then
    echo "Please provide a commit message:"
    read -p "Commit message: " COMMIT_MSG
else
    COMMIT_MSG="$1"
fi

# Validate commit message
if [ -z "$COMMIT_MSG" ]; then
    echo -e "${RED}❌ Commit message cannot be empty${NC}"
    exit 1
fi

echo "🚀 Deploying changes"
echo ""

# Build projects
printf "%-40s" "Building projects"
if npm run build:sitemap >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Add changes
printf "%-40s" "Adding changes"
if git add . >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Create commit
printf "%-40s" "Creating commit"
if git commit -m "$COMMIT_MSG" >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Push to remote
printf "%-40s" "Pushing to remote"
if git push -u origin HEAD >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Deployment complete${NC}"
echo "   🌐 Live: https://ai-frontend-prototypes-c8939b.gpages.io/"
