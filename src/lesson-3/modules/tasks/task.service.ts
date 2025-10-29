import {
  Bug,
  Epic,
  FilterParams,
  NewTaskBody,
  Story,
  Subtask,
  TaskDetails,
  TaskType,
  UnitedSchema,
} from './task.types';

export class TaskService {
  #tasks: UnitedSchema[];

  constructor(tasks: UnitedSchema[]) {
    this.#tasks = tasks;
  }

  getAll() {
    return this.#tasks;
  }

  // create new Task
  createNewInstance({
    type,
    taskDetail,
  }: {
    type: TaskType;
    taskDetail: NewTaskBody;
  }) {
    let task!: UnitedSchema;

    if (type === 'bug') {
      task = new Bug({ ...taskDetail, createdAt: new Date() });
    }

    if (type === 'story') {
      task = new Story({ ...taskDetail, createdAt: new Date() });
    }

    if (type === 'epic') {
      task = new Epic({ ...taskDetail, createdAt: new Date() });
    }

    if (type === 'subtask') {
      task = new Subtask({ ...taskDetail, createdAt: new Date() });
    }

    this.#tasks.push(task);
    return task;
  }

  // get by id
  getTaskById = (taskId: string): UnitedSchema | null => {
    const find = this.#tasks.find((item) => item.id === taskId);
    return find || null;
  };

  // // delete task by id
  deleteTaskById = (taskId: string): UnitedSchema[] => {
    const taskIndex = this.#tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    this.#tasks.splice(taskIndex, 1);
    return this.#tasks;
  };

  // update task by id
  updateTaskDetails = (
    taskId: string,
    newDetails: TaskDetails,
  ): UnitedSchema | null => {
    const task = this.getTaskById(taskId);
    if (task) {
      return task.updateTask(newDetails);
    }

    return null;
  };

  // filter by param
  filterArray = ({
    status,
    createdAt,
    priority,
    type,
  }: FilterParams): UnitedSchema[] => {
    const filteredData = this.#tasks.filter((task) => {
      const filteredByType = type ? task.type === type : true;
      const filteredByStatus = status ? task.status === status : true;
      const filteredByPriority = priority ? task.priority === priority : true;
      const filteredByCreatedAt = createdAt
        ? task.createdAt === createdAt
        : true;

      return (
        filteredByStatus &&
        filteredByPriority &&
        filteredByCreatedAt &&
        filteredByType
      );
    });

    return filteredData;
  };

  // check is done before deadline
  checkIsOverdue = (taskId: string): boolean | null => {
    const task = this.getTaskById(taskId);

    if (task) return task?.isOverdue();

    return null;
  };
}
