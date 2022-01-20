export function handleHover() {
  const navbar = document.getElementById('navbar');
  const searchTxt = document.getElementsByClassName('search')[0];
  const searchBar = document.getElementById('searchBar');

  searchTxt.addEventListener('mouseenter', () => { searchBar.classList.add('hover') })
  searchBar.addEventListener('mouseenter', () => { searchBar.classList.add('hover') })
  searchBar.addEventListener('mouseleave', () => { searchBar.classList.remove('hover') })
  searchTxt.addEventListener('mouseleave', () => { searchBar.classList.remove('hover') })
}