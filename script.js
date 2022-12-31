const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');


const showError = (input, message) => {

    const formField = input.parentElement;
  
    formField.classList.remove('success');
    formField.classList.add('error');
  
    const error = formField.querySelector('small');
    error.textContent = message;
    error.fontFamily = "Bahnschrift Condensed";
    error.style.color="DarkRed";
    error.style.fontSize = "14px" ;
   
};

const showSuccess = (input) => {
    
    const formField = input.parentElement;

 
    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUsername = () => {

    let valid = false;

    const min = 1,
        max = 30;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl,  'Username cannot be blank.');
        usernameEl.style.borderColor = "red";
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
        usernameEl.style.borderColor = "red";
    } else {
        showSuccess(usernameEl);
        usernameEl.style.borderColor = "grey";
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
        emailEl.style.borderColor = "red";
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
        emailEl.style.borderColor = "red";
    } else {
        showSuccess(emailEl);
        emailEl.style.borderColor = "grey";
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
        passwordEl.style.borderColor = "red";
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        passwordEl.style.borderColor = "red";
    } else {
        showSuccess(passwordEl);
        passwordEl.style.borderColor = "grey";
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
  
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
        confirmPasswordEl.style.borderColor = "red";
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
        confirmPasswordEl.style.borderColor = "red";
    } else {
        showSuccess(confirmPasswordEl);
        confirmPasswordEl.style.borderColor = "grey";
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;




form.addEventListener('submit', function (e) {
  
    e.preventDefault();


    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

   
    if (isFormValid) {
        window.location.href = "main.html"
    }
});


form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});