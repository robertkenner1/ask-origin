const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Glean MCP configuration
const GLEAN_MCP_URL = 'https://grammarly-be.glean.com/mcp/default';
const GLEAN_API_TOKEN = process.env.GLEAN_API_TOKEN;

// Coda MCP configuration
const CODA_MCP_URL = 'https://head.coda.io/apis/codaInternal/mcp';
const CODA_API_TOKEN = process.env.CODA_API_TOKEN;

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

// API endpoint to handle feedback
app.post('/api/feedback', async (req, res) => {
    const { question, answer, details, timestamp } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
    }

    try {
        let logEntry = `\n${'='.repeat(80)}\nTimestamp: ${timestamp}\nQuestion: ${question}\n\nAnswer: ${answer}\n`;

        // Add user feedback details if provided
        if (details && details.trim()) {
            logEntry += `\nUser Feedback: ${details}\n`;
        }

        logEntry += `${'='.repeat(80)}\n`;

        const badAnswersPath = path.join(__dirname, 'knowledge', 'BadAnswers.txt');
        fs.appendFileSync(badAnswersPath, logEntry);

        console.log('Logged bad answer to BadAnswers.txt' + (details ? ' (with user feedback)' : ''));
        res.json({ success: true });
    } catch (error) {
        console.error('Error logging feedback:', error);
        res.status(500).json({ error: 'Failed to log feedback' });
    }
});

// Helper function to parse Glean markdown results into structured format
function parseGleanMarkdown(markdownText) {
    const results = [];

    console.log('Full Glean markdown:', markdownText.substring(0, 500));

    // Split by ### headers (each result)
    const sections = markdownText.split(/###\s+\d+\.\s+/).filter(s => s.trim());

    for (const section of sections.slice(0, 3)) { // Limit to top 3
        const lines = section.split('\n');
        const title = lines[0].trim();

        // Look for URL in the section - try multiple patterns
        let url = '';
        for (const line of lines) {
            // Pattern 1: **Link:** URL
            let urlMatch = line.match(/\*\*Link:\*\*\s+(https?:\/\/[^\s]+)/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
            // Pattern 2: [View in ...](URL)
            urlMatch = line.match(/\[View in .*?\]\((https?:\/\/[^\)]+)\)/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
            // Pattern 3: **URL:** <URL>
            urlMatch = line.match(/\*\*URL:\*\*\s*<?(https?:\/\/[^\s>]+)>?/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
        }

        if (title && url) {
            console.log(`Found result: ${title} -> ${url}`);
            results.push({
                type: 'text',
                text: `Title: ${title}\nURL: ${url}`
            });
        } else {
            console.log(`Skipped result - Title: ${title}, URL: ${url}`);
        }
    }

    return results;
}

// Helper function to parse Coda markdown results into structured format
function parseCodaMarkdown(markdownText) {
    const results = [];

    console.log('Full Coda markdown:', markdownText.substring(0, 500));

    // Split by ### headers (each result)
    const sections = markdownText.split(/###\s+\d+\.\s+/).filter(s => s.trim());

    for (const section of sections.slice(0, 3)) { // Limit to top 3
        const lines = section.split('\n');
        const title = lines[0].trim();

        // Look for URL in the section
        let url = '';
        for (const line of lines) {
            // Pattern 1: **Link:** URL
            let urlMatch = line.match(/\*\*Link:\*\*\s+(https?:\/\/[^\s]+)/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
            // Pattern 2: **URL:** URL
            urlMatch = line.match(/\*\*URL:\*\*\s*<?(https?:\/\/[^\s>]+)>?/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
            // Pattern 3: [View](URL)
            urlMatch = line.match(/\[View.*?\]\((https?:\/\/[^\)]+)\)/);
            if (urlMatch) {
                url = urlMatch[1];
                break;
            }
        }

        if (title && url) {
            console.log(`Found Coda result: ${title} -> ${url}`);
            results.push({
                type: 'text',
                text: `Title: ${title}\nURL: ${url}`
            });
        } else {
            console.log(`Skipped Coda result - Title: ${title}, URL: ${url}`);
        }
    }

    return results;
}

// Function to search Glean via MCP
async function searchGlean(query) {
    // Skip if no API token configured
    if (!GLEAN_API_TOKEN) {
        console.log('Glean API token not configured, skipping search');
        return [];
    }

    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            params: {
                name: 'search',
                arguments: {
                    query: query,
                    limit: 3
                }
            },
            id: 1
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GLEAN_API_TOKEN}`,
                'Content-Length': data.length
            }
        };

        const request = https.request(GLEAN_MCP_URL, options, (response) => {
            let body = '';
            response.on('data', (chunk) => body += chunk);
            response.on('end', () => {
                console.log(`Glean response status: ${response.statusCode}`);
                console.log(`Glean response body: ${body.substring(0, 200)}...`);
                try {
                    const result = JSON.parse(body);
                    if (result.error) {
                        console.log('Glean search error:', result.error);
                        resolve([]);
                    } else {
                        const content = result.result?.content || [];
                        // Parse markdown content into structured format
                        if (content.length > 0 && content[0].type === 'text') {
                            const parsedResults = parseGleanMarkdown(content[0].text);
                            console.log(`Parsed ${parsedResults.length} Glean results`);
                            resolve(parsedResults);
                        } else {
                            resolve([]);
                        }
                    }
                } catch (error) {
                    console.log('Glean parse error:', error);
                    console.log('Full response body:', body);
                    resolve([]);
                }
            });
        });

        request.on('error', (error) => {
            console.log('Glean request error:', error);
            resolve([]);
        });

        request.write(data);
        request.end();

        // Timeout after 5 seconds
        setTimeout(() => {
            request.destroy();
            resolve([]);
        }, 5000);
    });
}

// Function to search Coda via MCP
async function searchCoda(query) {
    // Skip if no API token configured
    if (!CODA_API_TOKEN) {
        console.log('Coda API token not configured, skipping search');
        return [];
    }

    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            params: {
                name: 'search',
                arguments: {
                    query: query,
                    limit: 3
                }
            },
            id: 1
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CODA_API_TOKEN}`,
                'Content-Length': data.length
            }
        };

        const request = https.request(CODA_MCP_URL, options, (response) => {
            let body = '';
            response.on('data', (chunk) => body += chunk);
            response.on('end', () => {
                console.log(`Coda response status: ${response.statusCode}`);
                console.log(`Coda response body: ${body.substring(0, 200)}...`);
                try {
                    const result = JSON.parse(body);
                    if (result.error) {
                        console.log('Coda search error:', result.error);
                        resolve([]);
                    } else {
                        const content = result.result?.content || [];
                        // Parse markdown content into structured format
                        if (content.length > 0 && content[0].type === 'text') {
                            const parsedResults = parseCodaMarkdown(content[0].text);
                            console.log(`Parsed ${parsedResults.length} Coda results`);
                            resolve(parsedResults);
                        } else {
                            resolve([]);
                        }
                    }
                } catch (error) {
                    console.log('Coda parse error:', error);
                    console.log('Full response body:', body);
                    resolve([]);
                }
            });
        });

        request.on('error', (error) => {
            console.log('Coda request error:', error);
            resolve([]);
        });

        request.write(data);
        request.end();

        // Timeout after 5 seconds
        setTimeout(() => {
            request.destroy();
            resolve([]);
        }, 5000);
    });
}

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

        pythonProcess.on('close', async (code) => {
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

            // Search Glean and Coda in parallel with Anthropic response
            console.log('Searching Glean and Coda for additional results...');
            const [gleanResults, codaResults] = await Promise.all([
                searchGlean(message),
                searchCoda(message)
            ]);

            res.json({
                answer: answer || 'I could not generate an answer.',
                gleanResults: gleanResults,
                codaResults: codaResults,
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
