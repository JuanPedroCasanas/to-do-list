import { formatCurrentDate } from './formatCurrentDate';

export function createTask(name, description, due) {
  return {
    name: name,
    description: description,
    date: formatCurrentDate(),
    due: due,
  }
}