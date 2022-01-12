import { createButton } from './createButton';
const content = document.getElementById('content');

export function renderTask(task) {
  const taskItem = document.createElement('div');
  const name = document.createElement('div');
  const description = document.createElement('div');
  const date = document.createElement('div');
  const due = document.createElement('div');
  const deleteBtn = createButton('X', 'deleteBtn', () => { task.delete });

  name.textContent = `Name: ${task.name}`
  description.textContent = `Description: ${task.description}`
  date.textContent = `Date: ${task.date}`
  due.textContent = `Due: ${task.due}`

  taskItem.classList.add('taskItem');
  taskItem.id = task.name;

  taskItem.appendChild(name);
  taskItem.appendChild(description);
  taskItem.appendChild(date);
  taskItem.appendChild(due);
  taskItem.appendChild(deleteBtn)
  content.appendChild(taskItem);
}