import { TaskService } from './task.service';
import {
  FilterParams,
  NewTaskBody,
  TaskDetails,
  TaskType,
  UnitedSchema,
} from './task.types';

export class TaskController {
  taskService: TaskService;

  constructor(tasks: UnitedSchema[]) {
    this.taskService = new TaskService(tasks);
  }

  getAll() {
    return this.taskService.getAll();
  }

  getById(id: string) {
    return this.taskService.getTaskById(id);
  }

  create(type: TaskType, taskDetail: NewTaskBody): UnitedSchema {
    return this.taskService.createNewInstance({ type, taskDetail });
  }

  delete(id: string) {
    return this.taskService.deleteTaskById(id);
  }

  update(id: string, newDetails: TaskDetails) {
    return this.taskService.updateTaskDetails(id, newDetails);
  }

  filter(filterParams: FilterParams) {
    return this.taskService.filterArray(filterParams);
  }

  checkIsOverdue(id: string) {
    return this.taskService.checkIsOverdue(id);
  }
}
