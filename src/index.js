import { createTask } from './components/createTask';
import { taskManager } from './components/taskManager';
import { handleEventListeners } from './components/handleEventListeners';
import './style.css';

handleEventListeners();

const test = createTask('JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'i am object', '2', '1');
const test2 = createTask('test2', 'i am asdasct', '1', '2');

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);

taskManager.storeTask(test2);
taskManager.storeTask(test);




