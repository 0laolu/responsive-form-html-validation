// GETTING THE REQUIRED ELEMENTS
const formElement = document.querySelector('.form-section');
const firstNameEl = document.getElementById('first-name');
const lastNameEl = document.getElementById('last-name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const errorIcon = document.querySelectorAll('.error-image');


// ADDDING THE SUBMIT LISTENER TO THE FORM ELEMENT
formElement.addEventListener('submit', function(event) {

// CONDITION TO PREVENT DEFAULT IF INPUT FIELDS ARE EMPTY AND IF EMAIL IS NOT APPROPRIATE
        if(emailEl.value.match(validEmail)) {
            formElement.submit()
        } else {
            event.preventDefault();
            validateInputs();

// HOW THE EMAIL INPUT SHOULD DISPLAY IF EMAIL IS NOT APPROPRIATE
            if(!emailEl.value.match(validEmail)) {
                emailEl.style.border = '2px solid hsl(0, 90%, 60%)';
                showError(emailEl, 'Provide a valid email address');
                emailEl.value = ''
                emailEl.classList.add('error-active');
                emailEl.placeholder = 'email@example/com';
            }
        }
});

// THE SHOWERROR FUNCTION DECLARATION
const showError = (element, message) => {
    const inputContainer = element.parentElement;
    const errorElement = inputContainer.querySelector('.error');
    errorElement.textContent = message;
}

// THE ISVALIDEMAIL FUNCTION DECLARATION
const isValidEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re;
}

// STORING THE ISVALIDEMAIL FUNCTION IN A VARIABLE VALIDEMAIL
const validEmail = isValidEmail();

// THE VALIDINPUTS FUNCTION DECLARATION
let validateInputs = () => {
    if(firstNameEl.value === '') {
        firstNameEl.placeholder = '';
        firstNameEl.style.border = '2px solid hsl(0, 90%, 60%)';
        showError(firstNameEl, 'First name cannot be empty')
        errorIcon.forEach(errorImg => {
            errorImg.classList.add('active')
        });
    };

    if(lastNameEl.value === '') {
        lastNameEl.placeholder = '';
        lastNameEl.style.border = '2px solid hsl(0, 90%, 60%)';
        showError(lastNameEl, 'Last name cannot be empty')
        errorIcon.forEach(errorImg => {
            errorImg.classList.add('active')
        });
    };

    if(emailEl.value === '') {
        emailEl.style.border = '2px solid hsl(0, 90%, 60%)';
        email.placeholder = ''
        showError(emailEl, 'Looks like this is not an email');
        errorIcon.forEach(errorImg => {
            errorImg.classList.add('active')
        });
    } 

    if(passwordEl.value === '') {
        passwordEl.placeholder = '';
        passwordEl.style.border = '2px solid hsl(0, 90%, 60%)';
        showError(passwordEl, 'Password cannot be empty');
        errorIcon.forEach(errorImg => {
            errorImg.classList.add('active')
        });
    };
}



