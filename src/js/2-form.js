const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const textarea = form.elements.message;
const email = form.elements.email;

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);

  textarea.value = parsedData.message;
  email.value = parsedData.email;

  formData.message = parsedData.message;
  formData.email = parsedData.email;
}

function setInLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('input', evt => {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }
  setInLocalStorage();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log('Form data:', formData);

    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
