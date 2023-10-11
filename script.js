        const loginForm = document.getElementById('login-form');
        const feedback = document.getElementById('feedback');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'sinh@123' && password === 'sinh@123') {
                feedback.textContent = '';
                window.location.href = 'ilm4ebsnlm42ninnnsinfisufeniwuUHIHsbi23BHIGBUFGBWIFUGBWIUGFBGWgubwiw9ghfugwisugvfuisbcisugfwi8uwghfiuwg.html';
            } else {
                feedback.textContent = 'លិខិត​សម្គាល់​មិន​ត្រឹមត្រូវ។';
            }
        });
        const togglePasswordButton = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');
        togglePasswordButton.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.volume = 1.0; 
    audio.muted = false;
    audio.play();
});



