import { TaskController } from './modules/tasks/task.controller';
import { data } from './parsedData';

const controller = new TaskController(data as any);

// ✅
// console.log(
//     controller.create(
//         InstanceType.STORY,
//         {
//             title: 'Create page',
//             description: 'Create page for something',
//             status: 'todo',
//             priority: 'low'
//         }
//     ).type,

//     (controller.create(
//         InstanceType.EPIC,
//         {
//             title: 'Create EPIC',
//             description: 'Create EPIC for something',
//             status: 'todo',
//             priority: 'low'
//         }
//     )).type
// );

// ✅
// console.log(
//     controller.getAll()
// );

// ✅
// console.log(
//     controller.getById('9a6f2b3c-1d4e-4f8a-8b3c-5d2a7e1f6b9c')
// );

// ✅
// console.log(
//     controller.delete('9a6f2b3c-1d4e-4f8a-8b3c-5d2a7e1f6b9c')
// );

// 
// console.log(
//     controller.getById('a1f9b3d7e4c8h2q5'),

//     controller.update('a1f9b3d7e4c8h2q5', {
//         title: 'new title',
//         description: 'some new description',
//         deadline: new Date(2025, 11, 3),
//         priority: 'low'
//     })
// );

// ✅
// console.log(
//     controller.filter({
//         // status: 'todo' // fix types
//         // priority: 'low'
//     })
// );