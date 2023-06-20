// Form validation function
function validateForm(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  
    // Name validation
    if (nameInput.value === '') {
      nameError.textContent = 'Name is required.';
    } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
      nameError.textContent = 'Name should only contain letters.';
    }
  
    // Email validation
    if (emailInput.value === '') {
      emailError.textContent = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      emailError.textContent = 'Email is invalid.';
    }
  
    // Password validation
    if (passwordInput.value === '') {
      passwordError.textContent = 'Password is required.';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordInput.value)) {
      passwordError.textContent = 'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.';
    }
  
    // Confirm Password validation
    if (confirmPasswordInput.value === '') {
      confirmPasswordError.textContent = 'Confirm Password is required.';
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = 'Confirm Password should match the Password.';
    }
  }
  
  // Add event listener to form submit
  const form = document.getElementById('myForm');
  form.addEventListener('submit', validateForm);
  