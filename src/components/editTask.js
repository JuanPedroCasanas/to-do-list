import { taskManager } from './taskManager';
import { formatCurrentDate } from './formatCurrentDate';

export function editTask(task, inputFields){
  const editedTask = task;
  taskManager.deleteTask(task);
  editedTask.name = inputFields.editName.value;
  editedTask.description = inputFields.editDesc.value;
  editedTask.date = formatCurrentDate();
  editedTask.due = inputFields.editDue.value;
  taskManager.storeTask(editedTask);

}