const TODO_STORAGE_KEY = 'todo list';

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY));
  } catch (err) {
    console.error(`JSON parsing error:${err}`);
    return null;
  }
}

function addTask(taskList) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(taskList));
}

// function toggleTaskIsDone(taskId) {
//   const tasksList = loadTasks();

//   const currentTask = tasksList.find(task => task.taskId === taskId);
//   currentTask.isDone = !currentTask.isDone;

//   addTask(tasksList);
// }

export { addTask, loadTasks };
