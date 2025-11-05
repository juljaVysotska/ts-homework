import type { NewTaskBody } from '../../types';

export const newTaskDefaultValueSchema: NewTaskBody = {
  title: '',
  description: '',
  status: 'todo',
  deadline: new Date().toISOString(),
  priority: 'low',
  createdAt: new Date().toISOString(),
};
