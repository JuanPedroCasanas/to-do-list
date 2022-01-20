export function clearTaskDisplay(){
  const content = document.getElementById('content');
  const tasks = document.getElementsByClassName('taskItem');
  for (let i = tasks.length - 1; i != -1; i--){
    content.removeChild(tasks[i]);
  }
}