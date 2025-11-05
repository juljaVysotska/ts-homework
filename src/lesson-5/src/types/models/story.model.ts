import { TaskType, type TaskBody } from '..';
import { Task } from './task.model';

export class Story extends Task {
  type = TaskType.story;

  constructor(
    data: TaskBody,
    public parentId: string | null = null,
    public storyPoints: number = 1,
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

  getStoryPoints() {
    return this.storyPoints;
  }

  setStoryPoints(storyPoints: number) {
    if (storyPoints <= 0) return;
    this.storyPoints = storyPoints;
  }
}
