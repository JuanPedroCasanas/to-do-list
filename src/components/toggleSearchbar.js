export function toggleSearchBar(isNavbar = false) {
  const searchBar = document.getElementsByClassName('searchBar')[0];
  const active = document.getElementsByClassName('active')[0];
  if (active === undefined && !isNavbar) {
    searchBar.classList.add('active');
    return;
  } else {
    searchBar.classList.remove('active');
    return;
  }
}