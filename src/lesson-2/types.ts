import * as z from 'zod';

const StatusSchema = z.enum(['todo', 'in_progress', 'done']);
export type Status = z.infer<typeof StatusSchema>;

const PrioritySchema = z.enum(['low', 'medium', 'high']);
export type Priority = z.infer<typeof PrioritySchema>;

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.optional(z.string()),
  createdAt: z.union([z.string(), z.date()]),
  status: StatusSchema.optional(),
  priority: PrioritySchema.optional(),
  deadline: z.union([z.string(), z.date()]),
});
export type Task = z.infer<typeof TaskSchema>;

export type NewTask = {
  title: string;
  deadline: string | Date;
  priority?: Priority;
  description?: string;
};

export type TaskDetails = Partial<Omit<Task, 'id' | 'createdAt'>>;

export type FilterParams = Partial<{
  status: Status;
  createdAt: string | Date;
  priority: Priority;
}>;
