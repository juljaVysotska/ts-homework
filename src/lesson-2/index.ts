import { checkIsDoneBeforeDeadline } from './functions/checkIsDoneBeforeDeadline';
import { createNewTask } from './functions/createNewTask';
import { deleteTaskById } from './functions/deleteTaskById';
import { filterArray } from './functions/filterArray';
import { getTaskById } from './functions/getTaskById';
import { updateTaskDetails } from './functions/updateTaskDetails';

console.log(
  `--- 1. getTaskById ---\n`,
  `\n--- 1.1 task id is a1f9b3d7e4c8h2q5 ---\n`,
  getTaskById('a1f9b3d7e4c8h2q5'),

  `\n--- 1.1 task id is random string ---\n`,
  getTaskById('random string'),
);

console.log(
  `--- 2. createNewTask ---\n`,
  `\n--- 2.1 createNewTask only with title and deadline ---\n`,
  createNewTask({
    title: 'new task',
    deadline: '2025-10-05T14:30:00.000Z',
  }),

  `\n--- 2.1 createNewTask only with title, deadline, description and priority ---\n`,
  createNewTask({
    title: 'Oktoberfest promo',
    description: 'create new banner for oktober promotion',
    deadline: '12.09.2025',
    priority: 'high',
  }),
);

console.log(
  `--- 3. updateTaskDetails ---\n`,
  `\n--- 3.1 updateTaskDetails with existing id ---\n`,
  `\n BEFORE: \n`,
  getTaskById('d5n4k2b8t9v1x3z6'),
  `\n AFTER: \n`,
  updateTaskDetails('d5n4k2b8t9v1x3z6', {
    title: 'Conduct usability testing add some new details',
    status: 'done',
  }),
  `\n--- 3.2 updateTaskDetails with nonexisting id ---\n`,
  updateTaskDetails('random string', {
    title: 'Conduct usability testing add some new details',
    status: 'done',
  }),
);

console.log(
  `--- 4. deleteTaskById ---\n`,
  `\n--- 4.1 deleteTaskById by id ---\n`,
  deleteTaskById('d5n4k2b8t9v1x3z6'),
);

console.log(
  `--- 5. filterArray ---\n`,
  `\n--- 5.1 filterArray only by status ---\n`,
  filterArray({
    status: 'in_progress',
  }),
  `\n--- 5.2 filterArray only by priority ---\n`,
  filterArray({
    priority: 'high',
  }),
  `\n--- 5.3 filterArray by priority, status, createdAt ---\n`,
  filterArray({
    priority: 'high',
    createdAt: '2025-10-01T09:15:00Z',
    status: 'in_progress',
  }),
);

console.log(
  `--- 6. checkIsDoneBeforeDeadline ---\n`,
  `\n--- 6.1 checkIsDoneBeforeDeadline compared with Date.now() and status: done ---\n`,
  checkIsDoneBeforeDeadline('a1f9b3d7e4c8h2q5'),
);
