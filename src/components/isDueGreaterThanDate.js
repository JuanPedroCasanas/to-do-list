import { formatCurrentDate } from './formatCurrentDate';
import { createTask } from './createTask';
import { taskManager } from './taskManager';
import { closePopup } from './closePopup';
import { editTask } from './editTask';

export function isDueGreaterThanDate(editionFields, isNewTask, task) {
  if (isNewTask === true && editionFields.editDue.value > formatCurrentDate()) {
    taskManager.storeTask(createTask(editionFields.editName.value,
      editionFields.editDesc.value, editionFields.editDue.value));
    closePopup();
  } else if (isNewTask === false && editionFields.editDue.value > task.date) {
    editTask(task, editionFields);
  } else {
    alert(`The due date must be greater than the task's date or the current date.`)
  }
}