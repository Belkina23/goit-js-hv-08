import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
const FEEDBACK_FORM = 'feedback-form-state';
const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();