#!/bin/bash
# Check MCP server configuration

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Visual separator
print_separator "🔌 MCP Server Configuration" "Verify and configure MCP servers"

# Check if .claude directory exists
if [ ! -d ".claude" ]; then
    log_error "❌ .mcp.json file not found"
    exit 1
fi

# Check if config file exists
exec_with_status "Checking MCP configuration" "[ -f '.mcp.json' ]" || {
    log_error "❌ .mcp.json file not found"
    log_info "Expected: .mcp.json"
    exit 1
}

echo ""
log_info "📋 Pre-configured MCP Servers:"
echo "   • Playwright MCP (browser automation)"
echo "   • Sourcegraph MCP (code search)"
echo "   • Figma Remote MCP (design integration)"
echo ""

# Figma MCP authentication warning
log_warning "⚠️  Figma MCP - Authentication Required"
echo "   The Figma MCP server is pre-configured but requires authentication:"
echo ""
echo "   Authentication steps:"
echo "   1. Start Claude Code in your project"
echo "   2. Run: /mcp"
echo "   3. Select 'Authenticate' next to Figma"
echo "   4. Click 'Allow Access' in the OAuth login interface"
echo ""
echo "   Requirements:"
echo "   • Figma account with Viewer role (or higher)"
echo ""
echo "   🔐 No Figma access? Request it through Opal if not in your Okta apps"
echo ""

