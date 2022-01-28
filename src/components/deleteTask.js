export function deleteTask(task, taskManager, popup = false) {
  const toBeDeleted = taskManager.taskArray.indexOf(task, 0);
  const domElem = document.getElementById(task.name);
  const answer = confirm(`Are you sure you want to delete ${task.name}?`);
  if (toBeDeleted != -1 && answer) {
    taskManager.taskArray.splice(toBeDeleted, 1);
    domElem.parentNode.removeChild(domElem);
  } else {
  }
}