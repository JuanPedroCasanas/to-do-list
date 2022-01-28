import { createButton } from './createButton';
import { formatCurrentDate } from './formatCurrentDate';
import { isDueGreaterThanDate } from './isDueGreaterThanDate';

export function renderEditionFields(task, newTask = false) {
  const taskEdit = document.createElement('div');
  const name = document.createElement('p');
  const editName = document.createElement('input');
  const desc = document.createElement('p');
  const editDesc = document.createElement('input');
  const date = document.createElement('p');
  const displayDate = document.createElement('input');
  const due = document.createElement('p');
  const editDue = document.createElement('input');
  const submitBtn = (() => {
    if (!newTask) {
      return createButton('Submit', 'submitBtn',
        () => { isDueGreaterThanDate({ editName, editDesc, editDue }, false, task) });
    } else {
      return createButton('Submit', 'submitBtn',
        () => { isDueGreaterThanDate({ editName, editDesc, editDue }, true); });
    }
  })();
  const parentElem = document.getElementsByClassName('popup')[0];
  const childElem = document.getElementsByClassName('taskPopup')[0]

  editName.type = 'text';
  editDesc.type = 'text';
  editDue.type = 'date';
  displayDate.type = 'date';

  editName.id = 'editName';
  editDesc.id = 'editDesc';
  displayDate.id = 'displayDate';
  editDue.id = 'editDue';

  name.textContent = 'Name:'
  desc.textContent = 'Description:'
  date.textContent = 'Date:'
  due.textContent = 'Due:'

  if (!newTask) {
    editName.value = task.name;
    editDesc.value = task.description;
    displayDate.value = task.date
    editDue.value = task.due;
  } else {
    editName.value = '';
    editDesc.value = '';
    displayDate.value = formatCurrentDate();
    editDue.value = '';
  }

  taskEdit.classList.add('taskEdit');

  taskEdit.appendChild(name);
  taskEdit.appendChild(editName);
  taskEdit.appendChild(desc);
  taskEdit.appendChild(editDesc);
  taskEdit.appendChild(date);
  taskEdit.appendChild(displayDate);
  taskEdit.appendChild(due);
  taskEdit.appendChild(editDue);
  taskEdit.appendChild(submitBtn);

  if (!newTask) {
    (childElem != '') ? parentElem.removeChild(childElem) : () => { };
  }

  parentElem.appendChild(taskEdit);
}