# AI Frontend Development Makefile
# Streamlined workflow for frontend prototyping

.PHONY: help prereqs install new start stop deploy deploy-vercel clean list build delete default

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
	@echo "  make delete      - Delete project and branch"
	@echo ""
	@echo "Deployment:"
	@echo "  make deploy         - Git add, commit, and push"
	@echo "  make deploy-vercel  - Deploy project to Vercel preview"
	@echo "  make clean          - Clean build artifacts"
	@echo ""
	@echo "Examples:"
	@echo "  make new PROJECT=my-button-component"
	@echo "  make start"
	@echo "  make deploy MESSAGE='Add new component'"
	@echo "  make delete PROJECT=my-button-component"

# Check prerequisites
prereqs:
	@./scripts/check-prereqs.sh

# Install required MCP servers
install:
	@./scripts/install-mcps.sh

# Create new project
new:
	@./scripts/create-project.sh $(PROJECT)

# Build projects from source to public
build:
	@printf "%-40s" "Building projects"; \
	npm run build:sitemap >/dev/null 2>&1 && printf "✅\n" || printf "❌\n"

# Stop development server
stop:
	@./scripts/stop-server.sh

# Start development server
start:
	@./scripts/start-server.sh

# List all projects
list:
	@./scripts/list-projects.sh

# Delete project and branch
delete:
	@./scripts/delete-project.sh $(PROJECT)

# Deploy changes
deploy:
	@./scripts/deploy.sh $(MESSAGE)

# Deploy to Vercel preview
deploy-vercel:
	@./scripts/deploy-vercel.sh $(PROJECT)

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
		open http://localhost:8181; \
	elif command -v xdg-open >/dev/null 2>&1; then \
		xdg-open http://localhost:8181; \
	else \
		echo "📋 Manual open: http://localhost:8181"; \
	fi
