import z from 'zod';
import { PrioritySchema, StatusSchema } from '../../../types';

export const newTaskDefaultValueSchema = z.object({
  title: z.string().min(3, 'Min. 3 symbols!'),
  description: z.string().min(3, 'Min. 3 symbols!'),
  status: StatusSchema.default('todo'),
  deadline: z.iso.date()
    .refine((value) => {
      console.log('v', value);
      const selectedDate = new Date(value);
      const today = new Date();
      return selectedDate >= today;
    }, {
      message: 'Date cannot be in the past'
    }),
  priority: PrioritySchema.default('low'),
});

export type NewTaskDefaultValueSchema = z.infer<typeof newTaskDefaultValueSchema>;
