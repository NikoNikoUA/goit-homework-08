import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

onPageLoading();

function onPageLoading(event) {
  const existingMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (existingMessage) {
    formData = JSON.parse(existingMessage) || {};
    input.value = formData.email || '';
    textarea.value = formData.message || '';
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(formData);
}
