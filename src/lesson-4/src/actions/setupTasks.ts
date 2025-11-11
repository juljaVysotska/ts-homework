import { getTaskHtml } from '../components/getTaskHtml';
import { getTasks } from '../server-util';

export const setupTasks = async (element: HTMLElement) => {
  const arrayOfTasks = await getTasks();
  const arrOfHtml = arrayOfTasks.map(getTaskHtml).join('');

  element.innerHTML = arrOfHtml;
};
