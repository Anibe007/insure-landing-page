const toggleLink = document.getElementById('toggle-link');
    const formTitle = document.getElementById('form-title');
    const usernameGroup = document.getElementById('username-group');
    const submitBtn = document.getElementById('submit-btn');
    const authForm = document.getElementById('auth-form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    let isLogin = true;

    toggleLink.addEventListener('click', () => {
      isLogin = !isLogin;
      formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
      usernameGroup.style.display = isLogin ? 'none' : 'block';
      submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
      toggleLink.textContent = isLogin ? 'Sign Up' : 'Login';
      toggleLink.previousSibling.textContent = isLogin ? "Don't have an account? " : "Already have an account? ";
    });

    authForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      emailError.textContent = '';
      usernameError.textContent = '';
      passwordError.textContent = '';

      let valid = true;

      if (!emailInput.value.includes('@')) {
        emailError.textContent = 'Enter a valid email.';
        valid = false;
      }

      if (!isLogin && usernameInput.value.trim().length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters.';
        valid = false;
      }

      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
      }

      if (valid) {
        alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
        authForm.reset();
      }
    });