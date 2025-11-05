export type Status = 'todo' | 'in_progress' | 'done';
export type Priority = 'low' | 'normal' | 'high';

export interface Task {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  deadline: Date;
  status: Status;
  priority: Priority;
}
