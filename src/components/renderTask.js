import { createButton } from './createButton';
import { closePopup } from './closePopup';
import { hideOverflow } from './hideOverflow';
const content = document.getElementById('content');

export function renderTask(task, parentElem = content, popup = false) {
  const taskItem = document.createElement('div');
  const name = document.createElement('div');
  const description = document.createElement('div');
  const date = document.createElement('div');
  const due = document.createElement('div');
  const buttons = document.createElement('div');
  const deleteBtn = (() => {
    if (!popup) {
      return createButton('X', 'deleteBtn', () => { task.delete });
    } else {
      return createButton('Delete this task.', 'deleteBtn', () => { task.delete });
    }
  })()
  const extraBtn = (() => {
    if (!popup) {
      return createButton('', 'amplifyBtn', () => { task.open });
    } else {
      return createButton('Edit task', 'editBtn', () => { task.edit });
    }
  })();

  name.textContent = hideOverflow(`Name: ${task.name}`, 17);
  description.textContent = hideOverflow(`Description: ${task.description}`, 17);
  date.textContent = `Date: ${task.date}`;
  due.textContent = `Due: ${task.due}`;

  if (popup) {
    name.textContent = `Name: ${task.name}`;
    description.textContent = `Description: ${task.description}`;
    date.textContent = `Date: ${task.date}`;
    due.textContent = `Due: ${task.due}`;
    taskItem.classList.add('taskPopup');
    deleteBtn.id = 'deleteBtnPopup';
    deleteBtn.addEventListener('click', () => { closePopup() })
    buttons.classList.add('tButtonsPopup');
  }
  buttons.classList.add('tButtons');
  taskItem.classList.add('taskItem');
  taskItem.id = task.name;
  name.classList.add('tName');
  description.classList.add('tDesc');
  date.classList.add('tDate');
  due.classList.add('tDue');

  buttons.appendChild(extraBtn);
  buttons.appendChild(deleteBtn);

  if (popup) {
    taskItem.appendChild(name);
    taskItem.appendChild(description);
    taskItem.appendChild(date);
    taskItem.appendChild(due);
    taskItem.appendChild(buttons);
  } else {
    taskItem.appendChild(buttons);
    taskItem.appendChild(name);
    taskItem.appendChild(description);
    taskItem.appendChild(date);
    taskItem.appendChild(due);
  }

  parentElem.appendChild(taskItem);
}