const form = document.getElementById('exam');
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateInputs()){
        form.submit();
    }


});



function validateInputs() {
    let isValid = true;

    // Validate username (Alphabets only)
    const usernameValue = username.value.trim();
    if (!/^[A-Za-z]+$/.test(usernameValue)) {
        showError(username, 'Username must contain alphabets only');
        isValid = false;
    } else {
        showSuccess(username);
    }

    // Validate email
    const mailValue = mail.value.trim();
    if (!isValidEmail(mailValue)) {
        showError(mail, 'Invalid email address');
        isValid = false;
    } else {
        showSuccess(mail);
    }

    // Validate password
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        showError(password, 'Password is required');
        isValid = false;
    }
    else if(passwordValue.length<8){
        showError(password,'password must be atleast 8 characters');
        isValid = false;
        
        
    } else {
        showSuccess(password);
    }

    // Validate confirm password
    const cpasswordValue = cpassword.value.trim();
    if (cpasswordValue === '') {
        showError(cpassword, 'Confirm Password is required');
        isValid = false;
    } else if (cpasswordValue !== passwordValue) {
        showError(cpassword, 'Passwords do not match');
        isValid = false;
    } else {
        showSuccess(cpassword);
    }

    // Validate contact number (numbers only)
    const numberValue = number.value.trim();
    if (!/^[0-9]+$/.test(numberValue)) {
        showError(number, 'Contact number must contain numbers only');
        isValid = false;
    } 
    else if(numberValue.length !==10){
        showError(number,'please enter 10 numbers');
        isValid = false;

    }else {
        showSuccess(number);
    }

    return isValid;
}

function showError(input, errorMessage) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.textContent = errorMessage;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function showSuccess(input) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.textContent = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
