import { searchTasks } from './searchTasks';
import { sortTasks } from './sortTasks';
import { renderPopup } from './renderPopup';
import { handleHover } from './handleHover';

export function handleEventListeners() {
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('change', () => { searchTasks() });

  const sortBy = document.getElementById('sortBy');
  sortBy.addEventListener('change', () => { sortTasks(sortBy) });

  const sortingCheckbox = document.getElementById('sortingCheckbox');
  sortingCheckbox.addEventListener('change', () => { sortTasks(sortBy) });

  const addNewTaskBtn = document.getElementById('newTaskBtn');
  addNewTaskBtn.addEventListener('click', () => { renderPopup({}, false) });

  handleHover();
}