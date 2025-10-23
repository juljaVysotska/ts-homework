import * as z from 'zod';

const TaskTypeSchema = z.enum(['task', 'subtask', 'bug', 'story', 'epic']);
export const TaskType = TaskTypeSchema.enum;
export type TaskType = z.infer<typeof TaskTypeSchema>;

const StatusSchema = z.enum(['todo', 'in_progress', 'done']);
const Status = StatusSchema.enum;
export type Status = z.infer<typeof StatusSchema>;

const PrioritySchema = z.enum(['low', 'normal', 'high']);
const Priority = PrioritySchema.enum;
export type Priority = z.infer<typeof PrioritySchema>;

abstract class Task {
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

export const taskSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  status: StatusSchema,
  deadline: z.coerce.date(),
  createdAt: z.coerce.date(),
  priority: PrioritySchema,
});

export type TaskBody = z.infer<typeof taskSchema>;

export const newTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: StatusSchema,
  deadline: z.coerce.date(),
  priority: PrioritySchema,
});
export type NewTaskBody = z.infer<typeof newTaskSchema>;

const subtaskSchema = taskSchema
  .extend({
    type: z.literal('subtask'),
    parentId: z.any(),
  })
  .transform((data) => new Subtask(data, data.parentId));

const bugSchema = taskSchema
  .extend({
    type: z.literal('bug'),
    parentId: z.any(),
    priority: PrioritySchema,
  })
  .transform((data) => new Bug(data, data.parentId, data.priority));

const storySchema = taskSchema
  .extend({
    type: z.literal('story'),
    parentId: z.any(),
    storyPoints: z.number(),
  })
  .transform((data) => new Story(data, data.parentId, 1));

const epicSchema = taskSchema
  .extend({
    type: z.literal('epic'),
    children: z.array(z.string()),
  })
  .transform((data) => new Epic(data, []));

export const unitedSchema = z.discriminatedUnion('type', [
  subtaskSchema,
  bugSchema,
  storySchema,
  epicSchema,
]);

export type UnitedSchema = z.infer<typeof unitedSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FilterParamsSchema = z
  .object({
    status: StatusSchema,
    createdAt: z.coerce.date(),
    priority: PrioritySchema,
    type: TaskTypeSchema,
  })
  .partial();

export type FilterParams = z.infer<typeof FilterParamsSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TaskDetailsSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    status: StatusSchema,
    deadline: z.coerce.date(),
    priority: PrioritySchema,
  })
  .partial();

export type TaskDetails = z.infer<typeof TaskDetailsSchema>;
