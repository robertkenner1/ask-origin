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
echo ""

# Check for Figma MCP (optional, requires manual setup)
log_warning "⚠️  Figma MCP (Optional - Manual Setup Required)"
echo "   Manual installation required for Figma integration:"
echo "   🔗 Follow: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server"
echo "   💡 Requires Figma account and manual configuration"
echo "   📝 Note: If you don't see the option to enable MCP, upgrade your user to Dev"
echo "         (Home>Your User>Settings>Your Spaces>Upgrade to Dev) and restart Figma"
echo ""

