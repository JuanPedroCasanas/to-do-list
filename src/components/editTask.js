import { taskManager } from './taskManager';

export function editTask(task, inputFields){
  const editedTask = task;
  taskManager.deleteTask(task);
  editedTask.name = inputFields.editName.value;
  editedTask.description = inputFields.editDesc.value;
  editedTask.due = inputFields.editDue.value;
  taskManager.storeTask(editedTask);

}