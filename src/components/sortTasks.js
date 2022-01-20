import { taskManager } from './taskManager';
import { clearTaskDisplay } from './clearTaskDisplay';
import { renderTask } from './renderTask';

export function sortTasks(sortBy) {
  const sortParameter = sortBy.value;
  const sortingCheckbox = document.getElementById('sortingCheckbox');
  const sortingOrder = (sortingCheckbox.checked) ? [1, 0] : [0, 1];
  
  taskManager.taskArray.sort((a, b) => {
    if (a[sortParameter] < b[sortParameter]) { return sortingOrder[0]; }
    if (a[sortParameter] > b[sortParameter]) { return sortingOrder[1]; }
    return 0;
  })
  clearTaskDisplay();
  for (let i = taskManager.taskArray.length - 1; i != -1; i--) {
    renderTask(taskManager.taskArray[i]);
  }
}
