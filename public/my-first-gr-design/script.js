// Grammarly-style popup functionality
class GrammarlyPopup {
    constructor() {
        this.popup = document.getElementById('grammar-popup');
        this.triggers = document.querySelectorAll('.text-trigger');
        this.isHoveringPopup = false;
        this.isHoveringTrigger = false;
        this.hideTimeout = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupKeyboardShortcuts();
    }

    bindEvents() {
        // Handle hover events for text triggers
        this.triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', (e) => this.handleTriggerHover(e));
            trigger.addEventListener('mouseleave', (e) => this.handleTriggerLeave(e));
        });

        // Handle popup hover events
        this.popup.addEventListener('mouseenter', () => this.handlePopupHover());
        this.popup.addEventListener('mouseleave', () => this.handlePopupLeave());

        // Handle button clicks
        this.setupButtonHandlers();
    }

    handleTriggerHover(event) {
        this.isHoveringTrigger = true;
        this.clearHideTimeout();
        this.showPopup(event.target);
    }

    handleTriggerLeave(event) {
        this.isHoveringTrigger = false;
        this.scheduleHidePopup();
    }

    handlePopupHover() {
        this.isHoveringPopup = true;
        this.clearHideTimeout();
    }

    handlePopupLeave() {
        this.isHoveringPopup = false;
        this.scheduleHidePopup();
    }

    showPopup(trigger) {
        const rect = trigger.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        // Position popup below the trigger with some offset
        const popupTop = rect.bottom + scrollTop + 10;
        const popupLeft = Math.max(10, rect.left + scrollLeft - 100); // Offset to center better
        
        // Ensure popup doesn't go off-screen
        const maxLeft = window.innerWidth - 513 - 20; // 513px popup width + margin
        const finalLeft = Math.min(popupLeft, maxLeft);
        
        this.popup.style.top = `${popupTop}px`;
        this.popup.style.left = `${finalLeft}px`;
        
        // Show popup with fade-in animation
        this.popup.classList.add('show');
        
        // Add entrance animation
        this.popup.style.opacity = '0';
        this.popup.style.transform = 'translateY(-10px)';
        
        // Force reflow
        this.popup.offsetHeight;
        
        // Animate in
        this.popup.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        this.popup.style.opacity = '1';
        this.popup.style.transform = 'translateY(0)';
    }

    scheduleHidePopup() {
        this.clearHideTimeout();
        this.hideTimeout = setTimeout(() => {
            if (!this.isHoveringTrigger && !this.isHoveringPopup) {
                this.hidePopup();
            }
        }, 300); // 300ms delay before hiding
    }

    hidePopup() {
        this.popup.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        this.popup.style.opacity = '0';
        this.popup.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            this.popup.classList.remove('show');
            this.popup.style.transform = '';
            this.popup.style.transition = '';
        }, 200);
    }

    clearHideTimeout() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }

    setupButtonHandlers() {
        // Accept button
        const acceptBtn = this.popup.querySelector('.accept-btn');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => this.handleAccept());
        }

        // Action buttons
        const actionButtons = this.popup.querySelectorAll('.action-btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleActionClick(e));
        });

        // Copy button
        const copyIcon = this.popup.querySelector('.copy-icon');
        if (copyIcon) {
            copyIcon.addEventListener('click', () => this.handleCopy());
        }
    }

    handleAccept() {
        // Animate acceptance
        const acceptBtn = this.popup.querySelector('.accept-btn');
        acceptBtn.style.background = '#e8f5e8';
        acceptBtn.style.borderColor = '#4caf50';
        
        setTimeout(() => {
            this.hidePopup();
            this.showSuccessMessage();
        }, 200);
    }

    handleActionClick(event) {
        // Update active state
        const allBtns = this.popup.querySelectorAll('.action-btn');
        allBtns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Visual feedback
        event.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.target.style.transform = '';
        }, 100);
    }

    handleCopy() {
        // Copy text to clipboard
        const textContent = this.popup.querySelector('.corrected-text').textContent;
        navigator.clipboard.writeText(textContent).then(() => {
            this.showCopyFeedback();
        });
    }

    showCopyFeedback() {
        const copyIcon = this.popup.querySelector('.copy-icon');
        const originalColor = copyIcon.style.color;
        copyIcon.style.color = '#4caf50';
        
        setTimeout(() => {
            copyIcon.style.color = originalColor;
        }, 1000);
    }

    showSuccessMessage() {
        // Create temporary success message
        const message = document.createElement('div');
        message.textContent = 'Changes accepted!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after delay
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translateX(100px)';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 2000);
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Command/Ctrl + Enter to accept
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                if (this.popup.classList.contains('show')) {
                    e.preventDefault();
                    this.handleAccept();
                }
            }
            
            // Escape to close
            if (e.key === 'Escape') {
                if (this.popup.classList.contains('show')) {
                    e.preventDefault();
                    this.hidePopup();
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GrammarlyPopup();
});

// Handle window resize to reposition popup if needed
window.addEventListener('resize', () => {
    const popup = document.getElementById('grammar-popup');
    if (popup && popup.classList.contains('show')) {
        // Hide popup on resize to avoid positioning issues
        popup.classList.remove('show');
    }
});