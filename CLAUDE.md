# Claude Frontend Prototyping Guide

This guide helps Claude assist users in creating pixel-perfect frontend prototypes from websites, screenshots, or Figma designs in this monorepo.
You are experienced Frontend Developer and mature designer.

## Architecture

**IMPORTANT:** This monorepo uses **symlinks** for shared resources. See `ARCHITECTURE.md` for complete details.

**Key concepts:**
- Projects are self-sufficient (work in project directory)
- `scripts/` and `.claude/` are symlinks to `.shared/`
- `.mcp.json` and `Makefile` are template-specific (real files)
- Updates to `.shared/` propagate to all projects automatically

## Project Structure

This is a **monorepo** for frontend experiments with symlink-based architecture:

```
ai-frontend-prototypes/
├── .shared/                      # 🔗 Shared resources (symlinked)
│   ├── scripts/                 # Executable scripts for all projects
│   └── .claude/                 # Claude Code configuration
│       ├── commands/            # Custom slash commands
│       ├── skills/              # Claude Code skills
│       │   └── gds/             # Grammarly Design System skill
│       └── settings.local.json.template
│
├── repo-scripts/                 # 📦 Repository management
│   ├── create-project.sh
│   └── ...
│
├── templates/                    # 📋 Project templates
│   ├── static-website/
│   │   ├── src/
│   │   ├── Makefile            # Template-specific
│   │   ├── .mcp.json           # Template-specific
│   │   └── CLAUDE.md
│   └── ai-editor/
│
├── projects/                     # 🎯 Active projects
│   └── my-project/              # ✅ Self-sufficient
│       ├── src/                 # Real files
│       ├── scripts/             # 🔗 → ../../.shared/scripts/
│       ├── .claude/             # 🔗 → ../../.shared/.claude/
│       ├── .mcp.json            # Real file (from template)
│       ├── Makefile             # Real file (from template)
│       └── CLAUDE.md
│
├── public/                       # 🌐 Built/deployed versions
├── build-sitemap.js             # Master index generator
├── Makefile                     # Repository commands
└── package.json
```

**Key Rules:**
- **Work from project directory:** `cd projects/[project-name]/` before starting
- **Symlinked resources:** `scripts/` and `.claude/` are symlinks to `.shared/`
- **GDS Skill auto-activates:** No need to explicitly reference GDS documentation
- **Don't edit symlinks:** To customize, remove symlink and create real directory
- Run `make build` from project dir to build
- Built projects auto-appear in `public/` and main directory listing
- Edit source files in `projects/*/src/`, not `public/`
- If user asked to build prototype in Grammarly style, check logo and style in Grammarly Design System
- Always double check if something looks wrong in size or colors
- Better iterate more times with Playwright but provide better result
- If user ask to publish - do `make deploy` and provide links for creating MR in GitLab and link for preview https://ai-frontend-prototypes-c8939b.gpages.io/


## 🎯 ACTIVE PROJECT DETECTION

**CRITICAL: Claude must determine the active project to limit scope and prevent cross-project modifications. Always check if the directory with project name (branch name) exists and do not create new one. Do not run make new**

**How to detect active project:**
1. **Check git branch:** Run `git branch --show-current` - branch name = project name
2. **If no branch match:** Ask user which project they want to work on
3. **Project scope:** Only modify files within `projects/[active-project]/` directory

**Example:**
- Git branch: `my-button-component` → Active project: `projects/my-button-component/`
- Only edit files in `projects/my-button-component/src/`
- Stay in root directory to access make commands
- Read `projects/my-button-component/CLAUDE.md` for project-specific instructions

## Available Tools & Resources

### 1. Figma MCP Server
**Purpose:** Extract code and designs from Figma files

**Usage:**
```
# Get code from Figma component
Use: mcp__figma-dev-mode-mcp-server__get_code
Parameters: nodeId, clientName, clientLanguages, clientFrameworks

# Get design variables
Use: mcp__figma-dev-mode-mcp-server__get_variable_defs

# Get component image
Use: mcp__figma-dev-mode-mcp-server__get_image
```

**When to use:**
- User provides Figma URL (extract nodeId from URL)
- Need to generate code from Figma designs
- Want to extract design tokens/variables

### 2. Playwright MCP Server
**Purpose:** Browser automation, testing, and screenshot comparison

**Usage:**
```
# Take screenshots for comparison
Use: mcp__playwright__browser_take_screenshot

# Navigate to reference sites
Use: mcp__playwright__browser_navigate

# Compare implementations
Use: mcp__playwright__browser_snapshot
```

**When to use:**
- Comparing prototype with original website
- Testing responsive behavior
- Pixel-perfect validation

### 3. Grammarly Design System (GDS) Skill
**Documentation:** https://uifoundation.gpages.io/grammarly-design-system
**Source:** https://gitlab.grammarly.io/uifoundation/grammarly-design-system
**Skill Location:** `.shared/.claude/skills/gds/`

**Available through GDS Skill:**
- 40+ React components with complete documentation
- Design tokens (colors, spacing, typography, elevation)
- Design foundations and accessibility guidelines
- UI patterns and best practices
- Content guidelines (voice, tone, terminology)

**How it works:**
The GDS Skill **automatically activates** when you work on UI components, forms, layouts, or any interface implementation. You don't need to explicitly reference documentation - Claude will load relevant GDS information as needed.

**The skill provides:**
- Component selection guidance
- Implementation examples
- Design token lookups
- Accessibility best practices
- Grammarly branding standards

**When it activates:**
- Creating Grammarly-style or professional interfaces
- Building production-quality UI with established patterns
- Implementing React components (Button, TextField, Modal, etc.)
- Need consistent, accessible components
- Working with forms, layouts, or any UI elements

## Prototyping Workflow

### Step 1: Analysis Phase
When user provides a reference (website, screenshot, or Figma):

1. **Analyze the design:**
   ```
   📋 ANALYSIS CHECKLIST:
   - Overall layout structure and grid system
   - Typography scale (font-family, sizes, weights)
   - Color palette (primary, secondary, accent colors)
   - Spacing system (margins, padding, gaps)
   - Interactive elements and their states
   - Responsive behavior patterns
   ```

2. **For websites:** Use Playwright to navigate and inspect
3. **For Figma:** Extract code and variables using MCP server
4. **For screenshots:** Analyze visually and identify components

### Step 2: Project Setup
```bash
# Create new project using Makefile (recommended)
make new PROJECT=descriptive-project-name

# Or create manually:
mkdir -p projects/[descriptive-project-name]/src
mkdir -p projects/[descriptive-project-name]/prompts
cd projects/[descriptive-project-name]/src

# Create basic structure
touch index.html styles.css script.js
```

### Step 3: Implementation
Create pixel-perfect replicas with these priorities:

**VISUAL ACCURACY:**
- ✅ Exact fonts and typography
- ✅ Precise colors and gradients
- ✅ Identical spacing and layout
- ✅ Matching component dimensions
- ✅ Accurate border styles and shadows

**INTERACTIVE BEHAVIOR:**
- ✅ Hover effects and transitions
- ✅ Click interactions
- ✅ Form field behavior
- ✅ Animation timing and easing
- ✅ Modal/popup behavior

**TECHNICAL QUALITY:**
- ✅ Semantic HTML structure
- ✅ Modern CSS (Grid/Flexbox)
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Clean, maintainable code

### Step 4: Validation & Build
```bash
# Build projects from source to public
make build

# Start development server
make start

# Or use npm commands directly
npm run build:sitemap
npm run dev
```

Use Playwright to:
- Take screenshots of implementation
- Compare with original design
- Test responsive behavior
- Verify interactions work correctly

## Code Templates

### Basic Project Structure
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Descriptive Project Title]</title>
    <meta name="description" content="[Project description for sitemap]">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your implementation here -->
    <script src="script.js"></script>
</body>
</html>
```

### CSS Organization
```css
/* styles.css */
/* 1. CSS Reset/Normalize */
* { box-sizing: border-box; }

/* 2. CSS Custom Properties */
:root {
  --primary-color: #...;
  --font-family: ...;
  --spacing-unit: ...;
}

/* 3. Base Styles */
body { ... }

/* 4. Layout Components */
.container { ... }

/* 5. UI Components */
.button { ... }

/* 6. Responsive Design */
@media (max-width: 768px) { ... }
```

## Best Practices

### 1. Project Naming
```bash
# Good examples
projects/grammarly-tooltip-replica/
projects/github-navigation-clone/
projects/stripe-pricing-page/

# Avoid
projects/project1/
projects/test/
projects/new-thing/
```

### 2. Figma Integration
```javascript
// Extract nodeId from Figma URL
// https://figma.com/design/fileKey/fileName?node-id=1-2
// nodeId = "1:2"

// Use MCP server to get code
await mcp__figma-dev-mode-mcp-server__get_code({
  nodeId: "1:2",
  clientName: "claude code",
  clientLanguages: "html,css,javascript",
  clientFrameworks: "unknown"
});
```

### 3. Reference Implementation
When user provides a website URL:
1. Use Playwright to navigate to it
2. Take screenshots for reference
3. Inspect elements if needed
4. Build pixel-perfect replica
5. Compare screenshots to validate

### 4. Design System Usage
For Grammarly-style projects:
1. Reference: https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/design-system/src/components
Icons: https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/icons/assets  and https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/icons/generated/all
2. Extract exact colors, fonts, spacing
3. Use authentic interaction patterns
4. Maintain brand consistency

## Common Scenarios

### Scenario 1: Website Clone
```
User: "Clone this website: https://example.com"

Process:
1. Navigate with Playwright
2. Take screenshot
3. Analyze layout and components
4. Create project folder: make new PROJECT=website-clone
5. Implement pixel-perfect replica in projects/website-clone/src/
6. Build and compare with original: make build
```

### Scenario 2: Figma Component
```
User: "Create this Figma component: [URL]"

Process:
1. Extract nodeId from URL
2. Use Figma MCP server to get code
3. Get component image for reference
4. Create project folder: make new PROJECT=figma-component
5. Implement with exact specifications in projects/figma-component/src/
6. Build and test: make build
```

### Scenario 3: Screenshot Recreation
```
User: "Recreate this interface" [uploads screenshot]

Process:
1. Analyze screenshot visually
2. Identify components and patterns
3. Estimate dimensions and spacing
4. Create project folder: make new PROJECT=screenshot-recreation
5. Build responsive replica in projects/screenshot-recreation/src/
6. Build and validate: make build
```

## Validation Checklist

Before completing any prototype:

- [ ] Visual accuracy matches reference exactly
- [ ] All interactive elements work correctly
- [ ] Responsive behavior is implemented
- [ ] Code is clean and well-organized
- [ ] Project appears in main directory listing
- [ ] Accessibility features are included
- [ ] Performance is optimized

## Development Workflow

### Quick Start
```bash
# 1. Create new project
make new PROJECT=my-awesome-component

# 2. Edit source files
cd projects/my-awesome-component/src/
# Edit index.html, styles.css, script.js

# 3. Build and test
make build
make start

# 4. Deploy (optional)
make deploy MESSAGE="Add awesome component"
```

### Available Make Commands
- `make new PROJECT=name` - Create new project from templates
- `make build` - Build all projects from source to public
- `make start` - Build and start development server
- `make list` - List all projects
- `make deploy` - Git add, commit, and push
- `make clean` - Clean build artifacts

## Remember

- **Pixel-perfect accuracy is the goal** - "close enough" is not acceptable
- **Use available tools** - Figma MCP, Playwright, design system
- **Follow monorepo structure** - always create in `projects/` folder
- **Build before testing** - run `make build` to copy source to public
- **Test thoroughly** - use Playwright for validation

The final result should be indistinguishable from the original in terms of visual appearance and user interaction.