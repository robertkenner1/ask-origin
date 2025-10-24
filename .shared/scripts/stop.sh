#!/bin/bash
# Shared stop script for development server

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PORT=8181

echo "🛑 Stopping development server"

if lsof -t -i:$PORT >/dev/null 2>&1; then
    kill -9 $(lsof -t -i:$PORT) >/dev/null 2>&1
    echo -e "${GREEN}✅ Server stopped${NC}"
else
    echo -e "${YELLOW}⚠️  No server running on port $PORT${NC}"
fi
