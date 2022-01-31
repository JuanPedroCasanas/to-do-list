import { closePopup } from './closePopup';

export function deleteTask(task, taskManager, edit) {
  const toBeDeleted = taskManager.taskArray.indexOf(task, 0);
  const domElem = document.getElementById(task.name);
  const answer = (() => {
    if (!edit) {
      return confirm(`Are you sure you want to delete ${task.name}?`)
    } else {
      return true;
    }
  })();
  if (toBeDeleted != -1 && answer) {
    taskManager.taskArray.splice(toBeDeleted, 1);
    domElem.parentNode.removeChild(domElem);
  } else {
  }
}