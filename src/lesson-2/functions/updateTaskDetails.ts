import { data } from '../parsedData';
import { Task, TaskDetails } from '../types';

export const updateTaskDetails = (
  taskId: string,
  newDetails: TaskDetails,
): Task | null => {
  const find = data.find((item) => item.id === taskId);

  if (find) {
    return {
      ...find,
      ...newDetails,
    };
  }

  return null;
};
