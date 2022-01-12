import { createButton } from './createButton';
import { closePopup } from './closePopup';
const content = document.getElementById('content');

export function renderTask(task, parentElem = content, popup = false) {
  const taskItem = document.createElement('div');
  const name = document.createElement('div');
  const description = document.createElement('div');
  const date = document.createElement('div');
  const due = document.createElement('div');
  const deleteBtn = (() => {
    if (!popup) {
      return createButton('X', 'deleteBtn', () => { task.delete });
    } else {
      return createButton('Delete this task.', 'deleteBtn', () => { task.delete });
    }
  })()

  const extraBtn = (() => {
    if (!popup) {
      return createButton('O', 'amplifyBtn', () => { task.open });
    } else {
      return createButton('E', 'editBtn', () => { task.edit });
    }
  })();

  name.textContent = `Name: ${task.name}`;
  description.textContent = `Description: ${task.description}`;
  date.textContent = `Date: ${task.date}`;
  due.textContent = `Due: ${task.due}`;

  if (popup) {
    taskItem.classList.add('taskPopup');
    deleteBtn.addEventListener('click', () => { closePopup() })
  }
  taskItem.classList.add('taskItem');
  taskItem.id = task.name;

  taskItem.appendChild(name);
  taskItem.appendChild(description);
  taskItem.appendChild(date);
  taskItem.appendChild(due);
  taskItem.appendChild(deleteBtn);
  taskItem.appendChild(extraBtn);
  parentElem.appendChild(taskItem);
}