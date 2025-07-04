# AI Frontend Development Makefile
# Streamlined workflow for frontend prototyping

.PHONY: help prereqs install new start stop deploy clean list build default

# Default target - full setup (runs when just "make" is typed)
default: prereqs install new

# Help target
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
	@echo "  make stop        - Stop development server"
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
	@printf "%-40s" "Checking Homebrew"; \
	if command -v brew >/dev/null 2>&1; then \
		printf "✅\n"; \
	else \
		printf "❌\n"; \
		printf "%-40s" "Installing Homebrew"; \
		/bin/bash -c "$$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	fi
	@printf "%-40s" "Checking Node.js"; \
	if command -v node >/dev/null 2>&1; then \
		printf "✅\n"; \
	else \
		printf "❌\n"; \
		printf "%-40s" "Installing Node.js"; \
		brew install node >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	fi
	@printf "%-40s" "Checking Git"; \
	if command -v git >/dev/null 2>&1; then \
		printf "✅\n"; \
	else \
		printf "❌\n"; \
		printf "%-40s" "Installing Git"; \
		brew install git >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	fi
	@printf "%-40s" "Checking Claude Code CLI"; \
	if command -v claude >/dev/null 2>&1; then \
		printf "✅\n"; \
	else \
		printf "❌\n"; \
		printf "%-40s" "Installing Claude Code CLI"; \
		npm install -g @anthropic-ai/claude-code >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	fi
	@printf "%-40s" "Installing project dependencies"; \
	npm install >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"

# Install required MCP servers
install:
	@printf "%-40s" "Checking Claude CLI"; \
	if command -v claude >/dev/null 2>&1; then \
		printf "✅\n"; \
	else \
		printf "❌\n"; \
		echo "Claude CLI not found. Please install Claude Code first."; \
		exit 1; \
	fi
	@printf "%-40s" "Installing Playwright MCP"; \
	if claude mcp list 2>/dev/null | grep -q "playwright"; then \
		printf "✅\n"; \
	else \
		if claude mcp add playwright npx "@playwright/mcp@latest" >/dev/null 2>&1; then \
			printf "✅\n"; \
		else \
			printf "⚠️\n"; \
		fi; \
	fi
	@printf "%-40s" "Installing Sourcegraph MCP"; \
	if claude mcp list 2>/dev/null | grep -q "sourcegraph"; then \
		printf "✅\n"; \
	else \
		if claude mcp add --transport http sourcegraph https://apigw.prod-platform-plane.grammarlyaws.com/sourcegraph-mcp-server/mcp/ >/dev/null 2>&1; then \
			printf "✅\n"; \
		else \
			printf "⚠️\n"; \
		fi; \
	fi
	@printf "%-40s" "Checking Figma MCP"; \
	if claude mcp list 2>/dev/null | grep -q "figma"; then \
		printf "✅\n"; \
	else \
		printf "⚠️\n"; \
		echo ""; \
		echo "⚠️  FIGMA MCP NOT INSTALLED"; \
		echo "   Manual installation required:"; \
		echo "   🔗 Follow: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server"; \
		echo "   💡 Requires Figma account and manual configuration"; \
		echo ""; \
	fi
	@printf "%-40s" "Installing project dependencies"; \
	npm install >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"

# Create new project
new:
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
	printf "%-40s" "Stashing current changes"; \
	git stash push -m "Auto-stash before creating $$PROJECT_NAME" >/dev/null 2>&1 && printf "✅\n" || printf "⚠️\n"; \
	printf "%-40s" "Switching to main branch"; \
	git checkout main >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	printf "%-40s" "Pulling latest changes"; \
	git pull origin main >/dev/null 2>&1 && printf "✅\n" || printf "⚠️\n"; \
	printf "%-40s" "Creating new branch from main"; \
	git checkout -b "$$PROJECT_NAME" >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	printf "%-40s" "Restoring stashed changes"; \
	git stash pop >/dev/null 2>&1 && printf "✅\n" || printf "⚠️\n"; \
	printf "%-40s" "Creating project structure"; \
	mkdir -p "projects/$$PROJECT_NAME/src" "projects/$$PROJECT_NAME/prompts" && printf "✅\n" || printf "❌\n"; \
	printf "%-40s" "Creating files from templates"; \
	PROJECT_TITLE=$$(echo $$PROJECT_NAME | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $$i=toupper(substr($$i,1,1)) tolower(substr($$i,2)); print}'); \
	PROJECT_CLASS=$$(echo $$PROJECT_NAME | sed 's/-//g' | awk '{print toupper(substr($$0,1,1)) tolower(substr($$0,2))}'); \
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
	done && printf "✅\n" || printf "❌\n"; \
	printf "%-40s" "Building project"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"; \
	npm run dev >/dev/null 2>&1 &
	echo "✅ Project '$$PROJECT_NAME' created at: http://localhost:8181/$$PROJECT_NAME/"; \
	claude

# Build projects from source to public
build:
	@printf "%-40s" "Building projects"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"

# Stop development server
stop:
	@printf "%-40s" "Stopping development server"; \
	if lsof -t -i:8181 >/dev/null 2>&1; then \
		kill -9 $$(lsof -t -i:8181) >/dev/null 2>&1 && printf "✅\n"; \
	else \
		printf "⚠️  (not running)\n"; \
	fi

# Start development server
start: stop
	@printf "%-40s" "Building projects"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@printf "%-40s" "Starting development server"; \
	printf "🚀\n"
	@echo "🌐 Server: http://localhost:8181"
	@echo "Press Ctrl+C to stop"
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
				echo "     📁 http://localhost:8181/$$project_name/"; \
				if [ -f "$$dir/CLAUDE.md" ]; then \
					echo "     📋 Has project settings"; \
				fi; \
			fi; \
		done; \
	else \
		echo "  No projects found"; \
	fi
	@echo ""
	@echo "🌐 Main directory: http://localhost:8181/index.html"

# Deploy changes
deploy:
	@printf "%-40s" "Building projects"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@printf "%-40s" "Adding changes"; \
	git add . >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@printf "%-40s" "Creating commit"; \
	if [ -z "$(MESSAGE)" ]; then \
		echo "Please provide a commit message:"; \
		read -p "Commit message: " COMMIT_MSG; \
	else \
		COMMIT_MSG="$(MESSAGE)"; \
	fi; \
	if [ -z "$$COMMIT_MSG" ]; then \
		echo "❌ Commit message cannot be empty"; \
		exit 1; \
	fi; \
	git commit -m "$$COMMIT_MSG" >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@printf "%-40s" "Pushing to remote"; \
	git push >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@echo "🌐 Live: https://ai-frontend-prototypes-c8939b.gpages.io/"

# Clean build artifacts
clean:
	@printf "%-40s" "Cleaning projects.json"; \
	rm -f public/projects.json && printf "✅\n" || printf "⚠️\n"
	@printf "%-40s" "Cleaning node_modules"; \
	rm -rf node_modules && printf "✅\n" || printf "⚠️\n"
	@printf "%-40s" "Reinstalling dependencies"; \
	npm install >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"
	@printf "%-40s" "Rebuilding projects"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"

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