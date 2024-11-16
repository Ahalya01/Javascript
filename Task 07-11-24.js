
function validateRegistrationForm() {
    
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = ""; 

    
    const fullName = document.getElementById('userFullName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('userPassword').value.trim();
    const confirmPassword = document.getElementById('confirmUserPassword').value.trim();

    
    const namePattern = /^[a-zA-Z\s]+$/;
    const passwordPattern = /^[a-zA-Z0-9@-_%&*#$]{8,15}$/;

    
    if (!namePattern.test(fullName)) {
        errorElement.textContent = "Name must contain only letters and spaces.";
        return false;
    }

    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    if (!passwordPattern.test(password)) {
        errorElement.textContent = "Password format is incorrect. Use letters, numbers, and '@'.";
        return false;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return false;
    }

    alert("Form successfully submitted!");
    return true;
}