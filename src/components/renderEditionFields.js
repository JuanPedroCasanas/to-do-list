import { createButton } from './createButton';
import { createTask } from './createTask';
import { taskManager } from './taskManager';
import { editTask } from './editTask';
import { closePopup } from './closePopup';

export function renderEditionFields(task, newTask = false) {
  const taskEdit = document.createElement('div');
  const editName = document.createElement('input');
  const editDesc = document.createElement('input');
  //const editDate = new Date(); //document.createElement('input');
  const editDue = document.createElement('input');
  const submitBtn = (() => {
    if (!newTask) {
      return createButton('Submit', 'submitBtn',
        () => { editTask(task, { editName, editDesc, editDue }) });
    } else {
      return createButton('Submit', 'submitBtn',
        () => { taskManager.storeTask(createTask(editName.value, editDesc.value, editDue.value)); closePopup(); });
    }
  })();
  const parentElem = document.getElementsByClassName('popup')[0];
  const childElem = document.getElementsByClassName('taskPopup')[0]

  editName.type = 'text';
  editDesc.type = 'text';
  //editDate.type = 'date';
  editDue.type = 'date';

  editName.id = 'editName';
  editDesc.id = 'editDesc';
  //editDate.id = 'editDate';
  editDue.id = 'editDue';

  if (!newTask) {
    editName.value = task.name;
    editDesc.value = task.description;
    //editDate.value = editDate.getDate()//task.date;
    editDue.value = task.due;
  } else {
    editName.value = '';
    editDesc.value = '';
    //editDate.value = editDate.getDate()//'';
    editDue.value = '';
  }

  taskEdit.classList.add('taskEdit');

  taskEdit.appendChild(editName);
  taskEdit.appendChild(editDesc);
  //taskEdit.appendChild(editDate);
  taskEdit.appendChild(editDue);
  taskEdit.appendChild(submitBtn);

  if (!newTask) {
    (childElem != '') ? parentElem.removeChild(childElem) : () => { };
  }

  parentElem.appendChild(taskEdit);
}