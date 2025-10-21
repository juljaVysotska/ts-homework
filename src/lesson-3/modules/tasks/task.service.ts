import { Bug, Epic, FilterParams, InstanceType, NewTask, Story, Subtask, TaskDetails, TasksTypes, UnlinkedTask } from './task.types';

export class TaskService {
    #tasks: TasksTypes[];

    constructor(tasks: TasksTypes[]) {
        this.#tasks = tasks;
    }

    getAll() {
        return this.#tasks;
    }

    // create new Task
    createNewInstance({
        type,
        taskDetail
    }: {
        type: InstanceType,
        taskDetail: NewTask;
    }) {
        let task: TasksTypes = new UnlinkedTask(taskDetail);

        if (type === InstanceType.SUBTASK) {
            task = new Subtask(taskDetail, '');
        }

        if (type === InstanceType.BUG) {
            task = new Bug(taskDetail, '', 'normal');
        }

        if (type === InstanceType.STORY) {

            task = new Story(taskDetail, 1);
        }

        if (type === InstanceType.EPIC) {
            task = new Epic(taskDetail, []);
        }

        this.#tasks.push(task);
        return task;

    }

    // get by id
    getTaskById = (taskId: string): TasksTypes | null => {
        const find = this.#tasks.find((item) => item.id === taskId);
        return find || null;
    };

    // delete task by id
    deleteTaskById = (taskId: string): TasksTypes[] => {
        const taskIndex = this.#tasks.findIndex((task) => task.id === taskId);

        if (taskIndex === -1) { throw new Error("Task not found"); }

        this.#tasks.splice(taskIndex, 1);
        return this.#tasks;
    };

    // update task by id
    // updateTaskDetails = (
    //     taskId: string,
    //     newDetails: TaskDetails,
    // ): TasksTypes | null => {
    //     const task = this.getTaskById(taskId);

    //     if (task) {
    //         // update class Instance ?
    //         return {
    //             ...task,
    //             ...newDetails,
    //         };
    //     }

    //     return null;
    // };

    // filter by param
    filterArray = ({
        status,
        createdAt,
        priority,
    }: FilterParams): TasksTypes[] => {
        const filteredData = this.#tasks.filter((task) => {
            const filteredByStatus = status ? task.status === status : true;
            const filteredByPriority = priority ? task.priority === priority : true;
            const filteredByCreatedAt = createdAt ? task.createdAt === createdAt : true;

            return filteredByStatus && filteredByPriority && filteredByCreatedAt;
        });

        return filteredData;
    };

    // // check is done before deadline
    // checkIsDoneBeforeDeadline = (taskId: string): boolean | null => {
    //     const task = this.getTaskById(taskId);

    //     if (task) {
    //         const today = new Date();
    //         const deadline = new Date(task.deadline);

    //         return today.valueOf() - deadline.valueOf() < 0 && task.status === 'done';
    //     }

    //     return null;
    // };

}