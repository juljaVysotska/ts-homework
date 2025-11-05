import { setupTasks } from './setupTasks';

export const updateTasks = () => {
  const tasksElement = document.querySelector<HTMLButtonElement>('#tasks')!;
  tasksElement.innerHTML = 'Loading...';
  setupTasks(tasksElement);
};
