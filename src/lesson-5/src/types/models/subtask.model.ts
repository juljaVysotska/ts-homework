import { TaskType, type TaskBody } from '..';
import { Task } from './task.model';

export class Subtask extends Task {
  type = TaskType.subtask;

  constructor(
    data: TaskBody,
    public parentId: string | null = null,
  ) {
    super(
      data.title,
      data.description,
      data.status,
      data.deadline,
      data.createdAt,
      data.priority,
    );
    this.id = data.id ?? crypto.randomUUID();
  }
}
