#!/bin/bash
# Check MCP server configuration

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

log_info "🔌 MCP Server Configuration"
echo ""

# Check if .claude directory exists
if [ ! -d ".claude" ]; then
    log_error "❌ .claude/mcp.json file not found"
    exit 1
fi

# Check if config file exists
exec_with_status "Checking MCP configuration" "[ -f '.claude/mcp.json' ]" || {
    log_error "❌ .claude/mcp.json file not found"
    log_info "Expected: .claude/mcp.json"
    exit 1
}

echo ""
log_info "📋 Pre-configured MCP Servers:"
echo ""
log_success "  ✅ Playwright MCP"
echo "     Browser automation and testing"
echo "     Command: npx @playwright/mcp@latest"
echo ""
log_success "  ✅ Sourcegraph MCP"
echo "     Code search across repositories"
echo "     URL: https://apigw.prod-platform-plane.grammarlyaws.com/sourcegraph-mcp-server/mcp/"
echo ""

# Check for Figma MCP (optional, requires manual setup)
log_warning "⚠️  Figma MCP (Optional - Manual Setup Required)"
echo "   Manual installation required for Figma integration:"
echo "   🔗 Follow: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server"
echo "   💡 Requires Figma account and manual configuration"
echo "   📝 Note: If you don't see the option to enable MCP, upgrade your user to Dev"
echo "         (Home>Your User>Settings>Your Spaces>Upgrade to Dev) and restart Figma"
echo ""

# Install project dependencies
exec_with_status "Installing project dependencies" "npm install"

echo ""
log_success "✅ MCP servers are pre-configured in .claude/mcp.json"
log_info "ℹ️  Claude Code will automatically use these MCP servers when running in this directory"
