import { taskManager } from './taskManager';
import { createButton } from './createButton';

const taskMethods = {
  get sayName() {
    console.log(this.name);
  },
  get delete() {
    taskManager.deleteTask(this);
  }
}

export function createTask(name, description, date, due) {
  return Object.create(taskMethods, {
    name: {
      value: name,
    },
    description: {
      value: description,
    },
    date: {
      value: date,
    },
    due: {
      value: due,
    },
  })
}