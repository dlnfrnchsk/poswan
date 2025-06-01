const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {        
        container.classList.remove('active');
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const validUsername = "pufferfish";
    const validPasswords = ["pufferfish1213", "pufferfish1215"];

    if (username === validUsername && validPasswords.includes(password)) {
        window.location.href = "/dashboard.html";
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});
