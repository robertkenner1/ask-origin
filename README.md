# AI Frontend Experiments

A monorepo for experimenting with UI development using AI tools and assistants.

## Purpose

This project serves as a playground for:
- Rapid UI prototyping with AI assistance
- Testing different frontend approaches and frameworks
- Building pixel-perfect component replicas
- Exploring new web technologies and patterns

Each experiment is contained in its own folder within `public/` and automatically appears in the main directory listing.

## Live Demo

🚀 **Deployed at:** https://ai-frontend-prototypes-c8939b.gpages.io/

## Prerequisites

### Required MCP Servers

For optimal AI-assisted development, install these MCP servers:

#### 1. Figma Dev Mode MCP Server
Enables AI to read Figma designs and generate code from them.

```bash
# Install the Figma MCP server
npm install -g @figma/mcp-server-figma-dev-mode
```

**Setup Guide:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server

#### 2. Playwright MCP Server
Enables AI to perform browser automation and testing.

```bash
# Install Playwright MCP server
claude mcp add playwright npx "@playwright/mcp@latest"
```

### Development Environment

```bash
# Install Node.js (required for build scripts)
node --version  # Should be 16+ 

# Clone and setup
git clone <your-repo-url>
cd ai-frontend
npm install
```

## Project Structure

```
ai-frontend/
├── public/                    # Web root directory
│   ├── index.html            # Main directory listing
│   ├── projects.json         # Auto-generated sitemap
│   ├── my-first-gr-design/   # Example project
│   └── another-project/      # Another project
├── build-sitemap.js          # Sitemap generator
├── package.json             # Build scripts
└── README.md               # This file
```

## Creating a New Project

### Method 1: Manual Creation

1. **Create project folder:**
   ```bash
   mkdir public/my-new-project
   cd public/my-new-project
   ```

2. **Create basic files:**
   ```bash
   # Create index.html
   cat > index.html << 'EOF'
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My New Project</title>
       <meta name="description" content="Description of my new project">
   </head>
   <body>
       <h1>My New Project</h1>
       <p>Project content goes here...</p>
   </body>
   </html>
   EOF

   # Create styles.css
   touch styles.css

   # Create script.js
   touch script.js
   ```

3. **Regenerate sitemap:**
   ```bash
   npm run build:sitemap
   ```

### Method 2: AI-Assisted Creation

1. **Ask AI to create a new project:**
   ```
   "Create a new project called 'button-animations' with a collection of CSS button hover effects"
   ```

2. **AI will automatically:**
   - Create the folder structure
   - Generate HTML, CSS, and JS files
   - Run `npm run build:sitemap` to update the directory

## Development Workflow

### Start Development Server
```bash
# Generate sitemap and start server
npm run serve

# Or separately:
npm run build:sitemap  # Generate projects.json
npm run dev           # Start development server
```

### View Your Projects
- **Local:** http://localhost:8000
- **Production:** https://ai-frontend-030595.gpages.io/index.html

### Deploy Changes
The project auto-deploys via GitLab CI/CD when you push to the main branch.

## Available Scripts

```bash
npm run build:sitemap    # Scan public/ and generate projects.json
npm run dev             # Start development server (port 8000)
npm run serve           # Build sitemap + start server
```

## Project Detection

The sitemap generator automatically detects projects by:
- Scanning `public/` for subdirectories
- Looking for `index.html` in each folder
- Extracting metadata from HTML `<title>` and `<meta>` tags
- Detecting file types (HTML, CSS, JS)
- Inferring project type from content

## Tips for AI Development

### Getting Better Results

1. **Use descriptive folder names:**
   ```bash
   # Good
   mkdir public/grammarly-tooltip-replica
   
   # Less descriptive
   mkdir public/project1
   ```

2. **Add metadata to your HTML:**
   ```html
   <title>Grammarly Tooltip Replica</title>
   <meta name="description" content="Pixel-perfect replica of Grammarly's correction tooltip">
   ```

3. **Use consistent file naming:**
   - `index.html` (required)
   - `styles.css` or `style.css`
   - `script.js` or `main.js`

### Working with Figma

1. Share your Figma file with Dev Mode enabled
2. Copy the component URL from Figma
3. Ask AI: "Generate code from this Figma component: [URL]"

### Testing with Playwright

1. Ask AI to generate tests for your components
2. Use browser automation to verify functionality
3. Test across different screen sizes and browsers

## Contributing

1. Create a new branch for your experiment
2. Add your project to `public/your-project-name/`
3. Run `npm run build:sitemap` to update the directory
4. Push and create a merge request

## Troubleshooting

### Project Not Appearing?
1. Ensure your folder has `index.html`
2. Run `npm run build:sitemap`
3. Check the console for errors

### MCP Server Issues?
1. Verify installation: `npm list -g | grep mcp`
2. Check Claude Desktop MCP configuration
3. Restart Claude Desktop after MCP changes

### Development Server Issues?
```bash
# Kill any existing servers
pkill -f "python -m http.server"

# Start fresh
npm run serve
```

---

Happy experimenting! 🚀