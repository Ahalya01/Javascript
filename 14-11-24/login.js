document.getElementById("login_form").addEventListener("submit", submitLogin);

function submitLogin(event) {
    event.preventDefault();

    let userEmail = document.getElementById("login_email").value.trim();
    let userPassword = document.getElementById("login_password").value.trim();

    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const matchedUser = registeredUsers.find(user => user.userEmail === userEmail && user.userPassword === userPassword);

    if (matchedUser) {
        alert("Welcome back! Enjoy the music!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again or sign up.");
    }
}

