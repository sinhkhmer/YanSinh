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
                feedback.textContent = 'លិខិត​សម្គាល់​មិន​ត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។';
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
