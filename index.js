//Variables
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('.confirmationError');
const lessThanError = document.querySelector('.lessThanError')
const Btn = document.querySelector('button');

Btn.addEventListener('click', (e)=> {
    e.preventDefault()
    validation()
});

function validation() {
    if(username.value === ''){
        error(username)
    }else{
        success(username)
    }

    if(email.value === ''){
        error(email)
    }else{
        success(email)
    }

    if(password.value === ''){
        error(password)
    }else if (password.value < 10) {
        lessThanError.innerText= 'password cannot be less than 8 characters';
        error(password)
    } else {
        success(password)
    }

    if(confirmPassword.value === ''){
        error(confirmPassword)
    }else if(confirmPassword.value !== password.value){
        confirmPasswordError.innerText = 'Passwords do not match';
        setTimeout(()=>confirmPasswordError.remove(), 3000)
        error(confirmPassword)
    }else{
        success(confirmPassword)
    }
}

function error(input){
    input.parentElement.classList.add('error')
}

function success(input){
    input.parentElement.classList.add('success')
}