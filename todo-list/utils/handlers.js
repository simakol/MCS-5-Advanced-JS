import { refs } from './consts';
import { createTaskItem } from '../templates/taskListTemplate';
import * as apiService from '../services/api';
import Notiflix from 'notiflix';

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const taskValue = form.elements.task.value.trim();

  apiService
    .postNewTask({
      text: taskValue,
      isDone: false,
    })
    .then(createdTask => {
      refs.list.insertAdjacentHTML('beforeend', createTaskItem(createdTask));
    })
    .catch(err => {
      console.error(err);
      Notiflix.Notify.failure(err.message);
    })
    .finally(() => form.reset());
}

function handleTaskClick(event) {
  if (event.target.tagName === 'SPAN' || event.target.tagName === 'LI') {
    const liEl = event.target.closest('li');
    const liId = Number(liEl.dataset.id);

    apiService
      .updateTask(liId, { isDone: !liEl.classList.contains('line-through') })
      .then(() => liEl.classList.toggle('line-through'))
      .catch(err => {
        console.error(err);
        Notiflix.Notify.failure(err.message);
      });
  } else if (event.target.tagName === 'BUTTON') {
    const liEl = event.target.closest('li');
    const liId = Number(liEl.dataset.id);

    apiService
      .deleteTask(liId)
      .then(() => liEl.remove())
      // .then(_ => liEl.remove())
      .catch(err => {
        console.error(err);
        Notiflix.Notify.failure(err.message);
      });
  }
}

export { handleFormSubmit, handleTaskClick };
