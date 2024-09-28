import { taskList } from '../utils/consts';
import { refs } from '../utils/consts';
import * as storageService from '../services/storage';

let taskId = 0;

function createTaskItem({ text, isDone = false, taskId: id = taskId }) {
  // create task obj
  const taskObj = {
    text,
    isDone,
    taskId: id,
  };

  // increment task id (for unique id value)
  taskId += 1;

  // add new task to arr
  taskList.push(taskObj);

  const taskNumber = taskList.length;

  return `<li data-id="${taskObj.taskId}" class="${
    isDone ? 'line-through' : ''
  }"><span>${taskNumber}. ${text}</span><button>Delete</button></li>`;
}

function updateTaskItem(task, i) {
  return `<li data-id="${task.taskId}" class="${task.isDone ? 'line-through' : ''}"><span>${i}. ${
    task.text
  }</span><button>Delete</button></li>`;
}

function updateTaskList() {
  const newMarkup = taskList.reduce((markup, task, i) => markup + updateTaskItem(task, i + 1), '');

  refs.list.innerHTML = newMarkup;
}

function fillTasksListFromLS() {
  // get tasks arr from LS
  const taskListFromLS = storageService.loadTasks();

  // check tasks (tasks doesn't exist, empty LS or arr in LS is empty)
  if (taskListFromLS === null || taskListFromLS.length === 0) {
    return;
  }

  // create markup from LS data
  const tasksMarkup = taskListFromLS.map(createTaskItem).join('');

  // update current task id value. Depends on the last task object id + 1. For prevent id duplicates
  taskId = taskList[taskList.length - 1].taskId + 1;

  // insert markup to HTML tasks list
  refs.list.innerHTML = tasksMarkup;
}

export { createTaskItem, updateTaskList, fillTasksListFromLS };
