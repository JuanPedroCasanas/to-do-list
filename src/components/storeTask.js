import { renderTask } from './renderTask';

export function storeTask(newTask, taskManager) {
  taskManager.taskArray.push(newTask);
  renderTask(newTask);
}