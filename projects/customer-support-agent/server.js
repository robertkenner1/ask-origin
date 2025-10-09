const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// CORS for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Store chat agent instance info
let agentReady = false;
let agentError = null;

// Initialize the Python agent
function initializeAgent() {
    return new Promise((resolve, reject) => {
        console.log('Initializing Python chat agent...');

        // Check if knowledge folder exists
        if (!fs.existsSync('knowledge')) {
            reject(new Error('Knowledge folder not found'));
            return;
        }

        // The agent is ready (we'll call it per-request)
        agentReady = true;
        console.log('✓ Agent ready to handle requests');
        resolve();
    });
}

// API endpoint to get agent status
app.get('/api/status', (req, res) => {
    res.json({
        ready: agentReady,
        error: agentError,
        documentsLoaded: agentReady
    });
});

// API endpoint to handle chat messages
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Message is required' });
    }

    if (!agentReady) {
        return res.status(503).json({ error: 'Agent is not ready yet' });
    }

    try {
        console.log(`Processing question: ${message}`);

        // Create a Python script to call the agent
        const pythonScript = `
import sys
import os
sys.path.insert(0, '${__dirname.replace(/\\/g, '/')}')
from chat_agent import ChatAgent

# Load environment variables
try:
    from dotenv import load_dotenv
    load_dotenv()
except:
    pass

# Create and initialize agent with instructions path
instructions_path = os.path.join('${__dirname.replace(/\\/g, '/')}', 'agent_instructions.txt')
agent = ChatAgent(instructions_path=instructions_path)
agent.load_knowledge_base(['knowledge'])

# Get answer
question = """${message.replace(/"/g, '\\"')}"""
answer = agent.answer_question(question, top_k=10)
print(answer)
`;

        // Write temporary Python script
        const tempScriptPath = path.join(__dirname, 'temp_query.py');
        fs.writeFileSync(tempScriptPath, pythonScript);

        // Execute Python script
        const pythonProcess = spawn('python3', [tempScriptPath]);

        let output = '';
        let errorOutput = '';

        pythonProcess.stdout.on('data', (data) => {
            output += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        pythonProcess.on('close', (code) => {
            // Clean up temp script
            try {
                fs.unlinkSync(tempScriptPath);
            } catch (e) {
                console.error('Error cleaning up temp script:', e);
            }

            if (code !== 0) {
                console.error('Python process error:', errorOutput);
                return res.status(500).json({
                    error: 'Failed to process question',
                    details: errorOutput
                });
            }

            // Extract just the answer (remove loading messages)
            const lines = output.split('\n');
            const answerLines = [];
            let answerStarted = false;

            for (const line of lines) {
                if (line.includes('Loaded') ||
                    line.includes('Loading') ||
                    line.includes('✓') ||
                    line.includes('⚠') ||
                    line.includes('Note:') ||
                    line.includes('Warning:')) {
                    // Log these for debugging but don't include in answer
                    if (line.includes('custom instructions') || line.includes('fallback instructions')) {
                        console.log('DEBUG:', line);
                    }
                    continue;
                }
                answerLines.push(line);
            }

            const answer = answerLines.join('\n').trim();

            res.json({
                answer: answer || 'I could not generate an answer.',
                timestamp: new Date().toISOString()
            });
        });

        // Set timeout
        setTimeout(() => {
            pythonProcess.kill();
            try {
                fs.unlinkSync(tempScriptPath);
            } catch (e) {}
            if (!res.headersSent) {
                res.status(504).json({ error: 'Request timeout' });
            }
        }, 60000); // 60 second timeout

    } catch (error) {
        console.error('Error processing chat:', error);
        res.status(500).json({
            error: 'Failed to process question',
            message: error.message
        });
    }
});

// Start server
initializeAgent()
    .then(() => {
        app.listen(PORT, () => {
            console.log('\n' + '='.repeat(70));
            console.log('🚀 Customer Support AI Agent - Node.js Server');
            console.log('='.repeat(70));
            console.log(`\n✓ Server running on http://localhost:${PORT}`);
            console.log('✓ Python agent ready');
            console.log('✓ Modern UI available\n');
            console.log('='.repeat(70) + '\n');
        });
    })
    .catch((error) => {
        console.error('Failed to initialize agent:', error);
        agentError = error.message;

        // Start server anyway to show error
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT} (with errors)`);
        });
    });

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\nShutting down server...');
    process.exit(0);
});
