import { createTask } from './components/createTask';
import { taskManager } from './components/taskManager';
import './style.css';

const test = createTask('JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'i am object', 'date', 'due');
const test2 = createTask('test2', 'i am asdasct', 'date', 'due');

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);




