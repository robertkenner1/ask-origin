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

# Check GitLab SSH configuration
printf "%-40s" "Checking GitLab SSH access"
if ssh -T git@ssh.gitlab.grammarly.io 2>&1 | grep -q "Welcome to GitLab"; then
    printf "${GREEN}${SYM_SUCCESS}${NC}\n"
else
    printf "${YELLOW}${SYM_WARNING}${NC}\n"
    log_warning "GitLab SSH not configured properly"
    log_info "Please follow the setup guide: https://coda.io/d/Go-Analytics-Eng-Home_dNZ2htlx4mT/Setting-up-GitLab_suRY1CtC#_lu-x1vGw"
    echo ""
fi

# Check Vercel team membership
printf "%-40s" "Checking Vercel team access"
if command -v vercel >/dev/null 2>&1; then
    if vercel team list --no-color 2>&1 | grep -q "grammarly-0ad4c188"; then
        printf "${GREEN}${SYM_SUCCESS}${NC}\n"
    else
        printf "${YELLOW}${SYM_WARNING}${NC}\n"
        log_warning "Not a member of Grammarly Vercel team"
        log_info "Please contact artur.kiryiak to be added to the Grammarly team in Vercel"
        echo ""
    fi
else
    printf "${YELLOW}${SYM_WARNING}${NC}\n"
    log_warning "Vercel CLI not installed - skipping team check"
    echo ""
fi

# Install project dependencies
exec_with_status "Installing project dependencies" "npm install"

echo ""
log_success "✅ All prerequisites checked"
