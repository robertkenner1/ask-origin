#!/bin/bash
# Start development server

set -e

# Load common library
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Get configuration
PORT=$(get_config "REPO_DEV_SERVER_PORT" "8181")

log_info "🚀 Starting Development Server"
echo ""

# Stop existing server
if is_port_in_use "$PORT"; then
    print_status "Stopping existing server" ""
    kill_port "$PORT"
    print_status "Stopping existing server" "success"
else
    print_status "Stopping existing server" "note" "not running"
fi

# Build projects
exec_with_status "Building projects" "npm run build:sitemap"

# Start server
print_status "Starting development server" "success"

echo ""
log_success "🌐 Server: http://localhost:$PORT"
log_info "Press Ctrl+C to stop"
echo "────────────────────────────────────"

npm run dev -- -p $PORT
