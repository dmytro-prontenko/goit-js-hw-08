import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};

const KEY_FORM = 'feedback-form-state';
let objToLocalStorage = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {};

if (objToLocalStorage) {
  refs.email.value = objToLocalStorage.email || '';
  refs.message.value = objToLocalStorage.message || '';
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  objToLocalStorage[event.target.name] = event.target.value;
  localStorage.setItem(KEY_FORM, JSON.stringify(objToLocalStorage));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!refs.email.value || !refs.message.value)
    return console.log('Enter all data');
  console.log(localStorage.getItem(KEY_FORM));
  event.currentTarget.reset();
  objToLocalStorage = {};
  localStorage.removeItem(KEY_FORM);
}
