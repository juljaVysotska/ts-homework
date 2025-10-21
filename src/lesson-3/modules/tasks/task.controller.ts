import { TaskService } from './task.service';
import { Bug, Epic, FilterParams, InstanceType, NewTask, Story, Subtask, TasksTypes, UnlinkedTask } from './task.types';

export class TaskController {
    taskService: TaskService;

    constructor(tasks: TasksTypes[]) {
        this.taskService = new TaskService(tasks);
    }

    getAll() {
        return this.taskService.getAll();
    }

    getById(id: string) {
        return this.taskService.getTaskById(id);
    }

    create(type: InstanceType, taskDetail: NewTask): UnlinkedTask | Subtask | Bug | Story | Epic {
        return this.taskService.createNewInstance({ type, taskDetail });
    }

    delete(id: string) {
        return this.taskService.deleteTaskById(id);
    }

    // update(id: string, newDetails: TaskDetails,) {
    //     return this.taskService.updateTaskDetails(id, newDetails);
    // }

    filter(filterParams: FilterParams) {
        return this.taskService.filterArray(filterParams);
    }

    // checkIsDoneBeforeDeadline(id: string) {
    //     return this.taskService.checkIsDoneBeforeDeadline(id);
    // }
}