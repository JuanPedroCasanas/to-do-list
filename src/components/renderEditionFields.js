import { createButton } from './createButton';
import { editTask } from './editTask';

export function renderEditionFields(task) {
  const taskEdit = document.createElement('div');
  const editName = document.createElement('input');
  const editDesc = document.createElement('input');
  const editDate = document.createElement('input');
  const editDue = document.createElement('input');
  const submitBtn = createButton('Submit', 'submitBtn',
    () => { editTask(task, { editName, editDesc, editDate, editDue }) });
  const parentElem = document.getElementsByClassName('popup')[0];
  const childElem = document.getElementsByClassName('taskPopup')[0]

  editName.type = 'text';
  editDesc.type = 'text';
  editDate.type = 'date';
  editDue.type = 'date';

  editName.id = 'editName';
  editDesc.id = 'editDesc';
  editDate.id = 'editDate';
  editDue.id = 'editDue';

  editName.value = task.name;
  editDesc.value = task.description;
  editDate.value = task.date;
  editDue.value = task.due;

  taskEdit.classList.add('taskEdit');

  taskEdit.appendChild(editName);
  taskEdit.appendChild(editDesc);
  taskEdit.appendChild(editDate);
  taskEdit.appendChild(editDue);
  taskEdit.appendChild(submitBtn);

  (childElem != '') ? parentElem.removeChild(childElem) : () => { };

  parentElem.appendChild(taskEdit);
}