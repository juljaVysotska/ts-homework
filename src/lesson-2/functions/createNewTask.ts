import { DEFAULT_PRIORITY, DEFAULT_STATUS } from '../constants';
import { NewTask, Task } from '../types';

export const createNewTask = ({
  title,
  description,
  deadline,
  priority,
}: NewTask): Task => {
  const createdAt = new Date().toISOString();
  const id = crypto.randomUUID();

  return {
    id,
    createdAt,
    title,
    description: description || 'no data',
    deadline,
    priority: priority || DEFAULT_PRIORITY,
    status: DEFAULT_STATUS,
  };
};
