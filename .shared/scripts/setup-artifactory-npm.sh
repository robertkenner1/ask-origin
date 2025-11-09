#!/bin/bash
set -e

# Determine script directory and source common utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# ============================================================================
# Main Script
# ============================================================================

print_separator "Artifactory NPM Configuration Setup" "Configure npm to use Grammarly's Artifactory registry"

log_info "This script will configure npm to use Grammarly's Artifactory registry."
echo ""

# ============================================================================
# Step 1: Guide user to generate API token
# ============================================================================
print_separator "Step 1: Generate Artifactory API Token"

log_info "Please follow these steps to generate your API token:"
echo ""
echo "  1. Visit: https://grammarly.atlassian.net/wiki/spaces/PL/pages/657948789/Artifactory+Getting+Started+Guide"
echo "  2. Navigate to section: 'How to get Artifactory credentials (user-password)'"
echo "     to download artifacts locally"
echo "  3. Generate your API token"
echo ""
read -p "Press ENTER when you have your API token ready... "
print_status "Ready to proceed" "success"
echo ""

# ============================================================================
# Step 2: Get Artifactory username
# ============================================================================
print_separator "Step 2: Enter Artifactory Username"

read -p "Enter your ARTIFACTORY_USER (usually your Grammarly email): " ARTIFACTORY_USER

if [ -z "$ARTIFACTORY_USER" ]; then
    log_error "Artifactory username cannot be empty!"
    exit 1
fi

print_status "Username: $ARTIFACTORY_USER" "success"
echo ""

# ============================================================================
# Step 3: Get Artifactory API token
# ============================================================================
print_separator "Step 3: Enter Artifactory API Token"

read -sp "Enter your ARTIFACTORY_API_TOKEN (input will be hidden): " ARTIFACTORY_API_TOKEN
echo ""

if [ -z "$ARTIFACTORY_API_TOKEN" ]; then
    log_error "Artifactory API token cannot be empty!"
    exit 1
fi

print_status "API token received" "success"
echo ""

# ============================================================================
# Step 4: Backup existing .npmrc if it exists
# ============================================================================
print_separator "Step 4: Backup Existing Configuration"

NPMRC_PATH="$HOME/.npmrc"
BACKUP_PATH=""

if [ -f "$NPMRC_PATH" ]; then
    BACKUP_PATH="$NPMRC_PATH.backup.$(date +%Y%m%d_%H%M%S)"
    log_warning "Found existing .npmrc file at: $NPMRC_PATH"
    log_info "Creating backup at: $BACKUP_PATH"
    echo ""

    if cp "$NPMRC_PATH" "$BACKUP_PATH"; then
        print_status "Backup created" "success"
        echo ""
        log_info "Your original configuration has been preserved."
        log_info "If something goes wrong, you can restore it with:"
        echo "  cp $BACKUP_PATH $NPMRC_PATH"
        echo ""
    else
        log_error "Failed to create backup!"
        exit 1
    fi
else
    log_info "No existing .npmrc file found. Creating new configuration..."
    echo ""
fi

# ============================================================================
# Step 5: Configure npm with Artifactory
# ============================================================================
print_separator "Step 5: Configure NPM"

ARTIFACTORY_NPM_URL="https://artifactory.grammarly.io/artifactory/api/npm"

# Set registry
print_status "Setting npm registry to Artifactory" ""
if echo "registry=$ARTIFACTORY_NPM_URL/common-npm/" > "$NPMRC_PATH"; then
    print_status "Setting npm registry to Artifactory" "success"
else
    print_status "Setting npm registry to Artifactory" "error"
    log_error "Failed to set npm registry!"

    # Restore backup if it exists
    if [ -n "$BACKUP_PATH" ] && [ -f "$BACKUP_PATH" ]; then
        log_info "Restoring backup..."
        cp "$BACKUP_PATH" "$NPMRC_PATH"
    fi

    exit 1
fi

# Authenticate with Artifactory
print_status "Authenticating with Artifactory" ""
AUTH_RESPONSE=$(curl -s -u"$ARTIFACTORY_USER:$ARTIFACTORY_API_TOKEN" "$ARTIFACTORY_NPM_URL/auth")

if [ -z "$AUTH_RESPONSE" ]; then
    print_status "Authenticating with Artifactory" "error"
    log_error "Failed to authenticate with Artifactory!"
    log_error "Please check your credentials and try again."
    echo ""

    # Restore backup if it exists
    if [ -n "$BACKUP_PATH" ] && [ -f "$BACKUP_PATH" ]; then
        log_info "Restoring backup..."
        cp "$BACKUP_PATH" "$NPMRC_PATH"
    fi

    exit 1
fi

echo "$AUTH_RESPONSE" >> "$NPMRC_PATH"
print_status "Authenticating with Artifactory" "success"

# Fix npm config format
exec_with_status "Fixing npm config format" "npm config fix"

print_status "NPM configuration completed" "success"
echo ""

# ============================================================================
# Step 6: Verify configuration
# ============================================================================
print_separator "Step 6: Verify Configuration"

log_info "Current .npmrc contents:"
echo ""
cat "$NPMRC_PATH"
echo ""

print_separator "Setup Complete! 🎉"

log_success "Artifactory NPM configuration has been successfully set up!"
echo ""
log_info "You can now install packages from Grammarly's Artifactory registry."
log_info "Example: npm install @grammarly/some-package"
echo ""

if [ -n "$BACKUP_PATH" ]; then
    log_info "Backup file location: $BACKUP_PATH"
    log_info "You can safely delete the backup once you've verified everything works."
    echo ""
fi
