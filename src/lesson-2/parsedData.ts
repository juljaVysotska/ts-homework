import * as z from 'zod';
import tasks from './tasks.json';
import { TaskSchema } from './types';

const tasksArray = z.array(TaskSchema);
export const data = tasksArray.parse(tasks);
