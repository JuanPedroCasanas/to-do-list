export function createButton (text, id, action){
  let button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('id', id);
  button.addEventListener('click', action);
  return button;
};