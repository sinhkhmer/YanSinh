        const loginForm = document.getElementById('login-form');
        const feedback = document.getElementById('feedback');

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'sinh@123' && password === 'sinh@123') {
                feedback.textContent = '';
                window.location.href = 'welcome.html';
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
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Automatically play the background music
    backgroundMusic.play();

    // Set the volume to 100%
    backgroundMusic.volume = 0.5; // 1.0 represents 100% volume

    // Set up event listener to replay when it ends
    backgroundMusic.addEventListener('ended', function() {
        backgroundMusic.currentTime = 0; // Reset the playback to the beginning
        backgroundMusic.play();
    });
});

