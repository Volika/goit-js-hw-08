import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formInput = {
    // "email": '',
    // "message": '',
};

currentFormData();

function onFormSubmit(evt) {
    const formInputCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formInputCurrent);
    evt.preventDefault();
  
    evt.currentTarget.reset();
 
    localStorage.removeItem(STORAGE_KEY);
    formInput = {};

}

function onFormInput(evt) {
  formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function currentFormData() {
    const formInputCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    
    if ("email" in formInputCurrent) {
        email.value = formInputCurrent.email;
    }
   if ("message" in formInputCurrent) {
        message.value = formInputCurrent.message;
    }

    // email.value =  ? formInputCurrent.email : '';
    // message.value = formInputCurrent.message ? formInputCurrent.message : '';

}