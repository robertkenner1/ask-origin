// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const statusBadge = document.getElementById('statusBadge');
const kbStatus = document.getElementById('kbStatus');
const kbStatusInfo = document.getElementById('kbStatusInfo');

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
            if (kbStatus) kbStatus.textContent = 'Loaded';
            if (kbStatusInfo) kbStatusInfo.textContent = 'Loaded';
            sendButton.disabled = false;
        } else if (data.error) {
            updateStatus('Error', 'error');
            if (kbStatus) kbStatus.textContent = 'Error';
            if (kbStatusInfo) kbStatusInfo.textContent = 'Error';
        } else {
            updateStatus('Loading...', 'loading');
            if (kbStatus) kbStatus.textContent = 'Loading...';
            if (kbStatusInfo) kbStatusInfo.textContent = 'Loading...';
            // Retry after 2 seconds
            setTimeout(checkStatus, 2000);
        }
    } catch (error) {
        console.error('Status check failed:', error);
        updateStatus('Connection Error', 'error');
        if (kbStatus) kbStatus.textContent = 'Error';
        if (kbStatusInfo) kbStatusInfo.textContent = 'Error';
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

        // Add assistant message with feedback buttons
        addMessage(data.answer, 'assistant', message, data.gleanResults);

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
function addMessage(text, role, userQuestion = null, gleanResults = null) {
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

    // Add Glean search results if available
    if (role === 'assistant' && gleanResults && gleanResults.length > 0) {
        const gleanDiv = document.createElement('div');
        gleanDiv.className = 'glean-results';

        let gleanHTML = '<div class="glean-header"><strong>📚 Related Glean Results:</strong></div>';

        gleanResults.forEach((result, index) => {
            if (result.type === 'text' && result.text) {
                // Parse the text to extract title and URL
                const lines = result.text.split('\n');
                let title = '';
                let url = '';

                for (const line of lines) {
                    if (line.startsWith('Title:')) {
                        title = line.replace('Title:', '').trim();
                    } else if (line.startsWith('URL:')) {
                        url = line.replace('URL:', '').trim();
                    }
                }

                if (title && url) {
                    gleanHTML += `
                        <div class="glean-result-item">
                            <span class="glean-result-number">${index + 1}.</span>
                            <a href="${url}" target="_blank" rel="noopener noreferrer" class="glean-result-link">
                                ${title}
                            </a>
                        </div>
                    `;
                }
            }
        });

        gleanDiv.innerHTML = gleanHTML;
        contentDiv.appendChild(gleanDiv);
    }

    // Add feedback buttons for assistant messages
    if (role === 'assistant' && userQuestion) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-buttons';
        feedbackDiv.innerHTML = `
            <span class="feedback-label">Was this helpful?</span>
            <button class="feedback-btn feedback-yes" data-feedback="yes">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
            </button>
            <button class="feedback-btn feedback-no" data-feedback="no">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
                </svg>
            </button>
        `;

        // Add feedback button event listeners
        const yesBtn = feedbackDiv.querySelector('.feedback-yes');
        const noBtn = feedbackDiv.querySelector('.feedback-no');

        yesBtn.addEventListener('click', () => handleFeedback('yes', feedbackDiv));
        noBtn.addEventListener('click', () => handleFeedback('no', feedbackDiv, userQuestion, text));

        contentDiv.appendChild(feedbackDiv);
    }

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

// Handle feedback
async function handleFeedback(type, feedbackDiv, question = null, answer = null) {
    // Disable buttons
    feedbackDiv.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });

    if (type === 'yes') {
        // Show thank you message
        feedbackDiv.innerHTML = '<span class="feedback-thanks" style="color: var(--success); font-size: 0.875rem;">✓ Thank you for your feedback!</span>';
    } else {
        // Show feedback noted message
        feedbackDiv.innerHTML = '<span class="feedback-thanks" style="color: var(--text-secondary); font-size: 0.875rem;">Your feedback has been noted.</span>';

        // Send to server to log bad answer
        try {
            await fetch('http://localhost:3001/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: question,
                    answer: answer,
                    timestamp: new Date().toISOString()
                })
            });
        } catch (error) {
            console.error('Failed to log feedback:', error);
        }
    }
}

// Log to console
console.log('%c🤖 Customer Support AI Agent', 'font-size: 20px; font-weight: bold; color: #667eea');
console.log('%cPowered by Claude AI', 'font-size: 12px; color: #94a3b8');
