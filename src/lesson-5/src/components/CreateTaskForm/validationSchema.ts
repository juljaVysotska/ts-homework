import { type NewTaskBody } from '../../types';

export const newTaskDefaultValueSchema: NewTaskBody = {
  title: '',
  description: '',
  status: 'todo',
  deadline: new Date(),
  priority: 'low',
};
