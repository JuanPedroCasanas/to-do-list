import { createTask } from './components/createTask';
import { taskManager } from './components/taskManager';
import { handleEventListeners } from './components/handleEventListeners';
import './style.css';

handleEventListeners();
taskManager.loadLocalStorage();