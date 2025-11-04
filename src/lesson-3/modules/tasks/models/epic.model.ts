import { TaskBody, TaskType } from '../task.types';
import { Task } from './task.model';

export class Epic extends Task {
  type = TaskType.epic;

  constructor(
    data: TaskBody,
    public children: string[] = [],
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

  addChild(childId: string) {
    this.children.push(childId);
  }

  getChildren() {
    return this.children;
  }
}
