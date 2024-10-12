import { refs } from '../utils/consts';
import * as apiService from '../services/api';
import Notiflix from 'notiflix';

function createTaskItem(task) {
  return `<li data-id="${task.id}" class="${task.isDone ? 'line-through' : ''}"><div><span>${
    task.text
  }</span><button>Delete</button></div></li>`;
}

function fillTasksListFromDB() {
  apiService
    .getTasks()
    .then(tasks => {
      const tasksAmount = tasks.length;

      Notiflix.Notify.info(`You have ${tasksAmount} task${tasksAmount > 1 ? 's' : ''}.`);

      // check tasks (arr in DB is empty)
      if (tasksAmount === 0) {
        return;
      }

      // create markup from DB data
      const tasksMarkup = tasks.map(createTaskItem).join('');

      // insert markup to HTML tasks list
      refs.list.innerHTML = tasksMarkup;
    })
    .catch(err => {
      console.error(err);
      Notiflix.Notify.failure(err.message);
    })
    .finally(() => refs.loader.classList.add('hidden'));
}

export { createTaskItem, fillTasksListFromDB };
