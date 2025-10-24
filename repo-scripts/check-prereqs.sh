#!/bin/bash
# Check system prerequisites for AI Frontend Development

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Check a command and optionally install it
check_command() {
    local name=$1
    local command=$2
    local install_cmd=$3

    printf "%-40s" "Checking $name"

    if command -v "$command" >/dev/null 2>&1; then
        printf "${GREEN}${SYM_SUCCESS}${NC}\n"
        return 0
    else
        printf "${RED}${SYM_ERROR}${NC}\n"

        if [ -n "$install_cmd" ]; then
            printf "%-40s" "Installing $name"
            if eval "$install_cmd" >/dev/null 2>&1; then
                printf "${GREEN}${SYM_SUCCESS}${NC}\n"
                return 0
            else
                printf "${RED}${SYM_ERROR}${NC}\n"
                return 1
            fi
        fi
        return 1
    fi
}

log_info "🔍 Checking Prerequisites"
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
exec_with_status "Installing project dependencies" "npm install"

echo ""
log_success "✅ All prerequisites checked"
