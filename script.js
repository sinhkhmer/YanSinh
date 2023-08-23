// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform your login validation here
    if (username === 'sinh@123' && password === 'aR4@fgd#shdj18dET26') {
        // Redirect to the welcome page on successful login
        window.location.href = 'welcome.html';
    } else {
        alert('លិខិត​សម្គាល់​មិន​ត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។');
    }
});

