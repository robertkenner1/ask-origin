// thinking-grammarly JavaScript

/**
 * Project: Thinking Grammarly
 * Description: Grammarly-style popup prototype with hover interaction
 */

class GrammarlyPopup {
    constructor() {
        this.popup = null;
        this.hoverElement = null;
        this.hoverTimeout = null;
        this.init();
    }

    init() {
        console.log('Grammarly popup initialized');
        this.popup = document.getElementById('grammarly-popup');
        this.setupEventListeners();
        this.setupButtonHandlers();
    }

    setupEventListeners() {
        const demoText = document.querySelector('.demo-text');
        
        if (demoText) {
            // Mouse enter - show popup with delay
            demoText.addEventListener('mouseenter', (e) => {
                this.hoverElement = e.target;
                this.hoverTimeout = setTimeout(() => {
                    this.showPopup(e.target);
                }, 300); // Small delay for better UX
            });
            
            // Mouse leave - hide popup with delay
            demoText.addEventListener('mouseleave', () => {
                clearTimeout(this.hoverTimeout);
                this.scheduleHidePopup();
            });
            
            // Click to show popup (for demo purposes)
            demoText.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPopup(e.target);
            });
        }
        
        // Popup hover handling
        if (this.popup) {
            this.popup.addEventListener('mouseenter', () => {
                clearTimeout(this.hideTimeout);
            });
            
            this.popup.addEventListener('mouseleave', () => {
                this.scheduleHidePopup();
            });
        }
        
        // Hide popup when clicking outside
        document.addEventListener('click', (e) => {
            if (this.popup && !this.popup.contains(e.target) && 
                !e.target.classList.contains('demo-text')) {
                this.hidePopup();
            }
        });
    }

    showPopup(element) {
        if (!this.popup) return;
        
        // Position popup relative to the hovered element
        const rect = element.getBoundingClientRect();
        const popupRect = this.popup.getBoundingClientRect();
        
        // Calculate position
        let left = rect.left + (rect.width / 2) - (popupRect.width / 2);
        let top = rect.bottom + 10;
        
        // Adjust if popup goes off screen
        if (left < 10) left = 10;
        if (left + popupRect.width > window.innerWidth - 10) {
            left = window.innerWidth - popupRect.width - 10;
        }
        
        // Set position
        this.popup.style.position = 'fixed';
        this.popup.style.left = left + 'px';
        this.popup.style.top = top + 'px';
        this.popup.style.transform = 'none';
        
        // Show popup
        this.popup.classList.add('visible');
        
        // Add entrance animation
        this.popup.style.opacity = '0';
        this.popup.style.transform = 'translateY(-10px)';
        this.popup.style.transition = 'all 0.2s ease';
        
        requestAnimationFrame(() => {
            this.popup.style.opacity = '1';
            this.popup.style.transform = 'translateY(0)';
        });
    }

    scheduleHidePopup() {
        this.hideTimeout = setTimeout(() => {
            this.hidePopup();
        }, 100);
    }

    hidePopup() {
        if (!this.popup) return;
        
        this.popup.style.opacity = '0';
        this.popup.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            this.popup.classList.remove('visible');
        }, 200);
    }

    // Handle button interactions
    setupButtonHandlers() {
        const buttons = this.popup.querySelectorAll('.popup-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleButtonClick(btn);
            });
        });
        
        const acceptBtn = this.popup.querySelector('.accept-btn');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleAccept();
            });
        }
        
        const copyBtn = this.popup.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleCopy();
            });
        }
    }

    handleButtonClick(button) {
        // Remove active class from all buttons
        const buttons = this.popup.querySelectorAll('.popup-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        console.log('Button clicked:', button.textContent);
    }

    handleAccept() {
        console.log('Accept clicked');
        this.hidePopup();
    }

    handleCopy() {
        console.log('Copy clicked');
        // Add copy functionality here
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.grammarlyPopup = new GrammarlyPopup();
});