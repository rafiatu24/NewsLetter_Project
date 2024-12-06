document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const successModal = document.getElementById('success-modal');
    const confirmationEmail = document.getElementById('confirmation-email');
    const dismissBtn = document.getElementById('dismiss-btn');

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    function showError(message) {
        emailError.textContent = message;
        emailInput.classList.add('error');
    }

    function clearError() {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }

    function showSuccessModal(email) {
        confirmationEmail.textContent = email;
        successModal.style.display = 'flex';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();

        const email = emailInput.value.trim();

        if (!email) {
            showError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            showError('Valid email required');
            return;
        }

        // If validation passes, show success modal
        showSuccessModal(email);
    });

    dismissBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        form.reset();
    });

    // Real-time validation
    emailInput.addEventListener('input', () => {
        const email = emailInput.value.trim();
        
        if (email && !validateEmail(email)) {
            showError('Valid email required');
        } else {
            clearError();
        }
    });
});