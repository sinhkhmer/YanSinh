
// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform your login validation here
    if (username === 'sinh@123' && password === 'sinh@123') {
        alert('Login successful');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
