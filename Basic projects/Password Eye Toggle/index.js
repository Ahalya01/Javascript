let passwordInput = document.getElementById("passwordInput");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.className = "fa-solid fa-eye";  // Change icon to 'eye'
    } else {
        passwordInput.type = "password";
        toggleIcon.className = "fa-solid fa-eye-slash";  // Change icon to 'eye-slash'
    }
}
