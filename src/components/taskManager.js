import { renderTask } from './renderTask';

export const taskManager = {
  taskArray: [],
  storeTask: (newTask) => {
    taskManager.taskArray.push(newTask);
    renderTask(newTask);
  },

  deleteTask: (task) => {
    const toBeDeleted = taskManager.taskArray.indexOf(task, 0);
    const domElem = document.getElementById(task.name);
    if (toBeDeleted != -1) {
      taskManager.taskArray.splice(toBeDeleted, 1);
      domElem.parentNode.removeChild(domElem);
    }
  }
};