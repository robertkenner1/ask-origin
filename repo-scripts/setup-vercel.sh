#!/bin/bash
set -e

# Determine script directory and source common utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# ============================================================================
# Main Script
# ============================================================================

print_separator "Vercel Setup" "Configure Vercel CLI and team access"

# ============================================================================
# Disclaimer
# ============================================================================
log_warning "⚠️  Vercel is currently in PoC (Proof of Concept) stage"
echo ""
log_info "To get access to the Grammarly Vercel team, please contact:"
log_info "👉 Developer Experience team in #platform Slack channel"
echo ""

read -p "Press ENTER to continue with Vercel setup... "
echo ""

# ============================================================================
# Step 1: Check/Install Vercel CLI
# ============================================================================
print_separator "Step 1: Vercel CLI Installation"

if command -v vercel >/dev/null 2>&1; then
    print_status "Vercel CLI already installed" "success"
    VERCEL_VERSION=$(vercel --version 2>/dev/null || echo "unknown")
    log_info "Version: $VERCEL_VERSION"
else
    log_info "Vercel CLI not found. Installing via Homebrew..."
    echo ""

    if exec_with_status "Installing Vercel CLI" "brew install vercel-cli"; then
        log_success "Vercel CLI installed successfully!"
    else
        log_error "Failed to install Vercel CLI"
        log_info "Try manual installation: brew install vercel-cli"
        exit 1
    fi
fi

echo ""

# ============================================================================
# Step 2: Check/Login to Vercel
# ============================================================================
print_separator "Step 2: Vercel Authentication"

if vercel whoami --no-color >/dev/null 2>&1; then
    VERCEL_USER=$(vercel whoami --no-color 2>/dev/null || echo "unknown")
    print_status "Already logged in to Vercel" "success"
    log_info "User: $VERCEL_USER"
else
    log_info "Not logged in to Vercel. Starting OAuth login flow..."
    echo ""
    log_info "A browser window will open for authentication."
    echo ""

    read -p "Press ENTER to open browser for Vercel login... "
    echo ""

    if vercel login; then
        echo ""
        log_success "Successfully logged in to Vercel!"
        VERCEL_USER=$(vercel whoami --no-color 2>/dev/null || echo "unknown")
        log_info "User: $VERCEL_USER"
    else
        echo ""
        log_error "Failed to login to Vercel"
        log_info "Try running: vercel login"
        exit 1
    fi
fi

echo ""

# ============================================================================
# Step 3: Check Team Access
# ============================================================================
print_separator "Step 3: Grammarly Team Access"

log_info "Checking access to Grammarly Vercel team..."
echo ""

if vercel team list --no-color 2>&1 | grep -q "grammarly-0ad4c188"; then
    print_status "Access to Grammarly team (grammarly-0ad4c188)" "success"
    echo ""
    log_success "You're all set! You have access to the Grammarly Vercel team."
else
    print_status "Access to Grammarly team (grammarly-0ad4c188)" "error"
    echo ""
    log_warning "You don't have access to the Grammarly Vercel team yet."
    echo ""
    log_info "To get access:"
    log_info "👉 Contact Developer Experience team in #platform Slack channel"
    log_info "👉 Request to be added to team: grammarly-0ad4c188"
    echo ""
    log_info "After you're added, run this script again to verify access."
fi

echo ""
print_separator "Setup Complete!"

log_info "Vercel CLI is configured and ready to use."
echo ""
log_info "Useful commands:"
echo "  vercel whoami          - Check current user"
echo "  vercel team list       - List available teams"
echo "  vercel projects list   - List projects in current team"
echo ""
