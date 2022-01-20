import { renderTask } from './renderTask';
import { clearTaskDisplay } from './clearTaskDisplay';
import { taskManager } from './taskManager';

const searchBar = document.getElementById('searchBar')

export function searchTasks() {
  let searchResults;
  searchResults = taskManager.taskArray.filter((e) => {
    return e.name.toLowerCase().includes(searchBar.value.toLowerCase());
  });

  clearTaskDisplay();

  for (let i = searchResults.length - 1; i != -1; i--) {
    renderTask(searchResults[i]);
  }
}