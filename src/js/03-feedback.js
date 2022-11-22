import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

const FEEDBACK_FORM = 'formData';
let formData = {};

function onSubmitForm(e) {
  e.preventDefault();

  consoleForm(e.currentTarget);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
  formData = {};
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

dataFromLocalStorage();
function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

  if (!data) return;
  Object.keys(data).forEach(key => {
  formData[key] = data[key];
  const elData = form.querySelector(`[name="${key}"]`);
  elData.value = data[key];
  })
};

function consoleForm(form) {
  const feedbackData = Object.fromEntries(new FormData(form));
  console.log('feedbackData', feedbackData);
}