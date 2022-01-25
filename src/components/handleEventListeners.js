import { searchTasks } from './searchTasks';
import { sortTasks } from './sortTasks';
import { renderPopup } from './renderPopup';
import { handleHover } from './handleHover';
import { toggleSearchBar } from './toggleSearchbar';

export function handleEventListeners() {
  const navbar = document.getElementById('navbar');
  navbar.addEventListener('mouseleave', () => { toggleSearchBar(true) });

  const searchIco = document.getElementsByClassName('search')[0];
  searchIco.addEventListener('click', () => { toggleSearchBar() });

  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', searchTasks);
  searchBar.addEventListener('mouseleave', toggleSearchBar);

  const sortBy = document.getElementById('sortBy');
  sortBy.addEventListener('change', () => { sortTasks(sortBy) });

  const sortingCheckbox = document.getElementById('sortingCheckbox');
  sortingCheckbox.addEventListener('change', () => { sortTasks(sortBy) });

  const addNewTaskBtn = document.getElementById('newTaskBtn');
  addNewTaskBtn.addEventListener('click', () => { renderPopup({}, false) });

  handleHover();
}