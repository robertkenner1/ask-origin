# Claude Frontend Prototyping Guide

This guide helps Claude assist users in creating pixel-perfect frontend prototypes from websites, screenshots, or Figma designs in this monorepo.

## Project Structure

This is a **monorepo** for frontend experiments with automatic project discovery:

```
ai-frontend/
├── public/                    # 🎯 All new projects go here
│   ├── index.html            # Main directory (auto-generated)
│   ├── projects.json         # Auto-generated sitemap
│   ├── my-first-gr-design/   # Example project
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
│   └── [your-new-project]/   # Create new projects here
├── build-sitemap.js          # Sitemap generator
└── package.json             # Build scripts
```

**Key Rules:**
- Always create new projects in `public/[project-name]/`
- Each project must have `index.html` at minimum
- Run `npm run build:sitemap` after creating new projects
- Projects auto-appear in the main directory listing

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

### 3. Grammarly Design System
**Components:** https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/design-system/src/components
**Icons:** https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/icons/assets  and https://gitlab.grammarly.io/uifoundation/grammarly-design-system/-/tree/main/packages/icons/generated/all

**Usage**
Use sourcegraph MCP


**Contains:**
- Complete component library
- Design tokens (colors, typography, spacing)
- Interaction patterns
- Grammarly-specific UI elements

**When to use:**
- Creating Grammarly-style interfaces
- Need authentic Grammarly components
- Building professional UI elements

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
# Create new project directory
mkdir public/[descriptive-project-name]
cd public/[descriptive-project-name]

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

### Step 4: Validation
```bash
# Update sitemap
npm run build:sitemap

# Test locally
npm run serve
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
public/grammarly-tooltip-replica/
public/github-navigation-clone/
public/stripe-pricing-page/

# Avoid
public/project1/
public/test/
public/new-thing/
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
1. Reference: https://uifoundation.gpages.io/grammarly-design-system/
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
4. Create project folder
5. Implement pixel-perfect replica
6. Compare with original
```

### Scenario 2: Figma Component
```
User: "Create this Figma component: [URL]"

Process:
1. Extract nodeId from URL
2. Use Figma MCP server to get code
3. Get component image for reference
4. Create project folder
5. Implement with exact specifications
```

### Scenario 3: Screenshot Recreation
```
User: "Recreate this interface" [uploads screenshot]

Process:
1. Analyze screenshot visually
2. Identify components and patterns
3. Estimate dimensions and spacing
4. Create project folder
5. Build responsive replica
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

## Remember

- **Pixel-perfect accuracy is the goal** - "close enough" is not acceptable
- **Use available tools** - Figma MCP, Playwright, design system
- **Follow monorepo structure** - always create in `public/` folder
- **Update sitemap** - run `npm run build:sitemap` after creation
- **Test thoroughly** - use Playwright for validation

The final result should be indistinguishable from the original in terms of visual appearance and user interaction.