# Customer Support Agent - Project Settings

## Project Overview
A complete customer support chat agent with AI-powered responses based on a knowledge base.
Includes both frontend chat interface and backend Python/Node.js server.

## Active Development
- Branch: customer-support-agent
- Project path: projects/customer-support-agent/

## Design Notes
- Clean, modern chat interface
- Message bubbles for user and agent
- Markdown support for rich text responses
- Responsive design for mobile and desktop

## Technical Stack

### Frontend (src/)
- HTML/CSS/JavaScript
- Modern CSS Grid and Flexbox
- Fetch API for backend communication

### Backend
- **Python Agent**: `chat_agent.py`, `web_chat.py`
- **Node.js Server**: `server.js` (port 3000)
- **Knowledge Base**: `knowledge/` directory with support for:
  - Text files (.txt, .md)
  - JSON files (.json)
  - CSV files (.csv)
  - PDF files (.pdf)

## Setup Instructions

### 1. Install Python Dependencies
```bash
cd projects/customer-support-agent
pip install -r requirements.txt
```

### 2. Install Node.js Dependencies
```bash
npm install
```

### 3. Run the Application

**IMPORTANT: Always use the Node.js frontend. This is the primary UI.**

**Quick Start (Recommended):**
```bash
./start.sh
# Open browser to http://localhost:8181/customer-support-agent/
```

**Manual Start:**
```bash
# Terminal 1: Start Node.js backend
node server.js

# Terminal 2: Serve frontend
cd ../..
make build
make start
# Open browser to http://localhost:8181/customer-support-agent/
```

**CLI Interface (for testing only):**
```bash
python3 start_chat.py
```

**Note:** The Gradio interface (web_chat.py) is deprecated. Always use the Node.js frontend from src/ directory.

## Project Structure
```
customer-support-agent/
├── src/                      # Frontend files (for monorepo build)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── chat_agent.py            # Core AI agent logic
├── web_chat.py              # Gradio web interface
├── server.js                # Node.js API server
├── knowledge/               # Knowledge base files
├── requirements.txt         # Python dependencies
└── package.json             # Node.js dependencies
```

## API Endpoints
- POST /chat - accepts {message: string}, returns {response: string}

## Features
- Multiple file format support for knowledge base
- Smart keyword-based document search
- Source attribution with page numbers
- Real-time chat interface
- Markdown rendering
