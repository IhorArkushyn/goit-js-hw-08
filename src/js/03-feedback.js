

import throttle from 'lodash.throttle';

const submitForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formFieldEmail = submitForm.elements.email;
const formFieldMessage = submitForm.elements.message;

submitForm.addEventListener('input', throttle(onInputData, 500));
submitForm.addEventListener('submit', onFormSubmit);


let parseValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

function onInputData() {
  parseValues = {
    email: formFieldEmail.value,
    message: formFieldMessage.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parseValues));
}


function onFormSubmit(event) {
  event.preventDefault();

  console.log(
    parseValues ?? {
      email: '',
      message: '',
    }
  );
 
  submitForm.reset();
  localStorage.removeItem(STORAGE_KEY);
}

 if (parseValues) {
   formFieldEmail.value = parseValues.email ?? '';
   formFieldMessage.value = parseValues.message ?? '';
 }