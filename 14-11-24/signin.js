document.getElementById("signup_form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Regular expressions for validation
    const usernamePattern = /^[a-zA-Z]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._+-=]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^[a-zA-Z0-9@!#$%^&]{8,15}$/;

    // Clear error messages
    document.getElementById("username_error").textContent = "";
    document.getElementById("signup_email_error").textContent = "";
    document.getElementById("signup_password_error").textContent = "";
    document.getElementById("confirm_password_error").textContent = "";

    // Input values
    const username = document.getElementById("signup_username").value.trim();
    const email = document.getElementById("signup_email").value.trim();
    const password = document.getElementById("signup_password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();

    let isFormValid = true;

    // Validate username
    if (!usernamePattern.test(username)) {
        document.getElementById("username_error").textContent = "Username must contain at least 3 letters.";
        isFormValid = false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        document.getElementById("signup_email_error").textContent = "Please enter a valid email format (e.g., example@example.com).";
        isFormValid = false;
    }

    // Validate password
    if (!passwordPattern.test(password)) {
        document.getElementById("signup_password_error").textContent = "Password must be 8-15 characters long and can include letters, numbers, and special characters (@, !, #, $, %, ^, &).";
        isFormValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirm_password_error").textContent = "Passwords do not match. Please try again.";
        isFormValid = false;
    }

    // If form is valid, proceed to add user
    if (isFormValid) {
        registerUser(email, password);
    }
});

// Function to add user data to local storage
function registerUser(email, password) {
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push({ userEmail: email, userPassword: password });
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Registration successful! Welcome to Music Flow.");
    window.location.href = "login.html";
}
