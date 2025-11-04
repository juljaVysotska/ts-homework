import { Priority, TaskBody, TaskType } from '../task.types';
import { Task } from './task.model';

export class Bug extends Task {
  type = TaskType.bug;

  constructor(
    data: TaskBody,
    public parentId: string | null = null,
    public priority: Priority = Priority.low,
  ) {
    super(
      data.title,
      data.description,
      data.status,
      data.deadline,
      data.createdAt,
      priority,
    );
    this.id = data.id ?? crypto.randomUUID();
  }
}
