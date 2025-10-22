#!/bin/bash
# Check system prerequisites for AI Frontend Development

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check a command and optionally install it
check_command() {
    local name=$1
    local command=$2
    local install_cmd=$3

    printf "%-40s" "Checking $name"

    if command -v "$command" >/dev/null 2>&1; then
        printf "${GREEN}✅${NC}\n"
        return 0
    else
        printf "${RED}❌${NC}\n"

        if [ -n "$install_cmd" ]; then
            printf "%-40s" "Installing $name"
            if eval "$install_cmd" >/dev/null 2>&1; then
                printf "${GREEN}✅${NC}\n"
                return 0
            else
                printf "${RED}❌${NC}\n"
                return 1
            fi
        fi
        return 1
    fi
}

echo "🔍 Checking Prerequisites"
echo ""

# Check Homebrew
check_command "Homebrew" "brew" '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'

# Check Node.js
check_command "Node.js" "node" "brew install node"

# Check Git
check_command "Git" "git" "brew install git"

# Check Claude Code CLI
check_command "Claude Code CLI" "claude" "npm install -g @anthropic-ai/claude-code"

# Check Vercel CLI
check_command "Vercel CLI" "vercel" "brew install vercel-cli"

# Install project dependencies
printf "%-40s" "Installing project dependencies"
if npm install >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ All prerequisites checked${NC}"
