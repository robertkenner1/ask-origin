#!/bin/bash
# Shared stop script for development server

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib/common.sh"

# Load project config to get port if available
load_project_config 2>/dev/null || true

# Get port configuration
PORT=$(get_config "DEV_SERVER_PORT" "8181")

log_info "🛑 Stopping development server on port $PORT"

if is_port_in_use "$PORT"; then
    kill_port "$PORT"
    log_success "✅ Server stopped"
else
    log_warning "⚠️  No server running on port $PORT"
fi
