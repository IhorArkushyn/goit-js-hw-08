import throttle from 'lodash.throttle';

const submitForm = document.querySelector('.feedback-form');

submitForm.addEventListener('input', throttle(onInputData, 500));

const STORAGE_KEY = 'feedback-form-state';

function onInputData(event) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: submitForm.elements.email.value,
      message: submitForm.elements.message.value,
    })
  );
}

submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const savedData = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(savedData);
  console.log(
    parseData ?? {
      email: '',
      message: ''
    }
  );

  submitForm.reset();
  localStorage.removeItem(STORAGE_KEY);
}
