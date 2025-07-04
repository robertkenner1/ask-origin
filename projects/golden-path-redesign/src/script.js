// Golden Path Redesign JavaScript

/**
 * Project: Golden Path Redesign
 * Description: Interactive form prototype with progress tracking and validation
 */

class GoldenPathForm {
    constructor() {
        this.currentStep = 2;
        this.totalSteps = 5;
        this.formData = {};
        this.validationRules = {
            field3: { required: true, message: 'This field is required' }
        };
        this.init();
    }

    init() {
        console.log('Golden Path Form initialized');
        this.setupEventListeners();
        this.setupFormValidation();
        this.setupProgressIndicator();
        this.enhanceSelectElements();
    }

    setupEventListeners() {
        // Form submission
        const form = document.getElementById('stepForm');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Input changes for real-time validation
        const inputs = document.querySelectorAll('.form-input, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearFieldError.bind(this));
        });

        // Progress step clicks
        const steps = document.querySelectorAll('.step');
        steps.forEach((step, index) => {
            if (index < this.currentStep - 1) { // Only allow clicking on completed steps
                step.addEventListener('click', () => this.navigateToStep(index + 1));
                step.style.cursor = 'pointer';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));

        // Window resize handling
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    }

    setupFormValidation() {
        // Set up custom validation messages
        const requiredFields = document.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('invalid', (e) => {
                e.preventDefault();
                this.showFieldError(field, this.validationRules[field.name]?.message || 'This field is required');
            });
        });
    }

    setupProgressIndicator() {
        // Update progress indicator based on current step
        this.updateProgressIndicator();
    }

    enhanceSelectElements() {
        // Add custom behavior to select elements
        const selects = document.querySelectorAll('.form-select');
        selects.forEach(select => {
            select.addEventListener('focus', this.handleSelectFocus.bind(this));
            select.addEventListener('change', this.handleSelectChange.bind(this));
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            this.collectFormData();
            this.animateNext();
            
            // Simulate moving to next step
            setTimeout(() => {
                console.log('Form data collected:', this.formData);
                this.showSuccessMessage('Moving to next step...');
            }, 500);
        } else {
            this.showError('Please fix the validation errors before continuing.');
        }
    }

    validateForm() {
        let isValid = true;
        const form = document.getElementById('stepForm');
        const formData = new FormData(form);

        // Clear all previous errors
        this.clearAllErrors();

        // Validate required fields
        Object.keys(this.validationRules).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            const value = formData.get(fieldName);
            const rule = this.validationRules[fieldName];

            if (rule.required && (!value || value.trim() === '')) {
                this.showFieldError(field, rule.message);
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(event) {
        const field = event.target;
        const fieldName = field.name;
        const value = field.value;

        if (this.validationRules[fieldName]) {
            const rule = this.validationRules[fieldName];
            
            if (rule.required && (!value || value.trim() === '')) {
                this.showFieldError(field, rule.message);
                return false;
            } else {
                this.clearFieldError(event);
                return true;
            }
        }
        return true;
    }

    showFieldError(field, message) {
        this.clearFieldError({ target: field });
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #dc3545;
            font-size: 12px;
            margin-top: 4px;
            line-height: 18px;
        `;
        
        field.parentNode.appendChild(errorElement);
        field.style.borderColor = '#dc3545';
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', field.id + '-error');
        errorElement.id = field.id + '-error';
    }

    clearFieldError(event) {
        const field = event.target;
        const existingError = field.parentNode.querySelector('.field-error');
        
        if (existingError) {
            existingError.remove();
        }
        
        field.style.borderColor = '';
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
    }

    clearAllErrors() {
        const errors = document.querySelectorAll('.field-error');
        errors.forEach(error => error.remove());
        
        const fields = document.querySelectorAll('.form-input, .form-select');
        fields.forEach(field => {
            field.style.borderColor = '';
            field.removeAttribute('aria-invalid');
            field.removeAttribute('aria-describedby');
        });
    }

    collectFormData() {
        const form = document.getElementById('stepForm');
        const formData = new FormData(form);
        
        // Store form data for this step
        this.formData[`step${this.currentStep}`] = {};
        for (let [key, value] of formData.entries()) {
            this.formData[`step${this.currentStep}`][key] = value;
        }
    }

    updateProgressIndicator() {
        const steps = document.querySelectorAll('.step');
        
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            step.classList.remove('completed', 'active');
            
            if (stepNumber < this.currentStep) {
                step.classList.add('completed');
            } else if (stepNumber === this.currentStep) {
                step.classList.add('active');
            }
        });
    }

    navigateToStep(stepNumber) {
        if (stepNumber <= this.currentStep - 1) {
            console.log(`Navigating to step ${stepNumber}`);
            // In a real application, this would navigate to the actual step
            this.showInfo(`Navigation to step ${stepNumber} would happen here.`);
        }
    }

    handleSelectFocus(event) {
        const wrapper = event.target.closest('.input-wrapper');
        if (wrapper) {
            wrapper.classList.add('focused');
        }
    }

    handleSelectChange(event) {
        const wrapper = event.target.closest('.input-wrapper');
        if (wrapper) {
            wrapper.classList.remove('focused');
        }
        
        // Clear any validation errors when user makes a selection
        this.clearFieldError(event);
    }

    handleKeyboardNavigation(event) {
        // ESC key to clear form
        if (event.key === 'Escape') {
            const activeElement = document.activeElement;
            if (activeElement && (activeElement.matches('.form-input') || activeElement.matches('.form-select'))) {
                activeElement.blur();
            }
        }
        
        // Enter key on form elements
        if (event.key === 'Enter' && event.target.matches('.form-input')) {
            event.preventDefault();
            const form = document.getElementById('stepForm');
            const elements = Array.from(form.querySelectorAll('.form-input, .form-select, .btn'));
            const currentIndex = elements.indexOf(event.target);
            
            if (currentIndex < elements.length - 1) {
                elements[currentIndex + 1].focus();
            }
        }
    }

    animateNext() {
        const button = document.querySelector('.btn-primary');
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
    }

    handleResize() {
        // Handle responsive behavior
        const width = window.innerWidth;
        console.log('Window resized to:', width);
        
        if (width <= 768) {
            // Mobile adjustments
            this.adjustForMobile();
        } else {
            // Desktop adjustments
            this.adjustForDesktop();
        }
    }

    adjustForMobile() {
        // Mobile-specific adjustments
        const progressSteps = document.querySelector('.progress-steps');
        if (progressSteps) {
            progressSteps.style.gap = '8px';
        }
    }

    adjustForDesktop() {
        // Desktop-specific adjustments
        const progressSteps = document.querySelector('.progress-steps');
        if (progressSteps) {
            progressSteps.style.gap = '';
        }
    }

    // Notification methods
    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showInfo(message) {
        this.showNotification(message, 'info');
    }

    showSuccessMessage(message) {
        this.showNotification(message, 'success');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 16px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        // Set colors based on type
        const colors = {
            success: { bg: '#d4edda', border: '#c3e6cb', text: '#155724' },
            error: { bg: '#f8d7da', border: '#f5c6cb', text: '#721c24' },
            info: { bg: '#d6f0ff', border: '#bee5eb', text: '#0c5460' }
        };

        const color = colors[type];
        notification.style.backgroundColor = color.bg;
        notification.style.borderLeft = `4px solid ${color.border}`;
        notification.style.color = color.text;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });

        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Utility methods
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

    debounce = GoldenPathForm.debounce;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.goldenPathForm = new GoldenPathForm();
});

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GoldenPathForm;
}