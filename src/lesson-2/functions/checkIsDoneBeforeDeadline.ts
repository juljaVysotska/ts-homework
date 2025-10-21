import { data } from '../parsedData';

export const checkIsDoneBeforeDeadline = (taskId: string): boolean | null => {
  const task = data.find((item) => item.id === taskId);

  if (task) {
    const today = new Date();
    const deadline = new Date(task.deadline);

    return today.valueOf() - deadline.valueOf() < 0 && task.status === 'done';
  }

  return null;
};
