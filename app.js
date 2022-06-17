const formElement = document.querySelector('.form-section');
const firstNameEl = document.getElementById('first-name');
const lastNameEl = document.getElementById('last-name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const inputFields = document.querySelectorAll('.input-field')
console.log(inputFields);

formElement.addEventListener('submit', function(event) {
    
    inputFields.forEach(eachInput => {
        if(eachInput.value === '') {
            event.preventDefault();
            validateInputs();
        }
    });
});

const showError = (element, message) => {
    const inputContainer = element.parentElement;
    const errorElement = inputContainer.querySelector('.error');
    errorElement.textContent = message;
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validateInputs = () => {
    if(firstNameEl.value === '') {
        firstNameEl.placeholder = '';
        firstNameEl.style.border = '3px solid red'
        showError(firstNameEl, 'First name cannot be empty')
    };

    if(lastNameEl.value === '') {
        lastNameEl.placeholder = '';
        lastNameEl.style.border = '3px solid red'
        showError(lastNameEl, 'Last name cannot be empty')
    };

    if(emailEl.value === '' && isValidEmail(emailEl) != true) {
        emailEl.style.border = '3px solid red'
        emailEl.classList.add('error-active');
        emailEl.placeholder = 'email@example/com';
        showError(emailEl, 'Looks like this is not an email');
    }; 

    if(passwordEl.value === '') {
        passwordEl.placeholder = '';
        passwordEl.style.border = '3px solid red'
        showError(passwordEl, 'Password cannot be empty');
    };
};
