import * as z from 'zod';
import tasks from './tasks.json';
import { unitedSchema } from './modules/tasks/task.types';

const tasksArray = z.array(unitedSchema);

export const data = tasksArray.parse(tasks);
