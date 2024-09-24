const STORAGE_KEY = 'feedback-form-data';
const feedbackFormEl = document.querySelector('.js-feedback-form');
const userFeedback = {};

fillFormFields(feedbackFormEl);

feedbackFormEl.addEventListener('change', handleFormChange);
feedbackFormEl.addEventListener('submit', handleFormSubmit);

function fillFormFields(form) {
  const dataFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (dataFromLS === null) {
    return;
  }

  for (const key in dataFromLS) {
    form.elements[key].value = dataFromLS[key];
    userFeedback[key] = dataFromLS[key]; // заповнює обʼєкт фідбеку данними з локал сторедж (тому що після перезавантаження сторінки цей обʼєкт очистився, тобто, створився заново)
  }
}

function handleFormChange(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  userFeedback[inputName] = inputValue; // записуємо те, що вводить користувач в обʼєкт фідбеку

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userFeedback));
}

function handleFormSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);

  event.target.reset();

  for (const key in userFeedback) {
    userFeedback[key] = ''; // очищаємо весь обʼєкт фідбеку після сабміту форми
  }
}
