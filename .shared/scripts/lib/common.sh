#!/bin/bash
# Common utilities for shared scripts
# Source this file at the top of each script: source "$SCRIPT_DIR/../.shared/scripts/lib/common.sh"

# Determine the directory where THIS common.sh file lives
# This works even when sourced from different locations
COMMON_LIB_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Load defaults from the same directory as common.sh
source "$COMMON_LIB_DIR/defaults.sh"

# ============================================================================
# Color Codes & Symbols
# ============================================================================

export RED='\033[0;31m'
export GREEN='\033[0;32m'
export YELLOW='\033[1;33m'
export BLUE='\033[0;34m'
export CYAN='\033[0;36m'
export NC='\033[0m' # No Color

export SYM_SUCCESS="✅"
export SYM_ERROR="❌"
export SYM_WARNING="⚠️"
export SYM_INFO="ℹ️"

# ============================================================================
# Logging Functions
# ============================================================================

log_info() {
    echo -e "${BLUE}${1}${NC}"
}

log_success() {
    echo -e "${GREEN}${1}${NC}"
}

log_warning() {
    echo -e "${YELLOW}${1}${NC}"
}

log_error() {
    echo -e "${RED}${1}${NC}" >&2
}

# ============================================================================
# Status Printing
# ============================================================================

# Print a status line with consistent formatting
# Usage: print_status "Message" "success|error|warning|skip"
print_status() {
    local msg="$1"
    local status="$2"

    printf "%-40s" "$msg"
    case "$status" in
        success) printf "${GREEN}${SYM_SUCCESS}${NC}\n" ;;
        error)   printf "${RED}${SYM_ERROR}${NC}\n" ;;
        warning) printf "${YELLOW}${SYM_WARNING}${NC}\n" ;;
        skip)    printf "${YELLOW}${SYM_WARNING}${NC} (skipped)\n" ;;
        note)    printf "${YELLOW}${SYM_WARNING}${NC} (${3:-not needed})\n" ;;
        *)       printf "${NC}\n" ;;
    esac
}

# Execute command with status reporting
# Usage: exec_with_status "Message" "command" [silent=true]
exec_with_status() {
    local msg="$1"
    local cmd="$2"
    local silent="${3:-true}"

    printf "%-40s" "$msg"

    if [ "$silent" = "true" ]; then
        if eval "$cmd" >/dev/null 2>&1; then
            printf "${GREEN}${SYM_SUCCESS}${NC}\n"
            return 0
        else
            printf "${RED}${SYM_ERROR}${NC}\n"
            return 1
        fi
    else
        if eval "$cmd"; then
            printf "${GREEN}${SYM_SUCCESS}${NC}\n"
            return 0
        else
            printf "${RED}${SYM_ERROR}${NC}\n"
            return 1
        fi
    fi
}

# ============================================================================
# Path Resolution
# ============================================================================

# Resolve repository root (works from anywhere in repo, including symlinked dirs)
resolve_repo_root() {
    # Try git first (most reliable)
    local git_root
    git_root=$(git rev-parse --show-toplevel 2>/dev/null)
    if [ $? -eq 0 ] && [ -n "$git_root" ]; then
        echo "$git_root"
        return 0
    fi

    # Fallback: traverse up from current dir to find root markers
    local dir=$(pwd)
    while [ "$dir" != "/" ]; do
        # Check for repository root markers
        if [ -f "$dir/package.json" ] && [ -d "$dir/.shared" ] && [ -d "$dir/projects" ]; then
            echo "$dir"
            return 0
        fi
        dir=$(dirname "$dir")
    done

    log_error "Error: Could not find repository root"
    log_info "Expected: Directory with package.json, .shared/, and projects/"
    return 1
}

# ============================================================================
# Project Detection
# ============================================================================

# Get current project name from directory
detect_project_name() {
    basename "$(pwd)"
}

# Detect project type
# Returns: nextjs | nodejs | static | unknown
detect_project_type() {
    if [ -f "package.json" ]; then
        if [ -f "next.config.ts" ] || [ -f "next.config.js" ] || [ -f "next.config.mjs" ]; then
            echo "nextjs"
        else
            echo "nodejs"
        fi
    elif [ -d "src" ]; then
        echo "static"
    else
        echo "unknown"
    fi
}

# ============================================================================
# Configuration Loading
# ============================================================================

# Load configuration from .project.json
# Sets environment variables with PROJECT_CONFIG_ prefix
load_project_config() {
    local config_file=".project.json"

    if [ ! -f "$config_file" ]; then
        return 1
    fi

    # Extract common config values (handle missing fields gracefully)
    export PROJECT_CONFIG_NAME=$(grep -o '"name": *"[^"]*"' "$config_file" 2>/dev/null | head -1 | sed 's/"name": *"\(.*\)"/\1/' || echo "")
    export PROJECT_CONFIG_DESCRIPTION=$(grep -o '"description": *"[^"]*"' "$config_file" 2>/dev/null | head -1 | sed 's/"description": *"\(.*\)"/\1/' || echo "")
    export PROJECT_CONFIG_DEPLOYMENT=$(grep -o '"deployment": *"[^"]*"' "$config_file" 2>/dev/null | sed 's/"deployment": *"\(.*\)"/\1/' || echo "")
    export PROJECT_CONFIG_LOCAL_URL=$(grep -o '"local": *"[^"]*"' "$config_file" 2>/dev/null | sed 's/"local": *"\(.*\)"/\1/' || echo "")
    export PROJECT_CONFIG_REMOTE_URL=$(grep -o '"remote": *"[^"]*"' "$config_file" 2>/dev/null | sed 's/"remote": *"\(.*\)"/\1/' || echo "")

    # Extract nested config values if they exist
    export PROJECT_CONFIG_PORT=$(grep -o '"port": *[0-9]*' "$config_file" 2>/dev/null | grep -o '[0-9]*' || echo "")
    export PROJECT_CONFIG_VERCEL_TEAM=$(grep -o '"vercelTeam": *"[^"]*"' "$config_file" 2>/dev/null | sed 's/"vercelTeam": *"\(.*\)"/\1/' || echo "")

    return 0
}

# Get configuration value with priority: ENV > .project.json > default
# Usage: get_config "KEY" "default_value"
# Checks (in order): $PROJECT_KEY env var, $PROJECT_CONFIG_KEY (from .project.json), $DEFAULT_KEY, provided default
get_config() {
    local key="$1"
    local default="$2"
    local env_var="PROJECT_${key}"
    local config_var="PROJECT_CONFIG_${key}"
    local default_var="DEFAULT_${key}"

    # Priority 1: Direct environment variable
    if [ -n "${!env_var}" ]; then
        echo "${!env_var}"
        return 0
    fi

    # Priority 2: Config from .project.json
    if [ -n "${!config_var}" ]; then
        echo "${!config_var}"
        return 0
    fi

    # Priority 3: Repository default
    if [ -n "${!default_var}" ]; then
        echo "${!default_var}"
        return 0
    fi

    # Priority 4: Provided default
    echo "$default"
}

# ============================================================================
# Validation
# ============================================================================

# Ensure we're in a project directory
ensure_project_dir() {
    if [ ! -f ".project.json" ] && [ ! -f "package.json" ] && [ ! -d "src" ]; then
        log_error "Error: Not in a project directory"
        log_info "Expected: .project.json, package.json, or src/ directory"
        return 1
    fi
    return 0
}

# Check if a required command exists
# Usage: require_command "command" "install hint"
require_command() {
    local cmd="$1"
    local install_hint="$2"

    if ! command -v "$cmd" >/dev/null 2>&1; then
        log_error "Error: Required command '$cmd' not found"
        if [ -n "$install_hint" ]; then
            log_info "Install with: $install_hint"
        fi
        return 1
    fi
    return 0
}

# Check if directory exists
ensure_dir() {
    local dir="$1"
    local msg="${2:-Directory does not exist: $dir}"

    if [ ! -d "$dir" ]; then
        log_error "Error: $msg"
        return 1
    fi
    return 0
}

# Check if file exists
ensure_file() {
    local file="$1"
    local msg="${2:-File does not exist: $file}"

    if [ ! -f "$file" ]; then
        log_error "Error: $msg"
        return 1
    fi
    return 0
}

# ============================================================================
# Port Management
# ============================================================================

# Check if port is in use
is_port_in_use() {
    local port="$1"
    lsof -t -i:"$port" >/dev/null 2>&1
}

# Kill process on port
kill_port() {
    local port="$1"
    if is_port_in_use "$port"; then
        kill -9 $(lsof -t -i:"$port") >/dev/null 2>&1
        return 0
    fi
    return 1
}

# ============================================================================
# Git Utilities
# ============================================================================

# Get current git branch name
get_current_branch() {
    git branch --show-current 2>/dev/null || echo ""
}

# Check if we're in a git repository
is_git_repo() {
    git rev-parse --git-dir >/dev/null 2>&1
}
