import { TaskController } from './modules/tasks/task.controller';
import { TaskType } from './modules/tasks/task.types';
import { data } from './parsedData';

const controller = new TaskController(data);

// ✅
console.log(controller.getAll());

// ✅
console.log(controller.getById('3'));

// ✅
console.log(controller.delete('1'));

// ✅
console.log(
  controller.filter({
    status: 'in_progress',
    type: 'subtask',
    priority: 'low',
  }),
);

// ✅
console.log(controller.checkIsOverdue('4'));

// ✅
console.log(
  controller.getById('1'),

  controller.update('1', {
    title: 'new title',
    description: 'some new description',
    deadline: new Date(2025, 11, 3),
    priority: 'low',
  }),
);

// ✅
console.log(
  controller.create(TaskType.bug, {
    title: 'Create page',
    description: 'Create page for something',
    status: 'todo',
    priority: 'low',
    deadline: new Date(2025, 11, 12),
  }),
);
