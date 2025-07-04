# AI Frontend Development Makefile
# Streamlined workflow for frontend prototyping

.PHONY: help prereqs install new start deploy clean list build

# Default target
help:
	@echo "🚀 AI Frontend Development Commands"
	@echo ""
	@echo "Setup:"
	@echo "  make prereqs     - Check prerequisites (MCP servers)"
	@echo "  make install     - Install required MCP servers"
	@echo ""
	@echo "Development:"
	@echo "  make new         - Create new project (interactive)"
	@echo "  make build       - Build projects from source to public"
	@echo "  make start       - Build and start development server"
	@echo "  make list        - List all projects"
	@echo ""
	@echo "Deployment:"
	@echo "  make deploy      - Git add, commit, and push"
	@echo "  make clean       - Clean build artifacts"
	@echo ""
	@echo "Examples:"
	@echo "  make new PROJECT=my-button-component"
	@echo "  make start"
	@echo "  make deploy MESSAGE='Add new component'"

# Check prerequisites
prereqs:
	@echo "🔍 Checking prerequisites..."
	@echo ""
	@echo "1. Checking Claude MCP servers..."
	@if command -v claude >/dev/null 2>&1; then \
		echo "✅ Claude CLI found"; \
		claude mcp list; \
	else \
		echo "❌ Claude CLI not found. Please install Claude Desktop first."; \
		exit 1; \
	fi
	@echo ""
	@echo "2. Checking Node.js..."
	@if command -v node >/dev/null 2>&1; then \
		echo "✅ Node.js found: $$(node --version)"; \
	else \
		echo "❌ Node.js not found. Please install Node.js 16+"; \
		exit 1; \
	fi
	@echo ""
	@echo "3. Checking Git..."
	@if command -v git >/dev/null 2>&1; then \
		echo "✅ Git found: $$(git --version)"; \
	else \
		echo "❌ Git not found. Please install Git"; \
		exit 1; \
	fi
	@echo ""
	@echo "✅ Prerequisites check complete!"

# Install required MCP servers
install:
	@echo "🔧 Installing required MCP servers..."
	@echo ""
	@echo "1. Installing Playwright MCP server..."
	@if command -v claude >/dev/null 2>&1; then \
		claude mcp add playwright npx "@playwright/mcp@latest" || echo "⚠️  Playwright MCP may already be installed"; \
	else \
		echo "❌ Claude CLI not found. Please install Claude Desktop first."; \
		exit 1; \
	fi
	@echo ""
	@echo "2. Figma MCP server setup:"
	@echo "   📋 Manual installation required:"
	@echo "   🔗 Follow guide: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server"
	@echo "   💡 This requires Figma account and manual configuration"
	@echo ""
	@echo "3. Installing project dependencies..."
	@npm install
	@echo ""
	@echo "✅ MCP server installation complete!"
	@echo "⚠️  Remember to restart Claude Desktop after MCP changes"

# Create new project
new:
	@echo "🎨 Creating new project..."
	@if [ -z "$(PROJECT)" ]; then \
		echo "Please provide a project name:"; \
		read -p "Project name (kebab-case): " PROJECT_NAME; \
	else \
		PROJECT_NAME="$(PROJECT)"; \
	fi; \
	if [ -z "$$PROJECT_NAME" ]; then \
		echo "❌ Project name cannot be empty"; \
		exit 1; \
	fi; \
	if [ -d "projects/$$PROJECT_NAME" ]; then \
		echo "❌ Project '$$PROJECT_NAME' already exists"; \
		exit 1; \
	fi; \
	if [ ! -d "templates" ]; then \
		echo "❌ Templates directory not found"; \
		exit 1; \
	fi; \
	echo "📁 Creating project structure: projects/$$PROJECT_NAME"; \
	mkdir -p "projects/$$PROJECT_NAME/src"; \
	mkdir -p "projects/$$PROJECT_NAME/prompts"; \
	echo "📄 Creating files from templates..."; \
	PROJECT_TITLE=$$(echo $$PROJECT_NAME | sed 's/-/ /g' | sed 's/.*/\L&/' | sed 's/\b\w/\u&/g'); \
	PROJECT_CLASS=$$(echo $$PROJECT_NAME | sed 's/-//g' | sed 's/.*/\L&/' | sed 's/\b\w/\u&/g'); \
	PROJECT_VAR=$$(echo $$PROJECT_NAME | sed 's/-//g' | tr '[:upper:]' '[:lower:]'); \
	PROJECT_TYPE="Frontend Prototype"; \
	PROJECT_DESCRIPTION="Frontend prototype for $$PROJECT_NAME"; \
	PROJECT_NOTES="Add your project-specific notes here"; \
	for template in templates/*; do \
		filename=$$(basename "$$template"); \
		if [ "$$filename" = "initial-prompt.md" ]; then \
			target="projects/$$PROJECT_NAME/prompts/$$filename"; \
		elif [ "$$filename" = "CLAUDE.md" ]; then \
			target="projects/$$PROJECT_NAME/$$filename"; \
		else \
			target="projects/$$PROJECT_NAME/src/$$filename"; \
		fi; \
		sed -e "s/{{PROJECT_NAME}}/$$PROJECT_NAME/g" \
		    -e "s/{{PROJECT_TITLE}}/$$PROJECT_TITLE/g" \
		    -e "s/{{PROJECT_CLASS}}/$$PROJECT_CLASS/g" \
		    -e "s/{{PROJECT_VAR}}/$$PROJECT_VAR/g" \
		    -e "s/{{PROJECT_TYPE}}/$$PROJECT_TYPE/g" \
		    -e "s/{{PROJECT_DESCRIPTION}}/$$PROJECT_DESCRIPTION/g" \
		    -e "s/{{PROJECT_NOTES}}/$$PROJECT_NOTES/g" \
		    "$$template" > "$$target"; \
		echo "   ✅ Created $$target"; \
	done; \
	echo "🔄 Building project..."; \
	npm run build:sitemap; \
	echo "✅ Project '$$PROJECT_NAME' created successfully!"; \
	echo "🌐 View at: http://localhost:8000/$$PROJECT_NAME/"; \
	echo "📂 Files created:"; \
	echo "   - projects/$$PROJECT_NAME/src/index.html"; \
	echo "   - projects/$$PROJECT_NAME/src/styles.css"; \
	echo "   - projects/$$PROJECT_NAME/src/script.js"; \
	echo "   - projects/$$PROJECT_NAME/CLAUDE.md"; \
	echo "   - projects/$$PROJECT_NAME/prompts/initial-prompt.md"

# Build projects from source to public
build:
	@echo "🔧 Building projects..."
	@npm run build:sitemap
	@echo "✅ Build complete!"

# Start development server
start:
	@echo "🚀 Starting development server..."
	@echo "🔄 Building projects..."
	@npm run build:sitemap
	@echo "🌐 Server will be available at: http://localhost:8000"
	@echo "📁 Main directory: http://localhost:8000/index.html"
	@echo ""
	@echo "Press Ctrl+C to stop the server"
	@echo "────────────────────────────────────"
	@npm run dev

# List all projects
list:
	@echo "📂 Available projects:"
	@echo ""
	@if [ -d "projects" ]; then \
		for dir in projects/*/; do \
			if [ -d "$$dir" ]; then \
				project_name=$$(basename "$$dir"); \
				echo "  🎨 $$project_name"; \
				echo "     📁 http://localhost:8000/$$project_name/"; \
				if [ -f "$$dir/CLAUDE.md" ]; then \
					echo "     📋 Has project settings"; \
				fi; \
			fi; \
		done; \
	else \
		echo "  No projects found"; \
	fi
	@echo ""
	@echo "🌐 Main directory: http://localhost:8000/index.html"

# Deploy changes
deploy:
	@echo "🚀 Deploying changes..."
	@echo ""
	@echo "1. Building projects..."
	@npm run build:sitemap
	@echo ""
	@echo "2. Checking git status..."
	@git status --porcelain
	@echo ""
	@echo "3. Adding all changes..."
	@git add .
	@echo ""
	@echo "4. Creating commit..."
	@if [ -z "$(MESSAGE)" ]; then \
		echo "Please provide a commit message:"; \
		read -p "Commit message: " COMMIT_MSG; \
	else \
		COMMIT_MSG="$(MESSAGE)"; \
	fi; \
	if [ -z "$$COMMIT_MSG" ]; then \
		echo "❌ Commit message cannot be empty"; \
		exit 1; \
	fi; \
	git commit -m "$$COMMIT_MSG"; \
	echo ""
	@echo "5. Pushing to remote..."
	@git push
	@echo ""
	@echo "✅ Deploy complete!"
	@echo "🌐 Live at: https://ai-frontend-030595.gpages.io/index.html"

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	@if [ -f "public/projects.json" ]; then \
		rm public/projects.json; \
		echo "✅ Removed projects.json"; \
	fi
	@if [ -d "node_modules" ]; then \
		rm -rf node_modules; \
		echo "✅ Removed node_modules"; \
	fi
	@echo "🔄 Rebuilding..."
	@npm install
	@npm run build:sitemap
	@echo "✅ Clean complete!"

# Development shortcuts
.PHONY: dev serve open
dev: start
serve: start
open:
	@echo "🌐 Opening browser..."
	@if command -v open >/dev/null 2>&1; then \
		open http://localhost:8000; \
	elif command -v xdg-open >/dev/null 2>&1; then \
		xdg-open http://localhost:8000; \
	else \
		echo "📋 Manual open: http://localhost:8000"; \
	fi