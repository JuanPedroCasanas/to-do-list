import { applyTaskmethods } from './applyTaskMethods';
import { renderTask } from './renderTask';

export function storeTask(newTask, taskManager) {
  taskManager.taskArray.push(newTask);
  applyTaskmethods(newTask);
  renderTask(newTask);
}