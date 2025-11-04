# Claude Code Configuration

This directory contains Claude Code configuration for the AI Frontend Prototypes monorepo.

## MCP Server Configuration

### File: `claude_mcp_config.json`

Pre-configured MCP (Model Context Protocol) servers that Claude Code will automatically use when running in this directory.

### Configured Servers

#### 1. Playwright MCP
**Type:** Command-based MCP
**Purpose:** Browser automation, testing, and screenshot comparison
**Command:** `npx @playwright/mcp@latest`

**Capabilities:**
- Navigate to websites
- Take screenshots
- Test interactions
- Compare visual designs
- Automate browser tasks

**When to use:**
- Testing frontend prototypes
- Comparing designs with reference websites
- Visual validation
- Automated testing

---

#### 2. Sourcegraph MCP
**Type:** HTTP-based MCP
**Purpose:** Code search across Grammarly repositories
**URL:** `https://apigw.prod-platform-plane.grammarlyaws.com/sourcegraph-mcp-server/mcp/`

**Capabilities:**
- Search code across all repositories
- Find component implementations
- Locate API endpoints
- Discover usage patterns
- View file contents

**When to use:**
- Finding Grammarly Design System components
- Searching for implementation examples
- Discovering internal libraries
- Understanding code patterns


### Optional: Figma MCP

**Note:** Requires manual installation and configuration.

**Setup Instructions:**
1. Visit: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
2. Requires Figma account
3. Must upgrade to Dev mode (Home > Your User > Settings > Your Spaces > Upgrade to Dev)
4. Restart Figma after upgrade

**Capabilities:**
- Extract code from Figma designs
- Get design variables
- Export component images
- Generate design tokens

**When to use:**
- Converting Figma designs to code
- Extracting design specifications
- Creating prototypes from Figma files

---

## How It Works

When Claude Code runs in this directory (or any subdirectory), it automatically:
1. Detects the `.claude/claude_mcp_config.json` file
2. Loads all configured MCP servers
3. Makes them available as tools during conversations

### Directory Hierarchy

The `.claude` directory is checked in the following order:
1. Current working directory
2. Parent directories (traverses up until found)

This means:
- Projects in `projects/my-project/` inherit this configuration
- You can override by creating `.claude/` in project directories
- Configuration is monorepo-wide by default

## Verifying Configuration

Run the installation check script:
```bash
make install
# or
./scripts/install-mcps.sh
```

This will:
- ✅ Verify `.claude/claude_mcp_config.json` exists
- 📋 List all pre-configured MCP servers
- ⚠️ Show Figma MCP manual installation instructions

## Troubleshooting

### MCP Servers Not Loading

1. **Check file exists:**
   ```bash
   ls -la .claude/claude_mcp_config.json
   ```

2. **Verify JSON syntax:**
   ```bash
   cat .claude/claude_mcp_config.json | jq .
   ```

3. **Check Claude Code directory:**
   ```bash
   pwd  # Should be in monorepo root or subdirectory
   ```

### Playwright MCP Issues

If Playwright MCP fails to load:
```bash
# Install Playwright dependencies
npx playwright install
```

### HTTP MCP Connection Issues

If Sourcegraph, Cortex, or Workflows MCPs fail:
1. Check network connection
2. Verify you're on Grammarly VPN/network
3. Check API gateway is accessible

## Updating Configuration

To add or modify MCP servers:

1. **Edit configuration:**
   ```bash
   vim .claude/claude_mcp_config.json
   ```

2. **Add new server:**
   ```json
   {
     "mcpServers": {
       "existing-server": { ... },
       "new-server": {
         "command": "npx",
         "args": ["@my-mcp/server@latest"]
       }
     }
   }
   ```

3. **Restart Claude Code:**
   ```bash
   # Exit and restart Claude Code
   claude
   ```

## Best Practices

1. **Keep configuration in version control** - Benefits entire team
2. **Document new MCPs** - Update this README when adding servers
3. **Test after changes** - Run `make install` to verify
4. **Use project-level overrides sparingly** - Prefer monorepo-wide config

## Security Notes

- HTTP MCPs use Grammarly's API gateway
- Authentication handled by Claude Code
- No credentials stored in configuration
- VPN/network access required for internal MCPs

---

**Last updated:** 2025-10-22
**Maintained by:** AI Frontend Prototyping Team
