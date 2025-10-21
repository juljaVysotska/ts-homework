import * as z from 'zod';
import tasks from './tasks.json';
import { TaskSchema } from './modules/tasks/task.types';

const tasksArray = z.array(TaskSchema);
export const data = tasksArray.parse(tasks);
