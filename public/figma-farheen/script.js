// figma-farheen JavaScript

/**
 * Project: Figma Farheen
 * Description: Frontend prototype for figma-farheen
 */

class Figmafarheen {
    constructor() {
        this.init();
    }

    init() {
        console.log('figma-farheen initialized');
        this.setupEventListeners();
        this.setupDemo();
    }

    setupEventListeners() {
        // Add your event listeners here
        document.addEventListener('click', this.handleClick.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    setupDemo() {
        // Demo functionality
        const demoSection = document.querySelector('.demo-section');
        if (demoSection) {
            demoSection.addEventListener('click', () => {
                console.log('Demo section clicked!');
                this.toggleDemoHighlight(demoSection);
            });
        }
    }

    handleClick(event) {
        console.log('Click detected:', event.target);
        // Add your click handling logic here
    }

    handleResize() {
        console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
        // Add your resize handling logic here
    }

    toggleDemoHighlight(element) {
        element.style.background = element.style.background === 'yellow' 
            ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' 
            : 'yellow';
    }

    // Utility methods
    static createElement(tag, className = '', textContent = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.figmafarheen = new Figmafarheen();
});

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Figmafarheen;
}