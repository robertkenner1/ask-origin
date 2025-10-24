#!/bin/bash
# Stop development server

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PORT=8181

printf "%-40s" "Stopping development server"

if lsof -t -i:$PORT >/dev/null 2>&1; then
    if kill -9 $(lsof -t -i:$PORT) >/dev/null 2>&1; then
        printf "${GREEN}✅${NC}\n"
    else
        printf "${RED}❌${NC}\n"
        exit 1
    fi
else
    printf "${YELLOW}⚠️${NC}  (not running)\n"
fi
