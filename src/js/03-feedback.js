import throttle from 'lodash.throttle';

// const LOCAL_STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const textarea = document.querySelector('textarea');

// form.addEventListener('submit', onFormSubmit, 500);
// textarea.addEventListener('input', throttle(onTextAreaInput, 500));

// onPageLoading();

// function onPageLoading() {
//   const existingMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
//   if (existingMessage) {
//     textarea.value = existingMessage;
//   }
// }
// function onTextAreaInput(event) {
//   localStorage.setItem(LOCAL_STORAGE_KEY, event.target.value);
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.target.reset();
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
// }

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

onPageLoading();

function onPageLoading() {
  const existingMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (existingMessage) {
    const newStaticObject = JSON.parse(existingMessage);
    console.log(newStaticObject);
    newStaticObject.name = formData.name;
    newStaticObject.value = formData.value;
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
