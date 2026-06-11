/**
 * Ceylone Culture - Input Validation Engine
 * Handles live visual feedback, border glowing, and descriptive error messages.
 */

const ValidationEngine = {
    // Regular Expression patterns
    patterns: {
        phone: /^(?:\+94|0)?7[0-9]{8}$/, // Validates Sri Lankan mobile phone formats
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        name: /^[a-zA-Z\s]{3,50}$/
    },

    /**
     * Mark an input as valid
     */
    setValid(element) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        return true;
    },

    /**
     * Mark an input as invalid and set custom error message
     */
    setInvalid(element, errorMessage) {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        
        // Find or create the error-feedback element
        let feedback = element.parentElement.querySelector('.error-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'error-feedback';
            element.parentElement.appendChild(feedback);
        }
        feedback.textContent = errorMessage;
        return false;
    },

    /**
     * Clear all validation states from an element
     */
    clearState(element) {
        element.classList.remove('is-valid', 'is-invalid');
        const feedback = element.parentElement.querySelector('.error-feedback');
        if (feedback) {
            feedback.textContent = '';
        }
    },

    /**
     * Validate standard order options
     */
    validateStandardOrder(orderType, customerNameVal, tableNumberVal, customerNameInput, tableNumberInput) {
        let isValid = true;

        if (orderType === 'Dine-In') {
            this.clearState(customerNameInput);
            
            const tableNum = parseInt(tableNumberVal, 10);
            if (isNaN(tableNum) || tableNum < 1 || tableNum > 30) {
                isValid = this.setInvalid(tableNumberInput, 'Table number must be between 1 and 30.');
            } else {
                this.setValid(tableNumberInput);
            }
        } else {
            this.clearState(tableNumberInput);

            if (!customerNameVal || customerNameVal.trim().length < 3) {
                isValid = this.setInvalid(customerNameInput, 'Customer name must be at least 3 characters.');
            } else if (!this.patterns.name.test(customerNameVal.trim())) {
                isValid = this.setInvalid(customerNameInput, 'Customer name must contain letters only.');
            } else {
                this.setValid(customerNameInput);
            }
        }

        return isValid;
    },

    /**
     * Validate Bulk Order parameters
     */
    validateBulkOrder(fields) {
        let isValid = true;

        // 1. Customer Name
        if (!fields.clientName.value || fields.clientName.value.trim().length < 3) {
            isValid = this.setInvalid(fields.clientName, 'Customer name must be at least 3 characters.') && isValid;
        } else {
            this.setValid(fields.clientName);
        }

        // 2. Event Date
        if (!fields.eventDate.value) {
            isValid = this.setInvalid(fields.eventDate, 'Please select a delivery date.') && isValid;
        } else {
            const selectedDate = new Date(fields.eventDate.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                isValid = this.setInvalid(fields.eventDate, 'Delivery date must be a future date.') && isValid;
            } else {
                this.setValid(fields.eventDate);
            }
        }

        // 3. Event Time
        if (!fields.eventTime.value) {
            isValid = this.setInvalid(fields.eventTime, 'Please select a delivery time.') && isValid;
        } else {
            this.setValid(fields.eventTime);
        }

        return isValid;
    },

    /**
     * Validate AI Promotion inputs
     */
    validateAIPromotion(themeSelect, themeVal, customNotesInput, customNotesVal) {
        let isValid = true;

        if (!themeVal) {
            isValid = this.setInvalid(themeSelect, 'Please select a promotional theme.');
        } else {
            this.setValid(themeSelect);
        }

        if (customNotesVal && customNotesVal.trim().length > 100) {
            isValid = this.setInvalid(customNotesInput, 'Custom instructions cannot exceed 100 characters.');
        } else if (customNotesVal) {
            this.setValid(customNotesInput);
        } else {
            this.clearState(customNotesInput);
        }

        return isValid;
    }
};
