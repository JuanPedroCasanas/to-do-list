import { formatCurrentDate } from './formatCurrentDate';
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

export function createTask(name, description, due) {
  return Object.create(taskMethods, {
    name: {
      value: name,
      writable: true,
    },
    description: {
      value: description,
      writable: true,
    },
    date: {
      value: formatCurrentDate(),
      writable: false,
    },
    due: {
      value: due,
      writable: true,
    },
  })
}