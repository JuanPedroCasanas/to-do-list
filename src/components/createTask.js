import { taskManager } from './taskManager';
import { createButton } from './createButton';

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

export function createTask(name, description, date, due) {
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
      value: date,
      writable: true,
    },
    due: {
      value: due,
      writable: true,
    },
  })
}