#!/bin/bash
# Check MCP server configuration

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "🔌 MCP Server Configuration"
echo ""

# Check if .claude directory exists
if [ ! -d ".claude" ]; then
    echo -e "${RED}❌ .claude/mcp.json file not found${NC}"
    exit 1
fi

# Check if config file exists
printf "%-40s" "Checking MCP configuration"
if [ -f ".claude/mcp.json" ]; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    echo ""
    echo -e "${RED}❌ .claude/mcp.json file not found${NC}"
    echo "Expected: .claude/mcp.json"
    exit 1
fi

echo ""
echo -e "${BLUE}📋 Pre-configured MCP Servers:${NC}"
echo ""
echo -e "  ✅ ${GREEN}Playwright MCP${NC}"
echo "     Browser automation and testing"
echo "     Command: npx @playwright/mcp@latest"
echo ""
echo -e "  ✅ ${GREEN}Sourcegraph MCP${NC}"
echo "     Code search across repositories"
echo "     URL: https://apigw.prod-platform-plane.grammarlyaws.com/sourcegraph-mcp-server/mcp/"
echo ""

# Check for Figma MCP (optional, requires manual setup)
echo -e "${YELLOW}⚠️  Figma MCP${NC} (Optional - Manual Setup Required)"
echo "   Manual installation required for Figma integration:"
echo "   🔗 Follow: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server"
echo "   💡 Requires Figma account and manual configuration"
echo "   📝 Note: If you don't see the option to enable MCP, upgrade your user to Dev"
echo "         (Home>Your User>Settings>Your Spaces>Upgrade to Dev) and restart Figma"
echo ""

# Install project dependencies
printf "%-40s" "Installing project dependencies"
if npm install >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ MCP servers are pre-configured in .claude/mcp.json${NC}"
echo -e "${BLUE}ℹ️  Claude Code will automatically use these MCP servers when running in this directory${NC}"
