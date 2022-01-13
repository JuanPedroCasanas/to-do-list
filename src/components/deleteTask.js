export function deleteTask (task, taskManager) {
  const toBeDeleted = taskManager.taskArray.indexOf(task, 0);
  const domElem = document.getElementById(task.name);
  if (toBeDeleted != -1) {
    taskManager.taskArray.splice(toBeDeleted, 1);
    domElem.parentNode.removeChild(domElem);
  }
}