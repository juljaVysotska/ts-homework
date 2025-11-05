import { z } from 'zod';
import { Subtask } from './models/subtask.model';
import { Bug } from './models/bug.model';
import { Story } from './models/story.model';
import { Epic } from './models/epic.model';

const TaskTypeSchema = z.enum(['task', 'subtask', 'bug', 'story', 'epic']);
export const TaskType = TaskTypeSchema.enum;
export type TaskType = z.infer<typeof TaskTypeSchema>;

const StatusSchema = z.enum(['todo', 'in_progress', 'done']);
export const Status = StatusSchema.enum;
export type Status = z.infer<typeof StatusSchema>;

const PrioritySchema = z.enum(['low', 'normal', 'high']);
export const Priority = PrioritySchema.enum;
export type Priority = z.infer<typeof PrioritySchema>;

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

export type NewTaskBody = Omit<TaskBody, 'id' | 'createdAt'>;

const subtaskSchema = taskSchema
  .extend({
    type: z.literal('subtask'),
    parentId: z.string().nullable(),
  })
  .transform((data) => new Subtask(data, data.parentId));

const bugSchema = taskSchema
  .extend({
    type: z.literal('bug'),
    parentId: z.string().nullable(),
    priority: PrioritySchema,
  })
  .transform((data) => new Bug(data, data.parentId, data.priority));

const storySchema = taskSchema
  .extend({
    type: z.literal('story'),
    parentId: z.string().nullable(),
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

export type FilterParams = Partial<{
  status: Status;
  createdAt: Date;
  priority: Priority;
  type: TaskType;
}>;

export type TaskDetails = Partial<{
  title: string;
  description: string;
  status: Status;
  deadline: Date;
  priority: Priority;
}>;
