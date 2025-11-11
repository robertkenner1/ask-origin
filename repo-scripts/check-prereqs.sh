#!/bin/bash
# Check system prerequisites for AI Frontend Development

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Visual separator
print_separator "🔍 Prerequisites Check" "Checking and installing required tools"

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

# Check Homebrew
check_command "Homebrew" "brew" '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'

# Check Node.js
check_command "Node.js" "node" "brew install node"

# Check npx (comes with npm/node)
printf "%-40s" "Checking npx"
if command -v npx >/dev/null 2>&1; then
    printf "${GREEN}${SYM_SUCCESS}${NC}\n"
else
    printf "${RED}${SYM_ERROR}${NC}\n"
    log_error "npx not found (should come with Node.js/npm)"
    log_info "Try reinstalling Node.js or updating npm: npm install -g npm@latest"
    exit 1
fi

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
        log_warning "Not a member of Grammarly Vercel team or user is not logged in"
        log_info "Vercel CLI is not required to be configured, but if you want to manage Vercel projects manually, you can run: make setup-vercel from root of the repository"
        echo ""
    fi
else
    printf "${YELLOW}${SYM_WARNING}${NC}\n"
    log_warning "Vercel CLI not installed - skipping team check"
    echo ""
fi

# Check Artifactory npm authentication
printf "%-40s" "Checking Artifactory npm access"
if npm whoami --registry=https://artifactory.grammarly.io/artifactory/api/npm/common-npm/ >/dev/null 2>&1; then
    printf "${GREEN}${SYM_SUCCESS}${NC}\n"
else
    printf "${YELLOW}${SYM_WARNING}${NC}\n"
    log_warning "Not authenticated with Artifactory npm registry"
    log_info "You will not be able to use @grammarly/design-system package for local development"
    echo ""

    # Ask if user wants to set up Artifactory now
    read -p "Would you like to set up Artifactory npm authentication now? (y/n): " -n 1 -r
    echo ""

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        log_info "Running Artifactory setup..."
        echo ""

        # Run the setup script
        if "$SCRIPT_DIR/setup-artifactory-npm.sh"; then
            echo ""
            log_success "Artifactory setup completed!"
            echo ""

            # Re-check authentication
            printf "%-40s" "Re-checking Artifactory npm access"
            if npm whoami --registry=https://artifactory.grammarly.io/artifactory/api/npm/common-npm/ >/dev/null 2>&1; then
                printf "${GREEN}${SYM_SUCCESS}${NC}\n"
            else
                printf "${YELLOW}${SYM_WARNING}${NC}\n"
                log_warning "Authentication still not working. Please contact Developer Experience team in #platform slack channel."
            fi
        else
            echo ""
            log_warning "Artifactory setup was cancelled or failed"
            log_info "You can run it manually later: ./repo-scripts/setup-artifactory-npm.sh"
        fi
    else
        log_info "Skipping Artifactory setup"
        log_info "You can run it manually later: ./repo-scripts/setup-artifactory-npm.sh"
    fi
    echo ""
fi

echo ""
log_success "✅ All prerequisites checked"
