import { taskManager } from './taskManager';

const taskMethods = {
  get open() {
    taskManager.openTask(this);
  },
  get delete() {
    taskManager.deleteTask(this);
  },
  get edit() {
    taskManager.editTask(this);
  }
}

export function applyTaskmethods(task){
  Object.setPrototypeOf(task, taskMethods);
  return;
}