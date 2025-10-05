import { data } from '../parsedData';
import { Task } from '../types';

export const getTaskById = (taskId: string): Task | null => {
  const find = data.find((item) => item.id === taskId);
  return find || null;
};
