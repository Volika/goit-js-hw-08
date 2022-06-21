import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formInput = {
    "email": '',
    "message": '',
};

currentFormData();

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log('Submit form');

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
    //  console.log(formInput);
}

function currentFormData() {
    const formInputCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formInputCurrent) {
        const email = document.querySelector('.feedback-form input');
        const message = document.querySelector('.feedback-form textarea');
        email.value = formInputCurrent.email;
        message.value = formInputCurrent.message;     
        console.log(formInputCurrent);
    }

}