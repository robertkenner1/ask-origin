#!/bin/bash
# Repository-level default configuration
# These values can be overridden via .project.json or environment variables

# Development server configuration
export DEFAULT_DEV_SERVER_PORT=8181

# Deployment configuration
export DEFAULT_GITLAB_PAGES_URL_BASE="https://ai-frontend-prototypes-c8939b.gpages.io"
export DEFAULT_VERCEL_TEAM_SLUG="grammarly-0ad4c188"

# Build configuration
export DEFAULT_DEPLOYMENT_TYPE="static"

# Server configuration
export DEFAULT_HTTP_SERVER="http-server"
export DEFAULT_HTTP_SERVER_FLAGS="-p"
