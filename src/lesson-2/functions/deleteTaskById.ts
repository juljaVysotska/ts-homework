import { data } from '../parsedData';
import { Task } from '../types';

export const deleteTaskById = (taskId: string): Task[] => {
  const newArray = data.filter((task) => task.id !== taskId);

  return newArray;
};
