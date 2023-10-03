/*
const form = document.getElementById('test');
//const username = document.getElementById('username');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
//const cpassword = document.getElementById('cpassword');
//const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateInputs()){
        form.login();
    }


});


function validateInputs() {
    let isValid = true;

   

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
    } else {
        showSuccess(password);
    }

    return isValid;

   

    
}

function showError(input, errorMessage) {
    const inputControl = input.parentElement;
    const errorElement = inputControl.querySelector('.error');
    errorElement.textContent = errorMessage;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function showSuccess(input) {
    const inputControl = input.parentElement;
    const errorElement = inputControl.querySelector('.error');
    errorElement.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

*/


const form = document.getElementById('console');
// const username = document.getElementById('username');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');
// const number = document.getElementById('number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        form.submit(); // Use form.submit() to submit the form
    }
});

function validateInputs() {
    let isValid = true;

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
    /*if (passwordValue === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else {
        showSuccess(password);
    }
    */
    if(passwordValue === ''){
        showError(password,'password is required');
        isValid=false;
            
    
    }else if(passwordValue.length<8){
        showError(password,'password must be atleast 8 characters');
        isValid=false;
            
            
    }else{
        showSuccess(password);
            
    }
    

    return isValid;
}

function showError(input, errorMessage) {
    const inputControl = input.parentElement;
    const errorElement = inputControl.querySelector('.error');
    errorElement.textContent = errorMessage;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function showSuccess(input) {
    const inputControl = input.parentElement;
    const errorElement = inputControl.querySelector('.error');
    errorElement.textContent = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
