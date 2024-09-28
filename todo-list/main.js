import './common.css';
import './style.css';
import { fillTasksListFromLS } from './templates/taskListTemplate.js';
import { refs } from './utils/consts.js';
import { handleFormSubmit, handleTaskClick } from './utils/handlers.js';

// load tasks from localStorage
fillTasksListFromLS();

refs.mainForm.addEventListener('submit', handleFormSubmit);
refs.list.addEventListener('click', handleTaskClick);
