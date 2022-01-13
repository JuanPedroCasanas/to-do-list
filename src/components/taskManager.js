import { renderPopup } from './renderPopup';
import { renderEditionFields } from './renderEditionFields';
import { storeTask } from './storeTask';
import { deleteTask } from './deleteTask';

export const taskManager = {
  taskArray: [],
  storeTask: (newTask) => {
    storeTask(newTask, taskManager)
  },

  deleteTask: (task) => {
    deleteTask(task, taskManager)
  },

  openTask: (task) => {
    renderPopup(task);
  },

  editTask: (task) => {
    renderEditionFields(task);
  }
};