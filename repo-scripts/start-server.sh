#!/bin/bash
# Start development server

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PORT=8181

echo "🚀 Starting Development Server"
echo ""

# Stop existing server
printf "%-40s" "Stopping existing server"
if lsof -t -i:$PORT >/dev/null 2>&1; then
    kill -9 $(lsof -t -i:$PORT) >/dev/null 2>&1
    printf "${GREEN}✅${NC}\n"
else
    printf "${YELLOW}⚠️${NC}  (not running)\n"
fi

# Build projects
printf "%-40s" "Building projects"
if npm run build:sitemap >/dev/null 2>&1; then
    printf "${GREEN}✅${NC}\n"
else
    printf "${RED}❌${NC}\n"
    exit 1
fi

# Start server
printf "%-40s" "Starting development server"
printf "${GREEN}🚀${NC}\n"

echo ""
echo "🌐 Server: http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo "────────────────────────────────────"

npm run dev
