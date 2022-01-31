import { renderPopup } from './renderPopup';
import { renderEditionFields } from './renderEditionFields';
import { storeTask } from './storeTask';
import { deleteTask } from './deleteTask';

export const taskManager = {
  taskArray: [],

  saveLocalStorage: () => {
    localStorage.setItem('taskArray', JSON.stringify(taskManager.taskArray));
  },

  loadLocalStorage: () => {
    const storage = JSON.parse(localStorage.getItem('taskArray') || '[]');
    storage.forEach((e) => {
      taskManager.storeTask(e);
    })
  },

  storeTask: (newTask) => {
    storeTask(newTask, taskManager)
    taskManager.saveLocalStorage();
  },

  deleteTask: (task, edit = false) => {
    deleteTask(task, taskManager, edit)
    taskManager.saveLocalStorage();
  },

  openTask: (task) => {
    renderPopup(task);
  },

  editTask: (task) => {
    renderEditionFields(task);
  }
};