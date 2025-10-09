// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const statusBadge = document.getElementById('statusBadge');
const kbStatus = document.getElementById('kbStatus');

// State
let isProcessing = false;
let agentReady = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkStatus();
    setupEventListeners();
    autoResizeTextarea();
});

// Check agent status
async function checkStatus() {
    try {
        const response = await fetch('http://localhost:3001/api/status');
        const data = await response.json();

        agentReady = data.ready;

        if (data.ready) {
            updateStatus('Ready', 'success');
            kbStatus.textContent = 'Loaded';
            sendButton.disabled = false;
        } else if (data.error) {
            updateStatus('Error', 'error');
            kbStatus.textContent = 'Error';
        } else {
            updateStatus('Loading...', 'loading');
            kbStatus.textContent = 'Loading...';
            // Retry after 2 seconds
            setTimeout(checkStatus, 2000);
        }
    } catch (error) {
        console.error('Status check failed:', error);
        updateStatus('Connection Error', 'error');
        kbStatus.textContent = 'Error';
        // Retry after 5 seconds
        setTimeout(checkStatus, 5000);
    }
}

// Update status badge
function updateStatus(text, type) {
    const statusText = statusBadge.querySelector('.status-text');
    statusText.textContent = text;

    statusBadge.classList.remove('error', 'success', 'loading');
    if (type === 'error') {
        statusBadge.classList.add('error');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Send button click
    sendButton.addEventListener('click', handleSend);

    // Enter key to send (Shift+Enter for new line)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // Enable/disable send button based on input
    messageInput.addEventListener('input', () => {
        const hasText = messageInput.value.trim().length > 0;
        sendButton.disabled = !hasText || !agentReady || isProcessing;
    });

    // Quick question buttons
    document.querySelectorAll('.quick-question-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            messageInput.value = question;
            handleSend();
        });
    });
}

// Auto-resize textarea
function autoResizeTextarea() {
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
}

// Handle send message
async function handleSend() {
    const message = messageInput.value.trim();

    if (!message || !agentReady || isProcessing) {
        return;
    }

    isProcessing = true;
    sendButton.disabled = true;

    // Remove welcome message if it exists
    const welcomeMsg = document.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }

    // Add user message
    addMessage(message, 'user');

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';

    // Show typing indicator
    const typingId = showTypingIndicator();

    try {
        // Send to API
        const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        // Remove typing indicator
        removeTypingIndicator(typingId);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to get response');
        }

        const data = await response.json();

        // Add assistant message
        addMessage(data.answer, 'assistant');

    } catch (error) {
        console.error('Chat error:', error);
        removeTypingIndicator(typingId);
        addMessage(
            `Sorry, I encountered an error: ${error.message}. Please try again.`,
            'assistant'
        );
    } finally {
        isProcessing = false;
        sendButton.disabled = false;
        messageInput.focus();
    }
}

// Add message to chat
function addMessage(text, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = role === 'user' ? '👤' : '🤖';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    // Format text with line breaks
    bubble.innerHTML = formatMessage(text);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    contentDiv.appendChild(bubble);
    contentDiv.appendChild(timeDiv);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Format message text
function formatMessage(text) {
    // Convert markdown links to HTML links FIRST (before newlines)
    // Format: [link text](url)
    let formatted = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="message-link">$1</a>');

    // Convert plain URLs to clickable links (http, https)
    // Match URLs that aren't already wrapped in <a> tags
    formatted = formatted.replace(/(?<!href=["'])(?<!src=["'])(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="message-link">$1</a>');

    // Make bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Make bullet points (before converting newlines)
    formatted = formatted.replace(/^- (.*?)$/gm, '• $1');

    // Convert newlines to <br> (do this LAST)
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
}

// Show typing indicator
function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message assistant';
    messageDiv.id = 'typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;

    bubble.appendChild(typingDiv);
    contentDiv.appendChild(bubble);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return 'typing-indicator';
}

// Remove typing indicator
function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) {
        indicator.remove();
    }
}

// Log to console
console.log('%c🤖 Customer Support AI Agent', 'font-size: 20px; font-weight: bold; color: #667eea');
console.log('%cPowered by Claude AI', 'font-size: 12px; color: #94a3b8');
