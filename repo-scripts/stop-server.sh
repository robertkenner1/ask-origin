#!/bin/bash
# Stop development server

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Get configuration
PORT=$(get_config "REPO_DEV_SERVER_PORT" "8181")

log_info "🛑 Stopping development server on port $PORT"

if is_port_in_use "$PORT"; then
    kill_port "$PORT"
    log_success "✅ Server stopped"
else
    log_warning "⚠️  No server running on port $PORT"
fi
