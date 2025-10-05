import { data } from '../parsedData';

export const checkIsDoneBeforeDeadline = (taskId: string): boolean | null => {
  const task = data.find((item) => item.id === taskId);

  if (task) {
    const today = Date.now();
    const deadline =
      task.deadline instanceof Date
        ? new Date(task.deadline).valueOf()
        : Date.parse(task.deadline).valueOf();

    return today - deadline < 0 && task.status === 'done' ? true : false;
  }

  return null;
};
