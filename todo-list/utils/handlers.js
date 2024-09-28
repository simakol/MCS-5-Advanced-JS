import { refs, taskList } from './consts';
import { createTaskItem, updateTaskList } from '../templates/taskListTemplate';
import * as storageService from '../services/storage';

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const taskValue = form.elements.task.value.trim();

  refs.list.insertAdjacentHTML('beforeend', createTaskItem({ text: taskValue }));

  // add arr with new task to localStorage
  storageService.addTask(taskList);

  form.reset();
}

function handleTaskClick(event) {
  if (event.target.tagName === 'SPAN' || event.target.tagName === 'LI') {
    const liEl = event.target.closest('li');
    liEl.classList.toggle('line-through');

    const liId = Number(liEl.dataset.id);

    const currentTaskObj = taskList.find(task => task.taskId === liId);

    currentTaskObj.isDone = !currentTaskObj.isDone;

    // storageService.toggleTaskIsDone(currentTaskObj.taskId);
  } else if (event.target.tagName === 'BUTTON') {
    const liEl = event.target.closest('li');
    const liId = Number(liEl.dataset.id);

    const indexToDelete = taskList.findIndex(task => task.taskId === liId);

    taskList.splice(indexToDelete, 1);

    updateTaskList();
  }

  storageService.addTask(taskList); // оновлюємо список задач в ЛС після будь-якої дії з задачею (видалення або зміна статусу)
}

export { handleFormSubmit, handleTaskClick };
