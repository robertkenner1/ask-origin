# Glean MCP Integration Setup Guide

This document explains how to configure Glean search results in the customer support agent.

## Overview

The customer support agent integrates with Grammarly's Glean MCP server to provide additional search results alongside AI-generated answers. When a user asks a question, the system:

1. Generates an AI answer from the knowledge base (via Anthropic)
2. Searches Glean in parallel for related internal documents
3. Displays the top 3 Glean results below the AI response

## Authentication Setup

### Step 1: Get a Glean API Token

Contact your Grammarly Glean administrator to request a **user-scoped Client API token** with the following scopes:

- `MCP`
- `AGENT`
- `SEARCH`
- `CHAT`
- `DOCUMENTS`
- `TOOLS`
- `ENTITIES`

### Step 2: Configure the Token

1. Open the `.env` file in the project directory
2. Add your Glean API token:

```bash
GLEAN_API_TOKEN=your_token_here
```

3. Save the file

### Step 3: Restart the Server

```bash
node server.js
```

## How It Works

### Without Token
- Glean search is skipped silently
- Users see: AI response only
- Server logs: "Glean API token not configured, skipping search"

### With Valid Token
- Glean search runs in parallel with AI response
- Users see: AI response + "📚 Related Glean Results" section
- Results show as numbered, clickable links

## Testing

1. Start the server: `node server.js`
2. Open the UI: `http://localhost:8181/customer-support-agent/`
3. Ask a question
4. Check server logs for:
   - "Searching Glean for additional results..."
   - Any errors or successful responses

## Troubleshooting

### No Glean results appearing
- Check `.env` file has `GLEAN_API_TOKEN` set
- Verify token has correct scopes
- Check server logs for authentication errors
- Confirm token hasn't expired

### Authentication errors in logs
- Token may be invalid or expired
- Contact Glean administrator for a new token
- Verify the token format (should be Bearer token)

### Server crashes on startup
- Ensure `dotenv` package is installed: `npm install`
- Check `.env` file is in the correct directory
- Verify `.env` file format is correct (no quotes around values)

## Technical Details

**API Endpoint:** `https://grammarly-be.glean.com/mcp/default`

**Authentication Method:** Bearer Token (sent in Authorization header)

**Request Format:** JSON-RPC 2.0 with MCP protocol

**Response Limit:** Top 3 results

**Timeout:** 5 seconds

**Error Handling:** Graceful failure (returns empty array, doesn't break chat)

## Code References

- Token configuration: `server.js:13`
- Glean search function: `server.js:85-147`
- Frontend display: `src/script.js:195-232`
- Styling: `src/styles.css:434-479`
