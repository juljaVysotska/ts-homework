import { Priority, Status, TaskType, type TaskDetails } from '..';

export abstract class Task {
  abstract type: TaskType;
  public id!: string;

  constructor(
    public title: string,
    public description: string,
    public status: Status,
    public deadline: Date,
    public createdAt: Date,
    public priority: Priority,
  ) {}

  getTaskType() {
    return this.type;
  }

  markAsDone() {
    this.status = Status.done;
  }

  changeStatus(status: Status) {
    this.status = status;
  }

  changePriority(priority: Priority) {
    this.priority = priority;
  }

  isOverdue() {
    const now = new Date();
    return this.status === 'done' && now > this.deadline;
  }

  updateTask(newData: TaskDetails) {
    Object.assign(this, newData);

    if (newData.status) {
      this.changeStatus(newData.status);
    }
    if (newData.priority) {
      this.changePriority(newData.priority);
    }

    return this;
  }
}
